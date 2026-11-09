"use client";

import type { ComponentProps, CSSProperties } from "react";
import { Rebuild as HairlineRebuild } from "@lucasmarkes/hairline/react";

/**
 * Rebuild — one of thirty-three isometric line figures from
 * @lucasmarkes/hairline that answer the pointer.
 *
 * A tree of package tiles on a rounded plinth, a thick root at the back,
 * joined by dashed links on the floor. The tile under the pointer rises, and
 * every package that depends on it (its subtree) rises after it, hop by hop
 * along the links, each a little less; letting go is slower and softer than
 * the rise. `intensity` raises the tiles higher.
 *
 * Palette mapped to shadcn's theme tokens, so it follows light, dark and
 * whatever you have made of them. A `style` you pass wins over the mapping.
 *
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

export default function Rebuild({
  style,
  ...props
}: ComponentProps<typeof HairlineRebuild>) {
  return <HairlineRebuild style={{ ...tokens, ...style }} {...props} />;
}
