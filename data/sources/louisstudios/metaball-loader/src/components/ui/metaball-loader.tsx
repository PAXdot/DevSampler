"use client"

import * as React from "react"

export interface MetaballLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width and height in px. The ring is drawn inside this box with a small margin. */
  size?: number
  /** Blob colour. Any CSS colour; defaults to `currentColor` so it follows the text colour. */
  color?: string
  /** Playback speed. 1 = one bead lap every 4 s, one full loop every 12 s. */
  speed?: number
  /** Accessible label announced to screen readers. */
  label?: string
}

// One seamless loop. Beads travel 2.5 laps around the ring while the ring turns
// half a turn, which lands every bead back on its own starting state.
const LOOP = 12
const LAPS = 2.5
// A density wave rides the ring a little slower than the beads: where it
// crowds them they fuse into a chain, where it thins them out they pinch apart.
const CROWD = 0.12
const CROWD_LAPS = 0.5
const CROWD_AT = -1.96
const TAU = Math.PI * 2

// The track: a tilted ellipse. Units are scene units, the canvas half-size is VIEW units.
const RING = { x: 0.0115, y: -0.0004, a: 0.9542, b: 0.5154, tilt: -0.7719 }
const RING_RMS = Math.sqrt((RING.a * RING.a + RING.b * RING.b) / 2)
const VIEW = 1.25
// Beads swell on the long sides of the ring and shrink where it turns tightly,
// so they crowd and fuse at the two ends and pinch apart along the sides.
const SWELL = 0.57

// Bead states at t = 0, fitted to the reference still, in ring order.
// ring angle, radial offset, size, aspect (along the path), tilt off the path,
// and the neck radius this bead shares with the bead before it.
// prettier-ignore
const START = [
  -2.8303, -0.0083, 0.2219, 1.0739, -0.3467, 0.14,
  -2.0853,  0.0182, 0.2663, 1.1087,  0.0849, 0.1417,
  -1.3366, -0.0178, 0.2831, 1.0344,  0.3093, 0.2817,
  -0.5366,  0.0082, 0.2022, 1.2797,  0.9439, 0.1433,
   0.3029, -0.001,  0.1912, 1.436,  -0.4578, 0.135,
   1.0609, -0.0002, 0.2401, 1.1389, -0.3306, 0.1183,
   1.7501, -0.002,  0.2661, 1.1877,  0.0899, 0.1317,
   2.5108,  0.0052, 0.242,  1.1876,  0.0444, 0.1383,
]
const N = START.length / 6

function pathSpeed(th: number) {
  return Math.hypot(RING.a * Math.sin(th), RING.b * Math.cos(th)) / RING_RMS
}

// A gentle periodic drift that passes through `at0` when t = 0.
// k = whole cycles per loop, so the loop never shows a seam.
type Wave = { m: number; c: number; k: number; p: number }
function wave(at0: number, mean: number, amp: number, k: number, flip: boolean): Wave {
  const c = Math.max(amp, Math.abs(at0 - mean) * 1.05)
  const s = Math.asin(Math.max(-1, Math.min(1, (at0 - mean) / c)))
  return { m: mean, c, k, p: flip ? Math.PI - s : s }
}
const waveAt = (w: Wave, ph: number) => w.m + w.c * Math.sin(w.k * ph + w.p)

// Deterministic pseudo-random numbers so every mount moves the same way.
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Bead = {
  th: number
  base: number
  drift: { a: number; k: number; p: number }[]
  rho: Wave
  breath: Wave
  aspect: Wave
  turn: Wave
  neck: Wave
}

