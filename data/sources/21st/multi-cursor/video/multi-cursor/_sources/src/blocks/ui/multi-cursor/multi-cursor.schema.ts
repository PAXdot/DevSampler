// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Collaborators; each gets a colored cursor and a job (select, resize, click, wander). */
  names: z.array(z.string().max(12)).min(2).max(4),
  /** Headline on the shared canvas. */
  headline: z.string().max(48),
  /** Button on the canvas. */
  cta: z.string().max(18),
  /** Image block on the canvas. Empty shows a gradient placeholder. */
  image: z.string(),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  selectColor: zColor().default("#F97316"), clickColor: zColor().default("#10B981"), resizeColor: zColor().default("#EC4899"), wanderColor: zColor().default("#0EA5E9"),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  names: ["Mia", "Theo", "Ana", "Sam"],
  headline: "Design together, ship the same day",
  cta: "Start a file",
  image: "",
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  selectColor: "#F97316", clickColor: "#10B981", resizeColor: "#EC4899", wanderColor: "#0EA5E9",
  fontFamily: "Geist",
};
