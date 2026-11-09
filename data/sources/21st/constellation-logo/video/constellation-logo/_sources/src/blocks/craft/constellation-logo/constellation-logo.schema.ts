// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const NAME = "Constellation Logo";

export const schema = z.object({
  /** Logo image (SVG or PNG on a transparent background works best). Its outline becomes the constellation. */
  logo: z.string(),
  /** Small label above the name. Empty hides it. */
  eyebrow: z.string().max(32),
  /** The name, set under the logo. Empty hides it. */
  title: z.string().max(40),
  /** Constellation lines and the engraved figure of the logo. */
  primary: zColor(),
  /** Milky Way and the glow under the logo. */
  secondary: zColor(),
  /** Ink: stars on paper, starlight on night skies, and the name. */
  color: zColor(),
  /** Paper or night sky. Light colors print on paper, dark colors make a night sky; "transparent" keeps only the stars and the logo. */
  background: zColor(),
  /** Background star count multiplier. */
  density: z.number().min(0.5).max(1.5),
  /** Faint sky parallels behind the stars. */
  grid: z.boolean(),
  grain: z.boolean(),
  /** Name typeface. */
  fontFamily: z.string(),
  /** Label typeface. */
  monoFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  logo: "",
  eyebrow: "",
  title: "A new north star",
  primary: "#7C3AED",
  secondary: "#F472B6",
  color: "#1E1036",
  background: "#F5F0FF",
  density: 1,
  grid: true,
  grain: true,
  fontFamily: "Instrument Serif",
  monoFamily: "Geist Mono",
};
