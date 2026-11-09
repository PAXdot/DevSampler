// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Truchet Path Run";
export const schema=z.object({logo:z.string(),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),seed:z.number().int()});
export const defaults:z.infer<typeof schema>={logo:"",primary:"#3A5A40",secondary:"#E9C46A",color:"#1A1A17",background:"#F3F4ED",seed:37};
