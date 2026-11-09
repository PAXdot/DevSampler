import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { SourceFile } from "@/lib/prompt";

const root = () => process.cwd();

export function readLocalSource(id: string): SourceFile[] | null {
  const match = id.match(/^\/@([^/]+)\/components\/([^/]+)$/);
  if (!match) return null;
  const manifestPath = path.join(root(), "data", "sources", match[1], match[2], "source.json");
  if (!existsSync(manifestPath)) return null;
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as { files?: string[] };
  const base = path.join(root(), "data", "sources");
  const files: SourceFile[] = [];
  for (const rel of manifest.files ?? []) {
    const abs = path.resolve(root(), rel);
    if (abs !== base && !abs.startsWith(base + path.sep)) continue;
    if (!existsSync(abs)) continue;
    files.push({ path: rel.replaceAll("\\", "/"), content: readFileSync(abs, "utf8") });
  }
  return files.length > 0 ? files : null;
}
