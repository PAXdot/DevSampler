import { fromIcon, reactImport } from "@/lib/items";
import { ICON_FAMILIES } from "@/lib/shelves";
import { NextResponse } from "next/server";

const ICON_ID = /^[a-z0-9-]+:[a-z0-9-]+$/i;

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const id = params.get("id")?.trim() ?? "";
  if (id) return iconSource(id);

  const family = params.get("family") ?? "all";
  const q = params.get("q")?.trim() ?? "";
  const known = ICON_FAMILIES.find((item) => item.id === family) ?? ICON_FAMILIES[0];
  const query = q || "user";
  const url = new URL("https://api.iconify.design/search");
  url.searchParams.set("query", query);
  url.searchParams.set("limit", "48");
  if (known.prefixes) url.searchParams.set("prefixes", known.prefixes);

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Iconify returned ${response.status}`);
    const data = (await response.json()) as { icons?: unknown };
    const icons = Array.isArray(data.icons)
      ? data.icons.filter((icon): icon is string => typeof icon === "string")
      : [];
    return NextResponse.json({
      items: icons.map(fromIcon),
      note: q ? undefined : "Showing “user”. Type what the icon means.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Icon search failed.";
    return NextResponse.json({ error: message, items: [] }, { status: 502 });
  }
}

async function iconSource(id: string) {
  if (!ICON_ID.test(id)) {
    return NextResponse.json({ error: "Unknown icon." }, { status: 400 });
  }
  const [prefix, name] = id.split(":");
  const response = await fetch(
    `https://api.iconify.design/${prefix}/${name}.svg?color=%23ffffff`,
    { cache: "no-store" },
  );
  if (!response.ok) {
    return NextResponse.json({ error: "Icon SVG was not found." }, { status: 502 });
  }
  const svg = await response.text();
  return NextResponse.json({ svg, react: reactImport(id) });
}
