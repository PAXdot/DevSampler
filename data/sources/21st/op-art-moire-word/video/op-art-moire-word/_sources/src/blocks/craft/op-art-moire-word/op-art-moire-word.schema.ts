// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Moire Word";

export const schema = z.object({
  /** The word or short phrase that emerges from the interference. */
  text: z.string().min(1).max(24),
  /** Word color; also the fringe where the two gratings interleave. */
  color: zColor(),
  /** Locked line color (where the gratings coincide). */
  primary: zColor(),
  /** Transition fringes and the halo around the letters. */
  secondary: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Angle of the locked lines, degrees. */
  angle: z.number().min(-75).max(75),
  /** 0.6..1.6, line density (higher = finer lines). */
  density: z.number().min(0.6).max(1.6),
  /** 0..1, how much the fringes flow and ripple around the locked word. */
  shimmer: z.number().min(0).max(1),
  /** Changes the shape of the flowing fringes. */
  seed: z.number().int().min(0).max(999),
});

export const defaults: z.infer<typeof schema> = {
  text: "Look closer",
  color: "#FCEFF9",
  primary: "#E56399",
  secondary: "#7FD1B9",
  background: "#1A1423",
  fontFamily: "Bricolage Grotesque",
  angle: -22,
  density: 1,
  shimmer: 0.8,
  seed: 7,
};
