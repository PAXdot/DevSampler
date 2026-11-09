"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  usePlotArea,
} from "recharts";
import { cn } from "@/lib/utils";
import {
  BAR_GROW,
  BAR_STAGGER,
  AAPL_CANDLES,
  type CandlePoint,
  ChartFrame,
  ChartGlowFilter,
  chartGrid,
  ChartLoadingBars,
  ChartPlotSurface,
  chartXAxis,
  chartYAxis,
  EASE_OUT,
  HOVER_OPACITY,
  HOVER_TRANSITION,
  HoverIndexProvider,
  RevealMask,
  SOL_CANDLES,
  formatPct,
  formatUsd,
  readActiveTooltipIndex,
  useChartId,
  useChartMotion,
  useIntroStartedAt,
} from "@/components/ui/candlestick-chart-utils/chart-kit";

export interface SpectrumCandlestickChartProps {
  className?: string;
  data?: CandlePoint[];
  showVolume?: boolean;
  hollowUp?: boolean;
  glowing?: boolean;
  isLoading?: boolean;
}

type CandleLayerProps = {
  data: CandlePoint[];
  hollowUp?: boolean;
  glowing?: boolean;
  glowId?: string;
  introStartedAt: number;
  reduce: boolean;
  maskId?: string;
  activeIndex: number | null;
};

// NOTE: recharts v3 deprecated the old `<Customized>` wrapper (it used to hand
// you the internal xAxisMap/yAxisMap of the chart, which no longer exist).
// Custom in-chart layers are now rendered as plain children of the chart and
// read layout via hooks — `usePlotArea()` gives the pixel rect of the
// drawable area, and we derive our own linear price scale from it (the price
// domain here always matches ['dataMin','dataMax'] of the high/low series,
// same as the YAxis below).
function CandleLayer({
  data,
  hollowUp = false,
  glowing = false,
  glowId,
  introStartedAt,
  reduce,
  maskId,
  activeIndex,
}: CandleLayerProps) {
  const plotArea = usePlotArea();
  if (!plotArea || data.length === 0) return null;

  const { x: plotX, y: plotY, width: plotW, height: plotH } = plotArea;
  const highs = data.map((row) => row.high);
  const lows = data.map((row) => row.low);
  const domainMin = Math.min(...lows);
  const domainMax = Math.max(...highs);
  const range = domainMax - domainMin || 1;
  const yScale = (value: number) =>
    plotY + plotH * (1 - (value - domainMin) / range);
  const band = plotW / data.length;
  const bodyW = Math.max(3, band * 0.58);

  return (
    <g
      mask={maskId ? `url(#${maskId})` : undefined}
      filter={glowing && glowId ? `url(#${glowId})` : undefined}
    >
      {data.map((row, index) => {
        const cx = plotX + band * index + band / 2;
        const yHigh = yScale(row.high);
        const yLow = yScale(row.low);
        const yOpen = yScale(row.open);
        const yClose = yScale(row.close);

        const up = row.close >= row.open;
        const color = up
          ? "var(--spectrum-chart-up)"
          : "var(--spectrum-chart-down)";
        const bodyTop = Math.min(yOpen, yClose);
        const bodyH = Math.max(1, Math.abs(yClose - yOpen));
        const dimmed = activeIndex != null && activeIndex !== index;
        // eslint-disable-next-line react-hooks/purity -- one-shot intro is anchored to mount time
        const elapsed = Date.now() - introStartedAt;
        const startMs = index * BAR_STAGGER * 1000;
        const durationMs = BAR_GROW * 1000;
        const done = reduce || elapsed >= startMs + durationMs;
        const from =
          elapsed <= startMs
            ? 0
            : Math.min(1, (elapsed - startMs) / durationMs);

        const candle = (
          <g
            style={{
              opacity: dimmed ? HOVER_OPACITY : 1,
              transition: HOVER_TRANSITION,
            }}
          >
            <line
              x1={cx}
              x2={cx}
              y1={yHigh}
              y2={yLow}
              stroke={color}
              strokeWidth={1.25}
            />
            <rect
              x={cx - bodyW / 2}
              y={bodyTop}
              width={bodyW}
              height={bodyH}
              rx={1}
              fill={hollowUp && up ? "var(--spectrum-chart-surface)" : color}
              stroke={color}
              strokeWidth={hollowUp && up ? 1.25 : 0}
            />
          </g>
        );

        if (done) {
          return <g key={row.date}>{candle}</g>;
        }

        return (
          <motion.g
            key={row.date}
            initial={{ transform: `scaleY(${from})` }}
            animate={{ transform: "scaleY(1)" }}
            transition={{
              duration:
                (startMs + durationMs - Math.max(elapsed, startMs)) / 1000,
              ease: EASE_OUT,
              delay: Math.max(0, startMs - elapsed) / 1000,
            }}
            style={{ transformOrigin: `${cx}px ${yLow}px` }}
          >
            {candle}
          </motion.g>
        );
      })}
    </g>
  );
}

function CandleTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { payload?: CandlePoint }[];
  label?: string;
}) {
  if (!active || !payload?.length) {
    return <span className="invisible block h-10 w-28" aria-hidden />;
  }
  const row = payload[0]?.payload;
  if (!row) return null;
  const delta = ((row.close - row.open) / row.open) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, transform: "scale(0.97)" }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      transition={{ duration: 0.16, ease: EASE_OUT }}
      className="min-w-[8.5rem] rounded-lg border border-neutral-200/70 bg-white/75 px-3 py-2 text-xs shadow-xl backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/70"
    >
      <p className="mb-1.5 font-medium text-neutral-900 dark:text-neutral-100">
        {String(label)}
      </p>
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-mono tabular-nums text-neutral-900 dark:text-neutral-100">
        <span className="text-neutral-500">O</span>
        <span className="text-right">{formatUsd(row.open)}</span>
        <span className="text-neutral-500">H</span>
        <span className="text-right">{formatUsd(row.high)}</span>
        <span className="text-neutral-500">L</span>
        <span className="text-right">{formatUsd(row.low)}</span>
        <span className="text-neutral-500">C</span>
        <span className="text-right">
          {formatUsd(row.close)}{" "}
          <span className="text-neutral-500">{formatPct(delta)}</span>
        </span>
        <span className="text-neutral-500">Vol</span>
        <span className="text-right">{formatUsd(row.volume, true)}</span>
      </div>
    </motion.div>
  );
}

export function CandlestickChart({
  className,
  data = SOL_CANDLES,
  showVolume = false,
  hollowUp = false,
  glowing = false,
  isLoading = false,
}: SpectrumCandlestickChartProps) {
  const id = useChartId("candle");
  const { reduce } = useChartMotion();
  const introStartedAt = useIntroStartedAt();
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const maskId = `${id}-reveal`;
  const maxVolume = Math.max(...data.map((row) => row.volume), 1);

  const glowId = `${id}-glow`;

  return (
    <ChartFrame className={cn("flex flex-col", className)}>
      {isLoading ? (
        <ChartLoadingBars />
      ) : (
        <ChartPlotSurface>
          <HoverIndexProvider value={activeIndex}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                onMouseMove={(state) => {
                  const next = readActiveTooltipIndex(state);
                  setActiveIndex((current) =>
                    current === next ? current : next,
                  );
                }}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <defs>
                  <RevealMask
                    id={maskId}
                    introStartedAt={introStartedAt}
                    reduce={reduce}
                  />
                  {glowing ? <ChartGlowFilter id={glowId} /> : null}
                </defs>
                <CartesianGrid {...chartGrid} />
                <XAxis {...chartXAxis} dataKey="date" />
                <YAxis
                  {...chartYAxis}
                  domain={["dataMin", "dataMax"]}
                  tickFormatter={(value: number) => formatUsd(value, true)}
                  width={48}
                />
                {showVolume ? (
                  <YAxis
                    {...chartYAxis}
                    yAxisId="volume"
                    orientation="right"
                    hide
                    domain={[0, maxVolume * 4]}
                  />
                ) : null}
                <Tooltip
                  cursor={{
                    stroke: "currentColor",
                    strokeOpacity: 0.2,
                    strokeDasharray: "4 4",
                  }}
                  content={<CandleTooltip />}
                />
                <Line
                  dataKey="high"
                  stroke="none"
                  dot={false}
                  activeDot={false}
                  legendType="none"
                  tooltipType="none"
                  isAnimationActive={false}
                />
                <Line
                  dataKey="low"
                  stroke="none"
                  dot={false}
                  activeDot={false}
                  legendType="none"
                  tooltipType="none"
                  isAnimationActive={false}
                />
                {showVolume ? (
                  <Bar
                    yAxisId="volume"
                    dataKey="volume"
                    name="Volume"
                    fill="var(--spectrum-chart-3)"
                    fillOpacity={0.28}
                    radius={[2, 2, 0, 0]}
                    isAnimationActive={!reduce}
                    animationDuration={220}
                    animationEasing="ease-out"
                    maxBarSize={18}
                  />
                ) : null}
                <CandleLayer
                  data={data}
                  hollowUp={hollowUp}
                  glowing={glowing}
                  glowId={glowId}
                  introStartedAt={introStartedAt}
                  reduce={reduce}
                  maskId={reduce ? undefined : maskId}
                  activeIndex={activeIndex}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </HoverIndexProvider>
        </ChartPlotSurface>
      )}
    </ChartFrame>
  );
}

export function DefaultCandlestickChart(props: SpectrumCandlestickChartProps) {
  return <CandlestickChart {...props} />;
}

export function StockCandlestickChart(props: SpectrumCandlestickChartProps) {
  return <CandlestickChart data={AAPL_CANDLES} {...props} />;
}

export function VolumeCandlestickChart(props: SpectrumCandlestickChartProps) {
  return <CandlestickChart showVolume {...props} />;
}

export function HollowCandlestickChart(props: SpectrumCandlestickChartProps) {
  return <CandlestickChart hollowUp {...props} />;
}

export function GlowingCandlestickChart(props: SpectrumCandlestickChartProps) {
  return <CandlestickChart glowing {...props} />;
}

export default CandlestickChart;
