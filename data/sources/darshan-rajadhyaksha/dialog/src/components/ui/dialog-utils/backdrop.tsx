"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { tv, cn } from "tailwind-variants";

/**
 * Ported from the RockSolid (SolidJS) design system's Backdrop component
 * (https://github.com/darshan-rajadhyaksha/rocksolid), by Darshan Rajadhyaksha. MIT licensed.
 */

const backdropDefaultStyles = tv({
  base: [
    "fixed inset-0 w-full h-full z-50",
    "flex justify-center items-center",
    "bg-black/50 backdrop-blur-sm",
  ],
});

export type BackdropProps = {
  className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "className">;

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest} className={cn(backdropDefaultStyles(), className)}>
        {children}
      </div>
    );
  },
);

Backdrop.displayName = "Backdrop";

export default Backdrop;
