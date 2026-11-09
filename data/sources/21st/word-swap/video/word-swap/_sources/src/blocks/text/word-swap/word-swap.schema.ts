// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** First line; stays put. */
  staticLine: z.string().max(32),
  /** Second-line words; each one pushes the previous out. The last one stays. */
  words: z.array(z.string().max(20)).min(1).max(6),
  color: zColor(),
  /** Color of the swapping words. */
  accent: zColor(),
  fontFamily: z.string(),
  /** Frames between swaps. */
  every: z.number().int().min(10).max(40),
  /** Push sideways (with motion blur) or roll up. */
  direction: z.enum(["left", "up"]),
});

export const defaults: z.infer<typeof schema> = {
  staticLine: "Your launch video,",
  words: ["too slow.", "too costly.", "too stiff.", "done."],
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  every: 18,
  direction: "left",
};
