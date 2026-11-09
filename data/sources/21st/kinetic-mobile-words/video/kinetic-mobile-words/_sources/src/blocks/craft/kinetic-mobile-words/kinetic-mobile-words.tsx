// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import type {schema} from "./kinetic-mobile-words.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({step1,step2,step3,step4,primary,secondary,color,background,fontFamily})=>{
 const steps=[step1,step2,step3,step4];
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),words=steps,n=words.length,p=ease(f/135),damp=1-p,ys=words.map((_,i)=>h*(.19+i*.66/Math.max(1,n-1))),xs=words.map((_,i)=>w*(portrait?(i%2?.61:.39):(i%2?.68:.32))),tilts=words.map((_,i)=>Math.sin(f*.075+i*1.8)*damp*12),s=Math.min(w,h);
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><svg width={w} height={h} style={{position:"absolute",inset:0}}><path d={`M${w*.5},${h*.055}V${h*.11}`} stroke={color} strokeWidth={s*.0028}/>{words.map((word,i)=>{const cx=w*.5,cy=ys[i]!-h*.055,previous=i?ys[i-1]!-h*.04:h*.11;return <g key={i}><path d={`M${cx},${previous}V${cy}`} stroke={withAlpha(color,.66)} strokeWidth={s*.0025}/><g transform={`rotate(${tilts[i]} ${cx} ${cy})`}><path d={`M${w*.15},${cy}L${w*.85},${cy}`} stroke={color} strokeWidth={s*.003}/><path d={`M${xs[i]},${cy}V${ys[i]}`} stroke={color} strokeWidth={s*.0025}/><circle cx={xs[i]!<w*.5?w*.78:w*.22} cy={cy+h*.045} r={s*(i%2?.034:.047)} fill={i%2?primary:secondary}/><path d={`M${xs[i]!<w*.5?w*.78:w*.22},${cy}V${cy+h*.045-s*.035}`} stroke={color} strokeWidth={s*.0025}/></g></g>;})}</svg>{words.map((word,i)=>{const font=fitFontSize({chars:word.length,boxW:w*.43,boxH:h*.15,max:h*(portrait?.09:.10),min:h*(portrait?.033:.025),lines:1,charEm:.6});return <div key={i} data-21st-slot={"step"+(i+1)} style={{position:"absolute",left:xs[i]!-w*.22,top:ys[i],width:w*.44,fontFamily:brandFontStack(fontFamily),fontWeight:900,fontSize:font,lineHeight:1.2,textAlign:"center",color,transform:`translateY(${Math.sin(f*.075+i*1.8)*damp*h*.025}px) rotate(${tilts[i]}deg)`,opacity:ease((f-8-i*14)/50)}}>{word}</div>;})}</AbsoluteFill>;
};
