import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/** Range Navigator — focus + context time navigation. A detail chart sits over a
 *  compressed mini-map of the whole history: drag the window to pan, pull an edge
 *  to zoom, and the detail chart re-windows live. Hovering the detail chart drops
 *  a dashed crosshair with a card tooltip reading the price and its date. The
 *  right-hand price ticks and the two end labels are all derived from the current
 *  window, so every number on screen is real. Light and dark via shadcn theme
 *  tokens; respects reduced motion. */

const BLUE = 'var(--chart-1, #489ffa)'
const CARD = 'var(--card, #080b12)'
const BORDER = 'var(--border, rgba(127,127,127,0.16))'
const TEXT = 'var(--foreground, #ffffff)'
const TEXT_MUTED = 'var(--muted-foreground, #868f97)'
const BG = 'var(--background, #000000)'

const W = 560
const MAIN_H = 168
const NAV_H = 46
const PAD = { l: 8, r: 54, t: 12, b: 8 }
const plotW = W - PAD.l - PAD.r
const MIN_W = 12 // minimum window width, in points
const AXIS_TICKS = [0, 0.25, 0.5, 0.75, 1] // fraction from the top of the plot
const DAY_MS = 86_400_000

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

/** deterministic price walk so every render (and every snapshot) agrees */
function demoSeries(len: number) {
  let s = 5
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
  const out: number[] = []
  let v = 120
  for (let i = 0; i < len; i++) {
    v += (rnd() - 0.48) * 3 + Math.sin(i / 22) * 0.6
    out.push(v)
  }
  return out
}

const DEMO_SERIES = demoSeries(240)

/** compact currency with a real minus (U+2212) so values never jitter on scrub */
function money(n: number, precision = 2) {
  const body = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(Math.abs(n))
  return (n < 0 ? '−' : '') + body
}

