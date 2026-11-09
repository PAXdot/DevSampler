// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Star Trails to Logo";
export const schema=z.object({logo:z.string(),caption:z.string().max(38),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#CFAF67", "secondary": "#67B9AD", "color": "#F2E8D1", "background": "#102329", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "Leave a lasting impression"};
