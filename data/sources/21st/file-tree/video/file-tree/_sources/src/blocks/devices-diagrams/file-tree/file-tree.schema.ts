// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Path shown in the card header. */
  title: z.string().max(32),
  /** Tree rows top to bottom; depth is the indent level. Rows with deeper rows under them, or without a dot, are folders. */
  rows: z.array(z.object({ text: z.string().max(28), depth: z.number().int().min(0).max(4) })).min(2).max(10),
  /** Row that gets the accent outline first (0-based, -1 = none). */
  highlight: z.number().int().min(-1).max(9),
  /** A new row is typed in after this row (0-based, -1 = no insertion). */
  insertAfter: z.number().int().min(-1).max(9),
  insertName: z.string().max(28),
  /** File names use the brand mono face. */
  monoFontFamily: z.string().optional(),
  accent: zColor(),
  color: zColor(),
  cardColor: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "~/acme/web",
  rows: [
    { text: "app", depth: 0 },
    { text: "dashboard", depth: 1 },
    { text: "layout.tsx", depth: 2 },
    { text: "page.tsx", depth: 2 },
    { text: "settings", depth: 1 },
    { text: "globals.css", depth: 1 },
    { text: "layout.tsx", depth: 1 },
    { text: "package.json", depth: 0 },
  ],
  highlight: 4,
  insertAfter: 4,
  insertName: "page.tsx",
  monoFontFamily: "Geist Mono",
  accent: "#3FB950",
  color: "#E8E8EA",
  cardColor: "#111114",
  fontFamily: "Geist",
};
