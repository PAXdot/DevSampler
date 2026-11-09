// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { easeInOut, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { prog, px } from "../_shared/motion";
import { meta } from "./light-sweep.meta";
import type { schema } from "./light-sweep.schema";

const FIRST = 6;

/**
 * A soft diagonal band of light crossing the frame left to right, once or on a beat.
 * Sits over titles and logos as a sheen; the frame edges stay untouched.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ angle, width, strength, sweepFrames, every, color }) => {
  const { width: w, height: h } = useLayout();
  const { frame: clipFrame, durationInFrames, exit, outStart } = useEnterExit(meta.timing);
  const peak = FIRST + sweepFrames / 2;
  const finalPeak = every > 0 ? FIRST + Math.max(0, Math.floor((durationInFrames - 1 - peak) / every)) * every + sweepFrames / 2 : peak;
  // The final sheen remains on the material until the caller transitions away.
  const frame = Math.min(clipFrame, finalPeak);

  // The sweep in flight right now (the latest one that has started).
  const n = every > 0 && frame >= FIRST ? Math.floor((frame - FIRST) / every) : 0;
  const start = FIRST + n * every;
  const p = prog(frame, start, start + sweepFrames);
  // A sweep never starts inside the exit; one already running finishes under the fade.
  const live = start < outStart && p > 0 && p < 1;

  const bw = w * width;
  const tall = Math.hypot(w, h) * 1.15;
  const slant = Math.tan((Math.abs(angle) * Math.PI) / 180) * (tall / 2);
  const x = -bw - slant + easeInOut(p) * (w + 2 * (bw + slant));
  const a = strength * (1 - exit);

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        WebkitMaskImage: "linear-gradient(180deg, transparent, #000 7%, #000 93%, transparent)",
        maskImage: "linear-gradient(180deg, transparent, #000 7%, #000 93%, transparent)",
      }}
    >
      <div style={{position:"absolute",left:w/2-bw/2,top:(h-tall)/2,width:bw,height:tall,transform:`rotate(${angle}deg)`,opacity:Math.min(1,clipFrame/6),background:`linear-gradient(90deg, transparent, ${withAlpha(color,a*.12)} 50%, transparent)`}}/>
      {live ? (
        <div
          style={{
            position: "absolute",
            left: px(x),
            top: (h - tall) / 2,
            width: bw,
            height: tall,
            transform: `rotate(${angle}deg)`,
            background: `linear-gradient(90deg, transparent, ${withAlpha(color, a * 0.45)} 32%, ${withAlpha(color, a)} 50%, ${withAlpha(color, a * 0.45)} 68%, transparent)`,
          }}
        >
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: Math.max(1, bw * 0.006), background: withAlpha(color, Math.min(1, a * 1.1)) }} />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
