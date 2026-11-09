// Built with Remotion - https://remotion.pro/license
import React,{useMemo} from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {useLayout,withAlpha} from "../../../kit/index";
import {rng} from "../_lib/noise";
import {SAMPLE_LOGO} from "../_lib/samples";
import type {schema} from "./truchet-path-run.schema";
const ease=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export const Component:React.FC<z.infer<typeof schema>>=({logo,primary,secondary,color,background,seed})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),cols=portrait?10:18,rows=portrait?16:10,cell=Math.min(w*.88/cols,h*.82/rows),gw=cols*cell,gh=rows*cell,left=(w-gw)/2,top=(h-gh)/2,mid=Math.floor(rows/2),stop=Math.floor(cols/2)-1,cx=gw/2,cy=gh/2,mark=Math.min(w,h)*.18;
 const plan=useMemo(()=>{const random=rng(seed),tiles=Array.from({length:cols*rows},()=>({orientation:random()<.5?0:1,initial:random()<.5?0:1,jitter:random()*10})),path:string[]=[];let lastX=0,lastY=(mid+1.5)*cell;path.push(`M ${lastX} ${lastY}`);
 // Each pair of arcs shares an edge exactly. Alternate north/south turns to
 // solve a continuous serpentine route from the left boundary into the mark.
 for(let col=0;col<stop;col++){const up=col%2===0,r=up?mid+1:mid;tiles[r*cols+col]!.orientation=up?1:0;tiles[(up?r-1:r+1)*cols+col]!.orientation=up?1:0;const edgeX=(col+.5)*cell,edgeY=(up?r:r+1)*cell,endX=(col+1)*cell,endY=(up?r-.5:r+1.5)*cell;path.push(`Q ${col*cell} ${edgeY} ${edgeX} ${edgeY} Q ${endX} ${edgeY} ${endX} ${endY}`);lastX=endX;lastY=endY;}
 path.push(`Q ${cx-cell*.55} ${lastY} ${cx-mark*.25} ${cy}`);return {tiles,path:path.join(" ")};},[cols,rows,cell,mid,stop,cx,cy,mark,seed]);
 const progress=ease((f-72)/63),arrival=ease((f-103)/32),blank=mark*.70;
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><svg width={w} height={h} style={{position:"absolute",inset:0}}><g transform={`translate(${left} ${top})`} opacity={ease(f/18)}>
 {plan.tiles.map((tile,i)=>{const col=i%cols,row=Math.floor(i/cols),settle=ease((f-(col+row)*1.8-tile.jitter)/45),rotation=(tile.initial+(tile.orientation-tile.initial)*settle)*90,tx=(col+.5)*cell,ty=(row+.5)*cell,inside=Math.hypot(tx-cx,ty-cy)<blank+cell*.55;if(inside)return null;return <g key={i} transform={`translate(${tx} ${ty}) rotate(${rotation}) translate(${-cell/2} ${-cell/2})`}><path d={`M ${cell/2} 0 A ${cell/2} ${cell/2} 0 0 0 ${cell} ${cell/2} M 0 ${cell/2} A ${cell/2} ${cell/2} 0 0 1 ${cell/2} ${cell}`} fill="none" stroke={withAlpha(primary,.48)} strokeWidth={cell*.045} strokeLinecap="round"/></g>;})}
 <path d={plan.path} fill="none" stroke={withAlpha(secondary,.16)} strokeWidth={cell*.19} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1-progress}/><path d={plan.path} fill="none" stroke={secondary} strokeWidth={cell*.065} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1-progress}/>
 <circle cx={cx} cy={cy} r={blank} fill="none" stroke={withAlpha(primary,.65)} strokeWidth={cell*.045} pathLength={1} strokeDasharray={1} strokeDashoffset={1-arrival}/></g></svg><div data-21st-slot="logo" style={{position:"absolute",left:w/2-mark/2,top:h/2-mark/2,width:mark,height:mark,opacity:arrival,transform:`scale(${.9+.1*arrival})`}}><Img src={logo||SAMPLE_LOGO} style={{width:"100%",height:"100%",objectFit:"contain"}}/></div></AbsoluteFill>;
};
