'use client'

import { createContext, use, useEffect, useMemo, type ReactNode } from 'react'

export interface ReducedMotionContextValue {
  disableAnimations: boolean
}

const DEFAULT_CONTEXT: ReducedMotionContextValue = {
  disableAnimations: false,
}

const ReducedMotionContext = createContext<ReducedMotionContextValue>(DEFAULT_CONTEXT)

export interface ReducedMotionProviderProps {
  children: ReactNode
  disableAnimations?: boolean
}

const ATTR = 'data-disable-animations'

export function ReducedMotionProvider({ children, disableAnimations = false }: ReducedMotionProviderProps) {
  useEffect(() => {
    if (!disableAnimations) return
    const html = document.documentElement
    html.setAttribute(ATTR, '')
    return () => {
      html.removeAttribute(ATTR)
    }
  }, [disableAnimations])

  const value = useMemo<ReducedMotionContextValue>(() => ({ disableAnimations }), [disableAnimations])

  return <ReducedMotionContext value={value}>{children}</ReducedMotionContext>
}

export function useReducedMotionContext(): ReducedMotionContextValue {
  return use(ReducedMotionContext)
}
