import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, inputMode, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        data-slot='input'
        inputMode={inputMode ?? (type === 'number' ? 'numeric' : undefined)}
        className={cn(
          'h-12 w-full rounded-2xl border-2 bg-b-surface2 px-3 transition-colors outline-none placeholder:text-t-secondary/50 hover:border-s-highlight focus:border-s-highlight',
          type === 'number' &&
            '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
