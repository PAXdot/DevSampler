import { iconSvgFile } from "@/lib/icons";
import { NextResponse } from "next/server";

const ICON_ID = /^[0-9a-f-]{36}$/i;

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id")?.trim() ?? "";
  if (!ICON_ID.test(id)) {
    return NextResponse.json({ error: "Unknown icon." }, { status: 400 });
  }
  const svg = iconSvgFile(id);
  if (!svg) return NextResponse.json({ error: "Icon SVG was not found." }, { status: 404 });
  return new NextResponse(svg, {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=86400",
    },
  });
}
