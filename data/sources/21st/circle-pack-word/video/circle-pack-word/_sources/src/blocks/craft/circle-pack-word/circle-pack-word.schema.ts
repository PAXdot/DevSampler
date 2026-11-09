// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Circle Packed Letters";
export const schema=z.object({text:z.string().min(1).max(28),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#D03F2F", "secondary": "#D8AA32", "color": "#252A25", "background": "#F4F1E8", "fontFamily": "Archivo Black", "seed": 31, "text": "MAKE IT BIG"};
