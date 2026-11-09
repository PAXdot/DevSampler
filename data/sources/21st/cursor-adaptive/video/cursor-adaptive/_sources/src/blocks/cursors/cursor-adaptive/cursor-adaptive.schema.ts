// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Board name in the canvas header. Empty hides it. */
  title: z.string().max(24),
  /** The five tools in the palette, in order: select, pen, shapes, text, note. */
  tools: z.array(z.string().max(8)).min(5).max(5),
  /** The tool the pointer picks (0-4). The first tool (or the second, if this is 0) starts selected. */
  pick: z.number().int().min(0).max(4),
  /** Text, icons and the pointer disc. */
  color: zColor(),
  /** The selected tool and the canvas circle. */
  accent: zColor(),
  /** The sticky note and the second tint of the picture tile. */
  secondary: zColor(),
  /** Board and palette material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Launch moodboard",
  tools: ["Select", "Pen", "Shapes", "Text", "Note"],
  pick: 1,
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#808286",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
