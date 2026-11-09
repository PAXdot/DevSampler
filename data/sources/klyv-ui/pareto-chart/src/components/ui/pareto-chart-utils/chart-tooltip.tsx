import { cn } from '@/components/ui/pareto-chart-utils/cn'
import { Text } from '@/components/ui/pareto-chart-utils/text'

export interface ChartTooltipRow {
  label: string
  value: string
  color?: string
}

export interface ChartTooltipProps {
  title?: string
  rows: ChartTooltipRow[]
  className?: string
}

/**
 * The panel shown for a hovered data point. Presentational only — charts own
 * their own hit-testing and positioning. aria-hidden: values must also be
 * exposed through an accessible summary or table, not only through a hover tooltip.
 */
export function ChartTooltip({ title, rows, className }: ChartTooltipProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none min-w-[132px] rounded-[var(--radius-glyph)] border border-line bg-surface p-2.5',
        'shadow-[var(--shadow-float)]',
        className,
      )}
    >
      {title && (
        <Text size="caption" weight="bold" tone="faint" className="mb-1.5">
          {title}
        </Text>
      )}
      <div className="flex flex-col gap-1">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            {row.color && (
              <span className="size-2 shrink-0 rounded-full" style={{ background: row.color }} />
            )}
            <Text as="span" size="caption" weight="medium" tone="soft" className="min-w-0 flex-1 truncate">
              {row.label}
            </Text>
            <Text as="span" size="caption" weight="bold" tabular>
              {row.value}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
