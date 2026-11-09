// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Brush Stroke Screenshot Reveal";

export const schema = z.object({
  /** Screenshot URL. Empty prints a neutral sample page. */
  image: z.string(),
  /** Crop marks and the ink of the brushed rim on light paper. */
  color: zColor(),
  /** Emulsion tone: the wet coat and the toned first pass of the print. */
  accent: zColor(),
  /** The paper the emulsion is brushed onto. Light paper prints dark, dark paper glows up. */
  paperColor: zColor(),
  background: zColor(),
  /** 0..1, how much brand tone stays in the settled print. */
  tone: z.number().min(0).max(1),
  /** Corner crop marks around the print. */
  marks: z.boolean(),
});

export const defaults: z.infer<typeof schema> = {
  image: "",
  color: "#1B1A17",
  accent: "#2440B8",
  paperColor: "#F1EBDD",
  background: "transparent",
  tone: 0.12,
  marks: true,
};
