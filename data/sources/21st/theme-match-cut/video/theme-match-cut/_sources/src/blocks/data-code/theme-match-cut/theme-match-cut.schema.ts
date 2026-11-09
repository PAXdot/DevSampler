// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { LANGUAGES } from "../_shared/languages";

export const SKINS = ["night", "graphite", "lagoon", "paper", "peach", "brand"] as const;

export const schema = z.object({
  surfaceColor: zColor().optional().describe("__remotion-color"),
  textColor: zColor().optional().describe("__remotion-color"),
  secondaryColor: zColor().optional().describe("__remotion-color"),
  monoFontFamily: z.string().optional(),
  bodyFontFamily: z.string().optional(),
  title: z.string().max(40),
  code: z.string().max(700),
  language: z.enum(LANGUAGES),
  /** Wallpaper + editor skins, one per beat, in order (loops). */
  skins: z.array(z.enum(SKINS)).min(1).max(8),
  /** Frames per beat: the skin hard-cuts on every beat (1800 / BPM at 30 fps). */
  beatFrames: z.number().int().min(8).max(90),
  /** Typing speed, characters per second. Typing runs straight through the cuts. */
  cps: z.number().min(10).max(240),
  accent: zColor(),
  /** Override the wallpaper base; transparent removes it while retaining the editor. */
  background: zColor().optional().describe("__remotion-color"),
});

export const defaults: z.infer<typeof schema> = {
  surfaceColor: "#0E0E11",
  textColor: "#E6E6E9",
  secondaryColor: "#6FD6E6",
  monoFontFamily: "Geist Mono",
  bodyFontFamily: "Geist",
  title: "app/page.tsx",
  code: `import { Video } from "@acme/video";

export default function Page() {
  return (
    <Video
      template="launch"
      accent="#3D63FF"
      duration={12}
    />
  );
}`,
  language: "tsx",
  skins: ["night", "paper", "lagoon", "graphite", "peach", "brand"],
  beatFrames: 22,
  cps: 50,
  accent: "#3D63FF",
  background: "transparent",
};
