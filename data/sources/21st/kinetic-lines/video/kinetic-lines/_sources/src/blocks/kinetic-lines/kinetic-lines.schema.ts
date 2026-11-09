// Built with Remotion - https://remotion.pro/license
import { zColor } from "../../kit/z";
import { z } from "zod";

export const schema = z.object({
  serifFontFamily: z.string().optional(),
  fontFamily: z.string().optional(),
  /** One string per line. Wrap words in *asterisks* to set them in the italic serif. */
  lines: z.array(z.string().max(48)).min(1).max(4),
  color: zColor(),
  accent: zColor(),
  background: zColor(),
  /** Frames between lines. */
  stagger: z.number().int().min(4).max(40),
  align: z.enum(["center", "left"]),
});

export const defaults: z.infer<typeof schema> = {
  serifFontFamily: "Instrument Serif",
  fontFamily: "Geist",
  lines: ["Ship the *component*,", "not the *screenshot.*"],
  color: "#f4f4f5",
  accent: "#ffffff",
  background: "#09090b",
  stagger: 14,
  align: "center",
};
