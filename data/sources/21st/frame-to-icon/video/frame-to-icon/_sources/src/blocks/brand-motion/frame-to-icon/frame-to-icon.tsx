// Built with Remotion - https://remotion.pro/license
import { TransitionSeries, linearTiming, type TransitionPresentation, type TransitionPresentationComponentProps } from "@remotion/transitions";
import React from "react";
import { AbsoluteFill, Img, useVideoConfig } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, inkOn, withAlpha, useLayout } from "../../../kit/index";
import { easeIn, monogram, prog, px } from "../_shared/motion";
import { meta } from "./frame-to-icon.meta";
import { defaults, type schema } from "./frame-to-icon.schema";

type Props = z.infer<typeof schema>;

/** Progress beats: wash the outgoing scene in the brand color, shrink the frame to an icon, hold, let it go. */
const WASH_END = 0.24;
const SHRINK_END = 0.52;
const LEAVE_START = 0.74;

const FrameToIcon: React.FC<TransitionPresentationComponentProps<Props>> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
  const { width, height } = useVideoConfig();
  const p = presentationProgress;
  const { color, logo, name, iconSize, radius } = passedProps;

  if (presentationDirection === "exiting") {
    const wash = easeIn(prog(p, 0, WASH_END));
    // Once a transparent incoming scene is revealed, the outgoing wash must recede with the shrinking icon.
    const outgoing = passedProps.nextBackground === "transparent" ? 1 - expoOut(prog(p, WASH_END, SHRINK_END)) : 1;
    return (
      <AbsoluteFill>
        <AbsoluteFill style={{ opacity: outgoing, transform: `scale(${1 - 0.02 * wash})` }}>{children}</AbsoluteFill>
        <AbsoluteFill style={{ background: color, opacity: wash * outgoing }} />
      </AbsoluteFill>
    );
  }

  // Entering: the next scene is underneath; the brand-color frame shrinks to an icon on top of it.
  if (p < WASH_END) return <AbsoluteFill style={{ opacity: 0 }}>{children}</AbsoluteFill>;
  const short = Math.min(width, height);
  const icon = short * iconSize;
  const s = expoOut(prog(p, WASH_END, SHRINK_END));
  const w = width + (icon - width) * s;
  const h = height + (icon - height) * s;
  const r = icon * radius * s;
  const content = expoOut(prog(p, WASH_END + 0.08, SHRINK_END + 0.06));
  const leave = easeIn(prog(p, LEAVE_START, 1));
  const scale = 1 - 0.35 * leave;
  const glyph = monogram(name) || "•";

  return (
    <AbsoluteFill>
      {children}
      {s > 0.5 ? (
        // Contact shadow as a gradient (deterministic), not a blurred box-shadow.
        <div
          style={{
            position: "absolute",
            left: px(width / 2 - icon * 0.9),
            top: px(height / 2 - icon * 0.55),
            width: px(icon * 1.8),
            height: px(icon * 1.5),
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${withAlpha(inkOn(inkOn(color)), 0.3 * (s - 0.5) * 2 * (1 - leave))}, transparent 70%)`,
            transform: `scale(${scale})`,
          }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          left: px((width - w) / 2),
          top: px((height - h) / 2),
          width: px(w),
          height: px(h),
          borderRadius: px(r),
          background: `linear-gradient(160deg, ${withAlpha(inkOn(color), 0.16 * s)}, transparent 55%), ${color}`,
          // Hairline highlight only: blurred box-shadows rasterize on the GPU and jitter between renders.
          boxShadow: s > 0.5 ? `inset 0 ${px(Math.max(1, icon * 0.012))}px 0 ${withAlpha(inkOn(color), 0.28)}` : undefined,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 1 - leave,
          transform: `scale(${scale})`,
        }}
      >
        <div style={{ opacity: content, transform: `scale(${0.4 + 0.6 * content})`, display: "flex" }}>
          {logo ? (
            <Img src={logo} style={{ height: icon * 0.56, maxWidth: icon * 0.7, objectFit: "contain", display: "block" }} />
          ) : (
            <span data-21st-slot="name" style={{ fontFamily: brandFontStack(passedProps.fontFamily ?? "Geist"), fontWeight: 600, fontSize: icon * 0.52, lineHeight: 1, letterSpacing: "-0.05em", color: inkOn(color) }}>{glyph}</span>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const presentation = (props: Record<string, unknown> = {}): TransitionPresentation<Props> => ({
  component: FrameToIcon,
  props: { ...defaults, ...(props as Partial<Props>) },
});

const PreviewScene: React.FC<Props & { incoming: boolean }> = (props) => {
  const { width, height, unit } = useLayout();
  const body = Math.max(height * .031, unit * 3.5);
  const icon=Math.min(width,height)*props.iconSize;
  return <AbsoluteFill style={{background:props.incoming?props.nextBackground:props.background,color:props.textColor,fontFamily:brandFontStack(props.bodyFontFamily??"Geist")}}>
    <div data-21st-slot={props.incoming?"afterTitle":"beforeTitle"} style={{position:"absolute",top:"9%",left:"10%",width:"80%",fontFamily:brandFontStack(props.fontFamily??"Geist"),fontSize:Math.max(body,unit*7),lineHeight:1.3,fontWeight:600,overflowWrap:"anywhere"}}>{props.incoming?props.afterTitle:props.beforeTitle}</div>
    {props.incoming?<>
      <div style={{position:"absolute",left:(width-icon)/2,top:(height-icon)/2,width:icon,height:icon,borderRadius:icon*props.radius,background:props.color,display:"flex",alignItems:"center",justifyContent:"center"}}>{props.logo?<Img src={props.logo} style={{height:icon*.56,maxWidth:icon*.7,objectFit:"contain"}}/>:<span data-21st-slot="name" style={{fontFamily:brandFontStack(props.fontFamily??"Geist"),fontSize:icon*.52,lineHeight:1,color:inkOn(props.color)}}>{monogram(props.name)||"•"}</span>}</div>
      <div data-21st-slot="name" style={{position:"absolute",top:"69%",left:"10%",width:"80%",fontSize:body*1.25,lineHeight:1.3,textAlign:"center",overflowWrap:"anywhere"}}>{props.name}</div>
      <div data-21st-slot="nextLabel" style={{position:"absolute",top:"86%",left:"10%",width:"80%",fontSize:body,lineHeight:1.3,textAlign:"center",overflowWrap:"anywhere"}}>{props.nextLabel}</div>
    </>:<div style={{position:"absolute",inset:"28% 10% 15%",border:`${Math.max(1,unit*.12)}px solid ${withAlpha(props.textColor,.35)}`,borderRadius:unit*2,background:withAlpha(props.previewAccent,.1)}}>{[0,1,2].map(i=><div key={i} style={{position:"absolute",left:"8%",top:`${17+i*25}%`,width:`${75-i*15}%`,height:unit*2,background:withAlpha(props.textColor,.3),borderRadius:unit}}/>)}</div>}
  </AbsoluteFill>;
};

/** Keep the supplied scene copy outside the icon's shrink-and-hold region. */
export const Component: React.FC<Props> = (props) => {
  const { durationInFrames } = useVideoConfig();
  const { unit } = useLayout();
  const d=Math.max(1,Math.min(meta.timing.duration.default,durationInFrames-2));
  const lead=Math.max(1,Math.floor((durationInFrames-d)/2)),tail=Math.max(1,durationInFrames-lead-d);
  return <AbsoluteFill style={{overflow:"hidden",borderRadius:unit*3}}><TransitionSeries>
    <TransitionSeries.Sequence durationInFrames={lead+d}><PreviewScene {...props} incoming={false}/></TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={presentation(props)} timing={linearTiming({durationInFrames:d})}/>
    <TransitionSeries.Sequence durationInFrames={tail+d}><PreviewScene {...props} incoming/></TransitionSeries.Sequence>
  </TransitionSeries></AbsoluteFill>;
};
