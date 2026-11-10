import { readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { appMeta, parseAppPage } from "../lib/parse-apps.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogFile = path.join(root, "data", "catalog.jsonl");
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const concurrency = 4;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let pauseUntil = 0;

async function polite() {
  const wait = pauseUntil - Date.now();
  if (wait > 0) await sleep(wait);
}

async function getText(url) {
  await polite();
  const response = await fetch(url, {
    headers: {
      "user-agent": UA,
      accept: "text/html",
      "accept-language": "en-US,en;q=0.9",
    },
    signal: AbortSignal.timeout(25000),
  });
  if (response.status === 429) pauseUntil = Date.now() + 8000;
  const text = await response.text();
  return { status: response.status, text };
}

function needsFetch(row) {
  const preview = typeof row.preview === "string" ? row.preview : "";
  const video = typeof row.videoUrl === "string" ? row.videoUrl : "";
  return !(
    preview.includes("/oss-apps/") &&
    /\.(?:mp4|webm)(?:$|\?)/i.test(video) &&
    row.about &&
    row.meta &&
    row.repo
  );
}

function catalogRow(existing, page) {
  const row = {
    id: existing.id || page.slug,
    type: "app",
    name: page.name,
    description: page.description,
    url: existing.url,
    updated: existing.updated || "",
  };
  if (page.about) row.about = page.about;
  if (page.poster) row.preview = page.poster;
  if (page.video) row.videoUrl = page.video;
  if (page.repoUrl) row.repo = page.repoUrl;
  if (page.demo) row.demo = page.demo;
  if (page.license) row.license = page.license;
  const meta = appMeta(page);
  if (meta) row.meta = meta;
  if (page.tags.length) row.tags = page.tags;
  return row;
}

const rows = readFileSync(catalogFile, "utf8")
  .split("\n")
  .filter(Boolean)
  .map((line) => JSON.parse(line));
const targets = rows.filter((row) => row.type === "app" && typeof row.url === "string" && needsFetch(row));
console.log(`apps to fetch ${targets.length}`);

let cursor = 0;
let updated = 0;
let failed = 0;
const byUrl = new Map();

async function one(row) {
  const slug = String(row.url).match(/\/community\/apps\/([^/?#]+)/)?.[1] || String(row.id);
  let last = "error";
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const page = await getText(row.url);
      if (page.status === 429) throw new Error("429");
      if (page.status !== 200 || page.text.includes("<title>Page not found")) {
        throw new Error(String(page.status));
      }
      const parsed = parseAppPage(page.text, slug);
      if (!parsed?.poster) throw new Error("no poster");
      byUrl.set(row.url, catalogRow(row, parsed));
      return "ok";
    } catch (error) {
      last = error instanceof Error ? error.message : "error";
      await sleep(last === "429" ? 12000 : 500 * (attempt + 1));
    }
  }
  console.error(`fail ${slug} ${last}`);
  return "fail";
}

async function worker() {
  while (cursor < targets.length) {
    const row = targets[cursor];
    cursor += 1;
    const result = await one(row);
    if (result === "ok") updated += 1;
    else failed += 1;
    const finished = updated + failed;
    if (finished % 10 === 0 || finished === targets.length) {
      console.log(`${finished}/${targets.length} updated ${updated} failed ${failed}`);
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));

if (updated === 0 && targets.length > 0) {
  console.error("no apps updated");
  process.exit(1);
}

const next = rows.map((row) => (row.type === "app" && byUrl.has(row.url) ? byUrl.get(row.url) : row));
const temporary = `${catalogFile}.tmp`;
writeFileSync(temporary, `${next.map((row) => JSON.stringify(row)).join("\n")}\n`);
renameSync(temporary, catalogFile);
console.log(`wrote ${updated} apps, failed ${failed}, rows ${next.length}`);
process.exit(failed > 0 ? 1 : 0);
