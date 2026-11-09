// Built with Remotion - https://remotion.pro/license

import React,{useMemo} from "react";
import type {z} from "zod";
import {AbsoluteFill,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {rng} from "../_lib/noise";
import type {schema} from "./constructivist-wedge.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({text,primary,secondary,color,background,fontFamily,seed})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),words=text.split(/\s+/),font=fitFontSize({chars:text.length,boxW:w*.72,boxH:h*.75,max:h*(portrait?.17:.24),min:h*.045,lines:portrait?4:3,charEm:.58,lineHeight:1.18}),p=ease((f-8)/70),dot=useMemo(()=>{const r=rng(seed);return Array.from({length:190},()=>[r(),r()]);},[seed]);
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><svg width={w} height={h} style={{position:"absolute",inset:0}}><defs><clipPath id="wedge-clip"><path d={`M${w*.045},${h*.06} L${w*.955},${h*.06} L${w*.955},${h*.94} L${w*.045},${h*.94}Z`}/></clipPath></defs><g clipPath="url(#wedge-clip)"><path d={`M${w*(1.2-p*.6)},${-h*.4}L${w*(1.65-p*.95)},${h*1.45}L${w*(-.35+p*.4)},${h*1.05}Z`} fill={primary}/><circle cx={w*(.78+.5*(1-p))} cy={h*.21} r={Math.min(w,h)*.18} fill={secondary}/><path d={`M${w*.08},${h*.82}L${w*.89},${h*.60}`} stroke={color} strokeWidth={Math.min(w,h)*.028} strokeDasharray={w} strokeDashoffset={w*(1-ease((f-57)/57))}/>{dot.map(([x,y],i)=><circle key={i} cx={w*(.05+x!*.9)} cy={h*(.06+y!*.88)} r={Math.min(w,h)*.0009} fill={withAlpha(color,.12)}/>)}</g></svg><div data-21st-slot="text" style={{position:"absolute",left:w*.12,top:h*(portrait?.13:.11),width:w*.75,height:h*.76,display:"flex",flexDirection:"column",justifyContent:"center",fontFamily:brandFontStack(fontFamily),fontWeight:900,fontSize:font,lineHeight:1.18,color,transform:`translateX(${(1-ease((f-25)/95))*-w*.35}px) rotate(-8deg)`,opacity:ease((f-22)/30)}}>{(portrait?words:[words.slice(0,2).join(" "),words.slice(2).join(" ")].filter(Boolean)).map((word,i)=><div key={i} style={{display:"block"}}>{word}</div>)}</div></AbsoluteFill>;
};
