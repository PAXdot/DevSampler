"use client";

// Ported to React from Sina UI's CodeBlock.svelte (https://github.com/ebnsina/sinaui,
// https://ebnsina.github.io/sinaui/components/code-block), by ebnsina. Licensed MIT.
// Same markup, class names, behavior and props as the original Svelte component; its sibling
// modules (Icon.svelte, announce.ts, in-view.ts, scroll-edges.ts) are inlined below as plain
// functions/components. Styles are shipped in global.css, ported from the component's own
// <style> block and the design-system's tokens.css (also MIT, ebnsina/sinaui).

import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createHighlighter } from "@tanstack/highlight/core";
import { css } from "@tanstack/highlight/languages/css";
import { diff } from "@tanstack/highlight/languages/diff";
import { go } from "@tanstack/highlight/languages/go";
import { html } from "@tanstack/highlight/languages/html";
import { js } from "@tanstack/highlight/languages/js";
import { json } from "@tanstack/highlight/languages/json";
import { python } from "@tanstack/highlight/languages/python";
import { shell } from "@tanstack/highlight/languages/shell";
import { sql } from "@tanstack/highlight/languages/sql";
import { svelte } from "@tanstack/highlight/languages/svelte";
import { ts } from "@tanstack/highlight/languages/ts";
import { yaml } from "@tanstack/highlight/languages/yaml";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

// One highlighter for every block, created once and reused across instances (same on server and
// browser, so hydration matches).
const highlighter = createHighlighter({
  languages: [
    css,
    diff,
    go,
    html,
    js,
    json,
    python,
    shell,
    sql,
    svelte,
    ts,
    yaml,
  ],
});

export type Lang =
  | "css"
  | "diff"
  | "go"
  | "html"
  | "js"
  | "json"
  | "python"
  | "shell"
  | "sql"
  | "svelte"
  | "ts"
  | "yaml";

export interface CodeBlockProps {
  code: string;
  lang?: Lang;
  /** Shown above the code ("src/routes/+page.svelte"), and names it for screen readers. */
  filename?: string;
  /** Lines to draw attention to: "3", "3-5", "3-5, 9". */
  highlight?: string;
  lineNumbers?: boolean;
  className?: string;
}

type IconNode = readonly (readonly [
  string,
  Readonly<Record<string, string | number>>,
])[];

// Ported from Icon.svelte: renders any icon node from @hugeicons/core-free-icons. React's SVG
// intrinsic elements already use the same camelCase attribute names the icon data ships with, so
// no kebab-casing is needed here (Svelte's native svelte:element path required it).
function Icon({
  icon,
  size = 18,
  label,
  strokeWidth,
  ...rest
}: {
  icon: IconNode;
  size?: number | string;
  label?: string;
  strokeWidth?: number;
} & React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      focusable="false"
      {...rest}
    >
      {icon.map(([tag, attrs], i) => {
        const props: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(attrs)) {
          if (k === "key") continue;
          props[k] = k === "strokeWidth" && strokeWidth ? strokeWidth : v;
        }
        return React.createElement(tag, { key: i, ...props });
      })}
    </svg>
  );
}

// Ported from announce.ts: says something to screen readers without moving focus, through one
// shared live region (React Aria keeps a single global announcer for the same reason).
let announceRegion: HTMLElement | undefined;
function announce(text: string, politeness: "polite" | "assertive" = "polite") {
  if (!announceRegion?.isConnected) {
    announceRegion = document.createElement("div");
    announceRegion.style.cssText =
      "position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap";
    document.body.append(announceRegion);
  }
  announceRegion.setAttribute("aria-live", politeness);
  // Cleared first, so saying the same thing twice is still announced.
  announceRegion.textContent = "";
  setTimeout(() => announceRegion && (announceRegion.textContent = text), 50);
}

// Ported from in-view.ts (a Svelte `{@attach}`): runs `fn` once the element scrolls into view.
function observeInView(
  node: Element,
  fn: () => void,
  options: IntersectionObserverInit = {},
) {
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    fn();
  }, options);
  io.observe(node);
  return () => io.disconnect();
}

