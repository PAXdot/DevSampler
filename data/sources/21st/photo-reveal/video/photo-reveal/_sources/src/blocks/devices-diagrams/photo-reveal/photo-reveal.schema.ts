// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const PHOTO_REVEALS = ["mask-wipe", "scale-shadow", "tilt-3d", "ken-burns"] as const;

export const schema = z.object({
  /** Photo or screenshot (image or video). Empty shows a drawn photo. */
  image: z.string(),
  /** How the photo appears: slanted mask wipe, scale-in with a growing shadow, 3D tilt settle, or a slow Ken Burns push. */
  reveal: z.enum(PHOTO_REVEALS),
  /** Chip on the photo. Empty hides it. */
  caption: z.string().max(40),
  /** Corner radius, % of the short side. */
  radius: z.number().min(0).max(8),
  /** Caption foreground and its own card material. */
  captionColor: zColor().optional(),
  captionBackground: zColor().optional(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  image: "",
  reveal: "mask-wipe",
  caption: "Shot on location, golden hour",
  radius: 2.4,
  captionColor: "#FFFFFF",
  captionBackground: "#0A0A0C",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
