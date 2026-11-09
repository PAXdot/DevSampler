// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "LeWitt Lines";

export const schema = z.object({
  /** The word left blank by the hatching. Wraps onto up to three lines. */
  word: z.string().min(1).max(28),
  /** The rule, written under the drawing like a wall-drawing label. */
  caption: z.string().max(72),
  /** Line color and caption color. */
  color: zColor(),
  /** Color of the one quadrant drawn in the brand accent. */
  accent: zColor(),
  background: zColor(),
  /** Which quadrant is drawn in the accent color. */
  accentQuadrant: z.enum(["top-left", "top-right", "bottom-left", "bottom-right"]),
  /** Lines per inch, roughly: 1 is the default spacing, higher packs the lines tighter. */
  density: z.number().min(0.6).max(1.6),
  /** Face of the blank word. Heavy grotesks read best as negative space. */
  fontFamily: z.string(),
  /** Face of the caption. */
  captionFontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  word: "Ship faster",
  caption: "Lines in four directions. The word is left blank.",
  color: "#1C1C1C",
  accent: "#D7263D",
  background: "#F2EEE3",
  accentQuadrant: "bottom-right",
  density: 1,
  fontFamily: "Inter",
  captionFontFamily: "Geist Mono",
};
