// Built with Remotion - https://remotion.pro/license
import React, { useId } from "react";
import { easeInOut, easeOut, inkOn, ramp, withAlpha } from "../../../kit/index";
import { Canvas, useScene, type PatternComponent } from "../runtime";
import type { StyledProps } from "../contract";
import type { SystemsPattern } from "./specs";

type Ctx = ReturnType<typeof useScene> & { props: StyledProps; w: number; h: number; id: string };
type Point = [number, number];
const count = (c: Ctx) => Math.max(3, Math.min(6, c.props.labels.length));
const label = (c: Ctx, i: number, fallback = `Direction ${i + 1}`) => c.props.labels[i] ?? fallback;
const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

/** Each system has a motion signature as well as different type, framing and material. */
function phase(c: Ctx, start: number, duration = 24) {
  const f = c.props.style === "terminal" ? Math.floor(c.frame / 4) * 4 : c.frame;
  const t = ramp(f, [start, start + duration], [0, 1]);
  if (c.props.style === "swiss") return easeOut(t);
  if (c.props.style === "editorial") return easeInOut(t);
  if (c.props.style === "studio") return Math.min(1, easeOut(t) + Math.sin(t * Math.PI) * 0.07);
  return easeInOut(t);
}

function text(c: Ctx, value: string, x: number, y: number, width = 200, max = 24, color = c.d.ink, anchor: "start" | "middle" | "end" = "start", slot?: string) {
  const size = Math.max(8, Math.min(max, width / Math.max(1, value.length * 0.59)));
  return <text data-21st-slot={slot === "labels" && c.props.style === "product" ? "items" : slot} x={x} y={y} fill={color} fontSize={size} fontFamily={c.d.bodyFont} fontWeight={c.d.weight} textAnchor={anchor} dominantBaseline="middle">{value}</text>;
}

function glyph(c: Ctx, i: number, x: number, y: number, size = 18, color = c.d.accent) {
  return <g transform={`translate(${x} ${y})`} fill="none" stroke={color} strokeWidth={c.props.style === "studio" ? 4 : 2.2}>
    {i % 4 === 0 ? <><circle r={size * .72} /><path d={`M${-size * .3} 0 L0 ${size * .3} L${size * .5} ${-size * .3}`} /></> : i % 4 === 1 ? <><rect x={-size * .65} y={-size * .65} width={size * 1.3} height={size * 1.3} rx={c.props.style === "glass" ? size * .35 : 1} /><path d={`M${-size * .32} 0 H${size * .32}`} /></> : i % 4 === 2 ? <><path d={`M0 ${-size * .8} L${size * .8} 0 L0 ${size * .8} L${-size * .8} 0 Z`} /><circle r={size * .2} /></> : <><path d={`M${-size * .7} ${size * .5} L0 ${-size * .7} L${size * .7} ${size * .5} Z`} /><path d={`M${-size * .2} ${size * .2} H${size * .2}`} /></>}
  </g>;
}

function card(c: Ctx, opts: { x: number; y: number; width: number; height: number; title?: string; index?: number; p?: number; active?: boolean; children?: React.ReactNode; rotate?: number }) {
  const { x, y, width, height, title, index = 0, p = 1, active = false, children, rotate = 0 } = opts;
  const style = c.props.style;
  const radius = style === "studio" ? Math.min(height * .3, 26) : style === "glass" ? Math.min(height * .28, 24) : c.d.radius;
  const fill = active ? c.d.accent : style === "glass" ? `url(#${c.id}-glass)` : c.d.surface;
  const ink = active ? inkOn(c.d.accent) : c.d.ink;
  const tilt = rotate + (style === "studio" ? ((index % 3) - 1) * 3 : style === "editorial" ? ((index % 2) * 2 - 1) * .6 : 0);
  const entryX = style === "terminal" ? -24 * (1 - p) : 0;
  const entryY = style === "editorial" ? 35 * (1 - p) : style === "glass" ? 18 * (1 - p) : 9 * (1 - p);
  return <g transform={`translate(${x + entryX} ${y + entryY}) rotate(${tilt * p} ${width / 2} ${height / 2})`} opacity={p}>
    {style === "studio" && <rect x={8} y={9} width={width} height={height} rx={radius} fill={c.d.shade} />}
    {style === "glass" && <rect x={1} y={7} width={width} height={height} rx={radius} fill={c.d.shade} opacity={.28} />}
    <rect width={width} height={height} rx={radius} fill={fill} stroke={style === "studio" ? c.d.ink : active ? c.d.accent : c.d.line} strokeWidth={style === "studio" ? 2.5 : style === "terminal" ? 1.5 : 1} />
    {style === "swiss" && <rect width={5} height={height} fill={active ? ink : c.d.accent} />}
    {style === "editorial" && <><rect x={8} y={8} width={width - 16} height={height - 16} fill="none" stroke={active ? withAlpha(ink, .2) : c.d.line} strokeWidth={.7} />{text(c, String(index + 1).padStart(2, "0"), width - 18, height - 20, 70, 32, withAlpha(ink, .16), "end")}</>}
    {style === "glass" && <path d={`M${radius} 1 H${width - radius}`} stroke={withAlpha(c.d.ink, .4)} strokeWidth={1.3} />}
    {style === "terminal" && <><path d={`M0 10 V0 H10 M${width - 10} 0 H${width} V10 M0 ${height - 10} V${height} H10 M${width - 10} ${height} H${width} V${height - 10}`} stroke={active ? ink : c.d.accent} strokeWidth={2.5} /><path d={`M${width - 24} 14 H${width - 12}`} stroke={active ? ink : c.d.accent} strokeWidth={4} /></>}
    {title && text(c, `${style === "terminal" ? "> " : ""}${title}`, 20, height * .5, width - 40, Math.min(26, height * .29), ink, "start", "labels")}
    {children}
  </g>;
}

function route(c: Ctx, from: Point, to: Point, p = 1, active = true, width = 3) {
  const middle = (from[0] + to[0]) / 2;
  const d = c.props.style === "terminal" ? `M${from[0]} ${from[1]} H${middle} V${to[1]} H${to[0]}` : c.props.style === "swiss" ? `M${from[0]} ${from[1]} L${to[0]} ${to[1]}` : c.props.style === "glass" ? `M${from[0]} ${from[1]} C${middle} ${from[1]} ${middle} ${to[1]} ${to[0]} ${to[1]}` : `M${from[0]} ${from[1]} Q${middle} ${(from[1] + to[1]) / 2 - (c.props.style === "studio" ? 22 : 12)} ${to[0]} ${to[1]}`;
  return <g fill="none" strokeLinecap={c.props.style === "terminal" ? "square" : "round"}>
    <path d={d} stroke={c.d.line} strokeWidth={width} />
    {active && <path d={d} pathLength={1} stroke={c.d.accent} strokeWidth={c.props.style === "studio" ? width + 2 : width} strokeDasharray="1 1" strokeDashoffset={1 - p} />}
    {active && <circle cx={to[0]} cy={to[1]} r={c.props.style === "studio" ? 5 : 3.5} fill={c.d.accent} stroke="none" opacity={p > .98 ? 1 : 0} />}
  </g>;
}

function paper(c: Ctx, x: number, y: number, width: number, height: number, kind: number, title: string, p = 1, index = 0) {
  const ink = withAlpha(c.d.ink, .55);
  return card(c, { x, y, width, height, p, index, children: <>
    {text(c, title, 22, 33, width - 44, 24, c.d.ink, "start", "labels")}
    <path d={`M22 56 H${width - 22}`} stroke={c.d.line} />
    {kind % 4 === 0 ? Array.from({ length: 5 }, (_, i) => <g key={i}><rect x={22} y={78 + i * (height - 105) / 5} width={(width - 44) * [1, .83, .92, .61, .76][i]!} height={6} fill={ink} opacity={.33 + (i % 2) * .16} />{c.props.style === "terminal" && text(c, `${i + 1}`, 13, 81 + i * (height - 105) / 5, 15, 9, c.d.muted)}</g>) : kind % 4 === 1 ? <>{Array.from({ length: 3 }, (_, i) => <rect key={i} x={22} y={77 + i * (height - 94) / 3} width={width - 44} height={(height - 110) / 3} rx={c.d.radius * .35} fill={withAlpha(c.d.accent, .1 + i * .06)} />)}</> : kind % 4 === 2 ? <>{Array.from({ length: 4 }, (_, i) => <g key={i}><path d={`M22 ${78 + i * (height - 102) / 4} H${width - 22}`} stroke={c.d.line} /><rect x={24} y={84 + i * (height - 102) / 4} width={width * .19} height={5} fill={ink} opacity={.35} /></g>)}<path d={`M${width * .36} 76 V${height - 20} M${width * .68} 76 V${height - 20}`} stroke={c.d.line} /></> : <><rect x={22} y={78} width={width - 44} height={height * .25} fill={withAlpha(c.d.accent, .15)} />{text(c, "A clear direction", 30, 93 + height * .1, width - 60, 18)}<path d={`M22 ${height * .56} H${width - 22} M22 ${height * .69} H${width * .78} M22 ${height * .8} H${width * .6}`} stroke={ink} strokeWidth={5} opacity={.35} /></>}
  </> });
}

