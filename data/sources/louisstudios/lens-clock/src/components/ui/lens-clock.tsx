"use client"

import * as React from "react"

/**
 * A pose for the three hands, for product shots and seamless loops.
 * Fractional values are allowed. The hour hand follows `hours` plus `minutes / 60`,
 * the minute hand follows `minutes` only and the second hand follows `seconds` only.
 */
export interface LensClockPose {
  /** Hour on a 12 or 24 hour clock, for example 10 or 22. */
  hours: number
  /** Minutes, 0 to 60. Fractions move the minute hand between marks. */
  minutes: number
  /** Seconds, 0 to 60. Fractions move the second hand between marks. */
  seconds: number
  /** Date shown in the date pill. Defaults to today. */
  date?: Date
}

export interface LensClockProps {
  /**
   * Width and height of the clock in CSS pixels. The dial fills about 93% of this box;
   * the rest is room for the soft rim glow. Default 360.
   */
  size?: number
  /**
   * Freeze the clock. Pass a `Date` to show that moment, or a `LensClockPose` to set each
   * hand directly. Leave it out for a live clock that follows the real time.
   */
  time?: Date | LensClockPose
  /**
   * IANA time zone used for the hands and the date pill, for example "Europe/Oslo" or
   * "America/New_York". Defaults to the viewer's local time zone.
   */
  timeZone?: string
  /**
   * When true the second hand glides continuously. When false (the default) it ticks once
   * a second with a short, springy step.
   */
  sweep?: boolean
  /**
   * Strength of the fisheye lens from 0 (flat dial) to 1 (the full bulge, the default).
   * Values in between keep the rim fixed and relax the bend toward the centre.
   */
  lens?: number
  /** Show the date pill under the centre, for example "Thu Jun 12". Default true. */
  showDate?: boolean
  /** Colour of the second hand, its pivot ring and the hour hand inset. Any CSS colour. Default "#f22a0c". */
  accent?: string
  /** Colour of the numerals, the hour and minute hands and the date pill. Any CSS colour. Default "#fbf7eb". */
  ink?: string
  /**
   * When true (the default) the lens magnifies toward the pointer, so the numerals near the
   * cursor swell. Turned off automatically for people who prefer reduced motion.
   */
  interactive?: boolean
  /**
   * Accessible name for the clock. By default the clock announces the time it shows,
   * for example "12:05, Thu Jun 12".
   */
  label?: string
  /** Class name for the outer element, which is a square `size` box. */
  className?: string
  /** Inline styles for the outer element. */
  style?: React.CSSProperties
}

/* ------------------------------------------------------------------------------------------ */
/* Dial artwork. Numerals are thick rounded monoline strokes drawn on a flat dial, in units of */
/* 1/1000 of the dial radius, origin at the centre, y down. Each stroke is a chain of cubic    */
/* Bezier segments (p: x0,y0, c1, c2, x1,y1, c1, c2, x2,y2, ...) with a width at each anchor.  */
/* The parts that hang past the rim are cut by the lens, as on the reference.                 */
/* ------------------------------------------------------------------------------------------ */

type Stroke = { p: number[]; w: number[] }

// prettier-ignore
const NUMERALS: Stroke[] = [
  // 1
  { p: [-356, -1300, -356, -1000, -356, -700, -356, -442], w: [112, 112] },
  // 2
  { p: [-138, -863, -67, -971, 35, -1007, 156, -996, 252, -996, 391, -872, 343, -805, 317, -737, 129, -626, -150, -440], w: [93, 104, 89, 67] },
  { p: [-165, -437, 21, -437, 208, -437, 394, -437], w: [62, 62] },
  // 9
  { p: [-1130, -120, -1130, -269, -1029, -357, -952, -340, -755, -344, -639, -211, -605, -168, -597, -8, -728, 91, -888, 114, -1110, 148, -1175, 31, -1130, -120], w: [105, 86, 141, 78, 123] },
  { p: [-605, -168, -546, 118, -545, 90, -593, 165, -651, 256, -659, 314, -748, 369, -923, 477, -1047, 399, -1103, 397], w: [141, 140, 112, 30] },
  // 3
  { p: [556, -293, 635, -424, 812, -441, 916, -458], w: [145, 81] },
  { p: [783, -38, 811, -37, 896, -40, 1059, -34], w: [97, 95] },
  { p: [526, 253, 617, 363, 722, 390, 884, 402], w: [141, 92] },
  // 6
  { p: [426, 574, 321, 465, 147, 428, 62, 424, -282, 421, -444, 555, -494, 781, -500, 919, -522, 1084, -579, 1250], w: [153, 104, 190, 122] },
  { p: [-503, 1262, -500, 940, -261, 790, 11, 791, 311, 788, 580, 966, 552, 1255], w: [102, 108, 183] },
]

