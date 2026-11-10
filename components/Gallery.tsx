"use client";

import { AppSections } from "@/components/AppSections";
import { CardGrid, CardGridSkeleton } from "@/components/CardGrid";
import { ItemDrawer } from "@/components/ItemDrawer";
import { LibraryShell, SearchIcon } from "@/components/LibraryShell";
import { Mark } from "@/components/Marks";
import { APP_GROUPS, appSection, type AppFacets } from "@/lib/apps";
import {
  COMPONENT_CATEGORIES,
  ICON_CATEGORIES,
  ICON_SETS,
  ICON_STYLES,
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
  const group = params.get("group") ?? "";
  const sort = params.get("sort") ?? "";
  const color = params.get("color") ?? "";
  const free = params.get("free") ?? "";
  const kind = params.get("kind") ?? "";
  const job = params.get("job") ?? "";
  const aspect = params.get("aspect") ?? "";
  const iconSet = params.get("set") || params.get("family") || "all";
  const style = params.get("style") ?? "";
  const motion = params.get("motion") ?? "";
  const savedOnly = params.get("saved") === "1";

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
      if (iconSet !== "all") query.set("set", iconSet);
      if (cat !== "all") query.set("cat", cat);
      if (style) query.set("style", style);
      if (motion) query.set("motion", motion);
      return `/api/icons?${query}`;
    }
    if (group) query.set("group", group);
    if (cat !== "all") query.set("cat", cat);
    return `/api/apps?${query}`;
  }, [shelf, q, cat, group, sort, color, free, kind, job, aspect, iconSet, style, motion]);

  const [offset, setOffset] = useState(0);
  const [trackedBase, setTrackedBase] = useState(requestBase);
  const baseChanged = trackedBase !== requestBase;
  if (baseChanged) {
    setTrackedBase(requestBase);
    setOffset(0);
  }
  const pageOffset = baseChanged ? 0 : offset;
  const paged = shelf === "components" || shelf === "themes" || shelf === "templates" || shelf === "apps" || shelf === "icons";
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
  const [iconFacets, setIconFacets] = useState<IconFacets | null>(null);
  const [appFacets, setAppFacets] = useState<AppFacets | null>(null);

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
      .then((data: { items?: Item[]; total?: number; error?: string; note?: string; facets?: IconFacets | AppFacets }) => {
        if (controller.signal.aborted) return;
        setItems((current) =>
          pageOffset > 0 ? [...current, ...(data.items ?? [])] : (data.items ?? []),
        );
        setTotal(typeof data.total === "number" ? data.total : 0);
        setNote(data.note ?? "");
        setError(data.error ?? "");
        if (data.facets && "sets" in data.facets) setIconFacets(data.facets);
        if (data.facets && "groups" in data.facets) setAppFacets(data.facets);
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
  const shown = savedOnly ? saved : items;
  const category = COMPONENT_CATEGORIES.find((item) => item.id === cat);
  const iconCategory = ICON_CATEGORIES.find((item) => item.id === cat);
  const iconCreator = ICON_SETS.find((item) => item.id === iconSet);
  const selectedApp = shelf === "apps" ? appSection(cat) : undefined;
  const selectedGroup = shelf === "apps" ? APP_GROUPS.find((item) => item.id === group) : undefined;
  const heading =
    shelf === "apps" && selectedApp
      ? selectedApp.section.label
      : shelf === "apps" && selectedGroup
        ? selectedGroup.label
        : shelf === "icons" && iconCategory
          ? iconCategory.label
          : shelf === "icons" && iconCreator
            ? iconCreator.label
            : category && category.id !== "all"
              ? category.label
              : copy.title;
  const lede =
    shelf === "apps" && selectedApp
      ? selectedApp.group.label
      : shelf === "apps" && selectedGroup
        ? `${(appFacets?.groups[selectedGroup.id] ?? shown.length).toLocaleString("en")} apps`
        : copy.lede;
  const appGrouped = shelf === "apps" && !savedOnly && cat === "all";

  return (
    <LibraryShell
      shelf={shelf}
      search={
        <form
          role="search"
          className="relative w-full"
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
            placeholder="Search"
            autoComplete="off"
            className="h-8 w-full rounded-md border border-white/[0.08] bg-white/[0.04] pr-8 pl-8 text-[13px] text-white outline-none placeholder:text-white/35 focus-visible:border-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-search-cancel-button]:hidden"
          />
          <span className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[11px] text-white/30">⌘K</span>
        </form>
      }
      filters={
        savedOnly ? null : (
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
            group={group}
            iconSet={iconSet}
            style={style}
            motion={motion}
            iconFacets={iconFacets}
            appFacets={appFacets}
            onChange={write}
          />
        )
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
      {loading && pageOffset === 0 && !savedOnly ? (
        <CardGridSkeleton shelf={shelf} />
      ) : shown.length === 0 ? (
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
        <>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h1 className="text-[15px] font-semibold">{savedOnly ? "Bookmarks" : heading}</h1>
              <p className="text-[13px] text-white/45">
                {savedOnly
                  ? "Pieces you saved on this machine."
                  : shelf === "icons" && total > 0
                    ? `${total.toLocaleString("en")} icons`
                    : lede}
              </p>
            </div>
          </div>
          {appGrouped ? (
            <AppSections
              items={shown}
              heading={heading}
              saved={savedKeys}
              onOpen={setOpen}
              onToggleSave={toggleSave}
            />
          ) : (
            <CardGrid shelf={shelf} items={shown} saved={savedKeys} onOpen={setOpen} onToggleSave={toggleSave} />
          )}
        </>
      )}
      {!savedOnly && !appGrouped && items.length > 0 && total > items.length ? (
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
  group,
  iconSet,
  style,
  motion,
  iconFacets,
  appFacets,
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
  group: string;
  iconSet: string;
  style: string;
  motion: string;
  iconFacets: IconFacets | null;
  appFacets: AppFacets | null;
  onChange: (patch: Record<string, string>) => void;
}) {
  if (shelf === "components") {
    return (
      <ChipRow>
        <ChipGroup label="Categories" bare>
          {COMPONENT_CATEGORIES.map((item) => (
            <Chip
              key={item.id}
              mark={item.id === "all" ? undefined : item.id}
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
        <ChipGroup label="Color">
          <Chip active={!color} onClick={() => onChange({ color: "" })}>
            All colors
          </Chip>
          {THEME_COLORS.map((item) => (
            <Chip key={item} mark={item} active={color === item} onClick={() => onChange({ color: item })}>
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

  if (shelf === "apps") {
    const appTotal = appFacets
      ? Object.values(appFacets.groups).reduce((sum, count) => sum + count, 0)
      : undefined;
    return (
      <ChipRow>
        <Chip active={!group && cat === "all"} count={exactCount(appTotal)} onClick={() => onChange({ group: "", cat: "" })}>
          All apps
        </Chip>
        {APP_GROUPS.map((item) => (
          <div key={item.id} role="group" aria-label={item.label} className="mt-2 border-t border-white/10 pt-2">
            <Chip
              mark={item.id}
              active={group === item.id && cat === "all"}
              count={exactCount(appFacets?.groups[item.id])}
              onClick={() => onChange({ group: item.id, cat: "" })}
            >
              {item.label}
            </Chip>
            <div className="ml-2 border-l border-white/10 pl-1">
              {item.sections.map((section) => (
                <Chip
                  key={section.id}
                  mark={section.id}
                  active={cat === section.id}
                  count={exactCount(appFacets?.sections[section.id])}
                  onClick={() => onChange({ group: item.id, cat: section.id })}
                >
                  {section.label}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </ChipRow>
    );
  }

  if (shelf === "icons") {
    const activeStyle = style || "outline";
    return (
      <ChipRow>
        <ChipGroup label="Style">
          {ICON_STYLES.map((item) => (
            <Chip
              key={item.id}
              mark={item.id}
              active={activeStyle === item.id}
              count={exactCount(iconFacets?.styles[item.id])}
              onClick={() => onChange({ style: item.id === "outline" ? "" : item.id })}
            >
              {item.label}
            </Chip>
          ))}
          <Chip active={style === "all"} count={exactCount(styleTotal(iconFacets))} onClick={() => onChange({ style: "all" })}>
            All styles
          </Chip>
        </ChipGroup>
        <ChipGroup label="Creators">
          <Chip active={iconSet === "all"} onClick={() => onChange({ set: "" })}>
            All creators
          </Chip>
          {ICON_SETS.map((item) => (
            <Chip
              key={item.id}
              active={iconSet === item.id}
              count={exactCount(iconFacets?.sets[item.id])}
              onClick={() => onChange({ set: item.id })}
            >
              {item.label}
            </Chip>
          ))}
        </ChipGroup>
        <ChipGroup label="Motion">
          <Chip mark="animated" active={motion === "animated"} count={exactCount(iconFacets?.animated)} onClick={() => onChange({ motion: motion === "animated" ? "" : "animated" })}>
            Animated
          </Chip>
        </ChipGroup>
        <ChipGroup label="Categories">
          <Chip active={cat === "all"} onClick={() => onChange({ cat: "" })}>
            All categories
          </Chip>
          {ICON_CATEGORIES.map((item) => (
            <Chip
              key={item.id}
              mark={item.id}
              active={cat === item.id}
              count={exactCount(iconFacets?.categories[item.id])}
              onClick={() => onChange({ cat: item.id })}
            >
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
            <Chip key={item} mark={item} active={kind === item} onClick={() => onChange({ kind: item })}>
              {label(item)}
            </Chip>
          ))}
        </ChipGroup>
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
        <ChipGroup label="Job">
          <label className="sr-only" htmlFor="video-job">
            Job
          </label>
          <span className="relative">
            <select
              id="video-job"
              value={job}
              onChange={(event) => onChange({ job: event.target.value })}
              className="h-7 w-full appearance-none rounded-md bg-transparent pr-7 pl-2 text-[12px] text-white/70 outline-none hover:bg-white/[0.05] hover:text-white focus-visible:outline-2 focus-visible:outline-white"
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
              className="pointer-events-none absolute top-1/2 right-3 size-3 -translate-y-1/2 text-[#9b9b9b]"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </ChipGroup>
      </ChipRow>
    );
  }

  return null;
}

type IconFacets = {
  styles: Record<string, number>;
  sets: Record<string, number>;
  categories: Record<string, number>;
  animated: number;
};

function exactCount(value: number | undefined): string | null {
  return typeof value === "number" ? value.toLocaleString("en") : null;
}

function styleTotal(facets: IconFacets | null) {
  if (!facets) return undefined;
  return Object.values(facets.styles).reduce((sum, count) => sum + count, 0);
}

function label(value: string) {
  const text = value
    .split("-")
    .map((word) => (/^(cta|ui|fx)$/.test(word) ? word.toUpperCase() : word))
    .join(" ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function ChipRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

function ChipGroup({ label, bare = false, children }: { label: string; bare?: boolean; children: ReactNode }) {
  return (
    <div role="group" aria-label={label} className="flex flex-col">
      {bare ? null : <p className="px-2 pt-2 pb-1 text-[11px] text-white/35">{label}</p>}
      {children}
    </div>
  );
}

function Chip({
  active,
  count,
  mark,
  onClick,
  children,
}: {
  active: boolean;
  count?: string | null;
  mark?: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex h-7 w-full items-center justify-between gap-2 rounded-md px-2 text-left text-[12px] outline-none focus-visible:outline-2 focus-visible:outline-white ${
        active ? "bg-white/[0.08] text-white" : "text-white/55 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      <span className="flex min-w-0 items-center gap-1.5">
        {mark ? <Mark name={mark} /> : null}
        <span className="truncate">{children}</span>
      </span>
      {count ? <span className="shrink-0 tabular-nums text-white/35">{count}</span> : null}
    </button>
  );
}
