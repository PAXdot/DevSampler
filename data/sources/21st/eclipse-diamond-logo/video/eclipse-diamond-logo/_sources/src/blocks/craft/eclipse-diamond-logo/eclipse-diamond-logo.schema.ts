// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Diamond Ring Eclipse Logo";
export const schema=z.object({logo:z.string(),caption:z.string().max(34),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#D6A65A", "secondary": "#A85F41", "color": "#F3E6CB", "background": "#17252B", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "A moment worth revealing"};
