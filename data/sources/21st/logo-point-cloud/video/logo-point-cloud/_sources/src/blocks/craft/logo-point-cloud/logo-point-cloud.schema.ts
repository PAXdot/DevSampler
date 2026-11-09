// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Logo from Rotating Points";
export const schema=z.object({logo:z.string(),caption:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#C39A54", "secondary": "#6C9F92", "color": "#F1E8D1", "background": "#15282D", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "Clarity from every angle"};
