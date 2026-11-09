// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Two-Ink Riso Title";

export const schema = z.object({
  /** The headline, printed by both ink drums. Short phrases read best. */
  text: z.string().min(1).max(40),
  /** Small line above the print, in the text color. Empty hides it. */
  kicker: z.string().max(32),
  /** Kicker, rules and the legibility floor of the overprinted headline. */
  color: zColor(),
  /** First ink drum: the solid-to-halftone disc and the first headline pass. */
  primary: zColor(),
  /** Second ink drum: the halftone disc and the second headline pass. */
  secondary: zColor(),
  /** Paper stock. Dark stock glows (screen inks); light stock multiplies. "transparent" keeps only the inks. */
  background: zColor(),
  fontFamily: z.string(),
  /** 0..1, how far the two drums drift out of register before they lock. */
  misregister: z.number().min(0).max(1),
  /** Ink grain and mottle. Off prints flat, clean ink. */
  grain: z.boolean(),
  /** Changes the grain pattern and the drift path. */
  seed: z.number().int().min(0).max(999),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  kicker: "Introducing",
  color: "#F2E9FF",
  primary: "#C77DFF",
  secondary: "#80FFDB",
  background: "#170F1E",
  fontFamily: "Bricolage Grotesque",
  misregister: 0.75,
  grain: true,
  seed: 7,
};
