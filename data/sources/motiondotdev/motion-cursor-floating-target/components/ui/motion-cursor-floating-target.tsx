"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react"
import { transform } from "motion"
import {
  motion,
  useAnimate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import "./motion-cursor-floating-target-utils/index.css"

function usePointerPosition() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [x, y])

  return { x, y }
}

type Kind = "default" | "text" | "magnetic"

type CursorState = {
  stageRef: RefObject<HTMLDivElement | null>
  kind: Kind
  caret: number
  targetBoundingBox: DOMRect | null
  pressed: boolean
  zone: string | null
}

const CursorCtx = createContext<CursorState | null>(null)

function useCursorState() {
  const ctx = useContext(CursorCtx)
  if (!ctx) throw new Error("Cursor must render inside Stage")
  return ctx
}

function Stage({
  children,
  className = "cursor-stage",
}: {
  children: ReactNode
  className?: string
}) {
  const stageRef = useRef<HTMLDivElement>(null)
  const [kind, setKind] = useState<Kind>("default")
  const [targetBoundingBox, setTarget] = useState<DOMRect | null>(null)
  const [pressed, setPressed] = useState(false)

  return (
    <CursorCtx.Provider
      value={{
        stageRef,
        kind,
        caret: 18,
        targetBoundingBox,
        pressed,
        zone: null,
      }}
    >
      <div
        ref={stageRef}
        className={className}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => {
          setPressed(false)
          setKind("default")
          setTarget(null)
        }}
        onPointerMove={(e) => {
          const mag = (e.target as HTMLElement).closest(
            "[data-magnetic]",
          ) as HTMLElement | null
          if (mag) {
            setKind("magnetic")
            setTarget(mag.getBoundingClientRect())
            return
          }
          setKind("default")
          setTarget(null)
        }}
      >
        {children}
      </div>
    </CursorCtx.Provider>
  )
}

