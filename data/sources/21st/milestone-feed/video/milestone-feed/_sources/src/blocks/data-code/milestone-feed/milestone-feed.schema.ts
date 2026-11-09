// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** The thing being starred, followed or joined. */
  project: z.string().max(32),
  /** What each row did. */
  verb: z.string().max(16),
  /** Counter noun in the header. */
  unit: z.string().max(12),
  target: z.number().int().min(10).max(1000000),
  /** Seed for the generated names and avatars. */
  seed: z.number().int().min(0).max(9999),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  monoFontFamily: z.string().default("Geist Mono"),
});

export const defaults: z.infer<typeof schema> = {
  project: "acme/ui",
  verb: "starred",
  unit: "stars",
  target: 1000,
  seed: 21,
  color: "#F4F4F5",
  accent: "#3D63FF",
  background: "#09090B",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
