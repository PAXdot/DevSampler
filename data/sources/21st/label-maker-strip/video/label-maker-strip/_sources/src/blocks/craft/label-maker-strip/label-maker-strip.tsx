// Built with Remotion - https://remotion.pro/license
import React from "react";
import type {z} from "zod";
import {AbsoluteFill,useCurrentFrame} from "remotion";
import {brandFontStack,useLayout,withAlpha} from "../../../kit/index";
import type {schema} from "./label-maker-strip.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return 1-(1-t)**3;};
export const Component:React.FC<z.infer<typeof schema>>=({text,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),words=text.toUpperCase().trim().split(/\s+/),lines:string[]=[];
 const limit=portrait?12:22;for(const word of words){let rest=word;while(rest.length>limit){lines.push(rest.slice(0,limit));rest=rest.slice(limit);}if(!rest)continue;const last=lines.length-1;if(last<0||lines[last]!.length+rest.length+1>limit)lines.push(rest);else lines[last]+=` ${rest}`;}
 if(!lines.length)lines.push(" ");const count=Math.max(...lines.map(x=>x.length)),size=Math.min(w*.72/(count*.64),h*.54/(lines.length*1.8)),rowH=size*1.8,top=(h-rowH*lines.length)/2;
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}>{lines.map((line,row)=>{const p=ease((f-row*17-8)/60),tear=ease((f-99-row*4)/24),width=Math.max(size*3,size*(line.length*.64+1.3)),left=(w-width)/2,chars=Math.min(line.length,Math.floor(Math.max(0,f-row*17-12)/2.3));
 return <div key={row} style={{position:"absolute",left,top:top+row*rowH,width,height:rowH*.81,transform:`translateX(${(1-p)*w*.18}px) rotate(${(row%2?-1:1)*1.6*tear}deg)`,opacity:ease((f-row*17)/12)}}>
 <div style={{position:"absolute",inset:0,background:`linear-gradient(180deg,${withAlpha(secondary,.92)},${primary} 15%,${primary} 78%,${withAlpha(secondary,.83)})`,clipPath:`polygon(0 0,99% 0,100% 8%,99% 16%,100% 25%,99% 34%,100% 43%,99% 52%,100% 61%,99% 70%,100% 79%,99% 88%,100% 100%,0 100%)`,boxShadow:`0 ${size*.08}px ${size*.12}px ${withAlpha(color,.22)}`}}/>
 <div data-21st-slot="text" style={{position:"absolute",left:size*.65,top:0,width:width-size*1.3,height:rowH*.81,display:"flex",alignItems:"center",fontFamily:brandFontStack(fontFamily),fontSize:size,fontWeight:600,lineHeight:1.3,letterSpacing:size*.02,color,textShadow:`0 ${size*.022}px ${withAlpha(secondary,.8)},0 -${size*.018}px ${withAlpha(background==="transparent"?primary:background,.6)}`}}>{Array.from(line).map((char,i)=><span key={i} style={{opacity:i<chars?1:0,width:size*.64,flexShrink:0}}>{char===" "?"\u00a0":char}</span>)}</div>
 {f<127&&<div style={{position:"absolute",right:-size*.12,top:-size*.12,width:size*.20,height:rowH,background:secondary,transform:`translateY(${-h*.16*tear}px)`,opacity:1-tear,borderRadius:size*.04}}/>}
 {[0,1].map(i=><div key={i} style={{position:"absolute",left:size*.08,top:size*(i?.98:.15),right:size*.10,height:Math.max(1,size*.008),background:withAlpha(secondary,.28)}}/>)}</div>;
 })}</AbsoluteFill>;
};
