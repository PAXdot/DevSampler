// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Handwritten page title. Empty hides it. */
  title: z.string().max(24),
  /** The three sketched steps, left to right (top to bottom in 9:16). */
  steps: z.array(z.string().max(12)).min(3).max(3),
  /** The sketched button before the click. */
  label: z.string().max(14),
  /** The button once it is clicked. */
  doneLabel: z.string().max(14),
  /** Pencil lines and handwriting. */
  color: zColor(),
  /** Marker fill of the clicked button and the tick on the last step. */
  accent: zColor(),
  /** Highlighter fill of the cursor and the hover shading. */
  secondary: zColor(),
  /** Sketchbook paper. */
  surfaceColor: zColor(),
  background: zColor(),
  /** Handwriting face for every label. */
  handFontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Launch plan",
  steps: ["Idea", "Prototype", "Launch"],
  label: "Ship it",
  doneLabel: "Shipped!",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#FDE68A",
  surfaceColor: "#09090B",
  background: "#09090B",
  handFontFamily: "Caveat",
};
