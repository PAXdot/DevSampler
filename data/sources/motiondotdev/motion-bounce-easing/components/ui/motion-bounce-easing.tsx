"use client"

import { useState } from "react"
import { motion } from "motion/react"
import "./motion-bounce-easing-utils/index.css"

function bounceEase(e: number) {
  return e < 1 / 2.75
    ? 7.5625 * e * e
    : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
}

const offTransition = { duration: 1.2, ease: bounceEase }
const onTransition = { type: "spring" as const, stiffness: 700, damping: 30 }

export function BounceEasing() {
  const [isOn, setIsOn] = useState(true)

  return (
    <div className="container">
      <div
        className="switch"
        data-is-on={isOn}
        onClick={() => setIsOn(!isOn)}
      >
        <motion.div
          className="ball"
          layout
          transition={isOn ? onTransition : offTransition}
        />
      </div>
    </div>
  )
}

export default BounceEasing
