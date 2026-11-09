// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
export const NAME = "Hex Bytes Decode";
export const schema = z.object({ code: z.string().min(1).max(160), caption: z.string().max(40), primary: zColor(), secondary: zColor(), color: zColor(), background: zColor(), fontFamily: z.string() });
export const defaults: z.infer<typeof schema> = { code: 'const build = (idea) => {\n  return makeItReal(idea);\n};', caption: "From bytes to ideas", primary: "#FFB84D", secondary: "#E4773A", color: "#FFDB98", background: "#15110A", fontFamily: "IBM Plex Mono" };
