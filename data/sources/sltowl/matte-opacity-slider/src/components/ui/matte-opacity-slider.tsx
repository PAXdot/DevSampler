"use client";

import * as React from "react";

export interface OpacitySliderProps {
  /** Controlled value (0-100 by default). */
  value?: number;
  /** Initial value when uncontrolled. */
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  /** Label shown above the slider. */
  label?: string;
  /** Caption shown at the low end of the track. */
  lowLabel?: string;
  /** Caption shown at the high end of the track. */
  highLabel?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
  onChange?: (value: number) => void;
}

export default function OpacitySlider({
  value,
  defaultValue = 70,
  min = 0,
  max = 100,
  step = 1,
  label = "Opacity",
  lowLabel = "Transparent",
  highLabel = "Solid",
  disabled,
  id,
  name = "opacity",
  className,
  onChange,
}: OpacitySliderProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const current = value !== undefined ? value : internalValue;

  const percent = ((current - min) / (max - min)) * 100;
  const fraction = (current - min) / (max - min);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(event.target.value);
    if (value === undefined) setInternalValue(next);
    onChange?.(next);
  };

  const style = {
    "--low": "0%",
    "--high": `${percent}%`,
    "--position": `${percent}%`,
    "--fraction": String(fraction),
    "--zoom": String(current / 100),
    "--preview-value": `${current}px`,
    "--sun-angle": `${percent * 0.9}deg`,
    "--sun-opacity": String(0.25 + percent * 0.0075),
  } as React.CSSProperties;

  return (
    <div
      className={["sl-slider", "slider-opacity", className]
        .filter(Boolean)
        .join(" ")}
      data-slider="opacity"
      data-format="percent"
      data-zero={String(percent === 0)}
      data-quiet={String(percent <= 50)}
      style={style}
    >
      <div className="slider-header">
        <label htmlFor={inputId}>{label}</label>
        <output htmlFor={inputId}>{current}%</output>
      </div>
      <div className="opacity-preview" aria-hidden="true">
        <span />
      </div>
      <div className="slider-track">
        <span className="slider-rail" aria-hidden="true">
          <span className="slider-fill" />
        </span>
        <input
          className="slider-input"
          id={inputId}
          name={name}
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          disabled={disabled}
          aria-valuetext={`${current}%`}
          onChange={handleChange}
        />
      </div>
      <div className="slider-ends">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
    </div>
  );
}