// Ported from scroll-edges.ts (a Svelte `{@attach}`): measures how much of a scroll area is
// hidden past each edge and sets --scroll-start / --scroll-end (0 to 1, easing in over the first
// 24px). global.css turns them into fades via [data-fade="x"].
function trackScrollEdges(el: HTMLElement) {
  const update = () => {
    let before: number;
    let after: number;
    if (el.dataset.fade === "x") {
      const max = el.scrollWidth - el.clientWidth;
      // Right to left, scrollLeft runs from 0 down to -max; left/right here are physical.
      const left =
        getComputedStyle(el).direction === "rtl"
          ? max + el.scrollLeft
          : el.scrollLeft;
      before = left;
      after = max - left;
    } else {
      before = el.scrollTop;
      after = el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    el.style.setProperty(
      "--scroll-start",
      `${Math.min(1, Math.max(0, before / 24))}`,
    );
    el.style.setProperty(
      "--scroll-end",
      `${Math.min(1, Math.max(0, after / 24))}`,
    );
  };
  update();
  el.addEventListener("scroll", update, { passive: true });
  // Size and content changes (a filtered list, a font loading) move the edges too.
  const resized = new ResizeObserver(update);
  resized.observe(el);
  for (const child of Array.from(el.children)) resized.observe(child);
  const changed = new MutationObserver(update);
  changed.observe(el, { childList: true, subtree: true });
  return () => {
    el.removeEventListener("scroll", update);
    resized.disconnect();
    changed.disconnect();
  };
}

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function CodeBlock({
  code,
  lang = "ts",
  filename,
  highlight = "",
  lineNumbers = true,
  className,
}: CodeBlockProps) {
  const source = useMemo(() => code.replace(/\n+$/, ""), [code]);
  const markup = useMemo(
    () => highlighter.highlight(source, { lang }).html,
    [source, lang],
  );
  const count = useMemo(() => source.split("\n").length, [source]);
  const marked = useMemo(
    () =>
      new Set(
        highlight
          .split(",")
          .map((part) => part.trim().split("-").map(Number))
          .filter(([a]) => a > 0)
          .flatMap(([a, b = a]) =>
            Array.from({ length: b - a + 1 }, (_, i) => a + i),
          ),
      ),
    [highlight],
  );

  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  async function copy() {
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      announce("Copied");
      timerRef.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      announce("Couldn't copy. Select the code and copy it instead.");
    }
  }

  // The first time it scrolls into view, the code unrolls from the top. It's only hidden once the
  // effect runs, so without JavaScript (or before it loads) the code simply shows.
  const rootRef = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    setArmed(true);
    return observeInView(node, () => setSeen(true), { threshold: 0.2 });
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    return trackScrollEdges(node);
  }, []);

  return (
    <div
      ref={rootRef}
      className={cx("codeblock", armed && "armed", seen && "seen", className)}
    >
      <header>
        {filename ? (
          <span className="file">{filename}</span>
        ) : (
          <span className="lang">{lang}</span>
        )}
        <button
          type="button"
          className="copy"
          aria-label={copied ? "Copied" : "Copy code"}
          onClick={copy}
        >
          {/* The icon swaps with a quick scale, so the change reads as a response to the press. */}
          <span className="icon" key={String(copied)}>
            <Icon icon={copied ? Tick02Icon : Copy01Icon} size={16} />
          </span>
        </button>
      </header>
      {/* Focusable so the keyboard can scroll long lines sideways. */}
      <div
        ref={scrollRef}
        className="scroll"
        role="region"
        aria-label={filename ?? `${lang} code`}
        tabIndex={0}
        data-fade="x"
      >
        <div
          className="sheet"
          style={{ "--lines": count } as React.CSSProperties}
        >
          {lineNumbers && (
            <ol className="gutter" aria-hidden="true">
              {Array.from({ length: count }, (_, i) => (
                <li key={i} className={marked.has(i + 1) ? "hit" : undefined}>
                  {i + 1}
                </li>
              ))}
            </ol>
          )}
          <div className="code">
            {[...marked].map(
              (line) =>
                line <= count && (
                  <span
                    key={line}
                    className="band"
                    style={{ "--at": line - 1 } as React.CSSProperties}
                    aria-hidden="true"
                  />
                ),
            )}
            {/* eslint-disable-next-line react/no-danger -- the highlighter escapes all source text. */}
            <pre>
              <code dangerouslySetInnerHTML={{ __html: markup }} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
