// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Direction the streaks travel, in degrees (0 = left to right, negative = up and to the right). */
  angle: z.number().min(-75).max(75),
  /** Number of streaks on screen. */
  density: z.number().int().min(8).max(60),
  /** Travel speed, roughly px per frame at 1080p. */
  speed: z.number().min(1).max(12),
  /** Streak color. */
  color: zColor(),
  /** Every few streaks glow in this color. */
  accent: zColor(),
  background: zColor(),
  /** 0..1, how dark the frame edges get. */
  vignette: z.number().min(0).max(1),
});

export const defaults: z.infer<typeof schema> = {
  angle: -24,
  density: 30,
  speed: 4,
  color: "#FFFFFF",
  accent: "#38BDF8",
  background: "#0B0D10",
  vignette: 0.7,
};
