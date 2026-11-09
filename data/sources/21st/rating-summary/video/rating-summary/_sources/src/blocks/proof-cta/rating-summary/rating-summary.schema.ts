// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Average rating out of five, as written ("4.9"). */
  score: z.string().max(4),
  /** Number of reviews behind the score. */
  count: z.number().int().min(0).max(99_999_999),
  countLabel: z.string().max(24),
  /** Where the reviews come from. */
  source: z.string().max(40),
  /** Review snippets that land beside the score. */
  snippets: z.array(z.object({ quote: z.string().max(80), name: z.string().max(28) })).min(1).max(3),
  color: zColor(),
  accent: zColor(),
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  bodyFontFamily: z.string().optional(),
  numeralsFontFamily: z.string().optional(),
});

export const defaults: z.infer<typeof schema> = {
  score: "4.9",
  count: 2400,
  countLabel: "reviews",
  source: "Verified customer reviews",
  snippets: [
    { quote: "Setup took ten minutes. The first video shipped the same day.", name: "Mara Lind, Northwind" },
    { quote: "Our brand finally looks the same in every launch.", name: "Theo Park, Acme" },
    { quote: "The team stopped waiting on motion design.", name: "Ines Duarte, Globex" },
  ],
  color: "#0A0A0B",
  accent: "#F59E0B",
  surfaceColor: "#FFFFFF",
  background: "#F4F2EE",
  fontFamily: "Geist",
  bodyFontFamily: "Inter",
  numeralsFontFamily: "Geist",
};
