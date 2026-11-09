import { forwardRef } from "react";
import type { SVGAttributes } from "react";
import { cx } from "./cx";
import styles from "./Spinner.module.css";
import { useWording } from "./language";

export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(function Spinner({ size = 14, className, ...rest }, ref) {
  const wording = useWording();
  return (
    <svg
      ref={ref}
      className={cx(styles.spinner, className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-label={wording.loading}
      {...rest}
      role="status"
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <path d="M14.5 8A6.5 6.5 0 0 0 8 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
});
