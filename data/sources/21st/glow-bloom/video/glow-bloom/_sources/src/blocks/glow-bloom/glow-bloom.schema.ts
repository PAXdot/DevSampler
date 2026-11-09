// Built with Remotion - https://remotion.pro/license
import { zColor } from "../../kit/z";
import { z } from "zod";

export const schema = z.object({
  color: zColor(),
  secondary: zColor(),
  background: zColor(),
  /** 0..1, peak opacity of the bloom. */
  intensity: z.number().min(0).max(1),
  position: z.enum(["top", "bottom", "center", "split"]),
  /** Breathing cycles per clip. Whole numbers keep the loop seamless. */
  cycles: z.number().int().min(1).max(6),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  color: "#0275de",
  secondary: "#6d6f73",
  background: "#09090b",
  intensity: 0.6,
  position: "split",
  cycles: 1,
  grain: true,
};
