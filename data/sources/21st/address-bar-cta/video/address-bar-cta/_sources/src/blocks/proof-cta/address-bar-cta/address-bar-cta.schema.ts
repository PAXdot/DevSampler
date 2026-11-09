// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Address typed into the bar. */
  url: z.string().max(40),
  /** Product name on the page that opens. */
  name: z.string().max(24),
  tagline: z.string().max(60),
  /** Button on the page. */
  cta: z.string().max(20),
  /** Logo (SVG or PNG on a transparent background). Empty draws the name's initial. */
  logo: z.string(),
  color: zColor(),
  accent: zColor(),
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  bodyFontFamily: z.string().optional(),
});

export const defaults: z.infer<typeof schema> = {
  url: "acme.dev/start",
  name: "Acme",
  tagline: "Launch videos that look like your product",
  cta: "Start free",
  logo: "",
  color: "#0A0A0B",
  accent: "#3D63FF",
  surfaceColor: "#FFFFFF",
  background: "#EEF0F5",
  fontFamily: "Geist",
  bodyFontFamily: "Inter",
};
