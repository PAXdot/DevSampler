// Built with Remotion - https://remotion.pro/license

import React from 'react';
import type {z} from 'zod';
import {AbsoluteFill,Img,useCurrentFrame} from 'remotion';
import {brandFontStack,fitFontSize,useLayout,withAlpha} from '../../../kit/index';
import {SAMPLE_SCREENSHOT} from '../_lib/samples';
import type {schema} from './scroll-blueprint-screen.schema';
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({screenshot,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),s=Math.min(w,h),p=ease((f-5)/120),x=w*.09,y=h*.09,sw=w*.82,sh=h*.66,open=sh*(.05+.95*p),roll=s*.025+(1-p)*s*.06,font=fitFontSize({chars:caption.length,boxW:w*.82,boxH:h*.14,max:h*.045,min:h*(portrait?.031:.024),lines:2,charEm:.55});
 return <AbsoluteFill style={{background:background==='transparent'?undefined:background}}><div data-21st-slot="screenshot" style={{position:'absolute',left:x,top:y,width:sw,height:open,overflow:'hidden',boxShadow:`${s*.012}px ${s*.02}px ${s*.035}px ${withAlpha(color,.16)}`,border:`${s*.003}px solid ${primary}`}}><Img src={screenshot||SAMPLE_SCREENSHOT} style={{width:sw,height:sh,objectFit:'cover'}}/><div style={{position:'absolute',inset:0,background:`linear-gradient(180deg,${withAlpha(primary,.07)},${withAlpha(primary,0)} 25%,${withAlpha(primary,.035)})`}}/></div><div style={{position:'absolute',left:x-s*.015,top:y-roll*.5,width:sw+s*.03,height:roll,borderRadius:roll,background:`linear-gradient(180deg,${secondary},${withAlpha(secondary,.65)} 30%,${primary} 95%)`,border:`${s*.002}px solid ${withAlpha(color,.5)}`}}/><div style={{position:'absolute',left:x-s*.015,top:y+open-roll*.5,width:sw+s*.03,height:roll,borderRadius:roll,background:`linear-gradient(180deg,${primary},${secondary} 30%,${withAlpha(secondary,.5)} 65%,${primary})`,border:`${s*.002}px solid ${withAlpha(color,.5)}`,boxShadow:`0 ${s*.012}px ${s*.015}px ${withAlpha(color,.2)}`}}><div style={{position:'absolute',right:s*.005,top:s*.003,bottom:s*.003,width:roll*.45,borderRadius:'50%',border:`${s*.003}px solid ${primary}`,background:secondary}}/></div><div data-21st-slot="caption" style={{position:'absolute',left:w*.09,top:h*.85,width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:'center',opacity:ease((f-92)/40)}}>{caption}</div></AbsoluteFill>;
};
