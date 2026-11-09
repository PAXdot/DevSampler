// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  serifFontFamily: z.string().optional(),
  lead: z.string().max(40),
  /** The word that gets struck through. */
  struck: z.string().max(24),
  /** What replaces it, on the next line. */
  replacement: z.string().max(40),
  color: zColor(),
  accent: zColor(),
  strikeColor: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  serifFontFamily: "Instrument Serif",
  lead: "Stop shipping",
  struck: "AI slop.",
  replacement: "Ship real UI.",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  strikeColor: "#E5484D",
  fontFamily: "Geist",
};