export default function RangeNavigator({
  title = 'Price history · drag to navigate',
  values,
  /** last sample's date — every other date is derived by stepping back one day per point */
  endDate = new Date(Date.UTC(2026, 6, 30)),
  /** how many trailing points the window opens on */
  initialWindow = 72,
  color = BLUE,
  className = '',
}: {
  title?: string
  /** the price series, oldest → newest; defaults to a deterministic demo walk */
  values?: number[]
  endDate?: Date
  initialWindow?: number
  /** the one series hue */
  color?: string
  className?: string
}) {
  const reduced = useReducedMotion()
  const series = values?.length ? values : DEMO_SERIES
  const LEN = series.length
  const [win, setWin] = useState({ start: Math.max(0, LEN - 1 - initialWindow), end: LEN - 1 })
  const [hover, setHover] = useState<number | null>(null) // index within the window slice
  const navRef = useRef<SVGSVGElement>(null)
  const mainRef = useRef<SVGSVGElement>(null)
  const drag = useRef<{ mode: 'move' | 'left' | 'right'; startIdx: number; s: number; e: number } | null>(null)

  const last = endDate.getTime()
  const dayAt = (i: number) => new Date(last - (LEN - 1 - i) * DAY_MS)
  const fmtDay = (i: number, withYear = false) =>
    dayAt(i).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: withYear ? '2-digit' : undefined,
      timeZone: 'UTC',
    })

  const pxToIdx = (clientX: number) => {
    const r = navRef.current?.getBoundingClientRect()
    if (!r) return 0
    return ((clientX - r.left) / r.width) * (LEN - 1)
  }

  // drag is tracked on the window so the pointer can leave the mini-map mid-pull
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const d = drag.current
      if (!d) return
      const delta = Math.round(pxToIdx(e.clientX) - d.startIdx)
      if (d.mode === 'move') {
        const width = d.e - d.s
        const start = clamp(d.s + delta, 0, LEN - 1 - width)
        setWin({ start, end: start + width })
      } else if (d.mode === 'left') {
        setWin({ start: clamp(d.s + delta, 0, d.e - MIN_W), end: d.e })
      } else {
        setWin({ start: d.s, end: clamp(d.e + delta, d.s + MIN_W, LEN - 1) })
      }
    }
    const onUp = () => (drag.current = null)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [LEN])

  const startDrag = (mode: 'move' | 'left' | 'right') => (e: React.PointerEvent) => {
    e.preventDefault()
    drag.current = { mode, startIdx: pxToIdx(e.clientX), s: win.start, e: win.end }
  }

  // detail chart geometry over the selected window
  const detail = useMemo(() => {
    const slice = series.slice(win.start, win.end + 1)
    const lo = Math.min(...slice)
    const hi = Math.max(...slice)
    const pad = (hi - lo) * 0.1 || 1
    const min = lo - pad
    const max = hi + pad
    const n = slice.length
    const x = (i: number) => PAD.l + (i / (n - 1)) * plotW
    const y = (v: number) => PAD.t + (1 - (v - min) / (max - min)) * (MAIN_H - PAD.t - PAD.b)
    const line = slice.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
    const area = `${line} L${x(n - 1).toFixed(1)},${MAIN_H - PAD.b} L${x(0).toFixed(1)},${MAIN_H - PAD.b} Z`
    // tight windows span a couple of dollars — keep the cents so ticks stay distinct
    const axisPrecision = max - min >= 6 ? 0 : 2
    return { line, area, min, max, slice, n, x, y, axisPrecision }
  }, [win, series])

  // hover crosshair on the detail chart — pointer x snaps to the nearest real point
  const onMainMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const r = mainRef.current?.getBoundingClientRect()
    if (!r) return
    const px = ((e.clientX - r.left) / r.width) * W
    setHover(clamp(Math.round(((px - PAD.l) / plotW) * (detail.n - 1)), 0, detail.n - 1))
  }
  const hv =
    hover != null && hover < detail.n
      ? { i: hover, v: detail.slice[hover], x: detail.x(hover), y: detail.y(detail.slice[hover]) }
      : null

  // navigator (full series) geometry
  const nav = useMemo(() => {
    const lo = Math.min(...series)
    const hi = Math.max(...series)
    const nx = (i: number) => PAD.l + (i / (LEN - 1)) * plotW
    const ny = (v: number) => 4 + (1 - (v - lo) / (hi - lo)) * (NAV_H - 8)
    const line = series.map((v, i) => `${i === 0 ? 'M' : 'L'}${nx(i).toFixed(1)},${ny(v).toFixed(1)}`).join(' ')
    return { line, nx }
  }, [series, LEN])

  const wx0 = nav.nx(win.start)
  const wx1 = nav.nx(win.end)

  // end labels track the window; add the year only when the window straddles one
  const crossesYear = dayAt(win.start).getUTCFullYear() !== dayAt(win.end).getUTCFullYear()

  return (
    <div className={`w-[560px] ${className}`}>
      <div className="mb-1 flex items-baseline px-1">
        <span className="text-[13px] font-medium" style={{ color: TEXT }}>
          {title}
        </span>
      </div>

      {/* detail chart */}
      <svg
        ref={mainRef}
        width={W}
        height={MAIN_H}
        viewBox={`0 0 ${W} ${MAIN_H}`}
        className="block"
        onPointerMove={onMainMove}
        onPointerLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="rn-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.16" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* price axis — dollar ticks derived from the windowed min/max */}
        {AXIS_TICKS.map((f) => {
          const ty = PAD.t + f * (MAIN_H - PAD.t - PAD.b)
          return (
            <g key={f}>
              {f > 0 && f < 1 && (
                <line
                  x1={PAD.l}
                  y1={ty}
                  x2={W - PAD.r}
                  y2={ty}
                  stroke="color-mix(in srgb, var(--foreground) 4%, transparent)"
                  strokeDasharray="2 5"
                />
              )}
              <text
                x={W - PAD.r + 8}
                y={ty + (f === 0 ? 4 : f === 1 ? 0 : 3)}
                fontSize={8.5}
                fill="color-mix(in srgb, var(--foreground) 28%, transparent)"
                className="tabular-nums"
              >
                {money(detail.max - f * (detail.max - detail.min), detail.axisPrecision)}
              </text>
            </g>
          )
        })}
        <motion.path
          key={`${win.start}-${win.end}`}
          d={detail.area}
          fill="url(#rn-g)"
          initial={{ opacity: reduced ? 1 : 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
        />
        <path d={detail.line} fill="none" stroke={color} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
        {/* hover crosshair + readout */}
        {hv && (
          <g pointerEvents="none">
            <line
              x1={hv.x}
              y1={PAD.t}
              x2={hv.x}
              y2={MAIN_H - PAD.b}
              stroke="color-mix(in srgb, var(--foreground) 22%, transparent)"
              strokeDasharray="3 3"
            />
            <circle cx={hv.x} cy={hv.y} r={3.5} fill={color} stroke={CARD} strokeWidth={1.5} />
            {(() => {
              const label = `${money(hv.v)} · ${fmtDay(win.start + hv.i, crossesYear)}`
              const bw = label.length * 5.6 + 14
              const bx = clamp(hv.x - bw / 2, PAD.l, W - PAD.r - bw)
              return (
                <g>
                  <rect x={bx} y={PAD.t - 10} width={bw} height={17} rx={4} fill={CARD} stroke={BORDER} />
                  <text
                    x={bx + bw / 2}
                    y={PAD.t + 2}
                    textAnchor="middle"
                    fontSize={9.5}
                    fill={TEXT}
                    className="tabular-nums"
                  >
                    {label}
                  </text>
                </g>
              )
            })()}
          </g>
        )}
      </svg>

      {/* navigator mini-map */}
      <svg
        ref={navRef}
        width={W}
        height={NAV_H}
        viewBox={`0 0 ${W} ${NAV_H}`}
        className="mt-1 block touch-none select-none"
      >
        <path
          d={nav.line}
          fill="none"
          stroke="color-mix(in srgb, var(--foreground) 30%, transparent)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
        {/* dim masks outside the window */}
        <rect
          x={PAD.l}
          y={0}
          width={Math.max(0, wx0 - PAD.l)}
          height={NAV_H}
          fill={`color-mix(in srgb, ${BG} 62%, transparent)`}
        />
        <rect
          x={wx1}
          y={0}
          width={Math.max(0, W - PAD.r - wx1)}
          height={NAV_H}
          fill={`color-mix(in srgb, ${BG} 62%, transparent)`}
        />
        {/* the window itself — grab anywhere inside to pan */}
        <rect
          x={wx0}
          y={1}
          width={wx1 - wx0}
          height={NAV_H - 2}
          rx={3}
          fill={`color-mix(in srgb, ${color} 8%, transparent)`}
          stroke={`color-mix(in srgb, ${color} 55%, transparent)`}
          onPointerDown={startDrag('move')}
          style={{ cursor: 'grab' }}
        />
        {/* edge handles — pull to zoom */}
        {[
          { x: wx0, mode: 'left' as const },
          { x: wx1, mode: 'right' as const },
        ].map(({ x, mode }) => (
          <g key={mode} onPointerDown={startDrag(mode)} style={{ cursor: 'ew-resize' }}>
            <rect x={x - 5} y={0} width={10} height={NAV_H} fill="transparent" />
            <rect x={x - 1.5} y={NAV_H / 2 - 8} width={3} height={16} rx={1.5} fill={color} />
          </g>
        ))}
      </svg>

      <div className="mt-1 flex justify-between px-1 text-[9px] tabular-nums" style={{ color: TEXT_MUTED }}>
        <span>{fmtDay(win.start, crossesYear)}</span>
        <span>{fmtDay(win.end, crossesYear)}</span>
      </div>
    </div>
  )
}

export function Demo() {
  return (
    <div className="flex min-h-[300px] w-full items-center justify-center p-6">
      <RangeNavigator />
    </div>
  )
}
