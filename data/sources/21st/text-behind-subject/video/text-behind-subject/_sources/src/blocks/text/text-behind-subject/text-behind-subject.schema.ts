// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** The giant word set behind the subject. */
  word: z.string().max(12),
  /** A cut-out subject (transparent PNG or WebP). Empty shows a glossy sample orb. */
  image: z.string(),
  caption: z.string().max(60),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Keep the word as an outline instead of filling it. */
  outlineOnly: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  word: "Depth",
  image: "",
  caption: "Layers that move like the real thing",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  background: "#09090B",
  fontFamily: "Geist",
  outlineOnly: false,
};
