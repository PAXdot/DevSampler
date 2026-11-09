// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Elastic Mesh Logo Landing";
export const schema=z.object({logo:z.string(),caption:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#B94A31", "secondary": "#C5A25C", "color": "#27372E", "background": "#F3EFE5", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "Make a lasting impression"};
