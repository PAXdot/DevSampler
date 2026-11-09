// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  /** Small line above the title. Empty hides it. */
  eyebrow: z.string().max(32),
  title: z.string().max(48),
  /** Button label. Empty hides the button. */
  cta: z.string().max(24),
  /** Address under the button. Empty hides it. */
  url: z.string().max(40),
  /** Button, glow and eyebrow color. */
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  /** 0..1, strength of the title bloom and the button glow. */
  glow: z.number().min(0).max(1),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  eyebrow: "available today",
  title: "Ship your next launch in a day",
  cta: "Start building",
  url: "northwind.dev",
  accent: "#3D63FF",
  color: "#F4F4F5",
  background: "#08080B",
  glow: 0.7,
  fontFamily: "Geist",
};
