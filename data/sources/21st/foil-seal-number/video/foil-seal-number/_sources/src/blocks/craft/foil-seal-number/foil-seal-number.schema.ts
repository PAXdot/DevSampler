// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Metric Coin Spin";
export const schema=z.object({value:z.number().int().min(0).max(99999),label:z.string().max(30),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#B98E43", "secondary": "#E1C583", "color": "#28342D", "background": "#EFEADF", "fontFamily": "Archivo Black", "seed": 31, "value": 12480, "label": "Every milestone matters"};
