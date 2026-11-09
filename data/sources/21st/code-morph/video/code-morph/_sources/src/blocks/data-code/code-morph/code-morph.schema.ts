// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
import { LANGUAGES } from "../_shared/languages";

export const schema = z.object({
  surfaceColor: zColor().optional().describe("__remotion-color"),
  textColor: zColor().optional().describe("__remotion-color"),
  secondaryColor: zColor().optional().describe("__remotion-color"),
  monoFontFamily: z.string().optional(),
  bodyFontFamily: z.string().optional(),
  title: z.string().max(40),
  before: z.string().max(600),
  after: z.string().max(600),
  language: z.enum(LANGUAGES),
  theme: z.enum(["dark", "light"]),
  /** Frame the morph starts. */
  morphAt: z.number().int().min(12).max(300),
  /** Frames the morph takes. */
  morphFrames: z.number().int().min(10).max(60),
  accent: zColor(),
});

export const defaults: z.infer<typeof schema> = {
  surfaceColor: "#0E0E11",
  textColor: "#E6E6E9",
  secondaryColor: "#6FD6E6",
  monoFontFamily: "Geist Mono",
  bodyFontFamily: "Geist",
  title: "button.tsx",
  before: `export function Button() {
  return <button>Save</button>;
}`,
  after: `export function Button({ loading }: Props) {
  return (
    <button disabled={loading}>
      {loading ? <Spinner /> : "Save"}
    </button>
  );
}`,
  language: "tsx",
  theme: "dark",
  morphAt: 36,
  morphFrames: 22,
  accent: "#3D63FF",
};
