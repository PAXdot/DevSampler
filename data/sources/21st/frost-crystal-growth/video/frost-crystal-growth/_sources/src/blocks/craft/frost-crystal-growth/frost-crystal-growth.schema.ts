// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Frost Crystal Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the mark, set in a clear patch of glass. Empty hides it. */
  caption: z.string().max(40),
  /** The cold backlight and the tint of the ice. */
  primary: zColor(),
  /** A second, fainter light behind the glass and the color of the glints' halos. */
  secondary: zColor(),
  /** Caption, and the grey edges of the frost on light brands. */
  color: zColor(),
  /** The glass. Light colors give pale frost with grey edges; "transparent" keeps only the frost and the mark. */
  background: zColor(),
  /** How much of the pane the frost covers. */
  density: z.number().min(0.5).max(1.5),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Crystal clear",
  primary: "#58A6FF",
  secondary: "#3FB950",
  color: "#E6EDF3",
  background: "#0E1116",
  density: 1,
  grain: true,
  fontFamily: "Inter",
};
