// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Beads Fill the Count";
export const schema=z.object({value:z.number().int().min(1).max(180),label:z.string().max(30),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#C5A24C", "secondary": "#1A8C79", "color": "#EBF3E8", "background": "#122823", "fontFamily": "IBM Plex Mono", "seed": 31, "value": 120, "label": "Every one counts"};
