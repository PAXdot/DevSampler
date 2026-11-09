"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"

type Logo = { name: string; src: string }

const LOGOS: Logo[] = [
  { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Django", src: "https://cdn.simpleicons.org/django/44B78B" },
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql/336791" },
  { name: "LangChain", src: "https://cdn.simpleicons.org/langchain/2F9E44" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "n8n", src: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/181717" },
  { name: "Hugging Face", src: "https://cdn.simpleicons.org/huggingface/FFD21E" },
]

export type MarginFrameProps = {
  children?: ReactNode
  className?: string
  logos?: Logo[]
  style?: CSSProperties
}

type Body = {
  el: HTMLSpanElement
  x: number
  y: number
  vx: number
  vy: number
  angle: number
  spin: number
  mass: number
}

export default function MarginFrame({
  children,
  className,
  logos = LOGOS,
  style,
}: MarginFrameProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const logoRefs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    const root = rootRef.current
    const frame = frameRef.current
    const nodes = logoRefs.current.filter(Boolean) as HTMLSpanElement[]
    if (!root || !frame || nodes.length === 0) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const seed = (index: number, total: number) => {
      const box = frame.getBoundingClientRect()
      const origin = root.getBoundingClientRect()
      const left = box.left - origin.left
      const top = box.top - origin.top
      const side = index % 4
      const slot = Math.floor(index / 4)
      const lanes = Math.ceil(total / 4)
      const u = (slot + 0.45) / lanes
      const speed = 0.07 + (index % 5) * 0.012
      if (side === 0) return { x: left + u * box.width, y: 8, vx: speed, vy: 0.04 }
      if (side === 1) return { x: root.clientWidth - 48, y: top + u * box.height, vx: -0.03, vy: speed }
      if (side === 2) return { x: left + box.width - u * box.width, y: root.clientHeight - 48, vx: -speed, vy: -0.03 }
      return { x: 8, y: top + box.height - u * box.height, vx: 0.04, vy: -speed }
    }

    const bodies: Body[] = nodes.map((el, index) => {
      const start = seed(index, nodes.length)
      const mass = 0.85 + (index % 4) * 0.15
      return {
        el,
        x: start.x,
        y: start.y,
        vx: start.vx,
        vy: start.vy,
        angle: index * 18,
        spin: index % 2 ? 0.012 : -0.01,
        mass,
      }
    })

    const mouse = { x: -9999, y: -9999, px: -9999, py: -9999, vx: 0, vy: 0 }
    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }
    window.addEventListener("mousemove", onMove, { passive: true })

    const soften = (speed: number) => speed * -0.28

    const bounce = (body: Body) => {
      const w = body.el.offsetWidth || 28
      const h = body.el.offsetHeight || 28
      const box = frame.getBoundingClientRect()
      const origin = root.getBoundingClientRect()
      const edge = 6
      if (body.x < edge) {
        body.x += (edge - body.x) * 0.18
        if (body.vx < 0) body.vx = soften(body.vx)
      }
      if (body.y < edge) {
        body.y += (edge - body.y) * 0.18
        if (body.vy < 0) body.vy = soften(body.vy)
      }
      if (body.x + w > root.clientWidth - edge) {
        body.x += (root.clientWidth - edge - w - body.x) * 0.18
        if (body.vx > 0) body.vx = soften(body.vx)
      }
      if (body.y + h > root.clientHeight - edge) {
        body.y += (root.clientHeight - edge - h - body.y) * 0.18
        if (body.vy > 0) body.vy = soften(body.vy)
      }

      const cx = body.x + w / 2
      const cy = body.y + h / 2
      const innerLeft = box.left - origin.left + 10
      const innerTop = box.top - origin.top + 10
      const innerRight = box.right - origin.left - 10
      const innerBottom = box.bottom - origin.top - 10
      if (cx > innerLeft && cx < innerRight && cy > innerTop && cy < innerBottom) {
        const dl = cx - innerLeft
        const dr = innerRight - cx
        const dt = cy - innerTop
        const db = innerBottom - cy
        const nearest = Math.min(dl, dr, dt, db)
        if (nearest === dl) {
          body.x -= dl * 0.22
          if (body.vx > 0) body.vx = soften(body.vx)
        } else if (nearest === dr) {
          body.x += dr * 0.22
          if (body.vx < 0) body.vx = soften(body.vx)
        } else if (nearest === dt) {
          body.y -= dt * 0.22
          if (body.vy > 0) body.vy = soften(body.vy)
        } else {
          body.y += db * 0.22
          if (body.vy < 0) body.vy = soften(body.vy)
        }
      }
    }

    let frameId = 0
    const drift = () => {
      if (mouse.px > -9000) {
        mouse.vx = mouse.x - mouse.px
        mouse.vy = mouse.y - mouse.py
      }
      mouse.px = mouse.x
      mouse.py = mouse.y
      const speed = Math.hypot(mouse.vx, mouse.vy)

      bodies.forEach((body) => {
        const rect = body.el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = cx - mouse.x
        const dy = cy - mouse.y
        const dist = Math.hypot(dx, dy) || 1
        const reach = 72
        if (dist < reach && speed > 1.4) {
          const nx = dx / dist
          const ny = dy / dist
          const hit = (1 - dist / reach) * Math.min(speed, 14) * 0.22
          body.vx += (nx * hit) / body.mass
          body.vy += (ny * hit) / body.mass
          body.spin += (-ny * mouse.vx + nx * mouse.vy) * 0.012
        }
        body.vx *= 0.992
        body.vy *= 0.992
        const pace = Math.hypot(body.vx, body.vy)
        if (pace < 0.08) {
          body.vx += body.vx >= 0 ? 0.004 : -0.004
          body.vy += body.vy >= 0 ? 0.003 : -0.003
        }
        if (pace > 0.62) {
          body.vx *= 0.62 / pace
          body.vy *= 0.62 / pace
        }
        body.spin *= 0.996
        body.x += body.vx
        body.y += body.vy
        body.angle += body.spin
        bounce(body)
        body.el.style.transform = `translate(${body.x.toFixed(1)}px, ${body.y.toFixed(1)}px) rotate(${body.angle.toFixed(2)}deg)`
      })
      frameId = requestAnimationFrame(drift)
    }
    frameId = requestAnimationFrame(drift)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("mousemove", onMove)
    }
  }, [logos])

  return (
    <div ref={rootRef} className={className} style={{ ...rootStyle, ...style }}>
      <style>{css}</style>
      <svg className="mf-beam" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M36 36h150M230 36h180M36 84h90M1404 36h-160M1404 84h-220M36 816h160M1404 816h-180M36 120v160M84 700v120M1404 140v180M1356 640v140"
          stroke="rgba(227,98,42,0.28)"
          strokeWidth="1.5"
        />
        <path
          d="M36 36h150M230 36h180M36 84h90M1404 36h-160M1404 84h-220M36 816h160M1404 816h-180M36 120v160M84 700v120M1404 140v180M1356 640v140"
          stroke="url(#mf-beam)"
          strokeWidth="2.2"
        />
        <defs>
          <linearGradient id="mf-beam" x1="40%" x2="50%" y1="160%" y2="180%">
            <stop stopColor="#ffb088" stopOpacity="0" />
            <stop stopColor="#ff8a3d" />
            <stop offset="0.35" stopColor="#e24a12" />
            <stop offset="1" stopColor="#ffd2b0" stopOpacity="0" />
            <animate attributeName="y1" values="160%;-40%;-40%" keyTimes="0;0.47;1" dur="3.8s" repeatCount="indefinite" />
            <animate attributeName="y2" values="180%;-20%;-20%" keyTimes="0;0.47;1" dur="3.8s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
      </svg>
      <div ref={frameRef} className="mf-frame" />
      <div className="mf-content">{children}</div>
      {logos.map((logo, index) => (
        <span
          key={logo.name}
          className="mf-logo"
          ref={(node) => {
            logoRefs.current[index] = node
          }}
        >
          <img src={logo.src} alt="" />
        </span>
      ))}
    </div>
  )
}

const rootStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  minHeight: 640,
  overflow: "hidden",
  backgroundColor: "#070707",
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
  color: "#f4f1ec",
}

const css = `
.mf-beam { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
.mf-frame {
  position:absolute; inset:18px; border-radius:16px; pointer-events:none;
  border:1px solid rgba(227,98,42,0.55); background:#121212;
}
.mf-content { position:absolute; inset:18px; border-radius:16px; overflow:auto; }
.mf-logo {
  position:absolute; left:0; top:0; width:28px; height:28px; pointer-events:none;
}
.mf-logo img {
  width:100%; height:100%; object-fit:contain;
  filter: drop-shadow(1px 0 0 #fff) drop-shadow(-1px 0 0 #fff) drop-shadow(0 1px 0 #fff) drop-shadow(0 -1px 0 #fff);
}
`
