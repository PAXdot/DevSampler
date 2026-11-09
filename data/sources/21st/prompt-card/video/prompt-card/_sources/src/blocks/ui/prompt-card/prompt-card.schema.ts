// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Small header above the input. */
  title: z.string().max(40),
  placeholder: z.string().max(48),
  /** What gets typed into the input. */
  prompt: z.string().max(140),
  /** Characters typed per frame. */
  typingSpeed: z.number().min(0.5).max(4),
  /** Camera zooms onto the caret and follows it while typing. */
  caretCam: z.boolean(),
  /** A cursor clicks send once the prompt is typed. */
  cursor: z.boolean(),
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  theme: z.enum(["light", "dark"]),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "What should we build?",
  placeholder: "Describe a page, a flow or a component",
  prompt: "A pricing page with three tiers, a yearly toggle and a calm gradient hero",
  typingSpeed: 1.6,
  caretCam: false,
  cursor: true,
  surfaceColor: "#FFFFFF", textColor: "#0A0A0B",
  theme: "light",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