const BEADS: Bead[] = (() => {
  const r = rng(7)
  const out: Bead[] = []
  for (let i = 0; i < N; i++) {
    const [th, rho, size, aspect, turn, neck] = START.slice(i * 6, i * 6 + 6)
    const drift = [1, 2, 3].map((k) => ({ a: (0.01 + r() * 0.02) / k, k, p: r() * TAU }))
    // Undo the density wave so the bead sits exactly at its fitted angle at t = 0.
    let u = th
    for (let n = 0; n < 24; n++) {
      u -= (u + CROWD * Math.sin(u - CROWD_AT) - th) / (1 + CROWD * Math.cos(u - CROWD_AT))
    }
    out.push({
      th: u,
      base: size / Math.pow(pathSpeed(th), SWELL),
      drift,
      rho: wave(rho, 0, 0.012, 1 + Math.floor(r() * 2), r() < 0.5),
      breath: wave(1, 1, 0.05, 1 + Math.floor(r() * 3), r() < 0.5),
      aspect: wave(aspect, Math.max(1.08, (aspect + 1.02) / 2), 0.06, 1 + Math.floor(r() * 2), r() < 0.5),
      turn: wave(turn, 0, 0.15, 1, r() < 0.5),
      // Neck radius (scene units): thicker bridges linger longer before they snap.
      neck: wave(neck, Math.max(0.15, (neck + 0.12) / 2), 0.035, 1 + Math.floor(r() * 3), r() < 0.5),
    })
  }
  return out
})()

// Beads may squeeze into each other only this far (scene units) before they
// start to shove the bead ahead, so a crowd reads as a chain, never a tube.
const OVERLAP = 0.04
const CUSHION = 0.04
// Ring order, so each bead knows the one ahead of it.
const ORDER = BEADS.map((b, i) => [b.th, i]).sort((a, b) => a[0] - b[0]).map((x) => x[1])

const TH = new Float64Array(N)
const SIZE = new Float64Array(N)
const ASP = new Float64Array(N)
const TURN = new Float64Array(N)
const RHO = new Float64Array(N)

