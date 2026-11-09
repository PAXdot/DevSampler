// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Window content: your screenshot. Empty shows a stand-in document. */
  image: z.string(),
  /** Window title. */
  title: z.string().max(32),
  /** Stand-in document heading (when no image). */
  heading: z.string().max(48),
  /** Stand-in document text (when no image). */
  body: z.string().max(220),
  /** Frame the cursor clicks the close dot. */
  collapseAt: z.number().int().min(20).max(300),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  image: "",
  title: "Q3 planning notes.md",
  heading: "Things we said we would do",
  body: "Rewrite onboarding. Ship the mobile app. Clean up the settings page. Migrate billing. Answer every support ticket within an hour. Start a newsletter. Redesign the docs.",
  collapseAt: 36,
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
