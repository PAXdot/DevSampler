// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Planet Ring Text";

export const schema = z.object({
  /** The headline that becomes the planet's ring. Short phrases read best. */
  text: z.string().min(1).max(32),
  /** Small line above the planet. Empty hides it. */
  kicker: z.string().max(28),
  /** Ring lettering, kicker and the fine ring lines. */
  color: zColor(),
  /** The planet's body. */
  primary: zColor(),
  /** Atmosphere glow, storm bands and the ring's star markers. */
  secondary: zColor(),
  /** Backdrop (and the star field). "transparent" keeps only the planet and its ring. */
  background: zColor(),
  fontFamily: z.string(),
  /** How many turns the ring spins before it lands on the headline. */
  turns: z.number().min(0.5).max(3),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  text: "Ship faster",
  kicker: "Introducing",
  color: "#101828",
  primary: "#2E5BFF",
  secondary: "#00B37E",
  background: "#EFF3F8",
  fontFamily: "Geist",
  turns: 1,
  grain: true,
};