/** Diagonal ticks, degrees clockwise from 12, as measured on the reference. */
const TICKS = [43.7, 136.5, 229.3, 310.6]

/* Hand geometry, in dial radii. */
const HAND = {
  hour: { r0: 0.056, r1: 0.546, w: 0.09, i0: 0.293, i1: 0.526, iw: 0.041 },
  minute: { r0: 0.063, r1: 0.944, w: 0.081, s0: 0.445, s1: 0.919, sw: 0.045 },
  second: { tail: 0.07, tip: 1.0, w: 0.021, tw: 0.023, ring: 0.03, hole: 0.0168 },
}

/** Dial radius as a share of the box. The rest is room for the outer rim glow. */
const DIAL = 0.467

/* ------------------------------------------------------------------------------------------ */

function cubic(a: number, b: number, c: number, d: number, t: number) {
  const u = 1 - t
  return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d
}

/** Paints the flat dial into a square canvas: numerals in red, ticks in green (channels). */
function paintSource(canvas: HTMLCanvasElement, n: number) {
  canvas.width = n
  canvas.height = n
  const ctx = canvas.getContext("2d")!
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.globalCompositeOperation = "source-over"
  ctx.fillStyle = "#000"
  ctx.fillRect(0, 0, n, n)
  const k = n / 2000
  ctx.setTransform(k, 0, 0, k, n / 2, n / 2)
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  ctx.strokeStyle = "#f00"
  const STEPS = 48
  for (const s of NUMERALS) {
    const segs = (s.p.length - 2) / 6
    for (let i = 0; i < segs; i++) {
      const o = i * 6
      const [x0, y0, x1, y1, x2, y2, x3, y3] = s.p.slice(o, o + 8)
      const w0 = s.w[Math.min(i, s.w.length - 1)]
      const w1 = s.w[Math.min(i + 1, s.w.length - 1)]
      let px = x0
      let py = y0
      for (let j = 1; j <= STEPS; j++) {
        const t = j / STEPS
        const x = cubic(x0, x1, x2, x3, t)
        const y = cubic(y0, y1, y2, y3, t)
        ctx.lineWidth = w0 + (w1 - w0) * (t - 0.5 / STEPS)
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(x, y)
        ctx.stroke()
        px = x
        py = y
      }
    }
  }
  // Ticks: slim wedges from 0.81 to the rim, slightly wider at the rim.
  ctx.globalCompositeOperation = "lighter"
  ctx.fillStyle = "#0f0"
  for (const a of TICKS) {
    const t = (a * Math.PI) / 180
    const dx = Math.sin(t)
    const dy = -Math.cos(t)
    const nx = -dy
    const ny = dx
    const r0 = 812
    const r1 = 1010
    const h0 = 2.6
    const h1 = 5.5
    ctx.beginPath()
    ctx.moveTo(dx * r0 + nx * h0, dy * r0 + ny * h0)
    ctx.lineTo(dx * r1 + nx * h1, dy * r1 + ny * h1)
    ctx.lineTo(dx * r1 - nx * h1, dy * r1 - ny * h1)
    ctx.lineTo(dx * r0 - nx * h0, dy * r0 - ny * h0)
    ctx.closePath()
    ctx.fill()
  }
  ctx.globalCompositeOperation = "source-over"
  ctx.setTransform(1, 0, 0, 1, 0, 0)
}

/* ------------------------------------------------------------------------------------------ */
/* Lens shader. Every display pixel p (in dial radii) is mapped back onto the flat dial with   */
/* sigma = sin(rho * a) / sin(a): the centre shrinks and the rim is stretched without limit,   */
/* so numerals swell and run off the edge. The rim is softened with a widening blur.          */
/* ------------------------------------------------------------------------------------------ */

