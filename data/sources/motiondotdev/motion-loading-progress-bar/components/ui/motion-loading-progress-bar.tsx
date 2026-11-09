"use client"

import { useEffect } from "react"
import { motion, useSpring } from "motion/react"
import "./motion-loading-progress-bar-utils/index.css"

function useProgress() {
  const progress = useSpring(0)

  useEffect(() => {
    const id = setInterval(() => {
      const next = progress.get() + Math.random() * 0.2
      if (next >= 1) clearInterval(id)
      progress.set(next)
    }, 500)
    return () => clearInterval(id)
  }, [progress])

  return progress
}

export function LoadingProgressBar() {
  const progress = useProgress()

  return (
    <div className="container">
      <div className="progress-container">
        <motion.div className="progress-bar" style={{ scaleX: progress }} />
      </div>
    </div>
  )
}

export default LoadingProgressBar
