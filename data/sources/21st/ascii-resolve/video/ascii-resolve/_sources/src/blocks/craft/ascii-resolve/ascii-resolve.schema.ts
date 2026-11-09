// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="ASCII Screenshot Resolve";
export const schema=z.object({screenshot:z.string(),caption:z.string().max(40),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults: z.infer<typeof schema>={screenshot:"",caption:"From characters to clarity",primary:"#9DE0AD",secondary:"#45ADA8",color:"#E5FCC2",background:"#0D201D",fontFamily:"IBM Plex Mono",seed:47};
