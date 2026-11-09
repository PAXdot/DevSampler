// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Checkerboard Bulge Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the sphere. Empty hides it. */
  caption: z.string().max(40),
  /** Shadow side of the sphere and the medallion ring. */
  primary: zColor(),
  /** Lit side of the sphere. */
  secondary: zColor(),
  /** Checker ink and the caption. */
  color: zColor(),
  /** Paper behind the checker. "transparent" leaves only the grid. */
  background: zColor(),
  /** Checker cells across the short side of the frame. */
  cells: z.number().int().min(8).max(18),
  /** Sphere size. */
  bulge: z.number().min(0.8).max(1.15),
  /** 0..1, how loud the flat checker is away from the sphere. */
  contrast: z.number().min(0.2).max(1),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Introducing",
  primary: "#F43F5E",
  secondary: "#FBBF24",
  color: "#F8FAFC",
  background: "#0F172A",
  cells: 16,
  bulge: 1,
  contrast: 0.9,
  grain: true,
  fontFamily: "Space Grotesk",
};
