// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { ICON_NAMES } from "../_shared/icons";

export const schema = z.object({
  /** One tile per icon, pressed in order. */
  icons: z.array(z.enum(ICON_NAMES)).min(1).max(6),
  /** Text on the wide pill under the tiles. Empty hides the pill. */
  handle: z.string().max(24),
  /** Isometric view; off shows the tiles nearly face-on. */
  iso: z.boolean(),
  /** Tile face color. */
  faceColor: zColor(),
  /** Outline, sides and icon color. */
  ink: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  icons: ["play", "message", "globe", "heart"],
  handle: "@yourstudio",
  iso: true,
  faceColor: "#FFFFFF",
  ink: "#0A0A0A",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
