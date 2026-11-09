'use client'

import { useCallback, useSyncExternalStore } from 'react'

export interface UseMediaQueryOptions {
  defaultValue?: boolean
}

export function useMediaQuery(query: string, { defaultValue = false }: UseMediaQueryOptions = {}): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query)
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    },
    [query],
  )

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])
  const getServerSnapshot = useCallback(() => defaultValue, [defaultValue])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
