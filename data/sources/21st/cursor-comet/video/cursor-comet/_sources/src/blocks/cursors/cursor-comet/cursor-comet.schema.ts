// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Line above the tour. Empty hides it. */
  headline: z.string().max(32),
  /** Feature card titles, three or four; the comet visits them in order and lands on the last one's button. */
  titles: z.array(z.string().max(16)).min(3).max(4),
  /** One short line per card, same order. 9:16 leaves them out. */
  captions: z.array(z.string().max(30)).max(4),
  /** Button on the last card that the comet clicks. */
  buttonLabel: z.string().max(12),
  /** Text, card lines and the button before the click. */
  color: zColor(),
  /** Tail of the trail, lit icons, the step bars and the clicked button. */
  accent: zColor(),
  /** Head of the trail, the cursor's rim and glow. */
  secondary: zColor(),
  /** Card material; the cursor's fill on light brands. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  headline: "Tour it in ten seconds",
  titles: ["Pick a block", "Drop your brand", "Tune the timing", "Export"],
  captions: ["Scenes for every launch", "Colors and fonts in one click", "Every beat lands on a grid", "MP4 or GIF in any format"],
  buttonLabel: "Try it",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#808286",
  surfaceColor: "#111114",
  background: "#09090B",
  fontFamily: "Geist",
};
