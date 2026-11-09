// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Abacus Number Settle";
export const schema=z.object({value:z.number().int().min(0).max(99999),label:z.string().max(30),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#8B5335", "secondary": "#B93E2E", "color": "#292C25", "background": "#F4EFE2", "fontFamily": "IBM Plex Mono", "seed": 31, "value": 12480, "label": "Make every move count"};
