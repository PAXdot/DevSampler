// Built with Remotion - https://remotion.pro/license
import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import type { z } from "zod";
import { brandFontStack, useLayout, fitFontSize, withAlpha } from "../../../kit/index";
import { rng } from "../_lib/noise";
import type { schema } from "./tally-count.schema";
const ease = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t*t*(3-2*t); };
export const Component: React.FC<z.infer<typeof schema>> = ({ value, label, primary, secondary, color, background, fontFamily, seed }) => {
  const f = Math.min(useCurrentFrame(), 135), { width: w, height: h, portrait } = useLayout();
  const cols = portrait ? 6 : 9, rows = portrait ? 7 : 5;
  const maxMarks = Math.min(value, cols*rows*5);
  const unit = Math.min(w*.80/cols, h*.56/rows), span = unit*.62, strokeH = unit*.65;
  const marks = useMemo(() => { const random = rng(seed); return Array.from({ length: cols*rows*5 }, (_, i) => ({ dx: (random()-.5)*unit*.045, dy:(random()-.5)*unit*.065, slant:(random()-.5)*unit*.10, length:.90+random()*.2 })); }, [seed,unit,cols,rows]);
  const countP = Math.pow(ease(f/91), 2.8), count = countP*maxMarks;
  const collapse = ease((f-96)/29)*.10, show = ease((f-104)/31);
  const formatted = value.toLocaleString("en-US");
  const font = fitFontSize({ chars: formatted.length, boxW:w*.86, boxH:h*.35, max:h*(portrait?.14:.17), min:h*.045, charEm:.62, lines:1, lineHeight:1.3 });
  return <AbsoluteFill style={{ background: background === "transparent" ? undefined : background }}>
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:"absolute", inset:0, opacity:1-collapse*.4, transformOrigin:"50% 50%", transform:`scale(${1-collapse*.05},${1-collapse*.05})` }}>
      {marks.map((m,i) => { const group = Math.floor(i/5), k = i%5, x = w/2-cols*unit/2+(group%cols)*unit+(unit-span)/2, y = h*.37-rows*unit/2+Math.floor(group/cols)*unit;
        const progress = Math.max(0,Math.min(1,count-i)); if (!progress || i>=maxMarks) return null;
        const x1 = k===4 ? x-unit*.025 : x+k*span/3;
        const y1 = k===4 ? y+strokeH*.91 : y;
        const x2 = k===4 ? x+span+unit*.025 : x1+m.slant;
        const y2 = k===4 ? y+strokeH*.10 : y+strokeH*m.length;
        return <path key={i} d={`M ${x1+m.dx} ${y1+m.dy} Q ${(x1+x2)/2+m.dx+unit*.017} ${(y1+y2)/2} ${x2+m.dx} ${y2+m.dy}`} fill="none" stroke={k===4?primary:color} strokeWidth={Math.max(2,unit*.025)} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1-progress} />;
      })}
    </svg>
    <div style={{ position:"absolute", left:w*.07, top:h*.67, width:w*.86, height:h*.20, display:"flex", alignItems:"center", justifyContent:"center", opacity:show, transform:`scale(${.88+.12*show})`, fontFamily:brandFontStack(fontFamily), color }}>
      <div data-21st-slot="value" style={{fontSize:font,lineHeight:1.3,fontWeight:650,letterSpacing:"-.045em",fontVariantNumeric:"tabular-nums"}}>{formatted}</div>
    </div>
    <div data-21st-slot="label" style={{ position:"absolute",left:w*.12,top:h*.90,width:w*.76,textAlign:"center",fontFamily:brandFontStack(fontFamily),fontSize:h*(portrait?.055:.039),lineHeight:1.3,color,opacity:show }}>{label}</div>
    <svg width={w} height={h} style={{position:"absolute",inset:0,opacity:show}}><path d={`M ${w*.34} ${h*.865} Q ${w*.49} ${h*.86} ${w*.66} ${h*.8652}`} fill="none" stroke={withAlpha(primary,.85)} strokeWidth={h*.003} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1-show}/></svg>
  </AbsoluteFill>;
};
