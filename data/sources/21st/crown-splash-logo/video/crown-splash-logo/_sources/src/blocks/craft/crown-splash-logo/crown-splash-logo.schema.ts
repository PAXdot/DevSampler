// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Crown Splash Logo";
export const schema=z.object({logo:z.string(),caption:z.string().max(40),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults: z.infer<typeof schema>={logo:"",caption:"Make a splash",primary:"#F97316",secondary:"#A8A29E",color:"#F5F5F4",background:"#1C1917",fontFamily:"DM Sans",seed:29};
