// Built with Remotion - https://remotion.pro/license
import React,{useId,useMemo} from "react";
import type {z} from "zod";
import {AbsoluteFill,Img,useCurrentFrame} from "remotion";
import {brandFontStack,fitFontSize,useLayout,withAlpha} from "../../../kit/index";
import {rng} from "../_lib/noise";
import {SAMPLE_LOGO} from "../_lib/samples";
import type {schema} from "./crown-splash-logo.schema";
const ease=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t);};
export const Component: React.FC<z.infer<typeof schema>>=({logo,caption,primary,secondary,color,background,fontFamily,seed})=>{
 const f=Math.min(135,useCurrentFrame()),{width:w,height:h,portrait}=useLayout(),S=Math.min(w,h),id=useId().replace(/:/g,""),cx=w/2,cy=h*(portrait?.57:.65),R=portrait?w*.32:S*.29,ry=portrait?.76:.32;
 const rise=ease((f-34)/22),sink=ease((f-78)/43),height=h*(portrait?.14:.22)*rise*(1-sink),radius=R*(.18+.82*ease((f-34)/48)),opacity=ease((f-32)/7);
 const beadParams=useMemo(()=>{const random=rng(seed);return Array.from({length:28},(_,i)=>({a:i/28*Math.PI*2+(random()-.5)*.14,speed:.75+random()*.4,size:.003+random()*.004,delay:random()*9}));},[seed]);
 const point=(theta:number,base=false):[number,number]=>{const spike=Math.pow((Math.cos(theta*14+.3)+1)/2,3),lift=height*(.43+.57*spike);return [cx+Math.cos(theta)*radius,cy+Math.sin(theta)*radius*ry-(base?0:lift)];};
 const wall=(start:number,end:number)=>{const pts:[number,number][]=[];for(let i=0;i<=120;i++)pts.push(point(start+(end-start)*i/120));for(let i=120;i>=0;i--)pts.push(point(start+(end-start)*i/120,true));return `M ${pts.map(p=>p.join(" ")).join(" L ")} Z`;};
 const rim=(start:number,end:number)=>`M ${Array.from({length:121},(_,i)=>point(start+(end-start)*i/120).join(" ")).join(" L ")}`;
 const logoIn=ease((f-46)/30),size=S*(portrait?.47:.36),font=fitFontSize({chars:caption.length,boxW:w*.78,boxH:h*.12,max:h*.043,min:h*.031,lines:2,charEm:.52,lineHeight:1.2});
 return <AbsoluteFill style={{background:background==="transparent"?undefined:background}}>
 <svg width={w} height={h} style={{position:"absolute",inset:0}}><defs><linearGradient id={`${id}a`} x1="0" y1="0" x2=".75" y2="1"><stop stopColor={withAlpha(secondary,.88)}/><stop offset=".40" stopColor={withAlpha(primary,.80)}/><stop offset=".85" stopColor={withAlpha(primary,.25)}/><stop offset="1" stopColor={withAlpha(color,.45)}/></linearGradient><linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1"><stop stopColor={withAlpha(color,.72)}/><stop offset=".10" stopColor={withAlpha(secondary,.82)}/><stop offset=".30" stopColor={withAlpha(primary,.56)}/><stop offset="1" stopColor={withAlpha(primary,.12)}/></linearGradient></defs>
 {[0,1,2,3,4].map(i=>{const r=R*(1.02+i*.12)*(.6+.4*ease((f-34-i*6)/65));return <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r*ry} fill="none" stroke={withAlpha(i%2?primary:secondary,(.34-i*.035)*opacity)} strokeWidth={S*(i===0?.004:.0014)}/>;})}
 <ellipse cx={cx} cy={cy} rx={radius} ry={radius*ry} fill={withAlpha(primary,.07*opacity)}/>
 <g opacity={opacity}><path d={wall(Math.PI,Math.PI*2)} fill={`url(#${id}a)`}/><path d={rim(Math.PI,Math.PI*2)} fill="none" stroke={withAlpha(color,.72)} strokeWidth={S*.0025}/></g>
 </svg>
 <div data-21st-slot="logo" style={{position:"absolute",left:cx-size/2,top:cy-size*.94-height*.18,width:size,height:size,opacity:logoIn,transform:`translateY(${(1-logoIn)*h*.06}px) scale(${.86+.14*logoIn})`}}><Img src={logo.trim()||SAMPLE_LOGO} style={{width:"100%",height:"100%",objectFit:"contain"}}/></div>
 <svg width={w} height={h} style={{position:"absolute",inset:0}}><g opacity={opacity}><path d={wall(0,Math.PI)} fill={`url(#${id}b)`}/><path d={rim(0,Math.PI)} fill="none" stroke={withAlpha(color,.8)} strokeWidth={S*.003}/>{[0,1,2,3,4,5,6,7].map(i=>{const a=(i+.5)/8*Math.PI,p=point(a),q=point(a,true);return <path key={i} d={`M ${p[0]} ${p[1]+S*.008} Q ${(p[0]+q[0])/2+S*.008} ${(p[1]+q[1])/2} ${q[0]} ${q[1]}`} fill="none" stroke={withAlpha(secondary,.30)} strokeWidth={S*.004}/>;})}</g>
 {beadParams.map((b,i)=>{const t=(f-52-b.delay)/45;if(t<0||t>1.6)return null;const dist=R*(.65+t*b.speed*.85),x=cx+Math.cos(b.a)*dist,y=cy+Math.sin(b.a)*dist*ry-h*(portrait?.18:.27)*(t*2.6-t*t*2.3);return <ellipse key={i} cx={x} cy={y} rx={S*b.size} ry={S*b.size*(1.4-.7*ease(t))} fill={withAlpha(i%2?secondary:primary,1-ease((t-1)/.5))} stroke={withAlpha(color,.4)} strokeWidth={S*.0008}/>;})}
 {f<34?<ellipse cx={cx} cy={h*.12+(cy-h*.12)*Math.pow(f/34,2)} rx={S*.017} ry={S*.027} fill={primary} stroke={withAlpha(color,.7)} strokeWidth={S*.0015}/>:null}
 </svg>
 <div data-21st-slot="caption" style={{position:"absolute",left:w*.11,top:h*(portrait?.86:.85),width:w*.78,fontFamily:brandFontStack(fontFamily),fontSize:font,lineHeight:1.2,textAlign:"center",color,opacity:ease((f-87)/29)}}>{caption}</div>
 </AbsoluteFill>;
};
