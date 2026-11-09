/*
MIT License

Copyright (c) 2026 Klyv contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import "./klyv-border-beam-utils/klyv-theme.css";
import type { CSSProperties, ReactNode } from 'react'
import { cn } from "./klyv-border-beam-utils/lib-cn"

export interface BorderBeamProps {
  /** Content the beam travels around. */
  children: ReactNode
  /** Border thickness in pixels. */
  width?: number
  /** Seconds for one full lap. */
  duration?: number
  /** Start the lap partway round, so two beams beside each other differ. */
  delay?: number
  /** The lit arc. Two stops, in order. */
  colors?: [string, string]
  /** How much of the lap is lit, 0–1. Small values read as a comet. */
  arc?: number
  /** Border radius. Defaults to the card radius. */
  radius?: string
  /** Run the beam only while the container is hovered or focused within. */
  onHover?: boolean
  /** Stop the beam without removing the border. */
  paused?: boolean
  /** Merged last, so it wins. */
  className?: string
  /** Classes for the inner content surface. */
  contentClassName?: string
}

/**
 * A container whose border has a light travelling round it.
 *
 * The beam is a single conic gradient on a square that spins behind the
 * content. The content sits on an opaque inner surface inset by the border
 * width, so the only part of the spinning square that is ever visible is the
 * ring around it — which means one `rotate` animation, no masking, and no
 * `background-position` tricks that break on rounded corners.
 *
 * A spinning square needs to cover the container's diagonal at every angle, so
 * it is sized to 150% of the longer edge with `aspect-ratio: 1`. That is why
 * the effect holds on a wide, short banner as well as on a square tile.
 */
export function BorderBeam({
  children,
  width = 1.5,
  duration = 6,
  delay = 0,
  colors = ['var(--color-accent-strong)', 'var(--color-accent-soft)'],
  arc = 0.22,
  radius = 'var(--radius-card)',
  onHover = false,
  paused = false,
  className,
  contentClassName,
}: BorderBeamProps) {
  const stop = Math.max(0.02, Math.min(arc, 0.9)) * 360

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden',
        onHover && 'group/beam',
        className,
      )}
      style={{ borderRadius: radius, padding: width } as CSSProperties}
    >
      <span
        aria-hidden="true"
        className={cn(
          'motion-safe-only absolute left-1/2 top-1/2 -z-10 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 will-change-transform',
          onHover && 'opacity-0 transition-opacity duration-[var(--duration-slow)] group-hover/beam:opacity-100 group-focus-within/beam:opacity-100',
        )}
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${colors[0]} ${stop * 0.6}deg, ${colors[1]} ${stop}deg, transparent ${stop + 1}deg)`,
          animation: `border-beam-spin ${duration}s linear infinite`,
          animationDelay: `-${delay}s`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      />
      {/* The static border underneath, so the ring is never fully dark. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-line"
        style={{ borderRadius: radius }}
      />
      <div
        className={cn('relative h-full bg-surface', contentClassName)}
        style={{ borderRadius: `calc(${radius} - ${width}px)` }}
      >
        {children}
      </div>
    </div>
  )
}

export default BorderBeam;
