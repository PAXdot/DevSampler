// Built with Remotion - https://remotion.pro/license

import React,{useLayoutEffect,useRef,useState} from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,cancelRender,continueRender,delayRender,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {rng} from "../_lib/noise";
import {SAMPLE_LOGO} from "../_lib/samples";
import type {schema} from "./logo-point-cloud.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({logo,caption,primary,secondary,color,background,fontFamily,seed})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),ref=useRef<HTMLCanvasElement>(null),[points,setPoints]=useState<{x:number;y:number;z:number;a:number}[]>([]),[handle]=useState(()=>delayRender('logo point cloud')),src=logo||SAMPLE_LOGO,s=Math.min(w,h),size=s*(portrait?.77:.67),cy=h*(portrait?.42:.43),p=ease((f-5)/120),font=fitFontSize({chars:caption.length,boxW:w*.82,boxH:h*.14,max:h*.044,min:h*.032,lines:2,charEm:.55});
 useLayoutEffect(()=>{let live=true;const im=new Image();im.crossOrigin='anonymous';im.onload=()=>{try{const c=document.createElement('canvas');c.width=180;c.height=180;const g=c.getContext('2d',{willReadFrequently:true})!;g.drawImage(im,0,0,180,180);const data=g.getImageData(0,0,180,180).data,random=rng(seed),out=[];for(let y=2;y<180;y+=3)for(let x=2;x<180;x+=3){const i=(y*180+x)*4;if(data[i+3]!>70)out.push({x:x/180-.5,y:y/180-.5,z:(random()-.5)*.55,a:random()});}if(live)setPoints(out);continueRender(handle);}catch(e){cancelRender(e);}};im.onerror=()=>cancelRender(new Error('Logo image failed'));im.src=src;return()=>{live=false;};},[src,seed,handle]);
 useLayoutEffect(()=>{const g=ref.current?.getContext('2d',{willReadFrequently:true});if(!g)return;g.clearRect(0,0,w,h);const angle=(1-p)*Math.PI*2.2,fade=ease(f/18)*(1-ease((f-118)/17));for(const q of [...points].sort((a,b)=>a.z-b.z)){const z=q.z*(1-p),x=q.x*Math.cos(angle)+z*Math.sin(angle),depth=-q.x*Math.sin(angle)+z*Math.cos(angle),scale=1/(1-depth*.65),px=w*.5+x*size*scale,py=cy+q.y*size*scale;g.fillStyle=withAlpha(q.a<.2?secondary:q.a<.6?primary:color,fade*(.45+.55*scale));g.beginPath();g.arc(px,py,s*.0032*scale,0,Math.PI*2);g.fill();}g.strokeStyle=withAlpha(primary,.2);g.lineWidth=s*.0015;g.beginPath();g.ellipse(w*.5,cy,size*.59,size*.59*.34,angle*.5,0,Math.PI*2);g.stroke();},[f,w,h,points,p,size,cy,s,primary,secondary,color]);
 return <AbsoluteFill style={{background:background==='transparent'?undefined:background}}><canvas ref={ref} width={w} height={h} style={{position:'absolute',inset:0}}/><div data-21st-slot="logo" style={{position:'absolute',left:(w-size)/2,top:cy-size/2,width:size,height:size,opacity:ease((f-118)/17)}}><Img src={src} style={{width:'100%',height:'100%',objectFit:'contain'}}/></div><div data-21st-slot="caption" style={{position:'absolute',left:w*.09,top:h*.83,width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:'center',opacity:ease((f-85)/45)}}>{caption}</div></AbsoluteFill>;
};
