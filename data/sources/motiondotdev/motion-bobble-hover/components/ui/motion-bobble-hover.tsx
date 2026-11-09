"use client"

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react"
import { animate, frame, cancelFrame } from "motion"
import { motion, useMotionValue, useTransform, type MotionValue } from "motion/react"
import "./motion-bobble-hover-utils/index.css"

const hues = [
  "#ffe14d",
  "#8df0cc",
  "#ff5da8",
  "#a98bff",
  "#ff7a59",
  "#c6f24e",
  "#5fd8f0",
  "#ffae4d",
  "#88a8ff",
]

function clamp(min: number, max: number, value: number) {
  return Math.min(max, Math.max(min, value))
}

function clipAxis(origin: number, delta: number, min: number, max: number, range: { t0: number; t1: number }) {
  if (delta === 0) return origin >= min && origin <= max
  let tEnter = (min - origin) / delta
  let tLeave = (max - origin) / delta
  if (tEnter > tLeave) {
    const swap = tEnter
    tEnter = tLeave
    tLeave = swap
  }
  if (tEnter > range.t0) range.t0 = tEnter
  if (tLeave < range.t1) range.t1 = tLeave
  return range.t0 <= range.t1
}

function rayHit(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  box: DOMRect,
) {
  const range = { t0: 0, t1: 1 }
  if (!clipAxis(x0, x1 - x0, box.left, box.right, range)) return null
  if (!clipAxis(y0, y1 - y0, box.top, box.bottom, range)) return null
  return range.t0
}

function usePointerPosition() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerdown", onMove)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onMove)
    }
  }, [x, y])

  return { x, y }
}

function useTouchPointer(x: MotionValue<number>, y: MotionValue<number>) {
  useEffect(() => {
    let nextX = 0
    let nextY = 0
    const flush = () => {
      x.set(nextX)
      y.set(nextY)
    }
    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return
      nextX = event.clientX
      nextY = event.clientY
      frame.update(flush)
    }
    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return
      x.jump(event.clientX)
      y.jump(event.clientY)
    }
    window.addEventListener("pointerdown", onDown)
    window.addEventListener("pointermove", onMove)
    return () => {
      window.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointermove", onMove)
      cancelFrame(flush)
    }
  }, [x, y])
}

function useMouseEnterJump(x: MotionValue<number>, y: MotionValue<number>) {
  useEffect(() => {
    let armed = true
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !armed) return
      x.jump(event.clientX)
      y.jump(event.clientY)
      armed = false
    }
    const onOut = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && !event.relatedTarget) armed = true
    }
    window.addEventListener("pointermove", onMove)
    document.addEventListener("pointerout", onOut)
    return () => {
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerout", onOut)
    }
  }, [x, y])
}

function usePointerCross(
  ref: RefObject<HTMLDivElement | null>,
  pointerX: MotionValue<number>,
  pointerY: MotionValue<number>,
  onCross: (delayMs: number, velocityX: number, velocityY: number) => void,
) {
  const callback = useRef(onCross)
  useLayoutEffect(() => {
    callback.current = onCross
  })

  useEffect(() => {
    let box: DOMRect | null = null
    let inside = false
    let lastX: number | undefined
    let lastY: number | undefined

    const measure = () => {
      const node = ref.current
      if (!node) return
      box = node.getBoundingClientRect()
      frame.preRender(tick)
    }

    const tick = ({ delta }: { delta: number }) => {
      if (!box) return
      const x = pointerX.get()
      const y = pointerY.get()
      if (x === lastX && y === lastY) return
      lastX = x
      lastY = y
      const prevX = pointerX.getPrevious?.() ?? x
      const prevY = pointerY.getPrevious?.() ?? y
      const hit = rayHit(prevX, prevY, x, y, box)
      if (hit !== null) {
        if (!inside) {
          const seconds = delta / 1000
          const velocityX = seconds > 0 ? (x - prevX) / seconds : 0
          const velocityY = seconds > 0 ? (y - prevY) / seconds : 0
          callback.current(delta * (1 - hit), velocityX, velocityY)
        }
        inside = true
      } else {
        inside = false
      }
    }

    frame.read(measure, true)
    return () => {
      cancelFrame(measure)
      cancelFrame(tick)
    }
  }, [ref, pointerX, pointerY])
}

