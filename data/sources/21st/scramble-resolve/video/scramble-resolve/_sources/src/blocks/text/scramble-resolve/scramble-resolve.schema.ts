// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  /** The word or wordmark that resolves out of noise. */
  text: z.string().max(24),
  /** Fades in under the underline once the word has locked. Empty hides it. */
  tagline: z.string().max(56),
  color: zColor(),
  accent: zColor(),
  /** Second stop of the underline gradient. */
  accent2: zColor(),
  fontFamily: z.string(),
  /** Glyphs that flicker before each letter locks. */
  charset: z.enum(["symbols", "letters", "binary", "hex"]),
  /** Frames between two letters locking (left to right). */
  lockEvery: z.number().min(1).max(5),
  caps: z.boolean(),
  underline: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  text: "Meridian",
  tagline: "Ship on time, every time",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  accent2: "#5EEAD4",
  fontFamily: "Geist",
  charset: "symbols",
  lockEvery: 2.3,
  caps: false,
  underline: true,
};
