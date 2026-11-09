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

const FAMILY_LABEL: Record<string, string> = {
  lucide: "Lucide",
  tabler: "Tabler",
  ph: "Phosphor",
  hugeicons: "Hugeicons",
  ri: "Remix",
  heroicons: "Heroicons",
  "line-md": "Material Line",
};

export function fromIcon(id: string): Item {
  const [prefix = id, name = id] = id.split(":");
  return {
    id,
    type: "icon",
    name,
    author: FAMILY_LABEL[prefix] ?? prefix,
    preview: `https://api.iconify.design/${prefix}/${name}.svg?color=%23ffffff`,
    meta: prefix,
  };
}

export function reactImport(id: string): string | null {
  const [prefix, rawName] = id.split(":");
  if (!prefix || !rawName) return null;
  const pascal = rawName
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  if (!pascal) return null;
  if (prefix === "lucide") return `import { ${pascal} } from "lucide-react";`;
  if (prefix === "tabler") return `import { Icon${pascal} } from "@tabler/icons-react";`;
  if (prefix === "ph") return `import { ${pascal} } from "@phosphor-icons/react";`;
  return null;
}
