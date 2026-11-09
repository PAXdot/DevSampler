// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  serifFontFamily: z.string().optional(),
  accentFontFamily: z.string().optional(),
  displayFontFamily: z.string().optional(),
  monoFontFamily: z.string().optional(),
  /** One short word or two; it flickers through four typefaces and lands on the brand font. */
  text: z.string().max(20),
  color: zColor(),
  /** Color of the in-between typefaces. */
  accent: zColor(),
  fontFamily: z.string(),
  /** Frames each in-between typeface holds. */
  swapEvery: z.number().int().min(2).max(8),
  /** Arrive oversized and shrink to rest, or just fade in. */
  entry: z.enum(["zoom", "fade"]),
});

export const defaults: z.infer<typeof schema> = {
  serifFontFamily: "Instrument Serif",
  accentFontFamily: "Caveat",
  displayFontFamily: "Bebas Neue",
  monoFontFamily: "Geist Mono",
  text: "Your style",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  swapEvery: 4,
  entry: "zoom",
};
