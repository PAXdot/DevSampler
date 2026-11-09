"use client"

import { useRef } from "react"
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react"
import "./motion-ios-slider-utils/index.css"

function mix(from: number, to: number, value: number) {
  return from + (to - from) * value
}

function clamp(min: number, max: number, value: number) {
  return Math.min(max, Math.max(min, value))
}

function progress(from: number, to: number, value: number) {
  if (from === to) return 1
  return (value - from) / (to - from)
}

function invert(value: number) {
  return 1 / value
}

function BrightnessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#101417"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ios-slider-icon"
    >
      <circle cx="12" cy="12" r="4" stroke="#101417" fill="#101417" />
      <path d="M12 3v1" />
      <path d="M12 20v1" />
      <path d="M3 12h1" />
      <path d="M20 12h1" />
      <path d="m18.364 5.636-.707.707" />
      <path d="m6.343 17.657-.707.707" />
      <path d="m5.636 5.636.707.707" />
      <path d="m17.657 17.657.707.707" />
    </svg>
  )
}

export function IosSlider({
  maxPull = 20,
  maxSquish = 0.92,
  maxStretch = 1.08,
  keyboardStep = 0.05,
  keyboardSpring = { stiffness: 200, damping: 60 },
}: {
  maxPull?: number
  maxSquish?: number
  maxStretch?: number
  keyboardStep?: number
  keyboardSpring?: { stiffness: number; damping: number }
} = {}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const startClientY = useRef(0)
  const startPixel = useRef(0)
  const bounds = useRef({ top: 0, bottom: 0 })
  const value = useMotionValue(0.5)
  const fill = useTransform(() => clamp(0, 1, value.get()))
  const pullY = useTransform(value, [-1, 0, 1, 2], [maxPull, 0, 0, -maxPull])
  const scaleX = useTransform(
    pullY,
    [-maxPull, 0, 0, maxPull],
    [maxSquish, 1, 1, maxSquish],
  )
  const scaleY = useTransform(
    pullY,
    [-maxPull, 0, 0, maxPull],
    [maxStretch, 1, 1, maxStretch],
  )
  const iconScaleX = useTransform(() => invert(scaleX.get()))
  const iconScaleY = useTransform(() => invert(scaleY.get()))

  const setFromClientY = (clientY: number) => {
    const { top, bottom } = bounds.current
    value.set(progress(bottom, top, clientY))
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return
    let next = clamp(0, 1, value.get())
    if (next <= 0.04) next = 0
    if (next >= 0.96) next = 1
    const stepped = next + (event.key === "ArrowUp" ? keyboardStep : -keyboardStep)
    if (stepped > 1) {
      animate(value, 1, { velocity: 20, type: "spring", ...keyboardSpring })
    } else if (stepped < 0) {
      animate(value, 0, { velocity: -20, type: "spring", ...keyboardSpring })
    } else {
      value.jump(clamp(0, 1, stepped))
    }
  }

  return (
    <div className="ios-slider-stage">
      <motion.div
        ref={trackRef}
        className="ios-slider-track"
        style={{ y: pullY, scaleX, scaleY }}
        tabIndex={0}
        onTapStart={(event) => {
          if (!trackRef.current) return
          const rect = trackRef.current.getBoundingClientRect()
          bounds.current = { top: rect.top, bottom: rect.bottom }
          const clientY = "clientY" in event ? event.clientY : 0
          startClientY.current = clientY
          startPixel.current = mix(rect.bottom, rect.top, value.get())
        }}
        onPan={(event) => {
          const clientY = "clientY" in event ? event.clientY : 0
          const next = startPixel.current + (clientY - startClientY.current)
          setFromClientY(next)
        }}
        onPanEnd={() => {
          const current = value.get()
          if (current < 0) animate(value, 0)
          else if (current > 1) animate(value, 1)
        }}
        onFocus={() => {
          document.addEventListener("keydown", onKeyDown)
        }}
        onBlur={() => {
          document.removeEventListener("keydown", onKeyDown)
        }}
        transition={{ duration: 0.15 }}
        initial={{ boxShadow: "0px 0px 0px 4px #0d63f800" }}
        whileFocus={{ boxShadow: "0px 0px 0px 4px #0d63f8ff" }}
      >
        <motion.div className="ios-slider-fill" style={{ scaleY: fill }} />
        <motion.div style={{ scaleX: iconScaleX, scaleY: iconScaleY }}>
          <BrightnessIcon />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default IosSlider
