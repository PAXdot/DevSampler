// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Light Streak Screen Swap";

export const schema = z.object({
  /** The first screenshot: its rows stretch into streaks of light and fly off. Empty shows a neutral sample page. */
  screenshot: z.string(),
  /** The second screenshot, carried in on the same streaks. Empty re-grades the first one in your brand palette. */
  nextScreenshot: z.string(),
  /** One short line that lands under the new screen. Empty hides it. */
  caption: z.string().max(48),
  /** Caption ink. */
  color: zColor(),
  /** Main streak light. */
  primary: zColor(),
  /** Second streak light, woven between the primary bands. */
  secondary: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** 0..1, brightness and length of the light streaks. */
  intensity: z.number().min(0).max(1),
});

export const defaults: z.infer<typeof schema> = {
  screenshot: "",
  nextScreenshot: "",
  caption: "Introducing the new version",
  color: "#F5EEF8",
  primary: "#FFB703",
  secondary: "#FB5607",
  background: "#130B1A",
  fontFamily: "Inter",
  intensity: 0.85,
};
