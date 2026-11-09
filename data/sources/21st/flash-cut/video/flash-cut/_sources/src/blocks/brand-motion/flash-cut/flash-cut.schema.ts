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
  /** Flash color. White for hype cuts; a grey reads softer. */
  color: zColor(),
  /** 0..1, peak opacity of the flash (0.7 = the softer grey-flash look). */
  strength: z.number().min(0.2).max(1),
  /** 0..1, how much the flash darkens toward the frame edges. */
  vignette: z.number().min(0).max(1),
  /** Where in the transition the hard cut lands (the rest is the flash decaying). */
  cutAt: z.number().min(0.1).max(0.5),
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
  color: "#FFFFFF",
  strength: 1,
  vignette: 0.45,
  cutAt: 0.25,
};
