// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME = "Crossing Tape Headlines";
export const schema = z.object({text:z.string().max(28),secondaryText:z.string().max(28),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string()});
export const defaults: z.infer<typeof schema> = {text:"Make some noise",secondaryText:"Made to stand out",primary:"#FF8A3D",secondary:"#FFD27A",color:"#F3EEE6",background:"#0E0F12",fontFamily:"Bricolage Grotesque"};
