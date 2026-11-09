// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  /** Line above the command. */
  eyebrow: z.string().max(32),
  /** Package manager tabs; the first is the one shown. Empty hides the row. */
  tabs: z.array(z.string().max(10)).max(4),
  command: z.string().max(48),
  /** Tooltip after the copy button is clicked. */
  copiedLabel: z.string().max(16),
  /** Next step under the command. */
  hint: z.string().max(48),
  color: zColor(),
  accent: zColor(),
  surfaceColor: zColor(),
  background: zColor(),
  fontFamily: z.string(),
  monoFontFamily: z.string().optional(),
});

export const defaults: z.infer<typeof schema> = {
  eyebrow: "Get started in one line",
  tabs: ["npm", "pnpm", "bun"],
  command: "npm i @acme/cli",
  copiedLabel: "Copied",
  hint: "then run acme init",
  color: "#EDEDEF",
  accent: "#7C9CFF",
  surfaceColor: "#111114",
  background: "#09090B",
  fontFamily: "Geist",
  monoFontFamily: "Geist Mono",
};
