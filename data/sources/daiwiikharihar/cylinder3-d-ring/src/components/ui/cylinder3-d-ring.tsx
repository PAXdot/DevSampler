"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export interface CylinderItem {
    src: string
    alt: string
    title?: string
}

const DEFAULT_IMAGES: CylinderItem[] = [
    { src: "https://cdn.21st.dev/assets/mirror/a7/a7936aaa3ff455336f1a14cca7c6a695b4a5f2865879fde8ebe6700855020055.jpg", alt: "Architecture & Space 01" },
    { src: "https://cdn.21st.dev/assets/mirror/45/4537da6d099a2f33134f5f144b30e032557dddca459a8061655bea31bc7d12e9.jpg", alt: "Design Aesthetics 02" },
    { src: "https://cdn.21st.dev/assets/mirror/b5/b5e9633bc18e8aa4256170ba92f618dcb43d2d55c27f51bfb70877ab1b6a8315.jpg", alt: "Modern Geometry 03" },
    { src: "https://cdn.21st.dev/assets/mirror/68/68e173ee38a1e5c4defd68bffa04b0e83ac33ab6b581a4b64352509fb0f82e86.jpg", alt: "Vibrant Spectrum 04" },
    { src: "https://cdn.21st.dev/assets/mirror/93/932536dbeacc56964e058a00029fd427e3d9ffc5dd13cef3c9563d886e7f5327.jpg", alt: "Minimalist Structure 05" },
    { src: "https://cdn.21st.dev/assets/mirror/d1/d1ce666cff5ab5c01e8f6f15cb4f96344e3f0d153d51bcfb5241cba8aa0ab9ac.jpg", alt: "Urban Horizon 06" },
    { src: "https://cdn.21st.dev/assets/mirror/06/06420b107ef11925d673bcf1a91f3d90b4ea33001886bd033974ad2404e42aff.jpg", alt: "Sculptural Form 07" },
    { src: "https://cdn.21st.dev/assets/mirror/71/710c1826ff512581e78f5d60ec4df2751ec0cf3c05fe2ed99231f4c3d81c6931.jpg", alt: "Atmospheric Shadow 08" },
    { src: "https://cdn.21st.dev/assets/mirror/6a/6a9c983c77d4915f83b1c5dbc3a78c8779958d3bf58e3bd049c86e5738cfe8c9.jpg", alt: "Ethereal Light 09" },
    { src: "https://cdn.21st.dev/assets/mirror/9d/9da1bf9571d5e06e7b4a5883a0277a127be834cfe97df62af58e7225d26bab94.jpg", alt: "Chromatic Rhythm 10" },
]

export interface Cylinder3DRingProps {
    images?: CylinderItem[]
    duration?: number
    perspective?: number
    initialTiltX?: number
    interactiveTilt?: boolean
    className?: string
    cardClassName?: string
}

