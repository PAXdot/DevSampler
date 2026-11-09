// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Label Maker Strip";
export const schema=z.object({text:z.string().max(40),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string()});
export const defaults:z.infer<typeof schema>={"text": "Make something worth keeping", "primary": "#B44735", "secondary": "#E69166", "color": "#FFF2DA", "background": "#E6DECD", "fontFamily": "IBM Plex Mono"};
