"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./motion-exit-animation-utils/index.css"

const container = {
  display: "flex",
  flexDirection: "column",
  width: 100,
  height: 160,
  position: "relative",
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "var(--hue-5)",
  borderRadius: "10px",
}

const button = {
  backgroundColor: "var(--hue-5)",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "var(--black)",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
}

export function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div style={container}>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        type="button"
        style={button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  )
}

export default ExitAnimation
