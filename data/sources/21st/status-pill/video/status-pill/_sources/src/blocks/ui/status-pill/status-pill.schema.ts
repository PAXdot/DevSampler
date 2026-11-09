// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** First state. */
  label: z.string().max(32),
  /** Second state; empty keeps the first state. */
  doneLabel: z.string().max(32),
  pendingColor: zColor(),
  doneColor: zColor(),
  /** Frame the pill swaps to the second state. */
  swapAt: z.number().int().min(10).max(300),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  label: "Deploying to production",
  doneLabel: "Live on production",
  pendingColor: "#F59E0B",
  doneColor: "#22C55E",
  swapAt: 34,
  surfaceColor: "#141417", textColor: "#F4F4F5",
  theme: "dark",
  fontFamily: "Geist",
};
