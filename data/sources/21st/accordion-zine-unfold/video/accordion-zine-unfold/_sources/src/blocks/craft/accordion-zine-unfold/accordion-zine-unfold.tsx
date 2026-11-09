// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./accordion-zine-unfold.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({screenshot,text,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),p=ease((f-6)/119),count=portrait?4:5,extent=portrait?h*.66:w*.85,unit=extent/count,cross=portrait?w*.82:h*.58,angle=(1-p)*76+Math.sin(p*Math.PI)*15,font=fitFontSize({chars:text.length,boxW:w*.84,boxH:h*.17,max:h*(portrait?.065:.10),min:h*.034,lines:portrait?2:1,charEm:.52,lineHeight:1.2});
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><div data-21st-slot="screenshot" style={{position:"absolute",left:w*.075,top:h*.08,width:w*.85,height:h*.72,perspective:Math.max(w,h)*2.4}}>{Array.from({length:count},(_,i)=>{const spread=.12+.88*p,shift=(i-(count-1)/2)*unit*spread,rot=(i%2?1:-1)*angle;return <div key={i} style={{position:"absolute",left:portrait?(w*.85-cross)/2:(w*.85-unit)/2+shift,top:portrait?(h*.72-unit)/2+shift:(h*.72-cross)/2,width:portrait?cross:unit,height:portrait?unit:cross,transform:portrait?`rotateX(${rot}deg) rotateZ(${(1-p)*-10}deg)`:`rotateY(${rot}deg) rotateZ(${(1-p)*-10}deg)`,transformStyle:"preserve-3d",overflow:"hidden",background:secondary,boxShadow:`${unit*.035}px ${unit*.07}px ${unit*.09}px ${withAlpha(color,.2)}`,border:`${Math.max(1,Math.min(w,h)*.008)}px solid ${secondary}`,opacity:ease(f/15)}}><Img src={screenshot||SAMPLE_SCREENSHOT} style={{position:"absolute",maxWidth:"none",width:portrait?cross:extent,height:portrait?extent:cross,objectFit:"cover",left:portrait?0:-i*unit,top:portrait?-i*unit:0}}/><div style={{position:"absolute",inset:0,background:portrait?`linear-gradient(0deg,${withAlpha(color,.03+Math.abs(rot)/200)},${withAlpha(primary,.02)},${withAlpha(color,.01)})`:`linear-gradient(90deg,${withAlpha(color,.03+Math.abs(rot)/200)},${withAlpha(primary,.02)},${withAlpha(color,.01)})`}}/></div>;})}</div><div data-21st-slot="text" style={{position:"absolute",left:w*.08,top:h*.835,width:w*.84,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.2,textAlign:"center",color,opacity:ease((f-90)/35)}}>{text}</div></AbsoluteFill>;
};
