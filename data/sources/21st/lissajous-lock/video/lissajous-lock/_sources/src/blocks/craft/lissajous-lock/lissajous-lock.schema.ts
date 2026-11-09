// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Lissajous Lock";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the locked ring. Empty hides it. */
  caption: z.string().max(40),
  /** Beam color: phosphor glow on dark brands, the accent ink on light ones. */
  primary: zColor(),
  /** Pen ink of the trace on light brands; a cool afterglow tint on dark ones. */
  secondary: zColor(),
  /** Caption, graticule and the dial ticks around the ring. */
  color: zColor(),
  /** Screen color. Light colors switch to thin ink strokes on paper. */
  background: zColor(),
  /** How many lobes the opening figure has before it collapses into the ring. */
  lobes: z.number().int().min(2).max(6),
  /** 0..1, beam brightness and glow. */
  intensity: z.number().min(0).max(1),
  /** Oscilloscope graticule behind the trace. */
  grid: z.boolean(),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "In sync",
  primary: "#FF4F00",
  secondary: "#202020",
  color: "#202020",
  background: "#FFFBF0",
  lobes: 4,
  intensity: 0.8,
  grid: true,
  grain: true,
  fontFamily: "Geist",
};
