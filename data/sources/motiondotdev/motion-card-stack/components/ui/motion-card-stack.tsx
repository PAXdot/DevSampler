"use client"

import { useEffect, useRef, useState } from "react"
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react"
import "./motion-card-stack-utils/index.css"

const PHOTO = "https://examples.motion.dev"

const IMAGES = [
  { src: `${PHOTO}/photos/prague/image-03.jpg`, ratio: 3 / 4 },
  { src: `${PHOTO}/photos/prague/image-09.jpg`, ratio: 3 / 4 },
  { src: `${PHOTO}/photos/prague/image-01.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-11.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-07.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-12.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-05.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-13.jpg`, ratio: 3 / 4 },
  { src: `${PHOTO}/photos/prague/image-08.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-02.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-06.jpg`, ratio: 4 / 3 },
  { src: `${PHOTO}/photos/prague/image-10.jpg`, ratio: 3 / 4 },
  { src: `${PHOTO}/photos/prague/image-04.jpg`, ratio: 4 / 3 },
]

function mix(from: number, to: number, progress: number) {
  return from + (to - from) * progress
}

function clamp(min: number, max: number, value: number) {
  return Math.min(max, Math.max(min, value))
}

function progress(from: number, to: number, value: number) {
  if (from === to) return 1
  return (value - from) / (to - from)
}

function wrap(min: number, max: number, value: number) {
  const range = max - min
  return ((((value - min) % range) + range) % range) + min
}

function Card({
  src,
  ratio,
  index,
  currentIndex,
  totalImages,
  maxRotate,
  setNextImage,
  minDistance = 400,
  minSpeed = 50,
}: {
  src: string
  ratio: number
  index: number
  currentIndex: number
  totalImages: number
  maxRotate: number
  setNextImage: () => void
  minDistance?: number
  minSpeed?: number
}) {
  const restRotate = mix(0, maxRotate, Math.sin(index))
  const x = useMotionValue(0)
  const rotate = useTransform(x, [0, 400], [restRotate, restRotate + 10], {
    clamp: false,
  })
  const offset = wrap(0, totalImages, index - currentIndex)
  const zIndex = totalImages - offset
  const opacity = progress(totalImages * 0.25, totalImages * 0.75, zIndex)
  const scale = mix(0.5, 1, clamp(0, 1, progress(0, totalImages - 1, zIndex)))

  const onDragEnd = () => {
    const distance = Math.abs(x.get())
    const speed = Math.abs(x.getVelocity())
    if (distance > minDistance || speed > minSpeed) {
      setNextImage()
      animate(x, 0, { type: "spring", stiffness: 600, damping: 50 })
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 50 })
    }
  }

  return (
    <motion.li
      className="item"
      style={{
        width: ratio > 1 ? "100%" : "auto",
        height: ratio <= 1 ? "100%" : "auto",
        aspectRatio: String(ratio),
        zIndex,
        rotate,
        x,
      }}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity, scale }}
      whileTap={index === currentIndex ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 600, damping: 30 }}
      drag={index === currentIndex ? "x" : false}
      onDragEnd={onDragEnd}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        onPointerDown={(event) => event.preventDefault()}
      />
    </motion.li>
  )
}

export function CardStack({
  images = IMAGES,
  maxRotate = 5,
}: {
  images?: { src: string; ratio: number }[]
  maxRotate?: number
} = {}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const stackRef = useRef<HTMLUListElement>(null)
  const [minDistance, setMinDistance] = useState(400)

  useEffect(() => {
    if (stackRef.current) setMinDistance(stackRef.current.offsetWidth * 0.5)
  }, [])

  return (
    <div className="card-stack-root">
      <ul className="stack" ref={stackRef}>
        {images.map((image, index) => (
          <Card
            key={image.src}
            {...image}
            minDistance={minDistance}
            maxRotate={maxRotate}
            index={index}
            currentIndex={currentIndex}
            totalImages={images.length}
            setNextImage={() => {
              setCurrentIndex(wrap(0, images.length, currentIndex + 1))
            }}
          />
        ))}
      </ul>
      <p className="instructions big">
        Swipe the top photo left or right.
        <br />
        Swiped photos move to the back of the stack.
      </p>
    </div>
  )
}

export default CardStack
