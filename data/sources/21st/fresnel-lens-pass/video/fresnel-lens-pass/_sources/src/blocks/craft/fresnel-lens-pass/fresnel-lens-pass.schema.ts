// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Fresnel Lens Pass";
export const schema=z.object({screenshot:z.string(),caption:z.string().max(40),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string()});
export const defaults:z.infer<typeof schema>={"screenshot": "", "caption": "See the bigger picture", "primary": "#4F948D", "secondary": "#C3E3C9", "color": "#F0EEE1", "background": "#142523", "fontFamily": "DM Sans"};
