// Built with Remotion - https://remotion.pro/license
import { z } from "zod";

export const languageReferenceSchema = z.object({
  sourceId: z.string(), sourceUrl: z.string().url(), seconds: z.number().nonnegative(),
  frame: z.string(), sha256: z.string().regex(/^[a-f0-9]{64}$/), observation: z.string(),
  basis: z.literal("sampled-frame"),
});
export const languageSchema = z.object({
  id: z.enum(["product-ui", "kinetic-poster", "glass", "editorial", "isometric", "photo-collage", "hand-drawn", "pixel-terminal", "neo-brutal", "aura"]),
  name: z.string(), material: z.string(), light: z.string(), camera: z.string(),
  type: z.object({ display: z.enum(["sans", "serif", "mono", "accent", "handwritten"]), body: z.enum(["sans", "serif", "mono", "accent", "handwritten"]), numerals: z.enum(["tabular", "oldstyle", "mono"]) }),
  motion: z.object({ verbs: z.array(z.string()).min(1), easing: z.enum(["easeInOut", "easeOut", "linear"]), maxScale: z.number().min(1).max(1.3) }),
  never: z.array(z.string()).min(1), brandRoles: z.object({ bg: z.string(), ink: z.string(), accent: z.string() }),
  references: z.array(languageReferenceSchema).min(6).max(10),
});
export type VideoLanguageCard = z.infer<typeof languageSchema>;
export type LanguageReference = z.infer<typeof languageReferenceSchema>;
export function defineLanguage(card: z.input<typeof languageSchema>): VideoLanguageCard { return languageSchema.parse(card); }
