"use client";

import { useEffect, useId, useRef, useState } from "react";
import type {
  CSSProperties,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { cn } from "./chart-utils/cn";
import {
  placeLabels,
  type Box,
  type LabelRequest,
} from "./chart-utils/chart.labels";
import {
  formatTick,
  formatValue,
  numericScale,
  type NumericScale,
} from "./chart-utils/chart.scale";
import type {
  ChartAxis,
  ChartPoint,
  ChartSeries,
  ChartVariant,
} from "./chart-utils/chart.types";
import { seriesColor, SURFACE } from "./chart-utils/chart.variants";
import ChartLegend from "./chart-utils/chart-legend";
import ChartTable from "./chart-utils/chart-table";

/**
 * A chart for notes and docs, drawn in plain SVG: a line, bars over categories, or loose points,
 * for one series or a few, on real axes with round ticks, a linear or log scale, and the axes'
 * titles and units. Grey by default: one series stays grey and its name is the chart's; several
 * take the palette's hues in order, with a legend. Names given to points (`label`) are written by
 * them where they collide with nothing, and left to the tooltip where they would. Hovering, or the
 * arrow keys once focused, reads a position out (every series at that x, or the nearest point),
 * at once and without motion, as everything used all the time; a table holds every value for
 * screen readers. It comes into view once, as a group, and is as wide as its column, down to a
 * phone's.
 *
 * Ported from the Vue 3 component of the same name in elastic-ui (github.com/JoseEstevez520/elastic-ui),
 * by Jose Estevez, MIT licensed. Same public props, computations and markup, now in React.
 */
export interface ChartProps {
  series: ChartSeries[];
  variant?: ChartVariant;
  /** The bars' categories in order; by default, in the order the data first names them. */
  categories?: string[];
  x?: ChartAxis;
  y?: ChartAxis;
  /** What it shows, for those who cannot see it, and the table's caption. */
  label: string;
  caption?: string;
  /** The drawing's height in pixels, axes included. */
  height?: number;
  keysLabel?: string;
  className?: string;
}

const FONT = 12;
const MARKER = 4;
const RING = 2;
const GAP = 2;
const BAR = 24;

interface Mark extends ChartPoint {
  px: number;
  py: number;
  series: number;
}

interface Readout {
  title: string;
  rows: Array<{ color?: string; name: string; value: string }>;
  x: number;
  y: number;
  points: Mark[];
}

export default function Chart({
  series,
  variant = "line",
  categories: categoriesProp,
  x,
  y,
  label,
  caption,
  height = 280,
  keysLabel = "Use the arrow keys to read each value",
  className,
}: ChartProps) {
  // --- Size: the SVG is drawn at the column's own pixel width, so strokes and text never stretch.
  const rootRef = useRef<HTMLElement>(null);
  const plotRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(560);
  const [family, setFamily] = useState<string | undefined>(undefined);
  const canvasRef = useRef<CanvasRenderingContext2D | null | undefined>(
    undefined,
  );
  function textWidth(text: string) {
    if (family && canvasRef.current === undefined)
      canvasRef.current = document.createElement("canvas").getContext("2d");
    if (!canvasRef.current || !family) return text.length * FONT * 0.56;
    canvasRef.current.font = `${FONT}px ${family}`;
    return canvasRef.current.measureText(text).width;
  }

  // Comes in once, as a group, when nearly all of it is in view (as Diagram).
  const [waiting, setWaiting] = useState(false);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = plotRef.current;
    if (!el) return;
    setFamily(getComputedStyle(el).fontFamily);
    setWidth(el.getBoundingClientRect().width);
    const resize = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry)
        setWidth((w) =>
          entry.contentRect.width !== w ? entry.contentRect.width : w,
        );
    });
    resize.observe(el);
    setWaiting(true);
    const intersection = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        setWaiting(false);
        setShown(true);
        intersection.disconnect();
      },
      { threshold: 0.6 },
    );
    if (rootRef.current) intersection.observe(rootRef.current);
    return () => {
      resize.disconnect();
      intersection.disconnect();
    };
  }, []);

  // --- Data.
  const categorical =
    variant === "bars" ||
    series.some((s) => s.points.some((p) => typeof p.x === "string"));
  const categories = (() => {
    if (!categorical) return [] as string[];
    if (categoriesProp) return categoriesProp;
    const seen = new Set<string>();
    for (const s of series) for (const p of s.points) seen.add(String(p.x));
    return [...seen];
  })();
  const xLog = !categorical && x?.scale === "log";
  const yLog = y?.scale === "log";
  const valid = (p: ChartPoint) =>
    Number.isFinite(p.y) &&
    (!yLog || p.y > 0) &&
    (categorical
      ? categories.includes(String(p.x))
      : Number.isFinite(Number(p.x)) && (!xLog || Number(p.x) > 0));
  const colors = series.map((s, i) => seriesColor(i, series.length, s.color));

  const withUnit = (text: string, unit?: string) =>
    unit ? `${text} ${unit}` : text;
  const axisTitle = (axis?: ChartAxis) =>
    axis?.title && axis.unit
      ? `${axis.title} (${axis.unit})`
      : (axis?.title ?? (axis?.unit ? `(${axis.unit})` : ""));
  const readX = (xv: number | string) =>
    typeof xv === "string"
      ? xv
      : withUnit(x?.format?.(xv) ?? formatValue(xv), x?.unit);
  const readY = (yv: number) =>
    withUnit(y?.format?.(yv) ?? formatValue(yv), y?.unit);

  // --- Layout, top to bottom: the y axis's title, the plot, the x ticks, the x axis's title.
  const yTitle = axisTitle(y);
  const xTitle = axisTitle(x);
  const top = yTitle ? 28 : 10;
  const bottom = height - (xTitle ? 44 : 24);

  const yScale: NumericScale = (() => {
    const values = series.flatMap((s) =>
      s.points.filter(valid).map((p) => p.y),
    );
    return numericScale(
      values,
      [bottom, top],
      Math.max(2, Math.floor((bottom - top) / 44)),
      {
        type: y?.scale,
        min: y?.min,
        max: y?.max,
        zero: variant === "bars",
      },
    );
  })();
  const yTickText = (v: number) => y?.format?.(v) ?? formatTick(v, yScale);
  const left =
    Math.ceil(
      Math.max(0, ...yScale.ticks.map((t) => textWidth(yTickText(t)))),
    ) + 10;

  const xValues = series.flatMap((s) =>
    s.points.filter(valid).map((p) => Number(p.x)),
  );
  // First with a rough right edge, to count the ticks; then with room for half the last one's text.
  const xScaleFor = (rightEdge: number) =>
    numericScale(
      xValues,
      [left, rightEdge],
      Math.max(2, Math.floor((rightEdge - left) / 88)),
      {
        type: x?.scale,
        min: x?.min,
        max: x?.max,
      },
    );
  const xTickText = (v: number, scale: NumericScale) =>
    x?.format?.(v) ?? formatTick(v, scale);
  const right = (() => {
    if (categorical) return width - 4;
    const rough = xScaleFor(width - 8);
    const last = rough.ticks.at(-1);
    return (
      width -
      Math.max(
        8,
        last === undefined
          ? 0
          : Math.ceil(textWidth(xTickText(last, rough)) / 2),
      )
    );
  })();
  const xScale = categorical ? undefined : xScaleFor(right);
  const band = (right - left) / Math.max(1, categories.length);
  const xOf = (xv: number | string) =>
    categorical
      ? left + (categories.indexOf(String(xv)) + 0.5) * band
      : xScale!(Number(xv));

  const baseline = (() => {
    const [lo, hi] = yScale.domain;
    return yScale(yScale.type === "log" ? lo : Math.min(hi, Math.max(lo, 0)));
  })();

  // --- Marks.
  const drawn = series.map((s, i) => {
    let points: Mark[] = s.points
      .filter(valid)
      .map((p) => ({ ...p, px: xOf(p.x), py: yScale(p.y), series: i }));
    if (variant === "line" && !categorical)
      points = points.sort((a, b) => a.px - b.px);
    return { name: s.name, color: colors[i]!, points };
  });
  const linePath = (points: Mark[]) =>
    points
      .map((p, i) => `${i ? "L" : "M"}${p.px.toFixed(2)},${p.py.toFixed(2)}`)
      .join("");

  // Dots on a line only while they have room; on a dense line, only the one being read.
  const markers = (() => {
    if (variant === "points") return true;
    if (variant !== "line") return false;
    const most = Math.max(0, ...drawn.map((s) => s.points.length));
    return most <= 24 && (right - left) / Math.max(1, most) >= 14;
  })();

  // Rounded at the data's end, square on the baseline.
  function barPath(bx: number, w: number, y0: number, y1: number) {
    const r = Math.min(4, w / 2, Math.abs(y0 - y1));
    const up = y1 <= y0;
    const s = up ? 1 : 0;
    const edge = up ? y1 + r : y1 - r;
    return `M${bx},${y0}V${edge}A${r},${r} 0 0 ${s} ${bx + r},${y1}H${bx + w - r}A${r},${r} 0 0 ${s} ${bx + w},${edge}V${y0}Z`;
  }
  // Bars side by side in each category, at most 24px thick and 2px apart, the band's rest air.
  const bars = (() => {
    if (variant !== "bars")
      return [] as Array<
        Mark & { x: number; width: number; color?: string; d: string }
      >;
    const count = drawn.length;
    const group = Math.min(band * 0.72, count * BAR + (count - 1) * GAP);
    const thick = Math.max(1, (group - (count - 1) * GAP) / count);
    return drawn.flatMap((s, j) =>
      s.points.map((p) => {
        const bx = p.px - group / 2 + j * (thick + GAP);
        return {
          ...p,
          x: bx,
          width: thick,
          color: s.color,
          d: barPath(bx, thick, baseline, p.py),
        };
      }),
    );
  })();

  // --- Ticks.
  const yTicks = yScale.ticks.map((v) => ({
    y: yScale(v),
    text: yTickText(v),
  }));
  const xTicks = (() => {
    if (categorical) {
      const widest = Math.max(0, ...categories.map((c) => textWidth(c)));
      // Every other name (or fewer) when they would touch.
      const every = Math.max(
        1,
        Math.ceil(((widest + 12) * categories.length) / (right - left)),
      );
      return categories
        .map((c, i) => ({ x: xOf(c), text: i % every ? "" : c, grid: false }))
        .filter((t) => t.text);
    }
    const scale = xScale!;
    return scale.ticks.map((v) => ({
      x: scale(v),
      text: xTickText(v, scale),
      grid: true,
    }));
  })();

  // --- Names on the drawing, where they fit.
  const placed = (() => {
    const radius = MARKER + RING;
    const requests: LabelRequest[] = [];
    const marks: Box[] = [];
    if (variant === "bars") {
      for (const b of bars) {
        marks.push({
          x: b.x,
          y: Math.min(b.py, baseline),
          width: b.width,
          height: Math.abs(baseline - b.py),
        });
        if (b.label)
          requests.push({
            x: b.x + b.width / 2,
            y: Math.min(b.py, baseline),
            r: 0,
            text: b.label,
            width: textWidth(b.label),
            height: 14,
            onlyAbove: true,
          });
      }
    } else {
      for (const s of drawn)
        for (const p of s.points) {
          if (markers || p.label)
            marks.push({
              x: p.px - radius,
              y: p.py - radius,
              width: radius * 2,
              height: radius * 2,
            });
          if (p.label)
            requests.push({
              x: p.px,
              y: p.py,
              r: radius,
              text: p.label,
              width: textWidth(p.label),
              height: 14,
            });
        }
    }
    return placeLabels(requests, marks, {
      x: left,
      y: top - 8,
      width: width - left,
      height: bottom - top + 8,
    });
  })();

  // --- Reading out: a position (every series at one x) for lines and bars, a point for points.
  const positions = (() => {
    if (variant === "points")
      return [] as Array<{ key: number | string; px: number }>;
    if (categorical)
      return categories.map((c) => ({ key: c as number | string, px: xOf(c) }));
    const keys = [
      ...new Set(drawn.flatMap((s) => s.points.map((p) => Number(p.x)))),
    ].sort((a, b) => a - b);
    return keys.map((k) => ({ key: k as number | string, px: xOf(k) }));
  })();
  const loose =
    variant === "points"
      ? drawn
          .flatMap((s) => s.points)
          .sort((a, b) => a.px - b.px || a.py - b.py)
      : [];
  const count = variant === "points" ? loose.length : positions.length;
  const [active, setActive] = useState<number | null>(null);

  const readout: Readout | null = (() => {
    const index = active;
    if (index === null || index >= count) return null;
    if (variant === "points") {
      const p = loose[index]!;
      const several = drawn.length > 1;
      return {
        title: p.label ?? series[p.series]!.name,
        rows: [
          ...(several && p.label
            ? [
                {
                  color: colors[p.series],
                  name: "",
                  value: series[p.series]!.name,
                },
              ]
            : []),
          { name: y?.title ?? "y", value: readY(p.y) },
          { name: x?.title ?? "x", value: readX(p.x) },
        ],
        x: p.px,
        y: p.py,
        points: [p],
      };
    }
    const { key, px } = positions[index]!;
    const at = drawn.flatMap((s) => s.points.filter((p) => p.x === key));
    const several = drawn.length > 1;
    return {
      title: readX(key),
      rows: at.map((p) => ({
        color: several ? colors[p.series] : undefined,
        name: [several ? series[p.series]!.name : y?.title, p.label]
          .filter(Boolean)
          .join(" · "),
        value: readY(p.y),
      })),
      x: px,
      y: Math.min(...at.map((p) => p.py), bottom),
      points: at,
    };
  })();
  const spoken = readout
    ? [
        readout.title,
        ...readout.rows.map((r) => `${r.name} ${r.value}`.trim()),
      ].join(", ")
    : "";

  function pointAt(e: ReactPointerEvent<HTMLDivElement>): number | null {
    const rect = plotRef.current!.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    if (variant === "points") {
      let best: number | null = null;
      let distance = 32;
      loose.forEach((p, i) => {
        const d = Math.hypot(p.px - mx, p.py - my);
        if (d < distance) [best, distance] = [i, d];
      });
      return best;
    }
    if (!positions.length || mx < left - 12 || mx > right + 12) return null;
    let best = 0;
    positions.forEach((p, i) => {
      if (Math.abs(p.px - mx) < Math.abs(positions[best]!.px - mx)) best = i;
    });
    return best;
  }
  function onPointer(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType === "touch" && e.type === "pointermove" && !e.buttons)
      return;
    setActive(pointAt(e));
  }
  function onKeydown(e: ReactKeyboardEvent<HTMLDivElement>) {
    const n = count;
    if (!n) return;
    const now = active;
    const next: Record<string, number | null> = {
      ArrowRight: now === null ? 0 : Math.min(n - 1, now + 1),
      ArrowDown: now === null ? 0 : Math.min(n - 1, now + 1),
      ArrowLeft: now === null ? n - 1 : Math.max(0, now - 1),
      ArrowUp: now === null ? n - 1 : Math.max(0, now - 1),
      Home: 0,
      End: n - 1,
      Escape: null,
    };
    if (!(e.key in next)) return;
    e.preventDefault();
    setActive(next[e.key]!);
  }

  // Beside what it reads, on the side with more room, never over it.
  const tooltipStyle: CSSProperties | undefined = (() => {
    const r = readout;
    if (!r) return undefined;
    const toLeft = r.x > width / 2;
    return {
      left: `${r.x}px`,
      top: `${Math.max(r.y, top + 24)}px`,
      transform: `translate(${toLeft ? "calc(-100% - 14px)" : "14px"}, -50%)`,
    };
  })();

  // --- For screen readers, every value in a table.
  const table = (() => {
    const several = series.length > 1;
    if (variant === "points" || !categorical) {
      const named = series.some((s) => s.points.some((p) => p.label));
      const columns = [
        ...(several ? ["Series"] : []),
        xTitle || "x",
        yTitle || "y",
        ...(named ? ["Name"] : []),
      ];
      const rows = drawn.flatMap((s) =>
        s.points.map((p) => [
          ...(several ? [s.name] : []),
          readX(p.x),
          readY(p.y),
          ...(named ? [p.label ?? ""] : []),
        ]),
      );
      return { columns, rows };
    }
    const columns = [
      xTitle,
      ...drawn.map((s) => (several ? s.name : yTitle || s.name)),
    ];
    const rows = categories.map((c) => [
      c,
      ...drawn.map((s) => {
        const p = s.points.find((q) => String(q.x) === c);
        return p ? readY(p.y) + (p.label ? ` (${p.label})` : "") : "";
      }),
    ]);
    return { columns, rows };
  })();

  const readoutId = `chart-${useId()}`;

  return (
    <figure
      ref={rootRef}
      aria-label={label}
      data-waiting={waiting || undefined}
      data-shown={shown || undefined}
      className={cn("diagram-frame m-0 flex flex-col gap-3", className)}
    >
      {series.length > 1 && (
        <ChartLegend className="diagram-in" items={drawn} variant={variant} />
      )}
      <div
        ref={plotRef}
        className="diagram-in relative w-full touch-pan-y rounded-[var(--radius-sm)] outline-none focus-ring"
        tabIndex={0}
        aria-label={`${label}. ${keysLabel}`}
        aria-describedby={readoutId}
        onPointerMove={onPointer}
        onPointerDown={onPointer}
        onPointerLeave={() => setActive(null)}
        onKeyDown={onKeydown}
        onBlur={() => setActive(null)}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          className="block w-full overflow-visible"
          aria-hidden="true"
        >
          {yTitle && (
            <text x={0} y={FONT} className="fill-fg-secondary" fontSize={FONT}>
              {yTitle}
            </text>
          )}

          {/* Grid and axes: recessive, under everything. */}
          <g>
            {yTicks.map((t) => (
              <line
                key={`y${t.y}`}
                className="diagram-grid"
                x1={left}
                x2={right}
                y1={t.y}
                y2={t.y}
              />
            ))}
            {xTicks.map((t) =>
              t.grid ? (
                <line
                  key={`x${t.x}`}
                  className="diagram-grid"
                  x1={t.x}
                  x2={t.x}
                  y1={top}
                  y2={bottom}
                />
              ) : null,
            )}
            <line
              className="diagram-line"
              x1={left}
              x2={right}
              y1={baseline}
              y2={baseline}
            />
          </g>
          <g className="fill-fg-muted tabular-nums" fontSize={FONT}>
            {yTicks.map((t) => (
              <text
                key={`yt${t.y}`}
                x={left - 8}
                y={t.y}
                textAnchor="end"
                dominantBaseline="central"
              >
                {t.text}
              </text>
            ))}
            {xTicks.map((t) => (
              <text
                key={`xt${t.x}`}
                x={t.x}
                y={bottom + 16}
                textAnchor="middle"
              >
                {t.text}
              </text>
            ))}
          </g>
          {xTitle && (
            <text
              x={(left + right) / 2}
              y={height - 4}
              textAnchor="middle"
              className="fill-fg-secondary"
              fontSize={FONT}
            >
              {xTitle}
            </text>
          )}

          {/* The position being read, as a hairline (lines) or a band (bars). */}
          {readout && variant === "line" && (
            <line
              x1={readout.x}
              x2={readout.x}
              y1={top}
              y2={bottom}
              stroke="var(--color-border-strong)"
              strokeWidth={1}
            />
          )}

          {variant === "bars" ? (
            <g>
              {bars.map((b, i) => (
                <path
                  key={i}
                  d={b.d}
                  style={{
                    fill: b.color,
                    opacity:
                      readout && !readout.points.some((p) => p.px === b.px)
                        ? 0.4
                        : 1,
                  }}
                />
              ))}
            </g>
          ) : (
            <g>
              {variant === "line" &&
                drawn.map((s) => (
                  <path
                    key={s.name}
                    d={linePath(s.points)}
                    fill="none"
                    style={{ stroke: s.color }}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
              {drawn.map((s) =>
                markers
                  ? s.points.map((p, i) => (
                      <circle
                        key={`m${s.name}${i}`}
                        cx={p.px}
                        cy={p.py}
                        r={MARKER}
                        strokeWidth={RING}
                        style={{ fill: s.color, stroke: SURFACE }}
                      />
                    ))
                  : null,
              )}
              {/* What is being read stands out: a larger dot. */}
              {(readout?.points ?? []).map((p, i) => (
                <circle
                  key={`a${i}`}
                  cx={p.px}
                  cy={p.py}
                  r={MARKER + 1.5}
                  strokeWidth={RING}
                  style={{ fill: colors[p.series], stroke: SURFACE }}
                />
              ))}
            </g>
          )}

          <g className="fill-fg-secondary" fontSize={FONT}>
            {placed.map((l) => (
              <text
                key={`${l.text}${l.x}`}
                x={l.x}
                y={l.y}
                textAnchor={l.anchor}
                dominantBaseline="central"
              >
                {l.text}
              </text>
            ))}
          </g>
        </svg>

        {readout && (
          <div
            className="pointer-events-none absolute z-10 flex max-w-56 flex-col gap-0.5 rounded-[var(--radius-sm)] border border-[color:var(--popover-border,var(--color-border))] bg-[color:var(--popover-bg,var(--color-surface-raised))] px-2.5 py-1.5 text-meta text-fg-secondary shadow-soft"
            style={tooltipStyle}
            aria-hidden="true"
          >
            <span className="text-fg-muted">{readout.title}</span>
            {readout.rows.map((row, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 whitespace-nowrap"
              >
                {row.color && (
                  <span
                    className="h-0.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: row.color }}
                  />
                )}
                <span className="font-medium text-fg tabular-nums">
                  {row.value}
                </span>
                {row.name && <span>{row.name}</span>}
              </span>
            ))}
          </div>
        )}
      </div>
      <p id={readoutId} className="sr-only" aria-live="polite">
        {spoken}
      </p>
      {caption && (
        <figcaption className="text-ui text-fg-muted">{caption}</figcaption>
      )}
      <ChartTable caption={label} columns={table.columns} rows={table.rows} />
    </figure>
  );
}
