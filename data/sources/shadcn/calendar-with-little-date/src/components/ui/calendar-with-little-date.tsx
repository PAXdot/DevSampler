"use client";

import * as React from "react";
import { formatDateRange } from "little-date";
import { ChevronDownIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DEFAULT_STAY: DateRange = {
  from: new Date(2025, 5, 4),
  to: new Date(2025, 5, 10),
};

export function Calendar30() {
  const [range, setRange] = React.useState<DateRange | undefined>(DEFAULT_STAY);

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="dates" className="px-1">
        Select your stay
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="dates"
            className="w-56 justify-between font-normal"
          >
            {range?.from && range?.to
              ? formatDateRange(range.from, range.to, {
                  includeTime: false,
                })
              : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align="start"
          side="bottom"
          sideOffset={8}
        >
          <Calendar
            mode="range"
            defaultMonth={DEFAULT_STAY.from}
            selected={range}
            captionLayout="dropdown"
            classNames={{
              months: "relative",
              nav: "absolute inset-x-0 top-0 z-20 flex w-full items-center justify-between",
              button_previous: "relative z-20 h-8 w-8",
              button_next: "relative z-20 h-8 w-8",
              month_caption:
                "relative z-10 flex h-8 w-full items-center justify-center px-8",
              dropdowns:
                "relative z-10 flex h-8 w-full items-center justify-center gap-1.5 text-sm font-medium",
              dropdown_root: "relative",
            }}
            onSelect={setRange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Calendar30;
