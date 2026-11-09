// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  name: z.string().max(32),
  role: z.string().max(48),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
  /** Frosted plate behind the text, for legibility over footage. */
  plate: z.boolean(),
  align: z.enum(["left", "center"]),
});

export const defaults: z.infer<typeof schema> = {
  name: "Maya Chen",
  role: "Head of Design, Acme",
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
  plate: true,
  align: "left",
};
