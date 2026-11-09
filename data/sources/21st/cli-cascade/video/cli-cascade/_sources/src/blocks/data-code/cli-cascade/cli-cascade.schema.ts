// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  surfaceColor: zColor().optional().describe("__remotion-color"),
  textColor: zColor().optional().describe("__remotion-color"),
  secondaryColor: zColor().optional().describe("__remotion-color"),
  monoFontFamily: z.string().optional(),
  bodyFontFamily: z.string().optional(),
  title: z.string().max(40),
  command: z.string().max(80),
  /** Word drawn as a block-letter banner once the command runs (letters, digits, - . !). */
  banner: z.string().max(10),
  /** Output lines, drawn as a tree. Lines that start with ✓ take the accent. */
  lines: z.array(z.string().max(60)).min(1).max(8),
  /** Typing speed for the command, characters per second. */
  cps: z.number().min(8).max(80),
  theme: z.enum(["dark", "light"]),
  accent: zColor(),
});

export const defaults: z.infer<typeof schema> = {
  surfaceColor: "#0E0E11",
  textColor: "#E6E6E9",
  secondaryColor: "#6FD6E6",
  monoFontFamily: "Geist Mono",
  bodyFontFamily: "Geist",
  title: "~/acme",
  command: "npx create-acme@latest my-app",
  banner: "acme",
  lines: ["Scaffolding project in ./my-app", "Installing 14 packages", "Wiring the video kit", "✓ Ready in 3.2s"],
  cps: 26,
  theme: "dark",
  accent: "#3D63FF",
};