function art(c: Ctx, i: number, width: number, height: number) {
  const color = c.props.style === "studio" ? [c.d.accent, c.d.secondary, c.d.ink, c.d.line][i % 4]! : c.d.accent;
  return <g>
    <rect width={width} height={height} fill={withAlpha(color, c.d.dark ? .16 : .1)} />
    {c.props.image ? <image href={c.props.image} width={width} height={height} preserveAspectRatio="xMidYMid slice" /> : <>
      <circle cx={width * (.3 + (i % 3) * .15)} cy={height * .44} r={Math.min(width, height) * .24} fill={color} opacity={.72} />
      <rect x={width * .14} y={height * .53} width={width * .72} height={height * .17} rx={c.props.style === "swiss" || c.props.style === "terminal" ? 0 : height * .08} transform={`rotate(${(i - 2) * 8} ${width / 2} ${height * .61})`} fill={c.d.ink} opacity={.76} />
      <circle cx={width * .73} cy={height * .25} r={Math.min(width, height) * .11} fill="none" stroke={c.d.ink} strokeWidth={c.props.style === "studio" ? 6 : 2.5} />
      {c.props.style === "editorial" && <path d={`M${width * .08} ${height * .13} Q${width * .45} ${height * .95} ${width * .9} ${height * .2}`} stroke={c.d.accent} fill="none" strokeWidth={1.5} />}
      {c.props.style === "terminal" && Array.from({ length: 5 }, (_, j) => <path key={j} d={`M0 ${height * (j + 1) / 6} H${width}`} stroke={withAlpha(c.d.line, .5)} />)}
    </>}
  </g>;
}

const BranchMerge = (c: Ctx) => {
  const n = count(c), height = Math.min(84, c.h * .77 / n), gap = c.h * .84 / n;
  return <>
    {Array.from({ length: n }, (_, i) => { const y = c.h * .06 + i * gap; return <React.Fragment key={i}>{route(c, [220, c.h * .5], [345, y + height / 2], phase(c, 18 + i * 7, 24))}{route(c, [590, y + height / 2], [750, c.h * .5], phase(c, 68 + i * 6, 24))}{card(c, { x: 345, y, width: 245, height, title: label(c, i), index: i, p: phase(c, 24 + i * 7, 20), active: c.frame >= 92 + i * 5 })}</React.Fragment>; })}
    {card(c, { x: 30, y: c.h * .5 - 50, width: 190, height: 100, title: "One brief", p: phase(c, 12, 18) })}
    {card(c, { x: 750, y: c.h * .5 - 60, width: 210, height: 120, title: "Shared result", p: phase(c, 80, 26), active: c.frame >= 114 })}
    <circle cx={855} cy={c.h * .5 + 97} r={lerp(2, 30, phase(c, 106, 20))} stroke={c.d.accent} strokeWidth={2} fill="none" opacity={1 - phase(c, 111, 20)} />
  </>;
};

const StageHandoff = (c: Ctx) => {
  const n = count(c), progress = phase(c, 28, 84), active = Math.min(n - 1, Math.floor(progress * n));
  const captionFont = portraitFont(c), captionH = wrapSystemsLabel(c.props.subtitle, 900, captionFont, c.d.monospace).length * captionFont * 1.15;
  if (c.portrait) return <>{route(c, [115, 80], [115, c.h - 120], phase(c, 18, 28))}{Array.from({ length: n }, (_, i) => { const y = 80 + i * (c.h - 200) / (n - 1); return <g key={i}><circle cx={115} cy={y} r={active >= i ? 15 : 9} fill={active >= i ? c.d.accent : c.d.line} />{card(c, { x: 195, y: y - 42, width: 710, height: 84, title: label(c, i), p: phase(c, 16 + i * 8, 18), active: active === i, index: i })}</g>; })}<circle cx={115} cy={lerp(80, c.h - 120, progress)} r={25} stroke={c.d.accent} strokeWidth={4} fill={c.d.bg} />{text(c, "Context carried forward", 500, c.h - 30, 750, 23, c.d.muted, "middle")}</>;
  return <>{route(c, [95, 90], [905, 90], phase(c, 14, 30))}{Array.from({ length: n }, (_, i) => { const x = 95 + i * 810 / (n - 1); return <g key={i}><circle cx={x} cy={90} r={active >= i ? 14 : 8} fill={active >= i ? c.d.accent : c.d.line} />{text(c, label(c, i), x, 136, 850 / n, 24, active === i ? c.d.accent : c.d.ink, "middle", "labels")}</g>; })}{card(c, { x: lerp(10, 760, progress), y: c.h * .47 + (c.props.style === "glass" ? Math.sin(progress * Math.PI) * -30 : 0), width: 225, height: 120, title: "Shared context", p: phase(c, 22, 20), active: true, children: <><path d="M22 89 H166 M22 101 H127" stroke={inkOn(c.d.accent)} opacity={.3} strokeWidth={5} /></> })}{c.d.brandDriven ? portraitText(c, c.props.subtitle, 500, c.h - captionH / 2 - 12, 900, { slot: "subtitle", anchor: "middle", color: c.d.muted, leading: 1.15 }) : text(c, "A clear handoff at every stage", 500, c.h - 35, 820, 22, c.d.muted, "middle")}</>;
};

const Conveyor = (c: Ctx) => {
  const n = count(c), width = 820 / n - 20;
  return <><rect x={45} y={c.h * .12} width={905} height={c.h * .7} rx={c.props.style === "terminal" || c.props.style === "swiss" ? 0 : 48} stroke={c.d.line} strokeWidth={2} fill="none" /><path d={`M60 ${c.h * .34} H925 M80 ${c.h * .65} H920`} stroke={c.d.line} strokeDasharray={c.props.style === "terminal" ? "3 8" : "2 12"} strokeWidth={2} />
    {c.d.brandDriven && <g fill="none" stroke={c.d.accent} strokeWidth={3}>
      <path d={`M75 ${c.h * .79} H915`} stroke={withAlpha(c.d.accent, .3)} />
      {Array.from({ length: n }, (_, i) => { const x = 75 + i * (width + 20) + width / 2, p = phase(c, 66 + i * 5, 24); return <g key={i} opacity={p}>
        <path d={`M${x} ${c.h * .735} V${c.h * .79}`} /><circle cx={x} cy={c.h * .79} r={9} fill={c.d.surface} />
        {i < n - 1 && <path d={`M${x + width / 2 + 2} ${c.h * .79 - 7} l9 7 l-9 7`} />}
      </g>; })}<path d={`M900 ${c.h * .79 - 10} l15 10 l-15 10`} opacity={phase(c, 96, 24)} />
    </g>}
    {Array.from({ length: n }, (_, i) => { const p = phase(c, 22 + i * 7, 24), transfer = phase(c, 66 + i * 5, 24); return <g key={i}>{card(c, { x: lerp(-180 - i * 35, 75 + i * (width + 20), p), y: lerp(c.h * .21, c.h * .57, transfer), width, height: c.h * .16, title: label(c, i), index: i, active: transfer > .95, p })}{text(c, String(i + 1).padStart(2, "0"), 95 + i * (width + 20), c.h * .48, width - 40, 17, c.d.muted)}</g>; })}
    <path d={`M910 ${c.h * .38} L928 ${c.h * .46} L946 ${c.h * .38}`} fill="none" stroke={c.d.accent} strokeWidth={4} opacity={phase(c, 72, 18)} />{text(c, "Intake", 70, c.h * .055, 150, 22, c.d.muted)}{text(c, "A settled queue", 500, c.h * .95, 700, 24, c.d.ink, "middle")}</>;
};

const Fanout = (c: Ctx) => {
  const n = count(c), hub: Point = [500, c.h * .49];
  return <>{Array.from({ length: n }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI * 2 / n, x = 500 + Math.cos(a) * 340, y = c.h * .49 + Math.sin(a) * c.h * .35; const p = phase(c, 25 + i * 7, 23), done = phase(c, 66 + i * 6, 22); return <g key={i}>{route(c, hub, [x, y], phase(c, 18 + i * 7, 24))}{card(c, { x: x - 110, y: y - 47, width: 220, height: 94, title: label(c, i), index: i, p, children: <><rect x={18} y={73} width={184} height={5} fill={withAlpha(c.d.ink, .13)} /><rect x={18} y={73} width={184 * done} height={5} fill={c.d.accent} /></> })}</g>; })}<circle cx={hub[0]} cy={hub[1]} r={58} fill={c.d.surface} stroke={c.d.accent} strokeWidth={c.props.style === "studio" ? 5 : 2} /><circle cx={hub[0]} cy={hub[1]} r={72} fill="none" stroke={c.d.line} strokeDasharray={c.props.style === "terminal" ? "4 8" : "1 8"} />{glyph(c, 2, hub[0], hub[1], 25)}{text(c, c.frame >= 114 ? "Joined" : "Dispatch", hub[0], hub[1] + 100, 190, 23, c.d.ink, "middle")}</>;
};

