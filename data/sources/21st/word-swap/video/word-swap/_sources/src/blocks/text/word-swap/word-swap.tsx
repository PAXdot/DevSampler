// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill } from "remotion";
import type { z } from "zod";
import { band, brandFontStack, easeInOut, easeOut, expoOut, fitFontSize, useEnterExit, useLayout } from "../../../kit/index";
import { DirBlur, textEm, useSafeId } from "../shared";
import { meta } from "./word-swap.meta";
import type { schema } from "./word-swap.schema";

const START = 2;
const LEAD = 20;
const PUSH = 7;
const LH = 1.12;

export const Component: React.FC<z.infer<typeof schema>> = ({ staticLine, words, color, accent, fontFamily, every, direction }) => {
  const { width, height, portrait } = useLayout();
  const { frame, outStart } = useEnterExit(meta.timing);
  const font = brandFontStack(fontFamily);
  const baseId = useSafeId("swap");
  const list = words.length ? words : [" "];
  const n = list.length;

  const widest = Math.max(4, textEm(staticLine, -0.04), ...list.map((w) => textEm(w, -0.04)));
  const size = fitFontSize({ chars: 1, boxW: width * 0.9, boxH: height * 0.86, charEm: widest, lineHeight: LH * 2, max: Math.min(height * 0.26, width * (portrait ? 0.28 : 0.09)), min: portrait ? height * 0.03125 : undefined });
  const rowW = width * 0.94;

  let k = 0;
  for (let j = 1; j < n; j++) if (frame >= LEAD + j * every) k = j;
  const t = k > 0 ? easeInOut((frame - LEAD - k * every) / PUSH) : 1;

  const enter = expoOut((frame - START) / 10);
  const leave = easeOut((frame - outStart) / 6);
  const sideways = direction === "left";
  const smear = Math.sin(Math.PI * t) * size * 0.22;

  const word = (w: string, offset: number, key: string, slot: boolean, id: string) => (
    <div
      key={key}
      data-21st-slot={slot ? "words" : undefined}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", textAlign: "center", maxWidth: rowW,
        opacity: 1 - Math.min(1, Math.abs(offset) * 1.6),
        transform: offset === 0 ? undefined : sideways ? `translateX(${offset * rowW * 0.4}px)` : `translateY(${offset * size * 1.1}px)`,
        filter: smear > 0.3 && sideways ? `url(#${id})` : undefined,
      }}
    >
      {w}
    </div>
  );

  const pid = `${baseId}-p`;
  const cid = `${baseId}-c`;
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      {smear > 0.3 && sideways ? (
        <>
          <DirBlur id={pid} x={smear} />
          <DirBlur id={cid} x={smear} />
        </>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: portrait ? height * 0.78 : undefined,
          justifyContent: portrait ? "space-between" : undefined,
          maxWidth: rowW,
          fontFamily: font,
          fontWeight: 600,
          fontSize: size,
          lineHeight: LH,
          letterSpacing: "-0.04em",
          opacity: 1 - leave,
          transform: leave > 0 ? `translateY(${-leave * size * 0.2}px)` : undefined,
        }}
      >
        <div
          data-21st-slot="staticLine"
          style={{
            color,
            whiteSpace: portrait ? "normal" : "nowrap", overflowWrap: "anywhere", textAlign: "center", maxWidth: rowW,
            opacity: band(frame, START, START + 8),
            transform: enter < 1 ? `translateY(${(1 - enter) * size * 0.35}px)` : undefined,
          }}
        >
          {staticLine}
        </div>
        <div
          style={{
            position: "relative",
            width: rowW,
            height: portrait ? `${LH * 2.4}em` : `${LH * 1.5}em`,
            borderBottom: portrait ? `${Math.max(2, size * 0.025)}px solid ${accent}` : undefined,
            overflow: "hidden",
            color: accent,
            opacity: band(frame, START + 5, START + 13),
            transform: enter < 1 ? `translateY(${(1 - expoOut((frame - START - 5) / 10)) * size * 0.35}px)` : undefined,
          }}
        >
          {k > 0 && t < 1 ? word(list[k - 1]!, -t, `p${k}`, false, pid) : null}
          {word(list[k]!, k > 0 ? 1 - t : 0, `c${k}`, true, cid)}
        </div>
      </div>
    </AbsoluteFill>
  );
};
