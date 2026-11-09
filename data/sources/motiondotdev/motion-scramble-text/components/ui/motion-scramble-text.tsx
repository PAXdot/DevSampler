"use client"

import { useEffect, useState } from "react"
import "./motion-scramble-text-utils/index.css"

const WORDS = [
  "Animate",
  "Spring",
  "Easing",
  "Damping",
  "Physics",
  "Stagger",
  "Transform",
  "Variants",
  "Motion Value",
  "Timeline",
  "Gestures",
  "Drag",
  "Hover",
  "Layout",
  "Viewport",
  "State Change",
] as const

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▀▄■□▪▫●○◆◇◈◊※†‡"

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

function scrambleWord(target: string, progress: number) {
  const reveal = Math.floor(progress * target.length)
  return target
    .split("")
    .map((ch, i) => (i < reveal ? ch : randomChar()))
    .join("")
}

export function ScrambleText() {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState<string>(WORDS[0])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % WORDS.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const target = WORDS[index]
    const duration = 600
    const started = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration)
      setDisplay(progress >= 1 ? target : scrambleWord(target, progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [index])

  return (
    <div className="container">
      <h1 className="text">{display}</h1>
    </div>
  )
}

export default ScrambleText
