// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty draws a monogram tile from the name. */
  logo: z.string(),
  name: z.string().max(24),
  /** Small line under the name. Empty hides it. */
  tagline: z.string().max(48),
  /** Shockwave rings and the underline. */
  accent: zColor(),
  /** Second underline stop and the monogram tile's gradient end. */
  secondary: zColor(),
  color: zColor(),
  /** How many shockwave rings leave the mark (4 frames apart). */
  rings: z.number().int().min(0).max(3),
  /** A soft diagonal light sweep crosses the mark after it lands. */
  sweep: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  name: "Vantage",
  tagline: "summer build week",
  accent: "#38BDF8",
  secondary: "#F5A524",
  color: "#F4F4F5",
  rings: 2,
  sweep: true,
  fontFamily: "Space Grotesk",
};
