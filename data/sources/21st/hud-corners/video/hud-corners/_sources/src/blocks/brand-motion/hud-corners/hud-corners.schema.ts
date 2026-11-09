// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  monoFontFamily: z.string().optional(),
  /** Top left label (a live dot pulses next to it). Empty hides it. */
  topLeft: z.string().max(28),
  topRight: z.string().max(28),
  bottomLeft: z.string().max(28),
  /** Bottom right label. With `tick` on, a running timecode follows it. */
  bottomRight: z.string().max(28),
  /** Running timecode after the bottom right label. */
  tick: z.boolean(),
  /** Hairline that draws across under the top labels. */
  hairline: z.boolean(),
  /** Corner brackets framing the shot. */
  brackets: z.boolean(),
  /** Small focus reticle at the center of the frame. */
  reticle: z.boolean(),
  color: zColor(),
  /** Live dot and hairline color. */
  accent: zColor(),
});

export const defaults: z.infer<typeof schema> = {
  monoFontFamily: "Geist Mono",
  topLeft: "now live",
  topRight: "2026.10.05",
  bottomLeft: "build 0142",
  bottomRight: "rec",
  tick: true,
  hairline: true,
  brackets: true,
  reticle: true,
  color: "#E4E4E7",
  accent: "#F5A524",
};
