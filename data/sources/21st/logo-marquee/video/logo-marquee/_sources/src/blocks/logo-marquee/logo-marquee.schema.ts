// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  label: z.string().max(40),
  /** Wordmarks, used when no logo images are given. */
  names: z.array(z.string().max(16)).min(3).max(12),
  /** Logo images (transparent SVG/PNG). When set they replace the names. */
  logos: z.array(z.string()).max(12),
  color: zColor(),
  fontFamily: z.string(),
  serifFontFamily: z.string().default("Instrument Serif"),
  monoFontFamily: z.string().default("Geist Mono"),
  /** Seconds for the row to travel one full set. */
  loopSeconds: z.number().min(4).max(60),
});

export const defaults: z.infer<typeof schema> = {
  label: "Trusted by teams at",
  names: ["Northwind", "Globex", "Initech", "Hooli", "Umbrella", "Stark & Co", "Wayne"],
  logos: [],
  color: "#F4F4F5",
  fontFamily: "Geist",
  serifFontFamily: "Instrument Serif",
  monoFontFamily: "Geist Mono",
  loopSeconds: 14,
};
