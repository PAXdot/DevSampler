// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Header above the list. */
  title: z.string().max(32),
  /** Tasks; the list repeats so it never runs out. */
  items: z.array(z.string().max(40)).min(3).max(24),
  /** Scroll speed, in % of the short side per frame. */
  speed: z.number().min(0.05).max(1.5),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Before you can launch",
  items: [
    "Set up the custom domain",
    "Write the pricing page",
    "Configure the email provider",
    "Design the onboarding flow",
    "Add analytics events",
    "Fix the mobile navbar",
    "Write the docs",
    "Set up billing webhooks",
    "Draft the launch post",
    "Make the og image",
    "Add dark mode",
    "Test the signup flow again",
    "Reply to beta feedback",
    "Record the demo video",
  ],
  speed: 0.45,
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
