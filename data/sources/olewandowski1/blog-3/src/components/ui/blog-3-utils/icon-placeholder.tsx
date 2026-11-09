import { icons, SquareIcon, type LucideProps } from "lucide-react"

type IconPlaceholderProps = LucideProps & {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
}

/**
 * Minimal shim of shadcn/ui's internal docs-only IconPlaceholder helper.
 * The original lives inside ui.shadcn.com's docs app and switches between
 * five icon libraries based on an app-only URL search param. That machinery
 * isn't distributable, so this renders the `lucide` icon name via
 * lucide-react, which is the icon library shadcn's base style already
 * depends on.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = lucide ? icons[lucide as keyof typeof icons] : undefined

  if (!Icon) {
    return <SquareIcon {...props} />
  }

  return <Icon {...props} />
}

export default IconPlaceholder
