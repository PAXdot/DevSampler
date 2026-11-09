"use client"

import { useEffect } from "react"
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import "./motion-html-content-utils/index.css"

export function HtmlContent() {
  const value = useMotionValue(0)
  const display = useTransform(() => Math.round(value.get()))

  useEffect(() => {
    const controls = animate(value, 100, { duration: 5 })
    return () => controls.stop()
  }, [value])

  return (
    <motion.div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 64,
        lineHeight: 1,
        color: "var(--hue-6)",
      }}
    >
      {display}
    </motion.div>
  )
}

export default HtmlContent
