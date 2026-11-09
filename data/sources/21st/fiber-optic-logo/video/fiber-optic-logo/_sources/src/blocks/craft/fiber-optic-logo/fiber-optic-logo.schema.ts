// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Fiber Optic Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line above the lit mark. Empty hides it. */
  caption: z.string().max(40),
  /** The light in the fibers: pulses, glowing tips and the filled mark. */
  primary: zColor(),
  /** Hot cores of the pulses and the far edge of the mark's gradient. */
  secondary: zColor(),
  /** Caption, and the cable jacket's sheen. */
  color: zColor(),
  /** The room. Light colors turn the strands into fine colored threads; "transparent" keeps only the fibers and the mark. */
  background: zColor(),
  /** Strand count multiplier. */
  density: z.number().min(0.5).max(1.5),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Brought to light",
  primary: "#FF8A3D",
  secondary: "#FFD27A",
  color: "#F3EEE6",
  background: "#0E0F12",
  density: 1,
  grain: true,
  fontFamily: "DM Sans",
};
