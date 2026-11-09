import type { Person } from "./people";
import { people } from "./people";

export type { Person } from "./people";

interface ImageKitOptions {
  format?: "auto" | "webp" | "jpg" | "jpeg" | "png" | "avif";
  height?: number;
  quality?: number;
  transformations?: string;
  width?: number;
}

function buildTransformations(options?: ImageKitOptions): string {
  if (options?.transformations) {
    return options.transformations;
  }

  const parts: string[] = [];

  if (options?.width) {
    parts.push(`w-${options.width}`);
  }
  if (options?.height) {
    parts.push(`h-${options.height}`);
  }

  const quality = options?.quality ?? 80;
  parts.push(`q-${quality}`);

  const format = options?.format ?? "auto";
  parts.push(`f-${format}`);

  return parts.join(",");
}

function processFullUrl(imagePath: string, transformations: string): string {
  const url = new URL(imagePath);
  url.searchParams.delete("updatedAt");
  const baseUrl = url.origin + url.pathname;

  if (!transformations) {
    return baseUrl;
  }
  return `${baseUrl}?tr=${transformations}`;
}

function buildLocalPathUrl(imagePath: string, transformations: string): string {
  const endpoint =
    process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ||
    process.env.IMAGEKIT_URL_ENDPOINT ||
    "https://ik.imagekit.io/16u211libb";

  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  const imageKitPath = cleanPath.startsWith("images/")
    ? `smoothui/${cleanPath.replace("images/", "")}`
    : `smoothui/${cleanPath}`;

  const baseUrl = `${endpoint}/${imageKitPath}`;

  if (transformations) {
    return `${baseUrl}?tr=${transformations}`;
  }

  return baseUrl;
}

export function getImageKitUrl(
  imagePath: string,
  options?: ImageKitOptions
): string {
  const transformations = buildTransformations(options);

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return processFullUrl(imagePath, transformations);
  }

  return buildLocalPathUrl(imagePath, transformations);
}

export function getAvatarUrl(avatar: string, size = 40): string {
  const retinaSize = size * 2;
  return getImageKitUrl(avatar, {
    format: "auto",
    height: retinaSize,
    quality: 85,
    width: retinaSize,
  });
}

export function getAllPeople(): Person[] {
  return people;
}