const Kanban = (c: Ctx) => {
  const n = count(c), cols = c.portrait ? 2 : n, rows = Math.ceil(n / cols), panelW = (930 - (cols - 1) * 18) / cols, panelH = (c.h - 40 - (rows - 1) * 22) / rows;
  const points = Array.from({ length: n }, (_, i): Point => [35 + (i % cols) * (panelW + 18), 15 + Math.floor(i / cols) * (panelH + 22)]);
  const motion = Array.from({ length: n - 1 }, (_, i) => phase(c, 30 + i * 72 / (n - 1), 17));
  let x = points[0]![0], y = points[0]![1];
  motion.forEach((p, i) => { x += (points[i + 1]![0] - points[i]![0]) * p; y += (points[i + 1]![1] - points[i]![1]) * p; });
  return <>{points.map(([px, py], i) => <g key={i}><rect x={px} y={py} width={panelW} height={panelH} rx={c.d.radius * .6} fill={withAlpha(c.d.surface, .7)} stroke={c.d.line} />{text(c, label(c, i), px + 16, py + 35, panelW - 32, 24, c.d.ink, "start", "labels")}<path d={`M${px + 15} ${py + 59} H${px + panelW - 15}`} stroke={c.d.line} />{[0, 1].map(k => <rect key={k} x={px + 15} y={py + 92 + k * Math.min(85, panelH * .2)} width={panelW - 30} height={Math.min(60, panelH * .13)} rx={c.d.radius * .5} fill={withAlpha(c.d.line, .18)} />)}</g>)}{card(c, { x: x + 13, y: y + 80 - Math.sin(Math.min(1, Math.max(0, c.frame - 22) / 96) * Math.PI) * 24, width: panelW - 26, height: Math.min(108, panelH * .29), title: "Launch brief", p: phase(c, 17, 22), active: c.frame > 118, rotate: Math.sin(Math.min(1, Math.max(0, c.frame - 22) / 96) * Math.PI) * (c.props.style === "studio" ? -6 : -2) })}</>;
};

const Completion = (c: Ctx) => {
  const n = count(c), width = c.portrait ? 575 : 390, dx = (920 - width - 40) / (n - 1);
  const steps = Array.from({ length: n }, (_, i) => ({
    x: 40 + i * dx, y: c.h * .78 - i * c.h * .64 / (n - 1), p: phase(c, 18 + i * 76 / n, 25),
  }));
  const ready = phase(c, 110, 20);
  return <>
    {steps.slice(1).map((step, i) => <g key={i}>{route(c, [steps[i]!.x + width / 2, steps[i]!.y + 70], [step.x + width / 2, step.y + 70], step.p)}</g>)}
    {steps.map(({ x, y, p }, i) => <g key={i}>{card(c, { x, y, width, height: 88, index: i, p, children: <>
      <circle cx={33} cy={44} r={18} fill={withAlpha(c.d.accent, .12)} stroke={c.d.accent} />
      <path d="M24 44 L31 51 L43 35" pathLength={1} stroke={c.d.accent} strokeWidth={3} strokeLinecap="round" fill="none" strokeDasharray="1 1" strokeDashoffset={1 - p} />
      {text(c, label(c, i), 67, 44, width - 86, 23, c.d.ink, "start", "labels")}
    </> })}</g>)}
    <g opacity={ready}><circle cx={870} cy={62} r={42 * ready} fill={c.d.accent} />{text(c, "Ready", 870, 62, 65, 19, inkOn(c.d.accent), "middle")}</g>
  </>;
};

const Notifications = (c: Ctx) => {
  const n = count(c), height = Math.min(115, c.h * .73 / n), compression = phase(c, 83, 35);
  const summaryFont = portraitFont(c), summaryH = wrapSystemsLabel(c.props.subtitle, 810, summaryFont, c.d.monospace).length * summaryFont * 1.15 + 32;
  return <>{Array.from({ length: n }, (_, i) => { const p = phase(c, 16 + i * 12, 23), x = lerp(1010, lerp(105 + i * 12, 185 + i * 14, compression), p), y = lerp(25 + i * (height + 12), c.h * .13 + i * 20, compression); return <g key={i}>{card(c, { x, y, width: lerp(780 - i * 20, 680 - i * 23, compression), height, p, index: i, children: <>{glyph(c, i, 34, height / 2, 18)}{text(c, label(c, i), 72, height / 2 - 9, 570, 25, c.d.ink, "start", "labels")}{text(c, "Workspace update", 72, height / 2 + 19, 510, 15, c.d.muted)}</> })}</g>; })}{c.d.brandDriven ? portraitCard(c, 65, c.h - summaryH - 16, 870, summaryH, c.props.subtitle, { slot: "subtitle", p: phase(c, 113, 18), active: true, inset: 30, leading: 1.15 }) : card(c, { x: 180, y: c.h * .7, width: 650, height: 90, title: `${n} useful updates, one clear picture`, p: phase(c, 113, 18), active: true })}</>;
};

const IntegrationGrid = (c: Ctx) => {
  const n = count(c), cols = c.portrait ? 2 : n > 4 ? 3 : 2, rows = Math.ceil(n / cols), cellW = 760 / cols, cellH = c.h * .61 / rows;
  return <>{Array.from({ length: n }, (_, i) => { const x = 120 + (i % cols) * cellW, y = 15 + Math.floor(i / cols) * cellH, selected = phase(c, 40 + i * 7, 20); return <g key={i}>{route(c, [x + (cellW - 24) / 2, y + cellH - 20], [500, c.h * .82], phase(c, 79 + i * 4, 20), true, 2)}{card(c, { x, y, width: cellW - 24, height: cellH - 22, p: phase(c, 16 + i * 6, 20), index: i, children: <>{glyph(c, i, (cellW - 24) / 2, (cellH - 22) * .34, Math.min(25, cellH * .17))}{text(c, label(c, i), (cellW - 24) / 2, (cellH - 22) * .74, cellW - 65, 25, c.d.ink, "middle", "labels")}<circle cx={cellW - 45} cy={20} r={8 * selected} fill={c.d.accent} /></> })}</g>; })}{card(c, { x: 355, y: c.h * .8, width: 290, height: c.h * .14, title: "Context connected", p: phase(c, 104, 20), active: true })}</>;
};

const Mosaic = (c: Ctx) => {
  const n = count(c), cols = 2, rows = Math.ceil(n / cols), tileW = 270, tileH = c.h * .87 / rows, source: Point = [30, c.h * .21];
  const targets = Array.from({ length: n }, (_, i) => ({
    x: 370 + (i % cols) * 300, y: 12 + Math.floor(i / cols) * tileH, p: phase(c, 40 + i * 7, 27),
  }));
  return <>
    {targets.map(({ x, y }, i) => <g key={i}>{route(c, [270, c.h * .49], [x, y + tileH * .4], phase(c, 35 + i * 7, 24), true, 2)}</g>)}
    {paper(c, source[0], source[1], 240, c.h * .55, 0, "Source", phase(c, 15, 25))}
    {targets.map(({ x, y, p }, i) => <g key={i}>{paper(c, lerp(80, x, p), lerp(c.h * .25, y, p), tileW, tileH - 20, i, label(c, i), p, i)}</g>)}
    {c.d.brandDriven ? portraitText(c, c.props.subtitle, 500, c.h - wrapSystemsLabel(c.props.subtitle, 900, portraitFont(c), c.d.monospace).length * portraitFont(c) * .575 - 12, 900, { slot: "subtitle", anchor: "middle", color: c.d.muted, leading: 1.15 }) : text(c, "Shared visual anchors", 150, c.h * .89, 260, 20, c.d.muted, "middle")}
  </>;
};

const GraphTrace = (c: Ctx) => {
  const points: Point[] = [[75, .49], [255, .16], [270, .8], [438, .07], [485, .47], [510, .9], [700, .16], [735, .72], [905, .42], [650, .44]].map(([x, y]) => [x!, y! * c.h]);
  const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [7, 8], [4, 9], [9, 8]];
  const trace = [[0, 1], [1, 4], [4, 7], [7, 8]];
  const named = [0, 1, 7, 8];
  return <><rect x={20} y={5} width={960} height={c.h - 10} rx={c.d.radius} fill={withAlpha(c.d.surface, .25)} stroke={c.d.line} />{edges.map(([a, b], i) => <g key={i} opacity={phase(c, 16 + i * 2, 18)}>{route(c, points[a!]!, points[b!]!, 1, false, 1.8)}</g>)}{trace.map(([a, b], i) => <g key={i}>{route(c, points[a!]!, points[b!]!, phase(c, 44 + i * 17, 23), true, 4)}</g>)}{points.map(([x, y], i) => { const active = trace.some(([a, b], k) => (a === i || b === i) && c.frame > 56 + k * 17), p = phase(c, 18 + i * 4, 17); return <g key={i} opacity={p}><circle cx={x} cy={y} r={named.includes(i) ? c.props.style === "studio" ? 21 : 16 : 9} fill={active ? c.d.accent : c.d.surface} stroke={active ? c.d.accent : c.d.line} strokeWidth={2} />{named.includes(i) ? text(c, label(c, named.indexOf(i)), x, y + (y > c.h * .65 ? -40 : 39), 150, 22, active ? c.d.accent : c.d.ink, "middle", "labels") : text(c, String(i + 1).padStart(2, "0"), x, y + 24, 45, 11, c.d.muted, "middle")}</g>; })}</>;
};

