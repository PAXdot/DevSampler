// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  c1: zColor(),
  c2: zColor(),
  c3: zColor(),
  c4: zColor(),
  background: zColor(),
  /** 0..1, how saturated the mesh is over the background. */
  intensity: z.number().min(0).max(1),
  /** Drift cycles per clip. Whole numbers keep the loop seamless. */
  cycles: z.number().int().min(1).max(4),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  c1: "#3D63FF",
  c2: "#898B8F",
  c3: "#0EA5E9",
  c4: "#52555C",
  background: "#07070A",
  intensity: 0.7,
  cycles: 1,
  grain: true,
};
