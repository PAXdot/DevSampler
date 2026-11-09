export interface ChartSeries {
  id: string
  label: string
  values: number[]
  color?: string
}

export const SERIES_COLORS = [
  'var(--color-accent-strong)',
  'var(--color-ink)',
  'var(--color-success)',
  'var(--color-ink-faint)',
  'var(--color-warning)',
]

export interface ChartGeometry {
  width: number
  height: number
  padding: { top: number; right: number; bottom: number; left: number }
}

export interface ChartScale {
  plot: { x: number; y: number; width: number; height: number }
  min: number
  max: number
  toY: (value: number) => number
  toX: (index: number, count: number) => number
  ticks: number[]
}

export function chartScale(
  series: ChartSeries[],
  geometry: ChartGeometry,
  options: { zeroBased?: boolean; tickCount?: number; stacked?: boolean } = {},
): ChartScale {
  const { zeroBased = true, tickCount = 4, stacked = false } = options
  const { width, height, padding } = geometry

  let rawMin = Number.POSITIVE_INFINITY
  let rawMax = Number.NEGATIVE_INFINITY
  const include = (value: number) => {
    if (!Number.isFinite(value)) return
    if (value < rawMin) rawMin = value
    if (value > rawMax) rawMax = value
  }

  if (stacked) {
    const categories = Math.max(0, ...series.map((entry) => entry.values.length))
    for (let index = 0; index < categories; index += 1) {
      let running = 0
      for (const entry of series) {
        const value = entry.values[index]
        if (!Number.isFinite(value)) continue
        running += value
        include(running)
      }
    }
  } else {
    for (const entry of series) for (const value of entry.values) include(value)
  }

  if (rawMin === Number.POSITIVE_INFINITY) {
    rawMin = 0
    rawMax = 1
  }

  const min = zeroBased ? Math.min(0, rawMin) : rawMin
  const max = rawMax === min ? min + 1 : rawMax
  const span = max - min

  const plot = {
    x: padding.left,
    y: padding.top,
    width: Math.max(1, width - padding.left - padding.right),
    height: Math.max(1, height - padding.top - padding.bottom),
  }

  return {
    plot,
    min,
    max,
    toY: (value) => plot.y + plot.height - ((value - min) / span) * plot.height,
    toX: (index, count) =>
      count <= 1 ? plot.x + plot.width / 2 : plot.x + (index / (count - 1)) * plot.width,
    ticks: Array.from({ length: tickCount + 1 }, (_, index) => min + (span * index) / tickCount),
  }
}

/** Compact axis formatting: 12.4k rather than 12,400. */
export function formatTick(value: number): string {
  const absolute = Math.abs(value)
  if (absolute >= 999_950_000) return `${(value / 1_000_000_000).toFixed(1)}b`
  if (absolute >= 999_950) return `${(value / 1_000_000).toFixed(1)}m`
  if (absolute >= 999.95) return `${(value / 1_000).toFixed(1)}k`
  return String(Math.round(value * 10) / 10)
}
