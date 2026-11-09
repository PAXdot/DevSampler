// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Layered Type Sculpture";
export const schema=z.object({text:z.string().min(1).max(24),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#B3442C", "secondary": "#C7AC6D", "color": "#29352F", "background": "#F2EEE3", "fontFamily": "Archivo Black", "seed": 31, "text": "MAKE IT MATTER"};
