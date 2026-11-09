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

import { useEffect, useRef, type CSSProperties } from "react";

export interface EZPZTypeTunnelProps {
  text?: string; rows?: number; opening?: number; depth?: number;
  background?: string; ink?: string; fontFamily?: string;
  resolution?: number; className?: string; style?: CSSProperties;
  label?: string; decorative?: boolean;
}
/** Native font masks projected into four walls. No remote fonts or animation loop.
 * rows: 3–18, opening: .12–.55, depth: .5–2, resolution: 400–1800.
 * Text stays editable through props; the browser renders the final canvas pixels.
 */
export default function EZPZTypeTunnel({ text="EZPZ", rows=10, opening=.22, depth=1,
  background="#2520d8", ink="#fff4cd", fontFamily='"Arial Black", "Helvetica Neue", Arial, sans-serif',
  resolution=1200, className, style, label, decorative=false }: EZPZTypeTunnelProps) {
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current;if(!canvas)return;let cancelled=false;
    const finite=(n:number,f:number)=>Number.isFinite(n)?n:f;
    async function render(){
      canvas!.dataset.renderState="loading";
      try { await document.fonts.load(`900 120px ${fontFamily}`,text||" "); } catch { /* Local fallback font. */ }
      if(cancelled)return;
      const size=Math.round(Math.max(400,Math.min(1800,finite(resolution,1200))));
      canvas!.width=size;canvas!.height=size;
      const ctx=canvas!.getContext("2d");if(!ctx)return;
      ctx.fillStyle=background;ctx.fillRect(0,0,size,size);
      const mask=document.createElement("canvas");mask.width=1100;mask.height=180;
      const m=mask.getContext("2d")!;m.font=`900 180px ${fontFamily}`;
      const metrics=m.measureText(text);const mw=Math.max(1,metrics.actualBoundingBoxLeft+metrics.actualBoundingBoxRight);
      const mh=Math.max(1,metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent);
      m.fillStyle=ink;m.scale(1080/mw,160/mh);
      m.fillText(text,metrics.actualBoundingBoxLeft+10*mw/1080,metrics.actualBoundingBoxAscent+10*mh/160);
      const count=Math.round(Math.max(3,Math.min(18,finite(rows,10))));
      const inner=Math.max(.12,Math.min(.55,finite(opening,.22)));
      const curve=Math.max(.5,Math.min(2,finite(depth,1)));
      const outer=size*.445;
      const radius=(v:number)=>outer/(1+(1/inner-1)*Math.pow(v,curve));
      for(let side=0;side<4;side++){
        ctx.save();ctx.translate(size/2,size/2);ctx.rotate(side*Math.PI/2);
        for(let row=0;row<count;row++){
          ctx.globalAlpha=1-.64*Math.pow(row/(count-1),.8);
          // One-pixel source strips approximate the homography without outlining fonts.
          for(let sy=0;sy<180;sy++){
            const v0=(row+.1+.73*sy/180)/count,v1=(row+.1+.73*(sy+1)/180)/count;
            const r0=radius(v0),r1=radius(v1),r=radius((v0+v1)/2);
            ctx.drawImage(mask,0,sy,1100,1,-r*.965,-r0,r*1.93,Math.max(.3,r0-r1+.16));
          }
        }
        ctx.restore();
      }
      canvas!.dataset.renderState="ready";
    }
    void render();return()=>{cancelled=true;};
  },[text,rows,opening,depth,background,ink,fontFamily,resolution]);
  return <canvas ref={ref} width={1200} height={1200} className={className}
    role={decorative?undefined:"img"} aria-label={decorative?undefined:label??`${text} typography tunnel`}
    aria-hidden={decorative||undefined} style={{display:"block",width:"100%",height:"auto",aspectRatio:"1",background,...style}}>
    {decorative?null:label??`${text} typography tunnel`}
  </canvas>;
}
