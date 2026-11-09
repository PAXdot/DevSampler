// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Hanging Process Mobile";
export const schema=z.object({step1:z.string().min(1).max(12),step2:z.string().min(1).max(12),step3:z.string().min(1).max(12),step4:z.string().min(1).max(12),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#C13E2B", "secondary": "#C5AA5E", "color": "#26312D", "background": "#F4F1E6", "fontFamily": "Archivo Black", "seed": 31, "step1": "DISCOVER", "step2": "DESIGN", "step3": "BUILD", "step4": "SHIP"};
