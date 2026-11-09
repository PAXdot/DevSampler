// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  prefix: z.string().max(32),
  /** Words that cycle through the highlight box; the last one stays. */
  words: z.array(z.string().max(20)).min(1).max(6),
  suffix: z.string().max(32),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  /** Solid accent box with contrasting ink, or a soft tint. */
  box: z.enum(["solid", "tint"]),
  /** Frames each word holds before the next one swaps in. */
  swapEvery: z.number().int().min(8).max(40),
});

export const defaults: z.infer<typeof schema> = {
  prefix: "Do all your",
  words: ["research", "outreach", "reporting", "hiring", "planning"],
  suffix: "in one place.",
  color: "#F4F4F5",
  accent: "#F4F4F5",
  fontFamily: "Geist",
  box: "solid",
  swapEvery: 14,
};
