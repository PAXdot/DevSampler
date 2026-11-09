"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./motion-floating-action-button-utils/index.css"

const buttonTransition = { type: "spring" as const, stiffness: 500, damping: 30 }
const itemTransition = { type: "spring" as const, stiffness: 400, damping: 22 }

const actions = [
  {
    label: "Camera",
    icon: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z",
  },
  {
    label: "Image",
    icon: "M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM21 19H3l6-8 3 4 4-5 5 6",
  },
  {
    label: "File",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",
  },
  {
    label: "Edit",
    icon: "M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
  },
]

function PlusIcon() {
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
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function ActionIcon({ path }: { path: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

export function FloatingActionButton({
  staggerInterval = 0.05,
}: {
  staggerInterval?: number
} = {}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="fab-stage">
      <div className="fab-root">
        <div className="fab-actions">
          <AnimatePresence>
            {open &&
              actions.map((action, index) => {
                const distance = ((index + 1) / actions.length) * 80
                return (
                  <motion.button
                    key={action.label}
                    initial={{ offsetDistance: "0%", opacity: 0, scale: 0.3 }}
                    animate={{ offsetDistance: `${distance}%`, opacity: 1, scale: 1 }}
                    exit={{ offsetDistance: "0%", opacity: 0, scale: 0.3 }}
                    transition={{ ...itemTransition, delay: index * staggerInterval }}
                    className="fab-action"
                    onClick={() => setOpen(false)}
                    aria-label={action.label}
                  >
                    <ActionIcon path={action.icon} />
                    <motion.span
                      className="fab-label"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * staggerInterval + 0.1, duration: 0.15 }}
                    >
                      {action.label}
                    </motion.span>
                  </motion.button>
                )
              })}
          </AnimatePresence>
        </div>
        <motion.button
          className="fab-main"
          animate={{ rotate: open ? 45 : 0 }}
          transition={buttonTransition}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          data-primary-action
        >
          <PlusIcon />
        </motion.button>
      </div>
    </div>
  )
}

export default FloatingActionButton