const VERT = `attribute vec2 aPos;void main(){gl_Position=vec4(aPos,0.0,1.0);}`

const FRAG = `
precision highp float;
uniform sampler2D uTex;
uniform vec2 uRes;
uniform float uScale;
uniform float uA;
uniform vec3 uHover;
uniform vec3 uInk;
uniform float uTexN;
const float PI = 3.14159265;

vec2 toSrc(vec2 p) {
  vec2 d = p - uHover.xy;
  p -= d * uHover.z * exp(-dot(d, d) * 4.9);
  float r = length(p);
  float rc = min(r, 1.0);
  float s = uA > 0.001 ? sin(rc * uA) / sin(uA) : rc;
  return r > 1e-6 ? p * (s / r) : p;
}

float wrapd(float a, float c) { return mod(a - c + PI, 2.0 * PI) - PI; }

void main() {
  vec2 fc = gl_FragCoord.xy;
  vec2 p = vec2(fc.x - uRes.x * 0.5, uRes.y * 0.5 - fc.y) / uScale;
  float rho = length(p);
  if (rho > 1.12) { gl_FragColor = vec4(0.0); return; }

  // Depth-of-field toward the rim: a Vogel disc of taps, each pre-blurred through the mip chain.
  float t = clamp((rho - 0.76) / 0.23, 0.0, 1.0);
  float sig = 0.0003 + 0.016 * pow(t, 1.8);
  float bias = log2(max(1.0, sig * uTexN * 0.18));
  vec2 ink = vec2(0.0);
  float ws = 0.0;
  for (int i = 0; i < 16; i++) {
    float fi = float(i);
    float rr = sqrt((fi + 0.5) / 16.0) * 2.2;
    float th = fi * 2.39996;
    float w = exp(-0.5 * rr * rr);
    ink += texture2D(uTex, toSrc(p + vec2(cos(th), sin(th)) * rr * sig) * 0.5 + 0.5, bias).rg * w;
    ws += w;
  }
  ink /= ws;

  // Dial: black with a soft lift low in the middle, a darker vignette and a faint glass ring.
  float x = rho - 0.62;
  float k = 0.5 * (x + sqrt(x * x + 0.003));
  float base = 0.141 * exp(-4.6 * k);
  vec2 g = (p - vec2(0.0, 0.54)) / vec2(0.345, 0.235);
  float lift = 0.30 * exp(-0.5 * dot(g, g));
  float ring = 0.1 * exp(-0.5 * pow((rho - 0.986) / 0.014, 2.0));
  vec3 c = vec3(base + lift + ring);
  c = mix(c, uInk * 0.74, clamp(ink.g, 0.0, 1.0));
  c = mix(c, uInk, clamp(ink.r, 0.0, 1.0));
  float es = max(sig, 0.004);
  float inside = 1.0 - smoothstep(1.009 - 1.8 * es, 1.009 + 1.8 * es, rho);
  vec4 col = vec4(c * inside, inside);

  // Light caught by the glass: a glow off the lower right rim and a haze inside the upper left.
  float ang = atan(p.x, -p.y);
  float dA = wrapd(ang, radians(145.0)) / radians(18.0);
  float lobeA = exp(-0.5 * dA * dA) * smoothstep(0.962, 0.995, rho) * (1.0 - smoothstep(0.995, 1.095, rho)) * 0.5;
  float dB = wrapd(ang, radians(328.0)) / radians(22.0);
  float lobeB = exp(-0.5 * dB * dB) * pow(smoothstep(0.82, 0.975, rho), 1.5) * (1.0 - smoothstep(0.975, 1.03, rho)) * 0.4;
  float L = lobeA + lobeB;
  col.rgb = col.rgb + L * (1.0 - col.rgb);
  col.a = col.a + L * (1.0 - col.a);
  gl_FragColor = col;
}
`

type GL = {
  gl: WebGLRenderingContext
  prog: WebGLProgram
  tex: WebGLTexture
  u: Record<string, WebGLUniformLocation | null>
}

