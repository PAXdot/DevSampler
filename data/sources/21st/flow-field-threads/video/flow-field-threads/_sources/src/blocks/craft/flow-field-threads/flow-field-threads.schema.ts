// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
export const NAME = "Flow Field Headline";
export const schema = z.object({ text: z.string().min(1).max(72), primary: zColor(), secondary: zColor(), color: zColor(), background: zColor(), fontFamily: z.string(), seed: z.number().int() });
export const defaults: z.infer<typeof schema> = { text: "Find your flow", primary: "#246C4C", secondary: "#B64430", color: "#163B2B", background: "#F2EFE5", fontFamily: "Instrument Serif", seed: 17 };
