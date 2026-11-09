"use client";

/*
MIT License

Copyright (c) 2026 EZPZ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { useEffect, useRef, useState, type CSSProperties } from "react";

export interface EZPZDitherPortraitProps {
  /** Same-origin, data URL, blob URL, or an image server allowing CORS. */
  src: string; alt: string; pixels?: number; contrast?: number; exposure?: number;
  shadow?: string; highlight?: string; text?: string; fontFamily?: string;
  className?: string; style?: CSSProperties; decorative?: boolean;
}
/** Floyd–Steinberg two-color diffusion. Processing stays in the browser.
 * pixels: 64–480 across, contrast: .5–2.5, exposure: -1–1. Colors: #RRGGBB.
 * Cross-origin images must allow CORS. Local blob URLs work without uploading.
 */
export default function EZPZDitherPortrait({src,alt,pixels=220,contrast=1.25,exposure=.08,
  shadow="#10192b",highlight="#d7f3aa",text="EZPZ",fontFamily='"Helvetica Neue", Arial, sans-serif',
  className,style,decorative=false}:EZPZDitherPortraitProps){
  const ref=useRef<HTMLCanvasElement>(null);const [error,setError]=useState(false);
  useEffect(()=>{
    let cancelled=false;const canvas=ref.current;if(!canvas)return;
    canvas.dataset.renderState="loading";setError(false);
    const image=new Image();image.crossOrigin="anonymous";
    image.onload=async()=>{
      try{
        try{await document.fonts.load(`700 80px ${fontFamily}`,text||" ");}catch{/* Local fallback. */}
        if(cancelled)return;
        const finite=(n:number,f:number)=>Number.isFinite(n)?n:f;
        const w=Math.round(Math.max(64,Math.min(480,finite(pixels,220)))),h=Math.round(w*1.25);
        const off=document.createElement("canvas");off.width=w;off.height=h;
        const c=off.getContext("2d",{willReadFrequently:true})!;
        c.fillStyle="#fff";c.fillRect(0,0,w,h);
        const scale=Math.max(w/image.naturalWidth,h/image.naturalHeight);
        c.drawImage(image,(w-image.naturalWidth*scale)/2,(h-image.naturalHeight*scale)/2,image.naturalWidth*scale,image.naturalHeight*scale);
        const data=c.getImageData(0,0,w,h),gray=new Float32Array(w*h);
        const con=Math.max(.5,Math.min(2.5,finite(contrast,1.25))),exp=Math.max(-1,Math.min(1,finite(exposure,.08)));
        const rgb=(v:string,f:string)=>{const s=/^#[0-9a-f]{6}$/i.test(v)?v:f;return [1,3,5].map(i=>parseInt(s.slice(i,i+2),16));};
        const dark=rgb(shadow,"#10192b"),light=rgb(highlight,"#d7f3aa");
        for(let i=0;i<gray.length;i++){const j=i*4;gray[i]=Math.max(0,Math.min(1,((data.data[j]*.2126+data.data[j+1]*.7152+data.data[j+2]*.0722)/255-.5)*con+.5+exp));}
        for(let y=0;y<h;y++)for(let x=0;x<w;x++){
          const i=y*w+x,q=gray[i]>=.5?1:0,e=gray[i]-q,color=q?light:dark;
          if(x+1<w)gray[i+1]+=e*7/16;
          if(y+1<h){if(x>0)gray[i+w-1]+=e*3/16;gray[i+w]+=e*5/16;if(x+1<w)gray[i+w+1]+=e/16;}
          for(let k=0;k<3;k++)data.data[i*4+k]=color[k];data.data[i*4+3]=255;
        }
        c.putImageData(data,0,0);canvas.width=1200;canvas.height=1500;
        const ctx=canvas.getContext("2d")!;ctx.imageSmoothingEnabled=false;ctx.drawImage(off,0,0,1200,1500);
        if(text){ctx.fillStyle=shadow;ctx.fillRect(0,1230,1200,270);ctx.font=`700 160px ${fontFamily}`;ctx.fillStyle=highlight;ctx.textBaseline="alphabetic";
          const m=ctx.measureText(text),s=Math.min(1,1080/Math.max(1,m.width));
          ctx.save();ctx.translate(60,1410);ctx.scale(s,1);ctx.fillText(text,0,0);ctx.restore();}
        canvas.dataset.renderState="ready";
      }catch{if(!cancelled){canvas.dataset.renderState="error";setError(true);}}
    };
    image.onerror=()=>{if(!cancelled){canvas.dataset.renderState="error";setError(true);}};
    image.src=src;
    return()=>{cancelled=true;image.onload=null;image.onerror=null;};
  },[src,pixels,contrast,exposure,shadow,highlight,text,fontFamily]);
  return <div className={className} style={{width:"100%",...style}}>
    <canvas ref={ref} width={1200} height={1500} role={decorative?undefined:"img"}
      aria-label={decorative?undefined:alt} aria-hidden={decorative||undefined}
      style={{display:error?"none":"block",width:"100%",height:"auto",aspectRatio:"4 / 5",background:shadow}}>{decorative?null:alt}</canvas>
    {error?<p role="alert">Image unavailable. Use a local image or a URL that allows cross-origin access.</p>:null}
  </div>;
}
