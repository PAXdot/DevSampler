// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Prism Screenshot Slats";
export const schema=z.object({screenshot:z.string(),caption:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#A74D37", "secondary": "#C9AE71", "color": "#29362F", "background": "#F2EEE2", "fontFamily": "DM Sans", "seed": 31, "screenshot": "", "caption": "See another side"};
