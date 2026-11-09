'use client'

import { useMediaQuery } from './use-media-query'
import { useReducedMotionContext } from './reduced-motion-provider'

const QUERY = '(prefers-reduced-motion: reduce)'

export function useReducedMotion(): boolean {
  const osPrefersReduced = useMediaQuery(QUERY)
  const { disableAnimations } = useReducedMotionContext()
  return disableAnimations || osPrefersReduced
}
