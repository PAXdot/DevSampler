"use client"

import React, { createRef, useRef, type ReactNode } from "react"
import { SparklesIcon } from "lucide-react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

interface ImageMouseTrailProps {
  items: string[]
  children?: ReactNode
  className?: string
  imgClass?: string
  distance?: number
  maxNumberOfImages?: number
  fadeAnimation?: boolean
}

function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()))
  const currentZIndexRef = useRef(1)

  let globalIndex = 0
  let last = { x: 0, y: 0 }

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return
    const relativeX = x - containerRect.left
    const relativeY = y - containerRect.top
    image.style.left = `${relativeX}px`
    image.style.top = `${relativeY}px`

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1
    }
    image.style.zIndex = String(currentZIndexRef.current)
    currentZIndexRef.current++

    image.dataset.status = "active"
    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive"
      }, 1500)
    }
    last = { x, y }
  }

  const distanceFromLast = (x: number, y: number) =>
    Math.hypot(x - last.x, y - last.y)

  const deactivate = (image: HTMLImageElement) => {
    image.dataset.status = "inactive"
  }

  const handleOnMove = (e: MouseEvent | Touch) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / distance) {
      const lead = refs.current[globalIndex % refs.current.length].current
      const tail =
        refs.current[
          (globalIndex - maxNumberOfImages) % refs.current.length
        ]?.current
      if (lead) activate(lead, e.clientX, e.clientY)
      if (tail) deactivate(tail)
      globalIndex++
    }
  }

  return (
    <section
      onMouseMove={(e) => handleOnMove(e)}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
      ref={containerRef}
      className={cn(
        "relative grid h-[600px] w-full place-content-center overflow-hidden rounded-lg",
        className
      )}
    >
      {items.map((item, index) => (
        <img
          key={index}
          className={cn(
            "opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500",
            imgClass
          )}
          data-index={index}
          data-status="inactive"
          src={item}
          alt={`image-${index}`}
          ref={refs.current[index]}
        />
      ))}
      {children}
    </section>
  )
}

export default function CursorTrailDemo() {
  const images = [
    "https://cdn.21st.dev/assets/mirror/25/25b7b86a7363f95e8c52e0b8b99cace8174f5d70ca949f040a50c63e65b310c7.jpg",
    "https://cdn.21st.dev/assets/mirror/bd/bd860b5e3962c893bdd75ceaa09f4f42e2599b5146da4a42edbde49b75f1b3f9.jpg",
    "https://cdn.21st.dev/assets/mirror/23/23f82060938fb6af47976f636d4dc1d84a47b6f4bcb40405445b0342a787cb4c.jpg",
    "https://cdn.21st.dev/assets/mirror/2a/2a011b8788c448524c9189fad6be9808822491a353e02e16bcaa723af0267afe.jpg",
    "https://cdn.21st.dev/assets/mirror/f7/f7e603fc855c7995354288fddf9f147dd2f8f00d1ba5cbea03601f7c9ae0960e.jpg",
    "https://cdn.21st.dev/assets/mirror/59/597353f775e864ce7ab427b39deecf97b8de0560e30cb3749da756c896a17023.jpg",
    "https://cdn.21st.dev/assets/mirror/70/70b98f2308e805fb5910825d8cbe4f0692a7725a31481cc74979d39b9f4870f7.jpg",
    "https://cdn.21st.dev/assets/mirror/4c/4c7232db0a376b932746468980447b819f83ed96c137fd6ef166328a4962ef8c.jpg",
    "https://cdn.21st.dev/assets/mirror/fe/fe93bc0812d60130c9eef6d68e02fa99ded883248049a9107bfb64dbd37fae34.jpg",
  ]

  return (
    <section className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px]">
        <ImageCursorTrail
          items={images}
          maxNumberOfImages={5}
          distance={25}
          imgClass="sm:w-40 w-28 sm:h-48 h-36"
          className="max-w-4xl rounded-3xl"
        />
      </div>
    </section>
  )
}
