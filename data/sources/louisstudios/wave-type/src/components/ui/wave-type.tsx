"use client"

import * as React from "react"

/**
 * The pattern recipes. Each one is a typographic field with its own shape function, motion and palette.
 * - "wave": letters of one phrase slide between left and right clusters, drawing a rolling S down the frame.
 * - "swell": the same wave in big type, word gaps kept, running off the right edge with a wandering left column.
 * - "ripple": a phrase with its word gaps kept, rippling outward from the middle row.
 * - "lattice": a short word repeated across each row; the row span zigzags and the count steps, weaving diamonds.
 * - "confetti": a two letter word in six colours on black, sawtooth spans and a swelling count.
 * - "hourglass": a word repeated tightly into diamonds that open out into a tracked hourglass.
 * - "split": a long first word against the rest of the phrase, trading tracking between the two, with a zoom cut.
 * - "grid": a word on a stepped grid whose count rises into a dense band and thins out again.
 * - "vase": one centred phrase per row whose width traces a turned vase rising up the frame.
 * - "sway": big type whose tracking swings so rows lean into an S.
 * - "dots": a tiny word filling every row; the count opens an hourglass, then the span folds into diamonds.
 * - "flow": an endless stream of the phrase bunching into dense curved channels.
 */
export type WaveTypeScene =
  | "wave"
  | "swell"
  | "ripple"
  | "lattice"
  | "confetti"
  | "hourglass"
  | "split"
  | "grid"
  | "vase"
  | "sway"
  | "dots"
  | "flow"

/** A flat colour pair. `ink` may be a list, in which case words cycle through it like the confetti recipe. */
export interface WaveTypePalette {
  /** Background fill, any CSS colour. */
  background: string
  /** Letter colour, or a list of colours that words cycle through. */
  ink: string | string[]
}

export interface WaveTypeProps {
  /**
   * The words the patterns are set in, one per scene position: scene n uses phrases[n], wrapping round when the
   * list is shorter. The defaults pair each recipe with a phrase that suits it. Set in capitals. Word recipes (lattice, confetti, hourglass, grid, dots) use the first word of the
   * phrase; split uses the first word against the rest. Two or three short words read best.
   */
  phrases?: string[]
  /**
   * Which recipes play and in what order. The default is all twelve in the reference order: wave, swell, lattice,
   * confetti, hourglass, split, grid, ripple, vase, sway, dots, flow.
   */
  scenes?: WaveTypeScene[]
  /**
   * Colour overrides, one per scene position, wrapping round. Leave empty to give every recipe its own sampled
   * palette. Each entry is { background, ink }, where ink may be a list of colours.
   */
  palettes?: WaveTypePalette[]
  /** Playback speed. 1 matches the reference motion, 0 holds a still frame. */
  speed?: number
  /**
   * Seconds each scene plays before a hard cut to the next. 0 (the default) gives every recipe its length in the
   * reference, about 1 s each, so the twelve scenes loop in 12.5 s. Longer values keep each recipe's moves in
   * proportion and slow nothing else.
   */
  sceneDuration?: number
  /** CSS font-family for the letters. A tight geometric grotesk at semibold weight matches the reference. */
  font?: string
  /** When true, the pointer bends the field, pushing letters apart around it. Click or tap jumps to the next scene. */
  interactive?: boolean
  /** Class name for the outer element. Give it a size; the field fills it. */
  className?: string
  /** Inline styles for the outer element. */
  style?: React.CSSProperties
}

const TAU = Math.PI * 2
const DEFAULT_FONT = `"Helvetica Neue", Helvetica, Inter, Arial, sans-serif`
// Everything is laid out in design pixels, 720 across; the canvas scales that to fit. The recipes were measured on
// a 720 x 900 frame, so a square card shows their upper 720 rows, and centred recipes recentre.
const DESIGN = 720
// Cap height of the face as a share of the font size, to centre capitals on a row.
const CAP = 0.7

const BLUE = "#1148D7"
const BLUE_INK = "#1B44B4"
const GREEN_INK = "#17694A"
const RED_INK = "#AE3A2D"
const GREEN = "#118052"
const CREAM = "#ECE2D2"
const PINK = "#F58AB5"
const ICE = "#EEF9FF"
const MINT = "#E2FBEA"
const BLUSH = "#FFEAF8"
const BLACK = "#020002"
const CONFETTI = ["#E8473C", "#2F5BE0", "#2A9A62", "#F2C14E", "#F58AB5", "#F4F1EC"]

/** Draws one glyph centred on x, its capitals centred on y. sx squeezes it horizontally (1 = natural width). */
type Put = (ch: string, x: number, y: number, ink?: number, sx?: number) => void

