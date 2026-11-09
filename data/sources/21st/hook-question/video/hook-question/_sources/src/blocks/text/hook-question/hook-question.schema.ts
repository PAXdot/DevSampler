// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** The cold-open question. Wrap a word in *asterisks* for the accent color. */
  question: z.string().max(72),
  /** Fades in after a beat. Empty hides it. */
  answer: z.string().max(60),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  align: z.enum(["left", "center"]),
  /** Faint accent glow in the corner. */
  glow: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  question: "What if your docs could *animate* themselves?",
  answer: "Here is how we did it.",
  color: "#F4F4F5",
  accent: "#F472B6",
  background: "#000000",
  fontFamily: "Geist",
  align: "left",
  glow: false,
};
