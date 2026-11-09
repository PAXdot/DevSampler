// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Soap Bubble Pop";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background). Empty shows a neutral sample mark. */
  logo: z.string(),
  /** One short line under the bubble. Empty hides it. */
  caption: z.string().max(40),
  /** First interference band of the soap film and the warm droplets. */
  primary: zColor(),
  /** Second interference band of the soap film and the cool droplets. */
  secondary: zColor(),
  /** Caption, window reflection and the hot rim of the tear. */
  color: zColor(),
  /** Backdrop. Light colors switch the film to a pastel, thin-rimmed look. */
  background: zColor(),
  /** 0.3..1.5: how vivid the swirling film colors are. */
  iridescence: z.number().min(0.3).max(1.5),
  /** 0..1.5: how much the membrane wobbles. */
  wobble: z.number().min(0).max(1.5),
  /** 0.3..1.6: droplet count multiplier for the pop. */
  droplets: z.number().min(0.3).max(1.6),
  /** Small companion bubbles that float around the logo. */
  companions: z.boolean(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  caption: "Fresh out of the bubble",
  primary: "#E56399",
  secondary: "#7FD1B9",
  color: "#FCEFF9",
  background: "#1A1423",
  iridescence: 1,
  wobble: 1,
  droplets: 1,
  companions: true,
  fontFamily: "DM Sans",
};
