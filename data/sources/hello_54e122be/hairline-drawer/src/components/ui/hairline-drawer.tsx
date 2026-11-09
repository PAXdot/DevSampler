"use client";

import type { ComponentProps, CSSProperties } from "react";
import { Drawer as HairlineDrawer } from "@lucasmarkes/hairline/react";

/**
 * hairline, wearing your theme. The Drawer figure from @lucasmarkes/hairline,
 * with its palette mapped to shadcn's tokens, so it follows light, dark and
 * whatever you have made of them. A `style` you pass wins over the mapping.
 *
 * A filing cabinet of three drawers: the pointer's height picks one, it
 * slides out, and inside are two dividers and nothing between them.
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

export default function Drawer({
  style,
  ...props
}: ComponentProps<typeof HairlineDrawer>) {
  return <HairlineDrawer style={{ ...tokens, ...style }} {...props} />;
}
