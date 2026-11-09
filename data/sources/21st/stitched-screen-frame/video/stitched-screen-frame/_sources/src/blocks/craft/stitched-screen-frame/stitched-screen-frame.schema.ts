// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Stitched Screenshot Frame";
export const schema=z.object({screenshot:z.string(),caption:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#AB4B38", "secondary": "#CBAE77", "color": "#252A25", "background": "#F4F1E8", "fontFamily": "DM Sans", "seed": 31, "screenshot": "", "caption": "Bring every detail together"};
