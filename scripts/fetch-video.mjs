import { createHash } from "node:crypto";
import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "data", "video.json");
const mcp = JSON.parse(readFileSync(path.join(os.homedir(), ".cursor", "mcp.json"), "utf8"));
const key = mcp.mcpServers?.["21st"]?.headers?.["x-api-key"] || process.env.TWENTY_FIRST_API_KEY;
if (!key) {
  console.error("Missing 21st API key.");
  process.exit(1);
}

const kinds = ["element", "scene", "background", "transition", "captions", "overlay-fx", "template"];
const jobs = [
  "titles",
  "product-ui",
  "devices",
  "code",
  "process",
  "data",
  "logos",
  "gallery",
  "testimonials",
  "cta",
  "backgrounds",
  "cursors",
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callTool(args) {
  const response = await fetch("https://21st.dev/api/mcp", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json, text/event-stream",
      "x-api-key": key,
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "tools/call",
      params: { name: "video_list_blocks", arguments: args },
    }),
    signal: AbortSignal.timeout(25000),
  });
  const data = await response.json();
  if (response.status === 429) {
    await sleep(8000);
    throw new Error("429");
  }
  if (!response.ok || data.error) throw new Error(data.error?.message || String(response.status));
  const blocks = data.result?.structuredContent?.blocks;
  return Array.isArray(blocks) ? blocks : [];
}

function slim(block) {
  if (!block || typeof block !== "object" || typeof block.ref !== "string") return null;
  return {
    ref: block.ref,
    name: block.name,
    kind: block.kind,
    job: block.job,
    tags: Array.isArray(block.tags) ? block.tags.slice(0, 12) : [],
    posterUrl: block.posterUrl,
    posters: block.posters,
    loopUrls: block.loopUrls,
  };
}

const byRef = new Map();
const queries = [{ limit: 100 }, ...kinds.map((kind) => ({ kind, limit: 100 })), ...jobs.map((job) => ({ job, limit: 100 }))];
for (const args of queries) {
  let blocks = [];
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      blocks = await callTool(args);
      break;
    } catch (error) {
      if (attempt === 3) console.error(`list failed ${JSON.stringify(args)} ${error instanceof Error ? error.message : ""}`);
      else await sleep(500 * (attempt + 1));
    }
  }
  for (const block of blocks) {
    const row = slim(block);
    if (row) byRef.set(row.ref, row);
  }
  console.log(`listed ${byRef.size}`);
}

writeFileSync(out, JSON.stringify([...byRef.values()]));
console.log(`video ${byRef.size}`);

function mediaFile(url) {
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 20);
  const ext = (url.match(/\.(webp|png|jpe?g|gif|avif|mp4|webm)(?:$|\?)/i)?.[1] ?? "img")
    .toLowerCase()
    .replace("jpeg", "jpg");
  const name = `${hash}.${ext}`;
  return path.join(root, "public", "media", hash.slice(0, 2), name);
}

const urls = [];
const seenUrl = new Set();
for (const block of byRef.values()) {
  const posters = block.posters && typeof block.posters === "object" ? Object.values(block.posters) : [];
  const loops = block.loopUrls && typeof block.loopUrls === "object" ? Object.values(block.loopUrls) : [];
  for (const url of [block.posterUrl, ...posters, ...loops]) {
    if (typeof url !== "string" || !url.startsWith("http") || seenUrl.has(url)) continue;
    seenUrl.add(url);
    urls.push(url);
  }
}

let cursor = 0;
let saved = 0;
let failed = 0;

async function download(url) {
  const abs = mediaFile(url);
  if (existsSync(abs)) return;
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(String(response.status));
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 32) throw new Error("empty");
  mkdirSync(path.dirname(abs), { recursive: true });
  await new Promise((resolve, reject) => {
    const file = createWriteStream(abs);
    file.on("error", reject);
    file.on("finish", resolve);
    file.end(bytes);
  });
  saved += 1;
}

async function worker() {
  while (cursor < urls.length) {
    const url = urls[cursor];
    cursor += 1;
    try {
      await download(url);
    } catch {
      failed += 1;
    }
    if (cursor % 25 === 0 || cursor === urls.length) {
      console.log(`media ${cursor}/${urls.length} saved ${saved} failed ${failed}`);
    }
  }
}

console.log(`media ${urls.length}`);
await Promise.all(Array.from({ length: 6 }, () => worker()));
console.log(`done media saved ${saved} failed ${failed}`);
process.exit(0);
