// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Dashboard title. */
  title: z.string().max(22),
  /** Date range chip beside the title. Empty hides it; 9:16 leaves it out. */
  range: z.string().max(14),
  /** KPI tile names, 4 to 8 (9:16 shows the first four, 16:9 uses three columns for six or fewer). */
  metrics: z.array(z.string().max(12)).min(4).max(8),
  /** KPI values in the same order. A leading number counts up. */
  values: z.array(z.string().max(8)).max(8),
  /** Change per KPI, e.g. "+12%". A leading minus marks a drop. 9:16 leaves them out. */
  deltas: z.array(z.string().max(6)).max(8),
  /** The KPI (0-based) the cursor guides the eye to and opens. */
  focus: z.number().int().min(0).max(7),
  /** Button that appears on the focused tile and gets clicked. */
  detailsLabel: z.string().max(10),
  /** Text and lines of the dashboard; the cursor's fill on dark brands. */
  color: zColor(),
  /** The pool of light, the cursor's rim, the Details button and the focused chart. */
  accent: zColor(),
  /** Rising deltas. */
  secondary: zColor(),
  /** Dashboard material; the cursor's fill on light brands. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Growth overview",
  range: "Last 30 days",
  metrics: ["Revenue", "Active users", "Conversion", "Churn", "Signups", "Avg. order", "Sessions", "NPS"],
  values: ["$48.2k", "12,840", "4.8%", "2.1%", "1,204", "$62.40", "86.4k", "71"],
  deltas: ["+12%", "+8%", "+0.6%", "-0.4%", "+21%", "+3%", "+15%", "+4"],
  focus: 2,
  detailsLabel: "Details",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#34D399",
  surfaceColor: "#111114",
  background: "#09090B",
  fontFamily: "Geist",
};
