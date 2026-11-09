// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Magnetic Field Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** The second pole: one short headline the field lines run into. */
  headline: z.string().max(44),
  /** Light of the logo pole and the filings that crowd around it. */
  primary: zColor(),
  /** Light of the headline pole and the filings that crowd around it. */
  secondary: zColor(),
  /** Headline and the filings themselves (silver on dark, graphite on light). */
  color: zColor(),
  /** The plate. "transparent" keeps only the filings and the poles. */
  background: zColor(),
  /** Filing count multiplier. */
  density: z.number().min(0.6).max(1.5),
  /** How many distinct field lines the filings chain into. */
  fieldLines: z.number().int().min(10).max(40),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  headline: "Made to connect",
  primary: "#B7E35A",
  secondary: "#5AA9E6",
  color: "#EAF4E4",
  background: "#151E15",
  density: 1,
  fieldLines: 22,
  grain: true,
  fontFamily: "Geist",
};
