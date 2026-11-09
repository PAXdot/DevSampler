"use client";

import * as React from "react";

type FormatType = "time" | "hours" | "percent" | "distance" | "pixels";

export interface MatteScrubSliderProps {
  /** Text shown in the slider header label. */
  label?: string;
  /** Caption shown after the duration in the footer, and used in the play button's aria-label. */
  caption?: string;
  /** Accessible label / visible text for the play control at rest. */
  playLabel?: string;
  /** Accessible label / visible text for the play control while playing. */
  pauseLabel?: string;
  min?: number;
  max?: number;
  step?: number;
  /** Uncontrolled initial value. */
  defaultValue?: number;
  /** Controlled value. */
  value?: number;
  /** How the output and the duration label are formatted. */
  format?: FormatType;
  /** Override the formatter entirely. */
  formatValue?: (value: number) => string;
  onChange?: (value: number) => void;
  className?: string;
}

// Same 40 waveform bar heights as the original markup's .scrub-art spans.
const WAVEFORM: number[] = [
  16, 24, 34, 22, 42, 30, 18, 36, 46, 28, 20, 38, 26, 44, 32, 18, 24, 40, 28,
  20, 16, 24, 34, 22, 42, 30, 18, 36, 46, 28, 20, 38, 26, 44, 32, 18, 24, 40,
  28, 20,
];

function defaultFormat(format: FormatType, value: number) {
  switch (format) {
    case "time":
      return (
        Math.floor(value / 60) +
        ":" +
        String(Math.floor(value) % 60).padStart(2, "0")
      );
    case "hours":
      return String(value).padStart(2, "0") + ":00";
    case "distance":
      return value + " km";
    case "pixels":
      return value + " px";
    default:
      return value + "%";
  }
}

let idCounter = 0;

export default function MatteScrubSlider({
  label = "Playback",
  caption = "Preview",
  playLabel = "Play",
  pauseLabel = "Pause",
  min = 0,
  max = 20,
  step = 0.001,
  defaultValue = 0,
  value,
  format = "time",
  formatValue,
  onChange,
  className,
}: MatteScrubSliderProps) {
  const generatedId = React.useMemo(() => `matte-scrub-${idCounter++}`, []);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const current = isControlled ? (value as number) : internalValue;

  const [playing, setPlaying] = React.useState(false);
  const frameRef = React.useRef<number | null>(null);
  const startedAtRef = React.useRef(0);
  const startValueRef = React.useRef(0);

  const fmt = React.useCallback(
    (v: number) =>
      formatValue ? String(formatValue(v)) : defaultFormat(format, v),
    [formatValue, format],
  );

  const commit = React.useCallback(
    (next: number) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const pause = React.useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    setPlaying(false);
  }, []);

  // Mirrors the original tick(): advance by elapsed real time, one unit per second,
  // rendering once per display frame, with no loop left running after pause/finish.
  const play = React.useCallback(() => {
    if (frameRef.current !== null) {
      pause();
      return;
    }
    const start = current >= max ? min : current;
    if (current >= max) commit(min);
    startedAtRef.current = performance.now();
    startValueRef.current = start;
    setPlaying(true);
    const tick = (now: number) => {
      const next = Math.min(
        max,
        startValueRef.current + (now - startedAtRef.current) / 1000,
      );
      commit(next);
      if (next >= max) {
        pause();
      } else {
        frameRef.current = requestAnimationFrame(tick);
      }
    };
    frameRef.current = requestAnimationFrame(tick);
  }, [commit, current, max, min, pause]);

  React.useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  React.useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [pause]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.valueAsNumber;
    if (playing) {
      startedAtRef.current = performance.now();
      startValueRef.current = next;
    }
    commit(next);
  };

  // Fine playback precision (step=0.001) must not make keyboard seeking impractical,
  // so arrow keys move by a whole unit instead of the native step, same as the original.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const direction = (
      { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 } as Record<
        string,
        number
      >
    )[event.key];
    if (direction === undefined) return;
    event.preventDefault();
    const next = Math.max(min, Math.min(max, current + direction));
    commit(next);
    if (playing) {
      startedAtRef.current = performance.now();
      startValueRef.current = next;
    }
  };

  const fraction = (current - min) / (max - min);
  const percent = fraction * 100;
  const playedBars = Math.round(fraction * WAVEFORM.length);
  const durationLabel = fmt(max);

  return (
    <div
      className={["sl-slider", "slider-scrub", className]
        .filter(Boolean)
        .join(" ")}
      data-slider="scrub"
      data-format={format}
      data-playing={playing ? "true" : "false"}
      style={
        {
          "--low": "0%",
          "--high": percent + "%",
          "--position": percent + "%",
          "--fraction": String(fraction),
          "--zoom": "0",
          "--preview-value": "0px",
        } as React.CSSProperties
      }
    >
      <div className="slider-header">
        <label htmlFor={generatedId}>{label}</label>
        <output htmlFor={generatedId} data-output>
          {fmt(current)}
        </output>
      </div>
      <div className="slider-track">
        <div className="scrub-art" aria-hidden="true">
          {WAVEFORM.map((bar, index) => (
            <span
              key={index}
              style={{ "--bar": bar + "px" } as React.CSSProperties}
              className={index < playedBars ? "is-played" : undefined}
            />
          ))}
        </div>
        <span className="slider-rail" aria-hidden="true">
          <span className="slider-fill" />
        </span>
        <input
          ref={inputRef}
          className="slider-input"
          id={generatedId}
          name="scrub"
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          aria-valuetext={fmt(current)}
        />
        <span className="scrub-playhead" aria-hidden="true" />
      </div>
      <div className="scrub-footer">
        <button
          type="button"
          className="scrub-play"
          data-play
          aria-label={
            playing
              ? `Pause ${caption.toLowerCase()}`
              : `Play ${caption.toLowerCase()}`
          }
          onClick={play}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path className="play-symbol" d="m9 6 9 6-9 6Z" />
            <path className="pause-symbol" d="M8 6v12M16 6v12" />
          </svg>
          <span data-play-label>{playing ? pauseLabel : playLabel}</span>
        </button>
        <span>
          {durationLabel} <span className="scrub-caption">· {caption}</span>
        </span>
      </div>
    </div>
  );
}
