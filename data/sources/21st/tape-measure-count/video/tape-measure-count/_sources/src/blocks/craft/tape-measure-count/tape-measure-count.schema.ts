// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Tape Measure Count";
export const schema=z.object({value:z.number().int().min(1).max(99),label:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#C34B32", "secondary": "#E0B64D", "color": "#252A25", "background": "#F4F1E8", "fontFamily": "DM Sans", "seed": 31, "value": 72, "label": "Measure what matters"};
