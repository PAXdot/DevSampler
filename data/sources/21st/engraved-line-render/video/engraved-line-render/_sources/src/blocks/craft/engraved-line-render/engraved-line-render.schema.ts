// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Engraved Screenshot";

export const schema = z.object({
  /** Photo or screenshot URL (needs CORS). Empty: a neutral sample page. */
  screenshot: z.string(),
  /** Engraving ink. */
  ink: zColor(),
  /** Second ink: runs across the plate and lights the wave. */
  accent: zColor(),
  /** Frame rules and the guilloche border. */
  color: zColor(),
  background: zColor(),
  /** Engraved lines across the plate height. */
  lines: z.number().int().min(48).max(160),
  /** 0..1, height of the paper wave. */
  wave: z.number().min(0).max(1),
  /** Banknote guilloche border around the plate. */
  guilloche: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  screenshot: "",
  ink: "#1E5B44",
  accent: "#B8862E",
  color: "#1D2A22",
  background: "#EFEADB",
  lines: 110,
  wave: 0.7,
  guilloche: true,
};
