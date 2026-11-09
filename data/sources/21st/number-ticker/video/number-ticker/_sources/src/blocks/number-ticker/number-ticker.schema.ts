// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../kit/z";

export const schema = z.object({
  value: z.number().min(-1e12).max(1e12),
  from: z.number().min(-1e12).max(1e12),
  decimals: z.number().int().min(0).max(3),
  prefix: z.string().max(4),
  suffix: z.string().max(6),
  label: z.string().max(48),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  value: 12480,
  from: 0,
  decimals: 0,
  prefix: "",
  suffix: "+",
  label: "Teams on the waitlist",
  color: "#F4F4F5",
  accent: "#7C9CFF",
  fontFamily: "Geist",
};
