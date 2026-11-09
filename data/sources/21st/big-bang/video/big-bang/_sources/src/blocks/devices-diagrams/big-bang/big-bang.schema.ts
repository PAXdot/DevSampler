// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Pill under the phone. */
  label: z.string().max(36),
  /** Phone screen (image or video). Empty shows a drawn sample app. */
  screen: z.string(),
  /** Stickers in the burst. */
  stickers: z.number().int().min(8).max(36),
  /** Changes the sticker layout. */
  seed: z.number().int().min(0).max(999),
  /** Secondary sticker color. */
  secondary: zColor().optional(),
  /** Hardware finish, independent of the full-frame backdrop. */
  frameColor: zColor().optional(),
  /** Optional brand surface/text for the drawn sample app only. */
  screenBackground: zColor().optional(),
  screenColor: zColor().optional(),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  label: "Now on every phone",
  screen: "",
  stickers: 24,
  seed: 7,
  secondary: "#FF8A5B",
  frameColor: "#121214",
  screenBackground: "#FFFFFF",
  screenColor: "#0A0A0A",
  accent: "#3D63FF",
  color: "#0A0A0A",
  background: "#FFFFFF",
  fontFamily: "Geist",
};
