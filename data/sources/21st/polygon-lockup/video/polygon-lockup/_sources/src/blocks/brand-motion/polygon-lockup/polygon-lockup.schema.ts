// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  /** Logo image (SVG or PNG on a transparent background). It splits in two halves that lock together. Empty uses the name's first letter. */
  logo: z.string(),
  /** Typed under the mark after it locks. */
  title: z.string().max(24),
  /** Small mono line under the title. Empty hides it. */
  tagline: z.string().max(40),
  /** Sides of the outline drawn around the mark (6 = hexagon). */
  sides: z.number().int().min(3).max(8),
  /** Outline, hairline and the left half of the mark. */
  accent: zColor(),
  /** Right half of the mark. */
  secondary: zColor(),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  logo: "",
  title: "Northwind",
  tagline: "drop 001",
  sides: 6,
  accent: "#F5A524",
  secondary: "#3D8BFF",
  color: "#F4F4F5",
  fontFamily: "Space Grotesk",
};
