// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Uncurling Ribbon Text";

export const schema = z.object({
  /** The headline printed on the ribbon. One line; it shrinks to fit. */
  text: z.string().min(1).max(24),
  /** Small line above the ribbon once it lies flat. Empty hides it. */
  kicker: z.string().max(32),
  /** Headline, kicker and the repeated ghost copies. */
  color: zColor(),
  /** Ribbon face (tinted toward the backdrop just enough to keep the headline legible). */
  primary: zColor(),
  /** Edge stripes and the star separators. */
  secondary: zColor(),
  /** Backdrop. "transparent" keeps only the ribbon and its type. */
  background: zColor(),
  /** Headline face. */
  fontFamily: z.string(),
  /** Kicker face. */
  bodyFontFamily: z.string(),
  /** Repeat the headline along the ribbon as faint ghost copies. */
  ghosts: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  kicker: "Introducing",
  color: "#141414",
  primary: "#0F766E",
  secondary: "#B45309",
  background: "#FAF7F2",
  fontFamily: "Bricolage Grotesque",
  bodyFontFamily: "Geist",
  ghosts: true,
};
