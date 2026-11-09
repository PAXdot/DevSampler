"use client";
import { useState } from "react";

type Kind = "system" | "history" | "chunk" | "user";
type Item = { id: number; kind: Kind; tokens: number };
type Props = { windows?: number[]; startWindow?: number };

const colors: Record<Kind, string> = {
  system: "#7C9BFF",
  history: "#FFC93C",
  chunk: "#5FD8B0",
  user: "#FF8FB8",
};
const names: Record<Kind, string> = {
  system: "System",
  history: "History",
  chunk: "Chunk",
  user: "Question",
};

const startItems: Item[] = [
  { id: 1, kind: "system", tokens: 600 },
  { id: 2, kind: "history", tokens: 1800 },
  { id: 3, kind: "chunk", tokens: 900 },
  { id: 4, kind: "chunk", tokens: 900 },
  { id: 5, kind: "chunk", tokens: 900 },
  { id: 6, kind: "user", tokens: 150 },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');

.cw {
  --bg: #f4f5f9; --card: #ffffff; --ink: #14172a; --muted: #62677d; --line: #dcdfeb;
  width: 100%; max-width: 640px; padding: 26px; border-radius: 20px;
  background: var(--bg); color: var(--ink); border: 1px solid var(--line);
  font-family: 'Sora', system-ui, sans-serif;
}
.dark .cw { --bg: #12141e; --card: #1a1d2b; --ink: #eceef8; --muted: #9a9fb6; --line: #2a2e42; }
.cw * { box-sizing: border-box; }

.cw-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.cw-title { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -.01em; }
.cw-sub { margin: 4px 0 0; font-size: 13px; color: var(--muted); }
.cw-count { font-size: 14px; font-variant-numeric: tabular-nums; color: var(--muted); }
.cw-count b { color: var(--ink); font-weight: 600; }

.cw-stage { position: relative; margin-top: 44px; }
.cw-track {
  position: relative; display: flex; height: 68px; border-radius: 12px; overflow: hidden;
  background: repeating-linear-gradient(90deg, var(--line) 0 2px, transparent 2px 10px);
  border: 1px solid var(--line);
}
.cw-block {
  flex: none; height: 100%; display: flex; flex-direction: column; justify-content: center;
  padding: 0 10px; overflow: hidden; white-space: nowrap; color: #1a1a1a;
  border-right: 2px solid var(--bg); transform-origin: left;
  transition: width .45s cubic-bezier(.2,.7,.2,1), opacity .3s ease;
  animation: cw-in .45s cubic-bezier(.2,.7,.2,1) both;
}
.cw-block b { font-size: 13px; font-weight: 600; }
.cw-block span { font-size: 11px; opacity: .75; font-variant-numeric: tabular-nums; }
.cw-cut {
  position: absolute; top: 0; bottom: 0; right: 0; display: grid; place-items: center;
  background: repeating-linear-gradient(135deg, rgba(214,58,58,.42) 0 6px, rgba(214,58,58,.12) 6px 12px);
  border-left: 2px solid #D63A3A; pointer-events: none; transition: left .45s cubic-bezier(.2,.7,.2,1);
}
.cw-cut span { padding: 3px 8px; border-radius: 99px; background: #D63A3A; color: #fff; font-size: 11px; font-weight: 600; letter-spacing: .08em; }
.cw-limit { position: absolute; top: -26px; bottom: -8px; width: 0; border-left: 2px solid var(--ink); transition: left .45s cubic-bezier(.2,.7,.2,1); pointer-events: none; }
.cw-limit span { position: absolute; top: 0; right: 8px; font-size: 12px; font-weight: 600; white-space: nowrap; }

.cw-status { margin: 18px 0 0; min-height: 44px; font-size: 15px; line-height: 1.45; }
.cw-status.bad { color: #D63A3A; }
.cw-status.ok { color: #1F8A4C; }
.dark .cw-status.bad { color: #FF7B7B; }
.dark .cw-status.ok { color: #5FD8B0; }

.cw-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 14px; }
.cw-lbl { font-size: 12px; color: var(--muted); margin-right: 4px; }
.cw-btn {
  all: unset; box-sizing: border-box; cursor: pointer; padding: 7px 12px; font-size: 13px;
  border: 1px solid var(--line); border-radius: 99px; background: var(--card);
  transition: border-color .2s ease, background .2s ease;
}
.cw-btn:hover { border-color: var(--ink); }
.cw-btn:focus-visible { outline: 2px solid var(--ink); outline-offset: 2px; }
.cw-btn[aria-checked="true"], .cw-btn[aria-pressed="true"] { background: var(--ink); color: var(--bg); border-color: var(--ink); }
.cw-btn.dot::before { content: ""; display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 7px; background: var(--c); }

.cw-note { margin: 16px 0 0; font-size: 12px; color: var(--muted); }

@keyframes cw-in { from { transform: scaleX(.2); opacity: 0; } }
@media (max-width: 480px) { .cw { padding: 18px; } }
@media (prefers-reduced-motion: reduce) { .cw-block, .cw-cut, .cw-limit { transition: none; animation: none; } }
`;

export function Component({ windows = [4000, 8000, 16000, 32000], startWindow = 0 }: Props) {
  const [items, setItems] = useState<Item[]>(startItems);
  const [wi, setWi] = useState(startWindow);
  const [attn, setAttn] = useState(true);

  const limit = windows[wi] ?? windows[0];
  const total = items.reduce((a, b) => a + b.tokens, 0);
  const scale = Math.max(total, limit);
  const over = Math.max(0, total - limit);
  const pct = (n: number) => `${(n / scale) * 100}%`;

  const addChunk = () =>
    setItems((it) => {
      const id = Math.max(0, ...it.map((i) => i.id)) + 1;
      const copy = [...it];
      copy.splice(copy.length - 1, 0, { id, kind: "chunk", tokens: 900 });
      return copy;
    });

  const addTurn = () =>
    setItems((it) => {
      const id = Math.max(0, ...it.map((i) => i.id)) + 1;
      const copy = [...it];
      const at = copy.findIndex((x) => x.kind === "chunk");
      copy.splice(at < 0 ? copy.length - 1 : at, 0, { id, kind: "history", tokens: 700 });
      return copy;
    });

  const removeLast = () =>
    setItems((it) => {
      const removable = it.filter((x) => x.kind === "history" || x.kind === "chunk");
      if (removable.length === 0) return it;
      const maxId = Math.max(...removable.map((x) => x.id));
      return it.filter((x) => x.id !== maxId);
    });

  let acc = 0;
  const blocks = items.map((it) => {
    const s = acc;
    acc += it.tokens;
    return { ...it, s };
  });
  const last = blocks[blocks.length - 1];
  const questionCut = last.kind === "user" && last.s + last.tokens > limit;

  const fade = (s: number, tokens: number) => {
    if (!attn) return 1;
    const c = (s + tokens / 2) / limit;
    if (c >= 1) return 1;
    return 1 - 0.5 * (1 - Math.abs(2 * c - 1));
  };

  return (
    <div className="cw">
      <style>{css}</style>

      <div className="cw-head">
        <div>
          <h3 className="cw-title">Context Window Packer</h3>
          <p className="cw-sub">Everything you send competes for the same space.</p>
        </div>
        <div className="cw-count">
          <b>{total.toLocaleString("en-US")}</b> / {limit.toLocaleString("en-US")} tokens
        </div>
      </div>

      <div className="cw-stage">
        <div className="cw-limit" style={{ left: pct(limit) }}>
          <span>{limit / 1000}K window</span>
        </div>
        <div className="cw-track">
          {blocks.map((b) => {
            const w = (b.tokens / scale) * 100;
            return (
              <div
                key={b.id}
                className="cw-block"
                title={`${names[b.kind]}: ${b.tokens} tokens`}
                style={{
                  width: `${w}%`,
                  background: colors[b.kind],
                  opacity: fade(b.s, b.tokens),
                }}
              >
                {w > 11 && <b>{names[b.kind]}</b>}
                {w > 18 && <span>{b.tokens.toLocaleString("en-US")}</span>}
              </div>
            );
          })}
          {over > 0 && (
            <div className="cw-cut" style={{ left: pct(limit) }}>
              <span>CUT OFF</span>
            </div>
          )}
        </div>
      </div>

      <p className={`cw-status ${over > 0 ? "bad" : "ok"}`} aria-live="polite">
        {over > 0
          ? `${over.toLocaleString("en-US")} tokens do not fit. The model never sees them.${
              questionCut ? " That includes the user's question." : ""
            }`
          : "Everything fits. Add more context and watch what happens."}
      </p>

      <div className="cw-row">
        <button type="button" className="cw-btn dot" style={{ ["--c" as string]: colors.chunk }} onClick={addChunk}>
          Add retrieved chunk
        </button>
        <button type="button" className="cw-btn dot" style={{ ["--c" as string]: colors.history }} onClick={addTurn}>
          Add chat turn
        </button>
        <button type="button" className="cw-btn" onClick={removeLast}>
          Remove last
        </button>
        <button type="button" className="cw-btn" onClick={() => setItems(startItems)}>
          Reset
        </button>
      </div>

      <div className="cw-row" role="radiogroup" aria-label="Window size">
        <span className="cw-lbl">Window</span>
        {windows.map((w, i) => (
          <button
            key={w}
            type="button"
            role="radio"
            aria-checked={i === wi}
            className="cw-btn"
            onClick={() => setWi(i)}
          >
            {w / 1000}K
          </button>
        ))}
        <button
          type="button"
          className="cw-btn"
          aria-pressed={attn}
          onClick={() => setAttn((a) => !a)}
        >
          Attention fade
        </button>
      </div>

      <p className="cw-note">
        Demo sizes are illustrative. Attention fade dims the middle of the window, where long
        prompts tend to be used least.
      </p>
    </div>
  );
}