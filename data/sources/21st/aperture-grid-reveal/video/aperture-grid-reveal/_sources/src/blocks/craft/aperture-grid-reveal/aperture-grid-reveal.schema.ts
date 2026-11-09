// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Iris Grid Image Reveal";
export const schema=z.object({image:z.string(),caption:z.string().max(38),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#A7B8A4", "secondary": "#C9AA62", "color": "#F2F0E5", "background": "#1B2925", "fontFamily": "DM Sans", "seed": 31, "image": "", "caption": "A clear view, one frame at a time"};
