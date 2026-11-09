// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** A quiet line that types in word by word. Wrap words in *asterisks* for the accent color. */
  text: z.string().max(90),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  /** Frames between words. */
  wordFrames: z.number().int().min(2).max(10),
  size: z.enum(["small", "medium", "large"]),
});

export const defaults: z.infer<typeof schema> = {
  text: "Small details make the *whole thing* feel real.",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  wordFrames: 4,
  size: "medium",
};
