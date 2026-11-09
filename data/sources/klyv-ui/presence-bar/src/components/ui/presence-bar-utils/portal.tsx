'use client'

import { useSyncExternalStore, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: ReactNode
  /** Where to mount. Defaults to document.body. */
  container?: Element | null
}

// Nothing ever changes, so nothing ever needs to be told.
const subscribe = () => () => {}
const onClient = () => true
const onServer = () => false

/**
 * Renders children outside the current DOM position, so an overlay is never
 * clipped by an ancestor overflow or trapped under a stacking context.
 */
export function Portal({ children, container }: PortalProps) {
  const client = useSyncExternalStore(subscribe, onClient, onServer)
  if (!client) return null
  const target = container ?? document.body
  return createPortal(children, target)
}
