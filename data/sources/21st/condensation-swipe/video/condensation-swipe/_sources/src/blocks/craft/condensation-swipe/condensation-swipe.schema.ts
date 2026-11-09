// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Condensation Swipe";

export const schema = z.object({
  /** Screenshot URL behind the glass. Empty: a neutral sample page is shown so the reveal still reads. */
  screenshot: z.string(),
  /** Line above the glass, sharpening as the fog lifts. Short phrases read best. */
  title: z.string().min(1).max(48),
  /** Title ink, droplet rims and shadows on light brands. */
  color: zColor(),
  /** Light behind the glass (upper left): it glows through the fog and inside every droplet. */
  primary: zColor(),
  /** Second light behind the glass (lower right), caught in the droplets and the swiped streak. */
  secondary: zColor(),
  /** Backdrop; also tints the fog (white mist on light brands, smoky glass on dark ones). "transparent" keeps only the pane. */
  background: zColor(),
  /** Brand body font for the title. */
  fontFamily: z.string(),
  /** 0..1, how dense the fog gets before the swipe. */
  fog: z.number().min(0.4).max(1),
  /** 0..1, how many droplets bead on the glass. */
  droplets: z.number().min(0).max(1),
  /** Changes the droplet pattern, the fog and the drips. */
  seed: z.number().int().min(0).max(999),
});

export const defaults: z.infer<typeof schema> = {
  screenshot: "",
  title: "A clearer view",
  color: "#22172E",
  primary: "#6B3FA0",
  secondary: "#FF7F50",
  background: "#E9E4F2",
  fontFamily: "Manrope",
  fog: 0.94,
  droplets: 0.7,
  seed: 7,
};
