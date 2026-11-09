// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  title: z.string().max(40),
  values: z.array(z.number().min(0).max(1e9)).min(2).max(8),
  labels: z.array(z.string().max(8)).max(8),
  /** Bar drawn in the accent; -1 = the last one. */
  highlight: z.number().int().min(-1).max(7),
  suffix: z.string().max(4),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  monoFontFamily: z.string().default("Geist Mono"),
});

export const defaults: z.infer<typeof schema> = {
  title: "Weekly installs",
  values: [12, 19, 27, 41, 68],
  labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
  highlight: -1,
  suffix: "k",
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
