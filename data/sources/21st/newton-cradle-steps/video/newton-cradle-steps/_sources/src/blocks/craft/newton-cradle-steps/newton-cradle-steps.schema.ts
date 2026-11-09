// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Cradle Chain Steps";
export const schema=z.object({step1:z.string().min(1).max(15),step2:z.string().min(1).max(15),step3:z.string().min(1).max(15),step4:z.string().min(1).max(15),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={"primary": "#A64D35", "secondary": "#C8A866", "color": "#2A382F", "background": "#F2EEE4", "fontFamily": "DM Sans", "seed": 31, "step1": "Discover", "step2": "Design", "step3": "Build", "step4": "Launch"};
