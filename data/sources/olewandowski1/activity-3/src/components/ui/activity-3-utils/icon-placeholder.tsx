import * as React from "react"
import * as LucideIcons from "lucide-react"
import { HelpCircle } from "lucide-react"

/**
 * Minimal icon-library abstraction: source registries (e.g. 7ovr) resolve this
 * to whichever icon set (Lucide/Tabler/Hugeicons/Phosphor/RemixIcon) a consumer
 * picked at install time. Here we always render the Lucide icon so the block
 * works out of the box.
 */
type IconProps = { className?: string; size?: number | string }

type IconPlaceholderProps = IconProps &
  React.SVGProps<SVGSVGElement> & {
    lucide?: keyof typeof LucideIcons
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
  const Icon =
    (lucide && (LucideIcons[lucide] as React.ComponentType<IconProps>)) ||
    HelpCircle

  return <Icon {...props} />
}

export default IconPlaceholder
