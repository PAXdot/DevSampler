// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, easeInOut, easeOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { along, prog, px } from "../_shared/motion";
import { meta } from "./stroke-logo.meta";
import type { schema } from "./stroke-logo.schema";

/** Segments the stroke is cut into so its color can change along the path (SVG has no path gradients). */
const SEGMENTS = 48;
/** Each segment overlaps the next a little so butt caps never leave hairline seams on curves. */
const OVERLAP = 0.006;

/**
 * One round-capped stroke with a gradient running along its length, drawn on with a
 * slow ease-in-out after a quick accent stroke; the wordmark warms from grey after.
 * On exit the tail chases the head and the stroke undraws itself.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ path, accentPath, c1, c2, c3, strokeWidth, name, color, fontFamily }) => {
  const { width: w, height: h } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const stops = [c1, c2, c3];

  const hasName = Boolean(name);
  const box = Math.min(w * 0.8, h * (hasName ? 0.66 : 0.86));
  const left = (w - box) / 2;
  const top = hasName ? h * 0.04 + (h * 0.7 - box) / 2 : (h - box) / 2;

  const accentDraw = easeOut(prog(frame, 4, 13));
  const head = easeInOut(prog(frame, 14, 66));
  const tail = easeInOut(exit);
  const accentTail = easeInOut(prog(exit, 0, 0.6));

  const nameIn = prog(frame, 60, 72);
  const nameSize = fitFontSize({ chars: name.length, boxW: w * 0.86, boxH: h * 0.16, charEm: 0.56, lineHeight: 1, max: box * 0.2 });

  const segs: React.ReactNode[] = [];
  for (let i = 0; i < SEGMENTS; i++) {
    const s = i / SEGMENTS;
    const e = Math.min(1, (i + 1) / SEGMENTS + OVERLAP);
    const from = Math.max(s, tail);
    const to = Math.min(e, head);
    if (to - from <= 0) continue;
    segs.push(
      <path
        key={i}
        d={path}
        pathLength={1}
        fill="none"
        stroke={along(stops, (i + 0.5) / SEGMENTS)}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeDasharray={`${(to - from).toFixed(5)} 2`}
        strokeDashoffset={(-from).toFixed(5)}
      />,
    );
  }
  // Round caps at both live ends: zero-length dashes with round caps render as dots.
  const cap = (at: number, key: string) => (
    <path key={key} d={path} pathLength={1} fill="none" stroke={along(stops, at)} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray="0.0001 2" strokeDashoffset={(-at).toFixed(5)} />
  );
  const drawn = head - tail > 0.0005;

  return (
    <AbsoluteFill>
      <svg
        viewBox="0 0 100 100"
        width={box}
        height={box}
        style={{ position: "absolute", left, top, overflow: "visible", filter: `drop-shadow(0 0 ${px(box * 0.025)}px ${withAlpha(c2, 0.35)})` }}
      >
        {accentPath && accentDraw - accentTail > 0.001 ? (
          <path
            d={accentPath}
            pathLength={1}
            fill="none"
            stroke={c1}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${(accentDraw - accentTail).toFixed(5)} 2`}
            strokeDashoffset={(-accentTail).toFixed(5)}
          />
        ) : null}
        {segs}
        {drawn ? cap(Math.max(0, tail), "tail") : null}
        {drawn ? cap(head, "head") : null}
      </svg>
      {hasName ? (
        <div
          data-21st-slot="name"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: top + box + h * 0.05,
            textAlign: "center",
            fontFamily: font,
            fontWeight: 600,
            fontSize: nameSize,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
            color: withAlpha(color, .42 + .58 * nameIn),
            opacity: Math.min(nameIn * 1.6, 1 - exit),
            transform: `translateY(${px((1 - nameIn) * box * 0.03)}px)`,
          }}
        >
          {name}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
