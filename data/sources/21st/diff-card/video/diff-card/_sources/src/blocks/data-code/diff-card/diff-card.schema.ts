// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { LANGUAGES } from "../_shared/languages";

export const schema = z.object({
  surfaceColor: zColor().optional().describe("__remotion-color"),
  textColor: zColor().optional().describe("__remotion-color"),
  secondaryColor: zColor().optional().describe("__remotion-color"),
  /** File the edit touches. */
  title: z.string().max(40),
  /** Tool or action name shown before the file. */
  action: z.string().max(16),
  removed: z.string().max(400),
  added: z.string().max(500),
  language: z.enum(LANGUAGES),
  runningLabel: z.string().max(16),
  doneLabel: z.string().max(16),
  theme: z.enum(["dark", "light"]),
  accent: zColor(),
  fontFamily: z.string().default("Geist"),
  monoFontFamily: z.string().default("Geist Mono"),
});

export const defaults: z.infer<typeof schema> = {
  surfaceColor: "#0E0E11",
  textColor: "#E6E6E9",
  secondaryColor: "#6FD6E6",
  title: "components/hero.tsx",
  action: "Edit",
  removed: `<h1 className="text-4xl">
  Welcome to our website
</h1>`,
  added: `<h1 className="text-6xl tracking-tight">
  Ship the component,
  <em className="font-serif"> not the screenshot.</em>
</h1>`,
  language: "tsx",
  runningLabel: "Running",
  doneLabel: "Completed",
  theme: "dark",
  accent: "#3D63FF",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
