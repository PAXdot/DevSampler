// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Droste Word";

export const schema = z.object({
  /** The word or short phrase that repeats inside itself. */
  text: z.string().min(1).max(24),
  /** Word ink on background-toned levels. */
  color: zColor(),
  /** Every third level is painted in this color. */
  primary: zColor(),
  /** Every third level is painted in this color. */
  secondary: zColor(),
  /** Backdrop and the level the camera lands on. "transparent" keeps only the word and its nested copies. */
  background: zColor(),
  fontFamily: z.string(),
  /** How many nested levels the camera dives through before it lands. */
  depth: z.number().int().min(3).max(9),
  /** Degrees each nested copy is turned, so the dive rolls into a spiral. 0 = a straight dive. */
  twist: z.number().min(-12).max(12),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  color: "#1E1B18",
  primary: "#E4572E",
  secondary: "#F3A712",
  background: "#F4EFE6",
  fontFamily: "Bricolage Grotesque",
  depth: 6,
  twist: 6,
  grain: true,
};
