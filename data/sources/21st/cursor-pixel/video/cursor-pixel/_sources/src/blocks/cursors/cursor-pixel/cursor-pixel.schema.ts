// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Game title at the top of the screen. */
  title: z.string().max(16),
  /** The three menu entries, top to bottom. The cursor picks the first. */
  items: z.array(z.string().max(12)).min(3).max(3),
  /** Blinking line under the menu before the pick. */
  hint: z.string().max(16),
  /** Line over the loading bar once the first entry is picked. */
  readyLabel: z.string().max(16),
  /** Screen border, text and the cursor's fill or outline. */
  color: zColor(),
  /** Selection bar, title shadow, loading bar and half the burst. */
  accent: zColor(),
  /** Second title shadow, the flash and the other half of the burst. */
  secondary: zColor(),
  /** Screen material. */
  surfaceColor: zColor(),
  background: zColor(),
  /** Everything on the screen: a monospace face reads most like a game. */
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Pixel Quest",
  items: ["Start game", "Options", "Quit"],
  hint: "Press start",
  readyLabel: "Get ready!",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#F5C542",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist Mono",
};
