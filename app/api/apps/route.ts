import { queryCatalog } from "@/lib/catalog";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const offset = Number(params.get("offset") ?? "0");
  const local = queryCatalog({
    type: "app",
    q: params.get("q")?.trim() ?? "",
    offset: Number.isFinite(offset) ? offset : 0,
    limit: 48,
  });
  if (!local) {
    return NextResponse.json({ items: [], total: 0, error: "The local catalog is missing." });
  }
  return NextResponse.json({ items: local.items, total: local.total });
}
