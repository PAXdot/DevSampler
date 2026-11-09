// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Screen heading. */
  title: z.string().max(28),
  /** Line under the heading. Empty hides it. */
  subtitle: z.string().max(32),
  /** The four choices, top to bottom (icons: web, phone, dashboard, bag). The hand taps the first and the third. */
  options: z.array(z.string().max(14)).min(4).max(4),
  /** The button at the bottom of the screen. */
  cta: z.string().max(14),
  /** Text, the phone body and the hand's outline. */
  color: zColor(),
  /** Selected rows, the button, progress and the tap ripples. */
  accent: zColor(),
  /** Tint of the row icons. */
  secondary: zColor(),
  /** Screen material and the hand's fill. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "What will you build?",
  subtitle: "Pick all that apply",
  options: ["Websites", "Mobile apps", "Dashboards", "Online stores"],
  cta: "Continue",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#808286",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
