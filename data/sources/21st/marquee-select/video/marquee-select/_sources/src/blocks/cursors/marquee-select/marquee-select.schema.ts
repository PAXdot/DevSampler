// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** The six files in the grid, in reading order. The box sweeps the first two of the first two rows. */
  fileNames: z.array(z.string().max(14)).min(6).max(6),
  /** Word after the count in the selection bar, e.g. "4 selected". */
  selectionLabel: z.string().max(14),
  /** Actions in the selection bar. The last one is the destructive one and reads quieter. */
  actions: z.array(z.string().max(10)).min(1).max(3),
  /** Text, card ink and the cursor. */
  color: zColor(),
  /** Marquee, rings, check badges and the count. */
  accent: zColor(),
  /** Second tint for the thumbnails. */
  secondary: zColor(),
  /** Card material. */
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  fileNames: ["hero.png", "teaser.mp4", "logo.svg", "brief.pdf", "metrics.csv", "assets.zip"],
  selectionLabel: "selected",
  actions: ["Move", "Share", "Delete"],
  color: "#F4F4F5",
  accent: "#3D63FF",
  secondary: "#808286",
  surfaceColor: "#09090B",
  background: "#09090B",
  fontFamily: "Geist",
};
