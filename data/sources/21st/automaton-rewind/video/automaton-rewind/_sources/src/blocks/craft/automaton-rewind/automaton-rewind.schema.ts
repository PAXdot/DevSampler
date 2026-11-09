// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Automaton Logo Rewind";
export const schema=z.object({logo:z.string(),caption:z.string().max(40),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults: z.infer<typeof schema>={logo:"",caption:"Order finds its way back",primary:"#14B8A6",secondary:"#F59E0B",color:"#0C2420",background:"#F0F7F4",fontFamily:"IBM Plex Mono",seed:23};
