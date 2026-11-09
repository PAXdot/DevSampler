// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Short phrases that whip through one after another; the last one stays. */
  phrases: z.array(z.string().max(40)).min(1).max(6),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Frames each phrase holds still. */
  holdFrames: z.number().int().min(6).max(60),
  /** Which way the phrases travel. */
  direction: z.enum(["left", "right"]),
  /** Set the last phrase in the accent color. */
  accentLast: z.boolean(),
  /** Soft accent glow behind the type. */
  glow: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  phrases: ["Too slow.", "Too stiff.", "Too generic.", "Make it move."],
  color: "#F4F4F5",
  accent: "#7C9CFF",
  background: "#09090B",
  fontFamily: "Geist",
  holdFrames: 16,
  direction: "left",
  accentLast: true,
  glow: true,
};
