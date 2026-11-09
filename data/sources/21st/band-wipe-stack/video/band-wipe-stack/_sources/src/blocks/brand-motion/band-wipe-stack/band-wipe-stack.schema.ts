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
  numeralFontFamily: z.string().optional(),
  /** Preview scene backgrounds. Clear both when placing the transition over other content. */
  background: zColor(),
  nextBackground: zColor(),
  /** Main band color (the one that carries the numeral). */
  accent: zColor(),
  /** Second band color. */
  secondary: zColor(),
  /** Bands before the next shot: 1 = accent only, 2 = accent then secondary. */
  bands: z.number().int().min(1).max(2),
  /** Slant of the band edges from vertical, in degrees. */
  angle: z.number().min(0).max(35),
  /** Large chapter numeral masked inside the first band. Empty hides it. */
  numeral: z.string().max(3),
  /** Side the bands come in from. */
  direction: z.enum(["right", "left", "top", "bottom"]),
});

export const defaults: z.infer<typeof schema> = {
  previewAccent: "#3D63FF",
  textColor: "#F4F4F5",
  beforeTitle: "Before",
  afterTitle: "After",
  nextLabel: "Next scene",
  fontFamily: "Geist",
  bodyFontFamily: "Geist",
  numeralFontFamily: "Geist",
  background: "#0B0B10",
  nextBackground: "#0B0B10",
  accent: "#0EA5E9",
  secondary: "#FFFFFF",
  bands: 2,
  angle: 20,
  numeral: "4",
  direction: "right",
};
