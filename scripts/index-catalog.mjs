import { appendFileSync, createWriteStream, existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { appMeta, parseAppPage } from "../lib/parse-apps.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
const catalogFile = path.join(dataDir, "catalog.jsonl");
const readyFile = path.join(dataDir, "catalog.ready");
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const limitArg = process.argv.indexOf("--limit");
const limit = limitArg === -1 ? Infinity : Number(process.argv[limitArg + 1]);
const concurrency = 6;

mkdirSync(dataDir, { recursive: true });

const done = new Set();
if (existsSync(catalogFile)) {
  for (const line of readFileSync(catalogFile, "utf8").split("\n")) {
    if (!line) continue;
    try {
      done.add(JSON.parse(line).url);
    } catch {
      // A torn last line is skipped and fetched again.
    }
  }
}

const out = createWriteStream(catalogFile, { flags: "a" });
let pauseUntil = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function polite() {
  const wait = pauseUntil - Date.now();
  if (wait > 0) await sleep(wait);
}

async function getText(url, ms = 20000, accept = "text/html") {
  await polite();
  const response = await fetch(url, {
    headers: {
      "user-agent": UA,
      accept,
      "accept-language": "en-US,en;q=0.9",
    },
    signal: AbortSignal.timeout(ms),
  });
  if (response.status === 429) pauseUntil = Date.now() + 8000;
  const text = await response.text();
  return { status: response.status, text };
}

async function readPreview(url, maxBytes = 16000) {
  await polite();
  const response = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html" },
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok || !response.body) return "";
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  try {
    while (text.length < maxBytes) {
      const { done: ended, value } = await reader.read();
      if (ended) break;
      text += decoder.decode(value, { stream: true });
      if (text.includes("preview.")) break;
    }
  } finally {
    void reader.cancel().catch(() => {});
  }
  return (
    text.match(
      /https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"\\\s]+preview[^"\\\s]+\.(?:webp|png|jpe?g)/,
    )?.[0] ?? ""
  );
}

function previewFrom(html) {
  return (
    html.match(
      /https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"\\\s]+preview[^"\\\s]+\.(?:webp|png|jpe?g)/,
    )?.[0] ?? ""
  );
}

function slugFrom(pageUrl) {
  try {
    const parts = new URL(pageUrl).pathname.split("/").filter(Boolean);
    return parts.at(-1) ?? "";
  } catch {
    return "";
  }
}

// Newer pages embed the grid card next to its path:
// "url":"/@author/components/slug","preview":"…","video":"….mp4" or "video":null.
// Older pages embed the demo as "preview_url" / "video_url" on a path that contains the slug.
// videoUrl is "" only when that record explicitly has no demo. Missing means retry.
export function componentCard(html, pageUrl) {
  let pathname = "";
  try {
    pathname = new URL(pageUrl).pathname;
  } catch {
    return null;
  }
  const plain = html.replace(/\\"/g, '"');
  const token = `"url":"${pathname}"`;
  let from = 0;
  let preview = "";
  while (from < plain.length) {
    const at = plain.indexOf(token, from);
    if (at === -1) break;
    const next = plain.indexOf('"url":', at + token.length);
    const end = next === -1 ? at + 2000 : Math.min(next, at + 2000);
    const window = plain.slice(at, end);
    const still = window.match(
      /"preview":"(https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"]+\.(?:webp|png|jpe?g))"/,
    );
    if (still) preview = still[1];
    const video = window.match(/"video":"(https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"]+\.mp4)"/);
    if (video) return { preview: preview || still?.[1] || "", videoUrl: video[1] };
    if (/"video":(?:null|"")/.test(window)) return { preview, videoUrl: "" };
    from = at + token.length;
  }

  const slug = slugFrom(pageUrl);
  if (!slug) return preview ? { preview } : null;
  const needle = `/${slug}/`;
  for (const match of plain.matchAll(/"video_url":"(https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"]+\.mp4)"/g)) {
    if (!match[1].includes(needle)) continue;
    const around = plain.slice(Math.max(0, match.index - 500), match.index);
    const still = around.match(
      /"preview_url":"(https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"]+\.(?:webp|png|jpe?g))"/,
    );
    if (!preview && still?.[1].includes(needle)) preview = still[1];
    return { preview, videoUrl: match[1] };
  }
  for (const match of plain.matchAll(
    /"preview_url":"(https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"]+\.(?:webp|png|jpe?g))"/g,
  )) {
    if (!match[1].includes(needle)) continue;
    if (!preview) preview = match[1];
    const window = plain.slice(match.index, match.index + 600);
    if (/"video_url":(?:null|"")/.test(window)) return { preview, videoUrl: "" };
  }
  return preview ? { preview } : null;
}

