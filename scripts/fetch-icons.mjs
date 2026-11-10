import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "data", "icons");
const catalogPath = path.join(dir, "catalog.jsonl");
const setsPath = path.join(dir, "sets.json");
const styles = ["outline", "fill", "duotone", "light", "bold", "thin"];
const sizes = [24, 20, 16];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function trpc(name, payload) {
  const url = new URL(`https://21st.dev/api/trpc/${name}`);
  if (payload !== undefined) {
    url.searchParams.set("input", JSON.stringify({ json: payload }));
  }
  const response = await fetch(url, {
    headers: { accept: "application/json", "user-agent": "DevSampler" },
    signal: AbortSignal.timeout(40000),
  });
  if (response.status === 429) {
    await sleep(4000);
    throw new Error("429");
  }
  const data = await response.json();
  if (!response.ok || data.error) {
    throw new Error(data.error?.message || `icons ${response.status}`);
  }
  return data.result?.data?.json;
}

function slimSet(row) {
  return {
    slug: row.slug,
    name: row.name,
    author: row.author_name || row.name,
    username: row.author_username || "",
    license: row.license || "",
    site: row.site_url || "",
    repo: row.repo_url || "",
    animated: Boolean(row.is_animated),
    count: row.icons_count || 0,
  };
}

function slimIcon(row, style) {
  const svg = typeof row.svg_body === "string" ? row.svg_body : "";
  if (!svg || /<script|javascript:|foreignObject/i.test(svg)) return null;
  if (typeof row.id !== "string" || typeof row.slug !== "string") return null;
  return {
    id: row.id,
    slug: row.slug,
    name: typeof row.name === "string" ? row.name : row.slug,
    category: typeof row.category === "string" ? row.category : "",
    set: typeof row.set_slug === "string" ? row.set_slug : "",
    style,
    animated: Boolean(row.is_animated),
    copies: typeof row.copies_count === "number" ? row.copies_count : 0,
    viewBox: typeof row.view_box === "string" ? row.view_box : "0 0 24 24",
    svg,
  };
}

mkdirSync(dir, { recursive: true });
const sets = await trpc("icons.sets");
if (!Array.isArray(sets) || sets.length === 0) {
  console.error("No icon sets returned.");
  process.exit(1);
}
writeFileSync(setsPath, `${JSON.stringify(sets.map(slimSet), null, 2)}\n`);
console.log(`sets ${sets.length}`);

const seen = new Set();
if (existsSync(catalogPath)) {
  for (const line of readFileSync(catalogPath, "utf8").split("\n")) {
    if (!line) continue;
    try {
      const row = JSON.parse(line);
      if (row.id && row.style) seen.add(`${row.style}:${row.id}`);
    } catch {
      // A torn last line is ignored and rewritten below.
    }
  }
}

const out = createWriteStream(catalogPath, { flags: "a" });
let written = 0;
for (const style of styles) {
  for (const opticalSize of sizes) {
  let cursor;
  let pages = 0;
  for (;;) {
    let page;
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        page = await trpc("icons.list", {
          style,
          opticalSize,
          animatedOnly: false,
          limit: 500,
          cursor,
        });
        break;
      } catch (error) {
        const message = error instanceof Error ? error.message : "";
        if (attempt === 4) throw error;
        await sleep(message === "429" ? 5000 : 1000 * (attempt + 1));
      }
    }
    const items = Array.isArray(page?.items) ? page.items : [];
    for (const row of items) {
      const icon = slimIcon(row, style);
      if (!icon) continue;
      const key = `${style}:${icon.id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.write(`${JSON.stringify(icon)}\n`);
      written += 1;
    }
    pages += 1;
    const next = page?.nextCursor;
    console.log(`${style}@${opticalSize} page ${pages} +${items.length} next ${next ?? "end"} total ${page?.total}`);
    if (next == null || items.length === 0) break;
    cursor = next;
  }
  }
}
await new Promise((resolve, reject) => {
  out.end(() => resolve());
  out.on("error", reject);
});
console.log(`wrote ${written} new icons, catalog keys ${seen.size}`);
