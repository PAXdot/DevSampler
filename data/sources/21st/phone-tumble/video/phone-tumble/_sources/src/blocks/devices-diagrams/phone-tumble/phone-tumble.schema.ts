// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  headline: z.string().max(40),
  subline: z.string().max(72),
  /** Front and back screens of the two phones (image or video). Each half turn reveals the next one. Empty slots show drawn sample apps. */
  screen1: z.string(),
  screen2: z.string(),
  screen3: z.string(),
  screen4: z.string(),
  /** Tumble speed, degrees per second. */
  speed: z.number().min(20).max(240),
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
  headline: "Four screens, one flow",
  subline: "Every half turn reveals the next step of the app.",
  screen1: "",
  screen2: "",
  screen3: "",
  screen4: "",
  speed: 120,
  accent: "#3D63FF",
  color: "#F4F4F5",
  background: "#0A0A0C",
  fontFamily: "Geist",
  screenBackground: "#101014",
  screenColor: "#F4F4F5",
});
