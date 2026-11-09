"use client";

import type { ComponentProps, CSSProperties } from "react";
import { Loupe as HairlineLoupe } from "@lucasmarkes/hairline/react";

/**
 * Loupe, wearing your theme. A stand loupe on three legs over a blank ruled
 * sheet: the pointer drags it across, and the rules pass enlarged under the
 * glass, with nothing between them. `intensity` controls how much the glass
 * magnifies. The palette is mapped to shadcn's tokens, so it follows light,
 * dark and whatever you have made of them. A `style` you pass wins over the
 * mapping.
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

export default function Loupe({
  style,
  ...props
}: ComponentProps<typeof HairlineLoupe>) {
  return <HairlineLoupe style={{ ...tokens, ...style }} {...props} />;
}
