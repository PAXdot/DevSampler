// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  serifFontFamily: z.string().optional(),
  /** Small label above the quote. */
  eyebrow: z.string().max(32),
  quote: z.string().max(160),
  attribution: z.string().max(48),
  /** Optional stat that counts up after the quote (for example "3.2x" or "12,400"). Empty hides it. */
  stat: z.string().max(12),
  statLabel: z.string().max(32),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  serifFontFamily: "Instrument Serif",
  eyebrow: "What teams say",
  quote: "We replaced a week of motion work with one afternoon, and the videos finally look like our product.",
  attribution: "Mara Lind, head of design at Northwind",
  stat: "3.2x",
  statLabel: "faster launch videos",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  background: "#09090B",
  fontFamily: "Geist",
};
