// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  title: z.string().max(48),
  /** Part of the title that sits in the pill. Empty for none. */
  accentWord: z.string().max(24),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  /** Pill look: a soft tint, a solid fill, or a hairline outline. */
  box: z.enum(["tint", "solid", "outline"]),
  lowercase: z.boolean(),
  /** Frames per character. */
  framesPerChar: z.number().int().min(1).max(3),
});

export const defaults: z.infer<typeof schema> = {
  title: "every edit, now versioned",
  accentWord: "versioned",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  box: "tint",
  lowercase: true,
  framesPerChar: 1,
};
