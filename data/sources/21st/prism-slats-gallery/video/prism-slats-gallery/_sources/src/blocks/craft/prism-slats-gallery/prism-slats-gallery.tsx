// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./prism-slats-gallery.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({screenshot,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),n=portrait?6:10,fw=w*.84,fh=h*.70,unit=fw/n,s=Math.min(w,h),font=fitFontSize({chars:caption.length,boxW:w*.82,boxH:h*.14,max:h*.044,min:h*.032,lines:2,charEm:.55});
 return <AbsoluteFill style={{background:background==='transparent'?undefined:background}}><div data-21st-slot="screenshot" style={{position:'absolute',left:w*.08,top:h*.08,width:fw,height:fh,perspective:w*1.8}}>{Array.from({length:n},(_,i)=>{const p=ease((f-8-i*4)/84),a=(1-p)*115;return <div key={i} style={{position:'absolute',left:i*unit+unit*.025,top:Math.sin(i*.8)*(1-p)*h*.08,width:unit*.95,height:fh,transform:`rotateY(${a}deg) translateZ(${Math.sin(p*Math.PI)*s*.12}px)`,transformStyle:'preserve-3d',background:primary,boxShadow:`${s*.01}px ${s*.02}px ${s*.02}px ${withAlpha(color,.18)}`,overflow:'hidden',opacity:ease((f-i*4)/18)}}><Img src={screenshot||SAMPLE_SCREENSHOT} style={{position:'absolute',left:-i*unit,width:fw,height:fh,maxWidth:'none',objectFit:'cover'}}/><div style={{position:'absolute',inset:0,background:`linear-gradient(90deg,${withAlpha(color,.10+(1-p)*.30)},${withAlpha(secondary,.04)},${withAlpha(primary,(1-p)*.3)})`,borderLeft:`${s*.0015}px solid ${withAlpha(secondary,.7)}`,borderRight:`${s*.002}px solid ${withAlpha(color,.2)}`}}/></div>;})}</div><div data-21st-slot="caption" style={{position:'absolute',left:w*.09,top:h*.86,width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:'center',opacity:ease((f-85)/45)}}>{caption}</div></AbsoluteFill>;
};
