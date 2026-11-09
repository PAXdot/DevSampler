// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  label: z.string().max(26),
  doneLabel: z.string().max(26),
  variant: z.enum(["solid", "glow", "outline"]),
  /** Where the cursor comes from. */
  from: z.enum(["bottom-right", "bottom-left", "left", "right"]),
  accent: zColor(),
  theme: z.enum(["light", "dark"]),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  label: "Get early access",
  doneLabel: "You're on the list",
  variant: "glow",
  from: "bottom-right",
  accent: "#3D63FF",
  theme: "dark",
  fontFamily: "Geist",
};
