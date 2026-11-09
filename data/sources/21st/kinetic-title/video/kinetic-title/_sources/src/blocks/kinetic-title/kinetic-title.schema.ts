// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  serifFontFamily: z.string().optional(),
  /** Wrap words in *asterisks* to set them in the italic serif, in the accent color. */
  title: z.string().max(60),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  energy: z.enum(["calm", "default", "punchy"]),
  align: z.enum(["center", "left"]),
});

export const defaults: z.infer<typeof schema> = {
  serifFontFamily: "Instrument Serif",
  title: "Deploy at the *edge*",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
  energy: "default",
  align: "center",
};