function classify(loc) {
  let pathname = "";
  try {
    pathname = new URL(loc).pathname;
  } catch {
    return null;
  }
  const owned = pathname.match(/^\/(@[^/]+)\/(components|themes|templates)\/([^/]+)$/);
  if (owned) {
    const type = owned[2] === "components" ? "component" : owned[2] === "themes" ? "theme" : "template";
    return { type, author: owned[1].slice(1), slug: owned[3], url: loc };
  }
  const app = pathname.match(/^\/community\/apps\/([^/]+)$/);
  if (app) return { type: "app", author: "", slug: app[1], url: loc };
  return null;
}

function titleFrom(html, fallback) {
  const raw = html.match(/<title>([^<]+)/)?.[1] ?? fallback;
  return decode(raw)
    .replace(/\s+\|\s+21st.*$/i, "")
    .replace(/\s+\|\s+(Templates|Themes|Components|Open-source Apps)$/i, "")
    .replace(/\s+shadcn theme preview$/i, "")
    .trim();
}

function decode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function slugWindow(html, slug) {
  const token = `slug\\":\\"${slug}\\"`;
  const at = html.indexOf(token);
  if (at === -1) return "";
  return html.slice(Math.max(0, at - 500), at + 200);
}

function parseComponent(markdown, page) {
  if (!markdown.startsWith("#")) return null;
  const name = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim().replaceAll("_", " ");
  if (!name) return null;
  const description = markdown
    .match(/^>\s+([\s\S]*?)\n\n/m)?.[1]
    ?.replace(/\n> ?/g, " ")
    .trim();
  const tags = (markdown.match(/^- Tags:\s+(.+)$/m)?.[1] ?? "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  return {
    id: new URL(page.url).pathname,
    type: "component",
    name,
    description,
    author: markdown.match(/^- Author:\s+\[([^\]]+)\]/m)?.[1] || page.author,
    url: page.url,
    install: markdown.match(/```bash\r?\n([\s\S]*?)```/)?.[1]?.trim() || "",
    license: markdown.match(/^- License:\s+(\S+)/m)?.[1] || "",
    meta: tags.join(", "),
    tags,
    updated: page.updated || "",
  };
}

