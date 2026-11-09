// Built with Remotion - https://remotion.pro/license
import React from "react";
import { AbsoluteFill, spring, useVideoConfig } from "remotion";
import type { z } from "zod";
import { APPLE, brandFontStack, expoOut, fitFontSize, inkOn, springSnap, useEnterExit, useLayout, withAlpha } from "../../../kit/index";
import { wordFitSize } from "../../text/shared";
import { Avatar, Glyph, Ground, fmtInt, prog, px, surfaceFor, typeFloor, useAuthoredFrame } from "../shared";
import { meta } from "./post-card.meta";
import type { schema } from "./post-card.schema";

const SETTLE = 108;
const WORDS_AT = 16;
const MARK_AT = 64;
const COUNT_AT = 70;
const LIKE_AT = 80;

type Run = { text: string; em: boolean };
type Word = Run[];

/** "a *b c*, d" -> words of runs; punctuation stays on its word, stars only flag runs. */
function words(input: string): Word[] {
  const out: Word[] = [];
  let em = false;
  let word: Word = [];
  const push = (ch: string) => {
    const last = word[word.length - 1];
    if (last && last.em === em) last.text += ch;
    else word.push({ text: ch, em });
  };
  for (const ch of input) {
    if (ch === "*") em = !em;
    else if (/\s/.test(ch)) {
      if (word.length) out.push(word);
      word = [];
    } else push(ch);
  }
  if (word.length) out.push(word);
  return out;
}