interface Env {
  /** Design width and height (720 wide). */
  W: number
  H: number
  /** Seconds into the scene at playback speed. */
  t: number
  /**
   * Scene clock rescaled so the recipe's own events (a zoom, a fold, an opening) land where they do in the
   * reference however long the scene is set to play.
   */
  te: number
  phrase: string
  put: Put
  setFont: (px: number, weight?: number) => void
  /** Advance width of a glyph in design pixels at the current font. */
  advance: (ch: string) => number
  zoom: (z: number, ox: number, oy: number) => void
}

interface Recipe {
  palette: WaveTypePalette
  /** Length of the scene in the reference, in seconds. */
  length: number
  draw: (e: Env) => void
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
const smooth = (a: number, b: number, v: number) => {
  const x = clamp01((v - a) / (b - a))
  return x * x * (3 - 2 * x)
}
const lerp = (a: number, b: number, k: number) => a + (b - a) * k
const fract = (v: number) => v - Math.floor(v)
// Triangle wave with period 1: 0 at whole numbers, 1 halfway.
const tri = (v: number) => 1 - Math.abs(fract(v) * 2 - 1)
// Gaussian bump of width s.
const bump = (d: number, s: number) => Math.exp(-(d / s) * (d / s))

/** Piecewise linear lookup in a table of [x, value] pairs sorted by x; clamps at both ends. */
function table(knots: readonly (readonly [number, number])[], x: number) {
  if (x <= knots[0][0]) return knots[0][1]
  for (let i = 1; i < knots.length; i++) {
    const [x1, v1] = knots[i]
    if (x <= x1) {
      const [x0, v0] = knots[i - 1]
      return v0 + ((v1 - v0) * (x - x0)) / (x1 - x0)
    }
  }
  return knots[knots.length - 1][1]
}

/** Rows at a fixed pitch covering the frame, aligned to y0. */
function rows(H: number, y0: number, pitch: number, fn: (y: number, r: number) => void) {
  const first = Math.floor((-pitch - y0) / pitch)
  const last = Math.ceil((H + pitch - y0) / pitch)
  for (let r = first; r <= last; r++) fn(y0 + r * pitch, r)
}

function letters(phrase: string, keepSpaces: boolean) {
  const s = phrase.toUpperCase().trim()
  return Array.from(keepSpaces ? s.replace(/\s+/g, " ") : s.replace(/\s+/g, ""))
}
function firstWord(phrase: string) {
  return phrase.toUpperCase().trim().split(/\s+/)[0] || "TYPE"
}

/**
 * The cluster row behind the wave recipes. Letters bunch around index c and the gaps grow away from it like a
 * tangent (q sets how fast), with the first and last letters pinned at xA and xE.
 */
function clusterRow(e: Env, chars: string[], y: number, xA: number, xE: number, c: number, Q: number) {
  const n = chars.length
  if (n === 1) {
    e.put(chars[0], xA, y)
    return
  }
  const q = Q / Math.max(c, n - 1 - c, 0.5)
  const r0 = Math.tan(q * -c)
  const r1 = Math.tan(q * (n - 1 - c))
  const k = (xE - xA) / (r1 - r0)
  for (let i = 0; i < n; i++) e.put(chars[i], xA + (Math.tan(q * (i - c)) - r0) * k, y)
}

/**
 * Maps a wave phase to a cluster row: phase 0 packs the letters at the right, 0.5 at the left, and the quarter
 * points spread them with the ends drawn in. cl and cr are the cluster index at either extreme, as a share of
 * the phrase length.
 */
function waveRow(e: Env, chars: string[], y: number, phase: number, cl: number, cr: number, xA0: number, inA: number, xE0: number, inE: number) {
  const v = Math.cos(TAU * phase)
  const n1 = chars.length - 1
  const c = n1 * lerp(cl, cr, 0.5 + 0.5 * Math.sign(v) * Math.pow(Math.abs(v), 0.8))
  const Q = 0.95 + (v > 0 ? 0.55 : 0.5) * Math.pow(Math.abs(v), 1.5)
  const s = 1 - v * v
  clusterRow(e, chars, y, xA0 + inA * s, xE0 - inE * s, c, Q)
}

/** Evenly spaced copies of a word between two centres. */
function spreadWords(e: Env, word: string, y: number, x0: number, x1: number, count: number, ink?: (j: number) => number) {
  if (count <= 1) {
    e.put(word, (x0 + x1) / 2, y, ink ? ink(0) : 0)
    return
  }
  for (let j = 0; j < count; j++) e.put(word, x0 + ((x1 - x0) * j) / (count - 1), y, ink ? ink(j) : 0)
}

/** A phrase centred on cx, its letter centres spread evenly over width w. */
function centredRow(e: Env, chars: string[], y: number, cx: number, w: number) {
  const n = chars.length
  for (let i = 0; i < n; i++) e.put(chars[i], n > 1 ? cx - w / 2 + (w * i) / (n - 1) : cx, y)
}

// Wave phase in cycles down the frame (one value per 45 px from y = 0), at four moments of the reference scene,
// fitted so the rows reproduce it frame by frame. Phase is interpolated between them in time.
const WAVE_PHASE: readonly (readonly number[])[] = [
  [-0.02, -0.012, -0.004, 0.005, 0.046, 0.108, 0.242, 0.387, 0.467, 0.563, 0.684, 0.885, 0.98, 1.019, 1.103, 1.236, 1.351, 1.406, 1.442, 1.464, 1.572],
  [-0.062, -0.044, -0.011, -0.002, 0.007, 0.053, 0.135, 0.309, 0.43, 0.508, 0.616, 0.788, 0.943, 0.995, 1.041, 1.123, 1.259, 1.343, 1.387, 1.419, 1.431],
  [-0.145, -0.117, -0.084, -0.047, -0.013, 0.016, 0.057, 0.172, 0.346, 0.458, 0.556, 0.672, 0.858, 0.955, 0.994, 1.043, 1.118, 1.211, 1.288, 1.341, 1.363],
  [-0.276, -0.234, -0.16, -0.104, -0.052, -0.012, 0.019, 0.089, 0.248, 0.412, 0.511, 0.607, 0.76, 0.913, 0.99, 1.018, 1.056, 1.109, 1.167, 1.248, 1.279],
]

/** Wave phase at row y and scene time t, from WAVE_PHASE; carries on linearly outside the measured span. */
function wavePhase(y: number, t: number) {
  const ft = clamp01((t * 30 - 1) / 27) * 3
  const k = Math.min(2, Math.floor(ft))
  const a = WAVE_PHASE[k]
  const b = WAVE_PHASE[k + 1]
  const at = (row: readonly number[]) => {
    const fy = y / 45
    const i = Math.max(0, Math.min(row.length - 2, Math.floor(fy)))
    return row[i] + (row[i + 1] - row[i]) * (fy - i)
  }
  // Past the measured stretch the phase keeps drifting at the late rate.
  const extra = t > 28 / 30 ? -0.13 * (t - 28 / 30) / 0.3 : 0
  return lerp(at(a), at(b), ft - k) + extra
}

// Ripple phase by distance from the middle row, measured from the reference: [d, cycles at 0.4 s, cycles/s].
const RIPPLE: readonly (readonly [number, number, number])[] = [
  [0, 0.727, 0.383], [11, 0.727, 0.383], [33, 0.723, 0.383], [56, 0.707, 0.367], [78, 0.673, 0.317], [100, 0.647, 0.300], [123, 0.600, 0.250], [145, 0.557, 0.217], [168, 0.517, 0.167], [190, 0.470, 0.200], [212, 0.397, 0.233], [235, 0.310, 0.317], [257, 0.183, 0.317], [280, 0.087, 0.167], [302, 0.023, 0.133], [325, -0.020, 0.133], [347, -0.070, 0.150], [370, -0.143, 0.317], [392, -0.220, 0.383], [414, -0.283, 0.350], [437, -0.340, 0.300], [700, -0.840, 0.300],
]

// Vase silhouette, measured from the reference: [depth down the vase in px, opening 0..1].
const VASE: readonly (readonly [number, number])[] = [
  [-400, 1], [-150, 0.9], [-60, 0.6], [7, 0.29], [33, 0.115], [85, 0], [113, 0.024], [143, 0.1], [172, 0.27],
  [201, 0.54], [230, 0.79], [260, 0.93], [288, 0.99], [318, 1], [348, 0.99], [376, 0.94], [406, 0.85],
  [435, 0.66], [464, 0.42], [493, 0.24], [523, 0.127], [551, 0.061], [581, 0.024], [609, 0.005], [639, 0],
  [669, 0.005], [697, 0.02], [727, 0.051], [756, 0.098], [786, 0.161], [814, 0.246], [844, 0.351],
  [873, 0.468], [902, 0.583], [931, 0.68], [961, 0.756], [990, 0.815], [1018, 0.856], [1048, 0.885],
  [1077, 0.907], [1150, 0.96], [1250, 1],
]

// Sway swing over one period, measured from the reference: [phase, tightness 0..1].
const SWAY: readonly (readonly [number, number])[] = [
  [0, 1], [0.06, 0.972], [0.12, 0.89], [0.181, 0.712], [0.241, 0.423], [0.302, 0.182], [0.363, 0.061],
  [0.424, 0.012], [0.484, 0], [0.544, 0.021], [0.605, 0.084], [0.665, 0.215], [0.726, 0.437], [0.76, 0.54],
  [0.786, 0.64], [0.819, 0.76], [0.846, 0.84], [0.879, 0.925], [0.939, 0.988], [1, 1],
]

// Split: how far the first word is tracked out, by offset from the widest row, measured from the reference.
const SPLIT: readonly (readonly [number, number])[] = [
  [-459, 0], [-382, 0], [-329, 0.097], [-275, 0.257], [-221, 0.47], [-168, 0.697], [-114, 0.87], [-60, 0.97],
  [0, 1], [47, 0.98], [101, 0.9], [154, 0.73], [208, 0.49], [262, 0.25], [315, 0.075], [361, 0],
]

// Lattice word count over one 620 px period, measured from the reference (note the step from 3 to 5).
const LATTICE: readonly (readonly [number, number])[] = [
  [0, 7.3], [35, 6.5], [140, 5.5], [195, 4.5], [250, 3.4], [380, 3.3], [385, 5], [470, 5.3], [540, 5.6],
  [590, 6.5], [620, 7.3],
]

// Second dots phase: word count down the frame, by offset from the middle row.
const DOTS_B: readonly (readonly [number, number])[] = [
  [-440, 9.5], [-360, 10], [-250, 11], [-60, 11], [-25, 9], [25, 9], [60, 10.4], [200, 10.6], [250, 9.5],
  [300, 8.4], [340, 7.4], [400, 6.2], [440, 6],
]

const RECIPES: Record<WaveTypeScene, Recipe> = {
  // Blue: one phrase per row. Its letters bunch at the right, sweep across and bunch at the left, the
  // oscillation tighter mid-frame than at the top and bottom, so the field reads as one big S rolling down.
  wave: {
    palette: { background: BLUE, ink: ICE },
    length: 30 / 30,
    draw(e) {
      const chars = letters(e.phrase, false)
      e.setFont(19.5)
      rows(e.H, 13, 22.4, (y) => {
        const ph = wavePhase(y, e.t)
        waveRow(e, chars, y, ph, 0.23, 0.93, 62, 69, 650, 60)
      })
    },
  },
  // Cream and blue: the same wave in big type, its tail running off the right edge.
  swell: {
    palette: { background: CREAM, ink: BLUE_INK },
    length: 36 / 30,
    draw(e) {
      const chars = letters(e.phrase, false)
      e.setFont(31, 700)
      rows(e.H, 35, 38.3, (y) => {
        const ph = 0.5 + (y - 188 - 138 * (e.t - 0.033)) / 740
        const v = Math.cos(TAU * ph)
        const n1 = chars.length - 1
        const c = n1 * lerp(0.125, 1.1, clamp01(0.5 + 0.65 * Math.sign(v) * Math.pow(Math.abs(v), 0.6)))
        const Q = 0.95 + (v > 0 ? 0.6 : 0.45) * Math.pow(Math.abs(v), 1.5)
        const xA = 75 + 128 * (1 - v * v)
        // The tail runs far past the right edge mid-swing, which opens the big empty lens.
        clusterRow(e, chars, y, xA, xA + 700 + 150 * Math.max(0, v) + 1000 * (1 - v * v), c, Q)
      })
    },
  },
  // Green: a short word evenly spread; the span zigzags while the count steps, weaving diamonds.
  lattice: {
    palette: { background: GREEN, ink: MINT },
    length: 24 / 30,
    draw(e) {
      const word = firstWord(e.phrase)
      e.setFont(15)
      rows(e.H, 14, 27.3, (y) => {
        const x0 = 45 + 106 * tri((y - 150 - 131 * (e.t - 0.033)) / 287)
        const r = (((y - 268.5 - 75 * e.t) % 620) + 620) % 620
        const n = Math.max(1, Math.round(table(LATTICE, r) - 0.001))
        spreadWords(e, word, y, x0, e.W - x0, n)
      })
    },
  },
  // Black: a two letter word in six colours; sawtooth spans and one swelling band of words.
  confetti: {
    palette: { background: BLACK, ink: CONFETTI },
    length: 24 / 30,
    draw(e) {
      const word = firstWord(e.phrase)
      e.setFont(17.5)
      const p = 179 + 72 * e.t
      rows(e.H, 15, 25.6, (y, r) => {
        const x0 = 55 + 83 * fract((y - 72 * e.t) / 154)
        const d = y - p
        const f = 3 + 9 * bump(d, 115) + 2.3 * bump(d - 590, 130) + 9 * bump(d - 830, 115) + 9 * bump(d + 830, 115)
        const n = Math.max(2, Math.min(12, Math.round(f)))
        spreadWords(e, word, y, x0, e.W - x0, n, (j) => (((j + r * 5) % 6) + 6) % 6)
      })
    },
  },
  // Blue: a word repeated tightly into diamonds; a wave sweeps down the frame and tracks every row out wide.
  hourglass: {
    palette: { background: BLUE, ink: ICE },
    length: 31 / 30,
    draw(e) {
      const chars = letters(firstWord(e.phrase), false)
      const L = chars.length
      e.setFont(15)
      rows(e.H, 19, 25.3, (y) => {
        const K = 1 + Math.round(8 * tri((y - 60 * e.t) / 405 + 0.895))
        const n = K * L
        const v = Math.max(0, y) / 830
        const t0 = 0.1 + 0.12 * v * v
        const dur = 0.19 + 0.37 * Math.pow(v, 0.8)
        const open = clamp01((e.te - t0) / dur)
        // Wide rows reach about 580 px; rows with fewer repeats lag narrower at first, then catch up.
        const wide = Math.min(e.W - 140, 580 - ((9 - K) / 8) * 150 * clamp01(1 - (e.te - 0.55) / 0.5))
        const w = n > 1 ? lerp((n - 1) * 16.2, Math.max((n - 1) * 16.2, wide), open) : 0
        centredRow(e, Array.from({ length: n }, (_, i) => chars[i % L]), y, e.W / 2, w)
      })
    },
  },
  // Green: the first word against the rest of the phrase, each widening as the other tightens, then a camera
  // zoom cut into the top left.
  split: {
    palette: { background: GREEN, ink: MINT },
    length: 46 / 30,
    draw(e) {
      const words = e.phrase.toUpperCase().trim().split(/\s+/)
      const left = Array.from(words[0] || "TYPE")
      const right = Array.from((words.slice(1).join(" ") || "IN MOTION").replace(/\s+/g, " "))
      const nL = left.length
      const nR = right.length
      if (e.te >= 0.9) e.zoom(1.79, 17, 0)
      e.setFont(16.5)
      // After the zoom cut the field settles: the reference holds it almost still.
      const p = e.te < 0.9 ? 559 + 128 * (e.t - 0.1) : 624 + 30 * (e.t - (0.9 * e.t) / e.te)
      rows(e.H, 15, 27, (y) => {
        const g = table(SPLIT, ((((y - p + 459) % 820) + 820) % 820) - 459)
        const tl = nL > 1 ? (136 + 372 * g) / (nL - 1) : 0
        for (let i = 0; i < nL; i++) e.put(left[i], 30 + i * tl, y)
        const wr = lerp(468, 100, g)
        const tr = nR > 1 ? wr / (nR - 1) : 0
        for (let j = 0; j < nR; j++) e.put(right[j], 683 - (nR - 1 - j) * tr, y + 13.5)
      })
    },
  },
  // Cream and blue: a word on a stepped grid; one dense band of words with a lighter echo below.
  grid: {
    palette: { background: CREAM, ink: BLUE_INK },
    length: 26 / 30,
    draw(e) {
      const word = firstWord(e.phrase)
      e.setFont(14)
      const p = 292 + 66 * e.t
      rows(e.H, 15, 25.6, (y) => {
        const block = Math.floor((y - 166 * e.t) / 153.6 + 0.49)
        const x0 = (block & 1) === 0 ? 54 : 139
        const d = y - p
        const f = 3 + 11 * bump(d, 97) + 5 * bump(d - 447, 90) + 2.2 * bump(d + 260, 150)
        const n = Math.max(2, Math.min(14, Math.round(f)))
        spreadWords(e, word, y, x0, e.W - x0, n)
      })
    },
  },
  // Blue: the phrase with its word gaps, rippling out from the middle row; the middle swings over time while
  // the outer rows lag behind it, carving one large cavity.
  ripple: {
    palette: { background: BLUE, ink: ICE },
    length: 23 / 30,
    draw(e) {
      const chars = letters(e.phrase, true)
      e.setFont(18.5)
      const cy = e.H / 2
      rows(e.H, cy + 11.2, 22.4, (y) => {
        const d = Math.abs(y - cy)
        let i = 1
        while (i < RIPPLE.length - 1 && RIPPLE[i][0] < d) i++
        const [d0, b0, r0] = RIPPLE[i - 1]
        const [d1, b1, r1] = RIPPLE[i]
        const k = clamp01((d - d0) / (d1 - d0))
        const ph = lerp(b0, b1, k) + lerp(r0, r1, k) * (e.t - 0.4)
        waveRow(e, chars, y, ph, 0.2, 0.86, 55, 75, 660, 60)
      })
    },
  },
  // Pink: one centred phrase per row whose width traces a vase: lip, round bulb a third of the way down, neck,
  // then a long flaring foot. The vase rises and recedes as it plays.
  vase: {
    palette: { background: PINK, ink: BLUSH },
    length: 22 / 30,
    draw(e) {
      const chars = letters(e.phrase, true)
      const n = chars.length
      e.setFont(14.5)
      const natural = (n - 1) * 11.3
      const full = Math.min(557, e.W - 150)
      const s = Math.exp(-0.38 * Math.max(0, e.t - 0.033))
      rows(e.H, 7, 25.5, (y) => {
        const u = (y + 490) / s - 490
        centredRow(e, chars, y, e.W / 2, lerp(natural, Math.max(natural, full), table(VASE, u)))
      })
    },
  },
  // Cream and green: big type whose tracking swings around the last letter of the first word, so the rows lean
  // into a travelling S. The tail runs off the right edge, as in the reference.
  sway: {
    palette: { background: CREAM, ink: GREEN_INK },
    length: 28 / 30,
    draw(e) {
      const chars = letters(e.phrase, true)
      const w0 = firstWord(e.phrase).length
      const a = Math.max(1, Math.min(w0 - 1, chars.length - 1))
      e.setFont(36.5)
      rows(e.H, 12, 48.5, (y) => {
        const k = table(SWAY, fract((y - 204 + 530 * (e.t - 0.5)) / 800))
        // First letter x from tightness, then the step that keeps the anchor where the reference has it.
        const xA = 84 + 428 * k
        const T = (663 - xA) / (0.52 + a)
        const Y = 650 - 0.52 * (T - 25)
        for (let i = 0; i < chars.length; i++) e.put(chars[i], Y - (a - i) * T, y)
      })
    },
  },
  // Cream and red: a tiny word filling every row. The count opens an hourglass, then the spans fold into
  // diamonds of evenly spaced words.
  dots: {
    palette: { background: CREAM, ink: RED_INK },
    length: 41 / 30,
    draw(e) {
      const word = firstWord(e.phrase)
      e.setFont(16)
      const cy = e.H / 2
      const k = 1 - Math.exp(-Math.max(0, e.te - 0.067) / 0.28)
      const fold = clamp01((e.te - 0.87) / 0.22)
      const amp = 200 * clamp01((e.te - 0.87) / 0.28)
      rows(e.H, cy - 12 - Math.floor((cy - 15) / 23.3) * 23.3, 23.3, (y) => {
        const d = y - cy
        const nA = 1 + 2 * k + (8 + 8 * k) * Math.pow(Math.min(1, Math.abs(d) / 431), 0.85)
        const nB = table(DOTS_B, d)
        const n = Math.max(1, Math.round(lerp(nA, nB, fold)))
        const x0 = 44 + amp * tri(Math.abs(d) / 607)
        spreadWords(e, word, y, x0, e.W - x0, n)
      })
    },
  },
  // Green: an endless stream of the phrase. In each band of rows the letters crowd into one narrow dense knot
  // (squeezed where they touch) and fall away to a single wide gap, at a medium pitch in between; the knot
  // drifts along U and arch curves and jumps sides from band to band, so the channel snakes down the frame.
  flow: {
    palette: { background: GREEN, ink: MINT },
    length: 45 / 30,
    draw(e) {
      const stream = letters(e.phrase + " ", true)
      const Ls = stream.length
      const a = 30
      const lam = 800
      const N = 160
      const cum = new Float64Array(N + 1)
      const dens = new Float64Array(N)
      e.setFont(19)
      const yc = 28 - 23 * e.t
      const shift = 12 * e.t
      rows(e.H, 11, 23.3, (y) => {
        const C = Math.cos((TAU * (y - yc)) / 675)
        const f = Math.pow(Math.abs(C), 0.3)
        // Sparsest point of the row, on a U in bands where C > 0 and an arch where C < 0.
        const xs = C >= 0 ? 447 + 200 * (1 - C) : 270 - 170 * (1 + C)
        // Letter density over one period: a steep walled hole at 0 and a narrow knot 264 px to its left in
        // U bands, 206 px to its right in arch bands.
        const kf = C >= 0 ? 1 - 264 / lam : 206 / lam
        for (let i = 0; i < N; i++) {
          const th = (i + 0.5) / N
          const dk = Math.min(Math.abs(th - kf), 1 - Math.abs(th - kf)) * TAU
          const dh = (Math.min(th, 1 - th) * TAU) / 1.05
          dens[i] = 1 + f * (4.5 * Math.exp(-(dk / 0.32) * (dk / 0.32)) - 0.95 * Math.exp(-dh * dh * dh * dh))
          cum[i + 1] = cum[i] + dens[i]
        }
        const total = cum[N]
        const j0 = Math.floor((-80 - xs - lam - shift) / a)
        const j1 = Math.ceil((e.W + 80 - xs + lam - shift) / a)
        let lo = 0
        let lastK = NaN
        for (let j = j0; j <= j1; j++) {
          const u = j * a + shift
          const k = Math.floor(u / lam)
          if (k !== lastK) {
            lo = 0
            lastK = k
          }
          const r = ((u - k * lam) / lam) * total
          while (lo < N - 1 && cum[lo + 1] <= r) lo++
          const x = xs + k * lam + (lam * (lo + (r - cum[lo]) / dens[lo])) / N
          if (x < -40 || x > e.W + 40) continue
          const ch = stream[((j % Ls) + Ls) % Ls]
          if (ch === " ") continue
          const gap = (a * total) / N / dens[lo]
          e.put(ch, x, y, 0, Math.min(1, (gap * 0.85) / e.advance(ch)))
        }
      })
    },
  },
}

const DEFAULT_SCENES: WaveTypeScene[] = [
  "wave", "swell", "lattice", "confetti", "hourglass", "split", "grid", "ripple", "vase", "sway", "dots", "flow",
]
const DEFAULT_PHRASES = [
  "ART OF TYPE", "ART OF TYPE", "ART", "OF", "TYPE", "TYPOGRAPHY IN MOTION", "ART", "ART OF TYPE", "LOUIS STUDIOS",
  "MOTION IS FUN", "OO", "TYPE IN MOTION",
]
const EMPTY: WaveTypePalette[] = []

/** Scene order and lengths: each scene plays for sceneDuration, or for its reference length when that is 0. */
function timeline(scenes: WaveTypeScene[], sceneDuration: number) {
  const list = scenes.length ? scenes : DEFAULT_SCENES
  const dur = list.map((sc) => (sceneDuration > 0 ? Math.max(0.2, sceneDuration) : (RECIPES[sc] || RECIPES.wave).length))
  return { list, dur, total: dur.reduce((a, b) => a + b, 0) }
}

export function WaveType({
  phrases = DEFAULT_PHRASES,
  scenes = DEFAULT_SCENES,
  palettes = EMPTY,
  speed = 1,
  sceneDuration = 0,
  font = DEFAULT_FONT,
  interactive = true,
  className,
  style,
}: WaveTypeProps) {
  const hostRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const live = React.useRef({ phrases, scenes, palettes, speed, sceneDuration, font, interactive })
  live.current = { phrases, scenes, palettes, speed, sceneDuration, font, interactive }
  const redrawRef = React.useRef<() => void>(() => {})

  React.useEffect(() => {
    const host = hostRef.current
    const canvas = canvasRef.current
    if (!host || !canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = typeof matchMedia === "function" ? matchMedia("(prefers-reduced-motion: reduce)") : null
    let cssW = 1
    let cssH = 1
    let dpr = 1
    let raf = 0
    let visible = true
    let onScreen = true
    // Scene clock: playback time in seconds (speed applied), advanced from frame deltas.
    let clock = 0
    let last = -1
    let skip = 0
    // Pointer in design units, with a presence that eases in and out.
    const ptr = { x: 0, y: 0, on: false, k: 0 }

    const resize = () => {
      const r = host.getBoundingClientRect()
      cssW = Math.max(1, r.width)
      cssH = Math.max(1, r.height)
      dpr = Math.min(window.devicePixelRatio || 1, 2.5)
      canvas.width = Math.round(cssW * dpr)
      canvas.height = Math.round(cssH * dpr)
    }

    const draw = () => {
      const p = live.current
      const tm = timeline(p.scenes, p.sceneDuration)
      const still = reduced?.matches || p.speed === 0
      let k = 0
      let ts = 0
      if (still) {
        k = skip % tm.list.length
        ts = tm.dur[k] * 0.45
      } else {
        let tl = ((clock % tm.total) + tm.total) % tm.total
        while (k < tm.list.length - 1 && tl > tm.dur[k] + 1e-6) {
          tl -= tm.dur[k]
          k++
        }
        ts = tl
      }
      const recipe = RECIPES[tm.list[k]] || RECIPES.wave
      const phraseList = p.phrases.length ? p.phrases : DEFAULT_PHRASES
      const phrase = phraseList[k % phraseList.length] || "TYPE"
      const pal = (p.palettes.length && p.palettes[k % p.palettes.length]) || recipe.palette
      const inks = Array.isArray(pal.ink) ? pal.ink : [pal.ink]

      const s = Math.min(cssW, cssH) / DESIGN
      const W = cssW / s
      const H = cssH / s
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.fillStyle = pal.background
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.setTransform(dpr * s, 0, 0, dpr * s, 0, 0)
      ctx.textAlign = "center"
      ctx.textBaseline = "alphabetic"
      ctx.fillStyle = inks[0]
      let ink = 0
      let capShift = 0
      let z = 1
      let zx = 0
      let zy = 0
      const bendR = 170
      const bend = ptr.k * 1.2
      const put: Put = (ch, x, y, i = 0, squeeze = 1) => {
        if (ch === " ") return
        // Screen position of the glyph, for culling and the pointer bend.
        let sx = zx + (x - zx) * z
        const sy = zy + (y - zy) * z
        if (sy < -60 || sy > H + 60) return
        if (bend > 0.001) {
          const dx = sx - ptr.x
          const dy = sy - ptr.y
          const g = Math.exp(-(dx * dx + dy * dy) / (bendR * bendR))
          sx += dx * bend * g
        }
        if (sx < -120 || sx > W + 120) return
        const c = i % inks.length
        if (c !== ink) {
          ink = c
          ctx.fillStyle = inks[c]
        }
        if (squeeze < 0.999) {
          const m = dpr * s
          ctx.setTransform(m * squeeze, 0, 0, m, m * sx, 0)
          ctx.fillText(ch, 0, sy + capShift)
          ctx.setTransform(m, 0, 0, m, 0, 0)
        } else ctx.fillText(ch, sx, sy + capShift)
      }
      let size = 16
      const env: Env = {
        W,
        H,
        t: ts,
        te: (ts * recipe.length) / tm.dur[k],
        phrase,
        advance: (ch) => ctx.measureText(ch).width / z,
        put,
        setFont: (px, weight = 500) => {
          size = px * z
          capShift = (size * CAP) / 2
          ctx.font = `${weight} ${size}px ${p.font}`
        },
        zoom: (zz, ox, oy) => {
          z = zz
          zx = ox
          zy = oy
        },
      }
      recipe.draw(env)
    }
    redrawRef.current = draw

    const loop = (now: number) => {
      raf = 0
      const p = live.current
      if (last >= 0) clock += (Math.min(0.1, Math.max(0, (now - last) / 1000))) * p.speed
      last = now
      const target = ptr.on && p.interactive ? 1 : 0
      ptr.k += (target - ptr.k) * 0.12
      if (Math.abs(target - ptr.k) < 0.002) ptr.k = target
      draw()
      schedule()
    }
    const schedule = () => {
      if (raf || !visible || !onScreen) return
      const p = live.current
      const still = reduced?.matches || p.speed === 0
      if (still && ptr.k === (ptr.on && p.interactive ? 1 : 0)) {
        last = -1
        return
      }
      raf = requestAnimationFrame(loop)
    }

    resize()
    draw()
    schedule()

    const ro = new ResizeObserver(() => {
      resize()
      draw()
    })
    ro.observe(host)
    const io =
      typeof IntersectionObserver === "function"
        ? new IntersectionObserver((en) => {
            onScreen = en.some((x) => x.isIntersecting)
            last = -1
            schedule()
          })
        : null
    io?.observe(host)
    const onVis = () => {
      visible = document.visibilityState !== "hidden"
      last = -1
      schedule()
    }
    document.addEventListener("visibilitychange", onVis)
    const onMotion = () => {
      draw()
      schedule()
    }
    reduced?.addEventListener?.("change", onMotion)
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts
    fonts?.ready.then(() => draw()).catch(() => {})

    const toDesign = (ev: PointerEvent) => {
      const r = host.getBoundingClientRect()
      const s = Math.min(r.width, r.height) / DESIGN
      ptr.x = (ev.clientX - r.left) / s
      ptr.y = (ev.clientY - r.top) / s
    }
    const onMove = (ev: PointerEvent) => {
      if (!live.current.interactive) return
      toDesign(ev)
      ptr.on = true
      schedule()
    }
    const onLeave = () => {
      ptr.on = false
      schedule()
    }
    const onClick = () => {
      if (!live.current.interactive) return
      // Jump to the start of the next scene.
      const p = live.current
      const tm = timeline(p.scenes, p.sceneDuration)
      const still = reduced?.matches || p.speed === 0
      if (still) skip++
      else {
        // Jump to the start of the next scene.
        const tl = ((clock % tm.total) + tm.total) % tm.total
        let end = 0
        for (const d of tm.dur) {
          end += d
          if (tl <= end + 1e-6) break
        }
        clock = end % tm.total
      }
      draw()
      schedule()
    }
    host.addEventListener("pointermove", onMove)
    host.addEventListener("pointerdown", onMove)
    host.addEventListener("pointerleave", onLeave)
    host.addEventListener("pointercancel", onLeave)
    host.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io?.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      reduced?.removeEventListener?.("change", onMotion)
      host.removeEventListener("pointermove", onMove)
      host.removeEventListener("pointerdown", onMove)
      host.removeEventListener("pointerleave", onLeave)
      host.removeEventListener("pointercancel", onLeave)
      host.removeEventListener("click", onClick)
      redrawRef.current = () => {}
    }
  }, [])

  // Redraw at once when props change, so a held still frame follows them too.
  React.useEffect(() => {
    redrawRef.current()
  }, [phrases, scenes, palettes, speed, sceneDuration, font, interactive])

  const label = (phrases.length ? phrases : DEFAULT_PHRASES).join(", ")
  return (
    <div
      ref={hostRef}
      role="img"
      aria-label={label}
      className={className}
      style={{ position: "relative", overflow: "hidden", touchAction: "pan-y", ...style }}
    >
      <canvas ref={canvasRef} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
    </div>
  )
}

export default WaveType
