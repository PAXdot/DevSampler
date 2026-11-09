// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Column the card leaves. */
  fromLabel: z.string().max(18),
  /** Column the card is dropped into. */
  toLabel: z.string().max(18),
  /** The card being dragged. */
  card: z.string().max(36),
  /** Other cards: the first two stay in the source column, the third sits in the target. */
  others: z.array(z.string().max(36)).length(3),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  surfaceColor: zColor().optional(), textColor: zColor().optional(),
  pendingColor: zColor().default("#F59E0B"), doneColor: zColor().default("#22C55E"),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  fromLabel: "In review",
  toLabel: "Shipped",
  card: "Yearly pricing toggle",
  others: ["Empty states for search", "Faster image uploads", "Team invites by link"],
  theme: "light",
  accent: "#3D63FF",
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  pendingColor: "#F59E0B", doneColor: "#22C55E",
  fontFamily: "Geist",
};