export const Component: React.FC<z.infer<typeof schema>> = ({ name, handle, time, post, avatar, verified, replies, reposts, likes, color, accent, surfaceColor, background, fontFamily, bodyFontFamily }) => {
  const { fps } = useVideoConfig();
  const { width: W, height: H, unit: u, aspect, portrait } = useLayout();
  const { frame: raw } = useEnterExit(meta.timing);
  const f = useAuthoredFrame(raw, SETTLE);
  const head = brandFontStack(fontFamily);
  const body = brandFontStack(bodyFontFamily ?? fontFamily);
  const s = surfaceFor(surfaceColor, color);
  const floor = typeFloor(H, portrait);

  const list = words(post);
  const plain = list.map((w) => w.map((r) => r.text).join("")).join(" ");
  const cardW = aspect === "16:9" ? Math.min(W * 0.5, H * 0.98) : aspect === "1:1" ? W * 0.82 : W * 0.88;
  const pad = cardW * (portrait ? 0.065 : 0.07);
  const innerW = cardW - pad * 2;
  const boxH = H * (aspect === "16:9" ? 0.34 : aspect === "1:1" ? 0.36 : 0.4);
  const maxBody = u * (aspect === "16:9" ? 4.6 : aspect === "1:1" ? 5.4 : 7.2);
  const fitted = Math.max(...[2, 3, 4, 5, 6, 7].map((lines) => fitFontSize({ chars: Math.max(plain.length, 24), boxW: innerW, boxH, lines, charEm: 0.5, lineHeight: 1.38, max: maxBody })));
  const bodyFs = Math.max(floor * 1.12, Math.min(fitted, wordFitSize(plain, innerW, { family: bodyFontFamily })));
  const nameFs = Math.max(floor, bodyFs * 0.94);
  const metaFs = Math.max(floor, bodyFs * 0.84);
  const countFs = Math.max(floor, bodyFs * 0.84);
  const avatarSize = nameFs * (portrait ? 2.3 : 2.5);

  // Motion.
  const card = springSnap(f, fps, 0, APPLE);
  const avatarIn = springSnap(f, fps, 5, { damping: 11, stiffness: 160, mass: 0.7 });
  const headIn = expoOut(prog(f, 8, 18));
  const per = Math.min(2.2, 46 / Math.max(1, list.length));
  const emCount = list.reduce((n, w) => n + (w.some((r) => r.em) ? 1 : 0), 0);
  const footIn = expoOut(prog(f, COUNT_AT - 6, COUNT_AT + 4));
  const countP = expoOut(prog(f, COUNT_AT, COUNT_AT + 26));
  const likeP = expoOut(prog(f, COUNT_AT + 2, SETTLE - 2));
  const ticks = f >= SETTLE ? Math.floor((f - SETTLE) / 16) + 1 : 0;
  const likeNow = Math.round(likes * likeP) + (likes > 0 ? ticks : 0);
  const liked = f >= LIKE_AT;
  const heartRaw = spring({ frame: f - LIKE_AT, fps, config: { damping: 8, stiffness: 220, mass: 0.6 } });
  const heart = liked ? (Math.abs(1 - heartRaw) < 1e-3 ? 1 : heartRaw) : 1;
  const burst = prog(f, LIKE_AT, LIKE_AT + 16);

  // Marked words light up left to right; the spaces between two marked words light with them.
  const emFlags = list.map((w) => w.some((r) => r.em));
  let emIndex = 0;
  const marks = emFlags.map((isEm) => {
    if (!isEm) return 0;
    const k = emIndex++;
    const a = MARK_AT + (k / Math.max(1, emCount)) * 10;
    return expoOut(prog(f, a, a + 4));
  });
  const markFill = withAlpha(accent, s.dark ? 0.34 : 0.2);
  const markBg = (p: number): React.CSSProperties => ({ backgroundImage: `linear-gradient(${markFill}, ${markFill})`, backgroundRepeat: "no-repeat", backgroundSize: `${px(p * 100)}% 100%` });
  const postNode = list.map((w, i) => {
    const at = WORDS_AT + i * per;
    const p = expoOut(prog(f, at, at + 7));
    const joined = emFlags[i] && emFlags[i + 1];
    return (
      <React.Fragment key={i}>
        <span
          style={{
            display: "inline-block",
            opacity: p,
            transform: p < 1 ? `translateY(${px((1 - p) * bodyFs * 0.35)}px)` : undefined,
            filter: p < 1 ? `blur(${px((1 - p) * bodyFs * 0.12)}px)` : undefined,
          }}
        >
          {w.map((r, k) => (
            <span key={k} style={r.em ? { fontWeight: 600, ...markBg(marks[i]!) } : undefined}>
              {r.text}
            </span>
          ))}
        </span>
        {i < list.length - 1 ? <span style={joined ? markBg(marks[i + 1]!) : undefined}> </span> : null}
      </React.Fragment>
    );
  });

  const counter = (icon: "message-circle" | "repeat-2" | "heart", value: string, slot: string, active = false) => (
    <div style={{ display: "flex", alignItems: "center", gap: countFs * 0.42, position: "relative" }}>
      <div style={{ position: "relative", width: countFs * 1.15, height: countFs * 1.15, transform: active ? `scale(${px(0.6 + 0.4 * heart)})` : undefined }}>
        {active && burst > 0 && burst < 1
          ? [0, 1, 2, 3, 4, 5, 6, 7].map((k) => {
              const a = (k / 8) * Math.PI * 2 + 0.3;
              const r = countFs * (0.5 + 1.1 * expoOut(burst));
              return (
                <div
                  key={k}
                  style={{
                    position: "absolute",
                    left: countFs * 0.575 + Math.cos(a) * r - countFs * 0.09,
                    top: countFs * 0.575 + Math.sin(a) * r - countFs * 0.09,
                    width: countFs * 0.18,
                    height: countFs * 0.18,
                    borderRadius: "50%",
                    background: accent,
                    opacity: 1 - burst,
                    transform: `scale(${px(1 - burst * 0.6)})`,
                  }}
                />
              );
            })
          : null}
        <Glyph name={icon} size={countFs * 1.15} color={active && liked ? accent : s.muted} fill={active && liked ? accent : "none"} strokeWidth={2} />
      </div>
      <span data-21st-slot={slot} style={{ fontFamily: head, fontSize: countFs, fontWeight: 500, color: active && liked ? accent : s.muted, fontVariantNumeric: "tabular-nums", lineHeight: 1.2, whiteSpace: "nowrap" }}>
        {value}
      </span>
    </div>
  );

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", perspective: W * 1.4 }}>
      <Ground background={background} color={color} accent={accent} x={0.5} y={portrait ? 0.62 : 0.6} portrait={portrait} />
      <div
        style={{
          position: "relative",
          width: cardW,
          boxSizing: "border-box",
          padding: pad,
          borderRadius: pad * 0.62,
          background: s.card,
          boxShadow: s.shadow(u),
          display: "flex",
          flexDirection: "column",
          gap: bodyFs * (portrait ? 1.0 : 0.9),
          opacity: prog(f, 0, 6),
          transform: card < 1 ? `translateY(${px((1 - card) * u * 7)}px) rotateX(${px((1 - card) * 16)}deg) scale(${px(0.94 + 0.06 * card)})` : undefined,
          transformOrigin: "50% 100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: nameFs * 0.6 }}>
          <div style={{ transform: avatarIn < 1 ? `scale(${px(Math.max(0, avatarIn))})` : undefined }}>
            <Avatar name={name} src={avatar || undefined} size={avatarSize} accent={accent} font={head} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: nameFs * 0.12, minWidth: 0, opacity: headIn, transform: headIn < 1 ? `translateX(${px((1 - headIn) * -nameFs * 0.5)}px)` : undefined }}>
            <div style={{ display: "flex", alignItems: "center", gap: nameFs * 0.3 }}>
              <span data-21st-slot="name" style={{ fontFamily: head, fontWeight: 650, fontSize: nameFs, color: s.ink, letterSpacing: "-0.015em", lineHeight: 1.15 }}>
                {name}
              </span>
              {verified ? <Glyph name="badge-check" size={nameFs * 0.95} color={inkOn(accent)} fill={accent} strokeWidth={1.8} /> : null}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", columnGap: metaFs * 0.4, fontFamily: head, fontSize: metaFs, color: s.faint, lineHeight: 1.2 }}>
              <span data-21st-slot="handle">{handle}</span>
              {time ? (
                <>
                  <span>·</span>
                  <span data-21st-slot="time">{time}</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div data-21st-slot="post" style={{ fontFamily: body, fontSize: bodyFs, lineHeight: 1.38, letterSpacing: "-0.012em", color: s.ink, textWrap: "pretty" }}>
          {postNode}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: bodyFs * 0.8,
            borderTop: `1px solid ${s.line}`,
            paddingRight: portrait ? 0 : innerW * 0.18,
            opacity: footIn,
            transform: footIn < 1 ? `translateY(${px((1 - footIn) * countFs * 0.4)}px)` : undefined,
          }}
        >
          {counter("message-circle", fmtInt(replies * countP), "replies")}
          {counter("repeat-2", fmtInt(reposts * countP), "reposts")}
          {counter("heart", fmtInt(likeNow), "likes", true)}
        </div>
      </div>
    </AbsoluteFill>
  );
};