export function Cylinder3DRing({
    images = DEFAULT_IMAGES,
    duration = 18,
    perspective = 1100,
    initialTiltX = -14,
    interactiveTilt = true,
    className = "",
    cardClassName = "",
}: Cylinder3DRingProps) {
    const stageRef = useRef<HTMLDivElement>(null)
    const tiltRef = useRef<HTMLDivElement>(null)
    const drumRef = useRef<HTMLDivElement>(null)
    const spinTweenRef = useRef<gsap.core.Tween | null>(null)
    const [width, setWidth] = useState(0)
    const isDraggingRef = useRef(false)
    const lastXRef = useRef(0)

    useEffect(() => {
        const el = stageRef.current
        if (!el) return
        const updateWidth = () => {
            if (stageRef.current) {
                setWidth(stageRef.current.clientWidth)
            }
        }
        updateWidth()
        const ro = new ResizeObserver(([entry]) => {
            if (entry && entry.contentRect.width > 0) {
                setWidth(entry.contentRect.width)
            }
        })
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    const count = Math.max(images.length, 8)

    // Fluid responsive card dimensions adapting to mobile, tablet, and desktop
    const cardW = width <= 0 ? 150 : width < 420
        ? Math.max(Math.round(width * 0.26), 90)
        : width < 640
        ? Math.max(Math.round(width * 0.22), 110)
        : width < 1024
        ? Math.min(Math.max(Math.round(width * 0.18), 130), 180)
        : Math.min(Math.max(Math.round(width * 0.16), 140), 210)

    const cardH = Math.round(cardW * 1.36)

    // Mathematically computed cylindrical radius with responsive clearance
    const chordSpacing = width < 480 ? 12 : width < 768 ? 16 : 22
    const radiusScale = width < 480 ? 1.08 : width < 768 ? 1.15 : 1.22
    const radius = Math.round(((cardW + chordSpacing) / (2 * Math.tan(Math.PI / count))) * radiusScale)

    // Responsive container min-height
    const containerHeight = width <= 0 ? 460 : width < 480 ? 350 : width < 768 ? 420 : 490

    // GSAP continuous spin loop
    useGSAP(
        () => {
            if (!drumRef.current || !width) return
            spinTweenRef.current = gsap.to(drumRef.current, {
                rotationY: -360,
                duration,
                ease: "none",
                repeat: -1,
            })
        },
        { scope: stageRef, dependencies: [duration, width > 0], revertOnUpdate: true }
    )

    const handlePointerMove = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            if (!interactiveTilt || !stageRef.current || !tiltRef.current) return
            const rect = stageRef.current.getBoundingClientRect()
            const normY = (e.clientY - rect.top) / rect.height - 0.5
            const normX = (e.clientX - rect.left) / rect.width - 0.5

            gsap.to(tiltRef.current, {
                rotationX: initialTiltX - normY * 16,
                rotationZ: normX * 4,
                duration: 0.5,
                ease: "power2.out",
                overwrite: "auto",
            })

            if (spinTweenRef.current) {
                // Interactive velocity scaling: moving right accelerates forward, left reverses
                const targetTimeScale = 1 + normX * 3.5
                gsap.to(spinTweenRef.current, {
                    timeScale: targetTimeScale,
                    duration: 0.4,
                    overwrite: "auto",
                })
            }
        },
        [interactiveTilt, initialTiltX]
    )

    const handlePointerLeave = useCallback(() => {
        isDraggingRef.current = false
        if (tiltRef.current) {
            gsap.to(tiltRef.current, {
                rotationX: initialTiltX,
                rotationZ: 0,
                duration: 0.8,
                ease: "power3.out",
                overwrite: "auto",
            })
        }
        if (spinTweenRef.current) {
            gsap.to(spinTweenRef.current, { timeScale: 1, duration: 0.8, overwrite: "auto" })
        }
    }, [initialTiltX])

    return (
        <div
            ref={stageRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerCancel={handlePointerLeave}
            className={`relative flex w-full items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 select-none touch-pan-y ${className}`}
            style={{
                minHeight: containerHeight,
                perspective: `${width < 640 ? Math.min(perspective, 850) : perspective}px`,
                maskImage: "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            }}
        >
            {width > 0 && (
                <div
                    ref={tiltRef}
                    className="will-change-transform"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${-radius * 0.32}px) rotateX(${initialTiltX}deg)`,
                    }}
                >
                    <div
                        ref={drumRef}
                        className="relative will-change-transform"
                        style={{
                            width: cardW,
                            height: cardH,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {Array.from({ length: count }, (_, i) => {
                            const img = images[i % images.length]
                            const angle = (360 / count) * i
                            return (
                                <div
                                    key={i}
                                    className={`group absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl transition-shadow duration-300
                                        bg-stone-200 dark:bg-stone-800
                                        border border-black/[0.08] dark:border-white/[0.14]
                                        shadow-[0_10px_25px_-5px_rgba(0,0,0,0.12),0_8px_10px_-6px_rgba(0,0,0,0.06)]
                                        dark:shadow-[0_14px_35px_-8px_rgba(0,0,0,0.7),0_0_15px_rgba(255,255,255,0.04)]
                                        ring-1 ring-black/[0.04] dark:ring-white/[0.06] ${cardClassName}`}
                                    style={{
                                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                        backfaceVisibility: "visible",
                                    }}
                                >
                                    {/* Shimmer / Skeleton background placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 dark:from-stone-800 dark:via-stone-900 dark:to-stone-950 animate-pulse" />

                                    {/* Image */}
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        loading="lazy"
                                        draggable={false}
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none"
                                        }}
                                        className="relative size-full object-cover transition-transform duration-500 will-change-transform"
                                    />

                                    {/* Ambient lighting gradient overlay for both light & dark modes */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-white/10 dark:from-black/60 dark:via-transparent dark:to-white/15" />

                                    {/* Subtle border sheen highlight */}
                                    <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/20 dark:ring-white/10" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cylinder3DRing