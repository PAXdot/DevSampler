// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Notifications; repeated to reach `count`. */
  items: z
    .array(z.object({ text: z.string().max(28), sub: z.string().max(36), amount: z.string().max(10) }))
    .min(1)
    .max(12),
  /** How many toasts float in. */
  count: z.number().int().min(4).max(14),
  /** Changes the scatter. */
  seed: z.number().int().min(0).max(999),
  /** Upward drift speed. */
  drift: z.number().min(0).max(2),
  successColor: zColor().default("#16A34A"),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  items: [
    { text: "Maya joined", sub: "Team plan, yearly", amount: "+$240" },
    { text: "New order #4821", sub: "Ships tomorrow", amount: "+$86" },
    { text: "Leo upgraded", sub: "Starter to Pro", amount: "+$19" },
    { text: "Invoice paid", sub: "Halcyon Studio", amount: "+$1,200" },
    { text: "Ava booked a call", sub: "Thursday, 10:30", amount: "" },
    { text: "Review left", sub: "Five stars, again", amount: "" },
    { text: "Noah subscribed", sub: "Monthly plan", amount: "+$12" },
    { text: "Payout sent", sub: "To your account", amount: "+$3,480" },
  ],
  count: 10,
  seed: 7,
  drift: 1,
  successColor: "#16A34A",
  surfaceColor: "#141417", textColor: "#F4F4F5",
  theme: "dark",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
