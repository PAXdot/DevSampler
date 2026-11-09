"use client"

import { useState } from "react"
import { motion } from "motion/react"
import "./motion-dots-morph-button-utils/index.css"

const paths = [
  { dot: "M27.75 27.75L27.7499 27.7499", line: "M15.75 15.75L27.75 27.75" },
  { dot: "M27.75 3.75L27.7499 3.75007", line: "M15.75 15.75L27.75 3.75" },
  { dot: "M3.75 27.75L3.75007 27.7499", line: "M15.75 15.75L3.75 27.75" },
  { dot: "M3.75 3.75L3.75007 3.75007", line: "M3.75 3.75L14.75 14.75" },
]

export function DotsMorphButton({
  spring = { stiffness: 170, damping: 26 },
  buttonSize = 130,
  borderRadius = 65,
}: {
  spring?: { stiffness: number; damping: number }
  buttonSize?: number
  borderRadius?: number
} = {}) {
  const transition = { type: "spring" as const, ...spring }
  const [open, setOpen] = useState(false)

  return (
    <div className="dots-morph-stage">
      <motion.button
        type="button"
        className="dots-morph-btn"
        style={{ width: buttonSize, height: buttonSize, borderRadius }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((value) => !value)}
        aria-pressed={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <motion.div
          className="dots-morph-icon"
          animate={{ rotate: open ? 90 : 0 }}
          transition={transition}
        >
          <svg
            width="40%"
            height="40%"
            viewBox="0 0 32 32"
            fill="none"
            style={{ overflow: "visible", display: "block" }}
          >
            {paths.map((path, index) => (
              <motion.path
                key={index}
                stroke="var(--white)"
                strokeLinecap="round"
                initial={{ d: path.dot, strokeWidth: 12 }}
                animate={{
                  d: open ? path.line : path.dot,
                  strokeWidth: open ? 6 : 12,
                }}
                transition={{ d: spring }}
              />
            ))}
          </svg>
        </motion.div>
      </motion.button>
    </div>
  )
}

export default DotsMorphButton