/** Writes bead centres, axes and orientation for time t (seconds) into the arrays. */
function solveBeads(t: number, pos: Float32Array, rad: Float32Array, neck?: Float32Array) {
  const ph = (TAU * (((t % LOOP) + LOOP) % LOOP)) / LOOP
  const tilt = RING.tilt + ph / 2
  const ct = Math.cos(tilt)
  const st = Math.sin(tilt)
  for (let i = 0; i < N; i++) {
    const b = BEADS[i]
    let u = b.th + LAPS * ph
    for (const d of b.drift) u += d.a * (Math.sin(d.k * ph + d.p) - Math.sin(d.p))
    TH[i] = u + CROWD * Math.sin(u - CROWD_AT - CROWD_LAPS * ph)
    SIZE[i] = b.base * waveAt(b.breath, ph)
    ASP[i] = Math.max(1, waveAt(b.aspect, ph))
    TURN[i] = waveAt(b.turn, ph)
    RHO[i] = waveAt(b.rho, ph)
  }
  // Soft collisions along the ring: a few relaxation passes, smooth in time.
  for (let pass = 0; pass < 4; pass++) {
    for (let n = 0; n < N; n++) {
      const i = ORDER[n]
      const j = ORDER[(n + 1) % N]
      const tj = TH[j] + (n === N - 1 ? TAU : 0) + Math.round((TH[i] - TH[j] - (n === N - 1 ? TAU : 0)) / TAU) * TAU
      const dx = (RING.a + RHO[j]) * Math.cos(tj) - (RING.a + RHO[i]) * Math.cos(TH[i])
      const dy = (RING.b + RHO[j]) * Math.sin(tj) - (RING.b + RHO[i]) * Math.sin(TH[i])
      const reach = (k: number, th: number) => {
        const s = SIZE[k] * Math.pow(pathSpeed(th), SWELL)
        const c = Math.cos(TURN[k])
        const sn = Math.sin(TURN[k])
        return s / Math.hypot(c / Math.sqrt(ASP[k]), sn * Math.sqrt(ASP[k]))
      }
      const deficit = reach(i, TH[i]) + reach(j, tj) - OVERLAP - Math.hypot(dx, dy)
      if (deficit <= -CUSHION) continue
      const push = deficit >= CUSHION ? deficit : ((deficit + CUSHION) * (deficit + CUSHION)) / (4 * CUSHION)
      const dth = push / (RING_RMS * pathSpeed((TH[i] + tj) / 2)) / 2
      TH[i] -= dth
      TH[j] += dth
    }
  }
  for (let i = 0; i < N; i++) {
    const th = TH[i]
    const lx = (RING.a + RHO[i]) * Math.cos(th)
    const ly = (RING.b + RHO[i]) * Math.sin(th)
    const tx = -RING.a * Math.sin(th)
    const ty = RING.b * Math.cos(th)
    const size = SIZE[i] * Math.pow(pathSpeed(th), SWELL)
    const ang = Math.atan2(st * tx + ct * ty, ct * tx - st * ty) + TURN[i]
    pos[i * 4] = RING.x + ct * lx - st * ly
    pos[i * 4 + 1] = RING.y + st * lx + ct * ly
    pos[i * 4 + 2] = Math.cos(ang)
    pos[i * 4 + 3] = Math.sin(ang)
    rad[i * 2] = size * Math.sqrt(ASP[i])
    rad[i * 2 + 1] = size / Math.sqrt(ASP[i])
    if (neck) neck[i] = waveAt(BEADS[i].neck, ph)
  }
}

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const frag = (derivatives: boolean) => `
${derivatives ? "#extension GL_OES_standard_derivatives : enable" : ""}
precision highp float;
uniform vec2 uRes;
uniform vec4 uBead[${N}];
uniform vec2 uAxis[${N}];
uniform float uNeck[${N}];
uniform vec4 uColor;

// Distance to a rotated ellipse (close to exact near the outline).
float ellipse(vec2 p, vec4 b, vec2 r) {
  vec2 d = p - b.xy;
  vec2 q = vec2(b.z * d.x + b.w * d.y, -b.w * d.x + b.z * d.y);
  float k0 = length(q / r);
  float k1 = length(q / (r * r));
  return k0 * (k0 - 1.0) / max(k1, 1e-5);
}

// Polynomial smooth minimum: a concave neck that pinches off cleanly.
float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

void main() {
  float unit = ${VIEW.toFixed(4)} / (0.5 * uRes.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) * unit;
  p.y = -p.y;
  float d = ellipse(p, uBead[0], uAxis[0]);
  for (int i = 1; i < ${N}; i++) d = smin(d, ellipse(p, uBead[i], uAxis[i]), uNeck[i]);
  ${
    derivatives
      ? "float w = max(length(vec2(dFdx(d), dFdy(d))), 1e-6);"
      : "float w = unit;"
  }
  float a = clamp(0.5 - d / w, 0.0, 1.0);
  gl_FragColor = vec4(uColor.rgb, 1.0) * (uColor.a * a);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s))
  }
  return s
}

// Resolve any CSS colour (rgb, oklch, color-mix…) to straight RGBA in 0..1.
function colorReader() {
  let last = ""
  let rgba: [number, number, number, number] = [0, 0, 0, 1]
  let ctx: CanvasRenderingContext2D | null = null
  return (css: string) => {
    if (css === last) return rgba
    last = css
    const m = css.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)$/)
    if (m) {
      const al = m[4] === undefined ? 1 : m[4].endsWith("%") ? parseFloat(m[4]) / 100 : +m[4]
      rgba = [+m[1] / 255, +m[2] / 255, +m[3] / 255, al]
      return rgba
    }
    if (!ctx) {
      const c = document.createElement("canvas")
      c.width = c.height = 1
      ctx = c.getContext("2d", { willReadFrequently: true })
    }
    if (ctx) {
      ctx.clearRect(0, 0, 1, 1)
      ctx.fillStyle = "#000"
      ctx.fillStyle = css
      ctx.fillRect(0, 0, 1, 1)
      const d = ctx.getImageData(0, 0, 1, 1).data
      const al = d[3] / 255
      rgba = al > 0 ? [d[0] / 255 / al, d[1] / 255 / al, d[2] / 255 / al, al] : [0, 0, 0, 0]
    }
    return rgba
  }
}

/** Gooey ink beads circling a tilted ring, fusing into chains and pinching apart as they go. */
export function MetaballLoader({
  size = 160,
  color = "currentColor",
  speed = 1,
  label = "Loading",
  className,
  style,
  ...props
}: MetaballLoaderProps) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [fallback, setFallback] = React.useState(false)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const root = rootRef.current
    if (!canvas || !root) return
    const gl = canvas.getContext("webgl", {
      premultipliedAlpha: true,
      alpha: true,
      antialias: false,
    })
    if (!gl) {
      setFallback(true)
      return
    }

    const derivatives = !!gl.getExtension("OES_standard_derivatives")
    const prog = gl.createProgram()!
    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, frag(derivatives))
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setFallback(true)
      return
    }
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "aPos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "uRes")
    const uBead = gl.getUniformLocation(prog, "uBead")
    const uAxis = gl.getUniformLocation(prog, "uAxis")
    const uNeck = gl.getUniformLocation(prog, "uNeck")
    const uColor = gl.getUniformLocation(prog, "uColor")

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const px = Math.round(size * dpr)
    canvas.width = px
    canvas.height = px
    gl.viewport(0, 0, px, px)
    gl.clearColor(0, 0, 0, 0)

    const pos = new Float32Array(N * 4)
    const rad = new Float32Array(N * 2)
    const neck = new Float32Array(N)
    const readColor = colorReader()

    let raf = 0
    let visible = true
    const start = performance.now()
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf) raf = requestAnimationFrame(frame)
    })
    io.observe(canvas)

    function frame(now: number) {
      raf = 0
      const t = ((now - start) / 1000) * Math.max(speed, 0) * (reduce ? 0.25 : 1)
      solveBeads(t, pos, rad, neck)
      const [r, g, b, a] = readColor(getComputedStyle(root!).color)
      gl!.clear(gl!.COLOR_BUFFER_BIT)
      gl!.uniform2f(uRes, px, px)
      gl!.uniform4fv(uBead, pos)
      gl!.uniform2fv(uAxis, rad)
      gl!.uniform1fv(uNeck, neck)
      gl!.uniform4f(uColor, r, g, b, a)
      gl!.drawArrays(gl!.TRIANGLES, 0, 3)
      if (visible) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      gl.deleteProgram(prog)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buf)
    }
  }, [size, speed])

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label={label}
      className={className}
      style={{ width: size, height: size, position: "relative", ...style, ...(color !== "currentColor" ? { color } : null) }}
      {...props}
    >
      {fallback ? <StaticBeads /> : <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />}
    </div>
  )
}

// No WebGL: the opening pose as plain ellipses, turning slowly.
function StaticBeads() {
  const pos = new Float32Array(N * 4)
  const rad = new Float32Array(N * 2)
  solveBeads(0, pos, rad)
  return (
    <svg
      viewBox={`${-VIEW} ${-VIEW} ${VIEW * 2} ${VIEW * 2}`}
      aria-hidden="true"
      className="metaball-loader-fallback"
      style={{ width: "100%", height: "100%", display: "block", animation: "metaball-loader-turn 4s linear infinite" }}
    >
      {Array.from({ length: N }, (_, i) => (
        <ellipse
          key={i}
          cx={pos[i * 4]}
          cy={pos[i * 4 + 1]}
          rx={rad[i * 2]}
          ry={rad[i * 2 + 1]}
          fill="currentColor"
          transform={`rotate(${(Math.atan2(pos[i * 4 + 3], pos[i * 4 + 2]) * 180) / Math.PI} ${pos[i * 4]} ${pos[i * 4 + 1]})`}
        />
      ))}
      <style>{`@keyframes metaball-loader-turn{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){.metaball-loader-fallback{animation-duration:16s!important}}`}</style>
    </svg>
  )
}

export default MetaballLoader
