"use client";
import * as React from "react";

export type State = {
  active?: number;
  open?: boolean;
  expanded?: number;
  reveal?: number;
  previous?: number;
  blend?: number;
  selected?: string;
  query?: string;
  notice?: string;
  highlighted?: boolean;
};
export type Props = {
  title?: string;
  subtitle?: string;
  state?: State;
  onStateChange?: (state: State) => void;
  onAction?: (action: string) => void;
  seeking?: boolean;
  theme?: "light" | "dark";
  className?: string;
  data?: Segment[];
};
function useStateValue(
  initial: State,
  controlled: State | undefined,
  notify: Props["onStateChange"],
) {
  const [local, update] = React.useState(initial);
  const value = controlled ?? local;
  const set = (patch: Partial<State>) => {
    const next = { ...value, ...patch };
    update(next);
    notify?.(next);
  };
  return [value, set] as const;
}
const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));
function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      style={{ transform: back ? "rotate(180deg)" : undefined }}
    >
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}
function Check() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="m3 8 3 3 7-7" />
    </svg>
  );
}

export type Segment = { label: string; value: number; description?: string };
const sampleSegments: Segment[] = [
  { label: "Organic search", value: 18420, description: "Found through search" },
  { label: "Direct", value: 12400, description: "Already know your name" },
  { label: "Referrals", value: 7840, description: "A good recommendation" },
  { label: "Social", value: 4020, description: "Part of the conversation" },
];
const styles = `
.s20 {
  --bg: var(--background, #ffffff);
  --fg: var(--foreground, #111111);
  --muted: #72757a;
  --line: #e6e7e9;
  --soft: #f5f5f4;
  --raised: #fff;
  --blue: #3269b5;
  --green: #36745a;
  --tint: #edf3fb;
  box-sizing: border-box;
  color: var(--fg);
  background: var(--bg);
  font:
    14px/1.5 -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  width: 100%;
  max-width: 760px;
  min-width: 0;
  margin: auto;
  position: relative;
  container-type: inline-size;
  color-scheme: light;
  text-align: left;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 30px;
}
.dark .s20,
.s20[data-theme="dark"] {
  --bg: var(--background, #09090b);
  --fg: var(--foreground, #fafafa);
  --muted: #a1a3a7;
  --line: #343638;
  --soft: #232527;
  --raised: #292b2e;
  --blue: #91b8ec;
  --green: #93c5aa;
  --tint: #253142;
  color-scheme: dark;
}
.s20[data-theme="light"] {
  --bg: #fff;
  --fg: #202124;
  --muted: #72757a;
  --line: #e6e7e9;
  --soft: #f5f5f4;
  --raised: #fff;
  --blue: #3269b5;
  --green: #36745a;
  --tint: #edf3fb;
  color-scheme: light;
}
.s20 * {
  box-sizing: border-box;
}
.s20 button,
.s20 input,
.s20 select {
  font: inherit;
  color: inherit;
}
.s20 button {
  cursor: pointer;
  border: 0;
  background: none;
  padding: 0;
  text-align: inherit;
}
.s20 button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.s20 button:focus-visible,
.s20 input:focus-visible,
.s20 [tabindex]:focus-visible,
.s20 summary:focus-visible {
  outline: 2px solid var(--blue);
  outline-offset: 4px;
}
.s20 h2,
.s20 h3,
.s20 p {
  margin: 0;
}
.s20 h2 {
  font-size: 25px;
  line-height: 1.15;
  font-weight: 550;
  letter-spacing: -0.045em;
}
.s20 h3 {
  font-size: 15px;
  font-weight: 550;
  letter-spacing: -0.02em;
}
.s20 .eyebrow {
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
}
.s20 .muted {
  color: var(--muted);
}
.s20 .head {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;
  margin-bottom: 28px;
}
.s20 .head h2 {
  margin: 9px 0;
}
.s20 .head p {
  font-size: 12px;
  color: var(--muted);
  max-width: 370px;
}
.s20 .badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--line);
  border-radius: 99px;
  padding: 5px 9px;
  font-size: 10px;
  white-space: nowrap;
}
.s20 .badge i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green);
}
.s20 .foot {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
  border-top: 1px solid var(--line);
  padding-top: 15px;
  font-size: 10px;
  color: var(--muted);
}
.s20 .mono {
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-variant-numeric: tabular-nums;
}
.s20 .metric {
  font-size: 40px;
  letter-spacing: -0.06em;
  line-height: 1.1;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.s20 .seg {
  display: flex;
  gap: 3px;
  padding: 3px;
  background: var(--soft);
  border: 1px solid var(--line);
  border-radius: 9px;
  width: fit-content;
}
.s20 .seg button {
  padding: 6px 11px;
  border-radius: 6px;
  font-size: 11px;
  text-align: center;
  white-space: nowrap;
}
.s20 .seg button[aria-pressed="true"] {
  background: var(--raised);
  box-shadow: 0 1px 3px #00000012;
}
.s20 .iconbtn {
  display: inline-grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}
.s20 .iconbtn:hover {
  background: var(--soft);
}
.s20 .sr {
  position: absolute;
  width: 1px;
  height: 1px;
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
}
.s20 svg {
  display: block;
}
.s20 .enter {
  animation: s20-enter 0.3s ease both;
}
@keyframes s20-enter {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.s20[data-seeking="true"] * {
  animation: none !important;
  transition: none !important;
  caret-color: transparent;
}
.s20[data-seeking="true"] button {
  pointer-events: none;
}
.s20 details {
  font-size: 11px;
  color: var(--muted);
  margin-top: 15px;
}
.s20 summary {
  cursor: pointer;
  width: fit-content;
}
.s20 table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  font-size: 11px;
  text-align: left;
}
.s20 th,
.s20 td {
  padding: 7px;
  border-bottom: 1px solid var(--line);
  font-weight: 400;
}
.s20 th {
  font-weight: 600;
}
.s20 input[type="range"] {
  accent-color: var(--fg);
  width: 100%;
}
@container (max-width:440px) {
  .s20 .head {
    flex-wrap: wrap;
  }
  .s20 .metric {
    font-size: 33px;
  }
  .s20 h2 {
    font-size: 23px;
  }
}
@media (max-width: 450px) {
  .s20 {
    padding: 20px;
    border-radius: 15px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .s20 * {
    animation: none !important;
    transition: none !important;
  }
}

.s20 .donut-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  align-items: center;
}
.s20 .donut-art {
  position: relative;
  max-width: 280px;
  width: 100%;
  margin: auto;
}
.s20 .donut-art svg {
  width: 100%;
  height: auto;
}
.s20 .donut-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: none;
  gap: 7px;
}
.s20 .donut-center strong {
  font-size: 32px;
  letter-spacing: -0.055em;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.s20 .donut-center > span:last-child {
  font-size: 9px;
  color: var(--muted);
}
.s20 .donut-center .eyebrow {
  font-size: 8px;
}
.s20 .donut-legend > button {
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
  padding: 13px 10px;
  border-radius: 8px;
}
.s20 .donut-legend > button[aria-pressed="true"] {
  background: var(--soft);
}
.s20 .source-dot {
  width: 8px;
  height: 8px;
  border: 1px solid var(--line);
  border-radius: 2px;
  flex: none;
}
.s20 .source-label {
  flex: 1;
  font-size: 12px;
}
.s20 .source-label small {
  display: block;
  font-size: 9px;
  color: var(--muted);
  margin-top: 3px;
}
.s20 .source-pct {
  font-size: 11px;
}
.s20 .donut-legend .all-sources {
  border-top: 1px solid var(--line);
  border-radius: 0;
  margin-top: 10px;
  padding-bottom: 0;
  justify-content: space-between;
  font-size: 10px;
  color: var(--muted);
}
@container (max-width:480px) {
  .s20 .donut-layout {
    grid-template-columns: 1fr;
    gap: 5px;
  }
  .s20 .donut-art {
    max-width: 235px;
  }
  .s20 .donut-legend > button {
    padding: 10px;
  }
}
`;

