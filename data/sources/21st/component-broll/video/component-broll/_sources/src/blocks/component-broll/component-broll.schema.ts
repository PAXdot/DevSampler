// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  /** A 21st component demo video (the card hover loop). Empty shows a sample component. */
  video: z.string(),
  caption: z.string().max(48),
  author: z.string().max(32),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  /** Fill behind the demo inside the card (most demos are light). */
  cardColor: zColor(),
  fontFamily: z.string(),
  demoColor: zColor().default("#0A0A0A"),
  secondaryColor: zColor().default("#898B8F"),
  bodyFontFamily: z.string().default("Geist"),
  serifFontFamily: z.string().default("Instrument Serif"),
  monoFontFamily: z.string().default("Geist Mono"),
  demoHeadline: z.string().max(64).default("Build something beautiful"),
  demoDetail: z.string().max(120).default("Components, templates and themes from the community."),
  primaryAction: z.string().max(24).default("Get started"),
  secondaryAction: z.string().max(24).default("Learn more"),
  /** Slow push-in over the clip. */
  push: z.boolean(),
});

export const defaults: z.infer<typeof schema> = schema.parse({
  video: "",
  caption: "Aurora hero",
  author: "@21st",
  accent: "#3D63FF",
  color: "#F4F4F5",
  background: "#09090B",
  cardColor: "#FFFFFF",
  fontFamily: "Geist",
  push: true,
});
