"use client";

import type { ComponentProps, CSSProperties } from "react";
import * as Hairline from "@lucasmarkes/hairline/react";

/**
 * hairline, wearing your theme. The Plug figure from @lucasmarkes/hairline,
 * with its palette mapped to shadcn's tokens, so it follows light, dark and
 * whatever you have made of them. A `style` you pass wins over the mapping.
 *
 * A wall socket, and a plug lying on the floor at the end of its cord. The
 * pointer draws the plug up toward the socket; it stops short, and falls back.
 *
 * Docs: https://hairline.lucasmarkes.com
 */
const tokens = {
  "--hairline-plate": "var(--background)",
  "--hairline-hi": "var(--foreground)",
  "--hairline-edge": "var(--muted-foreground)",
  "--hairline-mid":
    "color-mix(in oklab, var(--muted-foreground) 55%, var(--background))",
  "--hairline-lo": "var(--border)",
} as CSSProperties;

export default function PlugSocket({
  style,
  ...props
}: ComponentProps<typeof Hairline.Plug>) {
  return <Hairline.Plug style={{ ...tokens, ...style }} {...props} />;
}
