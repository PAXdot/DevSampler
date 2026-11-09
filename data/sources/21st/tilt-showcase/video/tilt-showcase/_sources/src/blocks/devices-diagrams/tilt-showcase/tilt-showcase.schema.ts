// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { ICON_NAMES } from "../_shared/icons";

export const schema = z.object({
  /** Screenshot or screen recording (image or video), ideally 16:10. Empty shows a drawn dashboard. */
  image: z.string(),
  /** Floating chip in front of the card. Empty hides it. */
  chip: z.string().max(32),
  chipIcon: z.enum(ICON_NAMES),
  /** Resting tilt, degrees. */
  tilt: z.number().min(0).max(30),
  /** Draw a browser bar above the screenshot. */
  browser: z.boolean(),
  accent: zColor(),
  fontFamily: z.string(),
  surface: zColor().default("#FFFFFF"),
  color: zColor().default("#0A0A0A"),
  secondary: zColor().default("#898B8F"),
  bodyFontFamily: z.string().default("Geist"),
});

export const defaults: z.infer<typeof schema> = schema.parse({
  image: "",
  chip: "Revenue up 24% this week",
  chipIcon: "chart",
  tilt: 14,
  browser: true,
  accent: "#3D63FF",
  fontFamily: "Geist",
});
