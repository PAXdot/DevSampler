"use client"

import { motion } from "motion/react"
import "./motion-loading-circle-spinner-utils/index.css"

export function LoadingCircleSpinner() {
  return (
    <div className="loading-circle-spinner">
      <motion.div
        className="loading-circle-spinner__ring"
        animate={{ transform: "rotate(360deg)" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export default LoadingCircleSpinner
