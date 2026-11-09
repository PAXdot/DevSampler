// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Sumi Brush Stroke";

export const schema = z.object({
  /** The title painted over the brush stroke. Short phrases read best. */
  text: z.string().min(1).max(40),
  /** Small line above the stroke. Empty hides it. */
  kicker: z.string().max(32),
  /** Kicker color, and the title ink when it reads on the brush. */
  color: zColor(),
  /** The ink of the brush stroke. */
  primary: zColor(),
  /** The seal stamp. */
  secondary: zColor(),
  /** Paper. "transparent" keeps only the stroke, the title and the seal. */
  background: zColor(),
  fontFamily: z.string(),
  /** Title ink: "auto" picks the text color or the background color, whichever reads on the brush. */
  titleInk: z.enum(["auto", "text", "background"]),
  /** Stamp a seal with the title's first letter next to the stroke's tail. */
  seal: z.boolean(),
  grain: z.boolean(),
  /** Changes the bristles, the dry streaks and the splatter. */
  seed: z.number().int().min(0).max(999),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  kicker: "Introducing",
  color: "#E8F1F2",
  primary: "#FF9F1C",
  secondary: "#2EC4B6",
  background: "#0B1D2A",
  fontFamily: "DM Serif Display",
  titleInk: "auto",
  seal: true,
  grain: true,
  seed: 3,
};
