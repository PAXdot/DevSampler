// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Pixelated Screenshot Reveal";

export const schema = z.object({
  /** The screenshot that resolves in full color. Empty shows a neutral sample page. */
  screenshot: z.string(),
  /** Optional "before" screenshot that dissolves away. Empty shows the same screenshot as a 1-bit dithered screen. */
  fromScreenshot: z.string(),
  /** Headline beside the screenshot. Empty hides it. */
  headline: z.string().max(48),
  /** Headline ink and the 1-bit screen's ink or paper. */
  color: zColor(),
  /** Dither halo, the dissolve's leading pixels and the progress bar. */
  primary: zColor(),
  /** Sparse outer halo pixels. */
  secondary: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  /** Pixel size multiplier: 0.6 is fine grain, 1.6 is very chunky. */
  pixelSize: z.number().min(0.6).max(1.6),
  /** 0..1, how far and dense the dithered halo around the screenshot is. */
  glow: z.number().min(0).max(1),
});

export const defaults: z.infer<typeof schema> = {
  screenshot: "",
  fromScreenshot: "",
  headline: "Ship faster",
  color: "#FAFAFA",
  primary: "#F5D547",
  secondary: "#FAFAFA",
  background: "#101010",
  fontFamily: "Geist",
  pixelSize: 1,
  glow: 0.7,
};
