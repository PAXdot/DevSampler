// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { ICON_NAMES } from "../_shared/icons";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  from: z.string().max(24),
  fromIcon: z.enum(ICON_NAMES),
  to: z.string().max(24),
  toIcon: z.enum(ICON_NAMES),
  /** Label on the arrow. Empty hides it. */
  arrowLabel: z.string().max(24),
  /** Checklist under the flow. */
  benefits: z.array(z.string().max(36)).max(4),
  accent: zColor(),
  color: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  from: "Your repo",
  fromIcon: "code",
  to: "Edge network",
  toIcon: "globe",
  arrowLabel: "git push",
  benefits: ["Live in seconds", "Zero config", "Instant rollbacks"],
  accent: "#3D63FF",
  color: "#F4F4F5",
  fontFamily: "Geist",
};
