// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Pendulum Wave";

export const schema = z.object({
  /** Headline that lands above the row once every pendulum lines up. Empty hides it. */
  text: z.string().max(60),
  /** Metal of the first bob; the row blends toward `secondary`. Also tints the light pool. */
  primary: zColor(),
  /** Metal of the last bob. */
  secondary: zColor(),
  /** Headline, threads and shadow ink. */
  color: zColor(),
  /** Backdrop. "transparent" keeps only the apparatus, its threads and its shadows. */
  background: zColor(),
  /** Pendulums in the 16:9 row (square and portrait hang a few less so the bobs stay large). */
  count: z.number().int().min(9).max(19),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  text: "Find your rhythm",
  primary: "#268BD2",
  secondary: "#D33682",
  color: "#073642",
  background: "#FDF6E3",
  count: 15,
  grain: true,
  fontFamily: "Inter",
};
