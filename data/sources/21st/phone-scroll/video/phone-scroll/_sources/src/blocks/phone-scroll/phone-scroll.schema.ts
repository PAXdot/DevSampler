// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  headline: z.string().max(48),
  subline: z.string().max(80),
  /** Screen recording or a tall screenshot (scrolled top to bottom). Empty shows a sample app. */
  screen: z.string(),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  screenBackground: zColor().default("#F6F6F7"),
  screenColor: zColor().default("#0A0A0A"),
  frameColor: zColor().default("#151517"),
  bodyFontFamily: z.string().default("Geist"),
  /** Which side the phone sits on in landscape. */
  side: z.enum(["left", "right"]),
});

export const defaults: z.infer<typeof schema> = schema.parse({
  headline: "Your app, in motion",
  subline: "Drop in a screen recording and it plays inside the phone.",
  screen: "",
  accent: "#3D63FF",
  color: "#F4F4F5",
  background: "#09090B",
  fontFamily: "Geist",
  side: "left",
});
