// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_LOGO} from "../_lib/samples";
import type {schema} from "./folded-paper-logo.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({logo,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),s=Math.min(w,h),cx=w*.5,cy=h*(portrait?.43:.44),r=s*(portrait?.40:.35),inner=r*.51,size=inner*1.53,font=fitFontSize({chars:caption.length,boxW:w*.82,boxH:h*.14,max:h*.044,min:h*.032,lines:2,charEm:.55});
 return <AbsoluteFill style={{background:background==='transparent'?undefined:background}}><svg width={w} height={h} style={{position:'absolute',inset:0}}><ellipse cx={cx} cy={cy+r*.90} rx={r*.86} ry={s*.03} fill={withAlpha(color,.10)}/>{Array.from({length:8},(_,i)=>{const a=i*Math.PI/4-Math.PI/2,b=a+Math.PI/4,p=ease((f-5-i*6)/76),rot=(1-p)*.65,rad=r*(.2+.8*p),A={x:cx+Math.cos(a+rot)*rad,y:cy+Math.sin(a+rot)*rad},B={x:cx+Math.cos(b+rot)*rad,y:cy+Math.sin(b+rot)*rad},C={x:cx+Math.cos(b+.18)*inner,y:cy+Math.sin(b+.18)*inner},D={x:cx+Math.cos(a+.18)*inner,y:cy+Math.sin(a+.18)*inner},M={x:(A.x+B.x)/2,y:(A.y+B.y)/2};return <g key={i} opacity={ease((f-i*5)/18)}><path d={`M${A.x+s*.008},${A.y+s*.012}L${B.x+s*.008},${B.y+s*.012}L${C.x+s*.008},${C.y+s*.012}L${D.x+s*.008},${D.y+s*.012}Z`} fill={withAlpha(color,.11)}/><path d={`M${A.x},${A.y}L${B.x},${B.y}L${C.x},${C.y}L${D.x},${D.y}Z`} fill={i%2?secondary:primary} stroke={withAlpha(color,.28)} strokeWidth={s*.0013}/><path d={`M${M.x},${M.y}L${C.x},${C.y}L${D.x},${D.y}Z`} fill={withAlpha(color,.18)}/><path d={`M${M.x},${M.y}L${D.x},${D.y}`} stroke={withAlpha(background==='transparent'?secondary:background,.4)} strokeWidth={s*.002}/></g>;})}</svg><div data-21st-slot="logo" style={{position:'absolute',left:cx-size/2,top:cy-size/2,width:size,height:size,opacity:ease((f-62)/65),transform:`scale(${.85+.15*ease((f-62)/65)})`}}><Img src={logo||SAMPLE_LOGO} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div><div data-21st-slot="caption" style={{position:'absolute',left:w*.09,top:h*.84,width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:'center',opacity:ease((f-92)/40)}}>{caption}</div></AbsoluteFill>;
};
