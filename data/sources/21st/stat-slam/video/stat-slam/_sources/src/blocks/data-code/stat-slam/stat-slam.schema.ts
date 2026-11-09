// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  stats: z
    .array(
      z.object({
        value: z.number().min(-1e12).max(1e12),
        prefix: z.string().max(3),
        suffix: z.string().max(4),
        label: z.string().max(32),
        decimals: z.number().int().min(0).max(2),
      }),
    )
    .min(1)
    .max(5),
  /** Frames each stat holds the screen (one cut per stat). */
  beat: z.number().int().min(24).max(90),
  /** Where each stat sits: alternate left / right / center, or keep them all in one place. */
  align: z.enum(["cycle", "center", "left"]),
  /** Soft bloom around the numbers. */
  glow: z.boolean(),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  stats: [
    { value: 47000, prefix: "", suffix: "", label: "builders on the waitlist", decimals: 0 },
    { value: 14287, prefix: "", suffix: "", label: "components shipped", decimals: 0 },
    { value: 99.9, prefix: "", suffix: "%", label: "uptime this quarter", decimals: 1 },
  ],
  beat: 38,
  align: "cycle",
  glow: true,
  color: "#F4F4F5",
  accent: "#3D63FF",
  background: "#09090B",
  fontFamily: "Geist",
};