function Cursor({
  follow = false,
  offset = { x: 0, y: 0 },
  spring: springCfg,
  magnetic,
  variants = {},
  style,
  className,
  children,
}: {
  follow?: boolean
  offset?: { x: number; y: number }
  spring?: { stiffness?: number; damping?: number }
  magnetic?: boolean | { morph?: boolean; snap?: number }
  variants?: Record<string, Record<string, unknown>>
  style?: CSSProperties
  className?: string
  children?: ReactNode
}) {
  const { stageRef, kind, targetBoundingBox, pressed } = useCursorState()
  const pointer = usePointerPosition()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const baseW = Number(style?.width ?? 16)
  const baseH = Number(style?.height ?? 16)
  const w = useMotionValue(baseW)
  const h = useMotionValue(baseH)
  const opts =
    springCfg ??
    (follow ? { stiffness: 140, damping: 18 } : { stiffness: 900, damping: 55 })
  const x = useSpring(rawX, opts)
  const y = useSpring(rawY, opts)
  const snap = typeof magnetic === "object" ? (magnetic.snap ?? 1) : 1
  const morph =
    typeof magnetic === "object" ? magnetic.morph !== false : Boolean(magnetic)
  const magneticOn = Boolean(magnetic)

  useEffect(() => {
    const sync = () => {
      const stage = stageRef.current
      if (!stage) return
      const sr = stage.getBoundingClientRect()
      const px = pointer.x.get() - sr.left + offset.x
      const py = pointer.y.get() - sr.top + offset.y
      if (magneticOn && kind === "magnetic" && targetBoundingBox) {
        const tx =
          targetBoundingBox.left + targetBoundingBox.width / 2 - sr.left
        const ty =
          targetBoundingBox.top + targetBoundingBox.height / 2 - sr.top
        rawX.set(px + (tx - px) * snap)
        rawY.set(py + (ty - py) * snap)
        if (morph) {
          w.set(targetBoundingBox.width)
          h.set(targetBoundingBox.height)
        } else {
          w.set(baseW)
          h.set(baseH)
        }
        return
      }
      rawX.set(pointer.x.get() ? px : sr.width / 2)
      rawY.set(pointer.y.get() ? py : sr.height / 2)
      w.set(baseW)
      h.set(baseH)
    }
    const stage = stageRef.current
    if (stage) {
      const sr = stage.getBoundingClientRect()
      rawX.set(sr.width / 2)
      rawY.set(sr.height / 2)
    }
    const ux = pointer.x.on("change", sync)
    const uy = pointer.y.on("change", sync)
    return () => {
      ux()
      uy()
    }
  }, [
    baseH,
    baseW,
    kind,
    magneticOn,
    morph,
    offset.x,
    offset.y,
    pointer.x,
    pointer.y,
    rawX,
    rawY,
    snap,
    stageRef,
    targetBoundingBox,
    w,
    h,
  ])

  const variantKey =
    pressed && variants.pressed
      ? "pressed"
      : magneticOn && kind === "magnetic" && variants.magnetic
        ? "magnetic"
        : "default"

  const { width: _w, height: _h, ...restStyle } = style ?? {}

  return (
    <motion.div
      className={className}
      data-cursor=""
      initial={false}
      animate={variantKey}
      variants={variants}
      style={{
        ...restStyle,
        position: "absolute",
        top: 0,
        left: 0,
        x,
        y,
        width: w,
        height: h,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      {children}
    </motion.div>
  )
}

function useAway(
  stageRef: RefObject<HTMLDivElement | null>,
  axis: "x" | "y",
) {
  const pointer = usePointerPosition()
  const [moved, setMoved] = useState(false)
  const raw = useMotionValue(0)
  const sprung = useSpring(raw, { damping: 80, stiffness: 200 })

  useEffect(() => {
    const enable = () => setMoved(true)
    window.addEventListener("mousemove", enable)
    return () => window.removeEventListener("mousemove", enable)
  }, [])

  useEffect(() => {
    const sync = () => {
      const stage = stageRef.current
      if (!stage || !moved) {
        raw.set(0)
        return
      }
      const rect = stage.getBoundingClientRect()
      const value =
        axis === "x" ? pointer.x.get() - rect.left : pointer.y.get() - rect.top
      const size = axis === "x" ? rect.width : rect.height
      raw.set(transform([0, size], [18, -18])(value))
    }
    const ux = pointer.x.on("change", sync)
    const uy = pointer.y.on("change", sync)
    return () => {
      ux()
      uy()
    }
  }, [axis, moved, pointer.x, pointer.y, raw, stageRef])

  return sprung
}

const RING_TEXT = "See more • See more • See more • See more • "

export function CursorFloatingTarget() {
  const { stageRef } = useCursorState()
  const [scope, animateText] = useAnimate()
  const x = useAway(stageRef, "x")
  const y = useAway(stageRef, "y")
  const originX = useTransform(x, [18, -18], [0, 1])
  const originY = useTransform(y, [18, -18], [0, 1])

  useEffect(() => {
    animateText(
      scope.current,
      { transform: ["rotate(0deg)", "rotate(360deg)"] },
      { duration: 8, ease: "linear", repeat: Infinity },
    )
  }, [animateText, scope])

  return (
    <>
      <div className="decorative-title">Amsterdam</div>
      <motion.button
        className="target"
        data-magnetic=""
        initial={false}
        animate="idle"
        whileTap="pressed"
        whileHover="hover"
        style={{ x, y }}
      >
        <motion.div className="target-circle" variants={{ pressed: { scale: 0.9 } }}>
          <motion.div
            className="fill-circle"
            variants={{ hover: { scale: 1.1 }, idle: { scale: 0 } }}
            style={{ originX, originY }}
          />
        </motion.div>
        <motion.div
          ref={scope}
          className="text"
          variants={{
            hover: { letterSpacing: "1px" },
            idle: { letterSpacing: "7px" },
          }}
        >
          {RING_TEXT.split("").map((char, index, all) => (
            <span
              key={index}
              className="char"
              style={{
                transform: `rotate(${(index * 360) / all.length}deg) translateY(-70px)`,
              }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      </motion.button>
      <Cursor style={{ width: 5, height: 5 }} className="cursor" />
      <Cursor
        follow
        spring={{ stiffness: 1000, damping: 50 }}
        magnetic={{ snap: 0.9 }}
        style={{ width: 40, height: 40, borderRadius: 200 }}
        variants={{ magnetic: { opacity: 0 } }}
        className="reticule"
      />
    </>
  )
}

export function CursorFloatingTargetDemo() {
  return (
    <Stage>
      <CursorFloatingTarget />
    </Stage>
  )
}

export default CursorFloatingTargetDemo
