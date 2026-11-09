"use client"

import { motion } from "motion/react"
import "./motion-enter-animation-utils/index.css"

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "var(--hue-2)",
  borderRadius: "50%",
}

export function EnterAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={ball}
    />
  )
}

export default EnterAnimation
