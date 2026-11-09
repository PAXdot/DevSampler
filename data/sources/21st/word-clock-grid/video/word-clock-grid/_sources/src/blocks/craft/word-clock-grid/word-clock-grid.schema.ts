// Built with Remotion - https://remotion.pro/license
import {z} from "zod";
import {zColor} from "../../../kit/z";
export const NAME="Hidden Sentence Grid";
export const schema=z.object({text:z.string().max(48),primary:zColor(),secondary:zColor(),color:zColor(),background:zColor(),fontFamily:z.string(),seed:z.number().int()});
export const defaults: z.infer<typeof schema>={text:"Make time for what matters",primary:"#58A6FF",secondary:"#3FB950",color:"#E6EDF3",background:"#0E1116",fontFamily:"IBM Plex Mono",seed:37};
