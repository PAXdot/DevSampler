"use client"

import { useState, useCallback, useRef } from "react"
import { AnimationOptions, motion, stagger, useAnimate } from "motion/react"

const useThrottledCallback = (callback: Function, delay: number) => {
  const timeoutRef = useRef(null)

  return useCallback((...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, delay) as unknown as null
  }, [callback, delay])
}

interface AnimatedTextProps {
  text: string
  initialStyle: string
  hoverStyle: string
  animationConfig?: AnimationOptions
  staggerTiming?: number
  staggerOrigin?: "first" | "last" | "center" | number
  className?: string
  onClick?: () => void
}

const BoldOnHover = ({
  text,
  initialStyle = "'wght' 400, 'slnt' 0",
  hoverStyle = "'wght' 900, 'slnt' -10",
  animationConfig = {
    type: "spring",
    duration: 0.7,
  },
  staggerTiming = 0.03,
  staggerOrigin = "first",
  className,
  onClick,
  ...props
}: AnimatedTextProps) => {
  const [animationScope, animate] = useAnimate()
  const [isActive, setIsActive] = useState(false)

  const createStaggeredAnimation = (baseConfig: AnimationOptions) => ({
    ...baseConfig,
    delay: stagger(staggerTiming, {
      from: staggerOrigin,
    }),
  })

  const handleActivate = useCallback(() => {
    if (isActive) return
    setIsActive(true)

    animate(
      ".char",
      { fontVariationSettings: hoverStyle },
      createStaggeredAnimation(animationConfig)
    )
  }, [isActive, animate, hoverStyle, animationConfig])

  const handleDeactivate = useCallback(() => {
    setIsActive(false)

    animate(
      ".char",
      { fontVariationSettings: initialStyle },
      createStaggeredAnimation(animationConfig)
    )
  }, [animate, initialStyle, animationConfig])

  const throttledActivate = useThrottledCallback(handleActivate, 100)
  const throttledDeactivate = useThrottledCallback(handleDeactivate, 100)

  return (
    <motion.span
      className={`${className}`}
      onHoverStart={throttledActivate}
      onHoverEnd={throttledDeactivate}
      onClick={onClick}
      ref={animationScope}
      {...props}
    >
      <span className="sr-only">{text}</span>

      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          className="inline-block whitespace-pre char"
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default BoldOnHover