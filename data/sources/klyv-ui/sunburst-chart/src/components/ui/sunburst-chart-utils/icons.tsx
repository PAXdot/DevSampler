import type { IconComponent } from '@/components/ui/sunburst-chart-utils/types'

/**
 * Glyphs the library draws for itself.
 *
 * Components that need a chevron, a cross or a tick cannot take one as
 * a prop — the glyph is part of the control, not content. Drawing them here
 * keeps the library free of an icon-package dependency, and keeps these few
 * shapes consistent with each other.
 */
function make(path: React.ReactNode, viewBox = '0 0 16 16'): IconComponent {
  return function Glyph({ size = 16, strokeWidth = 2.25, className, ...rest }) {
    return (
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...rest}
      >
        {path}
      </svg>
    )
  }
}

export const ChevronRightIcon = make(<path d="M6 3.5L10.5 8 6 12.5" />)
