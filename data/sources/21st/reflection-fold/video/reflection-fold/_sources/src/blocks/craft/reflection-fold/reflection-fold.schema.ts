// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Water Reflection Title";

export const schema = z.object({
  /** The title. It starts as a rippling reflection on the water, then stands up on the waterline. Short phrases read best. */
  text: z.string().min(1).max(40),
  /** Title ink; its reflection is tinted from it. */
  color: zColor(),
  /** Water depth and the high sky. */
  primary: zColor(),
  /** The low sun glow on the horizon and the glints it throws on the water. */
  secondary: zColor(),
  /** Sky and water ground. "transparent" keeps only the title and its reflection. */
  background: zColor(),
  fontFamily: z.string(),
  /** 0..1, how much the water still moves once the title stands. */
  ripple: z.number().min(0).max(1),
  /** 0..1, strength of the reflection left under the standing title. */
  reflection: z.number().min(0).max(1),
  /** 0..1, brightness of the sun glow behind the title. */
  glow: z.number().min(0).max(1),
  grain: z.boolean(),
  /** Changes the wave pattern. */
  seed: z.number().int().min(0).max(999),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  color: "#22172E",
  primary: "#6B3FA0",
  secondary: "#FF7F50",
  background: "#E9E4F2",
  fontFamily: "DM Serif Display",
  ripple: 0.4,
  reflection: 0.6,
  glow: 0.8,
  grain: true,
  seed: 7,
};
