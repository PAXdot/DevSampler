"use client";
// beui.dev/charts/bump-chart

import { cn } from "@/lib/utils";
import {
  BumpChartContext,
  useBumpChartModel,
  type BumpChartProps,
} from "@/components/ui/bump-chart-utils/context";
import { BumpChartLegend } from "@/components/ui/bump-chart-utils/legend";
import { BumpChartPlot } from "@/components/ui/bump-chart-utils/plot";

/** Compose the plot and legend, or supply children for your own arrangement. */
export function BumpChart({ children, className, ...props }: BumpChartProps) {
  const model = useBumpChartModel(props);
  return (
    <BumpChartContext.Provider value={model}>
      <section
        aria-label={model.label}
        className={cn("w-full space-y-5", className)}
      >
        {children === undefined ? (
          <>
            <BumpChartPlot />
            <BumpChartLegend />
          </>
        ) : (
          children
        )}
      </section>
    </BumpChartContext.Provider>
  );
}

export { BumpChartLegend } from "@/components/ui/bump-chart-utils/legend";
export { BumpChartPlot } from "@/components/ui/bump-chart-utils/plot";
export { useBumpChart } from "@/components/ui/bump-chart-utils/context";
export type { BumpChartProps } from "@/components/ui/bump-chart-utils/context";
export type BumpChartSeries = import("./bump-chart/model").BumpSeries;

export default BumpChart;
