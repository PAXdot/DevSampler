// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Halftone Photo Wave";
export const schema=z.object({image:z.string(),caption:z.string().max(36),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#A73E35", "secondary": "#D1AD68", "color": "#212A29", "background": "#F6F1E7", "fontFamily": "DM Sans", "seed": 31, "image": "", "caption": "Every dot tells the story"};
