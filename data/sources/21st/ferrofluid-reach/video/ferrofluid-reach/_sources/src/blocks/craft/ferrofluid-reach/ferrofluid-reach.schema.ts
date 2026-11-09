// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Ferrofluid Reach";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** Colored gel on the fluid's left flank, the reach glow and, on dark brands, the fluid itself. */
  primary: zColor(),
  /** Narrow strip light reflected down the right side of every spike. */
  secondary: zColor(),
  /** Ink: the fluid's body on light brands and the magnetic field lines. */
  color: zColor(),
  /** Studio backdrop and the floor the fluid reflects. "transparent" drops the studio. */
  background: zColor(),
  /** Number of spikes in the crown. */
  spikes: z.number().int().min(16).max(52),
  /** 0..1, how hard the crown leans toward the logo once it has locked in. */
  pull: z.number().min(0).max(1),
  /** Faint magnetic field lines between the logo and the fluid. */
  fieldLines: z.boolean(),
  /** Mirror reflection on the floor. */
  reflection: z.boolean(),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  primary: "#1F3A93",
  secondary: "#E0475B",
  color: "#16161D",
  background: "#F6F4EF",
  spikes: 44,
  pull: 0.75,
  fieldLines: true,
  reflection: true,
  grain: true,
};
