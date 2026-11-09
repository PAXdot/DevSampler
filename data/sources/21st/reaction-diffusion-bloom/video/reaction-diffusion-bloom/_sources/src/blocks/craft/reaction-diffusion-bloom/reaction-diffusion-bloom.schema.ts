// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Reaction Diffusion Bloom";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). The pattern grows from its silhouette. Empty shows a brand-colored seed drop. */
  logo: z.string(),
  /** Mature pattern color. */
  primary: zColor(),
  /** Fresh growth at the advancing front. */
  secondary: zColor(),
  /** Highlights on the pattern crests. */
  color: zColor(),
  /** Backdrop. Dark colors glow like bioluminescence; light colors print like an ink specimen. */
  background: zColor(),
  /** Pattern regime: "fingerprint" grows parallel ridges, "labyrinth" breaks into maze and spots. */
  pattern: z.enum(["fingerprint", "labyrinth"]),
  /** Contour rings that stay around the logo once the pattern recedes (fewer if the frame is tight). */
  rings: z.number().int().min(1).max(4),
  grain: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  primary: "#FF8A3D",
  secondary: "#FFD27A",
  color: "#F3EEE6",
  background: "#0E0F12",
  pattern: "fingerprint",
  rings: 3,
  grain: true,
};
