// Built with Remotion - https://remotion.pro/license
import React,{useLayoutEffect,useRef} from 'react';
import type {z} from 'zod';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {brandFontStack,fitFontSize,useLayout,withAlpha} from '../../../kit/index';
import type {schema} from './foil-seal-number.schema';
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({value,label,primary,secondary,color,background,fontFamily})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),ref=useRef<HTMLCanvasElement>(null),s=Math.min(w,h),size=s*(portrait?.82:.73),p=ease((f-2)/128),cx=w*.5,cy=h*(portrait?.40:.43),txt=value.toLocaleString('en-US'),vf=fitFontSize({chars:txt.length,boxW:size*.74,boxH:size*.23,max:size*.21,min:h*(portrait?.04:.035),lines:1,charEm:.63}),lf=fitFontSize({chars:label.length,boxW:w*.82,boxH:h*.15,max:h*(portrait?.040:.044),min:h*.032,lines:2,charEm:.55}),scaleX=.10+.90*ease((f-12)/110);
 useLayoutEffect(()=>{
  const g=ref.current?.getContext('2d',{willReadFrequently:true});if(!g)return;
  g.clearRect(0,0,w,h);g.save();g.translate(cx,cy);g.rotate((1-p)*-22*Math.PI/180);g.scale(scaleX,1);const r=size/2;
  g.fillStyle=withAlpha(color,.21);g.beginPath();g.ellipse(s*.018,s*.025,r,r,0,0,Math.PI*2);g.fill();
  const metal=g.createConicGradient((-100+125*p-90)*Math.PI/180,0,0);[[0,primary],[.25,secondary],[.5,primary],[.75,secondary],[1,primary]].forEach(([at,tone])=>metal.addColorStop(at as number,tone as string));g.fillStyle=metal;g.beginPath();g.arc(0,0,r,0,Math.PI*2);g.fill();
  for(const [radius,width,ink] of [[r-size*.010,size*.020,withAlpha(color,.35)],[r-size*.0275,size*.015,withAlpha(secondary,.65)],[size*.43,size*.0035,withAlpha(color,.45)],[size*.39,size*.0045,withAlpha(secondary,.65)]] as [number,number,string][]){g.strokeStyle=ink;g.lineWidth=width;g.beginPath();g.arc(0,0,radius,0,Math.PI*2);g.stroke();}
  g.strokeStyle=withAlpha(color,.48);g.lineWidth=size*.004;for(let i=0;i<90;i++){const a=i/90*Math.PI*2;g.beginPath();g.moveTo(Math.cos(a)*size*.45,Math.sin(a)*size*.45);g.lineTo(Math.cos(a)*size*.47,Math.sin(a)*size*.47);g.stroke();}
  g.strokeStyle=withAlpha(color,.36);g.lineWidth=size*.013;for(const side of [-1,1]){g.beginPath();g.moveTo(-size*.25,side*size*.19);g.quadraticCurveTo(0,side*size*.30,size*.25,side*size*.19);g.stroke();}g.restore();
 },[f,w,h,s,size,p,cx,cy,scaleX,primary,secondary,color]);
 return <AbsoluteFill style={{background:background==='transparent'?undefined:background}}><canvas ref={ref} width={w} height={h} style={{position:'absolute',inset:0}}/><div data-21st-slot="value" style={{position:'absolute',left:cx-size*.37,top:cy-vf*.60,width:size*.74,fontFamily:brandFontStack(fontFamily),fontWeight:900,fontSize:vf,lineHeight:1.2,color,textAlign:'center',fontVariantNumeric:'tabular-nums',textShadow:`0 ${size*.003}px 0 ${withAlpha(secondary,.8)}`,opacity:ease((f-82)/48)}}>{txt}</div><div data-21st-slot="label" style={{position:'absolute',left:w*.09,top:h*(portrait?.82:.83),width:w*.82,fontFamily:brandFontStack(fontFamily),fontSize:lf,lineHeight:1.25,color,textAlign:'center',opacity:ease((f-96)/38)}}>{label}</div></AbsoluteFill>;
};
