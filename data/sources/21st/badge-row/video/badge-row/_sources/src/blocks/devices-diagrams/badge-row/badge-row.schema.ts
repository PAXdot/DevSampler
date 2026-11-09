// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  /** Lead-in text before the badges. Empty hides it. */
  label: z.string().max(24),
  badges: z.array(z.object({ text: z.string().max(16), color: zColor() })).min(1).max(8),
  /** Badge fill: tinted, solid or outlined. */
  look: z.enum(["soft", "solid", "outline"]),
  /** Set badges in the monospace font (methods, tags, versions). */
  mono: z.boolean(),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  label: "Every method, typed",
  badges: [
    { text: "get", color: "#22C55E" },
    { text: "post", color: "#3D8BFF" },
    { text: "put", color: "#F59E0B" },
    { text: "patch", color: "#14B8A6" },
    { text: "delete", color: "#EF4444" },
  ],
  look: "soft",
  mono: true,
  color: "#F4F4F5",
  fontFamily: "Geist",
};
