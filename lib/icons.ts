import { ICON_CATEGORIES, ICON_SETS, ICON_STYLES } from "@/lib/shelves";
import type { Item } from "@/lib/types";
import { closeSync, existsSync, openSync, readFileSync, readSync, statSync } from "node:fs";
import path from "node:path";

const catalogFile = path.join(process.cwd(), "data", "icons", "catalog.jsonl");
const setsFile = path.join(process.cwd(), "data", "icons", "sets.json");

export type IconRow = {
  id: string;
  slug: string;
  name: string;
  category: string;
  set: string;
  style: string;
  animated: boolean;
  copies: number;
  viewBox: string;
  svg: string;
};

type IconSet = {
  slug: string;
  name: string;
  author: string;
  username: string;
  license: string;
  site: string;
  repo: string;
  animated: boolean;
  count: number;
};

type IconMeta = Omit<IconRow, "svg"> & { offset: number };

type Cache = {
  mtime: number;
  fd: number;
  rows: IconMeta[];
  byId: Map<string, IconMeta>;
  sets: Map<string, IconSet>;
};

let cache: Cache | null = null;

const categoryLabel = new Map<string, string>(ICON_CATEGORIES.map((item) => [item.id, item.label]));
const setLabel = new Map<string, string>(ICON_SETS.map((item) => [item.id, item.label]));
const styleLabel = new Map<string, string>(ICON_STYLES.map((item) => [item.id, item.label]));
const styleIds = new Set<string>(ICON_STYLES.map((item) => item.id));
const categoryIds = new Set<string>(ICON_CATEGORIES.map((item) => item.id));
const setIds = new Set<string>(ICON_SETS.map((item) => item.id));

export type IconFacets = {
  styles: Record<string, number>;
  sets: Record<string, number>;
  categories: Record<string, number>;
  animated: number;
};

export function iconCatalogReady(): boolean {
  return existsSync(catalogFile);
}

export function queryIcons(input: {
  q?: string;
  category?: string;
  set?: string;
  style?: string;
  animated?: boolean;
  offset?: number;
  limit?: number;
}): { items: Item[]; total: number; facets: IconFacets } | null {
  const loaded = readCatalog();
  if (!loaded) return null;
  const style = input.style && styleIds.has(input.style) ? input.style : input.style === "all" ? "" : "outline";
  const category = input.category && categoryIds.has(input.category) ? input.category : "";
  const set = input.set && setIds.has(input.set) ? input.set : "";
  const animated = Boolean(input.animated);
  const q = (input.q ?? "").trim().toLowerCase();
  const terms = q.split(/\s+/).filter(Boolean);
  const offset = Math.max(0, input.offset ?? 0);
  const limit = Math.min(80, Math.max(1, input.limit ?? 48));

  const facets: IconFacets = { styles: {}, sets: {}, categories: {}, animated: 0 };
  for (const item of ICON_STYLES) facets.styles[item.id] = 0;
  for (const item of ICON_SETS) facets.sets[item.id] = 0;
  for (const item of ICON_CATEGORIES) facets.categories[item.id] = 0;

  const matched: IconMeta[] = [];
  for (const row of loaded.rows) {
    if (styleIds.has(row.style)) facets.styles[row.style] += 1;
    if (style && row.style !== style) continue;
    if (terms.length && !matches(row, loaded.sets.get(row.set), terms)) continue;
    if (row.animated) facets.animated += 1;
    if (animated && !row.animated) continue;
    const inSet = !set || row.set === set;
    const inCategory = !category || row.category === category;
    if (inCategory && setIds.has(row.set)) facets.sets[row.set] += 1;
    if (inSet && categoryIds.has(row.category)) facets.categories[row.category] += 1;
    if (inSet && inCategory) matched.push(row);
  }

  return {
    items: matched.slice(offset, offset + limit).map((row) => toItem(loaded, row)),
    total: matched.length,
    facets,
  };
}

export function iconById(id: string): { svg: string; react: string | null; item: Item } | null {
  const loaded = readCatalog();
  if (!loaded) return null;
  const row = loaded.byId.get(id);
  if (!row) return null;
  return { svg: svgDocument(loaded, row), react: reactImport(row), item: toItem(loaded, row) };
}

export function iconSvgFile(id: string): string | null {
  const loaded = readCatalog();
  if (!loaded) return null;
  const row = loaded.byId.get(id);
  if (!row) return null;
  return svgDocument(loaded, row, "#ffffff");
}

export function outlineCount(): number | undefined {
  const loaded = readCatalog();
  if (!loaded) return undefined;
  return loaded.rows.reduce((sum, row) => sum + (row.style === "outline" ? 1 : 0), 0);
}

