"use client";

import type { ComponentProps, CSSProperties } from "react";
import * as Hairline from "@lucasmarkes/hairline/react";

/**
 * hairline, wearing your theme. The Lockers figure from @lucasmarkes/hairline,
 * with its palette mapped to shadcn's tokens, so it follows light, dark and
 * whatever you have made of them. A `style` you pass wins over the mapping.
 *
 * A bank of twelve lockers, one ajar at rest: the locker under the pointer
 * opens, and the one open before it swings shut.
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

export function Lockers({
  style,
  ...props
}: ComponentProps<typeof Hairline.Lockers>) {
  return <Hairline.Lockers style={{ ...tokens, ...style }} {...props} />;
}

export default Lockers;
