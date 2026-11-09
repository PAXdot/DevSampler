// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Wax Seal Logo Press";
export const schema=z.object({logo:z.string(),caption:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#A9402F", "secondary": "#D5AA63", "color": "#29372E", "background": "#F2EBDD", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "Make your mark"};
