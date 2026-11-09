// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Word Curtain Wipe";

export const schema = z.object({
  /** The word (or two) that scrolls in, frames the next scene and swallows the frame. */
  text: z.string().min(1).max(24),
  /** The next scene seen through the letters. Empty: a neutral sample page. */
  screenshot: z.string(),
  /** Thin keyline on the letter edge and the light / shade tones. Use the brand text color. */
  color: zColor(),
  /** Letter rim: the edge that carries the wipe. */
  primary: zColor(),
  /** Speed echoes behind the moving word, and the plate around a framed screenshot. */
  secondary: zColor(),
  /** Scene A, the frame the word wipes away. "transparent" keeps only the word and what it carries. */
  background: zColor(),
  fontFamily: z.string(),
  /** "auto": full bleed when the screenshot shape matches the frame, otherwise a framed card on a brand plate. */
  fit: z.enum(["auto", "full", "window"]),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  screenshot: "",
  color: "#EDF6EE",
  primary: "#F4D35E",
  secondary: "#EE964B",
  background: "#192A22",
  fontFamily: "Bricolage Grotesque",
  fit: "auto",
  grain: true,
};
