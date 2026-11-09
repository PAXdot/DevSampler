import type React from "react"
import * as LucideIcons from "lucide-react"
import { HelpCircle } from "lucide-react"

export type IconPlaceholderProps = {
  lucide: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
} & React.ComponentProps<"svg">

type LucideIconMap = Record<string, React.ComponentType<React.ComponentProps<"svg">>>

export function IconPlaceholder({
  lucide,
  tabler: _tabler,
  hugeicons: _hugeicons,
  phosphor: _phosphor,
  remixicon: _remixicon,
  ...rest
}: IconPlaceholderProps): React.ReactElement {
  const icons = LucideIcons as unknown as LucideIconMap
  const Icon = icons[lucide] ?? HelpCircle
  return <Icon {...rest} />
}

export default IconPlaceholder