function Tile({
  index,
  hue,
  pointerX,
  pointerY,
  spring,
  offsetFactor,
  scaleFactor,
  stretchFactor,
  rotateFactor,
  maxSpeed,
  visualiseOrigin,
}: {
  index: number
  hue: string
  pointerX: MotionValue<number>
  pointerY: MotionValue<number>
  spring: { type: "spring"; stiffness: number; damping: number }
  offsetFactor: number
  scaleFactor: number
  stretchFactor: number
  rotateFactor: number
  maxSpeed: number
  visualiseOrigin: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)
  const scaleX = useMotionValue(1)
  const scaleY = useMotionValue(1)
  const originX = useMotionValue(0.5)
  const originY = useMotionValue(0.5)
  const originLeft = useTransform(originX, (value) => `${value * 100}%`)
  const originTop = useTransform(originY, (value) => `${value * 100}%`)

  function onCross(delayMs: number, velocityX: number, velocityY: number) {
    const clampedX = clamp(-maxSpeed, maxSpeed, velocityX)
    const clampedY = clamp(-maxSpeed, maxSpeed, velocityY)
    const speed = Math.min(Math.hypot(clampedX, clampedY), maxSpeed)
    originX.set(0.5 + (0.5 * clampedX) / maxSpeed)
    originY.set(0.5 + (0.5 * clampedY) / maxSpeed)
    const scaleVelocity = speed * scaleFactor
    const stretch = (Math.abs(clampedX) - Math.abs(clampedY)) * stretchFactor
    const delay = -delayMs / 1000
    animate(x, 0, { ...spring, velocity: clampedX * offsetFactor, delay })
    animate(y, 0, { ...spring, velocity: clampedY * offsetFactor, delay })
    animate(rotate, 0, { ...spring, velocity: clampedX * rotateFactor, delay })
    animate(scaleX, 1, { ...spring, velocity: scaleVelocity + stretch, delay })
    animate(scaleY, 1, { ...spring, velocity: scaleVelocity - stretch, delay })
  }

  usePointerCross(ref, pointerX, pointerY, onCross)

  return (
    <motion.div
      ref={ref}
      className="tile"
      style={{
        x,
        y,
        rotate,
        scaleX,
        scaleY,
        originX,
        originY,
        background: hue,
      }}
    >
      <span className="tile-index">{String(index + 1).padStart(2, "0")}</span>
      {visualiseOrigin && <motion.div className="origin-dot" style={{ left: originLeft, top: originTop }} />}
    </motion.div>
  )
}

export function BobbleHover({
  gridSize = 3,
  offsetFactor = 0.8,
  scaleFactor = 8e-4,
  stretchFactor = 0.0015,
  rotateFactor = 0.03,
  maxSpeed = 4000,
  stiffness = 200,
  damping = 7,
  visualiseOrigin = false,
}: {
  gridSize?: number
  offsetFactor?: number
  scaleFactor?: number
  stretchFactor?: number
  rotateFactor?: number
  maxSpeed?: number
  stiffness?: number
  damping?: number
  visualiseOrigin?: boolean
} = {}) {
  const pointer = usePointerPosition()
  useTouchPointer(pointer.x, pointer.y)
  useMouseEnterJump(pointer.x, pointer.y)
  const spring = { type: "spring" as const, stiffness, damping }
  const count = gridSize * gridSize

  return (
    <div className="bobble-stage">
      <div className="bobble-grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {Array.from({ length: count }, (_, index) => (
          <Tile
            key={index}
            index={index}
            hue={hues[index % hues.length]}
            pointerX={pointer.x}
            pointerY={pointer.y}
            spring={spring}
            offsetFactor={offsetFactor}
            scaleFactor={scaleFactor}
            stretchFactor={stretchFactor}
            rotateFactor={rotateFactor}
            maxSpeed={maxSpeed}
            visualiseOrigin={visualiseOrigin}
          />
        ))}
      </div>
    </div>
  )
}

export default BobbleHover
