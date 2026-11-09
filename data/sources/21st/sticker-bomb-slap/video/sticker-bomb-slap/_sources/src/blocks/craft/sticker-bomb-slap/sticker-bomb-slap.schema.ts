// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Sticker Bomb";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Becomes the big center sticker and the small ones. Empty shows a neutral sample mark. */
  logo: z.string(),
  /** Screenshot the stickers slap onto. Empty shows a neutral sample page. */
  screenshot: z.string(),
  /** One die-cut sticker per keyword, in landing order. One to six. */
  items: z.array(z.string().max(18)).min(1).max(6),
  /** First sticker vinyl and the impact strokes. */
  primary: zColor(),
  /** Second sticker vinyl. */
  secondary: zColor(),
  /** Text color; also the darkest sticker vinyl. */
  color: zColor(),
  /** Cutting-mat backdrop. "transparent" leaves only the screenshot and stickers. */
  background: zColor(),
  fontFamily: z.string(),
  /** Die-cut border thickness. */
  border: z.number().min(0.5).max(1.6),
  /** How wild the angles get. */
  chaos: z.number().min(0).max(1),
  /** Reshuffles angles and jitter. */
  seed: z.number().int().min(0).max(999),
  /** Show the self-healing cutting mat grid behind the screenshot. */
  mat: z.boolean(),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  screenshot: "",
  items: ["Ship faster", "Now live", "Beta", "Open source", "Made with care"],
  primary: "#B5446E",
  secondary: "#F2A541",
  color: "#2D1E2F",
  background: "#F7F1F0",
  fontFamily: "Bricolage Grotesque",
  border: 1,
  chaos: 0.7,
  seed: 7,
  mat: true,
  grain: true,
};
