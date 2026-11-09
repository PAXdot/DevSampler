// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

const plan = z.object({
  /** Plan name. */
  name: z.string().max(14),
  /** Price as shown, e.g. "$24". */
  price: z.string().max(7),
  /** Up to two short perks (portrait shows them on the featured plan only). */
  features: z.array(z.string().max(20)).max(2),
});

export const schema = z.object({
  /** Three plans, left to right (top to bottom in portrait). The middle one is featured and gets chosen. */
  plans: z.array(plan).min(3).max(3),
  /** After each price, e.g. "/mo". Empty hides it. */
  period: z.string().max(5),
  /** Pill on the featured plan. Empty hides it. */
  badge: z.string().max(14),
  /** Button text on the plans. */
  cta: z.string().max(14),
  /** The featured button's text after the click. */
  doneLabel: z.string().max(14),
  /** Scene text, card ink. */
  color: zColor(),
  /** Gradient start: cursor, featured ring, button and badge. */
  accent: zColor(),
  /** Gradient end and the cursor's click bloom. */
  secondary: zColor(),
  /** Card material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  plans: [
    { name: "Starter", price: "$0", features: ["1 project", "Community help"] },
    { name: "Pro", price: "$24", features: ["Unlimited projects", "Priority support"] },
    { name: "Team", price: "$79", features: ["Everything in Pro", "SSO and audit log"] },
  ],
  period: "/mo",
  badge: "Most popular",
  cta: "Choose plan",
  doneLabel: "Selected",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#808286",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
