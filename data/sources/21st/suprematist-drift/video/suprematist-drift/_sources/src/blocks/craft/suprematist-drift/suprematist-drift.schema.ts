// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Floating Geometry Logo";
export const schema=z.object({logo:z.string(),caption:z.string().max(38),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#C14330", "secondary": "#D3AE66", "color": "#212A28", "background": "#F3EFE4", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "A mark with its own gravity"};
