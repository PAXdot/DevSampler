// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Table name in the toolbar. */
  title: z.string().max(36),
  /** Column headers: name, score, status. */
  columns: z.array(z.string().max(18)).length(3),
  /** One row per entry. Scores are seeded from the row text. */
  rows: z.array(z.string().max(24)).min(2).max(8),
  workingLabel: z.string().max(16),
  yesLabel: z.string().max(14),
  noLabel: z.string().max(14),
  /** Perspective turn of the table, degrees. */
  tilt: z.number().min(-25).max(25),
  successColor: zColor().default("#16A34A"),
  reviewColor: zColor().default("#D97706"),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Design partners",
  columns: ["Company", "Fit score", "Status"],
  rows: ["Northwind", "Lumen Labs", "Halcyon", "Brightpath", "Kestrel", "Oakline", "Ferro Studio"],
  workingLabel: "Researching",
  yesLabel: "Qualified",
  noLabel: "Review",
  tilt: -12,
  successColor: "#16A34A", reviewColor: "#D97706",
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  background: "#F3F4F7",
  fontFamily: "Geist",
};
