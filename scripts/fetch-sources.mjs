import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = path.join(root, "data", "catalog.jsonl");
const mcp = JSON.parse(readFileSync(path.join(os.homedir(), ".cursor", "mcp.json"), "utf8"));
const key = mcp.mcpServers?.["21st"]?.headers?.["x-api-key"] || process.env.TWENTY_FIRST_API_KEY;
if (!key) {
  console.error("Missing 21st API key.");
  process.exit(1);
}

const pages = [];
const seen = new Set();
for (const line of readFileSync(catalog, "utf8").split("\n")) {
  if (!line) continue;
  const row = JSON.parse(line);
  if (row.type !== "component" || typeof row.url !== "string") continue;
  const match = row.url.match(/21st\.dev\/@([^/]+)\/components\/([^/?#]+)$/);
  if (!match || seen.has(row.url)) continue;
  seen.add(row.url);
  pages.push({ author: match[1], slug: match[2] });
}

console.log(`sources ${pages.length}`);
let cursor = 0;
let saved = 0;
let skipped = 0;
let failed = 0;
let pauseUntil = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function one(page) {
  const dir = path.join(root, "data", "sources", page.author, page.slug);
  const manifestPath = path.join(dir, "source.json");
  if (existsSync(manifestPath)) return "skip";
  const wait = pauseUntil - Date.now();
  if (wait > 0) await sleep(wait);
  const response = await fetch(
    `https://21st.dev/r/${page.author}/${page.slug}?api_key=${encodeURIComponent(key)}`,
    { signal: AbortSignal.timeout(25000) },
  );
  if (response.status === 429) {
    pauseUntil = Date.now() + 8000;
    throw new Error("429");
  }
  if (response.status === 401 || response.status === 403) {
    const body = await response.text();
    if (/quota|limit|retrieval/i.test(body)) throw new Error("quota");
    throw new Error(String(response.status));
  }
  if (!response.ok) throw new Error(String(response.status));
  const json = await response.json();
  const files = Array.isArray(json.files) ? json.files : [];
  const written = [];
  for (const file of files) {
    if (typeof file.content !== "string" || typeof file.path !== "string") continue;
    let rel = file.path.replace(/^\/+/, "");
    if (rel.includes("..") || rel.includes(":") || rel.includes("\\")) {
      rel = (rel.split(/[/\\]/).pop() || "source.txt").replace(/[<>:"|?*]/g, "_");
    }
    const abs = path.join(dir, rel);
    mkdirSync(path.dirname(abs), { recursive: true });
    writeFileSync(abs, file.content.replaceAll(key, ""));
    written.push(path.relative(root, abs).replaceAll("\\", "/"));
  }
  if (written.length === 0) throw new Error("empty");
  writeFileSync(manifestPath, JSON.stringify({ files: written }));
  return "saved";
}

async function worker() {
  while (cursor < pages.length) {
    const page = pages[cursor];
    cursor += 1;
    let done = false;
    for (let attempt = 0; attempt < 4 && !done; attempt++) {
      try {
        const result = await one(page);
        if (result === "skip") skipped += 1;
        else saved += 1;
        done = true;
      } catch (error) {
        const message = error instanceof Error ? error.message : "";
        if (message === "quota") {
          console.error("Stopped: the 21st registry refused the download.");
          process.exit(1);
        }
        if (attempt === 3) {
          failed += 1;
          console.error(`fail ${page.author}/${page.slug} ${message || "error"}`);
          done = true;
        } else await sleep(message === "429" ? 8000 : 500 * (attempt + 1));
      }
    }
    const finished = saved + skipped + failed;
    if (finished % 50 === 0 || cursor === pages.length) {
      console.log(`${cursor}/${pages.length} saved ${saved} skipped ${skipped} failed ${failed}`);
    }
  }
}

await Promise.all(Array.from({ length: 4 }, () => worker()));
console.log(`done saved ${saved} skipped ${skipped} failed ${failed}`);
process.exit(0);