const MetricCity = (c: Ctx) => {
  const values = [.38, .68, .45, .92, .59, .78, .42, .87, .64, .95, .55, .72], size = c.portrait ? 84 : 78, baseY = c.h * .46;
  return <>{text(c, `${Math.round((c.props.value ?? 96) * phase(c, 65, 43))}${c.props.suffix ?? "%"}`, 40, c.h * .12, 355, 76, c.d.accent)}{text(c, "Illustrative metric field", 42, c.h * .22, 330, 18, c.d.muted)}{values.map((value, i) => { const gx = i % 4, gy = Math.floor(i / 4), x = 490 + (gx - gy) * 93, y = baseY + (gx + gy) * 37, height = value * c.h * .34 * phase(c, 20 + i * 5, 29), color = c.props.style === "studio" ? [c.d.accent, c.d.secondary, c.d.ink][i % 3]! : c.d.accent; return <g key={i}><path d={`M${x} ${y} l${size} 0 l${size * .46} ${size * .37} l${-size} 0 Z`} fill={withAlpha(c.d.line, .2)} stroke={c.d.line} /><path d={`M${x} ${y - height} l${size} 0 v${height} l${-size} 0 Z`} fill={c.props.style === "terminal" ? c.d.surface : withAlpha(color, .38 + (i % 3) * .12)} stroke={c.d.line} /><path d={`M${x + size} ${y - height} l${size * .46} ${size * .37} v${height} l${-size * .46} ${-size * .37} Z`} fill={withAlpha(color, .24)} stroke={c.d.line} /><path d={`M${x} ${y - height} l${size} 0 l${size * .46} ${size * .37} l${-size} 0 Z`} fill={c.props.style === "terminal" ? withAlpha(color, .16) : color} stroke={c.props.style === "studio" ? c.d.ink : c.d.line} />{c.props.style === "editorial" && <path d={`M${x + 5} ${y - height + 8} h${size - 10}`} stroke={c.d.bg} opacity={.5} />}</g>; })}{c.props.labels.map((value, i) => <React.Fragment key={i}>{text(c, value, 150 + i * 740 / Math.max(1, count(c) - 1), c.h - 25, 700 / count(c), 23, c.d.ink, "middle", "labels")}</React.Fragment>)}</>;
};

const Leaderboard = (c: Ctx) => {
  const n = count(c), rowH = c.h * .78 / n, shift = phase(c, 54, 52), initialY = (n - 1) * rowH;
  return <>{Array.from({ length: n }, (_, i) => { const highlighted = i === n - 1, y = 25 + (highlighted ? initialY * (1 - shift) : i * rowH + shift * rowH), value = Math.round((c.props.value ?? 240) * (highlighted ? lerp(.2, 1, shift) : .88 - i * .18)); return <g key={i}>{card(c, { x: highlighted ? lerp(130, 100, shift) : 130, y, width: highlighted ? lerp(730, 790, shift) : 730, height: rowH - 12, p: phase(c, 16 + i * 7, 24), active: highlighted, index: i, children: <>{text(c, String(highlighted ? Math.max(1, Math.round(n - (n - 1) * shift)) : i + 1 + Math.round(shift)).padStart(2, "0"), 28, (rowH - 12) / 2, 62, 30, highlighted ? inkOn(c.d.accent) : c.d.muted)}<circle cx={105} cy={(rowH - 12) / 2} r={17} fill={highlighted ? withAlpha(inkOn(c.d.accent), .16) : withAlpha(c.d.accent, .15)} />{text(c, label(c, i), 140, (rowH - 12) / 2, 355, 25, highlighted ? inkOn(c.d.accent) : c.d.ink, "start", "labels")}{text(c, `${value} ${c.props.suffix ?? "pts"}`, highlighted ? 752 : 693, (rowH - 12) / 2, 170, 25, highlighted ? inkOn(c.d.accent) : c.d.muted, "end")}</> })}</g>; })}{text(c, "Illustrative scores", 500, c.h - 27, 450, 17, c.d.muted, "middle")}</>;
};

const ChartComparison = (c: Ctx) => {
  const n = count(c), baseline = c.h * .84, cell = 800 / n, maxH = c.h * .58, a = [.26, .41, .53, .6, .7, .8], b = [.37, .62, .68, .88, .83, .94];
  // Product material is transparent by default: the chart sits on its own brand-surface card so
  // its axis, labels and legend read on any backdrop. Legend swatches name both series.
  const legend = c.d.brandDriven ? <>{chartCard(c, 30, 0, 940, c.h)}<rect x={95} y={14} width={18} height={18} rx={4} fill={withAlpha(c.d.ink, .4)} />{text(c, "Reference", 123, 23, 180, 24, c.d.ink)}<rect x={320} y={14} width={18} height={18} rx={4} fill={c.d.accent} />{text(c, "New direction", 348, 23, 240, 24, c.d.ink)}</> : <>{text(c, "Reference", 70, 22, 180, 18, c.d.muted)}{text(c, "New direction", 285, 22, 240, 18, c.d.accent)}</>;
  return <>{legend}{[0, 1, 2, 3].map(i => <path key={i} d={`M95 ${baseline - i * maxH / 3} H930`} stroke={c.d.line} strokeDasharray={i === 0 ? undefined : "3 9"} />)}{Array.from({ length: n }, (_, i) => { const x = 110 + i * cell, av = a[i]! * maxH * phase(c, 20 + i * 6, 27), bv = b[i]! * maxH * phase(c, 61 + i * 5, 28), bw = Math.min(54, cell * .3); const bar = (xx: number, height: number, fill: string, second: boolean) => c.props.style === "editorial" ? <><path d={`M${xx + bw / 2} ${baseline} V${baseline - height}`} stroke={fill} strokeWidth={5} /><circle cx={xx + bw / 2} cy={baseline - height} r={9} fill={fill} /></> : c.props.style === "terminal" ? Array.from({ length: 12 }, (_, k) => <rect key={k} x={xx} y={baseline - (k + 1) * maxH / 12} width={bw} height={maxH / 12 - 4} fill={height > (k + .6) * maxH / 12 ? fill : "none"} stroke={height > (k + .6) * maxH / 12 ? fill : c.d.line} opacity={second ? 1 : .5} />) : <>{c.props.style === "studio" && <rect x={xx + 6} y={baseline - height + 8} width={bw} height={height} rx={18} fill={c.d.shade} />}<rect x={xx} y={baseline - height} width={bw} height={height} rx={c.props.style === "swiss" ? 0 : c.props.style === "glass" ? bw / 2 : 18} fill={fill} /></>; return <g key={i}>{bar(x, av, withAlpha(c.d.ink, .4), false)}{bar(x + bw + 9, bv, c.d.accent, true)}<path d={`M${x + bw / 2} ${baseline - av - 15} L${x + bw * 1.5 + 9} ${baseline - bv - 15}`} stroke={c.d.accent} strokeWidth={1.5} opacity={phase(c, 102 + i * 2, 18)} />{text(c, label(c, i), x + bw + 5, baseline + 34, cell - 12, c.d.brandDriven ? 27 : 22, c.d.ink, "middle", "labels")}</g>; })}</>;
};
function chartCard(c: Ctx, x: number, y: number, width: number, height: number) {
  return <rect x={x} y={y} width={width} height={height} rx={c.d.radius * 2} fill={c.d.surface} stroke={c.d.line} />;
}

const FormatCarousel = (c: Ctx) => {
  const n = count(c), progress = phase(c, 28, 85) * (n - 1), width = c.portrait ? 470 : 350, height = c.h * .75;
  return <>{Array.from({ length: n }, (_, i) => { const offset = i - progress, distance = Math.min(1, Math.abs(offset)), scale = 1 - distance * .24, x = 500 + offset * (c.portrait ? 390 : 305); return <g key={i} transform={`translate(${x} ${c.h * .43}) scale(${scale}) rotate(${offset * (c.props.style === "studio" ? 5 : c.props.style === "editorial" ? 3 : 0)}) translate(${-width / 2} ${-height / 2})`} opacity={Math.max(.18, 1 - Math.abs(offset) * .25)}>{paper(c, 0, 0, width, height, i, label(c, i), phase(c, 16 + i * 5, 22), i)}</g>; })}{Array.from({ length: n }, (_, i) => { const tabW = 780 / n - 8, active = Math.abs(i - progress) < .5; return <g key={i}>{card(c, { x: 110 + i * (tabW + 8), y: c.h * .89, width: tabW, height: c.h * .09, title: label(c, i), active, index: i })}</g>; })}</>;
};

