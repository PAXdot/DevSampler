// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Murmuration";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). Empty forms an abstract ring mark. */
  logo: z.string(),
  /** One short line under the formed mark. Empty hides it. */
  caption: z.string().max(40),
  /** Head of the flock and the glow of the formed mark. */
  primary: zColor(),
  /** Tail of the flock and the horizon light. */
  secondary: zColor(),
  /** Caption, and the bird ink on light skies. */
  color: zColor(),
  /** The sky. Light colors turn the birds into dark silhouettes; "transparent" keeps only the flock. */
  background: zColor(),
  /** Bird count multiplier. */
  density: z.number().min(0.5).max(1.5),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Moving as one",
  primary: "#2EE6B6",
  secondary: "#7AD7FF",
  color: "#E9FFF8",
  background: "#071A1F",
  density: 1,
  grain: true,
  fontFamily: "Geist",
};
