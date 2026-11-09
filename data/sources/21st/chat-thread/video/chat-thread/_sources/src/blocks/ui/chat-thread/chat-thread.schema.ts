// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Panel header. */
  title: z.string().max(36),
  /** Conversation in order. The tool card lands after the first assistant reply. */
  messages: z
    .array(z.object({ role: z.enum(["user", "assistant"]), text: z.string().max(160) }))
    .min(1)
    .max(6),
  /** Tool call card label. Empty hides the card. */
  toolLabel: z.string().max(40),
  runningLabel: z.string().max(16),
  doneLabel: z.string().max(16),
  /** Composer placeholder. */
  placeholder: z.string().max(36),
  /** Frames between messages. */
  interval: z.number().int().min(10).max(60),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  surfaceColor: zColor().optional(), textColor: zColor().optional(),
  successColor: zColor().optional(), errorColor: zColor().optional(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Pricing page",
  messages: [
    { role: "user", text: "Make the yearly toggle default and show the savings next to each plan." },
    { role: "assistant", text: "On it. I'll flip the default and add a savings badge to all three tiers." },
    { role: "assistant", text: "Done. Yearly is now the default and each plan shows how much you save." },
    { role: "user", text: "Perfect, ship it." },
  ],
  toolLabel: "Edited pricing-table.tsx",
  runningLabel: "Running",
  doneLabel: "Done",
  placeholder: "Ask a follow-up",
  interval: 20,
  theme: "light",
  accent: "#3D63FF",
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  successColor: "#16A34A", errorColor: "#EF4444",
  background: "#EEF0F5",
  fontFamily: "Geist",
};
