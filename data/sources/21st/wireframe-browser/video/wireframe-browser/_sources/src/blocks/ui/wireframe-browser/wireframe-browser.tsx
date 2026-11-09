// Built with Remotion - https://remotion.pro/license
import React from "react";
import { useVideoConfig, AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, expoOut, ramp, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { Icon } from "../shared/icons";
import { SampleScreen } from "../shared/sample-ui";
import { Media, palette } from "../shared/theme";
import { WindowFrame } from "../shared/window";
import { meta } from "./wireframe-browser.meta";
import type { schema } from "./wireframe-browser.schema";

const FIRST = 12;

export const Component: React.FC<z.infer<typeof schema>> = ({ urls, pages, image, segment, theme, accent, background, fontFamily, surfaceColor, textColor }) => {
  const { width: w, height: h, unit: u, aspect } = useLayout();
  const { frame, exit } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const p = palette(theme, { surfaceColor, textColor });
  const portraitLayout = h > w;
  const nativeFont = useVideoConfig().height * (portraitLayout ? 0.032 : 0.020);

  const bw = aspect === "16:9" ? Math.min(w * 0.8, h * 1.5) : aspect === "1:1" ? w * 0.88 : w * 0.9;
  const bh = aspect === "16:9" ? bw / 1.6 : aspect === "1:1" ? h * 0.74 : h * 0.62;

  // Per-address timeline.
  const segs = urls.map((url, k) => {
    const s = FIRST + k * segment;
    const typeStart = s + (k > 0 ? 6 : 2);
    const rate = Math.max(0.5, url.length / (segment * 0.45));
    const typeEnd = typeStart + Math.ceil(url.length / rate);
    return { url, s, typeStart, rate, typeEnd, enter: typeEnd + 4, page: pages[k] ?? pages[pages.length - 1] ?? "dashboard" };
  });
  const cur = [...segs].reverse().find((g) => frame >= g.s);
  const ci = cur ? segs.indexOf(cur) : -1;
  let address = "";
  let selected = false;
  if (cur) {
    if (frame < cur.typeStart) {
      address = segs[ci - 1]?.url ?? "";
      selected = ci > 0;
    } else address = cur.url.slice(0, Math.min(cur.url.length, Math.floor((frame - cur.typeStart) * cur.rate)));
  }
  const typing = cur ? frame >= cur.s && frame < cur.enter : false;
  const focus = cur ? Math.min(ramp(frame, [cur.s, cur.s + 4], [0, 1]), 1 - ramp(frame, [cur.enter, cur.enter + 6], [0, 1])) : 0;

  const bIn = expoOut(frame / 10);
  const leave = 1 - exit;
  const loading = segs.map((g) => (frame >= g.enter && frame < g.enter + 16 ? ramp(frame, [g.enter, g.enter + 12], [0, 1]) : -1)).find((x) => x >= 0) ?? -1;

  const pageLayer = (k: number, inAt: number, outAt: number | null, node: React.ReactNode) => {
    const inP = inAt <= 0 ? 1 : ramp(frame, [inAt + 6, inAt + 12], [0, 1]);
    const outP = outAt === null ? 0 : ramp(frame, [outAt, outAt + 6], [0, 1]);
    const o = inP * (1 - outP);
    if (o <= 0) return null;
    const blur = (1 - inP) * u * 1.2 + outP * u * 1.2;
    return (
      <div key={k} style={{ position: "absolute", inset: 0, opacity: o, filter: blur > 0.05 ? `blur(${blur}px)` : undefined }}>
        {node}
      </div>
    );
  };

  return (
    <AbsoluteFill style={{ background, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${withAlpha(p.ink, 0.04)} 1px, transparent 1px), linear-gradient(90deg, ${withAlpha(p.ink, 0.04)} 1px, transparent 1px)`,
          backgroundSize: `${u * 6}px ${u * 6}px`,
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
          opacity: leave,
        }}
      />
      <div
        style={{
          opacity: band(frame, 0, 8) * leave,
          filter: bIn < 0.995 || exit > 0 ? `blur(${(1 - bIn) * u + exit * u}px)` : undefined,
          transform: `scale(${(0.97 + 0.03 * bIn) * (1 - 0.03 * exit)})`,
        }}
      >
        <WindowFrame
          w={bw}
          h={bh}
          chrome="browser"
          title={address}
          titleSlot="urls"
          p={p}
          font={font}
          radius={u * 1.8}
          minFontSize={nativeFont}
          focus={focus}
          accent={accent}
          titleBg={selected ? withAlpha(accent, 0.25) : undefined}
          addressTail={
            <>
              <div style={{ width: Math.max(1.5, u * 0.18), height: u * 2, marginLeft: -u * 0.2, background: accent, opacity: typing && Math.floor(frame / 8) % 2 === 0 ? 1 : typing ? 0.25 : 0 }} />
            </>
          }
        >
          {({ w: cw, h: ch }) => (
            <>
              {pageLayer(-1, 0, segs[0]!.enter, (
                <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
                  <Icon name="globe" size={Math.min(cw, ch) * 0.16} color={p.bone} strokeWidth={1.2} />
                </div>
              ))}
              {segs.map((g, k) =>
                pageLayer(
                  k,
                  g.enter,
                  segs[k + 1]?.enter ?? null,
                  k === segs.length - 1 && image ? <Media src={image} /> : <SampleScreen kind={g.page} w={cw} h={ch} p={p} accent={accent} frame={frame - g.enter} seed={`wb${k}`} />,
                ),
              )}
              {loading >= 0 ? (
                <div style={{ position: "absolute", left: 0, top: 0, height: Math.max(2, u * 0.35), width: `${expoOut(loading) * 100}%`, background: accent, opacity: 1 - ramp(loading, [0.8, 1], [0, 1]), boxShadow: `0 0 ${u}px ${withAlpha(accent, 0.6)}` }} />
              ) : null}
            </>
          )}
        </WindowFrame>
      </div>
    </AbsoluteFill>
  );
};
