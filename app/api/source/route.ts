import { readLocalSource } from "@/lib/source";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id")?.trim() ?? "";
  const files = readLocalSource(id);
  if (!files) return NextResponse.json({ files: [] });
  return NextResponse.json({ files });
}
