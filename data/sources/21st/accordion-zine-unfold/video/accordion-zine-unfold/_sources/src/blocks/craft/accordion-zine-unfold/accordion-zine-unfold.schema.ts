// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Accordion Screenshot Fold";
export const schema=z.object({screenshot:z.string(),text:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#BE4932", "secondary": "#BFAF8F", "color": "#252A25", "background": "#F4F1E8", "fontFamily": "Playfair Display", "seed": 31, "screenshot": "", "text": "Stories worth unfolding"};
