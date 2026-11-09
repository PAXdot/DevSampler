// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Photos tiled across the grid (image or video), repeated to fill it. Empty slots show drawn photos. */
  photo1: z.string(),
  photo2: z.string(),
  photo3: z.string(),
  photo4: z.string(),
  /** How far the tiles fly from: 0.2 calm, 1 wild. */
  chaos: z.number().min(0.2).max(1),
  /** Gap between tiles, % of the short side. */
  gap: z.number().min(0).max(4),
  /** Tile corner radius, % of the short side. */
  radius: z.number().min(0).max(4),
  accent: zColor(),
  /** Material around each photo; empty inherits the accent. */
  frameColor: zColor().optional(),
  /** Full-frame fill behind the grid when rendered on its own. Hidden when used as a layer. */
  background: zColor(),
});

export const defaults: z.infer<typeof schema> = {
  photo1: "",
  photo2: "",
  photo3: "",
  photo4: "",
  chaos: 0.7,
  gap: 1.2,
  radius: 1.2,
  accent: "#3D63FF",
  frameColor: "#3D63FF",
  background: "transparent",
};
