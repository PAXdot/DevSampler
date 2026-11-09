// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Folded Paper Logo Frame";
export const schema=z.object({logo:z.string(),caption:z.string().max(35),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#B64831", "secondary": "#C9A85D", "color": "#29362F", "background": "#F4F0E5", "fontFamily": "DM Sans", "seed": 31, "logo": "", "caption": "An idea taking shape"};
