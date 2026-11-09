"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import "./motion-typewriter-utils/index.css"

const monospace: React.CSSProperties = {
  fontFamily: `"Geist Mono", monospace`,
}

const cursor: React.CSSProperties = {
  background: "var(--hue-1)",
  width: 2,
}

export function TypewriterExample({
  text = "Hello world!",
}: {
  text?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= text.length) return
    const timeout = window.setTimeout(() => setCount((value) => value + 1), 70)
    return () => window.clearTimeout(timeout)
  }, [count, text])

  return (
    <h2 className="typewriter" style={monospace}>
      {text.slice(0, count)}
      <motion.span
        aria-hidden
        className="typewriter-caret"
        style={cursor}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
      />
    </h2>
  )
}

export default TypewriterExample
