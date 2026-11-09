"use client";

import * as React from "react";

export interface HoursSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultLow?: number;
  defaultHigh?: number;
  label?: string;
  formatValue?: (value: number) => string;
  onChange?: (values: number[]) => void;
  className?: string;
}

export default function HoursSlider({
  min = 0,
  max = 24,
  step = 1,
  defaultLow = 9,
  defaultHigh = 18,
  label = "Time window",
  formatValue,
  onChange,
  className,
}: HoursSliderProps) {
  const reactId = React.useId();
  const lowId = `hours-min-${reactId}`;
  const highId = `hours-max-${reactId}`;

  const rootRef = React.useRef<HTMLFieldSetElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const lowRef = React.useRef<HTMLInputElement>(null);
  const highRef = React.useRef<HTMLInputElement>(null);
  const outputRef = React.useRef<HTMLOutputElement>(null);

  const format = React.useCallback(
    (value: number) =>
      formatValue
        ? String(formatValue(value))
        : String(value).padStart(2, "0") + ":00",
    [formatValue],
  );

  const lowPercent = ((defaultLow - min) / (max - min)) * 100;
  const highPercent = ((defaultHigh - min) / (max - min)) * 100;

  React.useLayoutEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const low = lowRef.current;
    const high = highRef.current;
    const output = outputRef.current;
    if (!root || !track || !low || !high || !output) return;

    const inputs = [low, high];
    const lifecycle = new AbortController();
    let dragging: HTMLInputElement | null = null;

    const percent = (input: HTMLInputElement) =>
      ((input.valueAsNumber - Number(input.min)) /
        (Number(input.max) - Number(input.min))) *
      100;

    function render(changed?: HTMLInputElement, emit = false) {
      if (inputs[0].valueAsNumber > inputs[1].valueAsNumber) {
        if (changed === inputs[0]) inputs[0].value = inputs[1].value;
        else inputs[1].value = inputs[0].value;
      }
      root!.style.setProperty("--low", percent(inputs[0]) + "%");
      root!.style.setProperty("--high", percent(inputs[1]) + "%");
      inputs[0].setAttribute("aria-valuemax", inputs[1].value);
      inputs[1].setAttribute("aria-valuemin", inputs[0].value);
      for (const input of inputs)
        input.setAttribute("aria-valuetext", format(input.valueAsNumber));
      output!.textContent =
        format(inputs[0].valueAsNumber) +
        " \u2013 " +
        format(inputs[1].valueAsNumber);
      if (emit) {
        const values = inputs.map((i) => i.valueAsNumber);
        onChange?.(values);
        root!.dispatchEvent(
          new CustomEvent("sliderchange", {
            bubbles: true,
            detail: { values },
          }),
        );
      }
    }

    root.addEventListener(
      "input",
      (event) => {
        if (inputs.includes(event.target as HTMLInputElement))
          render(event.target as HTMLInputElement, true);
      },
      { signal: lifecycle.signal },
    );

    const updatePointer = (event: PointerEvent) => {
      const rect = track.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left - 12) / (rect.width - 24)),
      );
      const dmin = Number(dragging!.min);
      const dmax = Number(dragging!.max);
      const dstep = Number(dragging!.step) || 1;
      dragging!.value = String(
        dmin + Math.round((ratio * (dmax - dmin)) / dstep) * dstep,
      );
      dragging!.dispatchEvent(new Event("input", { bubbles: true }));
    };

    track.addEventListener(
      "pointerdown",
      (event) => {
        if (
          event.button !== 0 ||
          inputs.includes(event.target as HTMLInputElement) ||
          dragging
        )
          return;
        const candidates = inputs.filter((input) => !input.disabled);
        if (!candidates.length) return;
        const rect = track.getBoundingClientRect();
        const p = ((event.clientX - rect.left - 12) / (rect.width - 24)) * 100;
        dragging = candidates.reduce((nearest, input) =>
          Math.abs(percent(input) - p) < Math.abs(percent(nearest) - p)
            ? input
            : nearest,
        );
        dragging.focus({ preventScroll: true });
        track.setPointerCapture(event.pointerId);
        updatePointer(event);
        event.preventDefault();
      },
      { signal: lifecycle.signal },
    );
    track.addEventListener(
      "pointermove",
      (event) => {
        if (dragging && track.hasPointerCapture(event.pointerId))
          updatePointer(event);
      },
      { signal: lifecycle.signal },
    );
    const finish = () => {
      const input = dragging;
      dragging = null;
      input?.dispatchEvent(new Event("change", { bubbles: true }));
    };
    track.addEventListener("pointerup", finish, { signal: lifecycle.signal });
    track.addEventListener("pointercancel", finish, {
      signal: lifecycle.signal,
    });
    track.addEventListener("lostpointercapture", finish, {
      signal: lifecycle.signal,
    });

    function reset() {
      inputs.forEach((input) => {
        input.value = input.defaultValue;
      });
      render();
    }
    inputs[0].form?.addEventListener("reset", () => queueMicrotask(reset), {
      signal: lifecycle.signal,
    });
    window.addEventListener("pageshow", () => render(), {
      signal: lifecycle.signal,
    });

    render();

    return () => lifecycle.abort();
  }, [format, onChange]);

  return (
    <fieldset
      ref={rootRef}
      className={["sl-slider", "sl-slider--range", "slider-hours", className]
        .filter(Boolean)
        .join(" ")}
      data-slider="hours"
      data-format="hours"
      style={
        {
          "--low": `${lowPercent}%`,
          "--high": `${highPercent}%`,
        } as React.CSSProperties
      }
    >
      <legend className="slider-sr">{label}</legend>
      <div className="slider-header">
        <span>{label}</span>
        <output ref={outputRef} htmlFor={`${lowId} ${highId}`} data-output>
          {format(defaultLow)} \u2013 {format(defaultHigh)}
        </output>
      </div>
      <div ref={trackRef} className="slider-track slider-track--dual">
        <span className="slider-rail" aria-hidden="true">
          <span className="slider-fill" />
        </span>
        <input
          ref={lowRef}
          className="slider-input"
          id={lowId}
          name="hours-min"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultLow}
          aria-label="Start time"
          data-low
        />
        <input
          ref={highRef}
          className="slider-input"
          id={highId}
          name="hours-max"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={defaultHigh}
          aria-label="End time"
          data-high
        />
      </div>
      <div className="hour-marks" aria-hidden="true">
        <span>00</span>
        <span>06</span>
        <span>12</span>
        <span>18</span>
        <span>24</span>
      </div>
    </fieldset>
  );
}
