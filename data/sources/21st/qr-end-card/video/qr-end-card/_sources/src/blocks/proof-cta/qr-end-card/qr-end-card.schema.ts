// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Address the code opens. It scans: the code is generated from this text. */
  url: z.string().min(1).max(100),
  /** Short link printed beside the code. */
  label: z.string().max(32),
  eyebrow: z.string().max(32),
  handle: z.string().max(24),
  /** Logo next to the handle (SVG or PNG on a transparent background). Empty draws the handle's initial. */
  logo: z.string(),
  color: zColor(),
  accent: zColor(),
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  url: "https://acme.dev/try",
  label: "acme.dev/try",
  eyebrow: "Scan to try it",
  handle: "@acme",
  logo: "",
  color: "#F4F4F5",
  accent: "#3D63FF",
  surfaceColor: "#111114",
  background: "#09090B",
  fontFamily: "Geist",
};
