"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./motion-copy-button-utils/index.css"

const swapSpring = { stiffness: 260, damping: 18 }
const buttonSpring = { stiffness: 400, damping: 20 }
const checkSpring = { stiffness: 300, damping: 25 }
const resetDelay = 2000

const labelVariants = {
  initial: { opacity: 0, filter: "blur(4px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(4px)" },
}

const rowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  willChange: "opacity, filter",
} as const

const iconWrapStyle = {
  display: "flex",
  alignItems: "center",
} as const

function CopyIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

function CheckIcon({ spring }: { spring: { stiffness: number; damping: number } }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M4 12l5 5L20 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ type: "spring", ...spring, delay: 0.1 }}
      />
    </svg>
  )
}

export function CopyButton() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const onClick = () => {
    if (copied) return
    setCopied(true)
    timeoutRef.current = setTimeout(() => setCopied(false), resetDelay)
  }

  return (
    <motion.button
      className="copy-btn"
      style={{ borderRadius: 10 }}
      layout
      data-primary-action
      data-copied={copied || undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", ...buttonSpring }}
      onClick={onClick}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={copied ? "copied" : "copy"}
          style={rowStyle}
          layout="position"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
          transition={{
            type: "spring",
            ...swapSpring,
            staggerChildren: copied ? 0.2 : 0,
          }}
        >
          <motion.span style={iconWrapStyle} variants={labelVariants}>
            {copied ? <CheckIcon spring={checkSpring} /> : <CopyIcon />}
          </motion.span>
          <motion.span variants={labelVariants}>{copied ? "Copied!" : "Copy"}</motion.span>
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyButton
