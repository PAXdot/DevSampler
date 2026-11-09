// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Button the popover opens from. */
  anchorLabel: z.string().max(28),
  /** Menu rows: label plus a quiet detail on the right. */
  items: z
    .array(z.object({ text: z.string().max(30), meta: z.string().max(14) }))
    .min(2)
    .max(6),
  /** Row the cursor picks (0-based). */
  activeIndex: z.number().int().min(0).max(5),
  /** A cursor opens the popover and picks a row. */
  cursor: z.boolean(),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  anchorLabel: "Version history",
  items: [
    { text: "v6 Yearly toggle", meta: "now" },
    { text: "v5 Savings badges", meta: "4m" },
    { text: "v4 Calmer hero", meta: "12m" },
    { text: "v3 Three tiers", meta: "1h" },
    { text: "v2 First draft", meta: "2h" },
  ],
  activeIndex: 2,
  cursor: true,
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
