// Built with Remotion - https://remotion.pro/license
// A generic phone drawn as a real CSS 3D slab: stacked body layers give it a
// visible edge when it turns, a bezel-framed screen on the front and either a
// plain back (with a camera bump) or a second screen on the back. No brand
// shapes: rounded rectangle, pill notch, round camera.
import React from "react";
import { withAlpha } from "../../../kit/index";

export const PHONE_RATIO = 19.5 / 9;

export const PhoneSlab: React.FC<{
  w: number;
  /** Height; defaults to the phone ratio. */
  h?: number;
  /** Edge thickness in px. */
  depth: number;
  /** Body / bezel color. */
  body?: string;
  /** Front screen content (fills the screen area, position: absolute children welcome). */
  children?: React.ReactNode;
  /** Back face content; a plain back with a camera bump when omitted. */
  back?: React.ReactNode;
  /** Hide the notch pill (e.g. landscape screens). */
  notch?: boolean;
  style?: React.CSSProperties;
}> = ({ w, h = w * PHONE_RATIO, depth, body = "#121214", children, back, notch = true, style }) => {
  // Metal, glass and lens coatings share the supplied body's hue. Lightness
  // describes the material rather than introducing a second fixed pigment.
  const material = (lightness: number, chroma = 0.008) => `oklch(from ${body} ${lightness} min(c, ${chroma}) h)`;
  const edge = material(0.535);
  const highlight = material(0.995, 0.001);
  const glass = material(0.045, 0.004);
  const lensHighlight = material(0.355, 0.018);
  const lens = material(0.119, 0.008);
  const shadow = material(0.045, 0.004);
  const r = w * 0.15;
  const pad = w * 0.035;
  // ~1 layer per 1.4px keeps the edge solid at grazing angles, capped for speed.
  const n = Math.max(3, Math.min(18, Math.round(depth / 1.4)));
  const layers = Array.from({ length: n }, (_, i) => i / (n - 1));
  const face: React.CSSProperties = { position: "absolute", inset: 0, borderRadius: r, backfaceVisibility: "hidden" };
  return (
    <div style={{ position: "relative", width: w, height: h, transformStyle: "preserve-3d", ...style }}>
      {layers.map((k, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: r,
            background: i === 0 || i === n - 1 ? body : `color-mix(in srgb, ${body} ${70 + 30 * Math.abs(0.5 - k) * 2}%, ${edge})`,
            transform: `translateZ(${-depth * k}px)`,
          }}
        />
      ))}
      {/* front */}
      <div style={{ ...face, transform: "translateZ(0.6px)", background: body, padding: pad, boxShadow: `inset 0 0 0 ${Math.max(1, w * 0.004)}px ${withAlpha(highlight, 0.16)}` }}>
        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: r - pad, overflow: "hidden", background: glass }}>
          {children}
          {notch ? (
            <div style={{ position: "absolute", top: w * 0.03, left: "50%", width: w * 0.28, height: w * 0.08, marginLeft: -w * 0.14, borderRadius: 999, background: glass, zIndex: 3 }} />
          ) : null}
        </div>
      </div>
      {/* back */}
      <div style={{ ...face, transform: `translateZ(${-depth - 0.6}px) rotateY(180deg)`, background: back ? body : `linear-gradient(150deg, color-mix(in srgb, ${body} 80%, ${highlight}), ${body} 60%)`, padding: back ? pad : 0 }}>
        {back ? (
          <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: r - pad, overflow: "hidden", background: glass }}>{back}</div>
        ) : (
          <div
            style={{
              position: "absolute",
              top: w * 0.07,
              left: w * 0.07,
              width: w * 0.34,
              height: w * 0.34,
              borderRadius: w * 0.1,
              background: `color-mix(in srgb, ${body} 75%, ${highlight})`,
              boxShadow: `inset 0 0 0 1px ${withAlpha(highlight, 0.1)}`,
            }}
          >
            {[
              [0.27, 0.27],
              [0.73, 0.27],
              [0.27, 0.73],
            ].map(([x, y], i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${(x ?? 0) * 100}%`,
                  top: `${(y ?? 0) * 100}%`,
                  width: w * 0.1,
                  height: w * 0.1,
                  margin: -w * 0.05,
                  borderRadius: 999,
                  background: `radial-gradient(circle at 40% 35%, ${lensHighlight}, ${lens} 70%)`,
                  boxShadow: `0 0 0 2px ${withAlpha(shadow, 0.5)}`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
