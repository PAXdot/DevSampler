// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Penrose Glass Tile Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One line under the logo, set in the brand body font. Empty hides it. */
  title: z.string().max(48),
  /** Main glass tint: the wide tiles lean to it, plus the grout glow. */
  primary: zColor(),
  /** Accent glass tint: the slim tiles lean to it. */
  secondary: zColor(),
  /** Title color. On a transparent background it also decides light or dark glass. */
  color: zColor(),
  /** Backdrop. "transparent" keeps only the tiling, fading out before the frame edges. */
  background: zColor(),
  /** Tile size multiplier: lower makes a finer mosaic. */
  tileSize: z.number().min(0.7).max(1.4),
  /** Strength of the light that sweeps across the finished tiling. */
  shine: z.number().min(0).max(1),
  grain: z.boolean(),
  /** Title typeface (brand body font). */
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  title: "Ship faster",
  primary: "#4CC9F0",
  secondary: "#F72585",
  color: "#EAF0FF",
  background: "#141B2D",
  tileSize: 1,
  shine: 0.8,
  grain: true,
  fontFamily: "Inter",
};
