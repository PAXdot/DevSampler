// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
export const NAME = "Jacquard Woven Logo";
export const schema = z.object({ logo: z.string(), caption: z.string().max(40), primary: zColor(), secondary: zColor(), color: zColor(), background: zColor(), fontFamily: z.string() });
export const defaults: z.infer<typeof schema> = { logo: "", caption: "Woven together", primary: "#14B8A6", secondary: "#F59E0B", color: "#0C2420", background: "#F0F7F4", fontFamily: "DM Sans" };
