import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";

export function mediaFile(url: string) {
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 20);
  const ext = (url.match(/\.(webp|png|jpe?g|gif|avif|mp4|webm)(?:$|\?)/i)?.[1] ?? "img")
    .toLowerCase()
    .replace("jpeg", "jpg");
  const name = `${hash}.${ext}`;
  return {
    rel: `/media/${hash.slice(0, 2)}/${name}`,
    abs: path.join(process.cwd(), "public", "media", hash.slice(0, 2), name),
  };
}

export function localAsset(url: string | undefined) {
  if (!url) return undefined;
  if (url.startsWith("/")) return url;
  const file = mediaFile(url);
  return existsSync(file.abs) ? file.rel : undefined;
}

const DERIVATIVE = {
  thumb: ["card", "webp"],
  still: ["still", "webp"],
  clip: ["clip", "mp4"],
} as const;

export function derivativePath(rel: string, kind: keyof typeof DERIVATIVE) {
  if (!rel.startsWith("/media/") || /^\/media\/(card|still|clip)\//.test(rel)) return undefined;
  const file = rel.slice(rel.lastIndexOf("/") + 1);
  const base = file.replace(/\.[^.]+$/, "");
  if (!/^[0-9a-f]{8,}$/.test(base)) return undefined;
  const [dir, ext] = DERIVATIVE[kind];
  return `/media/${dir}/${base.slice(0, 2)}/${base}.${ext}`;
}

function readyDerivative(rel: string | undefined, kind: keyof typeof DERIVATIVE) {
  if (!rel) return undefined;
  const url = derivativePath(rel, kind);
  if (!url) return undefined;
  return existsSync(path.join(process.cwd(), "public", url.slice(1))) ? url : undefined;
}

export function presentItem<
  T extends {
    preview?: string;
    videoUrl?: string;
    url?: string;
    install?: string;
    thumb?: string;
    still?: string;
    clip?: string;
    name?: string;
    description?: string;
    about?: string;
    meta?: string;
  },
>(item: T): T {
  const next = { ...item };
  next.preview = localAsset(item.preview);
  next.videoUrl = localAsset(item.videoUrl);
  next.thumb = readyDerivative(next.preview, "thumb");
  next.still = readyDerivative(next.preview, "still");
  next.clip = readyDerivative(next.videoUrl, "clip");
  if (next.url && /21st\.dev/i.test(next.url)) delete next.url;
  if (next.install && /21st\.dev/i.test(next.install)) delete next.install;
  if ("name" in next && typeof next.name === "string") next.name = rebrand(next.name);
  if ("description" in next && typeof next.description === "string") next.description = rebrand(next.description);
  if ("about" in next && typeof next.about === "string") next.about = rebrand(next.about);
  if ("meta" in next && typeof next.meta === "string") next.meta = rebrand(next.meta);
  return next;
}

function rebrand(value: string) {
  return value.replace(/21st\.dev|21st\s+dev/gi, "EZPZ Components");
}
