// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Tilt of the band from vertical, in degrees. */
  angle: z.number().min(-45).max(45),
  /** Band width as a share of the frame width. */
  width: z.number().min(0.05).max(0.5),
  /** 0..1, peak opacity of the band. */
  strength: z.number().min(0.03).max(0.6),
  /** Frames one crossing takes. */
  sweepFrames: z.number().int().min(6).max(40),
  /** Repeat every N frames (match it to the beat). 0 sweeps once. */
  every: z.number().int().min(0).max(240),
  color: zColor(),
});

export const defaults: z.infer<typeof schema> = {
  angle: 20,
  width: 0.2,
  strength: 0.22,
  sweepFrames: 10,
  every: 36,
  color: "#FFFFFF",
};
