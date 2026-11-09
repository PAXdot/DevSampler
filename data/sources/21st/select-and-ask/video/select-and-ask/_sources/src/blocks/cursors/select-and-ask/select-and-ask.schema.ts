// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Words before the selection on the paragraph's first line. Empty starts the paragraph with the selection. */
  lead: z.string().max(14),
  /** The phrase the I-beam selects; it stays on the first line so the toolbar floats above the card's text. */
  phrase: z.string().max(22),
  /** The rest of the paragraph after the selection (leading punctuation stays glued to it). */
  rest: z.string().max(90),
  /** The toolbar action the cursor clicks. */
  askLabel: z.string().max(10),
  /** Paragraph text, cursors and toolbar icons. */
  color: zColor(),
  /** Selection highlight, the action's label and its pressed fill. */
  accent: zColor(),
  /** Card and toolbar material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  lead: "Blocks",
  phrase: "ship with motion",
  rest: ", so the video you make looks exactly like the product.",
  askLabel: "Ask AI",
  color: "#F4F4F5",
  accent: "#3D63FF",
  surfaceColor: "#111114",
  background: "#09090B",
  fontFamily: "Geist",
};
