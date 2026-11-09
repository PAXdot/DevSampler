"use client"

/**
 * Lattice Hero — a geodesic shell of nodes wired to their nearest neighbours,
 * turning slowly while a pulse of light sweeps through it.
 *
 * The node positions come from a Fibonacci sphere and the edges from a nearest
 * neighbour pass at init, so there is no model to load and no texture to fetch.
 * The glow sprite is drawn in the fragment shader rather than sampled from an
 * image, which keeps the whole thing to a single file with no assets.
 */

import * as React from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { MotionConfig, motion, useReducedMotion } from "motion/react"

/* -------------------------------------------------------------------------- */
/*  Geometry                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Fibonacci sphere. Evenly spaced without the pole crowding you get from a
 * lat/long grid, which matters here because uneven spacing shows up
 * immediately as clumped edges.
 */
function fibonacciSphere(count: number, radius: number): Float32Array {
  const pts = new Float32Array(count * 3)
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = golden * i
    pts[i * 3] = Math.cos(theta) * r * radius
    pts[i * 3 + 1] = y * radius
    pts[i * 3 + 2] = Math.sin(theta) * r * radius
  }
  return pts
}

/**
 * Brute-force k-nearest edges, deduplicated.
 *
 * O(n²) but it runs once at mount for a few hundred points — a spatial index
 * would be more code than the problem deserves.
 */
function nearestEdges(pts: Float32Array, k: number): [number, number][] {
  const n = pts.length / 3
  const seen = new Set<string>()
  const edges: [number, number][] = []
  const d2: { j: number; d: number }[] = []

  for (let i = 0; i < n; i++) {
    d2.length = 0
    const ax = pts[i * 3]
    const ay = pts[i * 3 + 1]
    const az = pts[i * 3 + 2]
    for (let j = 0; j < n; j++) {
      if (j === i) continue
      const dx = pts[j * 3] - ax
      const dy = pts[j * 3 + 1] - ay
      const dz = pts[j * 3 + 2] - az
      d2.push({ j, d: dx * dx + dy * dy + dz * dz })
    }
    d2.sort((p, q) => p.d - q.d)
    for (let m = 0; m < k && m < d2.length; m++) {
      const j = d2[m].j
      const key = i < j ? `${i}:${j}` : `${j}:${i}`
      if (seen.has(key)) continue
      seen.add(key)
      edges.push([i, j])
    }
  }
  return edges
}

/* -------------------------------------------------------------------------- */
/*  Shaders                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Wrapped distance to the travelling pulse. Wrapping matters — a plain
 * `abs(seed - wave)` snaps when the wave restarts, and the snap is the one
 * thing that makes a loop look like a loop.
 */
const PULSE = /* glsl */ `
float pulse(float seed, float wave){
  float d = abs(fract(seed - wave + 0.5) - 0.5) * 2.0;
  return pow(1.0 - d, 9.0);
}
`

const NODE_VERT = /* glsl */ `
${PULSE}
attribute float aSeed;
uniform float uWave;
uniform float uSize;
uniform float uDpr;
varying float vGlow;

void main(){
  vGlow = pulse(aSeed, uWave);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // gl_PointSize is in PHYSICAL pixels, so uSize is treated as CSS pixels and
  // scaled by the device ratio. The depth divisor is in the same units as view
  // depth — a large magic number here fuses every node into one white mass.
  gl_PointSize = uSize * uDpr * (1.0 + vGlow * 1.6) * (5.2 / -mv.z);
  gl_Position = projectionMatrix * mv;
}
`

const NODE_FRAG = /* glsl */ `
uniform vec3 uBase;
uniform vec3 uHot;
varying float vGlow;

void main(){
  // The sprite is drawn, not sampled — one less asset to ship.
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  if (r > 0.5) discard;

  float core = smoothstep(0.5, 0.08, r);
  float halo = smoothstep(0.5, 0.0, r) * 0.30;

  vec3 col = mix(uBase, uHot, vGlow);
  float a = (core + halo * vGlow) * (0.34 + 0.66 * vGlow);

  gl_FragColor = vec4(col, a);
  #include <colorspace_fragment>
}
`

const EDGE_VERT = /* glsl */ `
${PULSE}
attribute float aSeed;
uniform float uWave;
varying float vGlow;

void main(){
  vGlow = pulse(aSeed, uWave);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const EDGE_FRAG = /* glsl */ `
uniform vec3  uBase;
uniform vec3  uHot;
uniform float uOpacity;
varying float vGlow;

