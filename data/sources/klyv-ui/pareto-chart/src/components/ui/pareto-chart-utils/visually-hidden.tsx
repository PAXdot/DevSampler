import type { ReactNode } from 'react'

export interface VisuallyHiddenProps {
  children: ReactNode
}

/**
 * Keeps text in the accessibility tree while removing it visually.
 */
export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className="sr-only">{children}</span>
}
