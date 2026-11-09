"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Ported from zweiundeins/starbase's <sb-echarts> web component (MIT) to a
// plain React component. <sb-echarts> itself was ported from Libretto's
// <tco-chart>, which draws every chart in that app from options its Go server
// builds. Original: components/echarts/echarts.js, by zweiundeins and
// starbase contributors. https://github.com/zweiundeins/starbase
//
// A host for Apache ECharts that a server (or any caller) can drive: it is
// handed an ECharts option as a plain object, themes it from the page's
// `--sb-*` design tokens, keeps it in the reader's language, follows theme
// changes, fits it to its box and animates every new option into place.
// ---------------------------------------------------------------------------

// ---- page-level extension points --------------------------------------------
//
// Both are exported for the page's own code. A chart kind is code (a custom
// series' renderItem is a function, which cannot travel as JSON), so the page
// defines a builder under a name and an option { kind: 'name', ... } is
// expanded by it before theming. A chart that names a kind before the page has
// defined it draws as soon as it is. The registry lives on globalThis so every
// copy of this module (however it was bundled) shares it.
const reg: {
  kinds: Map<string, (option: any, ctx: any) => any>;
  charts: Set<(name: string) => void>;
  format?: (n: number, lang?: string) => string;
} = ((globalThis as any)[Symbol.for("sb-echarts-react")] ??= {
  kinds: new Map(),
  charts: new Set(),
});

export const defineChartKind = (
  name: string,
  build: (option: any, ctx: any) => any,
) => {
  reg.kinds.set(name, build);
  reg.charts.forEach((redraw) => redraw(name));
};

// The numbers ECharts writes itself – value-axis labels, tooltip rows – use
// Intl.NumberFormat in the chart's language. A caller whose server formats
// numbers its own way sets the same formatter here, so a chart never disagrees
// with the figures around it.
export const setNumberFormat = (fn: (n: number, lang?: string) => string) =>
  void (reg.format = fn);

// ECharts itself is loaded the first time a chart comes near the screen, once
// per page.
let lib: Promise<any> | undefined;
const load = () => (lib ??= import("echarts"));

// ---- option helpers -----------------------------------------------------

const isObj = (v: unknown): v is Record<string, any> =>
  v !== null && typeof v === "object" && !Array.isArray(v);

// A value ECharts treats as absent: its '-' placeholder, null, undefined or NaN.
const missing = (v: any) => v == null || v === "-" || Number.isNaN(v);
// The value an axis tooltip row shows, as ECharts picks it: the number itself,
// or the last dimension the series puts on the other axis.
const VALUE_AXIS: Record<string, string> = {
  x: "y",
  y: "x",
  angle: "radius",
  radius: "angle",
};
const valueOf = (p: any) => {
  const v = p.value,
    i = p.encode?.[VALUE_AXIS[p.axisDim]]?.at(-1);
  return !v || typeof v !== "object"
    ? v
    : Array.isArray(v)
      ? v[i ?? v.length - 1]
      : v[p.dimensionNames?.[i]];
};
// Series names come from the caller and a tooltip formatter returns HTML.
const escapeHTML = (s: unknown) =>
  String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// An axis tooltip lists every series at the hovered point, including those
// with no value there, which would read as a row of "-". Leave them out,
// drawing the rest in ECharts' own layout, each value in its series' format.
const axisTooltip = (
  params: any,
  format: (n: number) => string,
  series: any[],
) => {
  const rows = [params].flat().filter((p) => !missing(valueOf(p)));
  if (!rows.length) return "";
  const row = (p: any) =>
    `<div style="margin:10px 0 0;line-height:1">${p.marker ?? ""}<span style="margin-left:2px">${escapeHTML(p.seriesName ?? "")}</span>` +
    `<span style="float:right;margin-left:20px;font-weight:700">${escapeHTML((series[p.seriesIndex]?.tooltip?.valueFormatter ?? format)(valueOf(p)))}</span><div style="clear:both"></div></div>`;
  return `<div style="line-height:1;opacity:.72">${escapeHTML(rows[0].axisValueLabel ?? "")}</div>${rows.map(row).join("")}`;
};

