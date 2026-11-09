// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Screen recording or screenshot (image or video). Empty shows a drawn sample feed that scrolls with the gesture. */
  screen: z.string(),
  /** Small pill above the phone. Empty hides it. */
  label: z.string().max(32),
  /** Show a touch dot that taps, then swipes up. */
  touch: z.boolean(),
  /** Optional brand surface/text for the drawn sample feed only. */
  screenBackground: zColor().optional(),
  screenColor: zColor().optional(),
  accent: zColor(),
  color: zColor(),
  /** Phone body color. */
  frameColor: zColor(),
  /** Full-frame fill behind the phone when rendered on its own. Hidden when used as a layer. */
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  screen: "",
  label: "Swipe up to explore",
  touch: true,
  screenBackground: "#F4F4F5",
  screenColor: "#0A0A0A",
  accent: "#3D63FF",
  color: "#F4F4F5",
  frameColor: "#141416",
  background: "transparent",
  fontFamily: "Geist",
};
