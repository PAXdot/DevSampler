// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  headline: z.string().max(48),
  /** Layers bottom to top; each gets a mono label. Contents cycle: media, captions, overlay, end card, code. */
  layers: z.array(z.object({ text: z.string().max(20) })).min(2).max(5),
  /** Bottom layer media (image or video). Empty shows a drawn photo. */
  media: z.string(),
  /** Gap between layers, % of the short side. */
  spread: z.number().min(2).max(24),
  secondary: zColor().optional(),
  /** Optional surface/text for the drawn app layers, independent of backdrop. */
  surfaceColor: zColor().optional(),
  panelColor: zColor().optional(),
  monoFontFamily: z.string().optional(),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  headline: "Every video is a stack of layers",
  layers: [{ text: "footage" }, { text: "captions" }, { text: "overlay" }, { text: "end card" }],
  media: "",
  spread: 15,
  secondary: "#AAACB0",
  surfaceColor: "#060607",
  panelColor: "#F4F4F5",
  monoFontFamily: "Geist Mono",
  accent: "#3D63FF",
  color: "#F4F4F5",
  background: "#060607",
  fontFamily: "Geist",
};
