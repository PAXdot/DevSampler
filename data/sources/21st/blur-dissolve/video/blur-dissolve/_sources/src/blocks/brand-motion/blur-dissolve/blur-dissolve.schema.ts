// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  previewAccent: zColor(),
  textColor: zColor(),
  beforeTitle: z.string().max(32),
  afterTitle: z.string().max(32),
  nextLabel: z.string().max(32),
  fontFamily: z.string().optional(),
  bodyFontFamily: z.string().optional(),
  /** Preview scene backgrounds. Clear both when placing the transition over other content. */
  background: zColor(),
  nextBackground: zColor(),
  /** Peak blur, in px at 1080p (scales with the frame). */
  blur: z.number().min(2).max(40),
  /** How far the incoming shot settles from (0.02 = 1.02 -> 1). */
  scale: z.number().min(0).max(0.1),
  /** 0 = blur out, then blur in; 1 = both at once. */
  overlap: z.number().min(0).max(1),
});

export const defaults: z.infer<typeof schema> = {
  previewAccent: "#3D63FF",
  textColor: "#F4F4F5",
  beforeTitle: "Before",
  afterTitle: "After",
  nextLabel: "Next scene",
  fontFamily: "Geist",
  bodyFontFamily: "Geist",
  background: "#0B0B10",
  nextBackground: "#0B0B10",
  blur: 12,
  scale: 0.02,
  overlap: 0.3,
};
