// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Screenshot Cross Unfold";
export const schema=z.object({screenshot:z.string(),caption:z.string().max(40),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#2C6D58", "secondary": "#DAB664", "color": "#252A25", "background": "#F4F1E8", "fontFamily": "DM Sans", "seed": 31, "screenshot": "", "caption": "A different point of view"};