void main(){
  vec3 col = mix(uBase, uHot, vGlow);
  gl_FragColor = vec4(col, uOpacity * (0.35 + 1.5 * vGlow));
  #include <colorspace_fragment>
}
`

/* -------------------------------------------------------------------------- */
/*  Adaptive quality                                                          */
/* -------------------------------------------------------------------------- */

type Quality = "low" | "medium" | "high"

interface QualitySpec {
  /** Node count. Edge count follows at roughly nodes × neighbours ÷ 2. */
  nodes: number
  neighbours: number
  pointSize: number
  maxDpr: number
}

const QUALITY: Record<Quality, QualitySpec> = {
  // pointSize is in CSS pixels; the shader scales it by the device ratio.
  low: { nodes: 130, neighbours: 3, pointSize: 3.2, maxDpr: 1.25 },
  medium: { nodes: 220, neighbours: 3, pointSize: 2.9, maxDpr: 1.5 },
  high: { nodes: 320, neighbours: 4, pointSize: 2.6, maxDpr: 1.75 },
}

function subscribeToViewport(cb: () => void) {
  window.addEventListener("resize", cb)
  return () => window.removeEventListener("resize", cb)
}

function detectQuality(): Quality {
  if (typeof window === "undefined") return "medium"
  const cores = navigator.hardwareConcurrency ?? 4
  const w = window.innerWidth
  if (w < 768 || cores <= 4) return "low"
  if (w < 1440 || cores <= 8) return "medium"
  return "high"
}

/* -------------------------------------------------------------------------- */
/*  Entrance motion                                                           */
/* -------------------------------------------------------------------------- */

const ENTER = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 96, damping: 17, mass: 0.9 },
  },
}

const GROUP = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
}

/* -------------------------------------------------------------------------- */
/*  Scene                                                                     */
/* -------------------------------------------------------------------------- */

interface ShellProps {
  spec: QualitySpec
  nodeColor: string
  lineColor: string
  accent: string
  radius: number
  staticTime?: number
  paused: boolean
  interactive: boolean
}

function Shell({
  spec,
  nodeColor,
  lineColor,
  accent,
  radius,
  staticTime,
  paused,
  interactive,
}: ShellProps) {
  const group = React.useRef<THREE.Group>(null)
  const nodeMat = React.useRef<THREE.ShaderMaterial>(null)
  const edgeMat = React.useRef<THREE.ShaderMaterial>(null)
  const { size, gl } = useThree()
  // Matched to the `lg:` breakpoint the DOM uses, not to aspect ratio. Deciding
  // the two independently lets them disagree — at 900x680 the shell moved right
  // while the copy stayed centred, and they collided.
  const stacked = size.width < 1024

  // Built once per density. Rebuilding on every colour tweak would throw away
  // the neighbour pass for no reason.
  const { nodeGeo, edgeGeo } = React.useMemo(() => {
    const pts = fibonacciSphere(spec.nodes, radius)
    const edges = nearestEdges(pts, spec.neighbours)

    // The pulse sweeps along Y, so the seed is simply normalised height. It
    // reads as a wave crossing the shell rather than random twinkling.
    const seed = new Float32Array(spec.nodes)
    for (let i = 0; i < spec.nodes; i++) {
      seed[i] = (pts[i * 3 + 1] / radius) * 0.5 + 0.5
    }

    const ng = new THREE.BufferGeometry()
    ng.setAttribute("position", new THREE.BufferAttribute(pts, 3))
    ng.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))

    const ep = new Float32Array(edges.length * 6)
    const es = new Float32Array(edges.length * 2)
    edges.forEach(([a, b], i) => {
      ep.set([pts[a * 3], pts[a * 3 + 1], pts[a * 3 + 2]], i * 6)
      ep.set([pts[b * 3], pts[b * 3 + 1], pts[b * 3 + 2]], i * 6 + 3)
      es[i * 2] = seed[a]
      es[i * 2 + 1] = seed[b]
    })
    const eg = new THREE.BufferGeometry()
    eg.setAttribute("position", new THREE.BufferAttribute(ep, 3))
    eg.setAttribute("aSeed", new THREE.BufferAttribute(es, 1))

    return { nodeGeo: ng, edgeGeo: eg }
  }, [spec.nodes, spec.neighbours, radius])

  React.useEffect(() => {
    return () => {
      nodeGeo.dispose()
      edgeGeo.dispose()
    }
  }, [nodeGeo, edgeGeo])

  const nodeUniforms = React.useMemo(
    () => ({
      uWave: { value: staticTime ?? 0 },
      uSize: { value: spec.pointSize },
      uDpr: { value: 1 },
      uBase: { value: new THREE.Color(nodeColor) },
      uHot: { value: new THREE.Color(accent) },
    }),
    // Built once; everything below is pushed through the ref instead so a
    // colour change never restarts the sweep.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const edgeUniforms = React.useMemo(
    () => ({
      uWave: { value: staticTime ?? 0 },
      uOpacity: { value: 0.3 },
      uBase: { value: new THREE.Color(lineColor) },
      uHot: { value: new THREE.Color(accent) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // Reaching materials through refs rather than mutating the memoised uniform
  // objects is what keeps the React Compiler's immutability rule satisfied.
  React.useEffect(() => {
    const n = nodeMat.current
    const e = edgeMat.current
    if (n) {
      n.uniforms.uSize.value = spec.pointSize
      n.uniforms.uDpr.value = gl.getPixelRatio()
      n.uniforms.uBase.value.set(nodeColor)
      n.uniforms.uHot.value.set(accent)
    }
    if (e) {
      e.uniforms.uBase.value.set(lineColor)
      e.uniforms.uHot.value.set(accent)
    }
  }, [spec.pointSize, nodeColor, lineColor, accent, gl])

  const target = React.useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    const g = group.current
    const n = nodeMat.current
    const e = edgeMat.current

    if (staticTime !== undefined) {
      if (n) n.uniforms.uWave.value = staticTime
      if (e) e.uniforms.uWave.value = staticTime
      if (g) g.rotation.set(0.18, staticTime * 0.9, 0)
      return
    }

    if (!paused) {
      // 0.055 puts the pulse at roughly one pass every eighteen seconds —
      // slow enough to read as deliberate rather than as a loading indicator.
      const step = delta * 0.055
      if (n) n.uniforms.uWave.value = (n.uniforms.uWave.value + step) % 1
      if (e) e.uniforms.uWave.value = (e.uniforms.uWave.value + step) % 1
    }

    if (!g) return

    if (!paused) g.rotation.y += delta * 0.075

    if (interactive && !paused) {
      // Damped, and deliberately shallow. Anything stronger reads as a toy.
      target.current.x = state.pointer.y * 0.16
      target.current.y = state.pointer.x * 0.22
      g.rotation.x += (target.current.x + 0.18 - g.rotation.x) * Math.min(1, delta * 2.4)
      g.position.x +=
        (target.current.y * 0.5 - g.position.x) * Math.min(1, delta * 2.0)
    } else {
      g.rotation.x += (0.18 - g.rotation.x) * Math.min(1, delta * 2.4)
    }
  })

  return (
    <group ref={group} position={stacked ? [0, 1.45, -0.6] : [1.55, 0, 0]}>
      <lineSegments geometry={edgeGeo}>
        <shaderMaterial
          ref={edgeMat}
          vertexShader={EDGE_VERT}
          fragmentShader={EDGE_FRAG}
          uniforms={edgeUniforms}
          transparent
          depthWrite={false}
        />
      </lineSegments>

      <points geometry={nodeGeo}>
        <shaderMaterial
          ref={nodeMat}
          vertexShader={NODE_VERT}
          fragmentShader={NODE_FRAG}
          uniforms={nodeUniforms}
          transparent
          depthWrite={false}
          // Additive is what makes the ignited nodes read as light rather than
          // as pale dots; safe here because the backdrop is near-black.
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

/* -------------------------------------------------------------------------- */
/*  Public component                                                          */
/* -------------------------------------------------------------------------- */

export interface LatticeHeroProps {
  eyebrow?: string
  headline?: string
  description?: string
  action?: React.ReactNode
  secondaryAction?: React.ReactNode
  /** Small facts strip along the bottom. */
  meta?: string[]
  /** Resting colour of the nodes. */
  nodeColor?: string
  /** Resting colour of the edges. */
  lineColor?: string
  /** Colour a node takes as the pulse passes through it. */
  accent?: string
  background?: string
  foreground?: string
  /** Shell radius in world units. */
  radius?: number
  /** CSS font-family for the headline. */
  displayFont?: string
  italicHeadline?: boolean
  /** Follow the pointer. Off for covers and for reduced-motion users. */
  interactive?: boolean
  /** Pin the sweep to a fixed value and stop animating — for covers and
   *  thumbnails, which are captured without a chance to wait. */
  staticTime?: number
  /** Extra objects rendered inside the R3F canvas. */
  sceneChildren?: React.ReactNode
  /** Adds top padding so the copy clears a fixed site header. */
  topInset?: boolean
  className?: string
}

export function LatticeHero({
  eyebrow = "Bevel UI",
  headline = "Everything, connected",
  description =
    "A geodesic shell of nodes wired to their nearest neighbours, with a pulse travelling through the mesh. Generated at runtime — no model, no texture, no sprite sheet.",
  action,
  secondaryAction,
  meta = ["Fibonacci distribution", "Nearest-neighbour edges", "Zero assets"],
  nodeColor = "#EDE8DF",
  lineColor = "#5C5A63",
  accent = "#C9A961",
  background = "#08080B",
  foreground = "#EDE8DF",
  radius = 1.72,
  displayFont = "var(--font-display), 'Bodoni Moda', Georgia, serif",
  italicHeadline = false,
  interactive = true,
  staticTime,
  sceneChildren,
  topInset = false,
  className,
}: LatticeHeroProps) {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const [onScreen, setOnScreen] = React.useState(true)
  const prefersReduced = useReducedMotion()

  const quality = React.useSyncExternalStore(
    subscribeToViewport,
    detectQuality,
    () => "medium" as Quality
  )
  const spec = QUALITY[quality]

  React.useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { rootMargin: "120px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const pinned = staticTime !== undefined
  const frozen = pinned || !!prefersReduced

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        className={[
          "relative isolate grid h-[100svh] max-h-full min-h-[540px] w-full place-items-center overflow-hidden",
          className ?? "",
        ].join(" ")}
        style={{ background, color: foreground }}
      >
        {/* Decorative. The headline is real DOM text above this, so there is
            nothing here for a screen reader to gain. */}
        <div aria-hidden className="absolute inset-0 z-0">
          <Canvas
            dpr={[1, spec.maxDpr]}
            gl={{ antialias: true, alpha: true }}
            camera={{ position: [0, 0, 5.9], fov: 42 }}
            frameloop={pinned ? "demand" : onScreen ? "always" : "never"}
          >
            <Shell
              spec={spec}
              nodeColor={nodeColor}
              lineColor={lineColor}
              accent={accent}
              radius={radius}
              staticTime={staticTime}
              paused={frozen}
              interactive={interactive && !prefersReduced}
            />
            {sceneChildren}
          </Canvas>
        </div>

        {/* Two scrims rather than one: stacked, the copy sits below the shell
            and needs a downward gradient; side by side it sits left of it and
            needs a sideways one. A CSS gradient cannot vary by breakpoint from
            an inline style, so each gets its own element. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
          style={{
            background: `linear-gradient(180deg, ${background}00 0%, ${background}73 26%, ${background}E6 44%, ${background} 62%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
          style={{
            background: `linear-gradient(90deg, ${background} 0%, ${background}E6 34%, ${background}99 52%, ${background}00 74%)`,
          }}
        />

        <motion.div
          variants={GROUP}
          // A pinned frame is a cover shot: it wants the settled composition,
          // not whatever the entrance happened to be doing.
          initial={pinned ? "show" : "hidden"}
          animate="show"
          className={[
            "relative z-[2] mx-auto flex w-[min(100%-2.5rem,72rem)] flex-col",
            // No vh: stacked layouts separate copy from the shell by moving
            // the shell in 3D space, not by pushing the copy down the viewport.
            "items-center text-center",
            "lg:items-start lg:text-left",
            topInset ? "pt-24 sm:pt-28" : "pt-10 sm:pt-14",
            "pb-10 sm:pb-14",
          ].join(" ")}
        >
          <div className="flex max-w-[38rem] flex-col items-center gap-4 sm:gap-6 lg:max-w-[34rem] lg:items-start">
            {eyebrow ? (
              <motion.p
                variants={ENTER}
                className="m-0 font-[family-name:var(--font-mono,ui-monospace)] text-[11px] uppercase tracking-[0.34em] opacity-80"
                style={{ color: accent }}
              >
                {eyebrow}
              </motion.p>
            ) : null}

            <motion.h1
              variants={ENTER}
              className="m-0 text-[clamp(2.5rem,6.2vw,5rem)] font-normal leading-[1.02] tracking-[-0.02em]"
              style={{
                fontFamily: displayFont,
                fontStyle: italicHeadline ? "italic" : "normal",
                color: foreground,
              }}
            >
              {headline}
            </motion.h1>

            {description ? (
              <motion.p
                variants={ENTER}
                className="m-0 max-w-[42ch] font-[family-name:var(--font-body,ui-sans-serif)] text-[15px] leading-relaxed opacity-80 sm:text-[17px]"
                style={{ color: foreground }}
              >
                {description}
              </motion.p>
            ) : null}

            {action || secondaryAction ? (
              <motion.div
                variants={ENTER}
                className="mt-2 flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                {action}
                {secondaryAction}
              </motion.div>
            ) : null}

            {meta?.length ? (
              // Hidden on small screens by CSS rather than by measuring the
              // viewport in JS: a JS breakpoint renders the desktop layout on
              // the server and snaps on hydration.
              <motion.ul
                variants={ENTER}
                className="mt-8 hidden list-none flex-wrap gap-x-7 gap-y-3 p-0 font-[family-name:var(--font-mono,ui-monospace)] text-[10px] uppercase tracking-[0.18em] opacity-60 lg:mt-10 lg:flex"
                style={{ color: foreground }}
              >
                {meta.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </motion.ul>
            ) : null}
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  )
}

export default LatticeHero
