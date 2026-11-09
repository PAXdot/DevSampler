"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";
import * as Rac from "react-aria-components";
import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Composes Tailwind CSS classes with render props.
 */
function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: Parameters<typeof twMerge>[0],
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}

/**
 * Derived from shadcn Field.
 */
export const fieldStyles = cva(
  "group/field flex w-full gap-3 data-invalid:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col *:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "*:data-[slot=field-label]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto [&>.sr-only]:w-auto",
          "@md/field-group:*:data-[slot=field-label]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

export type FieldStylesProps = VariantProps<typeof fieldStyles>;

/**
 * Derived from shadcn Field
 */
export function TextField({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Rac.TextField> & FieldStylesProps) {
  return (
    <Rac.TextField
      data-slot="text-field"
      data-slot-type="field"
      data-orientation={orientation}
      className={composeTailwindRenderProps(
        className,
        fieldStyles({ orientation }),
      )}
      {...props}
    />
  );
}

export default TextField;
