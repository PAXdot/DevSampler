// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  headline: z.string().max(40),
  /** Screens repeated along the shelf (image or video). Empty slots show drawn sample apps. */
  screen1: z.string(),
  screen2: z.string(),
  screen3: z.string(),
  /** Pan speed, in % of the short side per second. */
  speed: z.number().min(0).max(40),
  /** Turn of every phone on the shelf, degrees. */
  angle: z.number().min(-50).max(50),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  bodyFontFamily: z.string().default("Geist"),
  frameColor: zColor().default("#121214"),
  screenBackground: zColor().default("#FFFFFF"),
  screenColor: zColor().default("#0A0A0A"),
});

export const defaults: z.infer<typeof schema> = schema.parse({
  headline: "Every screen, ready to ship",
  screen1: "",
  screen2: "",
  screen3: "",
  speed: 9,
  angle: -30,
  accent: "#3D63FF",
  color: "#0A0A0A",
  background: "#F2F2F0",
  fontFamily: "Geist",
});
