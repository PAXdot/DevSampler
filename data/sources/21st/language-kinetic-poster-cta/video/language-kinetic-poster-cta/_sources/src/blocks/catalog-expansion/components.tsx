// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig } from "remotion";
import { loadBrandFont } from "../../kit/brand-fonts";
import { useLayout } from "../../kit/hooks";
import { luminance, withAlpha } from "../../kit/index";
import { resolveFontRoles } from "../../kit/font-roles";
import { VIDEO_LANGUAGE_BY_ID } from "../../languages/index";
import type { ExpansionProps, ExpansionJob, ExpansionLanguage } from "./specs";

type Stage = ReturnType<typeof useStage>;
const clamp = (x:number) => Math.max(0,Math.min(1,x));
const ease = (x:number) => 1-Math.pow(1-clamp(x),3);
function useStage(p:ExpansionProps) {
 const {width,height,aspect}=useLayout(); const frame=useCurrentFrame(); const {durationInFrames}=useVideoConfig();
 const portrait=aspect === "9:16", square=aspect === "1:1";
 const w=width*.84,h=height*.82, f=Math.min(width,height), beat=Math.min(72,durationInFrames*.7)*(p.motion === "punchy"?.8:1);
 return {p,width,height,w,h,f,portrait,square,frame,progress:clamp(frame/beat),reveal:(i=0)=>ease((frame-i*9)/Math.max(16,beat-i*9)),body:Math.max(height*.031,f*.036),title:portrait?width*.115:square?width*.085:height*.12};
}
const Canvas:React.FC<{s:Stage;children:React.ReactNode}>=({s,children})=><AbsoluteFill style={{color:s.p.ink,background:s.p.paintBackground?s.p.paper:undefined,fontFamily:loadBrandFont(s.p.bodyFont),overflow:"hidden"}}><div style={{position:"absolute",left:s.width*.08,top:s.height*.09,width:s.w,height:s.h}}>{children}</div></AbsoluteFill>;
const Text:React.FC<{s:Stage;children:React.ReactNode;slot?:string;display?:boolean;size?:number;style?:React.CSSProperties}>=({s,children,slot,display,size,style})=><div data-21st-slot={slot} style={{fontFamily:loadBrandFont(display?s.p.displayFont:s.p.bodyFont),fontSize:size??(display?s.title:s.body),lineHeight:1.3,overflowWrap:"anywhere",...style}}>{children}</div>;
const Screenshot:React.FC<{s:Stage;style?:React.CSSProperties}>=({s,style})=>s.p.screenshot?<Img src={s.p.screenshot} style={{width:"100%",height:"100%",objectFit:"contain",...style}}/>:null;
const Mark:React.FC<{src?:string;color:string;size:number}>=({src,color,size})=>src?<div style={{width:size,height:size,background:color,maskImage:`url("${src}")`,WebkitMaskImage:`url("${src}")`,maskRepeat:"no-repeat",maskSize:"contain",maskPosition:"center",flexShrink:0}}/>:null;
const Rule:React.FC<{s:Stage;x?:number;y?:number;vertical?:boolean;length?:number;index?:number}>=({s,x=0,y=0,vertical=false,length=1,index=0})=><div style={{position:"absolute",left:x*s.w,top:y*s.h,width:vertical?1:s.w*length*s.reveal(index),height:vertical?s.h*length*s.reveal(index):1,background:s.p.accent,transformOrigin:"top left"}}/>;
const Sketch:React.FC<{s:Stage;path:string;index?:number;width?:number;style?:React.CSSProperties;fill?:string}>=({s,path,index=0,width=6,style,fill="none"})=><svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"visible",...style}}><path d={path} fill={fill} stroke={s.p.accent} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1-s.reveal(index)}/></svg>;
const Device:React.FC<{s:Stage;sketch?:boolean;pixel?:boolean;style?:React.CSSProperties}>=({s,sketch,pixel,style})=>{
 const deviceH=s.h*.84,deviceW=Math.min(s.w*.76,deviceH*.54);
 return <div data-21st-device-shell style={{position:"absolute",width:deviceW,height:deviceH,left:(s.w-deviceW)/2,top:"5%",border:`${pixel?6:3}px solid ${s.p.ink}`,background:s.p.paper,borderRadius:pixel?0:sketch?"4% 7% 5% 8%":"8%",boxSizing:"border-box",...style}}>
  <div style={{position:"absolute",left:"37%",top:"4%",width:"20%",height:s.f*.004,background:s.p.ink,borderRadius:s.f*.005}}/>
  <div style={{position:"absolute",left:"63%",top:"3.8%",width:s.f*.007,height:s.f*.007,background:s.p.ink,borderRadius:"50%"}}/>
  <div style={{position:"absolute",inset:"10% 5% 9%",border:`1px solid ${s.p.ink}`,borderRadius:"2%",overflow:"hidden"}}><Screenshot s={s}/></div>
  <div style={{position:"absolute",left:"32%",bottom:"4%",width:"36%",height:s.f*.004,background:s.p.ink,borderRadius:s.f*.005}}/>
  <div style={{position:"absolute",right:-s.f*.006,top:"24%",width:s.f*.006,height:"11%",background:s.p.ink}}/>
 </div>;
};
const codeLines=(p:ExpansionProps)=>[p.command??"",p.from??"",p.to??""];
const words=(text:string)=>text.split(/\s+/).filter(Boolean);
function languageProps(language:ExpansionLanguage,p:ExpansionProps):ExpansionProps {
 const fonts=resolveFontRoles({heading:p.displayFont,display:p.displayFont,body:p.bodyFont,numerals:p.numeralsFont,serif:p.displayFont,mono:p.numeralsFont,accent:p.displayFont},VIDEO_LANGUAGE_BY_ID[language]?.type);
 return {...p,displayFont:fonts.display,bodyFont:fonts.body,numeralsFont:fonts.numerals};
}
/** Editorial paper is always the lighter brand role with the darker one as ink, whichever way the brand is set. */
function onPaper(p:ExpansionProps):ExpansionProps {
 const light=luminance(p.paper)>=luminance(p.ink)?p:{...p,paper:p.ink,ink:p.paper};
 // The brand accent tints the sheet, so two brands with near-white roles still read as different papers.
 return {...light,paper:`color-mix(in srgb, ${light.paper} 80%, ${p.accent})`};
}
/** A paper sheet under the inset; the frame corners stay transparent. */
const PaperSheet:React.FC<{s:Stage}>=({s})=>{const m=s.f*.035;return <div data-21st-paper-sheet aria-hidden style={{position:"absolute",left:-m,top:-m,width:s.w+m*2,height:s.h+m*2,background:s.p.paper,boxShadow:`0 ${s.f*.012}px ${s.f*.05}px ${withAlpha(s.p.ink,.28)}`}}><PaperGrain s={s} opacity={.1}/></div>;};
/** Fixed-seed ink texture is clipped to the paper inset, preserving transparent frame corners. */
const PaperGrain:React.FC<{s:Stage;opacity?:number}>=({s,opacity=.18})=>{
 const id=React.useId().replace(/:/g,"");
 return <svg data-21st-paper-grain aria-hidden viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",opacity}}>
  <defs><filter id={id} x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".58" numOctaves={3} seed={21} stitchTiles="stitch" result="grain"/><feColorMatrix in="grain" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0" result="grainAlpha"/><feComposite in="SourceGraphic" in2="grainAlpha" operator="in"/></filter></defs>
  <rect width="100%" height="100%" fill={s.p.ink} filter={`url(#${id})`}/>
 </svg>;
};
const NoteNumber:React.FC<{s:Stage;value:number;style:React.CSSProperties}>=({s,value,style})=><Text s={s} size={s.body} style={{position:"absolute",fontVariantNumeric:"oldstyle-nums",...style}}><span data-21st-numbered-note>{String(value).padStart(2,"0")}</span></Text>;

