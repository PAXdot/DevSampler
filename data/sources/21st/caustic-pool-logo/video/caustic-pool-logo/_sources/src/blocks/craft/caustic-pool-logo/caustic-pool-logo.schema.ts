// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Caustic Pool Logo";
export const schema=z.object({logo:z.string(),caption:z.string().max(40),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults: z.infer<typeof schema>={logo:"",caption:"A clearer kind of motion",primary:"#FF6F59",secondary:"#FFC2A8",color:"#F6EFE6",background:"#0D1A14",fontFamily:"DM Sans",seed:43};
