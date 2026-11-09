// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Linocut Carve";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background; a flat logo on a solid backdrop also works). Empty carves an abstract sun mark. */
  logo: z.string(),
  /** One short pencil line under the print. Empty hides it. */
  caption: z.string().max(32),
  /** The ink: rolled onto the relief and printed. */
  primary: zColor(),
  /** Tints the lino block, the chips and the brayer handle. */
  secondary: zColor(),
  /** Caption, lit groove edges and the brayer frame. */
  color: zColor(),
  /** The table. Light colors give a tan block on bright paper; dark ones a dark block on dark paper. */
  background: zColor(),
  /** How tightly the carved echo lines are packed around the mark. */
  density: z.number().min(0.7).max(1.4),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Introducing",
  primary: "#FFB703",
  secondary: "#FB5607",
  color: "#F5EEF8",
  background: "#130B1A",
  density: 1,
  grain: true,
  fontFamily: "Geist",
};
