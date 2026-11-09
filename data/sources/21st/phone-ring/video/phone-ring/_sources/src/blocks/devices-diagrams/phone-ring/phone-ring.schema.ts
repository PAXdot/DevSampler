// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  headline: z.string().max(40),
  /** Up to three screens (image or video), repeated around the ring. Empty slots show drawn sample apps. */
  screen1: z.string(),
  screen2: z.string(),
  screen3: z.string(),
  /** Phones on the ring. */
  count: z.number().int().min(5).max(10),
  /** Ring rotation, degrees per second. */
  spin: z.number().min(0).max(60),
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
  headline: "One app, every screen",
  screen1: "",
  screen2: "",
  screen3: "",
  count: 8,
  spin: 14,
  accent: "#3D63FF",
  color: "#0A0A0A",
  background: "#F4F4F2",
  fontFamily: "Geist",
});
