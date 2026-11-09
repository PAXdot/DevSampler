"use client"

import { useEffect, useState } from "react"
import { animate } from "motion/react"
import "./motion-scramble-text-hover-utils/index.css"

const TEXT = "Hover me"
const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▀▄■□▪▫●○◆◇◈◊※†‡"

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)] ?? "?"
}

function scramble(target: string, progress: number) {
  const reveal = Math.floor(target.length * progress)
  return target
    .split("")
    .map((ch, i) => {
      if (ch === " ") return " "
      if (i < reveal) return ch
      return randomChar()
    })
    .join("")
}

export function ScrambleTextHover() {
  const [hovered, setHovered] = useState(false)
  const [display, setDisplay] = useState(TEXT)

  useEffect(() => {
    if (!hovered) {
      setDisplay(TEXT)
      return
    }

    let progress = 0
    const ctrl = animate(0, 1, {
      duration: 0.75,
      ease: "easeOut",
      onUpdate: (value) => {
        progress = value
      },
      onComplete: () => {
        setDisplay(TEXT)
      },
    })
    const id = window.setInterval(() => {
      setDisplay(scramble(TEXT, progress))
    }, 32)

    return () => {
      ctrl.stop()
      window.clearInterval(id)
    }
  }, [hovered])

  return (
    <div
      className="container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text" aria-label={TEXT}>
        {display}
      </h1>
    </div>
  )
}

export default ScrambleTextHover
