"use client"

import { useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./motion-animate-presence-modes-utils/index.css"

type PresenceMode = "sync" | "wait" | "popLayout"

function RefreshIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}

function LoaderIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
      <path d="m21 3-9 9" />
      <path d="M15 3h6v6" />
    </svg>
  )
}

function PresenceColumn({
  mode,
  icon,
  state,
}: {
  mode: PresenceMode
  icon: ReactNode
  state: boolean
}) {
  const sharedEase = [0.26, 0.02, 0.23, 0.94] as const

  return (
    <div className="presence-column">
      <div className="presence-stage">
        <AnimatePresence mode={mode}>
          <motion.div
            key={String(state)}
            className="presence-orb"
            style={{
              backgroundColor: state ? "var(--white)" : "transparent",
              color: state ? "var(--black)" : "var(--white)",
              border: state ? "2px solid var(--border)" : "2px solid var(--white)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              ease: mode === "wait" ? [0.02, 0.35, 0.25, 0.99] : sharedEase,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              ease: mode === "wait" ? [0.46, 0.04, 0.97, 0.44] : sharedEase,
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        </AnimatePresence>
      </div>
      <code className="presence-label">{mode}</code>
    </div>
  )
}

export function AnimatePresenceModes() {
  const [on, setOn] = useState(true)

  return (
    <div className="presence-modes">
      <div className="presence-row">
        <PresenceColumn mode="sync" icon={<RefreshIcon />} state={on} />
        <PresenceColumn mode="wait" icon={<LoaderIcon />} state={on} />
        <PresenceColumn mode="popLayout" icon={<ExternalIcon />} state={on} />
      </div>
      <motion.button
        type="button"
        className="presence-switch"
        onClick={() => setOn((value) => !value)}
        whileTap={{ scale: 0.95 }}
      >
        Switch
      </motion.button>
    </div>
  )
}

export default AnimatePresenceModes
