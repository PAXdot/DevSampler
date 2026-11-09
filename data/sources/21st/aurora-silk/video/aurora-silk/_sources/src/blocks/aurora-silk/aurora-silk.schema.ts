// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  c1: zColor(),
  c2: zColor(),
  c3: zColor(),
  background: zColor(),
  /** Number of silk ribbons. */
  ribbons: z.number().int().min(2).max(6),
  /** 0..1, overall brightness of the silk. */
  intensity: z.number().min(0).max(1),
  /** Flow cycles per clip. Whole numbers keep the loop seamless. */
  cycles: z.number().int().min(1).max(4),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  c1: "#3D63FF",
  c2: "#898B8F",
  c3: "#22D3EE",
  background: "#07070A",
  ribbons: 4,
  intensity: 0.75,
  cycles: 1,
  grain: true,
};
