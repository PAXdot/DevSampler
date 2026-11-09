"use client"

import { motion } from "motion/react"
import "./motion-loading-ripple-utils/index.css"

const rippleAnimate = {
  transform: ["scale(0)", "scale(1)"],
  opacity: [1, 0],
}

const rippleTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeOut" as const,
}

export function LoadingRipple() {
  return (
    <div className="container">
      <div className="ripple-container">
        <motion.div className="ripple" animate={rippleAnimate} transition={rippleTransition} />
        <motion.div
          className="ripple"
          animate={rippleAnimate}
          transition={{ ...rippleTransition, delay: 0.5 }}
        />
        <motion.div
          className="ripple"
          animate={rippleAnimate}
          transition={{ ...rippleTransition, delay: 1 }}
        />
      </div>
    </div>
  )
}

export default LoadingRipple
