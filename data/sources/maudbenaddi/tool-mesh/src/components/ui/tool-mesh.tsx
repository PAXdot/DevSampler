"use client";

import * as React from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* A 2/3/2 mesh of logo tiles whose edges dissolve into the page. Each tile
   is a CATEGORY, not a tool: it holds the tools that do one job and swaps
   between them, one tile at a time. The swaps hop across the mesh (never to
   a neighbour, so it never reads as a spinner going round) and the centre
   tile, the featured one, takes every other turn and carries the accent.

   Logos are drawn as masks painted in the text colour (the accent on the
   centre), so any single-colour SVG works in light and dark. */

export interface ToolMeshTool {
  name: string;
  /** URL of a single-colour SVG logo (used as a mask) */
  logo: string;
}

export interface ToolMeshCategory {
  /** what the tile is for: stays put while its tools swap */
  job: string;
  tools: ToolMeshTool[];
}

export interface ToolMeshProps extends React.HTMLAttributes<HTMLDivElement> {
  /** exactly 7: two on top, three in the middle (the 2nd of them, index 3,
   *  is the featured centre), two below */
  categories: ToolMeshCategory[];
  /** paint of the centre tile's logo */
  accent?: string;
  /** colour the mesh fades into at its edges: the surface it sits on */
  fadeInto?: string;
  /** ms between two swaps */
  interval?: number;
}

const TILE = 80;
const FADE_S = 0.3;
/* where each tile sits, in tile units, to choose hops by distance */
const AT: [number, number][] = [
  [0.5, 0], [1.5, 0],
  [0, 1], [1, 1], [2, 1],
  [0.5, 2], [1.5, 2],
];
const CENTRE = 3;
const RING = [0, 1, 2, 4, 5, 6];
const MIN_HOP = 1.5;

const gap = (a: number, b: number) => Math.hypot(AT[a][0] - AT[b][0], AT[a][1] - AT[b][1]);

function hop(left: number[], from: number | null) {
  if (from === null) return left[Math.floor(Math.random() * left.length)];
  let pool = left.filter((c) => gap(c, from) >= MIN_HOP);
  if (!pool.length) {
    const best = Math.max(...left.map((c) => gap(c, from)));
    pool = left.filter((c) => gap(c, from) === best);
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

/* one loop: every ring tile once, far from the last, the centre at the
   start and halfway */
function planLoop(after: number | null) {
  const left = [...RING];
  const order: number[] = [];
  let from = after;
  while (left.length) {
    const pick = hop(left, from);
    order.push(pick);
    left.splice(left.indexOf(pick), 1);
    from = pick;
  }
  return [CENTRE, order[0], order[1], order[2], CENTRE, order[3], order[4], order[5]];
}

function Tile({
  category,
  step,
  featured,
  accent,
}: {
  category: ToolMeshCategory;
  step: number;
  featured: boolean;
  accent: string;
}) {
  const tool = category.tools[step % category.tools.length];
  const mask = `url(${tool.logo})`;
  return (
    <div
      role="img"
      aria-label={`${category.job}: ${category.tools.map((t) => t.name).join(", ")}`}
      title={category.job}
      className="relative flex rounded-xl"
      style={{
        width: TILE,
        height: TILE,
        /* the centre wears a tint of its own accent, so tile and logo read
           as one; written with color-mix rather than an opacity utility,
           which some themes resolve to the solid colour */
        background: featured ? `color-mix(in srgb, ${accent} 14%, transparent)` : undefined,
      }}
    >
      <div
        className="absolute inset-0 rounded-xl border"
        style={{
          borderColor: featured
            ? `color-mix(in srgb, ${accent} 55%, transparent)`
            : "color-mix(in srgb, var(--color-foreground) 18%, transparent)",
          boxShadow: featured ? `0 0 28px color-mix(in srgb, ${accent} 30%, transparent)` : undefined,
        }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={tool.name}
          aria-hidden
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.86 }}
          transition={{ duration: FADE_S, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 m-auto size-8"
          style={{
            background: featured ? accent : "var(--color-foreground)",
            maskImage: mask,
            WebkitMaskImage: mask,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export function ToolMesh({
  categories,
  accent = "var(--color-primary)",
  fadeInto = "var(--color-background)",
  interval = 1600,
  className,
  ...props
}: ToolMeshProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.3 });
  const [steps, setSteps] = React.useState<number[]>(() => categories.map(() => 0));
  const queue = React.useRef<number[]>([]);
  const lastRing = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (reduce || !inView) return;
    const id = window.setInterval(() => {
      if (!queue.current.length) queue.current = planLoop(lastRing.current);
      const next = queue.current.shift()!;
      if (next !== CENTRE) lastRing.current = next;
      setSteps((s) => s.map((v, i) => (i === next ? v + 1 : v)));
    }, interval);
    return () => window.clearInterval(id);
  }, [reduce, inView, interval]);

  const rows = [categories.slice(0, 2), categories.slice(2, 5), categories.slice(5, 7)];
  let index = 0;
  return (
    <div ref={ref} className={cn("relative mx-auto w-fit", className)} {...props}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30"
        style={{ background: `radial-gradient(ellipse at center, transparent 30%, ${fadeInto} 78%)` }}
      />
      {rows.map((row, r) => (
        <div key={r} className={cn("flex w-fit justify-center gap-2", r === 1 ? "my-2" : "mx-auto")}>
          {row.map((category) => {
            const i = index++;
            return (
              <Tile
                key={category.job}
                category={category}
                step={steps[i] ?? 0}
                featured={i === CENTRE}
                accent={accent}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default ToolMesh;