// deepMerge lays the caller's option over the themed defaults: objects merge,
// everything else (arrays included) replaces.
const deepMerge = (base: any, over: any): any => {
  const out = { ...base };
  for (const [k, v] of Object.entries(over))
    out[k] = isObj(v) && isObj(out[k]) ? deepMerge(out[k], v) : v;
  return out;
};

// A language tag as Intl takes it (en_US, as some CMSs write it, is en-US), or
// nothing for one it cannot read.
const locale = (tag?: string) => {
  try {
    return Intl.getCanonicalLocales(tag?.replace(/_/g, "-") || [])[0];
  } catch {}
};

// Month and weekday names in the chart's language, from Intl, registered once
// per language. ECharts ships only a handful of locales of its own, and fills
// in everything else (legend, toolbox, aria) from its English one.
const locales = new Set<string>();
const localeFor = (ec: any, lang: string) => {
  const code = "sb-" + lang;
  if (locales.has(code)) return code;
  const fmt = (opt: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(lang, { ...opt, timeZone: "UTC" }).format;
  const months = Array.from({ length: 12 }, (_, m) => Date.UTC(2024, m, 1));
  const days = Array.from({ length: 7 }, (_, d) => Date.UTC(2024, 0, 7 + d)); // a Sunday first
  ec.registerLocale(code, {
    time: {
      month: months.map(fmt({ month: "long" })),
      monthAbbr: months.map(fmt({ month: "short" })),
      dayOfWeek: days.map(fmt({ weekday: "long" })),
      dayOfWeekAbbr: days.map(fmt({ weekday: "short" })),
    },
  });
  locales.add(code);
  return code;
};

// ---- colours --------------------------------------------------------------

// Every colour handed to ECharts is plain rgb()/rgba(). getComputedStyle
// returns modern syntax (oklch(), color(srgb …)) for tokens built with oklch
// or color-mix, which a canvas paints but ECharts' own colour parser does not
// – and ECharts parses an item's colour to lighten it for the hover state.
// A 1×1 canvas turns anything the browser understands into sRGB.
let pixelCtx: CanvasRenderingContext2D | null = null;
const rgba = (css: string) => {
  pixelCtx ??= document
    .createElement("canvas")
    .getContext("2d", { willReadFrequently: true });
  const ctx = pixelCtx!;
  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = "#000";
  ctx.fillStyle = css;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
  return a === 255
    ? `rgb(${r}, ${g}, ${b})`
    : `rgba(${r}, ${g}, ${b}, ${+(a / 255).toFixed(3)})`;
};

// ---- styles -----------------------------------------------------------------

const PALETTE: Array<[string, string, string]> = [
  ["--sb-chart-1", "--sb-brand-light", "#B09AFF"],
  ["--sb-chart-2", "--sb-accent", "#65BFFF"],
  ["--sb-chart-3", "--sb-ok", "#6EF59A"],
  ["--sb-chart-4", "--sb-warn", "#F5C451"],
  ["--sb-chart-5", "--sb-danger", "#F2777A"],
  ["--sb-chart-6", "--sb-info", "#7DD3FC"],
  ["--sb-chart-7", "--sb-text-2", "#AEBBDD"],
  ["--sb-chart-8", "--sb-brand", "#8C6BFF"],
];

// The keyboard's steps: [series, item].
const KEYS: Record<string, [number, number]> = {
  ArrowRight: [0, 1],
  ArrowLeft: [0, -1],
  ArrowDown: [1, 0],
  ArrowUp: [-1, 0],
  Enter: [0, 0],
};
const clamp = (v: number, max: number) => Math.max(0, Math.min(v, max));

export interface EChartsProps {
  /** The ECharts option, as a plain object. A string value that is exactly
   * `var(--token)` becomes that colour. `{ kind: 'name', ... }` is expanded by
   * a builder registered with `defineChartKind()`. */
  option?: Record<string, any> | null;
  /** Draw on a canvas, or as SVG (sharper when printed, slower with many points). */
  renderer?: "canvas" | "svg";
  /** Locale for numbers, months and weekdays (default: the page's lang, then the browser's). */
  lang?: string;
  /** A click on a data item: { seriesName, seriesIndex, name, value, dataIndex }. */
  onChartClick?: (detail: {
    seriesName?: string;
    seriesIndex?: number;
    name?: string;
    value?: any;
    dataIndex?: number;
  }) => void;
  className?: string;
  style?: CSSProperties;
  /** A fallback for readers without the chart: shown until ECharts has drawn,
   * kept for screen readers after that. A table of the same data is ideal. */
  children?: ReactNode;
}

/** Apache ECharts drawn from an option object, themed from the page's
 * `--sb-*` design tokens and kept in the reader's language. Ported from
 * zweiundeins/starbase's `<sb-echarts>` web component (MIT). */
export default function EChart({
  option = null,
  renderer = "canvas",
  lang,
  onChartClick,
  className,
  style,
  children,
}: EChartsProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<HTMLDivElement>(null);

  // Mirrored into refs so the long-lived effect below always reads the
  // current value without needing to restart on every render.
  const optionRef = useRef(option);
  optionRef.current = option;
  const rendererRef = useRef(renderer);
  rendererRef.current = renderer;
  const langRef = useRef(lang);
  langRef.current = lang;
  const onClickRef = useRef(onChartClick);
  onClickRef.current = onChartClick;

  const hasFallback = children != null;

  // So the option/renderer/lang-change effects below can reach into the
  // long-lived instance effect without re-running it.
  const apiRef = useRef<{ redraw: () => void; restart: () => void }>();

  useEffect(() => {
    const host = hostRef.current!,
      plot = plotRef.current!;
    let alive = true,
      visible = false,
      starting = false;
    let ec: any, chart: any, chartLang: string | undefined;
    let unfitted: any,
      fitted: string | undefined,
      measure: CanvasRenderingContext2D | undefined,
      sized = false;
    let si = 0,
      at = -1; // the series and item the keyboard is on

    const langOf = () =>
      locale(
        langRef.current ||
          host.closest("[lang]")?.getAttribute("lang") ||
          undefined,
      ) ?? navigator.language;
    // A token's value as the page resolves it, in this element's own scope.
    const css = (token: string) =>
      getComputedStyle(host).getPropertyValue(token).trim();
    const font = () => css("--_font") || getComputedStyle(host).fontFamily;
    // The probe leaves again in the same task, before anything is laid out
    // or painted, so it needs no styles to stay out of sight.
    const color = (value: string) => {
      const probe = document.createElement("span");
      probe.style.color = value.startsWith("--") ? `var(${value})` : value;
      host.append(probe);
      const c = getComputedStyle(probe).color;
      probe.remove();
      return rgba(c);
    };
    const formatNumber = (n: number) =>
      missing(n)
        ? "-"
        : !Number.isFinite(n)
          ? String(n)
          : reg.format
            ? reg.format(n, chartLang)
            : new Intl.NumberFormat(chartLang, {
                maximumFractionDigits: 20,
              }).format(n);

    const resolveVars = (v: any): any =>
      typeof v === "string"
        ? /^var\(--[\w-]+\)$/.test(v)
          ? color(v)
          : v
        : Array.isArray(v)
          ? v.map(resolveVars)
          : isObj(v)
            ? Object.fromEntries(
                Object.entries(v).map(([k, x]) => [k, resolveVars(x)]),
              )
            : v;

    const build = (input: any) => {
      chartLang = langOf();
      let opt = input;
      if (opt.kind) {
        const kind = reg.kinds.get(opt.kind);
        if (!kind)
          return void console.error(
            `<EChart>: no chart kind "${opt.kind}"; register it with defineChartKind()`,
          );
        opt = kind(opt, {
          echarts: ec,
          color,
          css,
          formatNumber,
          lang: chartLang,
          get width() {
            return ((sized = true), plot.clientWidth);
          },
          get height() {
            return ((sized = true), plot.clientHeight);
          },
        });
      }
      const text = color("--_text"),
        muted = color("--_muted"),
        line = color("--_line"),
        f = font(),
        numbers = css("--_numbers") || f;
      const axis = {
        axisLine: { lineStyle: { color: line } },
        axisTick: { lineStyle: { color: line } },
        axisLabel: { color: muted, fontFamily: f },
        splitLine: { lineStyle: { color: color("--_grid") } },
        nameTextStyle: { color: muted, fontFamily: f },
      };
      const base: any = {
        color: PALETTE.map((_, i) => color(`--_c${i + 1}`)),
        backgroundColor: "transparent",
        animation: !matchMedia("(prefers-reduced-motion: reduce)").matches,
        animationDuration: 700,
        animationEasing: "cubicOut",
        animationDurationUpdate: 450,
        animationEasingUpdate: "cubicInOut",
        textStyle: { color: text, fontFamily: f },
        tooltip: {
          backgroundColor: color("--_tip"),
          borderColor: line,
          textStyle: {
            color: color("--_strong"),
            fontFamily: numbers,
            fontSize: 12,
          },
        },
        aria: { enabled: !hasFallback },
      };
      if (opt.xAxis || opt.yAxis) {
        base.xAxis = axis;
        base.yAxis = {
          ...axis,
          axisLabel: { ...axis.axisLabel, fontFamily: numbers },
        };
        base.grid = { left: "3%", right: "4%", top: "10%", bottom: "12%" };
      }
      const o = resolveVars(deepMerge(base, opt));
      if (o.legend)
        o.legend = [o.legend]
          .flat()
          .map((l: any) =>
            deepMerge({ textStyle: { color: muted, fontFamily: f } }, l),
          );
      for (const s of [o.series].flat())
        if (isObj(s) && (s.type === "pie" || s.type === "funnel"))
          s.label = { color: text, textBorderWidth: 0, ...s.label };
      for (const k of ["xAxis", "yAxis"])
        if (Array.isArray(o[k]))
          o[k] = o[k].map((a: any) => deepMerge(base[k], a));
      for (const [k, type] of [
        ["xAxis", "category"],
        ["yAxis", "value"],
      ] as const)
        for (const a of [o[k]].flat())
          if (isObj(a) && (a.type ?? type) === "value")
            (a.axisLabel ??= {}).formatter ??= formatNumber;
      const series = [o.series].flat();
      const own = series.some((s) => /candle|box|^k$/.test(s?.type));
      for (const t of [o.tooltip].flat())
        if (isObj(t)) {
          t.valueFormatter ??= formatNumber;
          if (t.trigger === "axis" && !own)
            t.formatter ??= (ps: any) =>
              axisTooltip(ps, t.valueFormatter, series);
        }
      return o;
    };

    const margins = (o: any) => {
      let { top, bottom } = o.grid;
      const legend = [o.legend].flat()[0];
      const { clientWidth: w, clientHeight: h } = plot;
      const px = (v: any) =>
        typeof v === "number"
          ? v
          : typeof v === "string" && v.endsWith("%")
            ? (h * parseFloat(v)) / 100
            : parseFloat(v) || 0;
      const num = (v: any, or: number) => (typeof v === "number" ? v : or);
      const labels =
        isObj(legend) &&
        legend.show !== false &&
        (legend.orient ?? "horizontal") === "horizontal"
          ? (legend.data ??
            [o.series]
              .flat()
              .map((s: any) => s?.name)
              .filter((n: any) => n != null))
          : [];
      if (labels.length && w && h) {
        const near = (v: any) =>
          v === "0" ||
          (typeof v === "string" && v.endsWith("%") && parseFloat(v) < 25) ||
          (typeof v === "number" && v < 60);
        const atTop = legend.top === "top" || near(legend.top);
        const atBottom =
          legend.bottom === "bottom" ||
          near(legend.bottom) ||
          (legend.top == null && legend.bottom == null);
        measure ??= document.createElement("canvas").getContext("2d")!;
        measure.font = `12px ${font()}`;
        const gap = num(legend.itemGap, 10),
          icon = num(legend.itemWidth, 25);
        let rows = 1,
          x = 0;
        if (legend.type !== "scroll")
          for (const label of labels) {
            const lw =
              icon +
              5 +
              measure.measureText(String(isObj(label) ? label.name : label))
                .width +
              gap;
            if (x > 0 && x + lw > w * 0.96) (rows++, (x = lw));
            else x += lw;
          }
        const block = rows * 26 + 6;
        if (atTop && rows > 1) {
          const named = [o.yAxis].flat().some((a: any) => isObj(a) && a.name);
          top = Math.max(
            px(top),
            Math.round(num(legend.top, 8) + block + (named ? 28 : 0)),
          );
        }
        if (atBottom)
          bottom = Math.max(
            px(bottom),
            Math.round(num(legend.bottom ?? 15, 8) + block + 22),
          );
      }
      for (const z of [o.dataZoom].flat())
        if (
          z?.type === "slider" &&
          (z.orient ? z.orient === "horizontal" : z.yAxisIndex == null)
        )
          bottom = Math.max(px(bottom), px(z.bottom ?? 15) + 66);
      return { top, bottom };
    };

    const click = (p: any) =>
      onClickRef.current?.({
        seriesName: p.seriesName,
        seriesIndex: p.seriesIndex,
        name: p.name,
        value: p.value,
        dataIndex: p.dataIndex,
      });

    const start = async () => {
      if (chart || starting || !visible || !optionRef.current) return;
      starting = true;
      ec = await load();
      starting = false;
      if (!alive || chart) return;
      chart = ec.init(plot, null, {
        renderer: rendererRef.current,
        locale: localeFor(ec, langOf()),
      });
      chart.on("click", click);
      draw();
    };

    const draw = (quiet?: boolean) => {
      if (!chart) return;
      unfitted = null;
      sized = false;
      const opt = optionRef.current && build(optionRef.current);
      if (!opt)
        return void (chart.clear(), host.setAttribute("data-ready", "false"));
      if (quiet) opt.animationDurationUpdate = 0;
      if (opt.xAxis && isObj(opt.grid)) {
        unfitted = { ...opt };
        const m = margins(opt);
        fitted = JSON.stringify(m);
        opt.grid = { ...opt.grid, ...m };
      }
      try {
        chart.setOption(opt, true);
      } catch (e) {
        dispose();
        return console.error("<EChart>: ECharts cannot draw this option", e);
      }
      host.setAttribute("data-ready", "true");
    };

    const retheme = () => draw(true);

    const resize = () => {
      if (!chart) return;
      chart.resize();
      if (sized) return draw(true);
      if (!unfitted) return;
      const m = margins(unfitted),
        key = JSON.stringify(m);
      if (key !== fitted) ((fitted = key), chart.setOption({ grid: m }));
    };

    const dispose = () => {
      chart?.dispose();
      chart = null;
      host.setAttribute("data-ready", "false");
    };

    const onKey = (evt: KeyboardEvent) => {
      const model = chart?.getModel(),
        n = model?.getSeriesCount(),
        step = KEYS[evt.key];
      if (!n || !step) return;
      const [ds, di] = step;
      if (!ds && !di && at < 0) return;
      evt.preventDefault();
      const s = model.getSeriesByIndex((si = clamp(si + ds, n - 1))),
        data = s.getData(),
        count = data.count();
      if (!count) return;
      at = clamp(at + di, count - 1);
      if (ds || di)
        chart.dispatchAction({
          type: "showTip",
          seriesIndex: si,
          dataIndex: data.getRawIndex(at),
        });
      else click(s.getDataParams(at));
    };
    const onBlur = () => chart?.dispatchAction({ type: "hideTip" });

    plot.addEventListener("keydown", onKey);
    plot.addEventListener("blur", onBlur);

    const io = new IntersectionObserver(
      ([e]) => ((visible = e.isIntersecting), start()),
      { rootMargin: "200px" },
    );
    io.observe(host);
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    const scheme = matchMedia("(prefers-color-scheme: dark)");
    scheme.addEventListener("change", retheme);
    const onThemeChange = () => retheme();
    window.addEventListener("sb-theme-change", onThemeChange);
    const onKind = (name: string) => optionRef.current?.kind === name && draw();
    reg.charts.add(onKind);

    apiRef.current = {
      redraw: () => (chart ? draw() : start()),
      restart: () => chart && (dispose(), start()),
    };

    return () => {
      alive = false;
      plot.removeEventListener("keydown", onKey);
      plot.removeEventListener("blur", onBlur);
      io.disconnect();
      ro.disconnect();
      scheme.removeEventListener("change", retheme);
      window.removeEventListener("sb-theme-change", onThemeChange);
      reg.charts.delete(onKind);
      dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => void apiRef.current?.redraw(), [option]);
  useEffect(() => void apiRef.current?.restart(), [renderer, lang]);

  return (
    <div
      ref={hostRef}
      className={["sb-echarts", className].filter(Boolean).join(" ")}
      style={style}
      data-ready="false"
    >
      <div
        className="plot"
        ref={plotRef}
        tabIndex={hasFallback ? undefined : 0}
        aria-hidden={hasFallback ? "true" : undefined}
      />
      <div className="fallback">{children}</div>
    </div>
  );
}
