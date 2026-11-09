// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Differential Growth";

export const schema = z.object({
  /** Headline that appears in the clean window the line grows around. */
  headline: z.string().max(60),
  /** Headline color. On a light background it is also the pen color of the line. */
  color: zColor(),
  /** Main color of the line, its glow and the inner wash. */
  primary: zColor(),
  /** Second color the line drifts into along its length. */
  secondary: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Changes how the line folds. Same seed, same coral. */
  seed: z.number().int().min(1).max(99),
});

export const defaults: z.infer<typeof schema> = {
  headline: "Every idea starts small",
  color: "#F6EFE6",
  primary: "#FF6F59",
  secondary: "#FFC2A8",
  background: "#0D1A14",
  fontFamily: "Instrument Serif",
  seed: 7,
};
