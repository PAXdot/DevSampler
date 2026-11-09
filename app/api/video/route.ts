import { fromVideoBlock } from "@/lib/items";
import { presentItem } from "@/lib/media";
import { VIDEO_ASPECTS, VIDEO_JOBS, VIDEO_KINDS } from "@/lib/shelves";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const file = path.join(process.cwd(), "data", "video.json");
let cache: { mtime: number; blocks: unknown[] } | null = null;

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const q = params.get("q")?.trim().toLowerCase() ?? "";
  const kind = params.get("kind") ?? "";
  const job = params.get("job") ?? "";
  const aspect = (VIDEO_ASPECTS as readonly string[]).includes(params.get("aspect") ?? "")
    ? params.get("aspect") ?? undefined
    : undefined;

  if (!existsSync(file)) {
    return NextResponse.json({ items: [], note: "The video catalog is not on disk yet." });
  }

  const items = readBlocks()
    .map((block) => fromVideoBlock(block, aspect))
    .filter((item) => item !== null)
    .filter((item) => {
      if ((VIDEO_KINDS as readonly string[]).includes(kind) && item.author !== kind) return false;
      if ((VIDEO_JOBS as readonly string[]).includes(job) && !item.meta?.includes(job)) return false;
      if (!q) return true;
      return `${item.name} ${item.description ?? ""} ${item.meta ?? ""}`.toLowerCase().includes(q);
    })
    .map((item) => presentItem(item));

  return NextResponse.json({ items, total: items.length });
}

function readBlocks(): unknown[] {
  const mtime = statSync(file).mtimeMs;
  if (cache && cache.mtime === mtime) return cache.blocks;
  const data = JSON.parse(readFileSync(file, "utf8"));
  const blocks = Array.isArray(data) ? data : [];
  cache = { mtime, blocks };
  return blocks;
}
