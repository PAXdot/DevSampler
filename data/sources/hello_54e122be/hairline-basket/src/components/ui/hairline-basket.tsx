"use client";

import type { ComponentProps, CSSProperties } from "react";
import * as Hairline from "@lucasmarkes/hairline/react";

/**
 * hairline, wearing your theme. Basket: an empty wire shopping basket under a
 * bail handle. The pointer tilts it toward itself on a spring, so the bare
 * floor shows, and the handle swings after it, late. Its palette is mapped to
 * shadcn's tokens, so it follows light, dark and whatever you have made of
 * them. A `style` you pass wins over the mapping.
 *
 * Figure engine and React binding: @lucasmarkes/hairline (MIT, Lucas Marques).
 * Docs: https://hairline.lucasmarkes.com/docs
 */
const tokens = {
  "--hairline-plate": "var(--background)",
  "--hairline-hi": "var(--foreground)",
  "--hairline-edge": "var(--muted-foreground)",
  "--hairline-mid":
    "color-mix(in oklab, var(--muted-foreground) 55%, var(--background))",
  "--hairline-lo": "var(--border)",
} as CSSProperties;

export default function Basket({
  style,
  ...props
}: ComponentProps<typeof Hairline.Basket>) {
  return <Hairline.Basket style={{ ...tokens, ...style }} {...props} />;
}
