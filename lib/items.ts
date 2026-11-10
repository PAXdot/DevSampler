import type { Item } from "./types";

function str(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

export function fromVideoBlock(raw: unknown, aspect?: string): Item | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const id = str(row.ref);
  if (!id) return null;
  const posters =
    row.posters && typeof row.posters === "object"
      ? (row.posters as Record<string, unknown>)
      : {};
  const loops =
    row.loopUrls && typeof row.loopUrls === "object"
      ? (row.loopUrls as Record<string, unknown>)
      : {};
  const tags = Array.isArray(row.tags)
    ? row.tags.filter((tag): tag is string => typeof tag === "string").slice(0, 6)
    : [];
  const kind = str(row.kind);
  const job = str(row.job);
  const preview =
    (aspect && str(posters[aspect])) || str(row.posterUrl) || str(posters["16:9"]);
  const videoUrl =
    (aspect && str(loops[aspect])) ||
    str(loops["16:9"]) ||
    Object.values(loops).map(str).find((value): value is string => Boolean(value));
  return {
    id,
    type: "video",
    name: str(row.name) ?? id,
    description: tags.length ? tags.join(" · ") : undefined,
    preview,
    videoUrl,
    author: kind,
    meta: [kind, job].filter(Boolean).join(" · ") || undefined,
  };
}

