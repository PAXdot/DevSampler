// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

/** An SVG path "d" in a 100 x 100 box. */
const svgPath = z.string().min(3).max(2000);

export const schema = z.object({
  /** One continuous stroke: the mark, as an SVG path in a 100 x 100 box. Drawn last, slowly. */
  path: svgPath,
  /** Optional short accent stroke (a leaf, a dot, a tick), drawn first and fast. Empty skips it. */
  accentPath: z.string().max(2000),
  /** Gradient along the stroke, start to end. */
  c1: zColor(),
  c2: zColor(),
  c3: zColor(),
  /** Stroke thickness in the 100-unit box. */
  strokeWidth: z.number().min(2).max(14),
  /** Wordmark under the mark. Empty hides it. */
  name: z.string().max(24),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  path: "M 22 72 C 10 52 18 22 48 18 C 78 14 92 42 84 62 C 76 82 46 88 35 71 C 25 55 39 38 56 42 C 69 45 71 61 58 65",
  accentPath: "M 74 9 C 80 4 88 5 92 10",
  c1: "#FF6A3D",
  c2: "#8E9094",
  c3: "#3D8BFF",
  strokeWidth: 7,
  name: "Halo",
  color: "#F4F4F5",
  fontFamily: "Geist",
};
