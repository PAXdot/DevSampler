// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  line1: z.string().max(20),
  /** Second line, typed after the first while the camera follows. Empty for one line. */
  line2: z.string().max(24),
  color: zColor(),
  /** Stroke of the letter currently being typed. */
  accent: zColor(),
  fontFamily: z.string(),
  /** Camera zoom on the active letter while typing; pulls back to 1x at the end. */
  cameraZoom: z.number().min(1).max(4),
  /** Frames per letter. */
  charFrames: z.number().int().min(1).max(4),
  /** Outline stroke, in % of the letter size. */
  strokeWidth: z.number().min(1).max(6),
});

export const defaults: z.infer<typeof schema> = {
  line1: "Motion",
  line2: "for every UI",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  cameraZoom: 3,
  charFrames: 2,
  strokeWidth: 1.6,
};