function initGL(canvas: HTMLCanvasElement, source: HTMLCanvasElement): GL | null {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false }) as WebGLRenderingContext | null
  if (!gl) return null
  const sh = (type: number, src: string) => {
    const s = gl.createShader(type)!
    gl.shaderSource(s, src)
    gl.compileShader(s)
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn("LensClock shader:", gl.getShaderInfoLog(s))
      return null
    }
    return s
  }
  const vs = sh(gl.VERTEX_SHADER, VERT)
  const fs = sh(gl.FRAGMENT_SHADER, FRAG)
  if (!vs || !fs) return null
  const prog = gl.createProgram()!
  gl.attachShader(prog, vs)
  gl.attachShader(prog, fs)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null
  gl.useProgram(prog)
  const buf = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buf)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, "aPos")
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
  const tex = gl.createTexture()!
  gl.bindTexture(gl.TEXTURE_2D, tex)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source)
  gl.generateMipmap(gl.TEXTURE_2D)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  const u: GL["u"] = {}
  for (const n of ["uTex", "uRes", "uScale", "uA", "uHover", "uInk", "uTexN"]) u[n] = gl.getUniformLocation(prog, n)
  gl.uniform1i(u.uTex, 0)
  return { gl, prog, tex, u }
}

/* CPU fallback: the same lens, rendered once at a modest resolution, without the rim blur. */
function paintFallback(canvas: HTMLCanvasElement, source: HTMLCanvasElement, a: number, ink: number[]) {
  const W = canvas.width
  const n = Math.min(W, 560)
  const sc = source.width
  const src = source.getContext("2d")!.getImageData(0, 0, sc, sc).data
  const off = document.createElement("canvas")
  off.width = n
  off.height = n
  const octx = off.getContext("2d")!
  const img = octx.createImageData(n, n)
  const d = img.data
  const scale = n * DIAL
  const sm = (e0: number, e1: number, x: number) => {
    const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)))
    return t * t * (3 - 2 * t)
  }
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const px = (x + 0.5 - n / 2) / scale
      const py = (y + 0.5 - n / 2) / scale
      const rho = Math.hypot(px, py)
      const i = (y * n + x) * 4
      const inside = 1 - sm(0.985, 1.015, rho)
      let r = 0
      let g = 0
      if (inside > 0) {
        const rc = Math.min(rho, 1)
        const s = a > 0.001 ? Math.sin(rc * a) / Math.sin(a) : rc
        const k = rho > 1e-6 ? s / rho : 1
        const u = Math.min(sc - 1, Math.max(0, Math.floor((px * k * 0.5 + 0.5) * sc)))
        const v = Math.min(sc - 1, Math.max(0, Math.floor((py * k * 0.5 + 0.5) * sc)))
        const j = (v * sc + u) * 4
        r = src[j] / 255
        g = src[j + 1] / 255
      }
      const xx = rho - 0.62
      const kk = 0.5 * (xx + Math.sqrt(xx * xx + 0.003))
      const gx = px / 0.345
      const gy = (py - 0.54) / 0.235
      const bgv = 0.141 * Math.exp(-4.6 * kk) + 0.3 * Math.exp(-0.5 * (gx * gx + gy * gy))
      for (let c = 0; c < 3; c++) {
        let v = bgv + (ink[c] * 0.74 - bgv) * g
        v = v + (ink[c] - v) * r
        d[i + c] = Math.round(v * inside * 255)
      }
      d[i + 3] = Math.round(inside * 255)
    }
  }
  octx.putImageData(img, 0, 0)
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, W, W)
  ctx.imageSmoothingEnabled = true
  ctx.drawImage(off, 0, 0, W, W)
}

/* ------------------------------------------------------------------------------------------ */

function parseColor(c: string): [number, number, number] {
  if (typeof document === "undefined") return [1, 1, 1]
  const ctx = document.createElement("canvas").getContext("2d")!
  ctx.fillStyle = "#000"
  ctx.fillStyle = c
  const v = ctx.fillStyle as string
  if (v.startsWith("#")) {
    const n = parseInt(v.slice(1), 16)
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
  }
  const m = v.match(/[\d.]+/g)
  return m ? [+m[0] / 255, +m[1] / 255, +m[2] / 255] : [1, 1, 1]
}

const css = (c: number[], k = 1) => `rgb(${c.map((v) => Math.round(v * k * 255)).join(",")})`

type Parts = { h: number; m: number; s: number; date: string; key: number }

