import * as React from "react"
import * as LucideIcons from "lucide-react"
import { HelpCircle } from "lucide-react"

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string }

type IconPlaceholderProps = IconProps &
  React.SVGProps<SVGSVGElement> & {
    /** Lucide icon name, e.g. "Users". Used to resolve the rendered icon. */
    lucide: string
    /** Alternate icon-library names, kept for API parity with the source; unused at render time. */
    tabler?: string
    hugeicons?: string
    phosphor?: string
    remixicon?: string
  }

/**
 * Drop-in shim for 7ovr's build-time icon abstraction. The source registry
 * resolves this to whichever icon library a project is configured for; this
 * standalone version always renders the given lucide-react icon.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon =
    (LucideIcons as unknown as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[
      lucide
    ] ?? HelpCircle
  return <Icon {...props} />
}

export default IconPlaceholder
