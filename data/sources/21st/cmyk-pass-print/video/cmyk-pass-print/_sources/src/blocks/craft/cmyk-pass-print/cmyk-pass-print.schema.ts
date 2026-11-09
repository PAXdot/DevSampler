// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "CMYK Pass";

export const schema = z.object({
  /** Image or screenshot URL (needs CORS for the separation). Empty: a neutral sample page. */
  screenshot: z.string(),
  /** Press light: the head's indicator and the registration click. */
  primary: zColor(),
  /** Print head body and the light pool behind the sheet. */
  secondary: zColor(),
  /** Key (black) ink on light brands, the paper on dark brands. */
  color: zColor(),
  background: zColor(),
  /** 0..1, how far the plates land out of register before they snap in. */
  misregister: z.number().min(0).max(1),
  /** Halftone screen: dot rows across the short side of the image. */
  screen: z.number().int().min(40).max(140),
  /** Crop marks, registration targets and the color control strip. */
  marks: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  screenshot: "",
  primary: "#D7263D",
  secondary: "#1B4965",
  color: "#1C1C1C",
  background: "#F2EEE3",
  misregister: 0.7,
  screen: 84,
  marks: true,
};
