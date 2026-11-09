// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Liquid Level Gauge";
export const schema=z.object({value:z.number().min(0).max(100),label:z.string().max(32),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#317765", "secondary": "#D2AA5E", "color": "#26362F", "background": "#F2EFE3", "fontFamily": "IBM Plex Mono", "seed": 31, "value": 78, "label": "Progress made visible"};
