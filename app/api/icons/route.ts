import { iconById, queryIcons } from "@/lib/icons";
import { NextResponse } from "next/server";

const ICON_ID = /^[0-9a-f-]{36}$/i;

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const id = params.get("id")?.trim() ?? "";
  if (id) {
    if (!ICON_ID.test(id)) {
      return NextResponse.json({ error: "Unknown icon." }, { status: 400 });
    }
    const icon = iconById(id);
    if (!icon) return NextResponse.json({ error: "Icon SVG was not found." }, { status: 404 });
    return NextResponse.json({ svg: icon.svg, react: icon.react });
  }

  const offset = Number(params.get("offset") ?? "0");
  const local = queryIcons({
    q: params.get("q") ?? "",
    category: params.get("cat") ?? "",
    set: params.get("set") || params.get("family") || "",
    style: params.get("style") ?? "",
    animated: params.get("motion") === "animated",
    offset: Number.isFinite(offset) ? offset : 0,
    limit: 48,
  });
  if (!local) {
    return NextResponse.json({
      items: [],
      total: 0,
      error: "The icon catalog is not on disk yet.",
    });
  }
  return NextResponse.json({ items: local.items, total: local.total, facets: local.facets });
}
