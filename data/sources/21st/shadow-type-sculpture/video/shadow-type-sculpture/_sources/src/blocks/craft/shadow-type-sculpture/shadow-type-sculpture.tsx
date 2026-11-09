// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import type {schema} from "./shadow-type-sculpture.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({text,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),words=text.split(/\s+/),lines=portrait?words.flatMap(word=>word.match(/.{1,9}/g)||[]):[words.slice(0,Math.ceil(words.length/2)).join(' '),words.slice(Math.ceil(words.length/2)).join(' ')].filter(Boolean),font=fitFontSize({chars:Math.max(...lines.map(x=>x.length)),boxW:w*.73,boxH:h*.72/lines.length,max:h*(portrait?.18:.27),min:h*(portrait?.04:.035),lines:1,charEm:.67,lineHeight:1.2}),lh=font*1.2,p=ease((f-5)/120),depth=Math.min(w,h)*.10*p,dy=depth*.55,ty=h*.47-lines.length*lh*.5;
 const letters=()=>lines.map((line,i)=><React.Fragment key={i}>{i>0&&<br/>}{line}</React.Fragment>);
 return <AbsoluteFill style={{background:background==='transparent'?undefined:background}}><div style={{position:'absolute',left:w*.08,top:h*.06,width:w*.84,height:h*.87,borderTop:`${Math.min(w,h)*.004}px solid ${withAlpha(primary,.5)}`,borderBottom:`${Math.min(w,h)*.004}px solid ${withAlpha(secondary,.8)}`}}/>{Array.from({length:22},(_,j)=>{const i=22-j,offset=i/22*depth,show=ease((f-i*1.5)/55);return <div key={i} data-21st-slot="text" aria-hidden='true' style={{position:'absolute',left:w*.095+offset,top:ty+offset*.55,width:w*.76,fontFamily:brandFontStack(fontFamily),fontSize:font,fontWeight:900,lineHeight:`${lh}px`,textAlign:'center',overflowWrap:'anywhere',color:i%5===0?secondary:primary,opacity:show,WebkitTextStroke:`${Math.max(.6,w*.0005)}px ${withAlpha(color,.25)}`,pointerEvents:'none'}}>{letters()}</div>;})}<div data-21st-slot="text" style={{position:'absolute',left:w*.095,top:ty,width:w*.76,fontFamily:brandFontStack(fontFamily),fontSize:font,fontWeight:900,lineHeight:`${lh}px`,textAlign:'center',overflowWrap:'anywhere',color,opacity:ease(f/50)}}>{letters()}</div></AbsoluteFill>;
};
