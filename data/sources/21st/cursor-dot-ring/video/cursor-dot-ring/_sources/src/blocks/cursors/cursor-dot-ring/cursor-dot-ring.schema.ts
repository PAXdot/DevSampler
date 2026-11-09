// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Big editorial title over the grid. */
  heading: z.string().max(24),
  /** Small line at the right end of the heading row. Empty hides it; hidden in 9:16. */
  note: z.string().max(24),
  /** The four project titles, in reading order. The cursor opens the third. */
  titles: z.array(z.string().max(14)).min(4).max(4),
  /** A short discipline under each title. Hidden in 9:16. */
  tags: z.array(z.string().max(12)).min(4).max(4),
  /** Word inside the swollen ring over a project. */
  viewLabel: z.string().max(8),
  /** Text, the dot and the idle ring. */
  color: zColor(),
  /** The swollen ring, its label plate and the chosen project's underline. */
  accent: zColor(),
  /** Second tint of the project covers. */
  secondary: zColor(),
  /** Paper of the covers. */
  surfaceColor: zColor(),
  background: zColor(),
  /** Titles, tags and the ring label. */
  fontFamily: z.string(),
  /** The editorial heading. */
  serifFontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  heading: "Selected work",
  note: "Index 2023-2026",
  titles: ["Northwind", "Atlas", "Kiln", "Meridian"],
  tags: ["Identity", "Web", "Motion", "Print"],
  viewLabel: "View",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#F2A65A",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
  serifFontFamily: "Instrument Serif",
};