function parseTheme(html, page) {
  const id = html.match(/themeId\\":\\"([0-9a-f-]{36})/)?.[1] || "";
  const description = decode(html.match(/og:description" content="([^"]*)"/)?.[1] ?? "");
  const preview = html.match(/og:image" content="([^"]+)"/)?.[1] || "";
  return {
    id: id || new URL(page.url).pathname,
    type: "theme",
    name: titleFrom(html, page.slug),
    description,
    author: page.author,
    preview,
    url: page.url,
    meta: "",
    updated: page.updated || "",
  };
}

function isPaywalled(item) {
  if (typeof item.price === "number" && item.price > 0) return true;
  const text = `${item.name ?? ""}\n${item.description ?? ""}`;
  return /to purchase the full source code|paid PRO upgrade/i.test(text);
}

function parseTemplate(html, page) {
  const window = slugWindow(html, page.slug);
  const price = Number(window.match(/price\\":(\d+)/)?.[1]);
  const description = decode(html.match(/og:description" content="([^"]*)"/)?.[1] ?? "");
  const ownPreview = [
    ...html.matchAll(/https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"\\\s]+\.(?:webp|png|jpe?g)/g),
  ]
    .map((match) => match[0])
    .find((url) => url.includes(page.slug));
  const preview = ownPreview || html.match(/og:image" content="([^"]+)"/)?.[1] || "";
  return {
    id: new URL(page.url).pathname,
    type: "template",
    name: titleFrom(html, page.slug),
    description,
    author: page.author,
    preview,
    url: page.url,
    price: Number.isFinite(price) ? price : undefined,
    meta: Number.isFinite(price) ? (price === 0 ? "Free" : `$${price}`) : "",
    updated: page.updated || "",
  };
}

function parseApp(html, page) {
  const parsed = parseAppPage(html, page.slug);
  if (!parsed) return stub(page);
  const meta = appMeta(parsed);
  return {
    id: page.slug,
    type: "app",
    name: parsed.name || titleFrom(html, page.slug),
    description: parsed.description,
    about: parsed.about,
    preview: parsed.poster,
    videoUrl: parsed.video,
    url: page.url,
    repo: parsed.repoUrl,
    demo: parsed.demo,
    license: parsed.license,
    meta,
    tags: parsed.tags,
    updated: page.updated || "",
  };
}

function stub(page) {
  return {
    id: page.type === "app" ? page.slug : new URL(page.url).pathname,
    type: page.type,
    name: page.slug.replaceAll("-", " "),
    author: page.author,
    url: page.url,
    updated: page.updated || "",
  };
}

async function indexPage(page) {
  try {
    if (page.type === "component") {
      const [markdown, pageHtml] = await Promise.all([
        getText(`${page.url}.md`, 20000, "text/markdown"),
        getText(page.url).catch(() => ({ status: 0, text: "" })),
      ]);
      const item =
        markdown.status === 200 ? parseComponent(markdown.text, page) : null;
      const row = item ?? stub(page);
      const card = pageHtml.status === 200 ? componentCard(pageHtml.text, page.url) : null;
      const preview = card?.preview || previewFrom(pageHtml.text);
      if (preview) row.preview = preview;
      else {
        const fallback = await readPreview(page.url).catch(() => "");
        if (fallback) row.preview = fallback;
      }
      if (card && Object.hasOwn(card, "videoUrl")) row.videoUrl = card.videoUrl;
      return row;
    }
    const pageHtml = await getText(page.url);
    if (pageHtml.status !== 200 || pageHtml.text.includes("<title>Page not found")) {
      return stub(page);
    }
    if (page.type === "theme") return parseTheme(pageHtml.text, page);
    if (page.type === "template") return parseTemplate(pageHtml.text, page);
    return parseApp(pageHtml.text, page);
  } catch {
    return stub(page);
  }
}

function writeRow(item) {
  return new Promise((resolve, reject) => {
    out.write(`${JSON.stringify(item)}\n`, (error) => (error ? reject(error) : resolve()));
  });
}

function rewriteCatalog(rows) {
  const seen = new Set();
  const lines = [];
  for (const row of rows) {
    if (!row.url || seen.has(row.url)) continue;
    seen.add(row.url);
    lines.push(JSON.stringify(row));
  }
  const temporary = `${catalogFile}.tmp`;
  writeFileSync(temporary, `${lines.join("\n")}\n`);
  renameSync(temporary, catalogFile);
}

async function fillPreviews() {
  const rows = readFileSync(catalogFile, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const targets = rows.filter((row) => row.type === "component" && !row.preview);
  console.log(`filling ${targets.length} previews`);
  let cursor = 0;
  let filled = 0;
  async function worker() {
    while (cursor < targets.length) {
      const row = targets[cursor];
      cursor += 1;
      const preview = await readPreview(row.url, 300000).catch(() => "");
      if (preview) {
        row.preview = preview;
        filled += 1;
      }
      if (cursor % 50 === 0 || cursor === targets.length) {
        console.log(`${cursor}/${targets.length} found ${filled}`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  rewriteCatalog(rows);
  console.log(`previews filled ${filled}`);
}

async function readComponentPage(url) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const page = await getText(url, 25000);
      if (page.status === 200) return page.text;
      if (page.status !== 429 && page.status < 500) return "";
    } catch {
      // Retry a timed-out page on the next pass when it still has no videoUrl.
    }
    await sleep(1500 * (attempt + 1));
  }
  return "";
}

async function fillVideos() {
  const rows = readFileSync(catalogFile, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const targets = rows.filter((row) => row.type === "component" && !Object.hasOwn(row, "videoUrl"));
  console.log(`filling ${targets.length} videos`);
  let cursor = 0;
  let doneCount = 0;
  let found = 0;
  let empty = 0;
  let missed = 0;
  let sinceWrite = 0;

  async function worker() {
    while (cursor < targets.length) {
      const row = targets[cursor];
      cursor += 1;
      const html = row.url ? await readComponentPage(row.url) : "";
      if (!html) {
        missed += 1;
      } else if (html.includes("<title>Page not found")) {
        row.videoUrl = "";
        empty += 1;
      } else {
        const card = componentCard(html, row.url);
        if (card && Object.hasOwn(card, "videoUrl")) {
          row.videoUrl = card.videoUrl;
          if (card.videoUrl) found += 1;
          else empty += 1;
        } else {
          missed += 1;
        }
      }
      doneCount += 1;
      sinceWrite += 1;
      if (sinceWrite >= 50) {
        sinceWrite = 0;
        rewriteCatalog(rows);
      }
      if (doneCount % 50 === 0 || doneCount === targets.length) {
        const line = `${doneCount}/${targets.length} videos ${found} none ${empty} missed ${missed}`;
        console.log(line);
        appendFileSync(path.join(dataDir, "index-progress.txt"), `${line}\n`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  rewriteCatalog(rows);
  console.log(`videos filled ${found} none ${empty} missed ${missed}`);
}

if (process.argv.includes("--fill-previews") || process.argv.includes("--fill-videos")) {
  await new Promise((resolve) => out.end(resolve));
  if (process.argv.includes("--fill-previews")) await fillPreviews();
  if (process.argv.includes("--fill-videos")) await fillVideos();
  process.exit(0);
}

const sitemap = await getText("https://21st.dev/sitemap.xml", 60000, "application/xml,text/xml");
if (sitemap.status !== 200) {
  console.error(`Sitemap returned ${sitemap.status}`);
  process.exit(1);
}

const pages = [];
const pattern = /<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]+)<\/lastmod>)?/g;
for (const match of sitemap.text.matchAll(pattern)) {
  const page = classify(match[1]);
  if (!page || done.has(page.url)) continue;
  page.updated = match[2] ?? "";
  pages.push(page);
}

const counts = {};
for (const page of pages) counts[page.type] = (counts[page.type] ?? 0) + 1;
const queuedLine = `queued ${JSON.stringify(counts)} already ${done.size}`;
console.log(queuedLine);
appendFileSync(path.join(dataDir, "index-progress.txt"), `${queuedLine}\n`);

const selected = [];
const used = {};
for (const page of pages) {
  used[page.type] = used[page.type] ?? 0;
  if (used[page.type] >= limit) continue;
  used[page.type] += 1;
  selected.push(page);
}

let finished = 0;
let cursor = 0;
async function worker() {
  while (cursor < selected.length) {
    const page = selected[cursor];
    cursor += 1;
    const item = await indexPage(page);
    if (isPaywalled(item)) {
      finished += 1;
      if (finished % 50 === 0 || finished === selected.length) {
        const line = `${finished}/${selected.length} skipped paywall ${item.type} ${item.name}`;
        console.log(line);
        appendFileSync(path.join(dataDir, "index-progress.txt"), `${line}\n`);
      }
      continue;
    }
    await writeRow(item);
    finished += 1;
    if (finished % 50 === 0 || finished === selected.length) {
      const line = `${finished}/${selected.length} ${item.type} ${item.name}`;
      console.log(line);
      appendFileSync(path.join(dataDir, "index-progress.txt"), `${line}\n`);
    }
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));
await new Promise((resolve) => out.end(resolve));

if (limit === Infinity) {
  const summary = { builtAt: new Date().toISOString(), saved: done.size + finished };
  await import("node:fs/promises").then((fs) => fs.writeFile(readyFile, JSON.stringify(summary)));
  console.log("ready", summary);
}

process.exit(0);
