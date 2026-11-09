// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Logo Construction Lines";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** Small line above the title. Empty hides it. */
  eyebrow: z.string().max(32),
  /** Name or line set under the mark, with its baseline and cap height ruled in. Empty hides it. */
  title: z.string().max(48),
  /** Key guides: the bounding circle, clear-space box, the traced contour and the pen nib. */
  primary: zColor(),
  /** Sheet grid, dimension lines and type guides. */
  secondary: zColor(),
  /** Ink for the construction geometry, and the text. */
  color: zColor(),
  /** Paper. "transparent" keeps only the drawing, faded out before the frame edges. */
  background: zColor(),
  /** How strongly the guides stay on the sheet once the logo has landed. */
  guides: z.number().min(0.4).max(1.6),
  /** Paper grain on the sheet and the ruled lines. */
  grain: z.boolean(),
  /** Title and measurement-note typeface (a serif suits the drafting sheet). */
  fontFamily: z.string(),
  /** Eyebrow typeface. */
  monoFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  eyebrow: "Introducing",
  title: "Every line has a reason",
  primary: "#FF3B30",
  secondary: "#EDEDED",
  color: "#EDEDED",
  background: "#0B0B0B",
  guides: 1,
  grain: true,
  fontFamily: "Instrument Serif",
  monoFamily: "Geist Mono",
};
