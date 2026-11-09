import { presentItem } from "@/lib/media";
import { ITEM_TYPES, type Item, type ItemType } from "@/lib/types";
import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const file = path.join(process.cwd(), "data", "saved.json");

export async function GET() {
  const items = (await readSaved()).map((item) => presentItem(item));
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Missing item." }, { status: 400 });
  }
  const item = sanitize(body);
  if (!item) return NextResponse.json({ error: "Missing item." }, { status: 400 });

  const items = await readSaved();
  const next = [
    item,
    ...items.filter((saved) => !(saved.id === item.id && saved.type === item.type)),
  ];
  await writeSaved(next);
  return NextResponse.json({ items: next });
}

export async function DELETE(request: Request) {
  const params = new URL(request.url).searchParams;
  const id = params.get("id") ?? "";
  const type = params.get("type") ?? "";
  if (!id || !isType(type)) {
    return NextResponse.json({ error: "Missing item." }, { status: 400 });
  }
  const next = (await readSaved()).filter((item) => !(item.id === id && item.type === type));
  await writeSaved(next);
  return NextResponse.json({ items: next });
}

function isType(value: string): value is ItemType {
  return (ITEM_TYPES as string[]).includes(value);
}

function sanitize(body: unknown): Item | null {
  if (!body || typeof body !== "object") return null;
  const row = body as Record<string, unknown>;
  const type = typeof row.type === "string" ? row.type : "";
  const id = typeof row.id === "string" ? row.id.trim() : "";
  const name = typeof row.name === "string" ? row.name.trim() : "";
  if (!isType(type) || !id || !name) return null;
  const item: Item = { id, type, name };
  for (const key of [
    "description",
    "author",
    "preview",
    "videoUrl",
    "url",
    "install",
    "repo",
    "meta",
    "license",
  ] as const) {
    const value = row[key];
    if (typeof value === "string" && value) item[key] = value;
  }
  if (typeof row.price === "number") item.price = row.price;
  return item;
}

async function readSaved(): Promise<Item[]> {
  try {
    const data = JSON.parse(await fs.readFile(file, "utf8"));
    return Array.isArray(data) ? data.filter(isItem) : [];
  } catch {
    return [];
  }
}

function isItem(value: unknown): value is Item {
  if (!value || typeof value !== "object") return false;
  const row = value as Item;
  return typeof row.id === "string" && typeof row.name === "string" && isType(row.type);
}

async function writeSaved(items: Item[]) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(items, null, 2));
}
