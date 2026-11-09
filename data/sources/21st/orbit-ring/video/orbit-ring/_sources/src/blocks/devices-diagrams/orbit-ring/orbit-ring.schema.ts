// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  centerLabel: z.string().max(24),
  /** Orbiting badges across the three rings. */
  count: z.number().int().min(6).max(16),
  /** Inner ring speed, degrees per second; outer rings turn slower. */
  speed: z.number().min(0).max(60),
  /** What orbits: drawn people avatars, icons, or glowing dots. */
  badges: z.enum(["people", "icons", "dots"]),
  /** Second badge color. */
  secondary: zColor().optional(),
  accent: zColor(),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  centerLabel: "Your community",
  count: 12,
  speed: 24,
  badges: "people",
  secondary: "#FF8A5B",
  accent: "#3D63FF",
  color: "#F4F4F5",
  fontFamily: "Geist",
};
