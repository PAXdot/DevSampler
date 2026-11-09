// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Watercolor Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). It is painted in wet watercolor. Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the painted logo. Empty hides it. */
  caption: z.string().max(40),
  /** Main pigment. Darker parts of the logo take this color. */
  primary: zColor(),
  /** Second pigment, flooded wet-in-wet with the primary. Lighter parts of the logo take this color. */
  secondary: zColor(),
  /** Caption color; also deepens the drying rims. */
  color: zColor(),
  /** Paper color. "transparent" keeps only the paint. */
  background: zColor(),
  /** 0..1, how much pigment settles into the paper tooth as it dries. */
  granulation: z.number().min(0).max(1),
  /** 0..1, how far the wet paint feathers past the logo edge. */
  bleed: z.number().min(0).max(1),
  /** Cold-press paper texture over the sheet. */
  paper: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Crafted with care",
  primary: "#E4572E",
  secondary: "#F3A712",
  color: "#1E1B18",
  background: "#F4EFE6",
  granulation: 0.6,
  bleed: 0.6,
  paper: true,
  fontFamily: "Instrument Serif",
};
