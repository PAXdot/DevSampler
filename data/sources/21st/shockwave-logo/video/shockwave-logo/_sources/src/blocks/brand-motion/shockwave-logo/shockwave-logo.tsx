// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { brandFontStack, expoOut, fitFontSize, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { MarkTile } from "../_shared/mark";
import { prog, px } from "../_shared/motion";
import { meta } from "./shockwave-logo.meta";
import type { schema } from "./shockwave-logo.schema";

/**
 * Hype logo hit: a hairline grows from center, a grey flash, the mark slams 1.3 -> 1
 * with shockwave rings leaving it 4 frames apart, a light sweep crosses, then the
 * wide-tracked name and a center-out gradient underline.
 */
export const Component: React.FC<z.infer<typeof schema>> = ({ logo, name, tagline, accent, secondary, color, rings, sweep, fontFamily }) => {
  const { width: w, height: h, portrait } = useLayout();
  const minFont = Math.ceil(h * (portrait ? .03125 : .01875) / .6);
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const S = Math.min(w, h);
  const hasText = Boolean(name || tagline);
  const mark = S * (hasText ? portrait ? .5 : .26 : .34);
  const cx = w / 2;
  const cy = hasText ? h * (portrait ? .26 : .38) : h / 2;

  // 0-7 hairline, 8 impact (flash + pop), rings every 4f, 18-28 sweep, 24+ name, 32-44 underline.
  const hair = expoOut(prog(frame, 0, 7));
  const hairAlpha = 1 - prog(frame, 8, 12);
  const flash = frame >= 8 ? 0.7 * (1 - prog(frame, 8, 12)) : 0;
  const pop = expoOut(prog(frame, 8, 18));
  const markScale = frame < 8 ? 1.3 : 1.3 - 0.3 * pop;
  const markAlpha = prog(frame, 8, 10);
  const markBlur = (1 - pop) * S * 0.012;
  const sweepP = prog(frame, 18, 28);
  const nameIn = expoOut(prog(frame, 24, 36));
  const line = expoOut(prog(frame, 32, 44));
  const tagIn = prog(frame, 40, 50);

  const nameSize = Math.max(minFont, fitFontSize({ chars: name.length, boxW: w * 0.9, boxH: h * 0.13, charEm: 0.78, lineHeight: 1, max: S * 0.085 }));
  const tagSize = Math.max(minFont, fitFontSize({ chars: tagline.length, boxW: w * 0.84, boxH: h * 0.06, charEm: 0.62, lineHeight: 1, max: S * 0.036 }));
  const leave = 1 - exit;

  return (
    <AbsoluteFill style={{ opacity: leave, transform: `scale(${1 - 0.04 * exit})` }}>
      {flash > 0.001 ? (
        <AbsoluteFill style={{ background: `radial-gradient(ellipse ${w * 0.46}px ${h * 0.46}px at ${cx}px ${cy}px, ${withAlpha("#D4D4D8", flash)}, ${withAlpha("#A1A1AA", flash * 0.55)} 55%, transparent 100%)` }} />
      ) : null}
      {hairAlpha > 0 ? (
        <div
          style={{
            position: "absolute",
            left: cx - (w * 0.24 * hair),
            top: cy,
            width: w * 0.48 * hair,
            height: Math.max(1, S * 0.003),
            background: `linear-gradient(90deg, transparent, ${accent}, ${secondary}, transparent)`,
            opacity: hairAlpha,
          }}
        />
      ) : null}
      {Array.from({ length: rings }, (_, k) => {
        const p = prog(frame, 8 + k * 4, 22 + k * 4);
        if (p <= 0 || p >= 1) return null;
        const r = S * (0.2 + 0.5 * expoOut(p));
        return (
          <div
            key={k}
            style={{
              position: "absolute",
              left: cx - r,
              top: cy - r,
              width: r * 2,
              height: r * 2,
              borderRadius: "50%",
              border: `${Math.max(1, S * 0.004)}px solid ${withAlpha(accent, 0.8 * (1 - p))}`,
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          left: cx - mark * 1.5,
          top: cy - mark / 2,
          width: mark * 3,
          height: mark,
          display: "flex",
          justifyContent: "center",
          opacity: markAlpha,
          transform: `scale(${markScale})`,
          filter: `${markBlur > 0.05 ? `blur(${px(markBlur)}px) ` : ""}drop-shadow(0 0 ${px(mark * 0.18)}px ${withAlpha(accent, 0.4)})`,
        }}
      >
        <MarkTile logo={logo} name={name} size={mark} accent={accent} secondary={secondary} font={font} />
      </div>
      {sweep && sweepP > 0 && sweepP < 1 ? (
        <div
          style={{
            position: "absolute",
            left: cx - mark * 1.6,
            top: cy - mark * 0.9,
            width: mark * 3.2,
            height: mark * 1.8,
            overflow: "hidden",
            WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 40%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 40%, transparent 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-30%",
              height: "160%",
              width: mark * 0.7,
              left: -mark * 0.7 + sweepP * (mark * 3.2 + mark * 0.7),
              transform: "rotate(18deg)",
              background: `linear-gradient(90deg, transparent, ${withAlpha("#ffffff", 0.32)}, transparent)`,
            }}
          />
        </div>
      ) : null}
      {hasText ? (
        <div style={{ position: "absolute", left: 0, right: 0, top: cy + mark * 0.82, display: "flex", flexDirection: "column", alignItems: "center", gap: S * 0.022 }}>
          {name ? (
            <div
              data-21st-slot="name"
              style={{
                fontFamily: font,
                fontWeight: 700,
                fontSize: nameSize,
                lineHeight: 1.2,
                width: w * .9,
                textAlign: "center",
                overflowWrap: "anywhere",
                letterSpacing: "0.16em",
                marginRight: "-0.16em",
                color,
                whiteSpace: "normal",
                opacity: nameIn,
                transform: `translateY(${px((1 - nameIn) * S * 0.02)}px)`,
                textShadow: `0 0 ${px(S * 0.02)}px ${withAlpha(color, 0.3)}`,
              }}
            >
              {name}
            </div>
          ) : null}
          <div style={{ width: S * 0.3 * line, height: Math.max(1, S * 0.0035), borderRadius: S, background: `linear-gradient(90deg, transparent, ${secondary}, ${accent}, transparent)` }} />
          {tagline ? (
            <div data-21st-slot="tagline" style={{ fontFamily: font, fontWeight: 500, fontSize: tagSize, lineHeight: 1.25, letterSpacing: "0.04em", color: withAlpha(color, 0.6), width: w * .84, textAlign: "center", whiteSpace: "normal", overflowWrap: "anywhere", opacity: tagIn }}>
              {tagline}
            </div>
          ) : null}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
