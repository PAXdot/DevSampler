"use client"

import * as React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* =============================================================================
 * LetterMorph
 *
 * Whole-word gooey morph: two stacked layers crossfade through blur while an
 * SVG threshold filter fuses the silhouettes — letters reshape into each other
 * instead of swapping.
 *
 *   <LetterMorph words={["BUILD", "CREATE", "SHIP"]} />
 * ============================================================================= */

export interface LetterMorphProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Words to cycle through. */
  words: string[]
  /** Seconds spent morphing between words. */
  morphTime?: number
  /** Seconds each word holds after a morph settles. */
  cooldownTime?: number
  /** Classes applied to both text layers. */
  textClassName?: string
}

function blurFor(fraction: number) {
  const f = Math.max(fraction, 0.0001)
  return Math.min(8 / f - 8, 100)
}

function LetterMorph({
  words,
  morphTime = 1.2,
  cooldownTime = 1.5,
  className,
  textClassName,
  ...props
}: LetterMorphProps) {
  const filterId = React.useId().replace(/:/g, "")
  const text1Ref = React.useRef<HTMLSpanElement>(null)
  const text2Ref = React.useRef<HTMLSpanElement>(null)
  const [reduceMotion, setReduceMotion] = React.useState(false)
  const [activeWord, setActiveWord] = React.useState("")

  const wordsKey = words.join("\0")
  const safeWords = React.useMemo(
    () => words.filter((word) => word.length > 0),
    // wordsKey captures content; `words` alone would thrash the rAF effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [wordsKey]
  )
  const sizerWord = React.useMemo(
    () =>
      safeWords.reduce(
        (longest, word) => (word.length > longest.length ? word : longest),
        ""
      ),
    [safeWords]
  )
  const morphSeconds = Math.max(morphTime, 0.05)
  const cooldownSeconds = Math.max(cooldownTime, 0)

  React.useEffect(() => {
    setActiveWord(safeWords[0] ?? "")
  }, [safeWords])

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  React.useEffect(() => {
    if (reduceMotion || safeWords.length <= 1) return

    let textIndex = safeWords.length - 1
    let time = performance.now()
    let morph = 0
    let cooldown = cooldownSeconds
    let frame = 0
    let cancelled = false

    const setMorph = (fraction: number) => {
      if (cancelled) return
      const el1 = text1Ref.current
      const el2 = text2Ref.current
      if (!el1 || !el2) return

      el2.style.filter = `blur(${blurFor(fraction)}px)`
      el2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

      const inv = 1 - fraction
      el1.style.filter = `blur(${blurFor(inv)}px)`
      el1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`
    }

    const doCooldown = () => {
      morph = 0
      const el1 = text1Ref.current
      const el2 = text2Ref.current
      if (!el1 || !el2) return
      el2.style.filter = ""
      el2.style.opacity = "100%"
      el1.style.filter = ""
      el1.style.opacity = "0%"
    }

    const doMorph = () => {
      morph -= cooldown
      cooldown = 0
      let fraction = morph / morphSeconds

      if (fraction > 1) {
        cooldown = cooldownSeconds
        fraction = 1
      }

      setMorph(fraction)
    }

    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = safeWords[textIndex] ?? ""
      text2Ref.current.textContent = safeWords[0] ?? ""
      doCooldown()
    }

    const animate = (now: number) => {
      if (cancelled) return
      frame = requestAnimationFrame(animate)
      const shouldIncrementIndex = cooldown > 0
      const dt = Math.min((now - time) / 1000, 0.1)
      time = now

      cooldown -= dt

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % safeWords.length
          const current = safeWords[textIndex] ?? ""
          const next = safeWords[(textIndex + 1) % safeWords.length] ?? ""
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = current
            text2Ref.current.textContent = next
          }
          setActiveWord(current)
        }
        doMorph()
      } else {
        doCooldown()
      }
    }

    frame = requestAnimationFrame(animate)
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [safeWords, morphSeconds, cooldownSeconds, reduceMotion])

  React.useEffect(() => {
    if (!reduceMotion || safeWords.length <= 1) return
    const id = window.setInterval(
      () => {
        setActiveWord((prev) => {
          const index = Math.max(0, safeWords.indexOf(prev))
          return safeWords[(index + 1) % safeWords.length] ?? prev
        })
      },
      (morphSeconds + cooldownSeconds) * 1000
    )
    return () => window.clearInterval(id)
  }, [reduceMotion, safeWords, morphSeconds, cooldownSeconds])

  if (!safeWords.length) return null

  const textClass = cn(
    "font-semibold tracking-tight whitespace-nowrap text-foreground",
    textClassName
  )

  if (reduceMotion || safeWords.length === 1) {
    return (
      <div
        data-slot="letter-morph"
        aria-live="polite"
        aria-atomic="true"
        className={cn("relative inline-block", className)}
        {...props}
      >
        <span className={cn("inline-block text-center select-none", textClass)}>
          {activeWord || safeWords[0]}
        </span>
      </div>
    )
  }

  return (
    <div
      data-slot="letter-morph"
      className={cn("relative inline-block", className)}
      {...props}
    >
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {activeWord}
      </span>

      <svg
        className="pointer-events-none absolute size-0 overflow-hidden"
        aria-hidden
      >
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <span aria-hidden className={cn("invisible inline-block", textClass)}>
        {sizerWord}
      </span>

      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
        style={{ filter: `url(#${filterId})` }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inset-0 flex items-center justify-center text-center select-none",
            textClass
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inset-0 flex items-center justify-center text-center select-none",
            textClass
          )}
        />
      </div>
    </div>
  )
}

export { LetterMorph }
