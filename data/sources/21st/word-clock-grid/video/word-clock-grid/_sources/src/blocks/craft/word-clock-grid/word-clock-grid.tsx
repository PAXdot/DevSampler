// Built with Remotion - https://remotion.pro/license
import React,{useMemo} from "react";
import type {z} from "zod";
import {AbsoluteFill,useCurrentFrame} from "remotion";
import {brandFontStack,useLayout,withAlpha} from "../../../kit/index";
import {rng} from "../_lib/noise";
import type {schema} from "./word-clock-grid.schema";
const ease=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t);};
export const Component: React.FC<z.infer<typeof schema>>=({text,primary,secondary,color,background,fontFamily,seed})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),cols=portrait?11:17;
 const grid=useMemo(()=>{const random=rng(seed),words=text.trim().split(/\s+/).flatMap(word=>{const out:string[]=[];for(let i=0;i<word.length;i+=cols-2)out.push(word.slice(i,i+cols-2));return out;}).filter(Boolean),rows=Math.max(portrait?9:7,words.length+2),cells=Array.from({length:rows*cols},()=>({char:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(random()*26)]!,word:-1}));words.forEach((word,index)=>{const row=1+Math.floor(index*(rows-2)/Math.max(1,words.length)),start=Math.floor((cols-word.length)/2)+(index%2?0:1);for(let j=0;j<word.length;j++)cells[row*cols+start+j]={char:word[j]!,word:index};});return {cells,rows,wordCount:words.length};},[text,seed,cols,portrait]);
 const gw=w*.83,gh=h*.78,cw=gw/cols,ch=gh/grid.rows,font=Math.min(cw*.88,ch*.61),fade=ease(f/24),settle=ease((f-110)/25);
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}><div style={{position:"absolute",left:w*.085,top:h*.11,width:gw,height:gh,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.2,display:"grid",gridTemplateColumns:`repeat(${cols},1fr)`,gridTemplateRows:`repeat(${grid.rows},1fr)`,textAlign:"center",opacity:fade}}>
 {grid.cells.map((cell,i)=>{const p=cell.word<0?0:ease((f-26-cell.word*(75/Math.max(1,grid.wordCount)))/15),glint=Math.sin(p*Math.PI);return <div key={i} style={{display:"flex",alignItems:"center",justifyContent:"center",color:cell.word<0?withAlpha(color,.15-.08*settle):withAlpha(color,.15+.85*p),fontWeight:cell.word<0?400:600,textShadow:cell.word>=0&&p>0?`0 0 ${font*(.10+glint*.25)}px ${withAlpha(cell.word%2?secondary:primary,.30+glint*.4)}`:undefined,transform:`scale(${1+glint*.09})`}}><span data-21st-slot={cell.word>=0?"text":undefined} style={{lineHeight:1.25}}>{cell.char}</span></div>;})}
 </div><div style={{position:"absolute",left:w*.085,top:h*.11+gh*ease(f/110),height:h*.002,width:gw,background:withAlpha(primary,.6),opacity:(1-settle)*fade,boxShadow:`0 0 ${h*.012}px ${withAlpha(primary,.25)}`}}/></AbsoluteFill>;
};
