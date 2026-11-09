"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import "./motion-split-text-utils/index.css"

const TEXT = "Level up your animations with the all-in membership"
const WORDS = TEXT.split(" ")

export function SplitText() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const fonts = document.fonts
    const show = () => setReady(true)
    if (!fonts?.ready) {
      show()
      return
    }
    fonts.ready.then(show)
  }, [])

  return (
    <div className="container" style={{ visibility: ready ? "visible" : "hidden" }}>
      <h1 className="h1" aria-label={TEXT}>
        {WORDS.map((word, index) => (
          <span key={`${word}-${index}`}>
            <motion.span
              className="split-word"
              initial={{ opacity: 0, y: 10 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0,
                delay: index * 0.05,
              }}
            >
              {word}
            </motion.span>
            {index < WORDS.length - 1 ? " " : null}
          </span>
        ))}
      </h1>
    </div>
  )
}

export default SplitText
