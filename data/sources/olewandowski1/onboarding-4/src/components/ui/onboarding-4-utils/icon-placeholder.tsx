import * as React from "react"
import { icons, type LucideProps } from "lucide-react"

/**
 * Faithful, self-contained stand-in for 7Ovr's install-time icon
 * placeholder. 7Ovr's CLI swaps this element for a direct import from
 * whichever icon library a project already uses; outside that CLI we
 * resolve the `lucide` icon name directly so blocks render as shipped.
 */
type IconPlaceholderProps = Omit<LucideProps, "ref"> & {
  lucide: keyof typeof icons
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const LucideIcon = icons[lucide]

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon {...props} />
}

export default IconPlaceholder
