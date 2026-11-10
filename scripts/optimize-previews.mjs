import { spawn } from "node:child_process";
import { mkdir, open, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const media = path.join(root, "public", "media");
const limit = Number(process.env.LIMIT || "0");
const imageWorkers = Math.max(1, Number(process.env.WORKERS || "1"));
const videoWorkers = Math.max(1, Number(process.env.VIDEO_WORKERS || "1"));

const CARD_W = 1280;
const STILL_W = 1920;
const CLIP_BOX = 854;

const tally = {
  card: bucket(),
  still: bucket(),
  clip: bucket(),
};

function bucket() {
  return { made: 0, discarded: 0, skipped: 0, failed: 0, before: 0, after: 0 };
}

const started = Date.now();

if (process.argv.includes("--check")) {
  await checkSizes();
} else {
  const { images, videos } = await collect();
  const imageList = limit > 0 ? images.slice(0, limit) : images;
  const videoList = limit > 0 ? videos.slice(0, Math.max(1, Math.ceil(limit / 8))) : videos;
  console.log(`optimizing ${imageList.length} images and ${videoList.length} videos`);
  await pool(imageList, imageWorkers, optimizeImage);
  await pool(videoList, videoWorkers, optimizeVideo);
  report();
}

function report() {
  for (const [kind, row] of Object.entries(tally)) {
    const saved = (row.before - row.after) / 1024 / 1024;
    console.log(
      `${kind} made ${row.made} discarded ${row.discarded} skipped ${row.skipped} failed ${row.failed} saved ${saved.toFixed(1)}MB`,
    );
  }
  console.log(`done in ${((Date.now() - started) / 1000).toFixed(0)}s`);
}

async function collect() {
  const images = [];
  const videos = [];
  const entries = await readdir(media, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === "card" || entry.name === "still" || entry.name === "clip") continue;
    if (!/^[0-9a-f]{2}$/.test(entry.name)) continue;
    const dir = path.join(media, entry.name);
    for (const name of await readdir(dir)) {
      const ext = path.extname(name).toLowerCase();
      const abs = path.join(dir, name);
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg" || ext === ".webp" || ext === ".img") images.push(abs);
      else if (ext === ".mp4" || ext === ".webm") videos.push(abs);
    }
  }
  return { images, videos };
}

async function optimizeImage(src) {
  try {
    await optimizeImageFile(src);
  } catch (error) {
    tally.card.failed += 1;
    console.error(src, error instanceof Error ? error.message : error);
  }
}

async function optimizeImageFile(src) {
  let info;
  try {
    info = await stat(src);
  } catch {
    tally.card.failed += 1;
    return;
  }
  const dim = await imageSize(src);
  if (!dim) {
    tally.card.failed += 1;
    return;
  }
  if (info.size > 80_000 || (dim.width > CARD_W && info.size > 40_000)) {
    await encodeWebp(src, "card", CARD_W, "90", info, dim.width, 0.85);
  }
  if (info.size > 250_000) {
    await encodeWebp(src, "still", STILL_W, "95", info, dim.width, 0.7);
  }
}

async function optimizeVideo(src) {
  try {
    await optimizeVideoFile(src);
  } catch (error) {
    tally.clip.failed += 1;
    console.error(src, error instanceof Error ? error.message : error);
  }
}

async function optimizeVideoFile(src) {
  let info;
  try {
    info = await stat(src);
  } catch {
    tally.clip.failed += 1;
    return;
  }
  if (info.size <= 220_000) return;
  const dest = derivativeFile(src, "clip", "mp4");
  if (await fresh(dest, info.mtimeMs)) {
    tally.clip.skipped += 1;
    return;
  }
  const part = partPath(dest);
  await mkdir(path.dirname(dest), { recursive: true });
  const { code } = await run("ffmpeg", [
    "-y",
    "-loglevel",
    "error",
    "-i",
    src,
    "-map",
    "0:v:0",
    "-an",
    "-vf",
    `scale=${CLIP_BOX}:${CLIP_BOX}:force_original_aspect_ratio=decrease:force_divisible_by=2:flags=lanczos`,
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-crf",
    "16",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    part,
  ]);
  if (code !== 0) {
    await rm(part, { force: true });
    tally.clip.failed += 1;
    return;
  }
  await finish(part, dest, info.size, 0.75, tally.clip);
}

async function encodeWebp(src, kind, maxW, quality, info, width, maxRatio) {
  const row = tally[kind];
  const dest = derivativeFile(src, kind, "webp");
  if (await fresh(dest, info.mtimeMs)) {
    row.skipped += 1;
    return;
  }
  const part = partPath(dest);
  await mkdir(path.dirname(dest), { recursive: true });
  const args = ["-q", quality, "-m", "1", "-sharp_yuv", "-metadata", "none"];
  if (width > maxW) args.push("-resize", String(maxW), "0");
  args.push(src, "-o", part);
  const { code } = await run("cwebp", args);
  if (code !== 0) {
    await rm(part, { force: true });
    row.failed += 1;
    return;
  }
  await finish(part, dest, info.size, maxRatio, row);
}

