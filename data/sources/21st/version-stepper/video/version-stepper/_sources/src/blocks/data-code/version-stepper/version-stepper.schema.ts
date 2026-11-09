// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  statement: z.string().max(40),
  /** Text before the counter inside the chip. */
  chipPrefix: z.string().max(4),
  steps: z.number().int().min(2).max(24),
  /** Frames between increments. */
  stepFrames: z.number().int().min(3).max(30),
  subline: z.string().max(60),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  statement: "Every edit becomes",
  chipPrefix: "v",
  steps: 6,
  stepFrames: 9,
  subline: "Roll back to any version in one click",
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
