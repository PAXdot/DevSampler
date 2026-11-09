import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { presentItem } from "@/lib/media";
import { COMPONENT_CATEGORIES } from "@/lib/shelves";
import type { Item, ItemType } from "@/lib/types";

type Row = Item & { tags?: string[]; updated?: string };

let cache: { mtime: number; rows: Row[] } | null = null;
let countCache: { mtime: number; counts: CatalogCounts } | null = null;
const swatches = new Map<string, string | undefined>();

const file = path.join(process.cwd(), "data", "catalog.jsonl");
const readyFile = path.join(process.cwd(), "data", "catalog.ready");
const themeDir = path.join(process.cwd(), "data", "themes");

export type CatalogCounts = {
  types: Partial<Record<ItemType, number>>;
  categories: Record<string, number>;
};

export function catalogReady(): boolean {
  return existsSync(readyFile) && existsSync(file);
}

export function queryCatalog(input: {
  type: ItemType;
  q?: string;
  cat?: string;
  sort?: string;
  color?: string;
  free?: string;
  offset?: number;
  limit?: number;
}): { items: Item[]; total: number } | null {
  if (!catalogReady()) return null;
  const rows = readRows().filter((row) => row.type === input.type);
  if (rows.length === 0) return null;

  const words = (input.q ?? "").toLowerCase().split(/\s+/).filter(Boolean);
  const categoryWords = input.type === "component" ? categoryQuery(input.cat) : [];

  let matched = rows.filter((row) => {
    const searchHaystack = [row.name, row.description, row.author, row.meta, ...(row.tags ?? [])]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!words.every((word) => searchHaystack.includes(word))) return false;
    if (!inCategory(row, categoryWords)) return false;
    if (input.color && !searchHaystack.includes(input.color.toLowerCase())) return false;
    if (input.free === "true" && row.price !== 0) return false;
    if (input.free === "false" && !(typeof row.price === "number" && row.price > 0)) return false;
    return true;
  });

  if (input.sort === "newest") {
    matched = [...matched].sort((a, b) => (b.updated ?? "").localeCompare(a.updated ?? ""));
  } else if (input.sort === "price") {
    matched = [...matched].sort((a, b) => (a.price ?? Number.MAX_SAFE_INTEGER) - (b.price ?? Number.MAX_SAFE_INTEGER));
  }

  const offset = Math.max(0, input.offset ?? 0);
  const limit = input.limit ?? 48;
  const items = matched
    .slice(offset, offset + limit)
    .map((row) => presentItem(row.type === "theme" ? { ...row, swatch: themeSwatch(row.id) } : row));
  return { items, total: matched.length };
}

export function catalogCounts(): CatalogCounts | null {
  if (!catalogReady()) return null;
  const mtime = statSync(file).mtimeMs;
  if (countCache && countCache.mtime === mtime) return countCache.counts;
  const rows = readRows();
  const types: CatalogCounts["types"] = {};
  for (const row of rows) types[row.type] = (types[row.type] ?? 0) + 1;
  const components = rows.filter((row) => row.type === "component");
  const categories: Record<string, number> = {};
  for (const category of COMPONENT_CATEGORIES) {
    const words = categoryQuery(category.id);
    categories[category.id] = components.filter((row) => inCategory(row, words)).length;
  }
  const counts = { types, categories };
  countCache = { mtime, counts };
  return counts;
}

function categoryQuery(cat: string | undefined): string[] {
  if (!cat || cat === "all") return [];
  const category = COMPONENT_CATEGORIES.find((item) => item.id === cat);
  return category?.query.toLowerCase().split(/\s+/).filter(Boolean) ?? [];
}

function inCategory(row: Row, words: string[]): boolean {
  if (words.length === 0) return true;
  const haystack = [row.name, row.meta, ...(row.tags ?? [])].filter(Boolean).join(" ").toLowerCase();
  return words.every((word) => new RegExp(`\\b${word}\\b`, "i").test(haystack));
}

function themeSwatch(id: string): string | undefined {
  if (swatches.has(id)) return swatches.get(id);
  const css = path.join(themeDir, `${id}.css`);
  let swatch: string | undefined;
  if (/^[0-9a-f-]{36}$/i.test(id) && existsSync(css)) {
    const text = readFileSync(css, "utf8");
    const dark = text.split(".dark")[1] ?? text;
    swatch = dark.match(/--primary:\s*([^;]+)/)?.[1]?.trim();
  }
  swatches.set(id, swatch);
  return swatch;
}

function readRows(): Row[] {
  const mtime = statSync(file).mtimeMs;
  if (cache && cache.mtime === mtime) return cache.rows;
  const rows: Row[] = [];
  const seen = new Set<string>();
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (!line) continue;
    try {
      const row = JSON.parse(line) as Row;
      if (row.url && seen.has(row.url)) continue;
      if (row.url) seen.add(row.url);
      rows.push(row);
    } catch {
      // Ignore a line that was still being written.
    }
  }
  cache = { mtime, rows };
  return rows;
}
