// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  textColor: zColor(),
  beforeTitle: z.string().max(32),
  afterTitle: z.string().max(32),
  nextLabel: z.string().max(32),
  /** Preview scene backgrounds. Clear both when placing the transition over other content. */
  background: zColor(),
  nextBackground: zColor(),
  /** Color of the bright edge that leads the wipe. */
  accent: zColor(),
  /** Edge thickness, as a fraction of the frame diagonal. 0 = a clean cut. */
  edge: z.number().min(0).max(0.2),
  direction: z.enum(["down-right", "down-left", "up-right", "up-left"]),
});

export const defaults: z.infer<typeof schema> = {
  textColor: "#F4F4F5",
  beforeTitle: "Before",
  afterTitle: "After",
  nextLabel: "Next scene",
  background: "#0B0B10",
  nextBackground: "#0B0B10",
  accent: "#3D63FF",
  edge: 0.06,
  direction: "down-right",
};
