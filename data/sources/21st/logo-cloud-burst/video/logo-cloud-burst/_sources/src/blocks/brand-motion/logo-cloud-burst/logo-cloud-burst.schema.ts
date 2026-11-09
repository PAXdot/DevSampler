// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Types word by word at center while the tiles pop in. Wrap a word in *asterisks* to highlight it. */
  phrase: z.string().max(60),
  /** Replaces the first phrase halfway; the tiles pull closer. Empty keeps the first phrase. */
  phrase2: z.string().max(60),
  /** Logo images for the tiles (SVG or PNG). Missing ones are drawn as neutral glyph tiles. */
  logos: z.array(z.string()).max(12),
  /** How many tiles orbit the phrase. */
  tiles: z.number().int().min(4).max(12),
  /** Highlight behind the *marked* word. */
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  phrase: "Works with the tools you *already* use",
  phrase2: "Now they *talk* to each other",
  logos: [],
  tiles: 10,
  accent: "#3D63FF",
  color: "#0A0A0A",
  background: "#F7F8FA",
  fontFamily: "Inter",
};
