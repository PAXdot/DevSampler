// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Flow Split Numbers";
export const schema=z.object({label1:z.string().min(1).max(16),label2:z.string().min(1).max(16),label3:z.string().min(1).max(16),value1:z.number().int().min(1).max(100),value2:z.number().int().min(1).max(100),value3:z.number().int().min(1).max(100),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#B8442D", "secondary": "#CBA753", "color": "#29312C", "background": "#F4F0E5", "fontFamily": "IBM Plex Mono", "seed": 31, "label1": "Explore", "label2": "Create", "label3": "Share", "value1": 55, "value2": 30, "value3": 15};
