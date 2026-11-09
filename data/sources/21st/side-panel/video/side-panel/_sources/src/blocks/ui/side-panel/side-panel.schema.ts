// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** The page behind the panel: your screenshot. Empty shows a stand-in app. */
  image: z.string(),
  panelTitle: z.string().max(28),
  /** Panel rows (sources, settings, fields). */
  items: z.array(z.string().max(28)).min(1).max(5),
  cta: z.string().max(22),
  doneLabel: z.string().max(22),
  /** Confirmation toast after the click. Empty hides it. */
  toast: z.string().max(32),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  doneColor: zColor().default("#16A34A"),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  image: "",
  panelTitle: "Sync to workspace",
  items: ["Customers table", "Pipeline view", "Weekly report"],
  cta: "Sync now",
  doneLabel: "Synced",
  toast: "Everything is up to date",
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  doneColor: "#16A34A",
  fontFamily: "Geist",
};
