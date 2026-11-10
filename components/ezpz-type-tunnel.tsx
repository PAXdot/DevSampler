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
  resolution?: number; aspect?: number; className?: string; style?: CSSProperties;
  label?: string; decorative?: boolean;
}
/** Native font masks projected into four walls. No remote fonts or animation loop.
 * rows: 3–18, opening: .12–.55, depth: .5–2, resolution: 400–1800, aspect: 1–6.
 * aspect is width ÷ height. 1 keeps the square tunnel. Text stays editable through props.
 */
export default function EZPZTypeTunnel({ text="EZPZ", rows=10, opening=.22, depth=1,
  background="#2520d8", ink="#fff4cd", fontFamily='"Arial Black", "Helvetica Neue", Arial, sans-serif',
  resolution=1200, aspect=1, className, style, label, decorative=false }: EZPZTypeTunnelProps) {
  const ref=useRef<HTMLCanvasElement>(null);
  const finite=(n:number,f:number)=>Number.isFinite(n)?n:f;
  const ratio=Math.max(1,Math.min(6,finite(aspect,1)));
  const width=Math.round(Math.max(400,Math.min(1800,finite(resolution,1200))));
  const height=Math.round(width/ratio);
  useEffect(()=>{
    const canvas=ref.current;if(!canvas)return;let cancelled=false;
    async function render(){
      canvas!.dataset.renderState="loading";
      try { await document.fonts.load(`900 120px ${fontFamily}`,text||" "); } catch { /* Local fallback font. */ }
      if(cancelled)return;
      canvas!.width=width;canvas!.height=height;
      const ctx=canvas!.getContext("2d");if(!ctx)return;
      ctx.fillStyle=background;ctx.fillRect(0,0,width,height);
      const wide=ratio>1.05;
      const maskW=wide?1800:1100;
      const maskH=wide?420:180;
      const mask=document.createElement("canvas");mask.width=maskW;mask.height=maskH;
      const m=mask.getContext("2d")!;
      const count=Math.round(Math.max(3,Math.min(18,finite(rows,10))));
      const inner=Math.max(.12,Math.min(.55,finite(opening,.22)));
      const curve=Math.max(.5,Math.min(2,finite(depth,1)));
      const halfW=width*.445;
      const halfH=height*.445;
      const scale=(v:number)=>1/(1+(1/inner-1)*Math.pow(v,curve));
      if(wide){
        // One readable line, then smaller echoes. No upside-down copy and no stretched letters.
        m.font=`900 ${Math.round(maskH * 0.72)}px ${fontFamily}`;
        const metrics=m.measureText(text);
        const mw=Math.max(1,metrics.actualBoundingBoxLeft+metrics.actualBoundingBoxRight);
        const mh=Math.max(1,metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent);
        const fit=Math.min((maskW-36)/mw,(maskH-28)/mh);
        m.fillStyle=ink;
        m.setTransform(fit,0,0,fit,(maskW-mw*fit)/2,(maskH-mh*fit)/2);
        m.fillText(text,metrics.actualBoundingBoxLeft,metrics.actualBoundingBoxAscent);
        const unit=maskH/maskW;
        const spans=Array.from({length:count},(_,row)=>width*(0.96-row*0.1));
        const gap=Math.max(6,height*0.04);
        const natural=spans.reduce((sum,span)=>sum+span*unit,0)+gap*(count-1);
        const fitStack=Math.min(1,(height*0.94)/natural);
        let y=(height-(natural*fitStack))/2;
        for(let row=0;row<count;row++){
          const span=spans[row]*fitStack;
          const rowH=span*unit;
          ctx.globalAlpha=1-0.42*Math.pow(row/Math.max(1,count-1),0.75);
          ctx.drawImage(mask,(width-span)/2,y,span,rowH);
          y+=rowH+gap*fitStack;
        }
      }else{
        m.font=`900 180px ${fontFamily}`;
        const metrics=m.measureText(text);const mw=Math.max(1,metrics.actualBoundingBoxLeft+metrics.actualBoundingBoxRight);
        const mh=Math.max(1,metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent);
        m.fillStyle=ink;m.scale(1080/mw,160/mh);
        m.fillText(text,metrics.actualBoundingBoxLeft+10*mw/1080,metrics.actualBoundingBoxAscent+10*mh/160);
        for(let side=0;side<4;side++){
          const along=side%2===0?halfW:halfH;
          const into=side%2===0?halfH:halfW;
          ctx.save();ctx.translate(width/2,height/2);ctx.rotate(side*Math.PI/2);
          for(let row=0;row<count;row++){
            ctx.globalAlpha=1-.64*Math.pow(row/(count-1),.8);
            // One-pixel source strips approximate the homography without outlining fonts.
            for(let sy=0;sy<180;sy++){
              const v0=(row+.1+.73*sy/180)/count,v1=(row+.1+.73*(sy+1)/180)/count;
              const r0=into*scale(v0),r1=into*scale(v1),r=along*scale((v0+v1)/2);
              ctx.drawImage(mask,0,sy,1100,1,-r*.965,-r0,r*1.93,Math.max(.3,r0-r1+.16));
            }
          }
          ctx.restore();
        }
      }
      canvas!.dataset.renderState="ready";
    }
    void render();return()=>{cancelled=true;};
  },[text,rows,opening,depth,background,ink,fontFamily,width,height]);
  return <canvas ref={ref} width={width} height={height} className={className}
    role={decorative?undefined:"img"} aria-label={decorative?undefined:label??`${text} typography tunnel`}
    aria-hidden={decorative||undefined} style={{display:"block",width:"100%",height:"auto",aspectRatio:`${width} / ${height}`,background,...style}}>
    {decorative?null:label??`${text} typography tunnel`}
  </canvas>;
}
