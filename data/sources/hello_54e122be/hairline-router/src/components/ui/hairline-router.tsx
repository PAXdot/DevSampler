"use client";

import type { ComponentProps, CSSProperties } from "react";
import { Router } from "@lucasmarkes/hairline/react";

/**
 * hairline, wearing your theme. The wifi router figure from
 * @lucasmarkes/hairline: its antennas lean toward the pointer, the nearest
 * the most and the others less the further away, with the palette mapped to
 * shadcn's tokens, so it follows light, dark and whatever you have made of
 * them. A `style` you pass wins over the mapping.
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

export default function HairlineRouter({
  style,
  ...props
}: ComponentProps<typeof Router>) {
  return <Router style={{ ...tokens, ...style }} {...props} />;
}
