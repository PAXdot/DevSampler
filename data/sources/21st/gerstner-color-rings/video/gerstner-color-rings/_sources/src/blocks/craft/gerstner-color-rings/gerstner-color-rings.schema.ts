// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Concentric Color Rings";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line next to (landscape) or under (square, portrait) the emblem. Empty hides it. */
  caption: z.string().max(48),
  /** First hue of the color wheel; the wedge at twelve o'clock. */
  primary: zColor(),
  /** Second hue of the color wheel, opposite the primary. */
  secondary: zColor(),
  /** Caption and the rim of the center plate. */
  color: zColor(),
  /** Backdrop. Outer rings step toward it, so light and dark brands both get a tonal ramp. */
  background: zColor(),
  /** Number of concentric rings. */
  rings: z.number().int().min(4).max(10),
  /** Color steps (segments) per ring. */
  steps: z.number().int().min(12).max(36),
  grain: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Everything in its place",
  primary: "#2EE6B6",
  secondary: "#7AD7FF",
  color: "#E9FFF8",
  background: "#071A1F",
  rings: 5,
  steps: 16,
  grain: true,
  fontFamily: "Inter",
};
