// Built with Remotion - https://remotion.pro/license
import React,{useLayoutEffect,useRef,useState} from "react";
import type {z} from "zod";
import {AbsoluteFill,cancelRender,continueRender,delayRender,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {SAMPLE_SCREENSHOT} from "../_lib/samples";
import type {schema} from "./fresnel-lens-pass.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({screenshot,caption,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),canvas=useRef<HTMLCanvasElement>(null),[asset,setAsset]=useState<HTMLImageElement|null>(null),[handle]=useState(()=>delayRender("Fresnel screenshot"));
 useLayoutEffect(()=>{let alive=true;const image=new Image();image.crossOrigin="anonymous";image.onload=()=>{if(alive)setAsset(image);continueRender(handle);};image.onerror=()=>cancelRender(new Error("Fresnel screenshot could not load"));image.src=screenshot.trim()||SAMPLE_SCREENSHOT;return()=>{alive=false;};},[screenshot,handle]);
 const aspect=asset?asset.naturalWidth/asset.naturalHeight:1.6,iw=Math.min(w*.84,h*.64*aspect),ih=iw/aspect,ix=(w-iw)/2,iy=h*.43-ih/2;
 useLayoutEffect(()=>{const c=canvas.current?.getContext("2d",{willReadFrequently:true});if(!c||!asset)return;c.clearRect(0,0,w,h);const pass=ease((f-8)/113),r=Math.min(w,h)*(portrait?.35:.39),cx=w*(-.38+1.77*pass),cy=h*.43;
 c.save();c.beginPath();c.roundRect(ix,iy,iw,ih,Math.min(w,h)*.018);c.clip();c.globalAlpha=ease(f/18);c.drawImage(asset,ix,iy,iw,ih);c.fillStyle=withAlpha(primary,.07);c.fillRect(ix,iy,iw,ih);c.restore();
 if(f<129){c.save();c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.clip();const surface=background==="transparent"?primary:background;c.fillStyle=withAlpha(surface,.28);c.fillRect(cx-r,cy-r,2*r,2*r);const rings=19;
 for(let k=rings-1;k>=0;k--){const outer=r*(k+1)/rings,inner=r*k/rings,magnify=1.05+.19*(1-k/rings),dx=ix+(ix-cx)*(magnify-1),dy=iy+(iy-cy)*(magnify-1);c.save();c.beginPath();c.arc(cx,cy,outer,0,Math.PI*2);if(inner)c.arc(cx,cy,inner,0,Math.PI*2,true);c.clip("evenodd");c.drawImage(asset,dx,dy,iw*magnify,ih*magnify);c.strokeStyle=withAlpha(k%2?secondary:color,.24);c.lineWidth=Math.max(1,r*.003);c.beginPath();c.arc(cx,cy,outer,0,Math.PI*2);c.stroke();c.restore();}
 const sheen=c.createLinearGradient(cx-r,cy-r,cx+r,cy+r);sheen.addColorStop(0,withAlpha(secondary,.3));sheen.addColorStop(.28,withAlpha(color,.03));sheen.addColorStop(.51,withAlpha(color,.18));sheen.addColorStop(.55,withAlpha(color,0));sheen.addColorStop(1,withAlpha(primary,.18));c.fillStyle=sheen;c.fillRect(cx-r,cy-r,r*2,r*2);c.restore();c.strokeStyle=withAlpha(secondary,.55);c.lineWidth=Math.max(1,r*.007);c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.stroke();}
 },[f,w,h,portrait,asset,ix,iy,iw,ih,primary,secondary,color,background]);
 const font=fitFontSize({chars:caption.length,boxW:w*.80,boxH:h*.12,max:h*.042,min:h*.031,lines:2,charEm:.54,lineHeight:1.25});
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><div style={{position:"absolute",inset:w*.025,overflow:"hidden"}}><canvas data-21st-slot="screenshot" ref={canvas} width={w} height={h} style={{position:"absolute",left:-w*.025,top:-w*.025,width:w,height:h}}/></div><div data-21st-slot="caption" style={{position:"absolute",left:w*.1,top:h*.82,width:w*.8,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.25,color,textAlign:"center",opacity:ease((f-76)/42)}}>{caption}</div></AbsoluteFill>;
};
