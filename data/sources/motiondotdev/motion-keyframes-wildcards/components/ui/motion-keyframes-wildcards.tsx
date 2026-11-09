"use client"

import { motion } from "motion/react"
import "./motion-keyframes-wildcards-utils/index.css"

const box = {
  width: 100,
  height: 100,
  backgroundColor: "var(--hue-5)",
  borderRadius: 5,
}

export function KeyframesWildcards() {
  return (
    <motion.div
      style={box}
      whileHover={{
        scale: [null, 1.1, 1.6],
        transition: {
          duration: 0.5,
          times: [0, 0.6, 1],
          ease: ["easeInOut", "easeOut"],
        },
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    />
  )
}

export default KeyframesWildcards
