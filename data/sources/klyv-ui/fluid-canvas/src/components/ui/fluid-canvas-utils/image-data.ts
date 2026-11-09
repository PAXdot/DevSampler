'use client'

import { useEffect, useState } from 'react'

/**
 * A number that changes whenever the viewer's dark/light preference changes — a dependency to
 * repaint on.
 *
 * This is a trimmed stand-in for Klyv's own `useThemeVersion`. The original also reacted to the
 * library's internal accent/theme engine (a multi-file runtime that writes CSS custom properties,
 * persists to localStorage and dispatches its own CustomEvents) which is core design-system
 * infrastructure, not something this standalone component extraction carries. Only the universal,
 * OS-level `prefers-color-scheme` reactivity is kept here, which is what matters once this
 * component is dropped into a project that is not running the rest of Klyv.
 */
export function useThemeVersion(): number {
  const [version, setVersion] = useState(0)
  useEffect(() => {
    const bump = () => setVersion((value) => value + 1)
    const scheme = window.matchMedia('(prefers-color-scheme: dark)')
    scheme.addEventListener('change', bump)
    return () => scheme.removeEventListener('change', bump)
  }, [])
  return version
}
