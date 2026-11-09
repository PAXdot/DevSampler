// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./infinite-loop-cylinder.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({image,photo,caption,primary,secondary,color,background,fontFamily})=>{
 const images=[image,photo],f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),p=ease((f-5)/120),s=Math.min(w,h),cx=w*.5,cy=h*(portrait?.43:.44),radius=w*(portrait?.25:.30),cw=w*(portrait?.50:.35),ch=h*(portrait?.48:.59),items=Array.from({length:6},(_,i)=>{const a=i*Math.PI/3+(1-p)*Math.PI*1.4,z=Math.cos(a),x=Math.sin(a);return {i,a,z,x};}).sort((a,b)=>a.z-b.z),font=fitFontSize({chars:caption.length,boxW:w*.82,boxH:h*.15,max:h*.044,min:h*.032,lines:2,charEm:.55});
 return <AbsoluteFill style={{background:background==='transparent'?undefined:background}}><svg width={w} height={h} style={{position:'absolute',inset:0}}><ellipse cx={cx} cy={cy+ch*.56} rx={radius+cw*.22} ry={s*.045} fill={withAlpha(color,.12)}/><ellipse cx={cx} cy={cy-ch*.54} rx={radius} ry={s*.045} fill='none' stroke={secondary} strokeWidth={s*.006}/><path d={`M${cx},${cy-ch*.6}V${cy+ch*.55}`} stroke={withAlpha(primary,.4)} strokeWidth={s*.01}/></svg><div data-21st-slot="image" style={{position:'absolute',inset:0}}>{items.map(({i,z,x})=>{const scale=.60+.40*(z+1)/2,ww=cw*scale*Math.max(.25,Math.abs(z)),hh=ch*scale;return <div key={i} data-21st-slot={i%2?"photo":"image"} style={{position:'absolute',left:cx+x*radius-ww/2,top:cy-hh/2,width:ww,height:hh,overflow:'hidden',border:`${s*.006}px solid ${i%2?primary:secondary}`,background:primary,boxShadow:`${s*.008}px ${s*.015}px ${s*.02}px ${withAlpha(color,.2)}`,opacity:.5+.5*(z+1)/2}}><Img src={images[i%images.length]||SAMPLE_SCREENSHOT} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:`${(i%3)*50}% 50%`}}/><div style={{position:'absolute',inset:0,background:withAlpha(color,Math.max(0,-z)*.25)}}/></div>;})}</div><div data-21st-slot="caption" style={{position:'absolute',left:w*.09,top:h*.86,width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:'center',opacity:ease((f-85)/45)}}>{caption}</div></AbsoluteFill>;
};
