// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  kicker: z.string().max(32),
  product: z.string().max(28),
  date: z.string().max(24),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Accent glow behind the title. */
  glow: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  kicker: "Introducing",
  product: "Acme Edge",
  date: "Oct 20",
  accent: "#3D63FF",
  color: "#F4F4F5",
  background: "#09090B",
  fontFamily: "Geist",
  glow: true,
};