const fmtCache = new Map<string, Intl.DateTimeFormat>()
function formatter(tz?: string) {
  const k = tz || ""
  let f = fmtCache.get(k)
  if (!f) {
    try {
      f = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hourCycle: "h23",
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
    } catch {
      f = new Intl.DateTimeFormat("en-US", { hourCycle: "h23", weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })
    }
    fmtCache.set(k, f)
  }
  return f
}

function partsAt(ms: number, tz?: string): Parts {
  const p: Record<string, string> = {}
  for (const x of formatter(tz).formatToParts(new Date(ms))) p[x.type] = x.value
  return { h: +p.hour % 24, m: +p.minute, s: +p.second, date: `${p.weekday} ${p.month} ${p.day}`, key: Math.floor(ms / 1000) }
}

function easeOutBack(t: number) {
  const c1 = 1.9
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

const pad = (n: number) => String(n).padStart(2, "0")

/* ------------------------------------------------------------------------------------------ */

/**
 * LensClock: a live analog clock seen through a fisheye lens. Huge cream numerals bend and
 * swell toward the rim, the bulge breathes slowly and magnifies toward the pointer, and the
 * hands, shadows and date pill sit crisp on top.
 */
export function LensClock({
  size = 360,
  time,
  timeZone,
  sweep = false,
  lens = 1,
  showDate = true,
  accent = "#f22a0c",
  ink = "#fbf7eb",
  interactive = true,
  label,
  className,
  style,
}: LensClockProps) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const glRef = React.useRef<HTMLCanvasElement>(null)
  const handsRef = React.useRef<HTMLCanvasElement>(null)
  const kickRef = React.useRef<(() => void) | null>(null)
  const [dateText, setDateText] = React.useState("")
  const [timeText, setTimeText] = React.useState("")

  // Latest props for the render loop, without restarting it.
  const live = React.useRef({ time, timeZone, sweep, lens, accent, ink, interactive })
  live.current = { time, timeZone, sweep, lens, accent, ink, interactive }

  React.useEffect(() => {
    const root = rootRef.current
    const glCanvas = glRef.current
    const handsCanvas = handsRef.current
    if (!root || !glCanvas || !handsCanvas) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    let reduced = !!reduce?.matches
    const onReduce = () => (reduced = !!reduce?.matches)
    reduce?.addEventListener?.("change", onReduce)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const W = Math.max(2, Math.round(size * dpr))
    glCanvas.width = W
    glCanvas.height = W
    handsCanvas.width = W
    handsCanvas.height = W
    const R = W * DIAL

    // Flat dial texture, power of two for mipmaps.
    const want = Math.min(2048, Math.max(512, 2 * R * 1.2))
    const texN = Math.pow(2, Math.ceil(Math.log2(want)))
    const source = document.createElement("canvas")
    paintSource(source, texN)

    let gl = initGL(glCanvas, source)
    let fallbackKey = ""

    const onLost = (e: Event) => {
      e.preventDefault()
      gl = null
    }
    const onRestored = () => {
      gl = initGL(glCanvas, source)
    }
    glCanvas.addEventListener("webglcontextlost", onLost)
    glCanvas.addEventListener("webglcontextrestored", onRestored)

    const hctx = handsCanvas.getContext("2d")!

    // Pointer magnifier.
    const hover = { x: 0, y: 0, tx: 0, ty: 0, k: 0, tk: 0 }
    const onMove = (e: PointerEvent) => {
      if (!live.current.interactive || reduced) return
      const r = root.getBoundingClientRect()
      const scale = r.width * DIAL
      let x = (e.clientX - r.left - r.width / 2) / scale
      let y = (e.clientY - r.top - r.height / 2) / scale
      const l = Math.hypot(x, y)
      if (l > 0.98) {
        x *= 0.98 / l
        y *= 0.98 / l
      }
      if (hover.tk === 0 && hover.k < 0.01) {
        hover.x = x
        hover.y = y
      }
      hover.tx = x
      hover.ty = y
      hover.tk = l < 1.1 ? 1 : 0
    }
    const onLeave = () => (hover.tk = 0)
    root.addEventListener("pointermove", onMove)
    root.addEventListener("pointerleave", onLeave)

    let visible = true
    let pageVisible = document.visibilityState !== "hidden"
    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver((es) => {
            visible = es.some((e) => e.isIntersecting)
            if (visible) kick()
          })
        : null
    io?.observe(root)
    const onVis = () => {
      pageVisible = document.visibilityState !== "hidden"
      if (pageVisible) kick()
    }
    document.addEventListener("visibilitychange", onVis)

    let raf = 0
    let last = 0
    let parts: Parts | null = null
    let shownDate = ""
    let shownTime = ""
    let colorKey = ""
    let inkC: [number, number, number] = [1, 1, 1]
    let accC: [number, number, number] = [1, 0, 0]
    const t0 = performance.now()

    const frame = (now: number) => {
      raf = 0
      if (!visible || !pageVisible) return
      const P = live.current
      const dt = Math.min(0.1, Math.max(0, (now - (last || now)) / 1000))
      last = now

      const ck = P.ink + "|" + P.accent
      if (ck !== colorKey) {
        colorKey = ck
        inkC = parseColor(P.ink)
        accC = parseColor(P.accent)
        fallbackKey = ""
      }

      // Time.
      let hA: number
      let mA: number
      let sA: number
      let date: string
      let hh: number
      let mm: number
      const T = P.time
      if (T && !(T instanceof Date)) {
        hh = T.hours
        mm = T.minutes
        hA = ((((T.hours % 12) + 12) % 12) + T.minutes / 60) * 30
        mA = T.minutes * 6
        sA = T.seconds * 6
        date = partsAt((T.date ?? new Date()).getTime(), P.timeZone).date
      } else {
        const ms = T instanceof Date ? T.getTime() : Date.now()
        const key = Math.floor(ms / 1000)
        if (!parts || parts.key !== key) parts = partsAt(ms, P.timeZone)
        const frac = (((ms % 1000) + 1000) % 1000) / 1000
        let sec: number
        if (P.sweep && !reduced) sec = parts.s + frac
        else if (reduced || T instanceof Date) sec = parts.s
        else {
          const e = Math.min(1, (frac * 1000) / 170)
          sec = parts.s - 1 + easeOutBack(e)
        }
        const minutes = parts.m + (parts.s + frac) / 60
        hA = ((parts.h % 12) + minutes / 60) * 30
        mA = minutes * 6
        sA = sec * 6
        date = parts.date
        hh = parts.h
        mm = parts.m
      }
      const tt = `${pad(Math.floor(((hh % 24) + 24) % 24))}:${pad(Math.floor(mm) % 60)}`
      if (date !== shownDate) {
        shownDate = date
        setDateText(date)
      }
      if (tt !== shownTime) {
        shownTime = tt
        setTimeText(tt)
      }

      // Lens: a gentle breath, plus the pointer magnifier.
      const lensK = Math.min(1, Math.max(0, P.lens))
      const breath = reduced ? 0 : 0.5 - 0.5 * Math.cos(((now - t0) / 1000) * ((2 * Math.PI) / 5))
      const a = lensK * (Math.PI / 2) * (1 - 0.03 * breath)
      const tk = P.interactive && !reduced ? hover.tk : 0
      const ease = 1 - Math.exp(-dt * 7)
      hover.k += (tk - hover.k) * ease
      hover.x += (hover.tx - hover.x) * (1 - Math.exp(-dt * 10))
      hover.y += (hover.ty - hover.y) * (1 - Math.exp(-dt * 10))

      if (gl) {
        const g = gl.gl
        g.viewport(0, 0, W, W)
        g.clearColor(0, 0, 0, 0)
        g.clear(g.COLOR_BUFFER_BIT)
        g.uniform2f(gl.u.uRes, W, W)
        g.uniform1f(gl.u.uScale, R)
        g.uniform1f(gl.u.uA, a)
        g.uniform3f(gl.u.uHover, hover.x, hover.y, 0.3 * hover.k)
        g.uniform3f(gl.u.uInk, inkC[0], inkC[1], inkC[2])
        g.uniform1f(gl.u.uTexN, texN)
        g.drawArrays(g.TRIANGLES, 0, 3)
      } else {
        const fk = `${W}|${lensK}|${ck}`
        if (fk !== fallbackKey) {
          fallbackKey = fk
          paintFallback(glCanvas, source, lensK * (Math.PI / 2), inkC)
        }
      }

      drawHands(hctx, W, R, hA, mA, sA, inkC, accC)

      const animating = !(T && reduced) || hover.k > 0.001 || Math.abs(hover.k - tk) > 0.001
      if (animating) raf = requestAnimationFrame(frame)
    }

    function kick() {
      if (!raf) raf = requestAnimationFrame(frame)
    }
    kickRef.current = kick
    kick()

    return () => {
      cancelAnimationFrame(raf)
      raf = 0
      io?.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      reduce?.removeEventListener?.("change", onReduce)
      root.removeEventListener("pointermove", onMove)
      root.removeEventListener("pointerleave", onLeave)
      glCanvas.removeEventListener("webglcontextlost", onLost)
      glCanvas.removeEventListener("webglcontextrestored", onRestored)
      if (gl) {
        gl.gl.deleteTexture(gl.tex)
        gl.gl.deleteProgram(gl.prog)
      }
      kickRef.current = null
    }
  }, [size])

  // A static clock (fixed time with reduced motion) still needs a redraw when props change.
  React.useEffect(() => {
    kickRef.current?.()
  }, [time, timeZone, sweep, lens, accent, ink, interactive])

  const R = size * DIAL
  const aria = label ?? (timeText ? (showDate && dateText ? `${timeText}, ${dateText}` : timeText) : "Clock")

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label={aria}
      className={className}
      style={{ position: "relative", width: size, height: size, flex: "none", touchAction: "manipulation", ...style }}
    >
      <canvas ref={glRef} aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <canvas ref={handsRef} aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", pointerEvents: "none" }} />
      {showDate && dateText ? (
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: size / 2 + R * 0.014,
            top: size / 2 + R * 0.143,
            transform: "translate(-50%, -50%)",
            height: R * 0.072,
            padding: `0 ${R * 0.043}px`,
            borderRadius: R,
            background: ink,
            color: "#1b1a18",
            font: `400 ${R * 0.0485}px/1 -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Inter, "Segoe UI", Roboto, system-ui, sans-serif`,
            letterSpacing: 0,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            boxShadow: `0 ${R * 0.006}px ${R * 0.03}px rgba(0,0,0,0.45)`,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {dateText}
        </div>
      ) : null}
    </div>
  )
}

