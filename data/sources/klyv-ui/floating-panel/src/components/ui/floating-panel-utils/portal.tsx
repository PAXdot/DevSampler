'use client';

import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  /** Where to mount. Defaults to document.body. */
  container?: Element | null;
}

/**
 * Renders children outside the current DOM position, so an overlay is never
 * clipped by an ancestor overflow or trapped under a stacking context.
 *
 * Guarded by `typeof document` rather than an effect-driven "mounted" flag:
 * this is a client ('use client') component, so by the time it ever renders
 * in a browser `document` already exists and it can portal on the very
 * first paint — including inside a static preview/screenshot harness that
 * never flushes a passive effect. On an actual server render (no DOM at
 * all) it renders nothing, matching the server's HTML.
 */
export function Portal({ children, container }: PortalProps) {
  if (typeof document === 'undefined') return null;
  const target = container ?? document.body;
  return createPortal(children, target);
}

export default Portal;
