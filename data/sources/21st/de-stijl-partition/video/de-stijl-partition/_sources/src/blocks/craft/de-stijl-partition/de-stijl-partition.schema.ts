// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Sliding Screenshot Color Planes";
export const schema=z.object({screenshot:z.string(),caption:z.string().max(38),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#BD392D", "secondary": "#D9B635", "color": "#202827", "background": "#F6F2E8", "fontFamily": "DM Sans", "seed": 31, "screenshot": "", "caption": "Everything in its place"};
