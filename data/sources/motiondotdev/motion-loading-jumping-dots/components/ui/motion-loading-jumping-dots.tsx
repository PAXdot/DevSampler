"use client"

import { motion } from "motion/react"
import "./motion-loading-jumping-dots-utils/index.css"

export function LoadingJumpingDots() {
  const jump = {
    jump: {
      transform: "translateY(-30px)",
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <motion.div
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="container"
    >
      <motion.div className="dot" variants={jump} />
      <motion.div className="dot" variants={jump} />
      <motion.div className="dot" variants={jump} />
    </motion.div>
  )
}

export default LoadingJumpingDots
