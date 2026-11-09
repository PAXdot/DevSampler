"use client";
// beui.dev/charts/heat-calendar

import { cn } from "@/lib/utils";
import {
  HeatCalendarContext,
  useHeatCalendarModel,
} from "./heat-calendar-utils/context";
import { HeatCalendarGrid } from "./heat-calendar-utils/grid";
import { HeatCalendarLegend } from "./heat-calendar-utils/legend";
import { HeatCalendarTooltip } from "./heat-calendar-utils/tooltip";
import type { HeatCalendarProps } from "./heat-calendar-utils/types";

/** Compose Grid, Tooltip and Legend, or omit children for the complete chart. */
export function HeatCalendar({
  children,
  className,
  ...props
}: HeatCalendarProps) {
  const model = useHeatCalendarModel(props);
  return (
    <HeatCalendarContext.Provider value={model}>
      <div className={cn("w-fit max-w-full", className)}>
        {children === undefined ? (
          <>
            <HeatCalendarGrid>
              <HeatCalendarTooltip />
            </HeatCalendarGrid>
            <HeatCalendarLegend />
          </>
        ) : (
          children
        )}
      </div>
    </HeatCalendarContext.Provider>
  );
}

export { useHeatCalendar } from "./heat-calendar-utils/context";
export { HeatCalendarGrid } from "./heat-calendar-utils/grid";
export { HeatCalendarLegend } from "./heat-calendar-utils/legend";
export { HeatCalendarTooltip } from "./heat-calendar-utils/tooltip";
export type {
  HeatCalendarCell,
  HeatCalendarProps,
  HeatCalendarSelection,
} from "./heat-calendar-utils/types";

export default HeatCalendar;
