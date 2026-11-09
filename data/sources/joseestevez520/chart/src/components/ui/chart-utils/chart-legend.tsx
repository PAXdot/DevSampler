import { cn } from './cn'
import type { ChartVariant } from './chart.types'

/** The series' names, each after a key shaped as its mark: a stroke, a bar's square, a point. */
interface ChartLegendProps {
  items: Array<{ name: string; color: string }>
  variant: ChartVariant
  className?: string
}

export default function ChartLegend({ items, variant, className }: ChartLegendProps) {
  return (
    <ul className={cn('m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-meta text-fg-secondary', className)} aria-hidden="true">
      {items.map((item) => (
        <li key={item.name} className="inline-flex items-center gap-1.5">
          <span
            className={
              variant === 'line'
                ? 'h-0.5 w-3 rounded-full'
                : variant === 'bars'
                  ? 'size-2 rounded-[2px]'
                  : 'size-2 rounded-full'
            }
            style={{ background: item.color }}
          />
          {item.name}
        </li>
      ))}
    </ul>
  )
}
