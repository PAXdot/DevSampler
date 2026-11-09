// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Metric Skyline Rise";
export const schema=z.object({label1:z.string().min(1).max(16),label2:z.string().min(1).max(16),label3:z.string().min(1).max(16),value1:z.number().int().min(1).max(100),value2:z.number().int().min(1).max(100),value3:z.number().int().min(1).max(100),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#347D68", "secondary": "#C9A45B", "color": "#24352F", "background": "#F2F0E6", "fontFamily": "IBM Plex Mono", "seed": 31, "label1": "Explore", "label2": "Make", "label3": "Share", "value1": 38, "value2": 82, "value3": 61};
