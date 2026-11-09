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
  code: z.string().max(700),
  language: z.enum(LANGUAGES),
  /** 1-based line numbers the spotlight visits, in order. */
  lines: z.array(z.number().int().min(1).max(60)).min(1).max(10),
  /** Frames the spotlight rests on each line. */
  holdFrames: z.number().int().min(6).max(120),
  theme: z.enum(["dark", "light"]),
  lineNumbers: z.boolean(),
  accent: zColor(),
});

export const defaults: z.infer<typeof schema> = {
  surfaceColor: "#0E0E11",
  textColor: "#E6E6E9",
  secondaryColor: "#6FD6E6",
  monoFontFamily: "Geist Mono",
  bodyFontFamily: "Geist",
  title: "app/api/render/route.ts",
  code: `import { renderVideo } from "@acme/video";

export async function POST(req: Request) {
  const { doc } = await req.json();
  const job = await renderVideo(doc, {
    size: "1080p",
    codec: "h264",
  });
  return Response.json({ id: job.id });
}`,
  language: "ts",
  lines: [3, 5, 9],
  holdFrames: 26,
  theme: "dark",
  lineNumbers: true,
  accent: "#3D63FF",
};
