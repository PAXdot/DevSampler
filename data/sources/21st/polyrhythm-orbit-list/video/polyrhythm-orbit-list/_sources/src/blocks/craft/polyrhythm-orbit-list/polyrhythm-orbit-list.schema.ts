// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Polyrhythm Orbits";

export const schema = z.object({
  /** Steps of the process. Each one lights up when a dot crosses 12 o'clock. Two to six. */
  items: z.array(z.string().max(28)).min(2).max(6),
  /** Logo at the hub. Leave empty for an abstract hub. */
  logo: z.string(),
  /** Labels, orbit lines and the outer (slowest) dot. */
  color: zColor(),
  /** Inner (fastest) dot. */
  primary: zColor(),
  /** Middle dot. */
  secondary: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  monoFontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  items: ["Research", "Design", "Build", "Review", "Ship"],
  logo: "",
  color: "#F5EEF8",
  primary: "#FFB703",
  secondary: "#FB5607",
  background: "#130B1A",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
