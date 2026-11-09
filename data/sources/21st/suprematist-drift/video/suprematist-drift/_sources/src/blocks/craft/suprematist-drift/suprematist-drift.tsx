// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import type {schema} from "./suprematist-drift.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({logo,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),p=ease((f-10)/125),cx=w*.5,cy=h*(portrait?.42:.44),s=Math.min(w,h),size=s*.43,font=fitFontSize({chars:caption.length,boxW:w*.82,boxH:h*.15,max:h*.044,min:h*.032,lines:2,charEm:.54});
 const shapes=[{x:-.28,y:-.27,w:.40,h:.15,r:-31,c:primary},{x:.29,y:.18,w:.13,h:.44,r:24,c:color},{x:-.24,y:.24,w:.30,h:.09,r:-21,c:secondary},{x:.21,y:-.28,w:.20,h:.20,r:44,c:secondary}];
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><div style={{position:"absolute",left:w*.04,top:h*.045,width:w*.92,height:h*.76,overflow:"hidden"}}><svg width={w} height={h} style={{position:"absolute",left:-w*.04,top:-h*.045}}>{shapes.map((a,i)=>{const q=ease((f-i*12)/90),x=cx+a.x*s+(1-q)*s*Math.cos(i*1.9),y=cy+a.y*s+(1-q)*s*Math.sin(i*2.4);return <g key={i} transform={`translate(${x} ${y}) rotate(${a.r+(1-q)*(i%2?180:-180)})`} opacity={ease((f-i*5)/25)}><rect x={-a.w*s/2} y={-a.h*s/2} width={a.w*s} height={a.h*s} fill={a.c}/><path d={`M${-a.w*s/2} ${-a.h*s/2}H${a.w*s/2}`} stroke={withAlpha(color,.15)} strokeWidth={s*.001}/></g>;})}<circle cx={cx-s*.32} cy={cy-s*.01} r={s*.045} fill={primary}/></svg></div><div data-21st-slot="logo" style={{position:"absolute",left:cx-size/2,top:cy-size/2,width:size,height:size,opacity:ease((f-64)/60),transform:`rotate(${(1-p)*-25}deg) scale(${.7+.3*p})`}}>{logo?<Img src={logo} style={{width:"100%",height:"100%",objectFit:"contain"}}/>:<svg viewBox="0 0 100 100" style={{width:"100%",height:"100%"}}><path d="M50 9L87 30V70L50 91L13 70V30Z M50 31L31 42V58L50 69L69 58V42Z" fill={color} fillRule="evenodd"/></svg>}</div><div data-21st-slot="caption" style={{position:"absolute",left:w*.09,top:h*.84,width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:"center",opacity:ease((f-98)/32)}}>{caption}</div></AbsoluteFill>;
};