function capsule(ctx: CanvasRenderingContext2D, r0: number, r1: number, w: number) {
  // From radius r0 (inner end) to r1 (tip), pointing up, with fully rounded ends.
  const h = w / 2
  ctx.beginPath()
  ctx.moveTo(-h, -(r0 + h))
  ctx.lineTo(-h, -(r1 - h))
  ctx.arc(0, -(r1 - h), h, Math.PI, 0)
  ctx.lineTo(h, -(r0 + h))
  ctx.arc(0, -(r0 + h), h, 0, Math.PI)
  ctx.closePath()
}

type Shade = { off: number; blur: number; alpha: number }

/*
 * Shadows depend on how high each hand sits. Each hand casts a near, soft shadow onto the
 * hands beneath it (source-atop), and a longer one onto the dial (destination-over, so it
 * slides under everything already drawn).
 */
const SHADE = {
  minuteDial: { off: 0.035, blur: 0.082, alpha: 0.5 },
  hourDial: { off: 0.065, blur: 0.075, alpha: 0.55 },
  hourNear: { off: 0.02, blur: 0.09, alpha: 0.78 },
  secondDial: { off: 0.04, blur: 0.03, alpha: 0.32 },
  secondNear: { off: 0.01, blur: 0.03, alpha: 0.35 },
}
const LIGHT = [0.93, 0.37] // shadow direction, down and to the right

