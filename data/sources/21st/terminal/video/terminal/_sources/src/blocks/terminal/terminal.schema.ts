// Built with Remotion - https://remotion.pro/license
import { zColor } from "../../kit/z";
import { z } from "zod";

export const schema = z.object({
  title: z.string().max(40),
  lines: z
    .array(
      z.object({
        text: z.string().max(80),
        /** cmd lines are typed out; the rest appear once the command above finishes. */
        kind: z.enum(["cmd", "out", "ok", "dim"]),
      }),
    )
    .min(1)
    .max(10),
  /** Typing speed for cmd lines, characters per second. */
  cps: z.number().min(8).max(80),
  accent: zColor(),
  /** Full-frame fill behind the window when rendered on its own. Hidden when used as a layer. */
  background: zColor(),
  windowColor: zColor(),
  textColor: zColor().optional(),
  fontFamily: z.string().default("Geist"),
  monoFontFamily: z.string().default("Geist Mono"),
});

export const defaults: z.infer<typeof schema> = {
  title: "~/my-app",
  lines: [
    { text: "npx shadcn@latest add https://21st.dev/r/video/21st/terminal", kind: "cmd" },
    { text: "Checking registry.", kind: "dim" },
    { text: "Installing dependencies.", kind: "dim" },
    { text: "Created 1 file: src/video/terminal/terminal.tsx", kind: "ok" },
    { text: "npx remotion studio", kind: "cmd" },
  ],
  cps: 34,
  accent: "#3fb950",
  background: "transparent",
  windowColor: "#0d0d0f",
  textColor: "#FFFFFF",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