const PageFan = (c: Ctx) => {
  const n = count(c), p = phase(c, 28, 56), width = Math.min(270, 1000 / n * 1.1), height = c.h * .72;
  const captionFont = portraitFont(c), captionH = wrapSystemsLabel(c.props.subtitle, 900, captionFont, c.d.monospace).length * captionFont * 1.15;
  return <>{Array.from({ length: n }, (_, i) => { const angle = (i - (n - 1) / 2) * 52 / (n - 1) * p; return <g key={i} transform={`translate(${500 + (i - (n - 1) / 2) * 24 * p} ${c.h * .87}) rotate(${angle}) translate(${-width / 2} ${-height})`}>{paper(c, 0, 0, width, height, i, label(c, i), phase(c, 14 + i * 6, 24), i)}<rect x={width - 8} y={45 + i * 24} width={13} height={28} fill={c.d.accent} opacity={.45 + i * .1} /></g>; })}<circle cx={500} cy={c.h * .87} r={8} fill={c.d.accent} />{c.d.brandDriven ? portraitText(c, c.props.subtitle, 500, c.h - captionH / 2 - 12, 900, { slot: "subtitle", anchor: "middle", color: c.d.muted, leading: 1.15 }) : text(c, "A useful collection", 500, c.h - 20, 650, 24, c.d.muted, "middle")}</>;
};

const VariationMatrix = (c: Ctx) => {
  const n = count(c), cols = c.portrait ? 2 : n > 4 ? 3 : 2, rows = Math.ceil(n / cols), targetW = 810 / cols - 18, targetH = c.h * .86 / rows - 18;
  return <>{Array.from({ length: n }, (_, i) => { const p = phase(c, 36 + i * 6, 31), targetX = 95 + (i % cols) * (targetW + 24), targetY = 5 + Math.floor(i / cols) * (targetH + 24), x = lerp(320, targetX, p), y = lerp(c.h * .13, targetY, p), width = lerp(360, targetW, p), height = lerp(c.h * .63, targetH, p); return <g key={i} opacity={i === 0 ? 1 : p}><defs><clipPath id={`${c.id}-variation-${i}`}><rect width={width} height={height - 39} rx={c.d.radius * .6} /></clipPath></defs>{card(c, { x, y, width, height, index: i, children: <><g clipPath={`url(#${c.id}-variation-${i})`}>{art(c, i, width, height - 39)}</g>{text(c, label(c, i), 18, height - 18, width - 38, 21, c.d.ink, "start", "labels")}{i === n - 1 && <circle cx={width - 22} cy={22} r={9 * phase(c, 112, 18)} fill={c.d.accent} />}</> })}</g>; })}{text(c, "Independent visual directions", 500, c.h - 20, 720, 20, c.d.muted, "middle")}</>;
};

const DRAW: Record<SystemsPattern, (c: Ctx) => React.ReactNode> = {
  "branch-merge-routing": BranchMerge, "workflow-stage-handoff": StageHandoff, "queue-conveyor": Conveyor,
  "parallel-task-fanout": Fanout, "kanban-progression": Kanban, "completion-ladder": Completion,
  "notification-cascade": Notifications, "integration-picker-grid": IntegrationGrid, "source-output-mosaic": Mosaic,
  "network-graph-trace": GraphTrace, "metric-city-rise": MetricCity, "rank-leaderboard-reveal": Leaderboard,
  "data-chart-comparison": ChartComparison, "report-format-carousel": FormatCarousel, "document-page-fan": PageFan,
  "image-variation-matrix": VariationMatrix,
};

/** Portrait product compositions use the native stage's aspect, not a centered
 * 1000x900 landscape diagram. Compatibility skins retain the original DRAW. */
