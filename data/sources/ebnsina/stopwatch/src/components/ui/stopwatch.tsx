"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Widget from "./stopwatch-utils/widget";
import Button from "./stopwatch-utils/button";

export interface StopwatchProps {
  /** Names it for screen readers when there's more than one ("Experiment timer"). */
  label?: string;
  locale?: string;
  className?: string;
}

// A shared live region (same approach React Aria uses: several regions competing confuses screen readers).
let region: HTMLElement | undefined;
function announce(text: string, politeness: "polite" | "assertive" = "polite") {
  if (typeof document === "undefined") return;
  if (!region || !region.isConnected) {
    region = document.createElement("div");
    region.style.cssText =
      "position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap";
    document.body.append(region);
  }
  region.setAttribute("aria-live", politeness);
  // Cleared first, so saying the same thing twice is still announced.
  region.textContent = "";
  setTimeout(() => {
    if (region) region.textContent = text;
  }, 50);
}

function format(ms: number, two: Intl.NumberFormat) {
  const cs = Math.floor(ms / 10) % 100;
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 60000) % 60;
  const h = Math.floor(ms / 3600000);
  return `${h ? `${h}:` : ""}${two.format(m)}:${two.format(s)}.${two.format(cs)}`;
}

function Stopwatch({
  label = "Stopwatch",
  locale = "en",
  className,
}: StopwatchProps) {
  const [running, setRunning] = useState(false);
  // Timestamps, not a count of frames: exact even when the tab sleeps in the background.
  const [elapsed, setElapsed] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const startedAtRef = useRef(0);
  const bankedRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  const two = new Intl.NumberFormat(locale, { minimumIntegerDigits: 2 });

  const loop = useCallback(() => {
    setElapsed(bankedRef.current + performance.now() - startedAtRef.current);
    frameRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  function toggle() {
    if (running) {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      const total =
        bankedRef.current + performance.now() - startedAtRef.current;
      bankedRef.current = total;
      setElapsed(total);
      announce(`Stopped at ${format(total, two)}`);
    } else {
      startedAtRef.current = performance.now();
      frameRef.current = requestAnimationFrame(loop);
    }
    setRunning(!running);
  }

  function lapOrReset() {
    if (running) {
      const total =
        bankedRef.current + performance.now() - startedAtRef.current;
      const split = total - laps.reduce((a, b) => a + b, 0);
      setLaps((prev) => [...prev, split]);
      announce(`Lap ${laps.length + 1}, ${format(split, two)}`);
    } else {
      bankedRef.current = 0;
      setElapsed(0);
      setLaps([]);
    }
  }

  // The current lap runs live at the top; the fastest and slowest finished ones are marked.
  const current = elapsed - laps.reduce((a, b) => a + b, 0);
  const fastest = laps.length > 2 ? Math.min(...laps) : -1;
  const slowest = laps.length > 2 ? Math.max(...laps) : -1;

  return (
    <Widget label={label} max="44rem" className={className}>
      <div
        className={["stopwatch", laps.length > 0 && "with-laps"]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Updates a hundred times a second: never announced as it runs, only when stopped or lapped. */}
        <p className="readout" role="timer" aria-live="off">
          {format(elapsed, two)}
        </p>
        <div className="actions">
          <Button
            variant="secondary"
            size="lg"
            onClick={lapOrReset}
            disabled={!running && !elapsed}
          >
            {running ? "Lap" : "Reset"}
          </Button>
          <Button
            variant={running ? "danger" : "primary"}
            size="lg"
            onClick={toggle}
          >
            {running ? "Stop" : elapsed ? "Resume" : "Start"}
          </Button>
        </div>
        {(laps.length > 0 || running) && (
          <ol className="laps" aria-label="Laps" reversed>
            {(running || elapsed) && (
              <li className="lap live">
                <span>Lap {laps.length + 1}</span>
                <span className="time">{format(current, two)}</span>
              </li>
            )}
            {laps
              .map((ms, i) => ({ ms, n: i + 1 }))
              .reverse()
              .map((lap) => (
                <li
                  key={lap.n}
                  className={[
                    "lap",
                    "lap-enter",
                    lap.ms === fastest && "fastest",
                    lap.ms === slowest && "slowest",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span>
                    Lap {lap.n}
                    {lap.ms === fastest && (
                      <span className="note">fastest</span>
                    )}
                    {lap.ms === slowest && (
                      <span className="note">slowest</span>
                    )}
                  </span>
                  <span className="time">{format(lap.ms, two)}</span>
                </li>
              ))}
          </ol>
        )}
      </div>
    </Widget>
  );
}

export default Stopwatch;
