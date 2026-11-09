// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Hero card headline. */
  headline: z.string().max(36),
  /** Line under the headline. Empty hides it. */
  subline: z.string().max(56),
  /** The button the teammates comment on. */
  ctaLabel: z.string().max(18),
  /** First teammate, shown on their cursor tag and as the pin's initial. */
  firstName: z.string().max(12),
  /** What the first teammate types in their cursor bubble. */
  firstMessage: z.string().max(32),
  /** Second teammate, shown on their cursor tag. */
  secondName: z.string().max(12),
  /** The second teammate's reply, left typed out on screen. */
  secondReply: z.string().max(24),
  /** Card text and the button fill. */
  color: zColor(),
  /** First teammate's cursor, bubble, pin and the button outline. Also tints the orb. */
  accent: zColor(),
  /** Second teammate's cursor and reply bubble. */
  secondary: zColor(),
  /** Card material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  headline: "Launch videos in one afternoon",
  subline: "Pick blocks, add your brand, export.",
  ctaLabel: "Start free",
  firstName: "Maya",
  firstMessage: "Can we make this bigger?",
  secondName: "Leo",
  secondReply: "Good call, on it",
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#10B981",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
