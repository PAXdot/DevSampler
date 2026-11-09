"use client"

import { useState } from "react"
import { motion } from "motion/react"
import "./motion-layout-animation-utils/index.css"

export function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false)

  return (
    <button
      type="button"
      className="layout-toggle"
      style={{ justifyContent: `flex-${isOn ? "start" : "end"}` }}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        className="layout-toggle__handle"
        layout
        transition={{ type: "spring", visualDuration: 0.2, bounce: 0.2 }}
      />
    </button>
  )
}

export default LayoutAnimation
