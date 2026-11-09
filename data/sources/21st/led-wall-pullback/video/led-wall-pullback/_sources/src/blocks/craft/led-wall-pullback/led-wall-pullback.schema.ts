// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Stage Screen Product Reveal";

export const schema = z.object({
  /** Screenshot shown on the LED wall. Empty: a neutral sample page. */
  screenshot: z.string(),
  /** Caption under the wall. Empty hides it. */
  title: z.string().max(48),
  /** Caption ink, the wall's dark face on light brands and the floor shading. */
  color: zColor(),
  /** Boot pattern on the diodes, the refresh wavefront and the left stage light. */
  primary: zColor(),
  /** Second color of the boot pattern and the right stage light. */
  secondary: zColor(),
  /** Stage. "transparent" keeps only the wall, its glow and reflection. */
  background: zColor(),
  /** Caption font (brand body font). */
  fontFamily: z.string(),
  /** LED pitch: size of one diode cell, in % of the short side. */
  pitch: z.number().min(0.5).max(1.6),
  /** Where the camera starts, macro on the screenshot (0..1 across). */
  focusX: z.number().min(0).max(1),
  /** Where the camera starts, macro on the screenshot (0..1 down). */
  focusY: z.number().min(0).max(1),
  /** 0..1, bloom of the diodes and the light the wall throws on the stage. */
  glow: z.number().min(0).max(1),
  /** Glossy floor reflection under the wall. */
  reflection: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  screenshot: "",
  title: "Now on the big screen",
  color: "#002033",
  primary: "#0077B6",
  secondary: "#FB8500",
  background: "#E8F6FF",
  fontFamily: "DM Sans",
  pitch: 0.8,
  focusX: 0.3,
  focusY: 0.3,
  glow: 0.75,
  reflection: true,
};
