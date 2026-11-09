"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import { animate } from "motion"
import { AnimatePresence, motion, useTime, useTransform } from "motion/react"
import "./motion-multi-state-badge-utils/index.css"

const STATES = {
  idle: "Start",
  processing: "Processing",
  success: "Done",
  error: "Something went wrong",
} as const

type BadgeState = keyof typeof STATES

function getNextState(state: BadgeState): BadgeState {
  const keys = Object.keys(STATES) as BadgeState[]
  return keys[(keys.indexOf(state) + 1) % keys.length]
}

const layoutSpring = { type: "spring" as const, stiffness: 600, damping: 30 }
const pathSpring = { type: "spring" as const, stiffness: 150, damping: 20 }
const pathDraw = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: pathSpring,
}

const ICON = 20
const VIEW = 24
const iconSvg = {
  width: ICON,
  height: ICON,
  viewBox: `0 0 ${VIEW} ${VIEW}`,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function CheckIcon() {
  return (
    <motion.svg {...iconSvg}>
      <motion.polyline points="4 12 9 17 20 6" {...pathDraw} />
    </motion.svg>
  )
}

function SpinnerIcon() {
  const time = useTime()
  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false })

  return (
    <motion.div
      style={{
        rotate,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: ICON,
        height: ICON,
      }}
    >
      <motion.svg {...iconSvg}>
        <motion.path d="M21 12a9 9 0 1 1-6.219-8.56" {...pathDraw} />
      </motion.svg>
    </motion.div>
  )
}

function ErrorIcon() {
  return (
    <motion.svg {...iconSvg}>
      <motion.line x1="6" y1="6" x2="18" y2="18" {...pathDraw} />
      <motion.line
        x1="18"
        y1="6"
        x2="6"
        y2="18"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ ...pathSpring, delay: 0.1 }}
      />
    </motion.svg>
  )
}

function Icon({ state }: { state: BadgeState }) {
  let icon = null
  if (state === "processing") icon = <SpinnerIcon />
  if (state === "success") icon = <CheckIcon />
  if (state === "error") icon = <ErrorIcon />

  return (
    <motion.span
      style={styles.iconContainer}
      animate={{ width: state === "idle" ? 0 : 20 }}
      transition={layoutSpring}
    >
      <AnimatePresence>
        <motion.span
          key={state}
          style={styles.icon}
          initial={{ y: -40, scale: 0.5, filter: "blur(6px)" }}
          animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ y: 40, scale: 0.5, filter: "blur(6px)" }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

function Label({ state }: { state: BadgeState }) {
  const [width, setWidth] = useState(0)
  const measureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!measureRef.current) return
    setWidth(measureRef.current.getBoundingClientRect().width)
  }, [state])

  return (
    <>
      <div
        ref={measureRef}
        style={{ position: "absolute", visibility: "hidden", whiteSpace: "nowrap" }}
      >
        {STATES[state]}
      </div>
      <motion.span layout style={{ position: "relative" }} animate={{ width }} transition={layoutSpring}>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={state}
            style={{ textWrap: "nowrap" }}
            initial={{ y: -20, opacity: 0, filter: "blur(10px)", position: "absolute" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)", position: "relative" }}
            exit={{ y: 20, opacity: 0, filter: "blur(10px)", position: "absolute" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {STATES[state]}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    </>
  )
}

function Badge({ state }: { state: BadgeState }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (state === "error") {
      animate(ref.current, { x: [0, -6, 6, -6, 0] }, {
        duration: 0.3,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: 0,
        delay: 0.1,
      })
    } else if (state === "success") {
      animate(ref.current, { scale: [1, 1.2, 1] }, {
        duration: 0.3,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: 0,
      })
    }
  }, [state])

  return (
    <motion.div ref={ref} style={{ ...styles.badge, gap: state === "idle" ? 0 : 8 }}>
      <Icon state={state} />
      <Label state={state} />
    </motion.div>
  )
}

export function MultiStateBadge() {
  const [state, setState] = useState<BadgeState>("idle")

  return (
    <div className="multi-state-badge-wrap">
      <button type="button" onClick={() => setState(getNextState(state))}>
        <Badge state={state} />
      </button>
    </div>
  )
}

const styles: Record<string, CSSProperties> = {
  badge: {
    backgroundColor: "var(--white)",
    color: "var(--black)",
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 20px",
    borderRadius: 999,
    willChange: "transform, filter",
  },
  iconContainer: {
    height: 20,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    left: 0,
    top: 0,
  },
}

export default MultiStateBadge
