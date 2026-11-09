// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./de-stijl-partition.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({screenshot,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),p=ease((f-5)/110),x=w*.07,y=h*.07,pw=w*.86,ph=h*.70,b=Math.min(w,h)*.009,font=fitFontSize({chars:caption.length,boxW:w*.83,boxH:h*.15,max:h*.05,min:h*.032,lines:2,charEm:.54});
 const cells=portrait?[[0,0,.23,.18,primary],[.23,0,.77,.18,secondary],[0,.18,.23,.64,secondary],[.23,.18,.77,.64,"image"],[0,.82,.66,.18,primary],[.66,.82,.34,.18,secondary]]:[[0,0,.18,.69,primary],[0,.69,.18,.31,secondary],[.18,0,.69,.84,"image"],[.87,0,.13,.42,secondary],[.87,.42,.13,.58,primary],[.18,.84,.69,.16,secondary]] as const;
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><div data-21st-slot="screenshot" style={{position:"absolute",left:x,top:y,width:pw,height:ph,overflow:"hidden",border:`${b}px solid ${color}`}}>{cells.map((cell,i)=>{const [cx,cy,cw,ch,paint]=cell as [number,number,number,number,string],enter=ease((f-6-i*9)/65);return <div key={i} style={{position:"absolute",left:cx*pw,top:cy*ph,width:cw*pw,height:ch*ph,overflow:"hidden",border:`${b/2}px solid ${color}`,boxSizing:"border-box",background:paint==="image"?background:paint,transform:`translate(${i%2?(1-enter)*pw:0}px,${i%2?0:(1-enter)*-ph}px)`}}>{paint==="image"&&<Img src={screenshot||SAMPLE_SCREENSHOT} style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",transform:`scale(${1.25-.25*p})`}}/>}{paint!=="image"&&<div style={{position:"absolute",left:0,top:0,width:"100%",height:"100%",background:`linear-gradient(145deg,${withAlpha(color,.02)},${withAlpha(color,.07)})`}}/>}</div>;})}</div><div data-21st-slot="caption" style={{position:"absolute",left:w*.085,top:h*.84,width:w*.83,fontFamily:brandFontStack(fontFamily),fontSize:font,fontWeight:700,lineHeight:1.25,color,opacity:ease((f-93)/40)}}>{caption}</div></AbsoluteFill>;
};
