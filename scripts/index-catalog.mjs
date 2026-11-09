import { appendFileSync, createWriteStream, existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  const description = decode(html.match(/og:description" content="([^"]*)"/)?.[1] ?? "");
  const images = [
    ...html.matchAll(/https:\/\/cdn\.21st\.dev\/(?!cdn-cgi\/)[^"\\\s]+\.(?:webp|png|jpe?g)/g),
  ].map((match) => match[0]);
  const preview = images.find((url) => /\/preview[-.]/.test(url)) || images[0] || "";
  const head = html.slice(0, 90000);
  const stars = Number(head.match(/stars\\":(\d+)/)?.[1] ?? head.match(/"stars":(\d+)/)?.[1]);
  const framework = head.match(/framework\\":\\"([^\\"]+)/)?.[1] || head.match(/"framework":"([^"]+)"/)?.[1] || "";
  const repo = html.match(/codeRepository":"(https:[^"]+)"/)?.[1] || "";
  return {
    id: page.slug,
    type: "app",
    name: titleFrom(html, page.slug),
    description,
    preview,
    url: page.url,
    repo,
    meta: [framework, Number.isFinite(stars) && stars > 0 ? `${stars} stars` : ""].filter(Boolean).join(" · "),
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
      const [markdown, preview] = await Promise.all([
        getText(`${page.url}.md`, 20000, "text/markdown"),
        readPreview(page.url).catch(() => ""),
      ]);
      const item =
        markdown.status === 200 ? parseComponent(markdown.text, page) : null;
      const row = item ?? stub(page);
      if (preview) row.preview = preview;
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
  const seen = new Set();
  const lines = [];
  for (const row of rows) {
    if (!row.url || seen.has(row.url)) continue;
    seen.add(row.url);
    lines.push(JSON.stringify(row));
  }
  const { writeFileSync, renameSync } = await import("node:fs");
  const temporary = `${catalogFile}.tmp`;
  writeFileSync(temporary, `${lines.join("\n")}\n`);
  renameSync(temporary, catalogFile);
  console.log(`previews filled ${filled}`);
}

if (process.argv.includes("--fill-previews")) {
  await new Promise((resolve) => out.end(resolve));
  await fillPreviews();
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
