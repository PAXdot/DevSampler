"use client"

import { useEffect, useState } from "react"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react"
import "./motion-loading-line-reveal-utils/index.css"

const photos = [
  { url: "https://cdn.21st.dev/assets/mirror/05/05d83d26e35a481d492b457cf9f65cabc5eb080018c1d5fc56fc1ce6ce88ce7e.jpg", aspectRatio: "4 / 3" },
  { url: "https://cdn.21st.dev/assets/mirror/cb/cb538d1ab47007eae9978185be7b21cbc5230f07badd6729a7e593b91c3954fd.jpg", aspectRatio: "3 / 4" },
  { url: "https://cdn.21st.dev/assets/mirror/a3/a3c474a3e85a205f11e7b657dfcf0a128d046ff0323c36534604eec3485de1e0.jpg", aspectRatio: "3 / 4" },
  { url: "https://cdn.21st.dev/assets/mirror/e6/e6d4938ee2acf6b66f4fc50f7a8a8528041fef7839ffdf812d93d88f91fbdd9f.jpg", aspectRatio: "3 / 4" },
  { url: "https://cdn.21st.dev/assets/mirror/e9/e96a928b5ffb3db9e49f9af68dc0ef0bb3d1b1134e618468b223f8bd350f1362.jpg", aspectRatio: "4 / 3" },
  { url: "https://cdn.21st.dev/assets/mirror/27/272ace2ffc74d0637badfec927e6f5bba61df7d637a9490c1fc2476451aac33d.jpg", aspectRatio: "3 / 4" },
]

function useRevealProgress() {
  const progress = useSpring(0, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const id = setInterval(() => {
      const next = progress.get() + Math.random() * 0.3
      if (next >= 1) {
        progress.set(1)
        clearInterval(id)
      } else {
        progress.set(next)
      }
    }, 300)
    return () => clearInterval(id)
  }, [progress])

  return progress
}

function Gallery() {
  return (
    <ul className="gallery-container">
      {photos.map((photo, index) => (
        <li key={photo.url} className="gallery-item">
          <img
            src={photo.url}
            alt={`Gallery item ${index + 1}`}
            style={{
              aspectRatio: photo.aspectRatio,
              height: photo.aspectRatio === "4 / 3" ? "100%" : "auto",
              width: photo.aspectRatio === "3 / 4" ? "100%" : "auto",
            }}
          />
        </li>
      ))}
    </ul>
  )
}

export function LoadingLineReveal() {
  const progress = useRevealProgress()
  const [opened, setOpened] = useState(false)
  const leftEdge = useMotionValue("calc(50% - 2px)")
  const rightEdge = useMotionValue("calc(50% + 2px)")
  const topEdge = useTransform(progress, [0, 1], ["50%", "0%"])
  const bottomEdge = useTransform(progress, [0, 1], ["50%", "100%"])
  const clipPath = useMotionTemplate`polygon(
      0% 0%, ${leftEdge} 0%, ${leftEdge} ${topEdge}, ${leftEdge} ${bottomEdge}, ${rightEdge} ${bottomEdge}, ${rightEdge} ${topEdge}, 
      ${leftEdge} ${topEdge}, ${leftEdge} 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%
    )`

  useMotionValueEvent(progress, "change", (value) => {
    if (value >= 1 && !opened) setOpened(true)
  })

  useEffect(() => {
    if (!opened) return
    const spring = { type: "spring" as const, visualDuration: 0.5, bounce: 0 }
    animate(leftEdge, "calc(0% - 0px)", spring)
    animate(rightEdge, "calc(100% + 0px)", spring)
  }, [opened, leftEdge, rightEdge])

  return (
    <div className="line-reveal-container">
      <Gallery />
      <motion.div className="black-overlay" animate={{ opacity: opened ? 0 : 1 }} />
      <motion.div className="pink-overlay" style={{ clipPath }} />
    </div>
  )
}

export default LoadingLineReveal
