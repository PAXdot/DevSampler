// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Holographic Foil Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). It is embossed into the foil. Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the foil card. Empty hides it. */
  caption: z.string().max(48),
  /** Steers the warm end of the diffraction rainbow and tints the foil. */
  primary: zColor(),
  /** Steers the cool end of the diffraction rainbow. */
  secondary: zColor(),
  /** Caption color; also the bright metal of the embossed mark. */
  color: zColor(),
  /** The room behind the card. "transparent" keeps only the card, its shadow and the caption. */
  background: zColor(),
  /** 0..1, how strongly the rainbow shows on the foil. */
  intensity: z.number().min(0).max(1),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Stamped in light",
  primary: "#B7E35A",
  secondary: "#5AA9E6",
  color: "#EAF4E4",
  background: "#151E15",
  intensity: 0.85,
  grain: true,
  fontFamily: "Manrope",
};
