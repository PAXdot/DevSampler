// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  text: z.string().max(80),
  /** A word from the text that gets a highlight box once it has been typed. Empty for none. */
  accentWord: z.string().max(24),
  color: zColor(),
  /** Caret and highlight color. */
  accent: zColor(),
  fontFamily: z.string(),
  /** Frames per character (1 is fast, 3 is deliberate). */
  framesPerChar: z.number().int().min(1).max(3),
  caret: z.enum(["block", "bar", "none"]),
  typeface: z.enum(["mono", "sans"]),
  align: z.enum(["center", "left"]),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  text: "npx 21st add motion",
  accentWord: "motion",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  framesPerChar: 2,
  caret: "block",
  typeface: "mono",
  align: "center",
};
