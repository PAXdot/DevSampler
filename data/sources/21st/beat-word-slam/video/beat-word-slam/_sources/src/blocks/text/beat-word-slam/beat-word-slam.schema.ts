// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** One word per beat; the last one lands in the accent color and stays. */
  words: z.array(z.string().max(16)).min(1).max(8),
  /** Tempo; one word per beat (150 bpm = 12 frames). */
  bpm: z.number().int().min(60).max(200),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Short flash frame on every beat. */
  flash: z.boolean(),
  /** What changes behind each word: the glow moves, the colors invert, or nothing. */
  variation: z.enum(["glow-shift", "invert", "none"]),
});

export const defaults: z.infer<typeof schema> = {
  words: ["Design.", "Animate.", "Export.", "Share.", "Ship."],
  bpm: 150,
  color: "#F4F4F5",
  accent: "#7C9CFF",
  background: "#09090B",
  fontFamily: "Geist",
  flash: true,
  variation: "glow-shift",
};
