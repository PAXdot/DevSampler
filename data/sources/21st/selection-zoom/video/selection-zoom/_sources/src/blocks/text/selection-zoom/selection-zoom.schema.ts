// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  phrase: z.string().max(60),
  color: zColor(),
  /** Text-selection highlight color. */
  accent: zColor(),
  fontFamily: z.string(),
  /** How far the camera snaps in once the phrase is selected. */
  zoom: z.number().min(1.5).max(4),
  /** Highlight the whole phrase or only its last word. */
  select: z.enum(["phrase", "last-word"]),
  /** Frames between words. */
  wordFrames: z.number().int().min(2).max(8),
});

export const defaults: z.infer<typeof schema> = {
  phrase: "Design that ships itself",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  zoom: 2.8,
  select: "phrase",
  wordFrames: 4,
};
