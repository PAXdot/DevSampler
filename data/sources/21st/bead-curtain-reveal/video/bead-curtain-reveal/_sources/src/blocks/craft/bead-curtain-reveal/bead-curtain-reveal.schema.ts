// Built with Remotion - https://remotion.pro/license
import { z } from "zod";
import { zColor } from "../../../kit/z";
export const NAME = "Bead Curtain Reveal";
export const schema = z.object({ screenshot: z.string(), caption: z.string().max(40), primary: zColor(), secondary: zColor(), color: zColor(), background: zColor(), fontFamily: z.string() });
export const defaults: z.infer<typeof schema> = { screenshot: "", caption: "Step into something new", primary: "#FF8A3D", secondary: "#FFD27A", color: "#F3EEE6", background: "#0E0F12", fontFamily: "DM Sans" };