function matches(row: IconMeta, set: IconSet | undefined, terms: string[]): boolean {
  const haystack = `${row.name} ${row.slug} ${row.category} ${categoryLabel.get(row.category) ?? ""} ${row.set} ${set?.name ?? ""} ${set?.author ?? ""}`.toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

function toItem(loaded: Cache, row: IconMeta): Item {
  const set = loaded.sets.get(row.set);
  const family = set?.name || setLabel.get(row.set) || row.set;
  const category = categoryLabel.get(row.category) ?? row.category;
  const style = styleLabel.get(row.style) ?? row.style;
  return {
    id: row.id,
    type: "icon",
    name: row.name,
    author: set?.author || family,
    description: [family, category, style].filter(Boolean).join(" · "),
    preview: `/api/icons/svg?id=${encodeURIComponent(row.id)}`,
    url: set?.site || undefined,
    repo: set?.repo || undefined,
    license: set?.license || undefined,
    meta: row.set,
    svg: svgDocument(loaded, row),
  };
}

function svgDocument(loaded: Cache, row: IconMeta, color?: string): string {
  const viewBox = /^[\d.\s-]+$/.test(row.viewBox) ? row.viewBox : "0 0 24 24";
  const body = (color ? svgBody(loaded, row).replaceAll("currentColor", color) : svgBody(loaded, row))
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="none" width="22" height="22">${body}</svg>`;
}

function reactImport(row: IconMeta): string | null {
  const pascal = row.slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  if (!pascal) return null;
  if (row.set === "lucide") return `import { ${pascal} } from "lucide-react";`;
  if (row.set === "tabler") return `import { Icon${pascal} } from "@tabler/icons-react";`;
  if (row.set === "phosphor") {
    const weight = row.style === "outline" ? "" : row.style;
    return weight
      ? `import { ${pascal} } from "@phosphor-icons/react";\n\n<${pascal} weight="${weight}" />`
      : `import { ${pascal} } from "@phosphor-icons/react";`;
  }
  if (row.set === "heroicons") {
    const folder = row.style === "fill" ? "solid" : "outline";
    return `import { ${pascal}Icon } from "@heroicons/react/24/${folder}";`;
  }
  if (row.set === "remix-icon") return `import { Ri${pascal} } from "@remixicon/react";`;
  return null;
}

function readCatalog(): Cache | null {
  if (!existsSync(catalogFile)) return null;
  const mtime = statSync(catalogFile).mtimeMs;
  if (cache && cache.mtime === mtime) return cache;
  if (cache) closeSync(cache.fd);
  const fd = openSync(catalogFile, "r");
  const file = readFileSync(catalogFile);
  const rows: IconMeta[] = [];
  let start = 0;
  for (let index = 0; index <= file.length; index++) {
    if (index !== file.length && file[index] !== 10) continue;
    if (index > start) {
      try {
        const row = JSON.parse(file.toString("utf8", start, index)) as IconRow;
        if (row && typeof row.id === "string" && typeof row.svg === "string") {
          rows.push({
            id: row.id,
            slug: row.slug,
            name: row.name,
            category: row.category,
            set: row.set,
            style: row.style,
            animated: row.animated,
            copies: row.copies,
            viewBox: row.viewBox,
            offset: start,
          });
        }
      } catch {
        // Skip a torn line.
      }
    }
    start = index + 1;
  }
  rows.sort((a, b) => b.copies - a.copies || a.name.localeCompare(b.name));
  const byId = new Map(rows.map((row) => [row.id, row]));
  cache = { mtime, fd, rows, byId, sets: readSets() };
  return cache;
}

function svgBody(loaded: Cache, row: IconMeta): string {
  const chunk = Buffer.alloc(96 * 1024);
  const read = readSync(loaded.fd, chunk, { position: row.offset, length: chunk.length });
  const newline = chunk.subarray(0, read).indexOf(10);
  const end = newline === -1 ? read : newline;
  const line = chunk.toString("utf8", 0, end === -1 ? read : end);
  const parsed = JSON.parse(line) as IconRow;
  return typeof parsed.svg === "string" ? parsed.svg : "";
}

function readSets(): Map<string, IconSet> {
  const map = new Map<string, IconSet>();
  if (!existsSync(setsFile)) return map;
  try {
    const data = JSON.parse(readFileSync(setsFile, "utf8")) as unknown;
    if (!Array.isArray(data)) return map;
    for (const row of data) {
      if (!row || typeof row !== "object") continue;
      const set = row as IconSet;
      if (typeof set.slug === "string") map.set(set.slug, set);
    }
  } catch {
    return map;
  }
  return map;
}
