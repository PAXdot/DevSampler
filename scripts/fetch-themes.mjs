import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = path.join(root, "data", "catalog.jsonl");
const dir = path.join(root, "data", "themes");
const mcp = JSON.parse(readFileSync(path.join(os.homedir(), ".cursor", "mcp.json"), "utf8"));
const key = mcp.mcpServers?.["21st"]?.headers?.["x-api-key"] || process.env.TWENTY_FIRST_API_KEY;
if (!key) {
  console.error("Missing 21st API key.");
  process.exit(1);
}

const ids = [];
const seen = new Set();
let skipped = 0;
for (const line of readFileSync(catalog, "utf8").split("\n")) {
  if (!line) continue;
  const row = JSON.parse(line);
  if (row.type !== "theme" || typeof row.id !== "string" || seen.has(row.id)) continue;
  seen.add(row.id);
  if (!/^[0-9a-f-]{36}$/i.test(row.id)) {
    skipped += 1;
    continue;
  }
  ids.push(row.id);
}

mkdirSync(dir, { recursive: true });
console.log(`themes ${ids.length} without-id ${skipped}`);

let cursor = 0;
let saved = 0;
let existed = 0;
let failed = 0;
let pauseUntil = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cssFrom(result) {
  const text = Array.isArray(result.content) ? result.content.map((part) => part.text ?? "").join("\n") : "";
  const fenced = text.match(/```css\s*([\s\S]*?)```/)?.[1]?.trim();
  return result.structuredContent?.theme?.css?.trim() || fenced || "";
}

async function one(id) {
  const file = path.join(dir, `${id}.css`);
  if (existsSync(file)) return "skip";
  const wait = pauseUntil - Date.now();
  if (wait > 0) await sleep(wait);
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
      params: { name: "get_theme", arguments: { id } },
    }),
    signal: AbortSignal.timeout(25000),
  });
  const data = await response.json();
  if (response.status === 429) {
    pauseUntil = Date.now() + 8000;
    throw new Error("429");
  }
  if (!response.ok || data.error) {
    const message = data.error?.message || String(response.status);
    if (/quota|limit/i.test(message)) throw new Error("quota");
    throw new Error(message);
  }
  const css = cssFrom(data.result ?? {}).replaceAll(key, "");
  if (!css) throw new Error("empty");
  writeFileSync(file, css);
  return "saved";
}

async function worker() {
  while (cursor < ids.length) {
    const id = ids[cursor];
    cursor += 1;
    let done = false;
    for (let attempt = 0; attempt < 6 && !done; attempt++) {
      try {
        const result = await one(id);
        if (result === "skip") existed += 1;
        else saved += 1;
        done = true;
      } catch (error) {
        const message = error instanceof Error ? error.message : "";
        if (message === "quota") {
          console.error("Stopped: the theme download was refused.");
          process.exit(1);
        }
        if (attempt === 3) {
          failed += 1;
          console.error(`fail ${id} ${message || "error"}`);
          done = true;
        } else await sleep(message === "429" ? 12000 : 400 * (attempt + 1));
      }
    }
    const finished = saved + existed + failed;
    if (finished % 50 === 0 || cursor === ids.length) {
      console.log(`${cursor}/${ids.length} saved ${saved} skipped ${existed} failed ${failed}`);
    }
  }
}

await Promise.all(Array.from({ length: 4 }, () => worker()));
console.log(`done saved ${saved} skipped ${existed} failed ${failed}`);
process.exit(failed > 0 ? 1 : 0);