async function finish(part, dest, sourceSize, maxRatio, row) {
  let size = 0;
  try {
    size = (await stat(part)).size;
  } catch {
    row.failed += 1;
    return;
  }
  const worthIt = size > 0 && size < sourceSize * maxRatio && size < sourceSize - 4096;
  if (!worthIt) {
    await rm(part, { force: true });
    await writeFile(`${dest}.skip`, "");
    row.discarded += 1;
    return;
  }
  await rm(`${dest}.skip`, { force: true });
  await rename(part, dest);
  row.made += 1;
  row.before += sourceSize;
  row.after += size;
}

function derivativeFile(src, kind, ext) {
  const base = path.basename(src, path.extname(src));
  return path.join(media, kind, base.slice(0, 2), `${base}.${ext}`);
}

function partPath(dest) {
  return dest.replace(/(\.[^.]+)$/, ".part$1");
}

async function fresh(dest, sourceMtime) {
  for (const file of [dest, `${dest}.skip`]) {
    try {
      const info = await stat(file);
      if (info.mtimeMs + 1 >= sourceMtime && (file.endsWith(".skip") || info.size > 0)) return true;
    } catch {
      // missing
    }
  }
  return false;
}

async function pool(items, workers, task) {
  let cursor = 0;
  let finished = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      await task(items[index]);
      finished += 1;
      if (finished % 400 === 0) console.log(`${finished}/${items.length}`);
    }
  }
  await Promise.all(Array.from({ length: Math.min(workers, items.length) }, () => run()));
}

function run(cmd, args) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    child.stderr.on("data", (chunk) => {
      if (err.length < 400) err += chunk;
    });
    child.on("error", (error) => resolve({ code: 1, err: error.message }));
    child.on("close", (code) => {
      if (code) console.error(`${cmd} failed`, err.trim());
      resolve({ code: code ?? 1, err });
    });
  });
}

async function imageSize(file) {
  const fh = await open(file, "r");
  const head = Buffer.alloc(64);
  const { bytesRead } = await fh.read(head, 0, head.length, 0);
  await fh.close();
  const buf = head.subarray(0, bytesRead);
  return pngSize(buf) || webpSize(buf) || (buf[0] === 0xff && buf[1] === 0xd8 ? jpegSize(file) : null);
}

function pngSize(buf) {
  if (buf.length < 24 || buf[0] !== 0x89 || buf.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function webpSize(buf) {
  if (buf.length < 30 || buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;
  const chunk = buf.toString("ascii", 12, 16);
  if (chunk === "VP8X") {
    return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
  }
  if (chunk === "VP8 ") {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (chunk === "VP8L") {
    const b0 = buf[21];
    const b1 = buf[22];
    const b2 = buf[23];
    const b3 = buf[24];
    return {
      width: 1 + (((b1 & 0x3f) << 8) | b0),
      height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
    };
  }
  return null;
}

async function jpegSize(file) {
  const fh = await open(file, "r");
  const data = Buffer.alloc(512 * 1024);
  const { bytesRead } = await fh.read(data, 0, data.length, 0);
  await fh.close();
  let i = 2;
  while (i < bytesRead - 8) {
    if (data[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = data[i + 1];
    if (marker === 0xd8 || marker === 0xd9 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    if (i + 4 > bytesRead) break;
    const length = data.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      if (i + 9 > bytesRead) break;
      return { width: data.readUInt16BE(i + 7), height: data.readUInt16BE(i + 5) };
    }
    if (length < 2) break;
    i += 2 + length;
  }
  return null;
}

async function checkSizes() {
  const { images } = await collect();
  const sample = [];
  for (const ext of [".png", ".jpg", ".webp", ".img"]) {
    sample.push(...images.filter((file) => file.endsWith(ext)).slice(0, 4));
  }
  let mismatches = 0;
  for (const file of sample) {
    const parsed = await imageSize(file);
    const probed = await probe(file);
    const ok = parsed && probed && parsed.width === probed.width && parsed.height === probed.height;
    if (!ok) mismatches += 1;
    console.log(`${ok ? "ok" : "DIFF"} ${parsed?.width}x${parsed?.height} vs ${probed?.width}x${probed?.height} ${path.basename(file)}`);
  }
  if (mismatches) process.exitCode = 1;
}

function probe(file) {
  return new Promise((resolve) => {
    const child = spawn(
      "ffprobe",
      ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height", "-of", "csv=p=0:s=x", file],
      { stdio: ["ignore", "pipe", "ignore"] },
    );
    let out = "";
    child.stdout.on("data", (chunk) => {
      out += chunk;
    });
    child.on("close", () => {
      const [width, height] = out.trim().split("x").map(Number);
      resolve(width > 0 && height > 0 ? { width, height } : null);
    });
  });
}
