// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  serifFontFamily: z.string().optional(),
  /** Logo image (SVG or PNG on a transparent background). Empty sets the name as a wordmark. */
  logo: z.string(),
  name: z.string().max(24),
  tagline: z.string().max(64),
  url: z.string().max(40),
  accent: zColor(),
  color: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  serifFontFamily: "Instrument Serif",
  logo: "",
  name: "Acme",
  tagline: "Deploy at the edge",
  url: "acme.dev",
  accent: "#3D63FF",
  color: "#F4F4F5",
  background: "#09090B",
  fontFamily: "Geist",
};
