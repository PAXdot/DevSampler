// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Diagonal Wedge Headline";
export const schema=z.object({text:z.string().min(1).max(38),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#C83D26", "secondary": "#D5B16D", "color": "#202823", "background": "#F3EEE3", "fontFamily": "Archivo Black", "seed": 31, "text": "MAKE YOUR NEXT MOVE"};
