// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { LANGUAGES } from "../_shared/languages";

export const schema = z.object({
  surfaceColor: zColor().optional(),
  textColor: zColor().optional(),
  secondaryColor: zColor().optional(),
  monoFontFamily: z.string().optional(),
  bodyFontFamily: z.string().optional(),
  title: z.string().max(40),
  from: z.string().max(240),
  to: z.string().max(240),
  language: z.enum(LANGUAGES),
  theme: z.enum(["dark", "light"]),
  /** Draw the editor window around the code. Off: bare glyphs in the theme's ink. */
  card: z.boolean(),
  /** Where the glyphs gather between the two states. */
  cluster: z.enum(["top-left", "top-right", "center", "bottom-left"]),
  /** Frame the scatter starts. */
  scatterAt: z.number().int().min(10).max(300),
  seed: z.number().int().min(0).max(9999),
  accent: zColor(),
});

export const defaults: z.infer<typeof schema> = {
  surfaceColor: "#0E0E11",
  textColor: "#E6E6E9",
  secondaryColor: "#6FD6E6",
  monoFontFamily: "Geist Mono",
  bodyFontFamily: "Geist",
  title: "theme.ts",
  from: `const theme = {
  radius: 8,
  accent: "blue",
};`,
  to: `export const theme = createTheme({
  radius: "lg",
  accent: brand.primary,
  motion: "calm",
});`,
  language: "ts",
  theme: "dark",
  card: false,
  cluster: "top-left",
  scatterAt: 30,
  seed: 7,
  accent: "#3D63FF",
};
