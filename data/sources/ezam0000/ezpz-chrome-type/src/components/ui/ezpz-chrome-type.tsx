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

export interface EZPZChromeTypeProps {
  firstLine?: string; secondLine?: string; background?: string; tint?: string;
  bevel?: number; reflection?: number; fontFamily?: string; resolution?: number;
  className?: string; style?: CSSProperties; label?: string; decorative?: boolean;
}
/** Native text mask, distance-field bevel and reflected tonal bands.
 * bevel: 4–36, reflection: -1–1, resolution: 400–1400. tint: #RRGGBB.
 * No WebGL, network, generated lettering or animation loop.
 */
export default function EZPZChromeType({firstLine="EZ",secondLine="PZ",background="#1821ad",
  tint="#bccde8",bevel=22,reflection=0,fontFamily='"Arial Black", "Helvetica Neue", Arial, sans-serif',
  resolution=1000,className,style,label,decorative=false}:EZPZChromeTypeProps){
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current;if(!canvas)return;let cancelled=false;
    async function render(){
      canvas!.dataset.renderState="loading";
      try{await document.fonts.load(`900 200px ${fontFamily}`,firstLine+secondLine||" ");}catch{/* Local fallback. */}
      if(cancelled)return;
      const finite=(n:number,f:number)=>Number.isFinite(n)?n:f;
      const w=Math.round(Math.max(400,Math.min(1400,finite(resolution,1000)))),h=Math.round(w*1.25),n=w*h;
      canvas!.width=w;canvas!.height=h;const ctx=canvas!.getContext("2d")!;
      ctx.fillStyle=background;ctx.fillRect(0,0,w,h);
      const glow=ctx.createRadialGradient(w*.45,h*.35,0,w*.5,h*.5,w*.8);
      glow.addColorStop(0,"#ffffff18");glow.addColorStop(1,"#00000044");ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
      const mask=document.createElement("canvas");mask.width=w;mask.height=h;const m=mask.getContext("2d")!;
      m.fillStyle="white";m.font=`900 200px ${fontFamily}`;
      const lines=secondLine?[firstLine,secondLine]:[firstLine];
      lines.forEach((line,i)=>{
        if(!line)return;const mt=m.measureText(line),mw=Math.max(1,mt.actualBoundingBoxLeft+mt.actualBoundingBoxRight),mh=Math.max(1,mt.actualBoundingBoxAscent+mt.actualBoundingBoxDescent);
        const boxH=lines.length===1?h*.48:h*.354,boxY=lines.length===1?h*.26:h*.12+i*h*.405;
        m.save();m.translate(w*.08,boxY);m.scale(w*.84/mw,boxH/mh);m.fillText(line,mt.actualBoundingBoxLeft,mt.actualBoundingBoxAscent);m.restore();
      });
      const alpha=m.getImageData(0,0,w,h).data,d=new Float32Array(n),diag=Math.SQRT2;
      for(let i=0;i<n;i++)d[i]=alpha[i*4+3]>127?1e5:0;
      for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){const i=y*w+x;if(d[i])d[i]=Math.min(d[i],d[i-1]+1,d[i-w]+1,d[i-w-1]+diag,d[i-w+1]+diag);}
      for(let y=h-2;y>0;y--)for(let x=w-2;x>0;x--){const i=y*w+x;if(d[i])d[i]=Math.min(d[i],d[i+1]+1,d[i+w]+1,d[i+w+1]+diag,d[i+w-1]+diag);}
      const b=Math.max(4,Math.min(36,finite(bevel,22)))*w/1000;
      let relief=new Float32Array(n);for(let i=0;i<n;i++)relief[i]=Math.min(d[i],b);
      // Separable smoothing keeps the bevel normals free of distance-grid steps.
      const radius=Math.max(1,Math.round(w/400));
      for(let pass=0;pass<2;pass++){
        const out=new Float32Array(n);
        for(let y=0;y<h;y++)for(let x=0;x<w;x++){
          let sum=0,count=0;for(let k=-radius;k<=radius;k++){
            const xx=pass===0?x+k:x,yy=pass===1?y+k:y;
            if(xx>=0&&xx<w&&yy>=0&&yy<h){sum+=relief[yy*w+xx];count++;}
          }out[y*w+x]=sum/count;
        }relief=out;
      }
      ctx.save();ctx.shadowColor="#020620aa";ctx.shadowBlur=w*.016;ctx.shadowOffsetX=w*.009;ctx.shadowOffsetY=w*.017;ctx.drawImage(mask,0,0);ctx.restore();
      const stops=[0,.1,.19,.23,.245,.29,.4,.49,.505,.53,.66,.74,.76,.8,.93,1];
      const colors=["b4c4df","fbffff","7e8ba1","e7edf5","ffffff","151b2b","090c19","6b7a95","f7ffff","aebdd0","edf6ff","ffffff","18213d","060a1a","c0cbdc","ffffff"].map(s=>[0,2,4].map(i=>parseInt(s.slice(i,i+2),16)));
      const tintHex=/^#[0-9a-f]{6}$/i.test(tint)?tint:"#bccde8",tintRGB=[1,3,5].map(i=>parseInt(tintHex.slice(i,i+2),16));
      const pixels=m.createImageData(w,h),offset=Math.max(-1,Math.min(1,finite(reflection,0)));
      for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){
        const i=y*w+x,a=alpha[i*4+3];if(!a)continue;
        const dx=(relief[i+1]-relief[i-1])/2,dy=(relief[i+w]-relief[i-w])/2,den=Math.sqrt(dx*dx+dy*dy+1),nx=-dx/den,ny=-dy/den,nz=1/den;
        const band=((y/h*2.45+.14*Math.sin(x/w*4.8)+.22*ny-.11*nx+offset)%1+1)%1;
        let s=0;while(s<stops.length-2&&band>stops[s+1])s++;
        const mix=(band-stops[s])/(stops[s+1]-stops[s]);
        const light=Math.max(0,-.48*nx-.64*ny+.59*nz),edge=Math.max(0,1-d[i]/b);
        const glint=edge*Math.pow(light,12)*155-Math.exp(-Math.pow((d[i]-w*.0033)/(w*.001),2))*48+Math.exp(-Math.pow((d[i]-w*.001)/(w*.0006),2))*105;
        for(let k=0;k<3;k++){const value=colors[s][k]*(1-mix)+colors[s+1][k]*mix;
          pixels.data[i*4+k]=Math.max(0,Math.min(255,value*(.82+.24*light)*( .86+.14*tintRGB[k]/220)+glint));}
        pixels.data[i*4+3]=a;
      }
      m.putImageData(pixels,0,0);ctx.drawImage(mask,0,0);canvas!.dataset.renderState="ready";
    }
    void render();return()=>{cancelled=true;};
  },[firstLine,secondLine,background,tint,bevel,reflection,fontFamily,resolution]);
  const title=label??[firstLine,secondLine].filter(Boolean).join(" ");
  return <canvas ref={ref} width={1000} height={1250} className={className} role={decorative?undefined:"img"}
    aria-label={decorative?undefined:title} aria-hidden={decorative||undefined}
    style={{display:"block",width:"100%",height:"auto",aspectRatio:"4 / 5",background,...style}}>{decorative?null:title}</canvas>;
}
