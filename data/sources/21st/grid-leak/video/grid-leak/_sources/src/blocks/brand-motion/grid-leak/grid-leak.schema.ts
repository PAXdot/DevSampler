// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Grid cell size, as a share of the short side (0.05 = 54 px at 1080p). */
  gridSize: z.number().min(0.02).max(0.15),
  /** Grid line color (kept faint). */
  lineColor: zColor(),
  /** Light leak color. */
  leak: zColor(),
  /** 0..1, brightness of the light leak. */
  leakIntensity: z.number().min(0).max(1),
  background: zColor(),
  /** The grid drifts one cell per loop (still seamless). */
  pan: z.boolean(),
  /** Leak drift cycles per clip. Whole numbers keep the loop seamless. */
  cycles: z.number().int().min(1).max(4),
});

export const defaults: z.infer<typeof schema> = {
  gridSize: 0.05,
  lineColor: "#FFFFFF",
  leak: "#9FB4FF",
  leakIntensity: 0.7,
  background: "#141416",
  pan: true,
  cycles: 1,
};