/** Paper is a static ruled spread, including real image plates and editorial notes. */
const Editorial:React.FC<{s:Stage;job:ExpansionJob}>=({s,job})=>{
 const {p}=s; const columns=s.portrait?1:3;
 const line=(y:number,index=0)=><Rule s={s} y={y} index={index}/>;
 if(job === "backgrounds") return <>{Array.from({length:p.density??7},(_,i)=><React.Fragment key={i}>{line((i+1)/((p.density??7)+1),i*.2)}<div style={{position:"absolute",left:"7%",top:0,width:1,height:s.h,background:p.ink,opacity:.12}}/></React.Fragment>)}</>;
 if(job === "titles") {
  const phraseWidth=s.portrait?s.w:s.w*.9;
  const phraseSize=Math.max(s.body,Math.min(s.title*1.5,Math.sqrt(phraseWidth*s.h*.55/(Math.max(1,p.phrase?.length??1)*.9*1.4))));
  return <>{line(.08)}<Text s={s} slot="kicker" size={s.body} style={{position:"absolute",top:"1%",left:0}}>{p.kicker}</Text><Text s={s} display slot="phrase" size={phraseSize} style={{position:"absolute",top:"21%",width:phraseWidth,lineHeight:1.35,transform:`translateY(${(1-s.reveal())*30}px)`,opacity:s.reveal()}}>{p.phrase}</Text>{line(.82,2)}<Text s={s} size={s.body} style={{position:"absolute",top:"86%",fontVariantNumeric:"oldstyle-nums"}}>01 /</Text></>;
 }
 if(job === "product-ui") return <>{line(.02)}<div style={{position:"absolute",left:0,top:"8%",width:s.portrait?"100%":"60%",height:s.portrait?"61%":"86%",clipPath:`inset(${(1-s.reveal())*100}% 0 0 0)`}}><Screenshot s={s}/></div><NoteNumber s={s} value={1} style={{left:s.portrait?0:"64%",top:s.portrait?"70%":"9%"}}/><div style={{position:"absolute",left:s.portrait?0:"64%",top:s.portrait?"75%":"18%",width:s.portrait?"100%":"36%"}}><Text s={s} display slot="action" size={s.portrait?s.title*.8:s.title*.6} style={{overflowWrap:"normal",lineHeight:1.4}}>{p.action}</Text><div style={{height:s.body*.75}}/><Text s={s} slot="detail" style={{overflowWrap:"normal",lineHeight:1.4}}>{p.detail}</Text></div><Rule s={s} vertical x={s.portrait?.02:.62} y={s.portrait?.7:.09} length={s.portrait?.05:.8}/></>;
 if(job === "devices") return <>{line(.06)}{!s.portrait&&<Text s={s} display size={s.title*.8} style={{position:"absolute",left:0,top:"13%",color:p.accent,fontVariantNumeric:"oldstyle-nums"}}>01</Text>}<Device s={s} style={{borderRadius:0,borderWidth:1,transform:`translateY(${(1-s.reveal())*s.h*.2}px)`}}/><Text s={s} display slot="deviceName" size={s.body} style={{position:"absolute",top:"94%",left:0}}>Plate 01. {p.deviceName}</Text></>;
 if(job === "code") return <>{line(.03)}{codeLines(p).map((t,i)=><div key={i} style={{position:"absolute",left:0,top:`${14+i*25}%`,width:"100%",opacity:s.reveal(i)}}><Text s={s} slot={i===0?"command":i===1?"from":"to"} size={s.body*1.1} style={{fontFamily:loadBrandFont(p.numeralsFont),textDecoration:i===1&&s.reveal(3)>.6?"line-through":undefined}}>{t}</Text>{i===1&&<Text s={s} size={s.body} style={{fontStyle:"italic",color:p.accent,marginTop:s.body*.7}}>↓</Text>}</div>)}{line(.9,3)}</>;
 if(job === "process") return <>{line(.08)}{p.steps?.map((text,i)=><div key={i} style={{position:"absolute",top:`${20+i*21}%`,width:"100%",display:"flex",gap:s.body,opacity:s.reveal(i)}}><Text s={s} display size={s.body*1.5} style={{color:p.accent,fontVariantNumeric:"oldstyle-nums"}}>0{i+1}</Text><Text s={s} slot="steps" display size={s.body*1.3}>{text}</Text><Rule s={s} y={.8} length={.8} index={i}/></div>)}</>;
 if(job === "data") return <>{line(.06)}<div data-21st-data-header style={{position:"absolute",left:0,top:"15%",width:"100%",display:"flex",flexDirection:"column",gap:s.body*.6}}><Text s={s} display slot="value" size={Math.min(s.title*2.8,s.h*.27/1.3)} style={{fontFamily:loadBrandFont(p.numeralsFont),fontVariantNumeric:"oldstyle-nums"}}>{Math.round((p.value??0)*s.reveal())}</Text><Text s={s} slot="unitLabel">{p.unitLabel}</Text></div>{p.bars?.map((value,i)=><div key={i} style={{position:"absolute",left:0,top:`${64+i*9}%`,width:"100%",height:s.body,display:"flex",alignItems:"center",gap:s.body}}><Text s={s} size={s.body}>{value}</Text><div style={{width:`${value*s.reveal(i)*1.8}%`,height:1,background:p.accent}}/></div>)}</>;
 if(job === "logos") return <>{line(.08)}<div style={{position:"absolute",top:"20%",width:"100%",display:"grid",gridTemplateColumns:`repeat(${columns},1fr)`,gap:s.body*2}}>{p.logos?.map((logo,i)=><div key={i} style={{display:"flex",flexDirection:s.portrait?"row":"column",gap:s.body,alignItems:"center",opacity:s.reveal(i)}}><Mark src={logo.image} color={p.ink} size={s.body*2}/><Text s={s} display slot="logos">{logo.name}</Text></div>)}</div>{line(.8,3)}<Text s={s} slot="relationship" style={{position:"absolute",top:"86%"}}>{p.relationship}</Text></>;
 // Contact sheet: each photo sits in a brand-tinted mount under an accent rule, numbered as a plate.
 if(job === "gallery") return <>{line(.02)}<div style={{position:"absolute",top:"8%",width:"100%",height:"83%",display:"grid",gridTemplateColumns:`repeat(${columns},minmax(0,1fr))`,gridTemplateRows:s.portrait?"repeat(3,minmax(0,1fr))":"1fr",gap:s.body}}>{p.items?.map((item,i)=><div key={i} data-21st-plate={i} style={{minHeight:0,borderBottom:`${Math.max(2,s.f*.003)}px solid ${p.accent}`,display:"flex",flexDirection:s.portrait?"row":"column",gap:s.body*.7,opacity:s.reveal(i)}}>{item.image?<div style={{width:s.portrait?"52%":"100%",height:s.portrait?"90%":"70%",flexShrink:0,boxSizing:"border-box",padding:s.f*.022,background:`color-mix(in srgb, ${p.secondary} 50%, ${p.paper})`,borderTop:`${Math.max(3,s.f*.005)}px solid ${p.accent}`}}><Img src={item.image} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/></div>:<Text s={s} display size={s.title*1.4} style={{width:s.portrait?"30%":"100%",alignSelf:"center",color:p.accent}}>0{i+1}</Text>}<div style={{display:"flex",flexDirection:"column",gap:s.body*.2,alignSelf:s.portrait?"center":undefined}}>{item.image&&<Text s={s} display size={s.body*1.15} style={{color:p.accent,fontVariantNumeric:"oldstyle-nums",lineHeight:1}}><span data-21st-numbered-note>Pl. 0{i+1}</span></Text>}<Text s={s} slot="items" size={s.body}>{item.text}</Text></div></div>)}</div>{line(.97,3)}</>;
 if(job === "testimonials") return <>{line(.08)}<Text s={s} display style={{position:"absolute",top:"12%",fontSize:s.title*2,color:p.accent}}>“</Text><Text s={s} display slot="quote" size={s.portrait?s.title*.85:s.title*.75} style={{position:"absolute",top:"27%",left:"8%",width:"88%",opacity:s.reveal()}}>{p.quote}</Text><div style={{position:"absolute",top:"80%",width:"100%",borderTop:`1px solid ${p.ink}`,paddingTop:s.body*.6}}><Text s={s} slot="author">{p.author}</Text><Text s={s} slot="source" size={s.body} style={{marginTop:s.body*.5}}>{p.source}</Text></div></>;
 return <>{line(.06)}<Mark src={p.logo} color={p.ink} size={s.title*.8}/><Text s={s} display slot="action" style={{position:"absolute",top:"30%",width:"95%",fontSize:s.title*1.3,opacity:s.reveal()}}>{p.action}</Text>{line(.79,2)}<Text s={s} slot="url" style={{position:"absolute",top:"85%",fontSize:s.title*.65}}>{p.url} ↗</Text></>;
};

