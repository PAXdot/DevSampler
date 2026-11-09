// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Link the hand hovers; its underline draws in. */
  linkLabel: z.string().max(24),
  /** Paragraph the I-beam clicks into. */
  paragraph: z.string().max(64),
  /** Button the hand hovers; it lifts and fills. */
  buttonLabel: z.string().max(16),
  /** Chip names, in order: the arrow, the hand, the I-beam, the crosshair. */
  cursorNames: z.array(z.string().max(12)).max(4),
  /** Text and the arrow cursor. */
  color: zColor(),
  /** Link tint, button fill, caret, guides and the drawn frame. */
  accent: zColor(),
  /** Tile material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Cursor name chip. */
  monoFontFamily: z.string().optional(),
});

export const defaults: z.infer<typeof schema> = {
  linkLabel: "Read the docs",
  paragraph: "Blocks render frame by frame, so the preview is the video.",
  buttonLabel: "Deploy",
  cursorNames: ["default", "pointer", "text", "crosshair"],
  color: "#F4F4F5",
  accent: "#3D63FF",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
