"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import "./motion-hold-to-confirm-utils/index.css"

export function HoldToConfirm() {
  const progress = useMotionValue(0)
  const circleStrokeWidth = useTransform(progress, [0, 1], [0, 20])
  const circleRotation = useTransform(progress, [0, 1], ["-90deg", "-90deg"])
  const circleColor = useTransform(progress, [0, 1], ["#ffffff", "#8df0cc"])
  const buttonScale = useTransform(progress, [0, 1], [1, 0.85])
  const buttonProgressX = useTransform(progress, [0, 1], ["-200%", "0%"])

  return (
    <div className="hold-confirm-stage">
      <div className="hold-confirm-wrap">
        <motion.button
          className="hold-confirm-btn"
          style={{ scale: buttonScale }}
          onPointerDown={() => {
            progress.set(0)
            animate(progress, 1, { duration: 2, ease: "easeOut" })
          }}
          onPointerUp={() => {
            animate(progress, 0, { duration: 0.3 })
          }}
          onPointerLeave={() => {
            animate(progress, 0, { duration: 0.3 })
          }}
        >
          <motion.div className="hold-confirm-fill" style={{ x: buttonProgressX }} />
          <span style={{ pointerEvents: "none" }}>Hold to confirm</span>
        </motion.button>
        <motion.svg
          className="hold-confirm-ring"
          width="320"
          height="320"
          viewBox="0 0 320 320"
        >
          <motion.circle
            cx="160"
            cy="160"
            r="120"
            fill="none"
            stroke="var(--white-feint)"
            strokeWidth="24"
            strokeLinecap="round"
            style={{
              rotate: circleRotation,
              transformOrigin: "center",
              opacity: progress,
              strokeWidth: circleStrokeWidth,
              stroke: circleColor,
              pathLength: progress,
            }}
          />
        </motion.svg>
      </div>
    </div>
  )
}

export default HoldToConfirm
