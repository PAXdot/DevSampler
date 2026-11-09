"use client";

import * as React from "react";

export interface MeterSliderProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  label?: string;
  name?: string;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  disabled?: boolean;
  format?: (value: number) => string;
  onValueChange?: (value: number) => void;
  lowLabel?: string;
  highLabel?: string;
}

// Default formatter mirrors buttons.js formatter() for data-format="percent" (the default case).
function defaultFormat(value: number) {
  return `${value}%`;
}

// Faithful React port of SLtowl/sl-ui-library's "meter" slider
// (public/packages/meter-slider/index.html + buttons.css + the relevant
// single-input branch of buttons.js's mountSlider render logic).
export default function MeterSlider({
  label = "Level",
  name = "meter",
  id = "next-meter",
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 65,
  value,
  disabled,
  format = defaultFormat,
  onValueChange,
  lowLabel = "0",
  highLabel = "100",
  className,
  ...rest
}: MeterSliderProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [internalValue, setInternalValue] = React.useState(
    value ?? defaultValue,
  );
  const current = value !== undefined ? value : internalValue;

  const percent = React.useCallback(
    (v: number) => ((v - min) / (max - min)) * 100,
    [min, max],
  );

  // Mirrors mountSlider()'s render() for the single-input (non-dual, non-centered) case:
  // sets --low/--high/--position (slider-fill geometry), --fraction/--zoom/--preview-value
  // (used by other variants of the shared engine, kept for parity) and the
  // data-zero/data-quiet state flags.
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const p = percent(current);
    root.style.setProperty("--low", "0%");
    root.style.setProperty("--high", `${p}%`);
    root.style.setProperty("--position", `${p}%`);
    root.style.setProperty("--fraction", String(p / 100));
    root.style.setProperty("--zoom", String(current / 100));
    root.style.setProperty("--preview-value", `${current}px`);
    root.dataset.zero = String(p === 0);
    root.dataset.quiet = String(p <= 50);
  }, [current, percent]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = event.target.valueAsNumber;
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  }

  const text = format(current);

  return (
    <div
      ref={rootRef}
      className={["sl-slider", "sl-slider--vertical", "slider-meter", className]
        .filter(Boolean)
        .join(" ")}
      data-slider="meter"
      data-format="percent"
      {...rest}
    >
      <div className="slider-header">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{text}</output>
      </div>
      <div className="slider-track">
        <span className="slider-rail" aria-hidden="true">
          <span className="slider-fill" />
        </span>
        <input
          className="slider-input"
          id={id}
          name={name}
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          disabled={disabled}
          aria-orientation="vertical"
          aria-valuetext={text}
          onChange={handleChange}
        />
      </div>
      <div className="meter-endpoints" aria-hidden="true">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}
