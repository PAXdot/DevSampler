// Built with Remotion - https://remotion.pro/license

import React from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./cube-net-unfold.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({screenshot,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),open=ease((f-25)/95),size=Math.min(w/(portrait?3.8:5.2),h/(portrait?5.3:4.3)),cy=h*(portrait?.43:.44),cols=portrait?[[-1,0],[0,-1],[0,0],[0,1],[0,2],[1,0]]:[[-2,0],[-1,0],[0,0],[1,0],[0,-1],[0,1]],font=fitFontSize({chars:caption.length,boxW:w*.84,boxH:h*.14,max:h*.045,min:h*.032,lines:2,charEm:.55});
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><div data-21st-slot="screenshot" style={{position:"absolute",left:w*.055,top:h*.08,width:w*.89,height:h*.72,perspective:Math.min(w,h)*2.8}}>{cols.map(([cx,yy],i)=>{const x=cx!*size*open,y=yy!*size*open;const rx=(1-open)*(yy!<0?-88:yy!>0?88:0),ry=(1-open)*(cx!<0?88:cx!>0?-88:0);return <div key={i} style={{position:"absolute",left:w*.445-size/2+x,top:cy-h*.08-size/2+y,width:size,height:size,transform:`rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${(1-open)*-14}deg)`,transformStyle:"preserve-3d",transformOrigin:cx!<0?"right center":cx!>0?"left center":yy!<0?"center bottom":"center top",overflow:"hidden",background:primary,border:`${Math.max(1,size*.018)}px solid ${withAlpha(color,.3)}`,boxShadow:`${size*.025}px ${size*.04}px ${size*.07}px ${withAlpha(color,.12)}`,opacity:ease((f-i*3)/20)}}><Img src={screenshot||SAMPLE_SCREENSHOT} style={{width:size*3,height:size*2,maxWidth:"none",objectFit:"cover",position:"absolute",left:-(i%3)*size,top:-Math.floor(i/3)*size}}/><div style={{position:"absolute",inset:0,background:`linear-gradient(135deg,${withAlpha(secondary,.08)},${withAlpha(primary,(1-open)*.4)})`}}/></div>;})}</div><div data-21st-slot="caption" style={{position:"absolute",left:w*.08,top:h*.84,width:w*.84,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,textAlign:"center",color,opacity:ease((f-78)/45)}}>{caption}</div></AbsoluteFill>;
};
