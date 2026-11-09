"use client";

import * as React from "react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/timer-utils/button";
import Icon from "@/components/ui/timer-utils/icon";
import RollingNumber from "@/components/ui/timer-utils/rolling-number";
import Widget from "@/components/ui/timer-utils/widget";
import { announce } from "@/components/ui/timer-utils/announce";
import { chime } from "@/components/ui/timer-utils/chime";

type Phase = "idle" | "running" | "paused" | "done";

interface TimerProps {
  /** Starting length in minutes. */
  minutes?: number;
  /** The longest the ruler goes, in minutes. */
  max?: number;
  /** Names it for screen readers ("Tea timer"). */
  label?: string;
  locale?: string;
  className?: string;
}

export default function Timer({
  minutes = 15,
  max = 60,
  label = "Timer",
  locale = "en",
  className,
}: TimerProps) {
  // Starting choice only: a later change to `minutes` doesn't move an already-mounted timer.
  const [chosen, setChosen] = React.useState(minutes);
  const [phase, setPhase] = React.useState<Phase>("idle");
  const [remaining, setRemaining] = React.useState(0);

  // The end is a moment in time, so the countdown stays right while the tab sleeps.
  const endAtRef = React.useRef(0);
  const frameRef = React.useRef(0);
  const titleRef = React.useRef("");
  const phaseRef = React.useRef(phase);
  React.useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  // Where the ruler stands, in minutes: the choice when idle, the time left once running.
  const at = phase === "idle" ? chosen : remaining / 60_000;
  const two = React.useMemo(
    () => new Intl.NumberFormat(locale, { minimumIntegerDigits: 2 }),
    [locale],
  );
  const shown = React.useMemo(() => {
    const total = phase === "idle" ? chosen * 60 : Math.ceil(remaining / 1000);
    const h = Math.floor(total / 3600);
    const m = Math.floor(total / 60) % 60;
    return `${h ? `${h}:${two.format(m)}` : two.format(m)}:${two.format(total % 60)}`;
  }, [phase, chosen, remaining, two]);
  const spokenLength = React.useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "unit",
        unit: "minute",
        unitDisplay: "long",
      }).format(chosen),
    [locale, chosen],
  );

  const loop = React.useCallback(() => {
    const rem = Math.max(0, endAtRef.current - performance.now());
    setRemaining(rem);
    if (rem > 0) frameRef.current = requestAnimationFrame(loop);
    else finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start() {
    let rem = remaining;
    if (phase === "idle") {
      rem = chosen * 60_000;
      setRemaining(rem);
    }
    endAtRef.current = performance.now() + rem;
    frameRef.current = requestAnimationFrame(loop);
    setPhase("running");
  }
  function pause() {
    cancelAnimationFrame(frameRef.current);
    setRemaining(Math.max(0, endAtRef.current - performance.now()));
    setPhase("paused");
  }
  function finish() {
    setPhase("done");
    chime(3);
    announce("Time's up", "assertive");
    titleRef.current = document.title;
    document.title = `Time's up — ${titleRef.current}`;
  }
  function cancel() {
    cancelAnimationFrame(frameRef.current);
    if (phase === "done" && titleRef.current) document.title = titleRef.current;
    setPhase("idle");
  }
  React.useEffect(
    () => () => {
      cancelAnimationFrame(frameRef.current);
      if (phaseRef.current === "done" && titleRef.current)
        document.title = titleRef.current;
    },
    [],
  );

  // The ruler: a tick a minute, drawn in place and slid under a fixed pointer.
  // Ticks spread with the ruler's width: dense on a phone, roomier on a desktop card.
  const rulerElRef = React.useRef<HTMLDivElement | null>(null);
  const [rulerWidth, setRulerWidth] = React.useState(0);
  React.useEffect(() => {
    const el = rulerElRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setRulerWidth(entry.contentRect.width),
    );
    ro.observe(el);
    setRulerWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);
  const GAP = Math.max(13, rulerWidth / 46);
  const set = React.useCallback(
    (m: number) => setChosen(Math.max(1, Math.min(max, Math.round(m)))),
    [max],
  );
  const [dragging, setDragging] = React.useState(false);
  const dragFromRef = React.useRef(0);
  const dragValueRef = React.useRef(0);
  const [live, setLive] = React.useState(0);
  const pos = dragging ? live : at;

  function ondown(e: React.PointerEvent<HTMLDivElement>) {
    if (phase !== "idle" || e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    dragFromRef.current = e.clientX;
    dragValueRef.current = chosen;
    setLive(chosen);
  }
  function onmove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    setLive(
      Math.max(
        0,
        Math.min(
          max,
          dragValueRef.current - (e.clientX - dragFromRef.current) / GAP,
        ),
      ),
    );
  }
  function onup() {
    if (!dragging) return;
    setDragging(false);
    set(live);
  }
  // Two-finger swipes and mouse wheels move it too, a minute per notch.
  const wheelRestRef = React.useRef(0);
  React.useEffect(() => {
    const el = rulerElRef.current;
    if (!el) return;
    const onwheel = (e: WheelEvent) => {
      if (phase !== "idle") return;
      e.preventDefault();
      wheelRestRef.current +=
        (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) / GAP;
      const whole = Math.trunc(wheelRestRef.current);
      if (whole) {
        set(chosen + whole);
        wheelRestRef.current -= whole;
      }
    };
    // Not passive: we need preventDefault to stop the page scrolling while adjusting the ruler.
    el.addEventListener("wheel", onwheel, { passive: false });
    return () => el.removeEventListener("wheel", onwheel);
  }, [phase, chosen, GAP, set]);

  function onkeydown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (phase !== "idle") return;
    const by: Record<string, number> = {
      ArrowRight: 1,
      ArrowUp: 1,
      ArrowLeft: -1,
      ArrowDown: -1,
      PageUp: 5,
      PageDown: -5,
    };
    if (e.key === "Home") set(1);
    else if (e.key === "End") set(max);
    else if (by[e.key] !== undefined) set(chosen + by[e.key]);
    else return;
    e.preventDefault();
  }

  const ticks = React.useMemo(
    () => Array.from({ length: max + 1 }, (_, i) => i),
    [max],
  );

  return (
    <Widget
      label={label}
      tone="var(--ui-accent)"
      max="44rem"
      className={cn("sinaui-timer", className)}
    >
      <div className={cn("timer", phase)}>
        {/* A slider: drag, swipe or use the arrow keys; locked while the timer runs. */}
        <div
          ref={rulerElRef}
          className={cn("ruler", dragging && "dragging")}
          role="slider"
          tabIndex={phase === "idle" ? 0 : -1}
          aria-label="Length"
          aria-valuemin={1}
          aria-valuemax={max}
          aria-valuenow={chosen}
          aria-valuetext={spokenLength}
          aria-disabled={phase !== "idle" || undefined}
          onPointerDown={ondown}
          onPointerMove={onmove}
          onPointerUp={onup}
          onPointerCancel={onup}
          onKeyDown={onkeydown}
        >
          <div
            className="track"
            style={{ translate: `${-pos * GAP}px 0` } as React.CSSProperties}
            aria-hidden="true"
          >
            {ticks.map((i) => (
              <span
                key={i}
                className={cn(
                  "tick",
                  i % 5 === 0 && "major",
                  i <= pos + 0.001 && "lit",
                )}
                style={{ left: `${i * GAP}px` }}
              >
                {i % 5 === 0 && <span className="num">{i}</span>}
              </span>
            ))}
          </div>
          <span className="pointer" aria-hidden="true" />
        </div>

        <div className="bottom">
          <div className="buttons">
            {phase === "idle" && (
              <Button size="lg" onClick={start}>
                Start Timer
              </Button>
            )}
            {phase === "running" && (
              <Button variant="secondary" size="lg" onClick={pause}>
                Pause
              </Button>
            )}
            {phase === "paused" && (
              <Button size="lg" onClick={start}>
                Resume
              </Button>
            )}
            {phase === "done" && (
              <Button variant="secondary" size="lg" onClick={cancel}>
                Done
              </Button>
            )}
            {(phase === "running" || phase === "paused") && (
              <Button
                variant="ghost"
                size="lg"
                square
                aria-label="Cancel timer"
                onClick={cancel}
              >
                <Icon icon={Cancel01Icon} size={18} />
              </Button>
            )}
          </div>
          <p
            className="readout"
            role="timer"
            aria-live="off"
            aria-label={`${shown} ${phase === "idle" ? "set" : "left"}`}
          >
            <RollingNumber value={shown} />
          </p>
        </div>
      </div>
    </Widget>
  );
}
