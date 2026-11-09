"use client"

import { motion } from "motion/react"
import "./motion-loading-pulse-dots-utils/index.css"

export function LoadingPulseDots() {
  const pulse = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  }

  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="container"
    >
      <motion.div className="dot" variants={pulse} />
      <motion.div className="dot" variants={pulse} />
      <motion.div className="dot" variants={pulse} />
    </motion.div>
  )
}

export default LoadingPulseDots
