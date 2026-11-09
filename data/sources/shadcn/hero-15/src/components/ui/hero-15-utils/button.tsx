import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonPadding =
  "py-[var(--button-py)] px-[var(--button-px)] has-[>svg]:px-[var(--button-px-icon)]"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-[var(--button-gap)] whitespace-nowrap rounded-[var(--button-radius)] text-sm font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-border bg-background shadow-none hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: buttonPadding,
        xs: "gap-1 py-1.5 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "py-[var(--button-py-sm)] px-[var(--button-px-sm)] text-xs has-[>svg]:px-[var(--button-px-icon-sm)] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "py-[var(--button-py-lg)] px-[var(--button-px-lg)] has-[>svg]:px-[var(--button-px-icon-lg)]",
        icon: "size-[var(--button-size)]",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-[var(--button-size-sm)]",
        "icon-lg": "size-[var(--button-size-lg)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
