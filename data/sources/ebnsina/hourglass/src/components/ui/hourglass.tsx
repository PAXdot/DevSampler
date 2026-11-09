"use client";

import { useEffect, useId, useRef, useState } from "react";
import { reduced } from "./hourglass-utils/motion";
import { announce } from "./hourglass-utils/announce";
import { chime } from "./hourglass-utils/chime";
import Button from "./hourglass-utils/button";
import Segmented from "./hourglass-utils/segmented";
import RollingNumber from "./hourglass-utils/rolling-number";

export interface HourglassProps {
  /** How long the sand takes to run through, in seconds. */
  seconds?: number;
  /** Quick picks, in minutes. */
  presets?: number[];
  label?: string;
  locale?: string;
  className?: string;
}

type Grain = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  rolling: number;
  alive: boolean;
};

const NECK = 80;
const FULL = 56;
const POOL = 60;

// Height of the mound's surface at x: highest in the middle, falling away to the walls.
function surfaceAt(pile: number, x: number) {
  return 144 - pile * (0.55 + 0.4 * (1 - ((x - 50) / 50) ** 2));
}

export default function Hourglass({
  seconds = 60,
  presets = [1, 3, 5],
  label = "Hourglass",
  locale = "en",
  className,
}: HourglassProps) {
  const uid = useId();

  const [length, setLength] = useState(seconds * 1000);
  const lengthRef = useRef(length);
  // How much sand is in the top bulb, 0 to 1; everything else lies in the bottom.
  const [top, setTop] = useState(0);
  const topRef = useRef(0);
  const [running, setRunning] = useState(false);
  const runningRef = useRef(false);
  const [flipping, setFlipping] = useState(false);

  const lastAtRef = useRef(0);
  const frameRef = useRef(0);

  const layerRef = useRef<SVGGElement>(null);
  const grainsRef = useRef<Grain[]>(
    Array.from({ length: POOL }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      rolling: 0,
      alive: false,
    })),
  );
  const grainFrameRef = useRef(0);
  const grainAtRef = useRef(0);
  const spawnDebtRef = useRef(0);

  const two = new Intl.NumberFormat(locale, { minimumIntegerDigits: 2 });
  // At rest with all the sand below, it shows its length: ready to be flipped.
  const left = top * length;
  const total = Math.ceil((top > 0 ? left : length) / 1000);
  const shown = `${Math.floor(total / 60)}:${two.format(total % 60)}`;

  function loop(now: number) {
    const next = Math.max(
      0,
      topRef.current - (now - lastAtRef.current) / lengthRef.current,
    );
    topRef.current = next;
    lastAtRef.current = now;
    setTop(next);
    if (next > 0) {
      frameRef.current = requestAnimationFrame(loop);
    } else {
      runningRef.current = false;
      setRunning(false);
      chime(2);
      announce("The sand has run out", "assertive");
    }
  }

  function run() {
    if (topRef.current <= 0) return;
    lastAtRef.current = performance.now();
    frameRef.current = requestAnimationFrame(loop);
    runningRef.current = true;
    setRunning(true);
  }

  function pause() {
    cancelAnimationFrame(frameRef.current);
    runningRef.current = false;
    setRunning(false);
  }

  /** Turns the glass over: the sand goes with it, and what had fallen is now the top. */
  function flip() {
    pause();
    if (reduced()) {
      landed();
      return;
    }
    setFlipping(true);
  }

  function landed() {
    setFlipping(false);
    const next = 1 - topRef.current;
    topRef.current = next;
    setTop(next);
    run();
  }

  function choose(min: number) {
    pause();
    const nextLength = min * 60_000;
    lengthRef.current = nextLength;
    setLength(nextLength);
    topRef.current = 0;
    setTop(0);
  }

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  // Sand in the picture: the top sits against the neck, dimpling as it drains; the bottom heaps up.
  const topY = NECK - top * FULL;
  const pile = (1 - top) * FULL;
  // The top funnels into the neck as it drains; near the end the funnel reaches right down.
  const dip = Math.min(NECK - topY, 4 + (1 - top) * 14);

  // Grains: a fixed pool of circles moved directly each frame, so a stream of thousands never
  // re-renders the page. Each falls from the neck, speeding up, lands and rolls a little down the slope.
  function stepGrains(now: number) {
    const dt = Math.min(0.05, (now - grainAtRef.current) / 1000);
    grainAtRef.current = now;
    let alive = 0;
    // About 110 grains a second while sand is falling.
    if (runningRef.current && topRef.current > 0)
      spawnDebtRef.current += dt * 110;
    const pileNow = (1 - topRef.current) * FULL;
    const surface = (x: number) => surfaceAt(pileNow, x);
    for (const g of grainsRef.current) {
      if (!g.alive && spawnDebtRef.current >= 1) {
        spawnDebtRef.current -= 1;
        Object.assign(g, {
          x: 50 + (Math.random() - 0.5) * 1.2,
          y: NECK + 0.5,
          vx: (Math.random() - 0.5) * 3,
          vy: 6 + Math.random() * 6,
          r: 0.28 + Math.random() * 0.32,
          rolling: 0,
          alive: true,
        });
      }
      if (!g.alive) continue;
      alive++;
      if (g.rolling > 0) {
        // On the mound: slide sideways and settle onto the surface, fading into the heap.
        g.rolling -= dt;
        g.x += g.vx * dt;
        g.vx *= 0.9;
        g.y = surface(g.x) - g.r;
        if (g.rolling <= 0) g.alive = false;
      } else {
        g.vy += 750 * dt;
        g.x += g.vx * dt;
        g.y += g.vy * dt;
        if (g.y >= surface(g.x) - g.r) {
          g.rolling = 0.15 + Math.random() * 0.25;
          g.vx = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 14);
        }
      }
    }
    const dots = layerRef.current?.children;
    if (dots) {
      grainsRef.current.forEach((g, i) => {
        const c = dots[i] as SVGCircleElement;
        c.setAttribute("cx", g.x.toFixed(2));
        c.setAttribute("cy", g.y.toFixed(2));
        c.setAttribute("r", g.r.toFixed(2));
        c.style.opacity = g.alive
          ? g.rolling > 0
            ? String(Math.min(1, g.rolling * 5))
            : "1"
          : "0";
      });
    }
    grainFrameRef.current =
      alive || (runningRef.current && topRef.current > 0)
        ? requestAnimationFrame(stepGrains)
        : 0;
  }

  // Grains run while sand falls, and a moment after so the last ones land.
  useEffect(() => {
    if (!running || grainFrameRef.current || reduced()) return;
    grainAtRef.current = performance.now();
    grainFrameRef.current = requestAnimationFrame(stepGrains);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);
  useEffect(() => () => cancelAnimationFrame(grainFrameRef.current), []);

  return (
    <section
      className={["widget", className].filter(Boolean).join(" ")}
      aria-label={label}
      style={
        {
          "--tone": "var(--ui-accent)",
          maxInlineSize: "36rem",
        } as React.CSSProperties
      }
    >
      <div className="hourglass">
        <svg
          viewBox="0 0 100 160"
          role="img"
          aria-label={
            top > 0
              ? `${label}, ${shown} left`
              : `${label}, all the sand has fallen`
          }
        >
          <defs>
            {/* Sand: lighter where the light catches the top, deeper below, with a fine grain. */}
            <linearGradient id={`${uid}-sand`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e7bd6a" />
              <stop offset="1" stopColor="#c9933a" />
            </linearGradient>
            <filter id={`${uid}-grain`} x="0" y="0" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="2.2"
                numOctaves={2}
                seed={7}
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="0 0 0 0 0.35  0 0 0 0 0.22  0 0 0 0 0.08  0 0 0 0.55 -0.12"
                result="specks"
              />
              <feComposite
                in="specks"
                in2="SourceGraphic"
                operator="in"
                result="grain"
              />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="grain" />
              </feMerge>
            </filter>
            <clipPath id={`${uid}-glass`}>
              <path d="M22,16 C22,56 46,68 47.5,80 C46,92 22,104 22,144 L78,144 C78,104 54,92 52.5,80 C54,68 78,56 78,16 Z" />
            </clipPath>
          </defs>
          {/* Everything inside turns when flipped: glass, frame and sand together. */}
          <g
            className={["body", flipping && "turning"]
              .filter(Boolean)
              .join(" ")}
            onTransitionEnd={(e) => {
              if (e.propertyName === "rotate" && flipping) landed();
            }}
          >
            <g clipPath={`url(#${uid}-glass)`}>
              <rect className="glass" x="0" y="0" width="100" height="160" />
              <g
                className="sand"
                fill={`url(#${uid}-sand)`}
                filter={`url(#${uid}-grain)`}
              >
                {/* Top: level at the walls, sinking into a funnel over the neck as it drains. */}
                {top > 0 && (
                  <path
                    d={`M0,${NECK} L0,${topY} L${50 - 20},${topY} C${50 - 9},${topY} ${50 - 3},${
                      topY + dip
                    } 50,${topY + dip} C${50 + 3},${topY + dip} ${50 + 9},${topY} ${
                      50 + 20
                    },${topY} L100,${topY} L100,${NECK} Z`}
                  />
                )}
                {/* Bottom: a mound, highest where the stream lands. */}
                <path
                  d={`M0,144 L0,${144 - pile * 0.55} Q50,${144 - pile * 1.35} 100,${
                    144 - pile * 0.55
                  } L100,144 Z`}
                />
              </g>
              {running && top > 0 && (
                /* A faint thread for the stream's body; the grains give it life. */
                <line
                  className="stream"
                  x1="50"
                  y1={NECK}
                  x2="50"
                  y2={surfaceAt(pile, 50)}
                />
              )}
              <g className="grains" ref={layerRef} aria-hidden="true">
                {Array.from({ length: POOL }, (_, i) => (
                  <circle key={i} r={0} style={{ opacity: 0 }} />
                ))}
              </g>
            </g>
            <path
              className="rim"
              d="M22,16 C22,56 46,68 47.5,80 C46,92 22,104 22,144 L78,144 C78,104 54,92 52.5,80 C54,68 78,56 78,16 Z"
            />
            {/* A glint down the left of the glass, so it reads as glass. */}
            <path
              className="glint"
              d="M27,24 C27,50 40,64 45,75 M45,85 C40,96 27,110 27,136"
            />
            <rect
              className="post"
              x="15.5"
              y="15"
              width="2.5"
              height="130"
              rx="1.25"
            />
            <rect
              className="post"
              x="82"
              y="15"
              width="2.5"
              height="130"
              rx="1.25"
            />
            <rect className="cap" x="10" y="7" width="80" height="9" rx="4.5" />
            <rect
              className="cap"
              x="10"
              y="144"
              width="80"
              height="9"
              rx="4.5"
            />
          </g>
        </svg>

        <div className="side">
          <p
            className="readout"
            role="timer"
            aria-live="off"
            aria-label={`${shown} left`}
          >
            <RollingNumber value={shown} />
          </p>
          <Segmented
            label="Length"
            hideLabel
            options={presets.map((p) => ({
              value: String(p),
              label: `${p} min`,
            }))}
            value={String(length / 60_000)}
            onValueChange={(v) => choose(Number(v))}
            disabled={running || flipping}
          />
          <div className="actions">
            {running ? (
              <Button variant="secondary" onClick={pause}>
                Pause
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={run}
                disabled={top <= 0 || flipping}
              >
                Resume
              </Button>
            )}
            <Button onClick={flip} disabled={flipping}>
              Flip
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
