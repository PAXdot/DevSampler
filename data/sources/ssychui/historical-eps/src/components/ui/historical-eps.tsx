"use client"

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/** Historical EPS — forecast-vs-reported quarters, with the small details kept:
 *  dashed bars are forecasts, solid bars are reported, and hovering a quarter
 *  opens the tooltip with the surprise line. Light and dark via shadcn tokens. */

const EASE = [0.16, 1, 0.3, 1] as const
const SANS = 'inherit'
const GREEN = 'var(--chart-2, #22c55e)'
const RED = 'var(--chart-down, #ef5350)'
/** A hue as TEXT: 60% hue, 40% foreground, so small coloured figures clear 4.5:1 on any
 *  shadcn theme. Bars and strokes keep the pure hue. */
const ink = (c: string) => `color-mix(in oklab, ${c} 60%, var(--foreground))`
/** top-lit raised tooltip face — settles into the card surface */
const SURFACE_RAISED = 'linear-gradient(180deg, var(--card-raised, var(--card)) 0%, var(--surface, var(--card)) 100%)'

type Q = { label: string; forecast: number; reported: number }

const DATA: Q[] = [
  { label: 'Q1 23', forecast: 0.42, reported: 0.31 },
  { label: 'Q2 23', forecast: 0.18, reported: 0.66 },
  { label: 'Q3 23', forecast: 0.55, reported: 0.47 },
  { label: 'Q4 23', forecast: 0.09, reported: -0.22 },
  { label: 'Q1 24', forecast: -0.12, reported: 0.06 },
  { label: 'Q2 24', forecast: 0.71, reported: 0.94 },
  { label: 'Q3 24', forecast: 0.28, reported: 0.19 },
  { label: 'Q4 24', forecast: 0.44, reported: 1.02 },
  { label: 'Q1 25', forecast: 0.83, reported: 0.58 },
]

/** forecast series — brand blue (chart-1), NOT amber: it's a neutral projection,
 *  not a negative/down signal. */
const FORECAST = 'var(--chart-1, #489ffa)'

const W = 560
const H = 190
const PAD = { l: 8, r: 36, t: 34, b: 24 }
const MAX = 1.2
const MIN = -0.3
const y = (v: number) => PAD.t + (1 - (v - MIN) / (MAX - MIN)) * (H - PAD.t - PAD.b)
const zero = y(0)

