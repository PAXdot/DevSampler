"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex h-10 w-full touch-none items-center select-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden h-10 rounded-xl border border-border bg-muted shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)] ring-1 ring-inset ring-background data-[orientation=horizontal]:w-full"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute my-0.5 ml-0.5 mr-0.5 h-[calc(100%-4px)] overflow-hidden rounded-lg border border-border bg-foreground shadow-xs data-[orientation=horizontal]:h-[calc(100%-4px)]"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="block h-7 w-[3px] -translate-x-2 cursor-ew-resize rounded-xl border-0 bg-muted shadow-none ring-0 outline-hidden hover:ring-0 focus-visible:ring-0 focus-visible:outline-hidden"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