const portraitFont = (c: Ctx) => (c.d.minLabelFont ?? c.height * .03) / (c.width * .84 / 1000) * 1.01;
const lineWidth = (value: string, font: number, mono: boolean) => Array.from(value).reduce((sum, ch) => sum + font * (mono ? .64 : /[MW@%ЖШЩЮ]/.test(ch) ? .94 : /[mwжшщю]/.test(ch) ? .84 : /[ilI1.,:;!'|]/.test(ch) ? .29 : /[frt]/.test(ch) ? .39 : /\s/.test(ch) ? .3 : /[\u0370-\u052f]/.test(ch) ? .66 : /[^\u0000-\u02ff]/.test(ch) ? 1 : /[A-Z0-9]/.test(ch) ? .66 : .56), 0);

/** Never shrink editable labels below the native minimum. Long words wrap too. */
export function wrapSystemsLabel(value: string, width: number, font: number, mono = false): string[] {
  const lines: string[] = [];
  let rest = value.trim();
  while (rest) {
    let end = 0;
    for (const ch of Array.from(rest)) {
      if (end && lineWidth(rest.slice(0, end) + ch, font, mono) > width) break;
      end += ch.length;
    }
    if (end >= rest.length) { lines.push(rest); break; }
    const space = rest.slice(0, end).lastIndexOf(" ");
    if (space > end * .35) end = space;
    lines.push(rest.slice(0, end).trimEnd());
    rest = rest.slice(end).trimStart();
  }
  return lines.length ? lines : [""];
}

function portraitText(c: Ctx, value: string, x: number, y: number, width: number, opts: { color?: string; anchor?: "start" | "middle" | "end"; slot?: string; font?: number; leading?: number } = {}) {
  const font = Math.max(portraitFont(c), opts.font ?? 0), lines = wrapSystemsLabel(value, width, font, c.d.monospace), leading = font * (opts.leading ?? 1.1);
  return <text data-21st-slot={opts.slot} x={x} y={y - (lines.length - 1) * leading / 2} fill={opts.color ?? c.d.ink} fontSize={font} fontFamily={c.d.bodyFont} fontWeight={c.d.weight} textAnchor={opts.anchor ?? "start"} dominantBaseline="middle">
    {lines.map((line, i) => <tspan key={i} x={x} dy={i ? leading : 0}>{line}</tspan>)}
  </text>;
}

const portraitLabelHeight = (c: Ctx, value: string, width: number) => Math.max(112, wrapSystemsLabel(value, width, portraitFont(c), c.d.monospace).length * portraitFont(c) * 1.1 + 30);

function portraitCard(c: Ctx, x: number, y: number, width: number, height: number, title: string, opts: { p?: number; active?: boolean; index?: number; slot?: string; inset?: number; leading?: number; children?: React.ReactNode } = {}) {
  const inset = opts.inset ?? 28;
  return card(c, { x, y, width, height, p: opts.p, active: opts.active, index: opts.index, children: <>
    {portraitText(c, title, inset, height / 2, width - inset * 2, { color: opts.active ? inkOn(c.d.accent) : c.d.ink, slot: opts.slot, leading: opts.leading })}
    {opts.children}
  </> });
}

function portraitPaper(c: Ctx, x: number, y: number, width: number, height: number, kind: number, title: string, p = 1, index = 0, slot = "items") {
  const font = portraitFont(c), lines = wrapSystemsLabel(title, width - 48, font, c.d.monospace), titleH = lines.length * font * 1.1;
  const contentY = titleH + 42, contentH = Math.max(0, height - contentY - 22);
  return card(c, { x, y, width, height, p, index, children: <>
    {portraitText(c, title, 24, 22 + titleH / 2, width - 48, { slot })}
    <path d={`M24 ${contentY - 12} H${width - 24}`} stroke={c.d.line} />
    {kind % 4 === 0 ? Array.from({ length: 4 }, (_, i) => <rect key={i} x={24} y={contentY + i * contentH / 4} width={(width - 48) * [1, .78, .9, .62][i]!} height={Math.min(8, contentH / 12)} fill={c.d.muted} opacity={.45} />) : kind % 4 === 1 ? Array.from({ length: 2 }, (_, i) => <rect key={i} x={24} y={contentY + i * contentH / 2} width={width - 48} height={contentH * .43} rx={c.d.radius * .5} fill={withAlpha(c.d.accent, .14 + i * .1)} />) : kind % 4 === 2 ? <>{Array.from({ length: 3 }, (_, i) => <path key={i} d={`M24 ${contentY + i * contentH / 3} H${width - 24}`} stroke={c.d.line} />)}<path d={`M${width * .36} ${contentY} V${height - 22} M${width * .68} ${contentY} V${height - 22}`} stroke={c.d.line} /></> : <><rect x={24} y={contentY} width={width - 48} height={contentH * .47} rx={c.d.radius * .4} fill={withAlpha(c.d.accent, .18)} /><path d={`M24 ${contentY + contentH * .65} H${width - 24} M24 ${contentY + contentH * .84} H${width * .7}`} stroke={c.d.muted} strokeWidth={6} opacity={.5} /></>}
  </> });
}

const PortraitBranchMerge = (c: Ctx) => {
  const n = count(c), row = (c.h - 300) / n, source: Point = [500, 112], result: Point = [500, c.h - 112];
  const required = Array.from({ length: n }, (_, i) => portraitLabelHeight(c, label(c, i), 824)).reduce((sum, height) => sum + height + 12, 300);
  if (required > c.h) {
    const rows = Math.ceil(n / 2), gridY = 44, gridH = c.h - 88, cellH = gridH / rows, top: Point = [500, 22], bottom: Point = [500, c.h - 22];
    return <g data-21st-branch-layout="two-column">
      {Array.from({ length: n }, (_, i) => { const x = 25 + i % 2 * 500, y = gridY + Math.floor(i / 2) * cellH, cy = y + (cellH - 8) / 2; return <g key={i}>{route(c, top, [x + 225, cy], phase(c, 18 + i * 7, 24))}{route(c, [x + 225, cy], bottom, phase(c, 68 + i * 6, 24))}</g>; })}
      {Array.from({ length: n }, (_, i) => <g key={i}>{portraitCard(c, 25 + i % 2 * 500, gridY + Math.floor(i / 2) * cellH, 450, cellH - 8, label(c, i), { index: i, slot: "items", inset: 18, leading: 1, p: phase(c, 24 + i * 7, 20), active: c.frame >= 92 + i * 5 })}</g>)}
      <circle cx={top[0]} cy={top[1]} r={20} fill={c.d.surface} stroke={c.d.accent} strokeWidth={2} />{glyph(c, 1, top[0], top[1], 12)}
      <circle cx={bottom[0]} cy={bottom[1]} r={20} fill={c.d.surface} stroke={c.d.accent} strokeWidth={2} />{glyph(c, 0, bottom[0], bottom[1], 12)}
    </g>;
  }
  return <>{Array.from({ length: n }, (_, i) => { const cy = 150 + i * row + (row - 12) / 2; return <g key={i}>{route(c, source, [40, cy], phase(c, 18 + i * 7, 24))}{route(c, [960, cy], result, phase(c, 68 + i * 6, 24))}</g>; })}
    {Array.from({ length: n }, (_, i) => { const height = Math.min(row - 12, portraitLabelHeight(c, label(c, i), 824)); return <g key={i}>{portraitCard(c, 60, 150 + i * row + (row - 12 - height) / 2, 880, height, label(c, i), { index: i, slot: "items", p: phase(c, 24 + i * 7, 20), active: c.frame >= 92 + i * 5 })}</g>; })}
    {portraitCard(c, 100, 0, 800, 112, "One brief", { p: phase(c, 12, 18) })}{portraitCard(c, 100, c.h - 112, 800, 112, "Shared result", { p: phase(c, 80, 26), active: c.frame >= 114 })}</>;
};

const PortraitStageHandoff = (c: Ctx) => {
  const n = count(c), row = c.h * .95 / n, progress = phase(c, 28, 84), active = Math.min(n - 1, Math.floor(progress * n));
  const first = row / 2, last = first + (n - 1) * row;
  return <>{route(c, [75, first], [75, last], phase(c, 18, 28))}{Array.from({ length: n }, (_, i) => { const height = Math.min(row - 24, portraitLabelHeight(c, label(c, i), 774)); return <g key={i}>
    <circle cx={75} cy={first + i * row} r={active >= i ? 20 : 12} fill={active >= i ? c.d.accent : c.d.line} />
    {portraitCard(c, 140, first + i * row - height / 2, 830, height, label(c, i), { index: i, slot: "items", p: phase(c, 16 + i * 8, 18), active: active === i })}
  </g>; })}<circle cx={75} cy={lerp(first, last, progress)} r={34} stroke={c.d.accent} strokeWidth={5} fill={c.d.bg} /></>;
};

const PortraitConveyor = (c: Ctx) => {
  const n = count(c), row = c.h * .91 / n;
  return <><rect x={20} y={8} width={960} height={c.h - 16} rx={40} fill="none" stroke={c.d.line} strokeWidth={2} /><path d={`M38 32 V${c.h - 32} M962 32 V${c.h - 32}`} stroke={c.d.line} strokeDasharray="4 14" strokeWidth={3} />
    <g fill="none" stroke={c.d.accent} strokeWidth={4}><path d={`M948 35 V${c.h - 40}`} stroke={withAlpha(c.d.accent, .35)} />
      {Array.from({ length: n }, (_, i) => { const y = 28 + i * row + row / 2 + 24, p = phase(c, 66 + i * 5, 24); return <g key={i} opacity={p}><path d={`M925 ${y} H948`} /><circle cx={948} cy={y} r={10} fill={c.d.surface} />{i < n - 1 && <path d={`M940 ${y + row / 2 - 12} l8 12 l8 -12`} />}</g>; })}</g>
    {Array.from({ length: n }, (_, i) => { const p = phase(c, 22 + i * 7, 24), transfer = phase(c, 66 + i * 5, 24), height = Math.min(row - 22, portraitLabelHeight(c, label(c, i), 794)); return <g key={i}>
      {portraitCard(c, lerp(-940, lerp(45, 75, transfer), p), 28 + i * row + (row - height) / 2 + 24 * transfer, 850, height, label(c, i), { index: i, slot: "items", p, active: transfer > .95 })}
    </g>; })}<path d={`M464 ${c.h - 45} L500 ${c.h - 16} L536 ${c.h - 45}`} fill="none" stroke={c.d.accent} strokeWidth={6} opacity={phase(c, 72, 18)} /></>;
};

const PortraitFanout = (c: Ctx) => {
  const n = count(c), rows = Math.ceil(n / 2), row = c.h * .79 / rows, hub: Point = [500, c.h * .065];
  return <>{Array.from({ length: n }, (_, i) => <g key={i}>{route(c, hub, [250 + (i % 2) * 500, c.h * .16 + Math.floor(i / 2) * row + row / 2], phase(c, 18 + i * 7, 24))}</g>)}
    {Array.from({ length: n }, (_, i) => { const x = 30 + (i % 2) * 500, y = c.h * .16 + Math.floor(i / 2) * row, done = phase(c, 66 + i * 6, 22); return <g key={i}>
    {portraitCard(c, x, y, 440, row - 28, label(c, i), { index: i, slot: "items", p: phase(c, 25 + i * 7, 23), inset: 20, children: <><rect x={20} y={row - 42} width={400} height={6} fill={c.d.line} /><rect x={20} y={row - 42} width={400 * done} height={6} fill={c.d.accent} /></> })}
  </g>; })}<circle cx={hub[0]} cy={hub[1]} r={55} fill={c.d.surface} stroke={c.d.accent} strokeWidth={3} /><circle cx={hub[0]} cy={hub[1]} r={68} fill="none" stroke={c.d.line} strokeDasharray="4 10" />{glyph(c, 2, hub[0], hub[1], 26)}<path d={`M477 ${hub[1]} l16 18 l30 -38`} stroke={c.d.accent} fill="none" strokeWidth={7} opacity={phase(c, 110, 20)} /></>;
};

const PortraitKanban = (c: Ctx) => {
  const n = count(c), rows = Math.ceil(n / 2), panelW = 450, panelH = (c.h - 40 - (rows - 1) * 24) / rows;
  const maxTitleH = Math.max(...Array.from({ length: n }, (_, i) => wrapSystemsLabel(label(c, i), panelW - 44, portraitFont(c), c.d.monospace).length * portraitFont(c) * 1.1));
  const taskH = Math.max(18, Math.min(87, panelH - maxTitleH - 70)), taskY = panelH - taskH - 20;
  const points = Array.from({ length: n }, (_, i): Point => [25 + (i % 2) * 500, 16 + Math.floor(i / 2) * (panelH + 24)]);
  let x = points[0]![0], y = points[0]![1];
  for (let i = 0; i < n - 1; i++) { const p = phase(c, 30 + i * 72 / (n - 1), 17); x += (points[i + 1]![0] - points[i]![0]) * p; y += (points[i + 1]![1] - points[i]![1]) * p; }
  return <>{points.map(([px, py], i) => { const lines = wrapSystemsLabel(label(c, i), panelW - 44, portraitFont(c), c.d.monospace), titleH = lines.length * portraitFont(c) * 1.1; return <g key={i}>
    <rect x={px} y={py} width={panelW} height={panelH} rx={c.d.radius} fill={withAlpha(c.d.surface, .85)} stroke={c.d.line} />
    {portraitText(c, label(c, i), px + 22, py + 24 + titleH / 2, panelW - 44, { slot: "items" })}
    <path d={`M${px + 22} ${py + titleH + 48} H${px + panelW - 22}`} stroke={c.d.line} />
    <rect x={px + 22} y={py + taskY} width={panelW - 44} height={taskH} rx={c.d.radius * .7} fill={withAlpha(c.d.line, .12)} />
  </g>; })}{card(c, { x: x + 20, y: y + taskY, width: panelW - 40, height: taskH, p: phase(c, 17, 22), active: c.frame > 118, children: <><path d={`M30 ${taskH * .28} H220 M30 ${taskH * .5} H320 M30 ${taskH * .74} H155`} stroke={c.frame > 118 ? inkOn(c.d.accent) : c.d.ink} strokeWidth={Math.min(8, taskH * .08)} opacity={.5} />{glyph(c, 0, 365, taskH / 2, Math.min(22, taskH * .3), c.frame > 118 ? inkOn(c.d.accent) : c.d.accent)}</> })}</>;
};

const PortraitCompletion = (c: Ctx) => {
  const n = count(c), row = c.h * .95 / n;
  const steps = Array.from({ length: n }, (_, i) => { const height = Math.min(row - 14, portraitLabelHeight(c, label(c, i), 852)); return { x: 25 + i * 8, y: c.h - (i + 1) * row + (row - height) / 2, height, p: phase(c, 18 + i * 76 / n, 25) }; });
  return <>{steps.slice(1).map((step, i) => <g key={i}>{route(c, [steps[i]!.x + 450, steps[i]!.y], [step.x + 450, step.y + step.height], step.p)}</g>)}{steps.map(({ x, y, height, p }, i) => <g key={i}>
    {portraitCard(c, x, y, 900, height, label(c, i), { index: i, slot: "items", p, inset: 24, children: <><circle cx={874} cy={17} r={15} fill={c.d.bg} stroke={c.d.accent} /><path d="M864 17 l8 7 l14 -17" pathLength={1} stroke={c.d.accent} strokeWidth={4} fill="none" strokeDasharray="1 1" strokeDashoffset={1 - p} /></> })}
  </g>)}</>;
};

const PortraitNotifications = (c: Ctx) => {
  const n = count(c), row = c.h * .9 / n, compression = phase(c, 83, 35);
  return <>{Array.from({ length: n }, (_, i) => { const p = phase(c, 16 + i * 12, 23), x = lerp(1010, 45 + i * 5 * compression, p), y = 20 + i * lerp(row, row * .92, compression) + c.h * .035 * compression, height = Math.min(row * .88, portraitLabelHeight(c, label(c, i), 820)); return <g key={i}>
    {portraitCard(c, x, y, 900 - i * 5 * compression, height, label(c, i), { index: i, slot: "items", p, inset: 28, children: <>{glyph(c, i, 862 - i * 5 * compression, 22, 12)}<path d={`M28 ${height - 12} H${250 + phase(c, 92 + i * 4, 18) * 300}`} stroke={c.d.accent} strokeWidth={5} /></> })}
  </g>; })}<path d={`M450 ${c.h - 55} l30 26 l60 -63`} stroke={c.d.accent} strokeWidth={9} fill="none" opacity={phase(c, 113, 18)} /></>;
};

const PortraitIntegration = (c: Ctx) => {
  const n = count(c), rows = Math.ceil(n / 2), row = c.h * .8 / rows;
  return <>{Array.from({ length: n }, (_, i) => <g key={i}>{route(c, [250 + (i % 2) * 500, 12 + Math.floor(i / 2) * row + row - 24], [500, c.h * .915], phase(c, 79 + i * 4, 20), true, 3)}</g>)}
    {Array.from({ length: n }, (_, i) => { const x = 25 + (i % 2) * 500, y = 12 + Math.floor(i / 2) * row; return <g key={i}>
    {portraitCard(c, x, y, 450, row - 24, label(c, i), { index: i, slot: "items", p: phase(c, 16 + i * 6, 20), inset: 20, children: <circle cx={432} cy={16} r={9 * phase(c, 40 + i * 7, 20)} fill={c.d.accent} /> })}
  </g>; })}<circle cx={500} cy={c.h * .915} r={64} fill={c.d.surface} stroke={c.d.accent} strokeWidth={4} />{glyph(c, 0, 500, c.h * .915, 30)}</>;
};

const PortraitMosaic = (c: Ctx) => {
  const n = count(c), rows = Math.ceil(n / 2), row = c.h * .8 / rows;
  return <>{Array.from({ length: n }, (_, i) => <g key={i}>{route(c, [500, c.h * .12], [250 + (i % 2) * 500, c.h * .17 + Math.floor(i / 2) * row], phase(c, 35 + i * 7, 24), true, 2)}</g>)}
    {portraitCard(c, 130, 0, 740, c.h * .12, "Source", { p: phase(c, 15, 25) })}{Array.from({ length: n }, (_, i) => { const p = phase(c, 40 + i * 7, 27), x = 25 + (i % 2) * 500, y = c.h * .17 + Math.floor(i / 2) * row; return <g key={i}>
    {portraitPaper(c, lerp(275, x, p), lerp(c.h * .1, y, p), 450, row - 25, i, label(c, i), p, i)}
  </g>; })}</>;
};

const PortraitGraph = (c: Ctx) => {
  const n = count(c), row = c.h * .94 / n, nodes: Point[] = Array.from({ length: n }, (_, i) => [i % 2 ? 968 : 32, row * (i + .5)]);
  return <><rect x={6} y={6} width={988} height={c.h - 12} rx={c.d.radius} fill={withAlpha(c.d.surface, .2)} stroke={c.d.line} />
    {nodes.slice(1).map((node, i) => <g key={i}>{route(c, nodes[i]!, node, phase(c, 34 + i * 70 / (n - 1), 23), true, 5)}{route(c, [nodes[i]![0], nodes[i]![1]], [500, node[1]], 1, false, 2)}</g>)}
    {nodes.map(([x, y], i) => { const height = Math.min(row - 24, portraitLabelHeight(c, label(c, i), 814)); return <g key={i}>{portraitCard(c, 65, y - height / 2, 870, height, label(c, i), { index: i, slot: "items", p: phase(c, 18 + i * 4, 17), active: c.frame > 52 + i * 65 / (n - 1) })}<circle cx={x} cy={y} r={18} fill={c.frame > 52 + i * 65 / (n - 1) ? c.d.accent : c.d.surface} stroke={c.d.accent} strokeWidth={3} /></g>; })}
  </>;
};

const PortraitMetricCity = (c: Ctx) => {
  const n = count(c), font = portraitFont(c), labelHs = Array.from({ length: n }, (_, i) => Math.max(88, wrapSystemsLabel(label(c, i), 840, font, c.d.monospace).length * font * 1.1 + 16)), labelsH = labelHs.reduce((sum, h) => sum + h + 10, 0), cityH = Math.max(110, c.h - labelsH - 150);
  let y = c.h - labelsH;
  const values = [.38, .68, .45, .92, .59, .78, .42, .87, .64, .95, .55, .72], size = 105;
  return <>{portraitText(c, `${Math.round((c.props.value ?? 96) * phase(c, 65, 43))}${c.props.suffix ?? "%"}`, 500, 65, 860, { anchor: "middle", font: font * 1.5 })}
    {values.map((value, i) => { const gx = i % 4, gy = Math.floor(i / 4), x = 435 + (gx - gy) * 105, yy = 160 + cityH * .52 + (gx + gy) * cityH * .068, height = value * cityH * .48 * phase(c, 20 + i * 5, 29), color = i % 2 ? c.d.secondary : c.d.accent; return <g key={i}><path d={`M${x} ${yy - height} h${size} v${height} h${-size} Z`} fill={withAlpha(color, .52)} stroke={c.d.line} /><path d={`M${x + size} ${yy - height} l48 30 v${height} l-48 -30 Z`} fill={withAlpha(color, .28)} stroke={c.d.line} /><path d={`M${x} ${yy - height} h${size} l48 30 h${-size} Z`} fill={color} stroke={c.d.line} /></g>; })}
    {labelHs.map((height, i) => { const yy = y; y += height + 10; return <g key={i}>{portraitCard(c, 40, yy, 920, height, label(c, i), { index: i, slot: "items", p: phase(c, 24 + i * 6, 20) })}<rect x={40} y={yy} width={7} height={height} fill={i % 2 ? c.d.secondary : c.d.accent} /></g>; })}
  </>;
};

const PortraitLeaderboard = (c: Ctx) => {
  const n = count(c), row = c.h * .95 / n, shift = phase(c, 54, 52);
  return <>{Array.from({ length: n }, (_, i) => { const highlighted = i === n - 1, y = 8 + (highlighted ? (n - 1) * row * (1 - shift) : i * row + shift * row), value = Math.round((c.props.value ?? 240) * (highlighted ? lerp(.2, 1, shift) : .88 - i * .18)), x = highlighted ? lerp(65, 25, shift) : 65, width = highlighted ? lerp(860, 940, shift) : 860, color = highlighted ? inkOn(c.d.accent) : c.d.ink; return <g key={i}>
    {card(c, { x, y, width, height: row - 18, index: i, active: highlighted, p: phase(c, 16 + i * 7, 24), children: <>
      {portraitText(c, label(c, i), 24, (row - 18) / 2, 610, { slot: "items", color })}
      {portraitText(c, `${value} ${c.props.suffix ?? "pts"}`, width - 24, (row - 18) / 2, 190, { slot: "value", color: highlighted ? color : c.d.muted, anchor: "end" })}
    </> })}
    <circle cx={x + 17} cy={y + 18} r={18} fill={c.d.bg} stroke={c.d.accent} />
  </g>; })}</>;
};

const PortraitChart = (c: Ctx) => {
  const n = count(c), font = portraitFont(c), inset = Math.max(12, font * .28), row = (c.h * .96 - inset * 2) / n, a = [.26, .41, .53, .6, .7, .8], b = [.37, .62, .68, .88, .83, .94];
  return <>{c.d.brandDriven && chartCard(c, 10, 0, 980, c.h)}{Array.from({ length: n }, (_, i) => { const top = i * row + inset, lines = wrapSystemsLabel(label(c, i), 900, font, c.d.monospace), titleH = lines.length * font * 1.1, barY = top + titleH + 8, available = row - titleH - 16, barH = Math.min(28, available / 2 - 4), av = a[i]! * 880 * phase(c, 20 + i * 6, 27), bv = b[i]! * 880 * phase(c, 61 + i * 5, 28); return <g key={i}>
    {portraitText(c, label(c, i), 50, top + titleH / 2, 900, { slot: "items" })}<path d={`M50 ${barY + available} H950`} stroke={c.d.line} />
    <rect x={50} y={barY} width={av} height={Math.max(5, barH)} rx={c.d.radius * .6} fill={withAlpha(c.d.ink, .38)} /><rect x={50} y={barY + Math.max(9, barH + 5)} width={bv} height={Math.max(5, barH)} rx={c.d.radius * .6} fill={c.d.accent} />
    <path d={`M${50 + av} ${barY} L${50 + bv} ${barY + Math.max(9, barH + 5)}`} stroke={c.d.accent} opacity={phase(c, 102 + i * 2, 18)} />
  </g>; })}</>;
};

const PortraitCarousel = (c: Ctx) => {
  const n = count(c), rows = Math.ceil(n / 2), progress = phase(c, 28, 85) * (n - 1), font = portraitFont(c);
  const rowHs = Array.from({ length: rows }, (_, row) => Math.max(...[row * 2, row * 2 + 1].filter(i => i < n).map(i => wrapSystemsLabel(label(c, i), 410, font, c.d.monospace).length * font * 1.1 + 22)));
  const tabsH = rowHs.reduce((sum, h) => sum + h + 12, 0), previewH = Math.max(180, c.h - tabsH - 35);
  return <>{Array.from({ length: n }, (_, i) => { const offset = i - progress, distance = Math.min(1, Math.abs(offset)), scale = 1 - distance * .1, x = 500 + offset * 890, scaled = { ...c, d: { ...c.d, minLabelFont: (c.d.minLabelFont ?? c.height * .03) / scale } }; return <g key={i} transform={`translate(${x} ${previewH / 2}) scale(${scale}) translate(-425 ${-previewH / 2})`} opacity={Math.max(.2, 1 - Math.abs(offset) * .3)}>{portraitPaper(scaled, 0, 0, 850, previewH, i, label(c, i), phase(c, 16 + i * 5, 22), i)}</g>; })}
    {Array.from({ length: n }, (_, i) => { const row = Math.floor(i / 2), y = previewH + 25 + rowHs.slice(0, row).reduce((sum, h) => sum + h + 12, 0); return <g key={i}>{portraitCard(c, 25 + (i % 2) * 500, y, 450, rowHs[row]!, label(c, i), { index: i, slot: "items", active: Math.abs(i - progress) < .5, inset: 20 })}</g>; })}
  </>;
};

const PortraitPageFan = (c: Ctx) => {
  const n = count(c), rows = Math.ceil(n / 2), font = portraitFont(c), rowHs = Array.from({ length: rows }, (_, row) => Math.max(...[row * 2, row * 2 + 1].filter(i => i < n).map(i => wrapSystemsLabel(label(c, i), 406, font, c.d.monospace).length * font * 1.1 + 22))), labelsH = rowHs.reduce((sum, h) => sum + h + 12, 0), fanH = Math.max(180, c.h - labelsH - 30), width = 370, height = fanH * .8, p = phase(c, 28, 56);
  const maxAngle = Math.min(22, Math.asin(Math.min(1, (450 - (n - 1) / 2 * 42 - width / 2) / height)) * 180 / Math.PI);
  return <>{Array.from({ length: n }, (_, i) => { const angle = (i - (n - 1) / 2) * maxAngle * 2 / (n - 1) * p; return <g key={i} transform={`translate(${500 + (i - (n - 1) / 2) * 42 * p} ${fanH * .92}) rotate(${angle}) translate(${-width / 2} ${-height})`}>
    {card(c, { x: 0, y: 0, width, height, p: phase(c, 14 + i * 6, 24), index: i, children: <><rect x={24} y={32} width={width - 48} height={height * .24} fill={withAlpha(c.d.accent, .1 + i * .04)} /><path d={`M24 ${height * .42} H${width - 24} M24 ${height * .58} H${width - 70} M24 ${height * .75} H${width - 40}`} stroke={c.d.line} strokeWidth={8} /><rect x={width - 12} y={20 + i * height * .11} width={12} height={34} fill={c.d.accent} /></> })}
  </g>; })}<circle cx={500} cy={fanH * .92} r={10} fill={c.d.accent} />
    {Array.from({ length: n }, (_, i) => { const row = Math.floor(i / 2), y = fanH + 15 + rowHs.slice(0, row).reduce((sum, h) => sum + h + 12, 0), x = 25 + (i % 2) * 500; return <g key={i}>{portraitCard(c, x, y, 450, rowHs[row]!, label(c, i), { index: i, slot: "items", p: phase(c, 14 + i * 6, 24), inset: 22 })}<rect x={x} y={y} width={8} height={rowHs[row]!} fill={c.d.accent} /></g>; })}
  </>;
};

const PortraitVariation = (c: Ctx) => {
  const n = count(c), rows = Math.ceil(n / 2), row = c.h * .96 / rows, font = portraitFont(c);
  return <>{Array.from({ length: n }, (_, i) => { const p = phase(c, 36 + i * 6, 31), targetX = 25 + (i % 2) * 500, targetY = 12 + Math.floor(i / 2) * row, width = 450, height = row - 24, titleH = wrapSystemsLabel(label(c, i), width - 40, font, c.d.monospace).length * font * 1.1 + 22, imageH = Math.max(20, height - titleH); return <g key={i} opacity={i === 0 ? 1 : p} transform={`translate(${lerp(275, targetX, p)} ${lerp(c.h * .14, targetY, p)})`}>
    <defs><clipPath id={`${c.id}-portrait-variation-${i}`}><rect width={width} height={imageH} rx={c.d.radius * .6} /></clipPath></defs>
    {card(c, { x: 0, y: 0, width, height, index: i, children: <><g data-21st-slot="screenshot" clipPath={`url(#${c.id}-portrait-variation-${i})`}>{art(c, i, width, imageH)}</g>{portraitText(c, label(c, i), 20, imageH + titleH / 2, width - 40, { slot: "items" })}{i === n - 1 && <circle cx={width - 22} cy={22} r={12 * phase(c, 112, 18)} fill={c.d.accent} />}</> })}
  </g>; })}</>;
};

const PORTRAIT_DRAW: Record<SystemsPattern, (c: Ctx) => React.ReactNode> = {
  "branch-merge-routing": PortraitBranchMerge, "workflow-stage-handoff": PortraitStageHandoff,
  "queue-conveyor": PortraitConveyor, "parallel-task-fanout": PortraitFanout,
  "kanban-progression": PortraitKanban, "completion-ladder": PortraitCompletion,
  "notification-cascade": PortraitNotifications, "integration-picker-grid": PortraitIntegration,
  "source-output-mosaic": PortraitMosaic, "network-graph-trace": PortraitGraph,
  "metric-city-rise": PortraitMetricCity, "rank-leaderboard-reveal": PortraitLeaderboard,
  "data-chart-comparison": PortraitChart, "report-format-carousel": PortraitCarousel,
  "document-page-fan": PortraitPageFan, "image-variation-matrix": PortraitVariation,
};

const Drawing: React.FC<{ props: StyledProps; pattern: SystemsPattern }> = ({ props, pattern }) => {
  const scene = useScene(props), id = `systems-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  // Variation cards use the whole native body in every canonical aspect.
  // Historical skins retain their original letterboxed composition.
  const productPortrait = props.style === "product" && (scene.portrait || pattern === "image-variation-matrix" || (pattern === "report-format-carousel" && scene.height >= scene.width));
  const c: Ctx = { ...scene, props, w: 1000, h: productPortrait ? scene.height * scene.bodyH / (scene.width * .84) * 1000 : scene.portrait ? 900 : 540, id };
  return <div style={{ position: "absolute", left: scene.width * .08, top: scene.height * scene.bodyY, width: scene.width * .84, height: scene.height * scene.bodyH }}>
    <svg width="100%" height="100%" viewBox={`0 0 ${c.w} ${c.h}`} role="img" aria-label={props.title} style={{ overflow: "hidden" }}>
      <defs><linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={c.d.accent} stopOpacity={.94} /><stop offset="1" stopColor={c.d.surface} /></linearGradient><clipPath id={`${id}-body`}><rect width={1000} height={c.h} /></clipPath></defs>
      <g clipPath={`url(#${id}-body)`}>{(productPortrait ? PORTRAIT_DRAW : DRAW)[pattern](c)}</g>
    </svg>
  </div>;
};

export const COMPONENTS: Record<string, PatternComponent> = Object.fromEntries(
  (Object.keys(DRAW) as SystemsPattern[]).map(pattern => [pattern, (props: StyledProps) => <Canvas {...props}><Drawing props={props} pattern={pattern} /></Canvas>]),
);
