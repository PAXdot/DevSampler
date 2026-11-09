// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Image Carousel Drum";
export const schema=z.object({image:z.string(),photo:z.string(),caption:z.string().max(36),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#A9402C", "secondary": "#C6A65F", "color": "#29362F", "background": "#F4F0E5", "fontFamily": "DM Sans", "seed": 31, "image": "", "photo": "", "caption": "Keep the ideas turning"};
