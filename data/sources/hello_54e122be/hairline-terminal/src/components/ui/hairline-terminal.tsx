"use client";

import type { ComponentProps, CSSProperties } from "react";
import * as Hairline from "@lucasmarkes/hairline/react";

/**
 * hairline, wearing your theme. The Terminal figure from @lucasmarkes/hairline,
 * with its palette mapped to shadcn's tokens, so it follows light, dark and
 * whatever you have made of them. A `style` you pass wins over the mapping.
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

export function Terminal({
  style,
  ...props
}: ComponentProps<typeof Hairline.Terminal>) {
  return <Hairline.Terminal style={{ ...tokens, ...style }} {...props} />;
}

export default Terminal;
