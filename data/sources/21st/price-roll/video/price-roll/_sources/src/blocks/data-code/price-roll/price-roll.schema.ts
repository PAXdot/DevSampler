// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";

export const schema = z.object({
  plan: z.string().max(32),
  oldPrice: z.number().min(0).max(1e9),
  newPrice: z.number().min(0).max(1e9),
  currency: z.string().max(3),
  period: z.string().max(8),
  saveLabel: z.string().max(24),
  decimals: z.number().int().min(0).max(2),
  color: zColor(),
  accent: zColor(),
  fontFamily: z.string(),
});

export const defaults: z.infer<typeof schema> = {
  plan: "Pro, billed yearly",
  oldPrice: 32,
  newPrice: 19,
  currency: "$",
  period: "/mo",
  saveLabel: "Save 40%",
  decimals: 0,
  color: "#F4F4F5",
  accent: "#3D63FF",
  fontFamily: "Geist",
};
