import * as React from "react"
import * as LucideIcons from "lucide-react"

type LucideIconName = keyof typeof LucideIcons

export interface IconPlaceholderProps
  extends Omit<React.SVGProps<SVGSVGElement>, "size"> {
  /** Icon name from lucide-react, e.g. "XIcon". */
  lucide: LucideIconName
  /** Equivalent icon name in other icon sets (unused by this fallback). */
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
  size?: number | string
}

/**
 * Minimal stand-in for shadcn's internal `IconPlaceholder`.
 *
 * The original component lets a project pick its icon library (Lucide,
 * Tabler, Hugeicons, Phosphor or Remix Icon) and swaps every
 * `IconPlaceholder` for the matching icon from that library at build time.
 * That resolver lives in shadcn's private app code and isn't published, so
 * this fallback always renders the Lucide icon supplied via the `lucide`
 * prop, which every shadcn/ui project already has installed.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = LucideIcons[lucide] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >

  if (!Icon) return null

  return <Icon {...props} />
}
