// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Prism Spectrum List";

export const schema = z.object({
  /** One list item per band, in order. Two to six. */
  items: z.array(z.string().max(32)).min(2).max(6),
  /** Item text, the incoming beam and the prism glass. */
  color: zColor(),
  /** First band of the spectrum. */
  primary: zColor(),
  /** Last band of the spectrum; the bands between are mixed in OKLCH. */
  secondary: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  monoFontFamily: z.string(),
  /** Small 01, 02, ... before each item. */
  showIndex: z.boolean(),
  /** 0..1, brightness of the light. */
  intensity: z.number().min(0).max(1),
});

export const defaults: z.infer<typeof schema> = {
  items: ["Research", "Design", "Build", "Test", "Launch"],
  color: "#F5F5F7",
  primary: "#4F7BFF",
  secondary: "#FF6A3D",
  background: "#0B0B0F",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
  showIndex: true,
  intensity: 0.85,
};
