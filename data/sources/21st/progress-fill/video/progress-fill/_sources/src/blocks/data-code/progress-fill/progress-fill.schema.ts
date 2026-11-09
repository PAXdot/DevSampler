// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  label: z.string().max(40),
  /** Shown in place of the percent once the bar reaches 100. Empty keeps the percent. */
  doneLabel: z.string().max(24),
  percent: z.number().min(0).max(100),
  /** Frames the fill takes. */
  fillFrames: z.number().int().min(10).max(600),
  easing: z.enum(["linear", "ease"]),
  showPercent: z.boolean(),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  label: "Rendering your launch video",
  doneLabel: "Ready",
  percent: 100,
  fillFrames: 60,
  easing: "ease",
  showPercent: true,
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
