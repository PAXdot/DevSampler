// Built with Remotion - https://remotion.pro/license

import React,{useLayoutEffect,useMemo,useRef,useState} from "react";
import type {z} from "zod";
import {AbsoluteFill,cancelRender,continueRender,delayRender,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha,luminance} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./halftone-dot-wave.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({image,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),ref=useRef<HTMLCanvasElement>(null),[asset,setAsset]=useState<HTMLImageElement|null>(null),[handle]=useState(()=>delayRender("halftone photograph")),iw=w*.84,ih=h*(portrait?.65:.67),ix=w*.08,iy=h*.09;
 useLayoutEffect(()=>{let live=true;const img=new Image();img.crossOrigin="anonymous";img.onload=()=>{if(live)setAsset(img);continueRender(handle);};img.onerror=()=>cancelRender(new Error("halftone image failed"));img.src=image||SAMPLE_SCREENSHOT;return()=>{live=false;};},[image,handle]);
 const dots=useMemo(()=>{if(!asset)return [];const c=document.createElement("canvas"),cols=110,rows=Math.round(cols*ih/iw);c.width=cols;c.height=rows;const ctx=c.getContext("2d",{willReadFrequently:true})!;const ratio=Math.max(cols/asset.naturalWidth,rows/asset.naturalHeight);ctx.drawImage(asset,(cols-asset.naturalWidth*ratio)/2,(rows-asset.naturalHeight*ratio)/2,asset.naturalWidth*ratio,asset.naturalHeight*ratio);const data=ctx.getImageData(0,0,cols,rows).data,out=[];for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){const i=(y*cols+x)*4,v=(data[i]!*.2126+data[i+1]!*.7152+data[i+2]!*.0722)/255;out.push({x:(x+.5)*iw/cols,y:(y+.5)*ih/rows,v,step:iw/cols});}return out;},[asset,iw,ih]);
 useLayoutEffect(()=>{const c=ref.current?.getContext("2d",{willReadFrequently:true});if(!c)return;c.clearRect(0,0,w,h);const lightInk=luminance(color)>.45,paper=background==="transparent"?`color-mix(in srgb,${color} ${lightInk?5:8}%,${secondary})`:background;c.fillStyle=paper;c.fillRect(ix,iy,iw,ih);for(const d of dots){const wave=ease((f-8-d.x/iw*65-d.y/ih*16)/34),tone=lightInk?d.v:1-d.v,r=d.step*.58*Math.sqrt(Math.max(.02,tone))*wave;c.fillStyle=d.x/iw>.65?`color-mix(in srgb,${color} 78%,${primary})`:color;c.beginPath();c.arc(ix+d.x,iy+d.y,r,0,Math.PI*2);c.fill();}c.strokeStyle=withAlpha(secondary,.8);c.lineWidth=w*.003;c.strokeRect(ix,iy,iw,ih);},[f,w,h,ix,iy,iw,ih,dots,color,primary,secondary,background]);
 const font=fitFontSize({chars:caption.length,boxW:w*.82,boxH:h*.14,max:h*.045,min:h*.032,lines:2,charEm:.54});
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><canvas data-21st-slot="image" ref={ref} width={w} height={h} style={{position:"absolute",inset:0}}/><div data-21st-slot="caption" style={{position:"absolute",left:w*.09,top:h*.83,width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,textAlign:"center",color,opacity:ease((f-100)/35)}}>{caption}</div></AbsoluteFill>;
};
