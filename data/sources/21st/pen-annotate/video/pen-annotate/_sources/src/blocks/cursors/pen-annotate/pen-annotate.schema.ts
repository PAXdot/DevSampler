// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Chart card title. */
  title: z.string().max(28),
  /** Line under the title. Empty hides it. */
  subtitle: z.string().max(32),
  /** The number the pen circles. A leading number counts up. */
  metric: z.string().max(8),
  /** Handwritten note under the circle. */
  note: z.string().max(20),
  /** Text, metric and quiet bars. */
  color: zColor(),
  /** The last, highlighted bar. */
  accent: zColor(),
  /** Marker ink: circle, arrow, note and the pen body. */
  ink: zColor(),
  /** Card material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Handwriting for the note. */
  handFontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Weekly signups",
  subtitle: "Last 7 weeks",
  metric: "+128%",
  note: "best week yet!",
  color: "#F4F4F5",
  accent: "#3D63FF",
  ink: "#FDE047",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
  handFontFamily: "Caveat",
};
