// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Screenshot Puzzle Cube";

export const schema = z.object({
  /** Screenshot printed across the nine front tiles. Empty: a neutral sample page. */
  screenshot: z.string(),
  /** Logo printed across the side face the cube turns to at the end. Empty: a neutral sample mark. */
  logo: z.string(),
  /** One short line that lands once the cube is solved. Empty hides it. */
  title: z.string().max(48),
  /** Title ink and the cube body on light brands. */
  color: zColor(),
  /** Top tiles, glow and edge light. */
  primary: zColor(),
  /** Left tiles and the second glow. */
  secondary: zColor(),
  /** Backdrop. "transparent" keeps only the cube, its shadow and the title. */
  background: zColor(),
  /** Brand body font for the title. */
  fontFamily: z.string(),
  /** 0..1, strength of the key light and the gloss on the tiles. */
  gloss: z.number().min(0).max(1),
});

export const defaults: z.infer<typeof schema> = {
  screenshot: "",
  logo: "",
  title: "Everything clicks into place",
  color: "#1A1A17",
  primary: "#3A5A40",
  secondary: "#E9C46A",
  background: "#F3F4ED",
  fontFamily: "DM Sans",
  gloss: 0.7,
};
