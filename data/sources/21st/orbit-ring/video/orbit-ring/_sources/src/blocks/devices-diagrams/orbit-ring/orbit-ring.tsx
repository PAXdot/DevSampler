// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, inkOn, easeInOut, fitFontSize, ramp, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { contrastInk } from "../_shared/media";
import { Icon, type IconName } from "../_shared/icons";
import { meta } from "./orbit-ring.meta";
import type { schema } from "./orbit-ring.schema";

const POP = { damping: 12, mass: 0.6, stiffness: 170 } as const;
const ICONS: IconName[] = ["zap", "database", "cloud", "lock", "chart", "mail", "message", "search", "terminal", "branch", "image", "music"];
const RINGS = [0.4, 0.7, 1];
const SHARE = [0.25, 0.35, 0.4];

/** A center label with badges orbiting on three hairline rings, inner ones faster (research V12). */
export const Component: React.FC<z.infer<typeof schema>> = ({ centerLabel, count, speed, badges, secondary, accent, color, fontFamily }) => {
  const { fps } = useVideoConfig();
  const { width, height, portrait } = useLayout();
  const minFont = Math.ceil(height * (portrait ? .03125 : .01875) / .6);
  const { frame, exit, outStart, durationInFrames } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);

  const wide = width > height * 1.2;
  const ry = Math.min(width, height) * 0.44;
  const rx = wide ? Math.min(width * 0.46, ry * 1.8) : ry;
  const cx = width / 2;
  const cy = height / 2;
  const t = frame / fps;
  const ds = Math.min(width, height) * 0.1;
  const palette = [accent, secondary ?? accent, ...[80, 60, 40, 20, 10].map((p) => `color-mix(in oklch, ${accent} ${p}%, #A1A1AA)`)];
  const shadow = `oklch(from ${accent} 0.045 min(c, 0.004) h)`;

  // Split badges over the rings.
  const per = SHARE.map((s) => Math.max(1, Math.round(count * s)));
  const extra = count - per.reduce((a, b) => a + b, 0);
  per[2] = Math.max(1, (per[2] ?? 1) + extra);
  const items: { ring: number; j: number; m: number; idx: number }[] = [];
  per.forEach((m, ring) => {
    for (let j = 0; j < m; j++) items.push({ ring, j, m, idx: items.length });
  });

  const labelSize = Math.max(minFont, fitFontSize({ chars: centerLabel.length, boxW: rx * 0.62, boxH: ry * 0.16, charEm: 0.56, max: ds * 0.42 }));
  const centerPop = springSnap(frame, fps, 4, POP);
  const sw = Math.max(1, ds * 0.02);

  return (
    <AbsoluteFill style={{ opacity: 1 - exit }}>
      <svg width={width} height={height} style={{ position: "absolute", inset: 0 }}>
        {RINGS.map((r, k) => (
          <ellipse
            key={k}
            cx={cx}
            cy={cy}
            rx={rx * r}
            ry={ry * r}
            fill="none"
            stroke={withAlpha(color, 0.14 - k * 0.02)}
            strokeWidth={sw}
            pathLength={1}
            strokeDasharray="1 1"
            strokeDashoffset={1 - easeInOut((frame - k * 3) / 16) * (1 - exit)}
          />
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          left: cx - rx * 0.4,
          top: cy - ry * 0.4,
          width: rx * 0.8,
          height: ry * 0.8,
          borderRadius: "50%",
          background: `radial-gradient(closest-side, ${withAlpha(accent, 0.3)}, transparent)`,
          opacity: band(frame, 4, 24) * (1 - exit),
        }}
      />
      {items.map(({ ring, j, m, idx }) => {
        const dir = ring % 2 ? -1 : 1;
        const sp = speed * [1.5, 1, 0.65][ring]!;
        const a = ((j / m) * 360 + ring * 23 + dir * sp * t) * (Math.PI / 180);
        const r = RINGS[ring] ?? 1;
        const out = ramp(frame, [outStart + idx * 0.6, outStart + idx * 0.6 + 8], [0, 1]);
        const pull = 1 - 0.35 * out;
        const x = cx + Math.cos(a) * rx * r * pull;
        const y = cy + Math.sin(a) * ry * r * pull;
        const depth = wide ? 0.86 + 0.22 * ((Math.sin(a) + 1) / 2) : 1;
        const pop = springSnap(frame, fps, 10 + idx * 3, POP) * (1 - out);
        const size = ds * (ring === 0 ? 0.8 : ring === 1 ? 0.92 : 1) * depth;
        const c = palette[idx % palette.length] ?? accent;
        let inner: React.ReactNode;
        if (badges === "people") {
          inner = (
            <div style={{ position: "absolute", inset: 0, borderRadius: 999, overflow: "hidden", background: `linear-gradient(140deg, ${c}, color-mix(in srgb, ${c} 55%, ${shadow}))` }}>
              <div style={{ position: "absolute", left: "33%", top: "20%", width: "34%", height: "34%", borderRadius: 999, background: withAlpha(color, 0.92) }} />
              <div style={{ position: "absolute", left: "16%", top: "62%", width: "68%", height: "60%", borderRadius: "50% 50% 0 0", background: withAlpha(color, 0.92) }} />
            </div>
          );
        } else if (badges === "icons") {
          inner = (
            <div style={{ position: "absolute", inset: 0, borderRadius: size * 0.3, background: c, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={ICONS[idx % ICONS.length] ?? "zap"} size={size * 0.48} color={contrastInk(c)} strokeWidth={2.2} />
            </div>
          );
        } else {
          inner = <div style={{ position: "absolute", inset: size * 0.28, borderRadius: 999, background: c, boxShadow: `0 0 ${size * 0.5}px ${c}` }} />;
        }
        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: x - size / 2,
              top: y - size / 2,
              width: size,
              height: size,
              zIndex: Math.round(depth * 100),
              transform: `scale(${pop})`,
              borderRadius: badges === "icons" ? size * 0.3 : 999,
              boxShadow: badges === "dots" ? undefined : `0 0 0 ${Math.max(1.5, size * 0.05)}px ${withAlpha(color, 0.9)}, 0 ${size * 0.1}px ${size * 0.3}px ${withAlpha(shadow, 0.35)}`,
            }}
          >
            {inner}
          </div>
        );
      })}
      <div style={{ position: "absolute", left: cx, top: cy, width: portrait ? width * .68 : undefined, zIndex: 120, transform: `translate(-50%, -50%) scale(${(0.7 + 0.3 * centerPop) * (1 - exit * 0.1)})`, opacity: band(frame, 4, 8) * (1 - exit) }}>
        <div
          data-21st-slot="centerLabel"
          style={{
            padding: `${labelSize * 0.55}px ${labelSize * 1}px`,
            borderRadius: 999,
            background: accent,
            color: contrastInk(accent),
            fontFamily: font,
            fontWeight: 600,
            fontSize: labelSize,
            letterSpacing: "-0.02em",
            maxWidth: width * .86,
            boxSizing: "border-box",
            whiteSpace: "normal",
            textAlign: "center",
            overflowWrap: "anywhere",
            lineHeight: 1.25,
            boxShadow: `0 0 ${labelSize * 2}px ${withAlpha(accent, 0.55)}, inset 0 1px 0 ${withAlpha(contrastInk(accent), 0.25)}`,
          }}
        >
          {centerLabel}
        </div>
      </div>
    </AbsoluteFill>
  );
};
