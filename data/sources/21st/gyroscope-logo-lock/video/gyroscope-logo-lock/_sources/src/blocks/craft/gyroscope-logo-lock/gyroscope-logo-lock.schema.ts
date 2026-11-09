// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Gyroscope Logo Lock";
export const schema=z.object({logo:z.string(),caption:z.string().max(38),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#B9A063", "secondary": "#A14B31", "color": "#26312D", "background": "#F3F0E7", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "Find your own balance"};
