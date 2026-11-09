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

export function presentItem<T extends { preview?: string; videoUrl?: string; url?: string; install?: string }>(
  item: T,
): T {
  const next = { ...item };
  next.preview = localAsset(item.preview);
  next.videoUrl = localAsset(item.videoUrl);
  if (next.url && /21st\.dev/i.test(next.url)) delete next.url;
  if (next.install && /21st\.dev/i.test(next.install)) delete next.install;
  return next;
}
