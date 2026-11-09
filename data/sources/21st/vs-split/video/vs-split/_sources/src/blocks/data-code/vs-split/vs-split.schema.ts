// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  title: z.string().max(40),
  leftLabel: z.string().max(24),
  leftValue: z.number().min(-1e12).max(1e12),
  rightLabel: z.string().max(24),
  rightValue: z.number().min(-1e12).max(1e12),
  prefix: z.string().max(3),
  suffix: z.string().max(4),
  decimals: z.number().int().min(0).max(2),
  /** Which side gets the accent. */
  winner: z.enum(["left", "right", "none"]),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  title: "Time to first render",
  leftLabel: "Hand-built",
  leftValue: 100,
  rightLabel: "With 21st",
  rightValue: 26,
  prefix: "",
  suffix: "min",
  decimals: 0,
  winner: "right",
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