function drawHands(
  ctx: CanvasRenderingContext2D,
  W: number,
  R: number,
  hA: number,
  mA: number,
  sA: number,
  ink: number[],
  acc: number[]
) {
  const rad = Math.PI / 180
  const inkCss = css(ink)
  const accCss = css(acc)
  const S = HAND.second
  const M = HAND.minute
  const H = HAND.hour

  const minuteBody = () => capsule(ctx, M.r0 * R, M.r1 * R, M.w * R)
  const hourBody = () => capsule(ctx, H.r0 * R, H.r1 * R, H.w * R)
  const secondBody = () => {
    const h = (S.w * R) / 2
    ctx.beginPath()
    ctx.rect(-h, -S.tip * R, 2 * h, S.tip * R)
    ctx.moveTo((S.tw * R) / 2, 0)
    ctx.arc(0, 0, (S.tw * R) / 2, 0, Math.PI * 2)
    ctx.rect((-S.tw * R) / 2, 0, S.tw * R, S.tail * R - (S.tw * R) / 2)
    ctx.moveTo((S.tw * R) / 2, S.tail * R - (S.tw * R) / 2)
    ctx.arc(0, S.tail * R - (S.tw * R) / 2, (S.tw * R) / 2, 0, Math.PI * 2)
    ctx.moveTo(S.ring * R, 0)
    ctx.arc(0, 0, S.ring * R, 0, Math.PI * 2)
  }

  // Paint only the shadow of a shape: the shape itself is drawn far off canvas.
  const FAR = W * 4
  const shadow = (body: () => void, angle: number, sh: Shade, op: GlobalCompositeOperation) => {
    ctx.save()
    ctx.globalCompositeOperation = op
    ctx.setTransform(1, 0, 0, 1, W / 2 - FAR, W / 2)
    ctx.rotate(angle * rad)
    ctx.shadowColor = `rgba(0,0,0,${sh.alpha})`
    ctx.shadowBlur = sh.blur * R
    ctx.shadowOffsetX = FAR + LIGHT[0] * sh.off * R
    ctx.shadowOffsetY = LIGHT[1] * sh.off * R
    ctx.fillStyle = "#000"
    body()
    ctx.fill()
    ctx.restore()
  }
  const at = (angle: number) => {
    ctx.setTransform(1, 0, 0, 1, W / 2, W / 2)
    ctx.rotate(angle * rad)
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.globalCompositeOperation = "source-over"
  ctx.clearRect(0, 0, W, W)

  // Minute hand: long cream capsule with a black slot.
  at(mA)
  ctx.fillStyle = inkCss
  minuteBody()
  ctx.fill()
  ctx.fillStyle = "#020101"
  capsule(ctx, M.s0 * R, M.s1 * R, M.sw * R)
  ctx.fill()

  // Hour hand: short, thick capsule with an accent inset, a little higher than the minute hand.
  shadow(hourBody, hA, SHADE.hourNear, "source-atop")
  at(hA)
  ctx.fillStyle = inkCss
  hourBody()
  ctx.fill()
  ctx.fillStyle = css(acc, 0.93)
  capsule(ctx, H.i0 * R, H.i1 * R, H.iw * R)
  ctx.fill()

  // Second hand: thin accent line, counterweight and a black pivot ringed in accent.
  shadow(secondBody, sA, SHADE.secondNear, "source-atop")
  at(sA)
  const grad = ctx.createLinearGradient(0, -R * 0.86, 0, -R * S.tip)
  grad.addColorStop(0, accCss)
  grad.addColorStop(1, `rgba(${acc.map((v) => Math.round(v * 255)).join(",")},0.45)`)
  ctx.fillStyle = grad
  ctx.fillRect((-S.w * R) / 2, -S.tip * R, S.w * R, S.tip * R * 0.2)
  ctx.fillStyle = accCss
  ctx.beginPath()
  ctx.rect((-S.w * R) / 2, -S.tip * R * 0.8 - 0.5, S.w * R, S.tip * R * 0.8 + 0.5)
  ctx.fill()
  ctx.beginPath()
  ctx.rect((-S.tw * R) / 2, 0, S.tw * R, S.tail * R - (S.tw * R) / 2)
  ctx.arc(0, S.tail * R - (S.tw * R) / 2, (S.tw * R) / 2, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.arc(0, 0, S.ring * R, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = "#070505"
  ctx.beginPath()
  ctx.arc(0, 0, S.hole * R, 0, Math.PI * 2)
  ctx.fill()

  // Long shadows on the dial, slid under the hands.
  shadow(secondBody, sA, SHADE.secondDial, "destination-over")
  shadow(hourBody, hA, SHADE.hourDial, "destination-over")
  shadow(minuteBody, mA, SHADE.minuteDial, "destination-over")

  // Keep everything inside the dial.
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.globalCompositeOperation = "destination-in"
  ctx.beginPath()
  ctx.arc(W / 2, W / 2, R * 1.004, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalCompositeOperation = "source-over"
}

export default LensClock