export default function DonutBreakdown({
  title = "Where attention goes.",
  subtitle = "A closer look at your audience mix.",
  data = sampleSegments,
  state,
  onStateChange,
  seeking = false,
  theme,
  className = "",
}: Props) {
  const [v, set] = useStateValue({ active: -1 }, state, onStateChange);
  const active = v.active ?? -1;
  const total = data.reduce((a, d) => a + Math.max(0, d.value), 0);
  let cumulative = 0;
  const colors = ["var(--fg)", "#91979e", "#b4bec9", "#7395bf", "#d9dce0"];
  const selected = data[active];
  return (
    <section className={`s20 ${className}`} data-theme={theme} data-seeking={seeking}>
      <style>{styles}</style>
      <header className="head">
        <div>
          <span className="eyebrow">Audience / Sources</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <span className="badge">This month</span>
      </header>
      <div className="donut-layout">
        <div className="donut-art">
          <svg
            viewBox="0 0 260 260"
            role="img"
            aria-label={`Traffic breakdown: ${total.toLocaleString("en-US")} total visits. Select a source from the list.`}
          >
            <circle
              cx="130"
              cy="130"
              r="92"
              fill="none"
              stroke="var(--soft)"
              strokeWidth="28"
            />
            {data.map((d, i) => {
              const pct = (Math.max(0, d.value) / Math.max(1, total)) * 100;
              const start = cumulative;
              cumulative += pct;
              return (
                <circle
                  key={d.label}
                  cx="130"
                  cy="130"
                  r="92"
                  pathLength="100"
                  fill="none"
                  stroke={colors[i % colors.length]}
                  strokeWidth={active === i ? 34 : 28}
                  strokeDasharray={`${Math.max(0, pct - 1.3)} ${100 - Math.max(0, pct - 1.3)}`}
                  strokeDashoffset={-start}
                  transform="rotate(-90 130 130)"
                  opacity={active < 0 || active === i ? 1 : 0.25}
                  style={{ transition: "stroke-width .2s,opacity .2s" }}
                  onPointerEnter={() => set({ active: i })}
                />
              );
            })}
          </svg>
          <div className="donut-center">
            <span className="eyebrow">{selected?.label ?? "Total visits"}</span>
            <strong>{(selected?.value ?? total).toLocaleString("en-US")}</strong>
            <span>
              {selected
                ? `${((selected.value / Math.max(1, total)) * 100).toFixed(1)}% of audience`
                : "Across all sources"}
            </span>
          </div>
        </div>
        <div className="donut-legend">
          {data.map((d, i) => (
            <button
              key={d.label}
              aria-pressed={active === i}
              onClick={() => set({ active: i })}
              onPointerEnter={() => set({ active: i })}
              onFocus={() => set({ active: i })}
            >
              <span className="source-dot" style={{ background: colors[i % colors.length] }} />
              <span className="source-label">
                {d.label}
                <small>{d.description}</small>
              </span>
              <span className="source-pct mono">
                {Math.round((d.value / Math.max(1, total)) * 100)}%
              </span>
            </button>
          ))}
          <button className="all-sources" onClick={() => set({ active: -1 })}>
            View total <Arrow />
          </button>
        </div>
      </div>
      <footer className="foot">
        <span>Every visit has a starting point.</span>
        <span>Sample data · Select a source</span>
      </footer>
      <details>
        <summary>View data table</summary>
        <table>
          <thead>
            <tr>
              <th>Source</th>
              <th>Visits</th>
              <th>Share</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.label}>
                <td>{d.label}</td>
                <td>{d.value}</td>
                <td>{((d.value / Math.max(1, total)) * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </section>
  );
}
