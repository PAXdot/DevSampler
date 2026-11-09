// Built with Remotion - https://remotion.pro/license

import React,{useLayoutEffect,useRef,useState} from "react";
import type {z} from "zod";
import {AbsoluteFill,cancelRender,continueRender,delayRender,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./aperture-grid-reveal.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({image,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),ref=useRef<HTMLCanvasElement>(null),[asset,setAsset]=useState<HTMLImageElement|null>(null),[handle]=useState(()=>delayRender("iris image")),iw=w*.86,ih=h*.70,ix=w*.07,iy=h*.07,cols=portrait?3:5,rows=portrait?5:3;
 useLayoutEffect(()=>{let live=true;const img=new Image();img.crossOrigin="anonymous";img.onload=()=>{if(live)setAsset(img);continueRender(handle);};img.onerror=()=>cancelRender(new Error("iris image failed"));img.src=image||SAMPLE_SCREENSHOT;return()=>{live=false;};},[image,handle]);
 useLayoutEffect(()=>{const c=ref.current?.getContext("2d",{willReadFrequently:true});if(!c||!asset)return;c.clearRect(0,0,w,h);const cw=iw/cols,ch=ih/rows,ratio=Math.max(iw/asset.naturalWidth,ih/asset.naturalHeight),dx=ix+(iw-asset.naturalWidth*ratio)/2,dy=iy+(ih-asset.naturalHeight*ratio)/2;
 for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const open=ease((f-8-(x+y)*5)/70),fade=1-ease((f-92)/43),cx=ix+(x+.5)*cw,cy=iy+(y+.5)*ch,r=Math.hypot(cw,ch)*.57*open;c.save();c.beginPath();c.rect(ix+x*cw+1,iy+y*ch+1,cw-2,ch-2);c.clip();c.fillStyle=withAlpha(primary,.13);c.fillRect(ix+x*cw,iy+y*ch,cw,ch);c.save();c.beginPath();for(let k=0;k<8;k++){const a=k*Math.PI/4+(1-open)*.8,px=cx+Math.cos(a)*r,py=cy+Math.sin(a)*r;k?c.lineTo(px,py):c.moveTo(px,py);}c.closePath();c.clip();c.drawImage(asset,dx,dy,asset.naturalWidth*ratio,asset.naturalHeight*ratio);c.restore();for(let k=0;k<8;k++){const a=k*Math.PI/4+(1-open)*.8;c.strokeStyle=withAlpha(k%2?color:secondary,.58*fade);c.lineWidth=Math.max(1,w*.0016);c.beginPath();c.moveTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);c.lineTo(cx+Math.cos(a+.55)*Math.hypot(cw,ch),cy+Math.sin(a+.55)*Math.hypot(cw,ch));c.stroke();}c.restore();}c.strokeStyle=withAlpha(secondary,.65);c.lineWidth=w*.002;c.strokeRect(ix,iy,iw,ih);
 },[f,w,h,asset,iw,ih,ix,iy,cols,rows,primary,secondary,color]);
 const font=fitFontSize({chars:caption.length,boxW:w*.84,boxH:h*.15,max:h*.044,min:h*.032,lines:2,charEm:.54});
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><canvas data-21st-slot="image" ref={ref} width={w} height={h} style={{position:"absolute",inset:0}}/><div data-21st-slot="caption" style={{position:"absolute",left:w*.08,top:h*.84,width:w*.84,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:"center",opacity:ease((f-96)/35)}}>{caption}</div></AbsoluteFill>;
};
