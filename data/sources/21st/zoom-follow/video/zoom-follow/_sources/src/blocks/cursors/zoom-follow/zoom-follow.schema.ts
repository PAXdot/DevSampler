// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Page title in the window header. */
  title: z.string().max(16),
  /** The button the cursor clicks; the camera zooms in on it. */
  buttonLabel: z.string().max(14),
  /** Sidebar items; the one matching the title is active. The phone layout (9:16) has no sidebar. */
  nav: z.array(z.string().max(12)).max(6),
  /** Table rows, one name each (9:16 shows the first three). */
  rows: z.array(z.string().max(14)).min(1).max(6),
  /** Amount per row, in the same order. */
  amounts: z.array(z.string().max(10)).max(6),
  /** Status per row. Rows sharing the first row's status get the secondary color, the rest stay neutral. */
  statuses: z.array(z.string().max(8)).max(6),
  /** Toast that confirms the click. */
  toast: z.string().max(24),
  /** Text and lines of the app. */
  color: zColor(),
  /** The button, its click ring, the chart and the toast badge. */
  accent: zColor(),
  /** Status pills that share the first row's status. */
  secondary: zColor(),
  /** App window material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Revenue",
  buttonLabel: "Export CSV",
  nav: ["Overview", "Revenue", "Customers", "Reports", "Settings"],
  rows: ["Acme Inc", "Northwind", "Globex", "Initech", "Umbrella", "Hooli"],
  amounts: ["$12,400", "$8,250", "$21,900", "$4,120", "$16,780", "$9,300"],
  statuses: ["Paid", "Paid", "Due", "Paid", "Paid", "Due"],
  toast: "revenue.csv exported",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#34D399",
  surfaceColor: "#111114",
  background: "#09090B",
  fontFamily: "Geist",
};
