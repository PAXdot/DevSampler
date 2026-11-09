"use client"

import { useEffect, useRef, type RefObject } from "react"
import { frame } from "motion"
import { motion, useSpring } from "motion/react"
import "./motion-follow-pointer-utils/index.css"

const spring = {
  damping: 3,
  stiffness: 50,
  restDelta: 0.001,
}

function readFrame(callback: () => void) {
  if (typeof frame?.read === "function") {
    frame.read(callback)
    return
  }
  requestAnimationFrame(callback)
}

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  useEffect(() => {
    const onMove = ({ clientX, clientY }: PointerEvent) => {
      readFrame(() => {
        const element = ref.current
        if (!element) return
        const parent = element.offsetParent
        const originX =
          parent instanceof HTMLElement ? parent.getBoundingClientRect().left : 0
        const originY =
          parent instanceof HTMLElement ? parent.getBoundingClientRect().top : 0
        x.set(clientX - originX - element.offsetLeft - element.offsetWidth / 2)
        y.set(clientY - originY - element.offsetTop - element.offsetHeight / 2)
      })
    }

    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [ref, x, y])

  return { x, y }
}

export function FollowPointer() {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y } = useFollowPointer(ref)

  return (
    <div className="follow-pointer-stage">
      <motion.div ref={ref} className="follow-pointer-ball" style={{ x, y }} />
    </div>
  )
}

export default FollowPointer