type Point = readonly [number,number];
/** The floor and every vertex of each solid use this one parallel projection. */
const isoProject=(u:number,v:number,z=0):Point=>[500+(u-v)*150,380+(u+v)*65-z];
const svgPoints=(points:readonly Point[])=>points.map(point=>point.join(",")).join(" ");
const IsoData:React.FC<{s:Stage}>=({s})=>{
 const {p}=s,top=s.portrait?.34:s.square?.36:.45,height=s.portrait?.62:s.square?.60:.51,depth=.6;
 const bars=p.bars??[],scale=300/Math.max(35,...bars),groundExtent=[-.15,2.65] as const;
 const columns=bars.map((value,i)=>{
  const u=i,v=2-i,z=value*scale*s.reveal(i);
  const base=[isoProject(u,v),isoProject(u+depth,v),isoProject(u+depth,v+depth),isoProject(u,v+depth)];
  const roof=[isoProject(u,v,z),isoProject(u+depth,v,z),isoProject(u+depth,v+depth,z),isoProject(u,v+depth,z)];
  return {value,base,roof,label:roof[0]!};
 });
 return <>
  <div data-21st-data-header style={{position:"absolute",top:"1%",width:"100%",display:"flex",flexDirection:"column",gap:s.body*.8}}><Text s={s} slot="value" display size={s.title*1.9} style={{fontFamily:loadBrandFont(p.numeralsFont),fontVariantNumeric:"tabular-nums",lineHeight:1.2}}>{Math.round((p.value??0)*s.reveal())}</Text><Text s={s} slot="unitLabel">{p.unitLabel}</Text></div>
  <div data-21st-isometric-ground style={{position:"absolute",top:top*s.h,width:s.w,height:height*s.h}}>
   <svg viewBox="0 0 1000 780" preserveAspectRatio="none" style={{position:"absolute",width:"100%",height:"100%"}}>
    <polygon data-21st-ground-plane points={svgPoints([isoProject(groundExtent[0],groundExtent[0]),isoProject(groundExtent[1],groundExtent[0]),isoProject(groundExtent[1],groundExtent[1]),isoProject(groundExtent[0],groundExtent[1])])} fill={p.paper} fillOpacity={.08} stroke={p.ink} strokeOpacity={.3} strokeWidth={1.5}/>
    {Array.from({length:6},(_,i)=>i*.5).map(t=><React.Fragment key={t}><polyline points={svgPoints([isoProject(t,groundExtent[0]),isoProject(t,groundExtent[1])])} fill="none" stroke={p.ink} strokeOpacity={.3}/><polyline points={svgPoints([isoProject(groundExtent[0],t),isoProject(groundExtent[1],t)])} fill="none" stroke={p.ink} strokeOpacity={.3}/></React.Fragment>)}
    {columns.map(({base,roof},i)=><g key={i} data-21st-cuboid={i} stroke={p.ink} strokeWidth={2} strokeLinejoin="round">
     <polygon data-21st-cuboid-face="front" points={svgPoints([roof[3]!,roof[2]!,base[2]!,base[3]!])} fill={p.accent}/>
     <polygon data-21st-cuboid-face="side" points={svgPoints([roof[1]!,roof[2]!,base[2]!,base[1]!])} fill={p.secondary}/>
     <polygon data-21st-cuboid-face="top" points={svgPoints(roof)} fill={p.paper}/>
     <polygon points={svgPoints(roof)} fill={p.accent} fillOpacity={.5}/>
    </g>)}
   </svg>
   {columns.map(({value,label},i)=><Text key={i} s={s} style={{position:"absolute",left:label[0]/1000*s.w,top:label[1]/780*height*s.h-s.body*.35,transform:"translate(-50%,-100%)",fontFamily:loadBrandFont(p.numeralsFont),fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap",opacity:s.reveal(i)}}>{value}</Text>)}
  </div>
 </>;
};

/** Parallel projection uses a shared ground and solid extrusions, not independent card tilts. */
const IsoTile:React.FC<{s:Stage;index?:number;style?:React.CSSProperties;children?:React.ReactNode}>=({s,index=0,style,children})=><div style={{position:"absolute",background:s.p.paper,border:`2px solid ${s.p.ink}`,boxShadow:`${s.f*.015}px ${s.f*.015}px 0 ${s.p.secondary}`,transform:`translateY(${(1-s.reveal(index))*s.h*.16}px) rotateX(18deg) rotateZ(-12deg)`,transformOrigin:"center",opacity:s.reveal(index),boxSizing:"border-box",padding:s.body*.7,...style}}>{children}</div>;
const Isometric:React.FC<{s:Stage;job:ExpansionJob}>=({s,job})=>{
 const {p}=s, grid=s.portrait?1:3;
 const floor=<svg viewBox="0 0 1000 700" style={{position:"absolute",left:0,top:"28%",width:"100%",height:"67%",overflow:"visible",opacity:.28}}>{Array.from({length:8},(_,i)=><React.Fragment key={i}><path d={`M ${i*130-300} 350 l 600 -300`} fill="none" stroke={p.ink}/><path d={`M ${i*130-50} 0 l 600 300`} fill="none" stroke={p.ink}/></React.Fragment>)}</svg>;
 if(job === "backgrounds") return <>{floor}{Array.from({length:p.density??7},(_,i)=><IsoTile s={s} key={i} index={i*.4} style={{left:`${(i%3)*29+5}%`,top:`${Math.floor(i/3)*26+10}%`,width:"24%",height:"18%",background:i%2?p.paper:p.accent,transform:`translateY(${(1-s.reveal(i*.4))*s.h*.2}px) rotateX(30deg) rotateZ(-30deg)`}}/>)}</>;
 if(job === "titles") return <>{floor}{[0,1,2].map((i)=>{const parts=p.phrase?.split(/[.!]/).filter(Boolean)??[];return <IsoTile key={i} s={s} index={i} style={{left:s.portrait?"5%":`${i*28+3}%`,top:s.portrait?`${i*28+5}%`:`${i*13+17}%`,width:s.portrait?"87%":"35%",height:s.portrait?"20%":"47%"}}><Text s={s} display slot="phrase" size={s.portrait?s.title*.65:s.title*.65}>{parts[i]??words(p.phrase??"")[i]}</Text></IsoTile>})}</>;
 if(job === "product-ui") return <>{floor}
  <div data-21st-inspection-note style={{position:"absolute",left:0,top:0,width:"100%",zIndex:4,borderLeft:`${Math.max(2,s.f*.003)}px solid ${p.accent}`,paddingLeft:s.body*.5,boxSizing:"border-box",opacity:s.reveal()}}>
   <Text s={s} display slot="action" size={s.portrait?s.body*1.3:s.title*.54}>{p.action}</Text>
   <Text s={s} slot="detail" style={{marginTop:s.body*.3}}>{p.detail}</Text>
  </div>
  <svg data-21st-inspection-anchor viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{position:"absolute",width:"100%",height:"100%",pointerEvents:"none"}}><path d="M0 155 L0 265 L155 370" fill="none" stroke={p.accent} strokeWidth={3} pathLength={1} strokeDasharray={1} strokeDashoffset={1-s.reveal(2)}/><circle cx={155} cy={370} r={6} fill={p.accent}/></svg>
  {[0,1,2].map(i=><IsoTile key={i} s={s} index={i} style={{left:`${8+i*3}%`,top:`${s.portrait?34+i*3:36+i*3}%`,width:s.portrait?"80%":"72%",height:s.portrait?"49%":"45%",padding:0,opacity:i===2?s.reveal(2):(.2+i*.2)*s.reveal(i),zIndex:i}}>{i===2?<Screenshot s={s}/>:null}</IsoTile>)}
 </>;
 if(job === "devices") return <>{floor}<IsoTile s={s} style={{left:"8%",top:"50%",width:"84%",height:"35%",padding:0}}/><Device s={s} style={{background:p.paper,transform:`translateY(${(1-s.reveal())*s.h*.3}px) rotateZ(-12deg) skewY(5deg)`,boxShadow:`${s.f*.023}px ${s.f*.023}px 0 ${p.secondary}`}}/><Text s={s} slot="deviceName" style={{position:"absolute",top:"94%"}}>{p.deviceName}</Text></>;
 if(job === "code") return <>{floor}{[p.from,p.to].map((t,i)=><IsoTile s={s} key={i} index={i*2} style={{left:s.portrait?"6%":`${i*39+4}%`,top:s.portrait?`${15+i*40}%`:`${20+i*18}%`,width:s.portrait?"83%":"52%",height:s.portrait?"30%":"45%"}}><Text s={s} slot={i?"to":"from"} size={s.body} style={{fontFamily:loadBrandFont(p.numeralsFont)}}>{t}</Text><div style={{width:s.body*2,height:s.body*.4,marginTop:s.body,background:p.accent,transform:`translateX(${s.reveal(i)*s.body*2}px)`}}/></IsoTile>)}</>;
 if(job === "process") return <>{floor}<svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{position:"absolute",width:"100%",height:"100%"}}><path d={s.portrait?"M250 100 L750 440 L250 780":"M100 700 L500 400 L900 100"} stroke={p.accent} strokeWidth={12} fill="none" pathLength={1} strokeDasharray={1} strokeDashoffset={1-s.reveal(1)}/></svg>{p.steps?.map((step,i)=><IsoTile key={i} s={s} index={i} style={{left:s.portrait?`${i%2?40:3}%`:`${i*30+2}%`,top:s.portrait?`${i*29+5}%`:`${65-i*24}%`,width:s.portrait?"57%":"34%",height:s.portrait?"23%":"30%"}}><Text s={s} slot="steps" size={s.body}>{step}</Text></IsoTile>)}</>;
 if(job === "data") return <IsoData s={s}/>;
 if(job === "logos") return <>{floor}{p.logos?.map((logo,i)=><IsoTile key={i} s={s} index={i} style={{left:s.portrait?`${i%2*32+5}%`:`${i*30+2}%`,top:s.portrait?`${i*26+2}%`:`${15+i*15}%`,width:s.portrait?"63%":"33%",height:s.portrait?"24%":"43%",display:"flex",alignItems:"center",justifyContent:"center",gap:s.body,flexDirection:s.portrait?"row":"column"}}><Mark src={logo.image} color={p.ink} size={s.body*2}/><Text s={s} display slot="logos" size={s.body*1.4}>{logo.name}</Text></IsoTile>)}<Text s={s} slot="relationship" style={{position:"absolute",top:"91%"}}>{p.relationship}</Text></>;
 if(job === "gallery") return <>{floor}{p.items?.map((item,i)=><IsoTile key={i} s={s} index={i} style={{left:s.portrait?`${i*5+3}%`:`${i*27+2}%`,top:s.portrait?`${i*26+3}%`:`${15+i*13}%`,width:s.portrait?"83%":"36%",height:s.portrait?"23%":"53%",display:"flex",flexDirection:s.portrait?"row":"column",gap:s.body}}>{item.image?<Img src={item.image} style={{width:s.portrait?"35%":"100%",height:s.portrait?"100%":"65%",objectFit:"contain"}}/>:<div style={{width:s.portrait?"35%":"100%",height:s.portrait?"100%":"55%",background:p.accent,display:"flex",alignItems:"center",justifyContent:"center"}}><Text s={s} display>{i+1}</Text></div>}<Text s={s} slot="items" size={s.body}>{item.text}</Text></IsoTile>)}</>;
 if(job === "testimonials") return <>{floor}<IsoTile s={s} style={{left:"4%",top:"17%",width:"92%",height:"63%",transform:`translateY(${(1-s.reveal())*100}px) rotateZ(-7deg)`}}><Text s={s} display slot="quote" size={s.title*.75}>“{p.quote}”</Text><Text s={s} slot="author" style={{marginTop:s.body}}>{p.author}</Text></IsoTile><Text s={s} slot="source" style={{position:"absolute",top:"94%"}}>{p.source}</Text></>;
 return <>{floor}<IsoTile s={s} style={{left:"7%",top:"14%",width:"86%",height:"65%",display:"flex",flexDirection:"column",gap:s.body}}><Mark src={p.logo} color={p.ink} size={s.title}/><Text s={s} slot="action" display size={s.title*.85}>{p.action}</Text><Text s={s} slot="url">{p.url} ↗</Text></IsoTile></>;
};

/** Fixed offsets simulate a retraced pen gesture, without changing noise between frames. */
const MilestonePath:React.FC<{s:Stage}>=({s})=>{
 const points:Point[]=s.portrait?[[88,110],[70,160],[104,225],[64,285],[108,355],[80,480],[106,580],[69,665],[102,750],[87,830],[115,935]]:[[105,700],[180,669],[270,716],[368,676],[472,712],[555,679],[640,717],[724,675],[826,693],[910,652]];
 const segments=points.slice(1).flatMap((end,i)=>{
  const start=points[i]!;
  return Array.from({length:4},(_,j)=>{
   const at=(k:number):Point=>{const t=k/4,n=i*4+k;return [start[0]+(end[0]-start[0])*t+(k===0||k===4?0:Math.sin(n*2.7)*3.8),start[1]+(end[1]-start[1])*t+(k===0||k===4?0:Math.cos(n*1.9)*4.5)];};
   return {a:at(j),b:at(j+1),n:i*4+j};
  });
 });
 const arrow=(tip:Point,from:Point)=>{
  const dx=tip[0]-from[0],dy=tip[1]-from[1],length=Math.hypot(dx,dy),x=dx/length,y=dy/length;
  return `M ${tip[0]-x*26-y*15} ${tip[1]-y*26+x*15} L ${tip[0]-x*9-y*3} ${tip[1]-y*9+x*3} L ${tip.join(" ")} L ${tip[0]-x*31+y*12} ${tip[1]-y*31-x*12}`;
 };
 const nodes:Point[]=s.portrait?[[88,120],[80,480],[87,830]]:[[180,669],[472,712],[826,693]];
 const width=Math.max(3.8,s.f*.005);
 return <svg data-21st-milestone-pen viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{position:"absolute",width:"100%",height:"100%",overflow:"visible"}}>
  {segments.map(({a,b,n})=><React.Fragment key={n}>
   <path data-21st-pen-stroke d={`M ${a.join(" ")} L ${b.join(" ")}`} fill="none" stroke={s.p.accent} strokeWidth={width*(.8+(n%5)*.11)} strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={s.reveal(n*.04)<1?1:undefined} strokeDashoffset={s.reveal(n*.04)<1?1-s.reveal(n*.04):undefined}/>
   {n%3!==1&&<path d={`M ${a[0]+2+Math.sin(n)*2} ${a[1]-3} L ${b[0]+3} ${b[1]-1-Math.cos(n)*2}`} fill="none" stroke={s.p.accent} strokeOpacity={.45} strokeWidth={width*.42} strokeLinecap="round" vectorEffect="non-scaling-stroke" pathLength={1} strokeDasharray={s.reveal(n*.04+.2)<1?1:undefined} strokeDashoffset={s.reveal(n*.04+.2)<1?1-s.reveal(n*.04+.2):undefined}/>}
  </React.Fragment>)}
  {nodes.map(([x,y],i)=><g key={i} opacity={s.reveal(i)} fill="none" stroke={s.p.accent} strokeLinecap="round" strokeLinejoin="round" strokeWidth={width*.8} vectorEffect="non-scaling-stroke">
   <path d={`M ${x-13} ${y-5} L ${x-7} ${y-14} L ${x+10} ${y-12} L ${x+15} ${y+3} L ${x+7} ${y+13} L ${x-10} ${y+9} Z`}/>
   <path d={s.portrait?`M ${x+19} ${y-3} L ${x+38} ${y+1} L 169 ${y-4} L 184 ${y+3} M 170 ${y-14} L 184 ${y+3} L 166 ${y+13}`:`M ${x-2} ${y-22} L ${x+4} ${y-57} L ${x-3} ${y-92} M ${x-13} ${y-78} L ${x-3} ${y-92} L ${x+10} ${y-74}`}/>
  </g>)}
  {[Math.floor(points.length/2),points.length-1].map((i,k)=><path key={i} data-21st-imperfect-arrow d={arrow(points[i]!,points[i-1]!)} fill="none" stroke={s.p.accent} strokeWidth={width*(k?.88:1.07)} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" opacity={s.reveal(k+1)}/>)}
 </svg>;
};

/** Irregular drawn paths are the motion itself, including outlines and semantic annotations. */
const HandDrawn:React.FC<{s:Stage;job:ExpansionJob}>=({s,job})=>{
 const {p}=s;
 const rectangle="M40 55 Q470 18 955 49 L942 942 Q430 975 42 935 Z";
 if(job === "backgrounds")return <>{Array.from({length:p.density??7},(_,i)=><Sketch key={i} s={s} index={i*.3} width={3} path={`M${20+i*12} ${25+i*15} Q${300+i*18} ${80+i*30} ${945-i*14} ${24+i*18} L${920-i*16} ${940-i*17} Q500 ${980-i*30} ${30+i*17} ${933-i*16}`}/>)}</>;
 if(job === "titles")return <><Text s={s} display slot="phrase" size={s.title*1.25} style={{position:"absolute",top:s.portrait?"14%":"25%",left:"5%",width:"90%",transform:"rotate(-2deg)",opacity:s.reveal()}}>{p.phrase}</Text><Sketch s={s} path="M25 670 Q360 620 960 650 M90 705 Q480 674 865 710" index={2}/><Text s={s} slot="kicker" style={{position:"absolute",top:"86%",left:"8%"}}>{p.kicker}</Text></>;
 if(job === "product-ui")return <><div style={{position:"absolute",left:"4%",top:"7%",width:"92%",height:"71%"}}><Screenshot s={s}/><Sketch s={s} path="M160 490 C80 130 960 100 905 570 C850 850 40 810 160 490" index={1}/></div><Text s={s} display slot="action" size={s.title*.65} style={{position:"absolute",top:"83%",width:"95%"}}>{p.action}</Text><Sketch s={s} path="M810 820 Q980 690 820 540 M820 540 L885 555 M820 540 L818 610" index={3}/></>;
 if(job === "devices"){
  const deviceH=s.h*.78,deviceW=Math.min(s.w*.74,deviceH*.54);
  return <><div data-21st-device-shell style={{position:"absolute",left:(s.w-deviceW)/2,top:s.h*.06,width:deviceW,height:deviceH}}>
   <div style={{position:"absolute",inset:"3% 4%",background:p.paper,borderRadius:"10%",opacity:s.reveal()}}/>
   <div style={{position:"absolute",inset:"12% 9% 10%",border:`${Math.max(2,s.f*.002)}px solid ${p.ink}`,borderRadius:"2%",overflow:"hidden",opacity:s.reveal(1)}}><Screenshot s={s}/></div>
   <Sketch s={s} width={6} path="M140 35 Q490 18 859 38 Q955 39 947 140 L940 860 Q949 959 850 962 L151 970 Q50 962 55 864 L48 144 Q42 40 140 35 Z M370 78 Q480 74 594 80 M330 923 Q505 914 669 921"/>
   <Sketch s={s} width={5} path="M662 74 a13 13 0 1 0 1 0 M28 225 L28 323 M28 365 L28 458 M970 286 L970 414" index={1}/>
  </div><Text s={s} slot="deviceName" style={{position:"absolute",top:"91%",left:"4%"}}>{p.deviceName}</Text></>;
 }
 if(job === "code")return <>{[p.from,p.to].map((t,i)=><div key={i} style={{position:"absolute",top:s.portrait?`${8+i*68}%`:`${15+i*47}%`,left:"4%",width:"92%",opacity:s.reveal(i*2)}}><Text s={s} slot={i?"to":"from"} size={s.body*1.2} style={{fontFamily:loadBrandFont(p.numeralsFont),position:"relative"}}>{t}{i===0&&<Sketch s={s} path="M5 490 Q350 430 995 520" index={1} width={12} style={{inset:0}}/>}</Text></div>)}<Sketch s={s} path={s.portrait?"M480 300 Q350 520 490 700 M490 700 L422 675 M490 700 L499 631":"M480 350 Q350 470 490 555 M490 555 L422 530 M490 555 L499 486"} index={1}/></>;
 if(job === "process")return <><MilestonePath s={s}/>{p.steps?.map((step,i)=><div key={i} style={{position:"absolute",left:s.portrait?"20%":`${i*33+4}%`,top:s.portrait?`${i*35+4}%`:"20%",width:s.portrait?"76%":"28%",opacity:s.reveal(i),transform:`rotate(${i%2?-3:2}deg)`}}><Text s={s} display slot="steps" size={s.title*.62}>{i+1}. {step}</Text></div>)}</>;
 if(job === "data")return <><Text s={s} slot="value" display style={{position:"absolute",top:0,left:"3%",fontSize:s.title*1.8}}>{Math.round((p.value??0)*s.reveal())}</Text><Text s={s} slot="unitLabel" style={{position:"absolute",top:"24%",left:"4%"}}>{p.unitLabel}</Text><Sketch s={s} path="M65 370 L60 930 L955 915" width={5}/>{p.bars?.map((v,i)=><React.Fragment key={i}><Sketch s={s} index={i} width={5} path={`M${155+i*280} 895 L${157+i*280} ${890-v*8} Q${250+i*280} ${865-v*8} ${340+i*280} ${890-v*8} L${330+i*280} 896`}/>{Array.from({length:6},(_,k)=><Sketch key={k} s={s} index={i+1} width={2} path={`M${162+i*280+k*25} 890 L${173+i*280+k*25} ${900-v*7.5}`}/>)}<Text s={s} style={{position:"absolute",left:`${i*28+17}%`,top:"94%"}}>{v}</Text></React.Fragment>)}</>;
 if(job === "logos")return <><Sketch s={s} path={s.portrait?"M650 150 Q150 200 520 460 Q900 640 280 760":"M150 530 Q470 20 850 490"}/>{p.logos?.map((logo,i)=><div key={i} style={{position:"absolute",left:s.portrait?`${i%2?45:5}%`:`${i*30+2}%`,top:s.portrait?`${i*28+3}%`:`${i%2?12:42}%`,width:s.portrait?"50%":"30%",display:"flex",gap:s.body,alignItems:"center",opacity:s.reveal(i)}}><Mark src={logo.image} color={p.ink} size={s.body*2}/><Text s={s} display slot="logos" size={s.title*.6}>{logo.name}</Text></div>)}<Text s={s} slot="relationship" style={{position:"absolute",top:"91%"}}>{p.relationship}</Text></>;
 if(job === "gallery")return <>{p.items?.map((item,i)=><div key={i} style={{position:"absolute",left:s.portrait?"2%":`${i*32}%`,top:s.portrait?`${i*31+2}%`:`${i%2?14:4}%`,width:s.portrait?"96%":"31%",height:s.portrait?"28%":"82%",transform:`rotate(${i%2?3:-2}deg)`}}><Sketch s={s} path={rectangle} index={i}/><div style={{position:"absolute",left:"8%",top:"9%",width:"84%",height:"79%",display:"flex",flexDirection:s.portrait?"row":"column",gap:s.body,opacity:s.reveal(i)}}>{item.image?<Img src={item.image} style={{width:s.portrait?"30%":"100%",height:s.portrait?"100%":"63%",objectFit:"contain"}}/>:<Text s={s} display style={{color:p.accent}}>0{i+1}</Text>}<Text s={s} display slot="items" size={s.body*1.3}>{item.text}</Text></div></div>)}</>;
 if(job === "testimonials")return <><Sketch s={s} path="M50 60 Q490 12 942 90 L922 735 Q530 750 400 730 L190 900 L213 730 L58 740 Z"/><Text s={s} display slot="quote" size={s.title*.82} style={{position:"absolute",left:"9%",top:"18%",width:"82%",opacity:s.reveal(1)}}>{p.quote}</Text><Text s={s} slot="author" style={{position:"absolute",left:"35%",top:"81%",width:"61%"}}>{p.author}</Text><Text s={s} slot="source" style={{position:"absolute",left:"6%",top:"94%",fontSize:s.body}}>{p.source}</Text></>;
 return <><Mark src={p.logo} color={p.ink} size={s.title}/><Text s={s} display slot="action" size={s.title*1.15} style={{position:"absolute",top:"30%",width:"98%"}}>{p.action}</Text><Text s={s} slot="url" size={s.title*.8} style={{position:"absolute",top:"82%"}}>{p.url}</Text><Sketch s={s} path="M730 850 C980 870 1000 610 780 630 Q690 640 630 745 M630 745 L650 659 M630 745 L717 710" index={1}/></>;
};

/** Type masks and hard graphic shutters form the poster; the image is never a window mockup. */
const Kinetic:React.FC<{s:Stage;job:ExpansionJob}>=({s,job})=>{
 const {p}=s;const mask=(i=0):React.CSSProperties=>({clipPath:`inset(${(1-s.reveal(i))*100}% 0 0 0)`,transform:`translateY(${(1-s.reveal(i))*s.body*1.6}px)`});
 const band=(text:string|undefined,i:number,slot:string)=><Text s={s} key={i} display slot={slot} size={s.title*(s.portrait?1.15:.95)} style={{position:"absolute",left:`${i%2?8:0}%`,top:`${10+i*29}%`,width:"92%",fontWeight:800,letterSpacing:"-.04em",...mask(i)}}>{text}</Text>;
 if(job === "backgrounds")return <div style={{position:"absolute",inset:0,overflow:"hidden"}}>{Array.from({length:p.density??7},(_,i)=><div key={i} style={{position:"absolute",left:`${i%2?-30:30}%`,top:`${i*100/(p.density??7)}%`,height:`${115/(p.density??7)}%`,width:"100%",background:i%2?p.secondary:p.accent,transform:`translateX(${(1-s.reveal(i*.3))*(i%2?-s.w:s.w)}px) skewY(-12deg)`}}/>)}</div>;
 if(job === "titles")return <>{(p.phrase?.split(/[.!]/).filter(Boolean)??[]).map((t,i)=>band(t,i,"phrase"))}<div style={{position:"absolute",left:"2%",bottom:0,width:"94%",height:s.h*.105,background:p.accent}}/></>;
 if(job === "product-ui")return <><div style={{position:"absolute",left:0,top:0,width:s.portrait?"100%":"48%",height:s.portrait?"30%":"100%",background:p.accent,...mask()}}><Text s={s} display slot="action" size={s.title*1.03} style={{padding:s.body,fontWeight:800}}>{p.action}</Text></div><div style={{position:"absolute",left:s.portrait?0:"48%",top:s.portrait?"31%":0,width:s.portrait?"100%":"52%",height:s.portrait?"68%":"100%",...mask(2)}}><Screenshot s={s}/></div></>;
 if(job === "devices")return <><Text s={s} display style={{position:"absolute",top:0,left:0,fontSize:s.title*1.45,fontWeight:900,letterSpacing:"-.07em",writingMode:s.portrait?undefined:"vertical-rl",...mask()}}>↳</Text><Device s={s} style={{left:s.portrait?"14%":"30%",top:s.portrait?"17%":"5%",height:s.portrait?"64%":"84%",borderRadius:0,borderWidth:7,...mask(1)}}/><Text s={s} slot="deviceName" style={{position:"absolute",top:"92%",fontWeight:800}}>{p.deviceName}</Text></>;
 if(job === "code")return <><Text s={s} display size={s.title} style={{position:"absolute",top:0,color:p.accent,fontWeight:900}}>− / +</Text>{[p.from,p.to].map((t,i)=><div key={i} style={{position:"absolute",top:`${25+i*39}%`,width:"100%",height:"30%",borderTop:`${s.f*.009}px solid ${i?p.accent:p.ink}`,...mask(i)}}><Text s={s} slot={i?"to":"from"} size={s.body*1.5} style={{paddingTop:s.body*.6,fontFamily:loadBrandFont(p.numeralsFont),fontWeight:800}}>{t}</Text></div>)}</>;
 if(job === "process")return <>{p.steps?.map((t,i)=><div key={i} style={{position:"absolute",left:`${i*6}%`,top:`${i*30+4}%`,width:`${100-i*6}%`,height:"25%",background:i===(p.activeStep??0)?p.accent:undefined,borderBottom:`${s.f*.007}px solid ${p.ink}`,padding:s.body*.4,boxSizing:"border-box",...mask(i)}}><Text s={s} display slot="steps" size={s.title*.74} style={{fontWeight:800}}>0{i+1} {t}</Text></div>)}</>;
 if(job === "data")return <><Text s={s} display slot="value" size={s.title*3.3} style={{position:"absolute",top:"4%",fontFamily:loadBrandFont(p.numeralsFont),fontWeight:900,letterSpacing:"-.08em",...mask()}}>{Math.round((p.value??0)*s.reveal())}</Text><Text s={s} slot="unitLabel" size={s.title*.7} display style={{position:"absolute",top:s.portrait?"41%":"50%",fontWeight:800}}>{p.unitLabel}</Text><div style={{position:"absolute",bottom:0,width:"100%",height:"24%",display:"flex",gap:s.f*.02}}>{p.bars?.map((v,i)=><div key={i} style={{flex:1,background:i%2?p.secondary:p.accent,transform:`scaleY(${s.reveal(i)})`,transformOrigin:"bottom",display:"flex",alignItems:"center",justifyContent:"center"}}><Text s={s} size={s.title*.65} display>{v}</Text></div>)}</div></>;
 if(job === "logos")return <>{p.logos?.map((logo,i)=><div key={i} style={{position:"absolute",left:0,top:`${i*29}%`,width:"100%",height:"26%",display:"flex",alignItems:"center",gap:s.body*1.5,borderBottom:`${s.f*.008}px solid ${p.ink}`,...mask(i)}}><Mark src={logo.image} color={p.accent} size={s.title*.7}/><Text s={s} display slot="logos" size={s.title*1.3} style={{fontWeight:900}}>{logo.name}</Text></div>)}<Text s={s} slot="relationship" style={{position:"absolute",top:"92%"}}>{p.relationship}</Text></>;
 if(job === "gallery")return <div style={{display:"grid",gridTemplateColumns:s.portrait?"1fr":"1fr 1fr",gridTemplateRows:s.portrait?"1fr 1fr 1fr":"1fr 1fr",height:"100%",gap:s.f*.016}}>{p.items?.map((item,i)=><div key={i} style={{position:"relative",background:i===1?p.accent:p.paper,border:`${s.f*.007}px solid ${p.ink}`,gridColumn:s.portrait?undefined:i===2?"1 / 3":undefined,overflow:"hidden",...mask(i)}}>{item.image&&<Img src={item.image} style={{position:"absolute",width:s.portrait?"38%":"55%",height:"92%",right:"3%",top:"4%",objectFit:"contain"}}/>}<Text s={s} display slot="items" size={s.title*.62} style={{position:"absolute",left:"5%",top:"12%",width:item.image?"52%":"90%",fontWeight:900}}>{item.text}</Text></div>)}</div>;
 if(job === "testimonials")return <><Text s={s} display size={s.title*3.5} style={{position:"absolute",top:"-4%",color:p.accent,fontWeight:900}}>“</Text><Text s={s} display slot="quote" size={s.title*.83} style={{position:"absolute",top:"24%",width:"100%",fontWeight:900,...mask(1)}}>{p.quote}</Text><Text s={s} slot="author" style={{position:"absolute",top:"81%",fontWeight:800}}>{p.author}</Text><Text s={s} slot="source" style={{position:"absolute",top:"94%",fontSize:s.body}}>{p.source}</Text></>;
 return <><div style={{position:"absolute",top:0,width:"100%",height:"76%",background:p.accent,...mask()}}><Text s={s} display slot="action" size={s.title*1.15} style={{padding:s.body,fontWeight:900}}>{p.action}</Text><Text s={s} display size={s.title*1.8} style={{position:"absolute",right:"5%",bottom:"5%"}}>↗</Text></div><Text s={s} display slot="url" size={s.title*.75} style={{position:"absolute",top:"85%",fontWeight:900,...mask(2)}}>{p.url}</Text></>;
};

/** Terminal motion advances in discrete cells and typewriter states with a stable final frame. */
const PixelTerminal:React.FC<{s:Stage;job:ExpansionJob}>=({s,job})=>{
 const {p}=s; const cell=Math.max(8,Math.floor(s.f/70));
 const typed=(text:string|undefined,index=0)=>text?.slice(0,Math.ceil((text.length)*s.reveal(index)));
 const panel:React.CSSProperties={position:"absolute",border:`${cell/3}px solid ${p.ink}`,boxSizing:"border-box",padding:s.body*.55,background:p.paper};
 const cursor=<span style={{display:"inline-block",width:s.body*.6,height:s.body,verticalAlign:"middle",background:p.accent}}/>;
 if(job === "backgrounds")return <>{Array.from({length:(p.density??7)*5},(_,i)=>{const x=i%7,y=Math.floor(i/7);return <div key={i} style={{position:"absolute",left:`${x*14}%`,top:`${y*18}%`,width:`${10+s.reveal(i*.07)*2}%`,height:"12%",border:`${cell/3}px solid ${p.ink}`,background:i<Math.floor(s.progress*35)?p.accent:undefined,opacity:i%3===0?.8:.22}}/>})}</>;
 if(job === "titles")return <><div style={{...panel,left:0,top:"14%",width:"100%",height:"71%"}}><Text s={s} slot="kicker" size={s.body} style={{fontFamily:loadBrandFont(p.displayFont)}}>[{p.kicker}]</Text><Text s={s} display slot="phrase" size={s.title*.91} style={{marginTop:s.body*2,lineHeight:1.28}}>{typed(p.phrase)}{s.progress<1?cursor:null}</Text></div></>;
 if(job === "product-ui")return <><div style={{...panel,left:0,top:"4%",width:"100%",height:"75%",overflow:"hidden"}}><Screenshot s={s}/><div style={{position:"absolute",left:0,top:`${Math.floor(s.reveal()*12)*100/12}%`,width:"100%",height:cell,background:p.accent,opacity:s.progress<1?.7:0}}/></div><Text s={s} display slot="action" size={s.body*1.3} style={{position:"absolute",top:"84%"}}>&gt; {typed(p.action,2)}</Text></>;
 if(job === "devices"){
  const deviceH=s.h*.78,deviceW=Math.min(s.w*.8,deviceH*.62);
  return <><div data-21st-device-shell style={{position:"absolute",left:(s.w-deviceW)/2,top:s.h*.04,width:deviceW,height:deviceH,background:p.paper,border:`${cell}px solid ${p.ink}`,boxShadow:`${cell}px ${cell}px 0 ${p.secondary}`,boxSizing:"border-box",clipPath:`inset(${100-Math.floor(s.reveal()*16)*6.25}% 0 0 0)`}}>
   <div style={{position:"absolute",left:"41%",top:"4%",width:"18%",height:cell/2,background:p.ink}}/>
   <div style={{position:"absolute",inset:"11% 7% 21%",border:`${cell/2}px solid ${p.accent}`,overflow:"hidden",boxSizing:"border-box"}}><Screenshot s={s}/></div>
   <div style={{position:"absolute",left:"19%",bottom:"7%",width:cell*4,height:cell*4}}><div style={{position:"absolute",left:cell*1.4,top:0,width:cell*1.2,height:cell*4,background:p.ink}}/><div style={{position:"absolute",top:cell*1.4,left:0,height:cell*1.2,width:cell*4,background:p.ink}}/></div>
   {[0,1].map(i=><div key={i} style={{position:"absolute",right:`${14+i*12}%`,bottom:`${8+i*3}%`,width:cell*1.6,height:cell*1.6,background:p.accent}}/>)}
  </div><Text s={s} slot="deviceName" style={{position:"absolute",top:"94%"}}>{typed(p.deviceName)}</Text></>;
 }
 if(job === "code")return <div style={{...panel,inset:0}}><Text s={s} size={s.body} style={{fontFamily:loadBrandFont(p.displayFont)}}>&gt;_</Text><Text s={s} slot="command" size={s.body*1.15} style={{marginTop:s.body*1.2,fontFamily:loadBrandFont(p.displayFont)}}>$ {typed(p.command)}</Text><Text s={s} slot="from" size={s.body*1.1} style={{marginTop:s.body*1.8,opacity:s.reveal(2),fontFamily:loadBrandFont(p.displayFont)}}>− {typed(p.from,2)}</Text><Text s={s} slot="to" size={s.body*1.1} style={{marginTop:s.body*1.2,color:p.accent,fontFamily:loadBrandFont(p.displayFont)}}>+ {typed(p.to,3)}</Text>{s.progress<1?cursor:null}</div>;
 if(job === "process")return <div style={{...panel,inset:0}}><Text s={s} display size={s.title*.75}>[ ]</Text>{p.steps?.map((step,i)=><Text key={i} s={s} slot="steps" size={s.body*1.25} style={{marginTop:s.body*1.5,fontFamily:loadBrandFont(p.displayFont),opacity:s.reveal(i)}}>[{s.reveal(i)>.95?"x":" "}] {typed(step,i)}</Text>)}</div>;
 if(job === "data")return <div style={{...panel,inset:0}}><Text s={s} display slot="value" size={s.title*1.9} style={{fontFamily:loadBrandFont(p.numeralsFont)}}>{String(Math.round((p.value??0)*s.reveal())).padStart(3,"0")}</Text><Text s={s} slot="unitLabel">{p.unitLabel}</Text>{p.bars?.map((v,i)=><div key={i} style={{marginTop:s.body*1.3,display:"flex",gap:s.body*.5,alignItems:"center"}}><Text s={s} size={s.body}>{v}</Text><div style={{display:"flex",gap:cell/3,flex:1}}>{Array.from({length:12},(_,j)=><div key={j} style={{flex:1,height:s.body,background:j<Math.floor(v/100*12*s.reveal(i))?p.accent:undefined,border:`1px solid ${p.ink}`,opacity:j<Math.floor(v/100*12*s.reveal(i))?1:.25}}/>)}</div></div>)}</div>;
 if(job === "logos")return <div style={{...panel,inset:0}}><Text s={s} display size={s.title*.68}>/</Text>{p.logos?.map((logo,i)=><div key={i} style={{display:"flex",gap:s.body,alignItems:"center",marginTop:s.body*1.5,opacity:s.reveal(i)}}><Mark src={logo.image} color={p.accent} size={s.body*1.5}/><Text s={s} display slot="logos" size={s.body*1.4}>├─ {typed(logo.name,i)}</Text></div>)}<Text s={s} slot="relationship" style={{marginTop:s.body*1.5}}>{typed(p.relationship,3)}</Text></div>;
 if(job === "gallery")return <div style={{display:"grid",gridTemplateColumns:s.portrait?"1fr":"repeat(3,1fr)",gap:cell,height:"100%"}}>{p.items?.map((item,i)=><div key={i} style={{border:`${cell/3}px solid ${p.ink}`,padding:s.body*.45,display:"flex",flexDirection:s.portrait?"row":"column",gap:s.body,opacity:Math.floor(s.reveal(i)*5)/5}}>{item.image?<Img src={item.image} style={{width:s.portrait?"32%":"100%",height:s.portrait?"100%":"65%",objectFit:"contain"}}/>:<Text s={s} display size={s.title*.7}>[0{i+1}]</Text>}<Text s={s} slot="items" size={s.body} style={{fontFamily:loadBrandFont(p.displayFont)}}>{typed(item.text,i)}</Text></div>)}</div>;
 if(job === "testimonials")return <div style={{...panel,inset:"5% 0"}}><Text s={s} display size={s.title*.7}>“</Text><Text s={s} slot="quote" size={s.body*1.5} style={{marginTop:s.body*1.8,fontFamily:loadBrandFont(p.displayFont)}}>{typed(p.quote)}</Text><Text s={s} slot="author" style={{marginTop:s.body*1.5}}>from: {typed(p.author,2)}</Text><Text s={s} slot="source" style={{marginTop:s.body*1.2}}>{typed(p.source,3)}</Text></div>;
 return <div style={{...panel,inset:"7% 0"}}><Mark src={p.logo} color={p.ink} size={s.title}/><Text s={s} display slot="action" size={s.title*.84} style={{marginTop:s.body*1.4}}>&gt; {typed(p.action)}</Text><Text s={s} display slot="url" size={s.title*.7} style={{marginTop:s.body*1.5,color:p.accent}}>{typed(p.url,2)} {s.progress<1?cursor:"↵"}</Text></div>;
};
const SYSTEMS = { editorial:Editorial, isometric:Isometric, "hand-drawn":HandDrawn, "kinetic-poster":Kinetic, "pixel-terminal":PixelTerminal };
export function componentFor(language:ExpansionLanguage,job:ExpansionJob):React.FC<ExpansionProps> {
 const System=SYSTEMS[language];
 const sheet=language === "editorial"&&job === "gallery";
 const Component:React.FC<ExpansionProps>=(p)=>{const s=useStage(sheet?onPaper(languageProps(language,p)):languageProps(language,p));return <Canvas s={s}>{sheet?<PaperSheet s={s}/>:language === "editorial"&&<PaperGrain s={s}/>}<System s={s} job={job}/></Canvas>};
 Component.displayName=`Language(${language}/${job})`;
 return Component;
}

export function editorialProofVariant(variant:"figure-strip"|"fold-reveal"|"detail-loupe"):React.FC<ExpansionProps> {
 const Component:React.FC<ExpansionProps>=(input)=>{
  const p=languageProps("editorial",input),s=useStage(p),stacked=s.portrait||s.square,primaryHeight=s.portrait?.52:s.square?.615:.76,insetTop=s.square?.71:.64;
  return <Canvas s={s}><PaperGrain s={s}/>{variant === "figure-strip"?<>
   <Rule s={s}/>
   <div data-21st-ui-primary style={{position:"absolute",left:0,top:"6%",width:stacked?"100%":"68%",height:`${primaryHeight*100}%`,overflow:"hidden",border:`1px solid ${p.ink}`,boxSizing:"border-box",clipPath:`inset(${(1-s.reveal())*100}% 0 0 0)`}}>
    <Screenshot s={s} style={{objectFit:"cover",objectPosition:"50% 20%"}}/>
    {[0,1,2].map(i=><div key={i} data-21st-detail-region={i} style={{position:"absolute",left:`${3+i*32}%`,top:"37%",width:"27%",height:"25%",border:`1px solid ${p.accent}`,boxSizing:"border-box",opacity:s.reveal(i+1)}}/>)}
   </div>
   <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{position:"absolute",width:"100%",height:"100%",pointerEvents:"none"}}>
    {[0,1,2].map(i=>{const x=(.165+i*.32)*(stacked?1000:680),y=60+primaryHeight*1000*.62,targetX=stacked?142.5+i*350:750,targetY=stacked?insetTop*1000:90+i*240;return <path key={i} data-21st-detail-connector={i} d={stacked?`M ${x} ${y} V ${targetY-25} H ${targetX} V ${targetY}`:`M ${x} ${y} H 710 V ${targetY+90} H ${targetX}`} fill="none" stroke={p.accent} strokeWidth={1.2} pathLength={1} strokeDasharray={1} strokeDashoffset={1-s.reveal(i+1)}/>;})}
   </svg>
   {[0,1,2].map(i=><React.Fragment key={i}><NoteNumber s={s} value={i+1} style={{left:stacked?`${i*35}%`:"75%",top:stacked?`${(insetTop-.06)*100}%`:`${3+i*24}%`,opacity:s.reveal(i+2)}}/><div data-21st-ui-detail-inset={i} style={{position:"absolute",left:stacked?`${i*35}%`:"75%",top:stacked?`${insetTop*100}%`:`${9+i*24}%`,width:stacked?"28.5%":"25%",height:stacked?(s.portrait?"13%":"11%"):"18%",overflow:"hidden",border:`1px solid ${p.accent}`,boxSizing:"border-box",background:p.paper,clipPath:`inset(${(1-s.reveal(i+2))*100}% 0 0 0)`}}>
    <Screenshot s={s} style={{objectFit:"cover",objectPosition:"50% 20%",transform:`translateX(${32-i*32}%) scale(2.8)`,transformOrigin:`${18+i*32}% 50%`}}/>
   </div></React.Fragment>)}
   <Text s={s} display slot="action" size={s.title*.55} style={{position:"absolute",top:"85%",width:"100%"}}>{p.action}</Text>
   <Text s={s} slot="detail" size={s.portrait?s.body:s.body*.9} style={{position:"absolute",top:"94%",width:"100%"}}>{p.detail}</Text>
  </>:variant === "fold-reveal"?<>
   <div style={{position:"absolute",inset:"5% 0 15%",overflow:"hidden",border:`1px solid ${p.ink}`,background:p.paper}}><Screenshot s={s}/>
    {s.progress<1&&<div style={{position:"absolute",top:0,left:`${s.reveal()*100}%`,width:"100%",height:"100%",background:p.paper,borderLeft:`2px solid ${p.accent}`}}>
     <Text s={s} display slot="detail" size={s.title*.85} style={{padding:s.body}}>{p.detail}</Text>
     <div style={{position:"absolute",left:0,top:0,width:"8%",height:"100%",borderRight:`1px solid ${p.ink}`,transform:"skewY(-5deg)",background:p.secondary,opacity:.18}}/>
    </div>}
   </div><NoteNumber s={s} value={1} style={{left:0,top:"86%",lineHeight:1}}/><Rule s={s} y={.91}/><Text s={s} slot="action" style={{position:"absolute",top:"94%"}}>{p.action}</Text>
  </>:<>
   <div style={{position:"absolute",inset:"3% 0 20%",overflow:"hidden"}}><Screenshot s={s}/>
    <div style={{position:"absolute",left:`${12+s.reveal()*25}%`,top:`${35-s.reveal()*18}%`,width:s.portrait?"60%":"39%",height:"54%",border:`2px solid ${p.accent}`,borderRadius:"50%",overflow:"hidden",background:p.paper}}>
     <div style={{position:"absolute",width:"230%",height:"230%",left:"-74%",top:"-24%"}}><Screenshot s={s}/></div>
    </div>
   </div><NoteNumber s={s} value={1} style={{left:0,top:"80%",background:p.paper,lineHeight:1}}/><Rule s={s} y={.85}/><Text s={s} display slot="detail" size={s.title*.65} style={{position:"absolute",top:"89%",width:"100%"}}>{p.detail}</Text>
  </>}</Canvas>;
 };Component.displayName=`EditorialProofVariant(${variant})`;return Component;
}
