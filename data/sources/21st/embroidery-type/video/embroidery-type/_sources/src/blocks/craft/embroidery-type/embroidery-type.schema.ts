// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Cross Stitch Headline";
export const schema=z.object({text:z.string().min(1).max(24),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#AC4430", "secondary": "#C8AC71", "color": "#29382E", "background": "#F0E9D9", "fontFamily": "Archivo Black", "seed": 31, "text": "MAKE IT YOURS"};
