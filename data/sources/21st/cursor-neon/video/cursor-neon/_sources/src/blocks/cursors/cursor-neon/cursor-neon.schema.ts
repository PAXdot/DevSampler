// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Line above the prompt bar. Empty hides it. */
  headline: z.string().max(28),
  /** The prompt, typed into the bar. */
  prompt: z.string().max(56),
  /** Short option chips in the bar's toolbar (format, length, quality). */
  options: z.array(z.string().max(5)).max(3),
  /** Button text. */
  label: z.string().max(14),
  /** Button text after the click. */
  doneLabel: z.string().max(14),
  /** Headline ink, and the bar's ink on a dark brand. */
  color: zColor(),
  /** The neon: bar edges, cursor tube, button. */
  accent: zColor(),
  /** The neon's outer haze. */
  secondary: zColor(),
  /** Bar material on a dark brand (on a light brand the bar is cut from the text color). */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  monoFontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  headline: "What should we make?",
  prompt: "A neon city at night, slow dolly through the rain",
  options: ["16:9", "8s", "4K"],
  label: "Generate",
  doneLabel: "Generating",
  color: "#F4F4F5",
  accent: "#22D3EE",
  secondary: "#86888C",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