export default function HistoricalEps() {
  const reduced = useReducedMotion()
  const [hot, setHot] = useState<number | null>(null)
  const colW = (W - PAD.l - PAD.r) / DATA.length
  const barW = 11

  return (
    <div className="w-full max-w-[620px]">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[13px] font-medium text-foreground/85" style={{ fontFamily: SANS }}>
            Historical EPS
          </span>
          <span className="ml-4 inline-flex items-center gap-3 text-[10px] text-muted-foreground" style={{ fontFamily: SANS }}>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full border" style={{ borderColor: FORECAST, background: `color-mix(in srgb, ${FORECAST} 16%, transparent)` }} /> Forecast
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" /> Reported
            </span>
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground" style={{ fontFamily: SANS }}>
          Growth YoY: <span style={{ color: ink(GREEN) }}>95%</span>
          <span aria-hidden className="mx-2 text-foreground/20">·</span>
          QoQ: <span style={{ color: ink(GREEN) }}>29%</span>
        </span>
      </div>

      {/* The plot takes focus: left and right walk the quarters, Home and End jump to the
          ends, Escape closes the tooltip. A tap opens a quarter the way a hover does. */}
      <div
        className="relative max-w-[560px] rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
        role="group"
        aria-label="Historical EPS by quarter. Use the left and right arrow keys to read each quarter."
        onFocus={() => setHot((h) => h ?? DATA.length - 1)}
        onBlur={() => setHot(null)}
        onKeyDown={(e) => {
          const at = hot ?? DATA.length - 1
          const next = e.key === 'ArrowLeft' ? at - 1 : e.key === 'ArrowRight' ? at + 1 : e.key === 'Home' ? 0 : e.key === 'End' ? DATA.length - 1 : null
          if (e.key === 'Escape') setHot(null)
          if (next === null) return
          e.preventDefault()
          setHot(Math.max(0, Math.min(DATA.length - 1, next)))
        }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mt-1 block h-auto w-full"
          onPointerLeave={(e) => {
            if (e.pointerType === 'mouse') setHot(null)
          }}
        >
          {/* gridlines + right labels */}
          {[1.18, 0.59, 0].map((v) => (
            <g key={v}>
              <line x1={PAD.l} y1={y(v)} x2={W - PAD.r} y2={y(v)} stroke="color-mix(in srgb, var(--foreground) 5%, transparent)" strokeDasharray={v === 0 ? undefined : '2 4'} />
              <text x={W - PAD.r + 8} y={y(v) + 3} fontSize={9} fill="var(--muted-foreground)" style={{ fontFamily: SANS }}>
                {v.toFixed(2)}
              </text>
            </g>
          ))}

          {DATA.map((q, i) => {
            const cx = PAD.l + i * colW + colW / 2
            const dim = hot !== null && hot !== i
            const fTop = Math.min(y(q.forecast), zero)
            const fH = Math.abs(y(q.forecast) - zero)
            const rTop = Math.min(y(q.reported), zero)
            const rH = Math.abs(y(q.reported) - zero)
            const on = hot === i
            return (
              <motion.g
                key={q.label}
                opacity={dim ? 0.3 : 1}
                style={{ transition: 'opacity 0.15s' }}
                onPointerEnter={() => setHot(i)}
                onPointerDown={() => setHot(i)}
                initial={{ opacity: reduced ? 1 : 0 }}
                animate={{ opacity: dim ? 0.3 : 1 }}
                transition={reduced ? { duration: 0 } : { duration: 0.4, ease: EASE, delay: i * 0.04 }}
              >
                {/* forecast — dashed (brand blue: a neutral series, not a down move).
                    Saturated enough to hold its own next to the solid reported bar,
                    then one clear step brighter on the hovered quarter. */}
                <rect
                  x={cx - barW - 2}
                  y={fTop}
                  width={barW}
                  height={Math.max(2, fH)}
                  rx={2.5}
                  fill={`color-mix(in srgb, ${FORECAST} ${on ? 30 : 16}%, transparent)`}
                  stroke={FORECAST}
                  strokeOpacity={on ? 1 : 0.7}
                  strokeWidth={on ? 1.25 : 1}
                  strokeDasharray="3 2.5"
                  style={reduced ? undefined : { transition: 'fill 0.18s, stroke-opacity 0.18s, stroke-width 0.18s' }}
                />
                {/* reported — solid */}
                <rect x={cx + 2} y={rTop} width={barW} height={Math.max(2, rH)} rx={2.5} fill={dim ? 'color-mix(in srgb, var(--foreground) 35%, transparent)' : 'color-mix(in srgb, var(--foreground) 78%, transparent)'} />
                <text x={cx} y={H - 6} textAnchor="middle" fontSize={9} fill={hot === i ? 'color-mix(in srgb, var(--foreground) 75%, transparent)' : 'var(--muted-foreground)'} style={{ fontFamily: SANS }}>
                  {q.label}
                </text>
              </motion.g>
            )
          })}
        </svg>

        {/* tooltip — sits right beside the hovered column (to its right in the left
            half, to its left in the right half) so it stays close but never covers
            the bar you're reading. */}
        {hot !== null && (
          <div
            role="status"
            className="pointer-events-none absolute z-10 w-[150px] rounded-lg border border-foreground/[0.05] p-2.5 shadow-[0_12px_28px_-10px_rgba(0,0,0,0.35)]"
            style={{
              background: SURFACE_RAISED,
              top: 8,
              left: `${
                ((hot < DATA.length / 2
                  ? Math.min(W - 152, PAD.l + hot * colW + colW / 2 + 16)
                  : Math.max(2, PAD.l + hot * colW + colW / 2 - 166)) /
                  W) *
                100
              }%`,
            }}
          >
            <div className="text-[9px] text-muted-foreground" style={{ fontFamily: SANS }}>
              {DATA[hot].label} · after close
            </div>
            <div className="mt-1.5 flex justify-between text-[10px]" style={{ fontFamily: SANS }}>
              <span className="text-muted-foreground">Forecast</span>
              <span className="tabular-nums text-foreground/80">{DATA[hot].forecast.toFixed(2)}</span>
            </div>
            <div className="mt-1 flex justify-between text-[10px]" style={{ fontFamily: SANS }}>
              <span className="text-muted-foreground">Reported</span>
              <span className="tabular-nums text-foreground/80">{DATA[hot].reported.toFixed(2)}</span>
            </div>
            <div className="mt-1.5 flex justify-between border-t border-foreground/[0.04] pt-1.5 text-[10px]" style={{ fontFamily: SANS }}>
              <span className="text-muted-foreground">Surprise</span>
              <span className="tabular-nums" style={{ color: ink(DATA[hot].reported >= DATA[hot].forecast ? GREEN : RED) }}>
                {DATA[hot].reported >= DATA[hot].forecast ? '+' : '−'}
                {Math.abs(((DATA[hot].reported - DATA[hot].forecast) / Math.max(0.01, Math.abs(DATA[hot].forecast))) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function Demo() {
  return (
    <div className="flex min-h-[280px] w-full items-center justify-center p-6">
      <HistoricalEps />
    </div>
  )
}
