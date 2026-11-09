// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
export const NAME = "Tally Count";
export const schema = z.object({ value: z.number().int().min(0).max(200), label: z.string().max(32), primary: zColor(), secondary: zColor(), color: zColor(), background: zColor(), fontFamily: z.string(), seed: z.number().int() });
export const defaults: z.infer<typeof schema> = { value: 180, label: "And counting", primary: "#FFB703", secondary: "#FB5607", color: "#F5EEF8", background: "transparent", fontFamily: "Caveat", seed: 19 };
