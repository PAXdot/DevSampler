// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Falling Fabric Headline";
export const schema=z.object({text:z.string().min(1).max(36),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#D5442F", "secondary": "#E4C474", "color": "#F5EEE0", "background": "#202927", "fontFamily": "Archivo Black", "seed": 31, "text": "LET IDEAS FLY"};
