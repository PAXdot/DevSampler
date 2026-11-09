// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Droste Loop";

export const schema = z.object({
  /** Screenshot URL. Empty shows a neutral sample page. */
  image: z.string(),
  /** Card hairline and shadow ink (brand text color). */
  color: zColor(),
  /** Bezel that marks every nested level. Glows on dark brands. */
  accent: zColor(),
  /** Inner hairline of the bezel and the second tone of the fallback plate. */
  secondary: zColor(),
  background: zColor(),
  /** 0 = straight infinite zoom, 1 = Escher spiral (one level per turn), 2 = double spiral. */
  twist: z.number().int().min(0).max(2),
  /** 0..1, where the inner copy sits inside the screenshot (left to right). */
  anchorX: z.number().min(0).max(1),
  /** 0..1, where the inner copy sits inside the screenshot (top to bottom). */
  anchorY: z.number().min(0).max(1),
  /** Size of each nested copy relative to the one around it. */
  ratio: z.number().min(0.2).max(0.5),
  /** Nested levels the camera passes per loop. Whole numbers keep the loop seamless. */
  cycles: z.number().int().min(1).max(3),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  image: "",
  color: "#0F2A22",
  accent: "#0B7A5A",
  secondary: "#F28F3B",
  background: "#EAF2EF",
  twist: 2,
  anchorX: 0.7,
  anchorY: 0.62,
  ratio: 0.3,
  cycles: 1,
  grain: true,
};
