import { createHash } from "node:crypto";
import { createWriteStream, existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function mediaFile(url) {
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 20);
  const ext = (url.match(/\.(webp|png|jpe?g|gif|avif)(?:$|\?)/i)?.[1] ?? "img")
    .toLowerCase()
    .replace("jpeg", "jpg");
  const name = `${hash}.${ext}`;
  return {
    rel: `/media/${hash.slice(0, 2)}/${name}`,
    abs: path.join(root, "public", "media", hash.slice(0, 2), name),
  };
}
const catalog = path.join(root, "data", "catalog.jsonl");
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const urls = [];
const seen = new Set();
for (const line of readFileSync(catalog, "utf8").split("\n")) {
  if (!line) continue;
  const row = JSON.parse(line);
  const url = row.preview;
  if (typeof url !== "string" || !url.startsWith("http") || seen.has(url)) continue;
  seen.add(url);
  urls.push(url);
}

console.log(`assets ${urls.length}`);
let cursor = 0;
let saved = 0;
let failed = 0;

async function one(url) {
  const file = mediaFile(url);
  if (existsSync(file.abs)) return "skip";
  const response = await fetch(url, {
    headers: { "user-agent": UA, accept: "image/avif,image/webp,image/*,*/*" },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(String(response.status));
  mkdirSync(path.dirname(file.abs), { recursive: true });
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 32) throw new Error("empty");
  await new Promise((resolve, reject) => {
    const out = createWriteStream(file.abs);
    out.on("error", reject);
    out.on("finish", resolve);
    out.end(bytes);
  });
  return "saved";
}

async function worker() {
  while (cursor < urls.length) {
    const url = urls[cursor];
    cursor += 1;
    try {
      const result = await one(url);
      if (result === "saved") saved += 1;
    } catch {
      failed += 1;
    }
    if (cursor % 100 === 0 || cursor === urls.length) {
      console.log(`${cursor}/${urls.length} saved ${saved} failed ${failed}`);
    }
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));
console.log(`done saved ${saved} failed ${failed}`);
process.exit(0);
