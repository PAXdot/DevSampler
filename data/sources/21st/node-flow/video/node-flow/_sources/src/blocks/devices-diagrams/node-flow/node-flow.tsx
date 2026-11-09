// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { inkOn, band, brandFontStack, expoOut, fitFontSize, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon, type IconName } from "../_shared/icons";
import { meta } from "./node-flow.meta";
import type { schema } from "./node-flow.schema";

const POP = { damping: 12, mass: 0.6, stiffness: 170 } as const;

/** Node A pops, an arrow draws across with packets flowing, node B pops, a checklist follows (research V13). */
export const Component: React.FC<z.infer<typeof schema>> = ({ from, fromIcon, to, toIcon, arrowLabel, benefits, accent, color, fontFamily, monoFontFamily }) => {
  const resolvedMono = brandFontStack(monoFontFamily ?? "Geist Mono");
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = Math.ceil(height * (portrait ? .03125 : .01875) / .6);
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const vertical = height > width * 1.1;
  const nb = benefits.length;

  const flowH = nb ? height * (vertical ? 0.66 : 0.66) : height;
  const nodeW = vertical ? Math.min(width * 0.84, flowH * 0.9) : Math.min(width * 0.32, flowH * 1.4);
  const nodeH = vertical ? Math.min(flowH * 0.26, nodeW * 0.3) : Math.min(flowH * 0.5, nodeW * 0.34);
  const s = Math.min(nodeH, nodeW * 0.34);
  const A = vertical ? { x: width / 2, y: nodeH / 2 + flowH * 0.04 } : { x: nodeW / 2 + width * 0.02, y: flowH / 2 };
  const B = vertical ? { x: width / 2, y: flowH - nodeH / 2 - flowH * 0.04 } : { x: width - nodeW / 2 - width * 0.02, y: flowH / 2 };
  const gap = s * 0.16;
  const a0 = vertical ? { x: A.x, y: A.y + nodeH / 2 + gap } : { x: A.x + nodeW / 2 + gap, y: A.y };
  const a1 = vertical ? { x: B.x, y: B.y - nodeH / 2 - gap } : { x: B.x - nodeW / 2 - gap, y: B.y };
  const len = Math.hypot(a1.x - a0.x, a1.y - a0.y);
  const labelSize = Math.max(minFont, fitFontSize({ chars: Math.max(from.length, to.length, 6), boxW: nodeW - s * 1.25, boxH: s * 0.34, charEm: 0.55, max: s * 0.3 }));
  const arrowSize = Math.max(minFont, fitFontSize({ chars: arrowLabel.length + 2, boxW: vertical ? width * 0.4 : Math.max(10, len * 0.8), boxH: s * 0.26, charEm: 0.58, max: s * 0.2 }));

  const draw = expoOut((frame - 10) / 12);
  const popA = springSnap(frame, fps, 0, POP);
  const popB = springSnap(frame, fps, 22, POP);
  const sw = Math.max(2, s * 0.03);
  const head = s * 0.12;
  const ux = (a1.x - a0.x) / (len || 1);
  const uy = (a1.y - a0.y) / (len || 1);
  const tip = { x: a0.x + (a1.x - a0.x) * draw, y: a0.y + (a1.y - a0.y) * draw };

  const node = (label: string, icon: IconName, hot: boolean, slot: string, c: { x: number; y: number }, pop: number, at: number) => (
    <div
      style={{
        position: "absolute",
        left: c.x - nodeW / 2,
        top: c.y - nodeH / 2,
        width: nodeW,
        height: nodeH,
        borderRadius: s * 0.24,
        background: hot ? `linear-gradient(180deg, ${withAlpha(accent, 0.16)}, ${withAlpha(accent, 0.06)})` : withAlpha(color, 0.05),
        border: `${Math.max(1, s * 0.012)}px solid ${hot ? withAlpha(accent, 0.6) : withAlpha(color, 0.14)}`,
        boxShadow: hot ? `0 0 ${s * 0.6}px ${withAlpha(accent, 0.28)}` : undefined,
        display: "flex",
        alignItems: "center",
        gap: s * 0.22,
        padding: `0 ${s * 0.24}px`,
        boxSizing: "border-box",
        opacity: band(frame, at, at + 3),
        transform: `scale(${0.7 + 0.3 * pop})`,
      }}
    >
      <div style={{ width: s * 0.6, height: s * 0.6, borderRadius: s * 0.16, background: hot ? accent : withAlpha(color, 0.1), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name={icon} size={s * 0.32} color={hot ? inkOn(accent) : color} />
      </div>
      <span data-21st-slot={slot} style={{ fontFamily: font, fontWeight: 600, fontSize: labelSize, letterSpacing: "-0.02em", color, whiteSpace: "normal", overflowWrap: "anywhere", lineHeight: 1.2 }}>
        {label}
      </span>
    </div>
  );

  const benefitSize = Math.max(minFont, fitFontSize({
    chars: vertical ? Math.max(...benefits.map((b) => b.length), 6) + 3 : benefits.reduce((n, b) => n + b.length + 6, 0),
    boxW: width * 0.92,
    boxH: vertical ? (height - flowH) / Math.max(1, nb) * 0.5 : (height - flowH) * 0.36,
    charEm: 0.52,
    max: s * 0.22,
  }));

  return (
    <AbsoluteFill style={{ opacity: 1 - exit, transform: `scale(${1 - exit * 0.03})` }}>
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <line x1={a0.x} y1={a0.y} x2={a1.x} y2={a1.y} stroke={withAlpha(color, 0.12)} strokeWidth={sw} strokeDasharray={`${sw * 2} ${sw * 3}`} opacity={band(frame, 8, 12)} />
        <line x1={a0.x} y1={a0.y} x2={tip.x} y2={tip.y} stroke={accent} strokeWidth={sw} strokeLinecap="round" opacity={draw > 0.01 ? 1 : 0} />
        <path
          d={`M${tip.x - ux * head - uy * head * 0.7} ${tip.y - uy * head + ux * head * 0.7} L${tip.x} ${tip.y} L${tip.x - ux * head + uy * head * 0.7} ${tip.y - uy * head - ux * head * 0.7}`}
          stroke={accent}
          strokeWidth={sw}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={draw > 0.01 ? 1 : 0}
        />
        {[0, 1, 2].map((k) => {
          const t = (((frame - 26) / 36 + k / 3) % 1 + 1) % 1;
          const on = band(frame, 26, 34);
          return <circle key={k} cx={a0.x + (a1.x - a0.x) * t * 0.92} cy={a0.y + (a1.y - a0.y) * t * 0.92} r={sw * 1.6} fill={accent} opacity={on * Math.sin(t * Math.PI)} style={{ filter: `drop-shadow(0 0 ${sw * 2}px ${accent})` }} />;
        })}
      </svg>
      {arrowLabel ? (
        <div
          style={{
            position: "absolute",
            left: (a0.x + a1.x) / 2,
            top: (a0.y + a1.y) / 2,
            width: vertical ? width * .65 : undefined,
            transform: vertical ? "translate(-50%, -50%)" : `translate(-50%, calc(-100% - ${arrowSize * 0.9}px))`,
            opacity: band(frame, 16, 24),
          }}
        >
          <span
            data-21st-slot="arrowLabel"
            style={{ display: "block", padding: `${arrowSize * 0.3}px ${arrowSize * 0.7}px`, borderRadius: 999, background: withAlpha(color, 0.06), border: `1px solid ${withAlpha(color, 0.14)}`, fontFamily: resolvedMono, fontSize: arrowSize, color: withAlpha(color, 0.8), whiteSpace: "normal", overflowWrap: "anywhere", textAlign: "center", lineHeight: 1.2 }}
          >
            {arrowLabel}
          </span>
        </div>
      ) : null}
      {node(from, fromIcon, false, "from", A, popA, 0)}
      {node(to, toIcon, true, "to", B, popB, 22)}
      {nb ? (
        <div
          style={{
            position: "absolute",
            left: width * 0.04,
            right: width * 0.04,
            top: flowH,
            bottom: 0,
            display: "flex",
            flexDirection: vertical ? "column" : "row",
            alignItems: "center",
            justifyContent: vertical ? "center" : "center",
            gap: vertical ? benefitSize * 0.9 : benefitSize * 1.6,
          }}
        >
          {benefits.map((b, i) => {
            const at = 32 + i * 8;
            const o = band(frame, at, at + 8);
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: benefitSize * 0.5, opacity: o, transform: `translateY(${(1 - o) * benefitSize * 0.6}px)` }}>
                <span style={{ width: benefitSize * 1.3, height: benefitSize * 1.3, borderRadius: 999, background: withAlpha(accent, 0.18), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="check" size={benefitSize * 0.8} color={accent} strokeWidth={3} />
                </span>
                <span data-21st-slot="benefits" style={{ fontFamily: font, fontWeight: 500, fontSize: benefitSize, color: withAlpha(color, 0.86), whiteSpace: "normal", maxWidth: width * .8 - benefitSize * 1.8, overflowWrap: "anywhere", lineHeight: 1.2 }}>
                  {b}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
