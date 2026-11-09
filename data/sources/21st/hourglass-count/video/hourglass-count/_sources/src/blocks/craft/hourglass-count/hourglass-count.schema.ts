// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Hourglass Progress Count";
export const schema=z.object({value:z.number().int().min(1).max(100),label:z.string().max(32),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#B3914B", "secondary": "#D9C38B", "color": "#2A382F", "background": "#F2EEDF", "fontFamily": "IBM Plex Mono", "seed": 31, "value": 75, "label": "One grain at a time"};
