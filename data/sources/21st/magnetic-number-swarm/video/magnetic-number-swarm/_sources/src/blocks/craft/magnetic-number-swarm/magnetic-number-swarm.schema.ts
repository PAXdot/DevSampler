// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Magnetic Digit Swarm";
export const schema=z.object({value:z.number().int().min(0).max(99999999),label:z.string().max(32),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults: z.infer<typeof schema>={value:12480,label:"Every digit finds its place",primary:"#E84A27",secondary:"#EFA943",color:"#1D2423",background:"#F6F1E7",fontFamily:"Bricolage Grotesque",seed:41};
