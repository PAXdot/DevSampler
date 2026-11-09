// Built with Remotion - https://remotion.pro/license
import React,{useLayoutEffect,useMemo,useRef,useState} from "react";
import type {z} from "zod";
import {AbsoluteFill,cancelRender,continueRender,delayRender,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {rng} from "../_lib/noise";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./ascii-resolve.schema";
const ease=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t);};
export const Component: React.FC<z.infer<typeof schema>>=({screenshot,caption,primary,secondary,color,background,fontFamily,seed})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),canvas=useRef<HTMLCanvasElement>(null),[asset,setAsset]=useState<HTMLImageElement|null>(null),[handle]=useState(()=>delayRender("ASCII image and font"));
 useLayoutEffect(()=>{let alive=true;const img=new Image();img.crossOrigin="anonymous";img.onload=()=>{document.fonts.ready.then(()=>{if(alive)setAsset(img);continueRender(handle);}).catch(error=>cancelRender(error));};img.onerror=()=>cancelRender(new Error("ASCII screenshot could not load"));img.src=screenshot.trim()||SAMPLE_SCREENSHOT;return()=>{alive=false;};},[screenshot,handle]);
 const cols=portrait?64:112,aspect=asset?asset.naturalWidth/asset.naturalHeight:1.6,rows=Math.max(12,Math.round(cols/aspect*.57));
 const pixels=useMemo(()=>{if(!asset)return null;const c=document.createElement("canvas");c.width=cols;c.height=rows;const ctx=c.getContext("2d",{willReadFrequently:true});if(!ctx)return null;ctx.drawImage(asset,0,0,cols,rows);const data=ctx.getImageData(0,0,cols,rows).data,random=rng(seed);return Array.from({length:cols*rows},(_,i)=>({brightness:(data[i*4]!* .2126+data[i*4+1]!* .7152+data[i*4+2]!* .0722)/255,phase:random(),r:data[i*4]!,g:data[i*4+1]!,b:data[i*4+2]!}));},[asset,cols,rows,seed]);
 const iw=Math.min(w*.86,h*.64*aspect),ih=iw/aspect,ix=(w-iw)/2,iy=h*.43-ih/2,cw=iw/cols,ch=ih/rows;
 useLayoutEffect(()=>{const c=canvas.current?.getContext("2d",{willReadFrequently:true});if(!c||!asset||!pixels)return;c.clearRect(0,0,w,h);c.save();c.beginPath();c.roundRect(ix- w*.015,iy-w*.015,iw+w*.03,ih+w*.03,Math.min(w,h)*.018);c.clip();c.fillStyle=withAlpha(primary,.10);c.fillRect(ix-w*.015,iy-w*.015,iw+w*.03,ih+w*.03);
 const show=ease((f-75)/55)*.24;c.globalAlpha=show;c.drawImage(asset,ix,iy,iw,ih);c.globalAlpha=1-show;c.font=`500 ${ch*.94}px ${brandFontStack(fontFamily)}`;c.textAlign="center";c.textBaseline="middle";const chars=" .:-=+*#%@";
 for(let i=0;i<pixels.length;i++){const p=pixels[i]!,x=i%cols,y=Math.floor(i/cols),enter=ease((f-8-p.phase*23-y*.16)/18);if(!enter)continue;c.globalAlpha=(1-show)*enter;c.fillStyle=p.brightness>.52?color:p.brightness>.26?primary:withAlpha(secondary,.40);const target=Math.floor(p.brightness*(chars.length-1)),glyph=f<40?chars[(Math.floor(f/3)+i*7)%chars.length]:chars[target];c.fillText(glyph!,ix+(x+.5)*cw,iy+(y+.5)*ch);}
 c.globalAlpha=1;c.strokeStyle=withAlpha(primary,.4);c.lineWidth=Math.max(1,h*.001);c.strokeRect(ix-w*.014,iy-w*.014,iw+w*.028,ih+w*.028);if(f<129){const scan=iy+ih*ease((f-65)/64);c.fillStyle=withAlpha(secondary,.45*(1-ease((f-115)/14)));c.fillRect(ix,scan,iw,Math.max(1,ch*.14));}c.restore();},[f,w,h,asset,pixels,iw,ih,ix,iy,cw,ch,cols,primary,secondary,color,fontFamily]);
 const font=fitFontSize({chars:caption.length,boxW:w*.80,boxH:h*.12,max:h*.04,min:h*.031,lines:2,charEm:.58,lineHeight:1.25});
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><canvas data-21st-slot="screenshot" ref={canvas} width={w} height={h} style={{position:"absolute",inset:0,width:w,height:h}}/><div data-21st-slot="caption" style={{position:"absolute",left:w*.1,top:h*.82,width:w*.80,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,textAlign:"center",color,opacity:ease((f-93)/30)}}>{caption}</div></AbsoluteFill>;
};
