// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  line1: z.string().max(28),
  /** The emphasized middle line: gradient fill, lands with a small slam. */
  line2: z.string().max(28),
  line3: z.string().max(28),
  color: zColor(),
  /** Gradient start of the middle line. */
  accent: zColor(),
  /** Gradient end of the middle line. */
  accent2: zColor(),
  fontFamily: z.string(),
  /** Frames per line (one beat). */
  beatFrames: z.number().int().min(4).max(15),
});

export const defaults: z.infer<typeof schema> = {
  line1: "Design it once.",
  line2: "Animate it everywhere.",
  line3: "Ship it today.",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  accent2: "#5EEAD4",
  fontFamily: "Geist",
  beatFrames: 7,
};
