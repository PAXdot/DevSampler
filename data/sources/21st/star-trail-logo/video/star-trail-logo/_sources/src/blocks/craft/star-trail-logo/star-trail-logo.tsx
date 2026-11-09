// Built with Remotion - https://remotion.pro/license

import React,{useLayoutEffect,useMemo,useRef} from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {rng} from "../_lib/noise";
import type {schema} from "./star-trail-logo.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({logo,caption,primary,secondary,color,background,fontFamily,seed})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),ref=useRef<HTMLCanvasElement>(null),cx=w*.5,cy=h*(portrait?.43:.46),outer=Math.min(w*.44,h*(portrait?.35:.4)),stars=useMemo(()=>{const r=rng(seed);return Array.from({length:110},()=>({r:.12+r()*.88,a:r()*Math.PI*2,span:.1+r()*.8,width:.7+r()*2.2,b:r()}));},[seed]),p=ease(f/110),size=Math.min(w*.59,h*.40),font=fitFontSize({chars:caption.length,boxW:w*.8,boxH:h*.15,max:h*.043,min:h*.032,lines:2,charEm:.55});
 useLayoutEffect(()=>{const c=ref.current?.getContext("2d",{willReadFrequently:true});if(!c)return;c.clearRect(0,0,w,h);for(const star of stars){const r=outer*star.r,angle=star.a+p*2.2,span=(.04+p*star.span)*2.5,fade=ease(f/18)*(1-.65*ease((f-92)/43));c.lineWidth=star.width;c.strokeStyle=withAlpha(star.b<.28?secondary:primary,fade*(.3+star.b*.7));c.beginPath();c.arc(cx,cy,r,angle-span,angle);c.stroke();const x=cx+Math.cos(angle)*r,y=cy+Math.sin(angle)*r;c.fillStyle=withAlpha(color,fade);c.beginPath();c.arc(x,y,star.width*1.1,0,Math.PI*2);c.fill();}},[f,w,h,stars,outer,cx,cy,p,primary,secondary,color]);
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><canvas ref={ref} width={w} height={h} style={{position:"absolute",inset:0}}/><div data-21st-slot="logo" style={{position:"absolute",left:(w-size)/2,top:cy-size/2,width:size,height:size,opacity:ease((f-70)/55),transform:`scale(${.8+.2*ease((f-70)/55)})`}}>{logo?<Img src={logo} style={{width:"100%",height:"100%",objectFit:"contain"}}/>:<svg viewBox="0 0 100 100" style={{width:"100%",height:"100%"}}><path d="M50 8 L60 35 L89 35 L66 53 L75 82 L50 65 L25 82 L34 53 L11 35 L40 35 Z" fill={color}/></svg>}</div><div data-21st-slot="caption" style={{position:"absolute",left:w*.1,top:h*.82,width:w*.8,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:"center",opacity:ease((f-92)/35)}}>{caption}</div></AbsoluteFill>;
};
