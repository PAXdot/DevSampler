"use client";

import * as React from "react";
import { AnimatePresence, motion, useIsPresent } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useChoreography } from "@/components/ui/line-chart-utils/choreography";
import {
  chartColor,
  chartColors,
  clamp,
  finiteValue,
  tooltipPosition,
  type ChartPoint,
  type ChartSeries,
  type ChartColor,
} from "@/components/ui/line-chart-utils/chart-geometry";

export type ChartContainerProps = React.ComponentProps<"figure">;
export function ChartContainer({ className, ...props }: ChartContainerProps) {
  return <figure data-slot="chart-container" className={cn("min-w-0", className)} {...props} />;
}

type TableDatum = { label: string; value: number | null };
type ChartDataTableProps = { data: TableDatum[]; caption?: string; visuallyHidden?: boolean };
function ChartDataTable({ data, caption = "Chart data", visuallyHidden = true }: ChartDataTableProps) {
  return (
    <table className={cn("w-full border-collapse text-sm", visuallyHidden && "sr-only")}>
      <caption className="text-left text-xs text-muted-foreground">{caption}</caption>
      <thead>
        <tr>
          <th className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Label</th>
          <th className="px-2 py-2 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-t border-border">
            <td className="px-2 py-2">{item.label}</td>
            <td className="px-2 py-2 text-right tabular-nums">{item.value ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type ChartTooltipItem = { label: string; value: number | null; color?: ChartColor };
type ChartTooltipProps = {
  id?: string;
  active?: { label: string; items: ChartTooltipItem[] } | null;
  position?: { x: number; y: number };
  bounds?: { width: number; height: number };
  valueFormatter?: (value: number) => string;
  className?: string;
};
function ChartTooltip({
  id,
  active,
  position = { x: 0, y: 0 },
  bounds = { width: 320, height: 280 },
  valueFormatter = (value) => value.toLocaleString(),
  className,
}: ChartTooltipProps) {
  const { quiet, transition } = useChoreography();
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState({ width: 180, height: 80 });
  React.useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const measure = () => setSize({ width: node.offsetWidth, height: node.offsetHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [active?.label, active?.items.length]);
  const target = tooltipPosition(position.x, position.y, bounds.width, bounds.height, Math.min(size.width, bounds.width - 16), size.height);
  return (
    <AnimatePresence initial={!quiet}>
      {active && (
        <motion.div
          key="tooltip"
          ref={ref}
          id={id}
          role="tooltip"
          className={cn("pointer-events-none absolute left-0 top-0 z-50", className)}
          initial={quiet ? false : { opacity: 0, scale: 0.97, x: target.x, y: target.y }}
          animate={{ opacity: 1, scale: 1, x: target.x, y: target.y }}
          exit={{ opacity: 0, scale: quiet ? 1 : 0.98 }}
          transition={transition}
          style={{ width: Math.min(220, Math.max(1, bounds.width - 16)) }}
        >
          <div className="grid gap-2 rounded-md border border-border bg-popover p-3 text-popover-foreground shadow-md">
            <div className="text-sm font-semibold leading-tight">{active.label}</div>
            {active.items.map((item, index) => (
              <div key={index} className="grid grid-cols-[10px_1fr_auto] items-start gap-2 text-xs">
                <span className="mt-0.5 h-2.5 w-2.5 rounded-sm" style={{ background: chartColor(item.color, index) }} aria-hidden="true" />
                <span className="min-w-0 truncate">{item.label}</span>
                <strong className="tabular-nums">{item.value === null ? "No observation" : valueFormatter(item.value)}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export type ChartFrameProps = {
  data: ChartPoint[];
  series: ChartSeries[];
  caption?: string;
  description?: string;
  showTable?: boolean;
  tableVisible?: boolean;
  valueFormatter?: (value: number) => string;
  className?: string;
  legendMode?: "series" | "points";
  interaction?: "x" | "columns" | "y" | "radar" | "shape";
  emptyMessage?: string;
  appearance?: "analysis" | "brief" | "ledger";
  summary?: { label: string; value: React.ReactNode; detail?: string };
  children: (plot: ChartPlotState) => React.ReactNode;
};
export type ChartPlotState = {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  data: ChartPoint[];
  series: ChartSeries[];
  active: number | null;
  id: string;
  inspect: (index: number) => void;
};

function ChartPlotSvg(props: React.ComponentProps<typeof motion.svg>) {
  const present = useIsPresent();
  return (
    <motion.svg
      {...props}
      tabIndex={present ? props.tabIndex : -1}
      aria-hidden={present ? props["aria-hidden"] : true}
      style={{ ...props.style, pointerEvents: present ? props.style?.pointerEvents : "none" }}
    />
  );
}

/** Shared composition, focus model, legend and semantic fallback for the chart suite. */
export function ChartFrame({
  data,
  series,
  caption = "Chart",
  description,
  showTable = true,
  tableVisible = false,
  valueFormatter = (value) => value.toLocaleString(),
  className,
  legendMode = "series",
  interaction = "x",
  emptyMessage = "No observations to plot.",
  appearance,
  summary,
  children,
}: ChartFrameProps) {
  const { quiet, transition } = useChoreography();
  const id = React.useId().replace(/:/g, "");
  const plotRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(640);
  const [active, setActive] = React.useState<number | null>(null);
  const [keyboardMode, setKeyboardMode] = React.useState(false);
  const [pointer, setPointer] = React.useState({ x: 80, y: 60 });
  const [hidden, setHidden] = React.useState<string[]>([]);
  const [tableState, setTableState] = React.useState({ prop: tableVisible, visible: tableVisible });
  if (tableState.prop !== tableVisible) setTableState({ prop: tableVisible, visible: tableVisible });
  const table = tableState.prop === tableVisible ? tableState.visible : tableVisible;
  const tableShown = showTable && (appearance === "ledger" || table);
  const measure = summary ?? { label: "Source observations", value: data.length, detail: "Includes rows with missing values." };
  const resolved = series.map((item, index) => ({ ...item, color: item.color ?? chartColors[index % chartColors.length] }));
  const legend =
    legendMode === "points"
      ? data.map((point, index) => ({ key: `point-${index}`, label: point.label, color: (point.color as ChartColor | undefined) ?? chartColors[index % chartColors.length] }))
      : resolved;
  const visibleSeries = legendMode === "series" ? resolved.filter((item) => !hidden.includes(item.key)) : resolved;
  const visibleData: ChartPoint[] =
    legendMode === "points"
      ? data.map((point, index) => ({ ...point, color: legend[index].color })).filter((_, index) => !hidden.includes(`point-${index}`))
      : data;
  const height = 300;
  const left = interaction === "y" ? Math.min(100, width * 0.27) : 42,
    right = width - 18,
    top = 24,
    bottom = height - 42;
  const current = active !== null ? visibleData[active] : undefined;
  const hasValues = visibleData.length > 0 && visibleSeries.some((item) => visibleData.some((point) => finiteValue(point[item.key]) !== null));
  React.useLayoutEffect(() => {
    const node = plotRef.current;
    if (!node) return;
    const measure = () => {
      if (node.clientWidth > 0) setWidth(Math.max(64, node.clientWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const inspect = (index: number) => setActive(Math.round(clamp(index, 0, visibleData.length - 1)));
  const tooltip = current
    ? {
        label: current.label,
        items: visibleSeries.map((item) => ({
          label: item.label,
          value: finiteValue(current[item.key]),
          color: legendMode === "points" ? (current.color as ChartColor) : item.color,
        })),
      }
    : null;
  const tableData = data.flatMap((point) =>
    resolved.map((item) => ({
      label: resolved.length === 1 ? point.label : `${point.label} · ${item.label}`,
      value: finiteValue(point[item.key]),
    })),
  );
  const keyboard = (event: React.KeyboardEvent<SVGSVGElement>) => {
    if (event.key === "Escape") {
      setActive(null);
      return;
    }
    if (!["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? visibleData.length - 1
          : (active ?? 0) + (["ArrowLeft", "ArrowUp"].includes(event.key) ? -1 : 1);
    const index = Math.round(clamp(next, 0, visibleData.length - 1));
    inspect(index);
    setPointer({ x: left + ((right - left) * (index + 0.5)) / Math.max(1, visibleData.length), y: height * 0.36 });
  };
  return (
    <ChartContainer className={cn("v-chart-frame", className)} data-appearance={appearance} data-table-visible={tableShown} aria-labelledby={`${id}-title`} aria-describedby={description ? `${id}-description` : undefined}>
      <AnimatePresence initial={!quiet}>
        <motion.div key="chart" initial={quiet ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: quiet ? 0 : -4 }} transition={transition}>
          <Card>
            <CardHeader>
              <CardTitle id={`${id}-title`}>{caption}</CardTitle>
              {description && <CardDescription id={`${id}-description`}>{description}</CardDescription>}
            </CardHeader>
            {appearance === "brief" && (
              <div className="grid gap-3 border-s-2 border-primary px-5 py-4">
                <span className="text-sm font-medium">{measure.label}</span>
                <strong className="text-3xl font-semibold tabular-nums">{measure.value}</strong>
                {measure.detail && <p className="text-sm text-muted-foreground">{measure.detail}</p>}
              </div>
            )}
            <CardContent className="grid gap-4">
              <div className="flex min-w-0 flex-wrap items-center gap-2" role="group" aria-label={`${caption} visible data`}>
                <AnimatePresence initial={!quiet}>
                  {legend.map((item) => (
                    <motion.div key={item.key} initial={quiet ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-pressed={!hidden.includes(item.key)}
                        className={cn("gap-2", hidden.includes(item.key) && "opacity-50")}
                        onClick={() => {
                          setHidden((items) => (items.includes(item.key) ? items.filter((key) => key !== item.key) : [...items, item.key]));
                          setActive(null);
                        }}
                      >
                        <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: chartColor(item.color) }} aria-hidden="true" />
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div ref={plotRef} className="relative w-full min-w-0 isolate" style={{ height }} onPointerLeave={() => setActive(null)}>
                <AnimatePresence initial={false} mode="wait">
                  {hasValues ? (
                    <ChartPlotSvg
                      key="plot"
                      viewBox={`0 0 ${width} ${height}`}
                      role="group"
                      tabIndex={0}
                      aria-label={`${caption}. Use arrow keys to inspect observations; Escape dismisses the tooltip.`}
                      aria-describedby={current ? `${id}-tooltip` : undefined}
                      className="block h-full w-full overflow-visible rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      initial={quiet ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={transition}
                      onFocus={() => {
                        setKeyboardMode(true);
                        if (active === null) {
                          inspect(0);
                          setPointer({ x: left, y: top });
                        }
                      }}
                      onBlur={() => {
                        setKeyboardMode(false);
                        setActive(null);
                      }}
                      onKeyDown={keyboard}
                      onPointerMove={(event) => {
                        setKeyboardMode(false);
                        const box = event.currentTarget.getBoundingClientRect();
                        const x = ((event.clientX - box.left) * width) / box.width,
                          y = ((event.clientY - box.top) * height) / box.height;
                        setPointer({ x, y });
                        if (interaction === "x") inspect(Math.round(((x - left) / (right - left)) * Math.max(0, visibleData.length - 1)));
                        if (interaction === "columns") inspect(Math.floor(((x - left) / (right - left)) * visibleData.length));
                        if (interaction === "y") inspect(Math.floor(((y - top) / (bottom - top)) * visibleData.length));
                        if (interaction === "radar") {
                          const angle = (Math.atan2(y - height / 2, x - width / 2) + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);
                          inspect(Math.round((angle / (Math.PI * 2)) * visibleData.length) % visibleData.length);
                        }
                      }}
                    >
                      {children({ width, height, left, right, top, bottom, data: visibleData, series: visibleSeries, active, id, inspect })}
                    </ChartPlotSvg>
                  ) : (
                    <motion.div key="empty" className="flex h-full flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
                      {hidden.length ? "Choose a legend item to show its data." : emptyMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                  {keyboardMode && current
                    ? `${current.label}. ${visibleSeries.map((item) => `${item.label}: ${finiteValue(current[item.key]) === null ? "No observation" : valueFormatter(finiteValue(current[item.key])!)}`).join(". ")}`
                    : ""}
                </span>
                <ChartTooltip id={`${id}-tooltip`} active={tooltip} position={pointer} bounds={{ width, height }} valueFormatter={valueFormatter} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>Hover to explore · Arrow keys to inspect</span>
              {showTable && appearance !== "ledger" && (
                <Button variant="ghost" size="sm" aria-expanded={tableShown} aria-controls={`${id}-data`} onClick={() => setTableState((value) => ({ ...value, visible: !value.visible }))}>
                  {tableShown ? "Hide data" : "Show data"}
                </Button>
              )}
            </CardFooter>
            {showTable && (
              <div id={`${id}-data`} className={tableShown ? "px-6 pb-6" : undefined}>
                <ChartDataTable data={tableData} caption={caption} visuallyHidden={!tableShown} />
              </div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </ChartContainer>
  );
}
