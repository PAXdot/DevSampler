// Built with Remotion - https://remotion.pro/license
import React from "react";
import type {z} from "zod";
import {AbsoluteFill,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,luminance,useLayout,withAlpha} from "../../../kit/index";
import type {schema} from "./crossing-tape-bands.schema";
const ease=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t);};
export const Component: React.FC<z.infer<typeof schema>> = ({text,secondaryText,primary,secondary,color,background,fontFamily}) => {
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),inP=ease(f/30),brake=ease((f-75)/60),bandH=h*(portrait?.15:.19),angle=portrait?36:19;
 const stop=(f<75?f/75:1+(.5-Math.cos(Math.PI*Math.min(1,(f-75)/60))*.5)*.42),offset=(1-stop/1.42)*w*.86;
 const ink=(paint:string)=>{const l=luminance(paint),contrast=(a:string)=>(Math.max(l,luminance(a))+.05)/(Math.min(l,luminance(a))+.05);return contrast(color)>=contrast(background==="transparent"?color:background)?color:background;};
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><div style={{position:"absolute",inset:`${h*.055}px ${w*.055}px`,overflow:"hidden",borderRadius:Math.min(w,h)*.006}}>
  {[{content:secondaryText,key:"secondaryText",tone:secondary,sign:-1},{content:text,key:"text",tone:primary,sign:1}].map((row,k)=>{const font=fitFontSize({chars:row.content.length,boxW:w*.80,boxH:bandH*.76,max:bandH*.43,min:h*.031,lines:1,charEm:.57,lineHeight:1.2});const unit=w*.92;return <div key={row.key} style={{position:"absolute",left:-w*.26,top:h*.445-bandH/2+(k===0?-1:1)*h*.045,width:w*1.42,height:bandH,transform:`translateX(${(1-inP)*row.sign*w*1.7}px) rotate(${row.sign*angle}deg)`,background:row.tone,boxShadow:`0 ${h*.012}px ${h*.028}px ${withAlpha(color,.2)}`,borderTop:`${h*.0015}px solid ${withAlpha(color,.20)}`,borderBottom:`${h*.0015}px solid ${withAlpha(color,.20)}`}}>
   <div style={{position:"absolute",top:0,left:w*.25,rowGap:0,height:bandH,display:"flex",alignItems:"center",transform:`translateX(${row.sign*offset}px)`,fontFamily:brandFontStack(fontFamily),fontWeight:750,color:ink(row.tone)}}>
    {[-2,-1,0,1,2].map(i=><div key={i} style={{position:"absolute",left:i*unit,width:unit,height:bandH,display:"flex",alignItems:"center",justifyContent:"center",gap:w*.035}}><span data-21st-slot={i===0?row.key:undefined} style={{fontSize:font,lineHeight:1.2,whiteSpace:"nowrap",letterSpacing:"-.025em"}}>{row.content}</span><svg width={h*.045} height={h*.045} viewBox="0 0 32 32" style={{flexShrink:0,opacity:.6}}><path d="M 16 0 L 20 12 L 32 16 L 20 20 L 16 32 L 12 20 L 0 16 L 12 12 Z" fill={ink(row.tone)}/></svg></div>)}
   </div>
   <div style={{position:"absolute",inset:0,background:`linear-gradient(90deg,${withAlpha(background==="transparent"?color:background,.1)},${withAlpha(row.tone,0)} 20%,${withAlpha(row.tone,0)} 80%,${withAlpha(background==="transparent"?color:background,.12)})`,opacity:1-brake*.3,pointerEvents:"none"}}/>
  </div>;})}
 </div></AbsoluteFill>;
};
