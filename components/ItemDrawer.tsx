"use client";

import { Bookmark, Monogram } from "@/components/CardGrid";
import { agentPrompt, type SourceFile } from "@/lib/prompt";
import type { Item } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

export function ItemDrawer({
  item,
  saved,
  onClose,
  onToggleSave,
}: {
  item: Item | null;
  saved: boolean;
  onClose: () => void;
  onToggleSave: (item: Item) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="item-title"
      className="overflow-y-auto border-l border-line p-6 max-sm:p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onClose={onClose}
    >
      {item ? (
        <DrawerBody
          key={`${item.type}:${item.id}`}
          item={item}
          saved={saved}
          onClose={onClose}
          onToggleSave={onToggleSave}
        />
      ) : null}
    </dialog>
  );
}

function DrawerBody({
  item,
  saved,
  onClose,
  onToggleSave,
}: {
  item: Item;
  saved: boolean;
  onClose: () => void;
  onToggleSave: (item: Item) => void;
}) {
  const [css, setCss] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [notice, setNotice] = useState("");
  const [files, setFiles] = useState<SourceFile[] | null>(null);
  const pageUrl = item.url && !/21st\.dev/i.test(item.url) ? item.url : "";
  const install = item.install && !/21st\.dev/i.test(item.install) ? item.install : "";

  useEffect(() => {
    if (item.type !== "theme") return;
    const controller = new AbortController();
    fetch(`/api/theme?id=${encodeURIComponent(item.id)}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data: { css?: string; colors?: string[]; error?: string }) => {
        if (controller.signal.aborted) return;
        if (data.error) setCodeError(data.error);
        setCss(data.css ?? "");
        setColors(data.colors ?? []);
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") setCodeError("Could not load the theme CSS.");
      });
    return () => controller.abort();
  }, [item.id, item.type]);

  useEffect(() => {
    if (item.type !== "component") return;
    const controller = new AbortController();
    fetch(`/api/source?id=${encodeURIComponent(item.id)}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data: { files?: SourceFile[] }) => {
        if (!controller.signal.aborted) setFiles(data.files ?? []);
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") setFiles([]);
      });
    return () => controller.abort();
  }, [item.id, item.type]);

  const prompt = agentPrompt(item, files);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 1800);
    return () => window.clearTimeout(timer);
  }, [notice]);

  async function copy(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCodeError("");
      setNotice(label);
    } catch {
      setCodeError("Clipboard access was blocked. Select the text and copy it by hand.");
    }
  }

  const copied = (label: string) => notice === label;
  const hasCopy = item.type === "component" || item.type === "theme" || item.type === "icon" || item.type === "logo";

  async function copySvg() {
    if (item.type === "icon") {
      const response = await fetch(`/api/icons?id=${encodeURIComponent(item.id)}`);
      const data = (await response.json()) as { svg?: string; react?: string; error?: string };
      if (!data.svg) {
        setCodeError(data.error || "Could not copy the SVG.");
        return;
      }
      await copy(data.svg, "SVG copied");
      if (data.react) setCode(data.react);
      return;
    }
    if (!item.preview) return;
    const response = await fetch(item.preview);
    if (!response.ok) {
      setCodeError("Could not copy the SVG.");
      return;
    }
    await copy(await response.text(), "SVG copied");
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md bg-foreground/[0.06] px-1.5 py-0.5 text-[11px] font-medium text-muted capitalize">
          {item.type}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="-mr-1.5 flex size-8 items-center justify-center rounded-[10px] text-muted transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <h2 id="item-title" className="mt-4 text-[24px] leading-[1.15] font-semibold tracking-[-0.03em] text-balance">
        {item.name}
      </h2>
      {item.author ? (
        <p className="mt-2.5 flex items-center gap-2 text-[13px] text-muted">
          <Monogram label={item.author} size={20} />
          {item.author}
        </p>
      ) : null}

      {item.preview ? (
        <div className="squircle relative mt-5 overflow-hidden rounded-[14px] bg-card shadow-[0_1px_3px_rgb(0_0_0/0.25)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)]">
          {item.videoUrl && item.type === "video" ? (
            <video
              src={item.videoUrl}
              poster={item.preview}
              muted
              loop
              playsInline
              controls
              className="aspect-video w-full object-cover"
            />
          ) : (
            // Previews are local files with mixed formats, so they stay as plain img tags.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.preview}
              alt=""
              className={`w-full ${item.type === "icon" || item.type === "logo" ? "aspect-square object-contain p-10" : "aspect-[16/10] object-cover object-top"}`}
            />
          )}
        </div>
      ) : null}

      {colors.length > 0 ? (
        <ul className="mt-4 flex gap-2" aria-label="Theme colors">
          {colors.map((color) => (
            <li
              key={color}
              title={color}
              className="size-7 rounded-full shadow-[inset_0_0_0_1px_rgb(255_255_255/0.14)]"
              style={{ background: color }}
            />
          ))}
        </ul>
      ) : null}

      {item.description ? (
        <p className="mt-5 max-h-48 overflow-auto text-[14px] leading-relaxed whitespace-pre-wrap text-foreground/75">
          {item.description}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {item.type === "component" ? (
          <button type="button" onClick={() => copy(prompt, "Prompt copied")} className={primary}>
            <CopyIcon done={copied("Prompt copied")} />
            {copied("Prompt copied") ? "Copied" : "Copy prompt"}
          </button>
        ) : null}
        {item.type === "theme" ? (
          <button type="button" disabled={!css} onClick={() => copy(css, "CSS copied")} className={primary}>
            <CopyIcon done={copied("CSS copied")} />
            {copied("CSS copied") ? "Copied" : css || codeError ? "Copy CSS" : "Loading CSS…"}
          </button>
        ) : null}
        {item.type === "icon" || item.type === "logo" ? (
          <button type="button" onClick={copySvg} className={primary}>
            <CopyIcon done={copied("SVG copied")} />
            {copied("SVG copied") ? "Copied" : "Copy SVG"}
          </button>
        ) : null}
        <button
          type="button"
          aria-pressed={saved}
          onClick={() => onToggleSave(item)}
          className={hasCopy ? secondary : primary}
        >
          <Bookmark filled={saved} className="size-3.5" />
          {saved ? "Saved" : "Save"}
        </button>
        {code && (item.type === "icon" || item.type === "logo") ? (
          <button type="button" onClick={() => copy(code, "Import copied")} className={secondary}>
            {copied("Import copied") ? "Copied" : "Copy import"}
          </button>
        ) : null}
        {install && !files?.length ? (
          <button type="button" onClick={() => copy(install, "Install copied")} className={secondary}>
            {copied("Install copied") ? "Copied" : "Copy install"}
          </button>
        ) : null}
        {pageUrl ? (
          <a href={pageUrl} target="_blank" rel="noreferrer" className={secondary}>
            Open
            <ArrowIcon />
          </a>
        ) : null}
        {item.repo ? (
          <a href={item.repo} target="_blank" rel="noreferrer" className={secondary}>
            Repository
            <ArrowIcon />
          </a>
        ) : null}
      </div>

      <p className="sr-only" aria-live="polite">
        {notice}
      </p>
      {codeError ? (
        <p role="alert" className="mt-3 rounded-[10px] bg-red-500/10 px-3 py-2 text-[13px] text-red-300">
          {codeError}
        </p>
      ) : null}

      {item.type === "component" ? (
        <section className="mt-6">
          <h3 className="text-[12px] font-medium text-muted">Prompt for your agent</h3>
          <pre className="mt-2 max-h-72 overflow-auto rounded-xl bg-black/30 p-3 font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-foreground/80 ring-1 ring-line">
            {files === null ? "Loading source…" : prompt}
          </pre>
        </section>
      ) : null}

      {install && !files?.length ? (
        <pre className="mt-4 overflow-auto rounded-xl bg-black/30 p-3 font-mono text-[12px] leading-relaxed text-foreground/70 ring-1 ring-line">
          {install}
        </pre>
      ) : null}

      <dl className="mt-6 divide-y divide-line rounded-xl text-[13px] ring-1 ring-line">
        {item.meta ? <Detail label="Details" value={item.meta} /> : null}
        {item.license ? <Detail label="License" value={item.license} /> : null}
        {typeof item.price === "number" ? (
          <Detail label="Price" value={item.price === 0 ? "Free" : `$${item.price}`} />
        ) : null}
        <Detail label="ID" value={item.id} mono />
      </dl>
    </div>
  );
}

const primary =
  "inline-flex h-9 items-center gap-2 rounded-[10px] bg-primary px-3.5 text-[13px] font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.22)] transition-[filter,scale] hover:brightness-110 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60";

const secondary =
  "inline-flex h-9 items-center gap-2 rounded-[10px] bg-foreground/[0.06] px-3.5 text-[13px] font-medium text-foreground transition-[background-color,scale] hover:bg-foreground/10 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-primary";

function Detail({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 px-3 py-2.5">
      <dt className="shrink-0 text-muted">{label}</dt>
      <dd className={`min-w-0 truncate text-right text-foreground/85 ${mono ? "font-mono text-[11px]" : ""}`} title={value}>
        {value}
      </dd>
    </div>
  );
}

function CopyIcon({ done }: { done: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5" aria-hidden="true">
      {done ? (
        <path d="M20 6 9 17l-5-5" />
      ) : (
        <>
          <rect width="14" height="14" x="8" y="8" rx="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </>
      )}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-muted" aria-hidden="true">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}
