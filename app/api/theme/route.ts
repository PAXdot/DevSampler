import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const themeId = /^[0-9a-f-]{36}$/i;

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id")?.trim() ?? "";
  if (!themeId.test(id)) {
    return NextResponse.json({ error: "This theme has no local CSS." }, { status: 404 });
  }
  const file = path.join(process.cwd(), "data", "themes", `${id}.css`);
  if (!existsSync(file)) {
    return NextResponse.json({ error: "This theme's CSS is not on disk yet." }, { status: 404 });
  }
  const css = readFileSync(file, "utf8");
  return NextResponse.json({ css, colors: palette(css) });
}

function palette(css: string): string[] {
  const dark = css.split(".dark")[1] ?? css;
  return ["background", "primary", "secondary", "accent"]
    .map((name) => dark.match(new RegExp(`--${name}:\\s*([^;]+)`))?.[1]?.trim())
    .filter((color): color is string => Boolean(color));
}
