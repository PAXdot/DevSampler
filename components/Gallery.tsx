"use client";

import { CardGrid, CardGridSkeleton } from "@/components/CardGrid";
import { ItemDrawer } from "@/components/ItemDrawer";
import { LibraryShell, SearchIcon } from "@/components/LibraryShell";
import {
  COMPONENT_CATEGORIES,
  ICON_FAMILIES,
  SHELF_COPY,
  TEMPLATE_SORTS,
  THEME_COLORS,
  THEME_SORTS,
  VIDEO_ASPECTS,
  VIDEO_JOBS,
  VIDEO_KINDS,
  formatCount,
  type Counts,
  type ShelfId,
} from "@/lib/shelves";
import type { Item } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";

let cachedCounts: Counts | null = null;

export function Gallery({ shelf }: { shelf: ShelfId }) {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const copy = SHELF_COPY[shelf];
  const q = params.get("q") ?? "";
  const cat = params.get("cat") ?? "all";
  const sort = params.get("sort") ?? "";
  const color = params.get("color") ?? "";
  const free = params.get("free") ?? "";
  const kind = params.get("kind") ?? "";
  const job = params.get("job") ?? "";
  const aspect = params.get("aspect") ?? "";
  const family = params.get("family") ?? "all";

  const [draft, setDraft] = useState(q);
  const [trackedQ, setTrackedQ] = useState(q);
  if (q !== trackedQ) {
    setTrackedQ(q);
    setDraft(q);
  }

  const requestBase = useMemo(() => {
    const query = new URLSearchParams();
    if (q) query.set("q", q);
    if (shelf === "components" || shelf === "themes" || shelf === "templates") {
      const type = shelf === "components" ? "component" : shelf === "themes" ? "theme" : "template";
      query.set("type", type);
      if (cat !== "all") query.set("cat", cat);
      if (sort) query.set("sort", sort);
      if (color) query.set("color", color);
      if (free) query.set("free", free);
      return `/api/search?${query}`;
    }
    if (shelf === "video") {
      if (kind) query.set("kind", kind);
      if (job) query.set("job", job);
      if (aspect) query.set("aspect", aspect);
      return `/api/video?${query}`;
    }
    if (shelf === "icons") {
      if (family !== "all") query.set("family", family);
      return `/api/icons?${query}`;
    }
    return `/api/apps?${query}`;
  }, [shelf, q, cat, sort, color, free, kind, job, aspect, family]);

  const [offset, setOffset] = useState(0);
  const [trackedBase, setTrackedBase] = useState(requestBase);
  const baseChanged = trackedBase !== requestBase;
  if (baseChanged) {
    setTrackedBase(requestBase);
    setOffset(0);
  }
  const pageOffset = baseChanged ? 0 : offset;
  const paged = shelf === "components" || shelf === "themes" || shelf === "templates" || shelf === "apps";
  const requestUrl =
    paged && pageOffset > 0
      ? `${requestBase}${requestBase.includes("?") ? "&" : "?"}offset=${pageOffset}`
      : requestBase;

  const [items, setItems] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [loadedUrl, setLoadedUrl] = useState("");
  const [errorFor, setErrorFor] = useState(requestUrl);
  if (errorFor !== requestUrl) {
    setErrorFor(requestUrl);
    setError("");
    setNote("");
  }
  const loading = loadedUrl !== requestUrl;
  const [saved, setSaved] = useState<Item[]>([]);
  const [open, setOpen] = useState<Item | null>(null);
  const [counts, setCounts] = useState<Counts | null>(cachedCounts);

  useEffect(() => {
    if (draft === q) return;
    const timer = window.setTimeout(() => {
      const next = new URLSearchParams(window.location.search);
      if (draft) next.set("q", draft);
      else next.delete("q");
      const text = next.toString();
      router.replace(text ? `${pathname}?${text}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(timer);
  }, [draft, q, pathname, router]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(requestUrl, { signal: controller.signal })
      .then((response) => response.json())
      .then((data: { items?: Item[]; total?: number; error?: string; note?: string }) => {
        if (controller.signal.aborted) return;
        setItems((current) =>
          pageOffset > 0 ? [...current, ...(data.items ?? [])] : (data.items ?? []),
        );
        setTotal(typeof data.total === "number" ? data.total : 0);
        setNote(data.note ?? "");
        setError(data.error ?? "");
        setLoadedUrl(requestUrl);
      })
      .catch((fetchError: Error) => {
        if (fetchError.name === "AbortError") return;
        setError("Could not load this shelf.");
        if (pageOffset === 0) setItems([]);
        setLoadedUrl(requestUrl);
      });
    return () => controller.abort();
  }, [requestUrl, pageOffset]);

  useEffect(() => {
    fetch("/api/saved")
      .then((response) => response.json())
      .then((data: { items?: Item[] }) => setSaved(data.items ?? []))
      .catch(() => setSaved([]));
    fetch("/api/counts")
      .then((response) => response.json())
      .then((data: Counts) => {
        cachedCounts = data;
        setCounts(data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.tagName === "SELECT";
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        document.getElementById("catalog-search")?.focus();
      } else if (event.key === "/" && !typing) {
        event.preventDefault();
        document.getElementById("catalog-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function write(patch: Record<string, string>) {
    const next = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(patch)) {
      if (value) next.set(key, value);
      else next.delete(key);
    }
    const text = next.toString();
    router.replace(text ? `${pathname}?${text}` : pathname, { scroll: false });
  }

  async function toggleSave(item: Item) {
    const exists = saved.some((entry) => entry.id === item.id && entry.type === item.type);
    const previous = saved;
    setSaved(
      exists
        ? saved.filter((entry) => !(entry.id === item.id && entry.type === item.type))
        : [item, ...saved],
    );
    const response = await fetch(
      exists ? `/api/saved?id=${encodeURIComponent(item.id)}&type=${item.type}` : "/api/saved",
      exists
        ? { method: "DELETE" }
        : {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(item),
          },
    );
    if (!response.ok) setSaved(previous);
    else {
      const data = (await response.json()) as { items?: Item[] };
      if (data.items) setSaved(data.items);
    }
  }

  const savedKeys = new Set(saved.map((item) => `${item.type}:${item.id}`));

  return (
    <LibraryShell
      shelf={shelf}
      eyebrow={copy.eyebrow}
      title={copy.title}
      lede={copy.lede}
      counts={counts?.shelves}
      search={
        <form
          role="search"
          className="relative ml-auto w-full sm:w-[280px]"
          onSubmit={(event) => {
            event.preventDefault();
            write({ q: draft });
          }}
        >
          <label className="sr-only" htmlFor="catalog-search">
            {copy.placeholder}
          </label>
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
          <input
            id="catalog-search"
            type="search"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape" && draft) {
                event.preventDefault();
                setDraft("");
              }
            }}
            placeholder={copy.placeholder}
            autoComplete="off"
            className="h-9 w-full rounded-[10px] border border-transparent bg-foreground/[0.06] pr-3 pl-9 text-[16px] text-foreground transition-[border-color,background-color] outline-none placeholder:text-muted/80 hover:bg-foreground/[0.08] focus:border-primary/60 focus:bg-foreground/[0.04] md:text-[14px] [&::-webkit-search-cancel-button]:hidden"
          />
        </form>
      }
      filters={
        <Filters
          shelf={shelf}
          counts={counts?.categories}
          cat={cat}
          sort={sort}
          color={color}
          free={free}
          kind={kind}
          job={job}
          aspect={aspect}
          family={family}
          onChange={write}
        />
      }
    >
      <p className="sr-only" aria-live="polite">
        {loading && pageOffset === 0 ? "Loading" : `${total || items.length} results`}
      </p>
      {q && !(loading && pageOffset === 0) ? (
        <div className="mb-4 flex items-center gap-2 text-[13px] text-muted">
          <span>
            <span className="text-foreground tabular-nums">{(total || items.length).toLocaleString("en")}</span>{" "}
            {(total || items.length) === 1 ? "result" : "results"} for “{q}”
          </span>
          <button
            type="button"
            onClick={() => write({ q: "" })}
            className="rounded-md px-1.5 py-0.5 text-foreground/80 transition-colors hover:bg-foreground/[0.06] hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
          >
            Clear
          </button>
        </div>
      ) : null}
      {note ? <p className="mb-4 text-[13px] text-muted">{note}</p> : null}
      {error ? (
        <p role="alert" className="mb-4 rounded-[10px] bg-red-500/10 px-3 py-2 text-[13px] text-red-300">
          {error}
        </p>
      ) : null}
      {loading && pageOffset === 0 ? (
        <CardGridSkeleton shelf={shelf} />
      ) : items.length === 0 ? (
        error ? null : (
          <div className="flex flex-col items-center py-24 text-center">
            <p className="text-[15px] font-medium">Nothing matched</p>
            <p className="mt-1 text-[13px] text-muted">
              {q ? "Try a shorter search or another filter." : "This shelf is empty on disk."}
            </p>
            {q ? (
              <button
                type="button"
                onClick={() => write({ q: "" })}
                className="mt-4 h-8 rounded-[10px] bg-foreground/[0.06] px-3 text-[13px] font-medium transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-primary"
              >
                Clear search
              </button>
            ) : null}
          </div>
        )
      ) : (
        <CardGrid shelf={shelf} items={items} saved={savedKeys} onOpen={setOpen} onToggleSave={toggleSave} />
      )}
      {items.length > 0 && total > items.length ? (
        <div className="mt-12 flex flex-col items-center gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={() => setOffset(items.length)}
            className="inline-flex h-9 items-center rounded-[10px] bg-foreground/[0.06] px-4 text-[13px] font-medium transition-[background-color,scale] hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-primary active:scale-[0.97] disabled:cursor-wait disabled:opacity-60"
          >
            {loading ? "Loading…" : "Show more"}
          </button>
          <p className="text-[12px] text-muted tabular-nums">
            Showing {items.length.toLocaleString("en")} of {total.toLocaleString("en")}
          </p>
        </div>
      ) : null}
      <ItemDrawer
        item={open}
        saved={open ? savedKeys.has(`${open.type}:${open.id}`) : false}
        onClose={() => setOpen(null)}
        onToggleSave={toggleSave}
      />
    </LibraryShell>
  );
}

function Filters({
  shelf,
  counts,
  cat,
  sort,
  color,
  free,
  kind,
  job,
  aspect,
  family,
  onChange,
}: {
  shelf: ShelfId;
  counts?: Counts["categories"];
  cat: string;
  sort: string;
  color: string;
  free: string;
  kind: string;
  job: string;
  aspect: string;
  family: string;
  onChange: (patch: Record<string, string>) => void;
}) {
  if (shelf === "components") {
    return (
      <ChipRow>
        <ChipGroup label="Categories">
          {COMPONENT_CATEGORIES.map((item) => (
            <Chip
              key={item.id}
              active={cat === item.id}
              count={formatCount(counts?.[item.id])}
              onClick={() => onChange({ cat: item.id === "all" ? "" : item.id })}
            >
              {item.label}
            </Chip>
          ))}
        </ChipGroup>
      </ChipRow>
    );
  }

  if (shelf === "themes") {
    return (
      <ChipRow>
        <ChipGroup label="Sort">
          {THEME_SORTS.map((item) => (
            <Chip key={item.id} active={(sort || "recommended") === item.id} onClick={() => onChange({ sort: item.id })}>
              {item.label}
            </Chip>
          ))}
        </ChipGroup>
        <Divider />
        <ChipGroup label="Color">
          <Chip active={!color} onClick={() => onChange({ color: "" })}>
            All colors
          </Chip>
          {THEME_COLORS.map((item) => (
            <Chip key={item} active={color === item} onClick={() => onChange({ color: item })}>
              {label(item)}
            </Chip>
          ))}
        </ChipGroup>
      </ChipRow>
    );
  }

  if (shelf === "templates") {
    return (
      <ChipRow>
        <ChipGroup label="Sort">
          {TEMPLATE_SORTS.map((item) => (
            <Chip key={item.id} active={(sort || "recommended") === item.id} onClick={() => onChange({ sort: item.id })}>
              {item.label}
            </Chip>
          ))}
        </ChipGroup>
        <Divider />
        <ChipGroup label="Price">
          <Chip active={!free} onClick={() => onChange({ free: "" })}>
            Any price
          </Chip>
          <Chip active={free === "true"} onClick={() => onChange({ free: "true" })}>
            Free
          </Chip>
          <Chip active={free === "false"} onClick={() => onChange({ free: "false" })}>
            Paid
          </Chip>
        </ChipGroup>
      </ChipRow>
    );
  }

  if (shelf === "icons") {
    return (
      <ChipRow>
        <ChipGroup label="Families">
          {ICON_FAMILIES.map((item) => (
            <Chip key={item.id} active={family === item.id} onClick={() => onChange({ family: item.id === "all" ? "" : item.id })}>
              {item.label}
            </Chip>
          ))}
        </ChipGroup>
      </ChipRow>
    );
  }

  if (shelf === "video") {
    return (
      <ChipRow>
        <ChipGroup label="Kind">
          <Chip active={!kind} onClick={() => onChange({ kind: "" })}>
            All kinds
          </Chip>
          {VIDEO_KINDS.map((item) => (
            <Chip key={item} active={kind === item} onClick={() => onChange({ kind: item })}>
              {label(item)}
            </Chip>
          ))}
        </ChipGroup>
        <Divider />
        <ChipGroup label="Aspect">
          <Chip active={!aspect} onClick={() => onChange({ aspect: "" })}>
            Any aspect
          </Chip>
          {VIDEO_ASPECTS.map((item) => (
            <Chip key={item} active={aspect === item} onClick={() => onChange({ aspect: item })}>
              {item}
            </Chip>
          ))}
        </ChipGroup>
        <Divider />
        <label className="sr-only" htmlFor="video-job">
          Job
        </label>
        <span className="relative shrink-0">
          <select
            id="video-job"
            value={job}
            onChange={(event) => onChange({ job: event.target.value })}
            className={`h-7 appearance-none rounded-full pr-7 pl-3 text-[12px] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              job ? "bg-foreground text-background" : "bg-foreground/[0.07] text-muted hover:text-foreground"
            }`}
          >
            <option value="">Any job</option>
            {VIDEO_JOBS.map((item) => (
              <option key={item} value={item}>
                {label(item)}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`pointer-events-none absolute top-1/2 right-2.5 size-3 -translate-y-1/2 ${job ? "text-background" : "text-muted"}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </ChipRow>
    );
  }

  return null;
}

function label(value: string) {
  const text = value
    .split("-")
    .map((word) => (/^(cta|ui|fx)$/.test(word) ? word.toUpperCase() : word))
    .join(" ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function ChipRow({ children }: { children: ReactNode }) {
  return <div className="chip-row edge-fade mt-3 flex items-center gap-1.5 overflow-x-auto pr-12 pb-0.5">{children}</div>;
}

function ChipGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="group" aria-label={label} className="flex shrink-0 items-center gap-1.5">
      {children}
    </div>
  );
}

function Divider() {
  return <span aria-hidden="true" className="mx-1 h-4 w-px shrink-0 bg-line" />;
}

function Chip({
  active,
  count,
  onClick,
  children,
}: {
  active: boolean;
  count?: string | null;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium transition-[background-color,color,scale] outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.97] ${
        active ? "bg-foreground text-background" : "bg-foreground/[0.07] text-muted hover:bg-foreground/10 hover:text-foreground"
      }`}
    >
      {children}
      {count ? <span className={`tabular-nums ${active ? "text-background/55" : "text-muted/70"}`}>{count}</span> : null}
    </button>
  );
}
