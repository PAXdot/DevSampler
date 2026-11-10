import { catalogCounts } from "@/lib/catalog";
import { outlineCount } from "@/lib/icons";
import { fromVideoBlock } from "@/lib/items";
import type { ShelfId } from "@/lib/shelves";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const videoFile = path.join(process.cwd(), "data", "video.json");
let videoCache: { mtime: number; count: number } | null = null;

export async function GET() {
  const catalog = catalogCounts();
  const shelves: Partial<Record<ShelfId, number>> = {
    components: catalog?.types.component,
    templates: catalog?.types.template,
    themes: catalog?.types.theme,
    apps: catalog?.types.app,
    icons: outlineCount(),
    video: videoCount(),
  };
  return NextResponse.json({ shelves, categories: catalog?.categories ?? {} });
}

function videoCount(): number | undefined {
  if (!existsSync(videoFile)) return undefined;
  const mtime = statSync(videoFile).mtimeMs;
  if (videoCache && videoCache.mtime === mtime) return videoCache.count;
  try {
    const data = JSON.parse(readFileSync(videoFile, "utf8"));
    const count = Array.isArray(data) ? data.filter((block) => fromVideoBlock(block) !== null).length : 0;
    videoCache = { mtime, count };
    return count;
  } catch {
    return undefined;
  }
}
