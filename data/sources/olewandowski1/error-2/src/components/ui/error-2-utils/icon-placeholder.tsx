import * as React from "react"
import * as LucideIcons from "lucide-react"

type LucideIconName = keyof typeof LucideIcons

type IconPlaceholderProps = Omit<React.SVGProps<SVGSVGElement>, "size"> & {
  /** Icon name from lucide-react, e.g. "Search". Used as the resolved icon. */
  lucide?: string
  /** Icon name from @tabler/icons-react (kept for API parity, unused without that package installed). */
  tabler?: string
  /** Icon name from hugeicons-react (kept for API parity, unused without that package installed). */
  hugeicons?: string
  /** Icon name from @phosphor-icons/react (kept for API parity, unused without that package installed). */
  phosphor?: string
  /** Icon name from @remixicon/react (kept for API parity, unused without that package installed). */
  remixicon?: string
  size?: number | string
}

/**
 * Renders an icon from whichever icon library a project has installed.
 * Only the `lucide` name is resolved here since lucide-react is the
 * registry's default icon library; the other props exist so call sites
 * stay identical across icon-library choices.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  size,
  ...props
}: IconPlaceholderProps) {
  const Icon = lucide
    ? (LucideIcons[lucide as LucideIconName] as
        | React.ComponentType<React.SVGProps<SVGSVGElement>>
        | undefined)
    : undefined

  if (!Icon) return null

  return <Icon width={size} height={size} {...props} />
}

export default IconPlaceholder
