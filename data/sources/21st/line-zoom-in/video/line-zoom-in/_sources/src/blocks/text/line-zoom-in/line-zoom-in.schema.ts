// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** One string per line; each line pops in from its own center. */
  lines: z.array(z.string().max(28)).min(1).max(4),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  /** Frames between lines. */
  gapFrames: z.number().int().min(3).max(20),
  /** Set the last line in the accent color. */
  accentLast: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  lines: ["Now on", "every screen"],
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  gapFrames: 7,
  accentLast: true,
};
