// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  title: z.string().max(40),
  /** Callout shown at the head of the line once it lands. */
  value: z.string().max(16),
  points: z.array(z.number().min(-1e12).max(1e12)).min(2).max(24),
  /** X-axis labels, spread evenly under the chart. */
  labels: z.array(z.string().max(8)).max(12),
  /** Soft fill under the line. */
  area: z.boolean(),
  grid: z.boolean(),
  /** Frames the line takes to draw. */
  drawFrames: z.number().int().min(15).max(240),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  title: "Weekly active builders",
  value: "48.2k",
  points: [4, 6, 5.5, 9, 8, 13, 12.5, 19, 24, 23, 33, 48],
  labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
  area: true,
  grid: true,
  drawFrames: 60,
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
