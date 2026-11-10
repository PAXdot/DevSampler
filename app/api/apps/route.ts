import { appFacets, appPlace } from "@/lib/apps";
import { queryCatalog } from "@/lib/catalog";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const offset = Number(params.get("offset") ?? "0");
  const page = Number.isFinite(offset) ? Math.max(0, offset) : 0;
  const group = params.get("group") ?? "";
  const section = params.get("cat") ?? "";
  const matched = queryCatalog({
    type: "app",
    q: params.get("q")?.trim() ?? "",
    offset: 0,
    limit: 500,
  });
  if (!matched) {
    return NextResponse.json({ items: [], total: 0, error: "The local catalog is missing." });
  }

  const filtered = matched.items.filter((item) => {
    const place = appPlace(item.tags);
    if (group && place?.groupId !== group) return false;
    if (section && place?.sectionId !== section) return false;
    return true;
  });
  const limit = section ? 48 : filtered.length;
  return NextResponse.json({
    items: filtered.slice(page, page + limit),
    total: filtered.length,
    facets: appFacets(matched.items),
  });
}
