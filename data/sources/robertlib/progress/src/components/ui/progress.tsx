import { useId } from "react";
import { cn, joinTokens } from "@/components/ui/progress-utils/cn";
import { toIntlLocale } from "@/components/ui/progress-utils/format";
import { useLocale } from "@/components/ui/progress-utils/ui-context";

export type ProgressColor =
  "primary" | "secondary" | "success" | "warning" | "danger";

export interface ProgressProps extends Omit<
  React.ComponentProps<"div">,
  "children" | "color"
> {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
  color?: ProgressColor;
  description?: string;
  indeterminate?: boolean;
  label?: string;
  max?: number;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  value?: number | null;
  /** @deprecated Use `color`. */
  variant?: ProgressColor;
}

const barColorClasses: Record<ProgressColor, string> = {
  primary: "bg-primary-600 dark:bg-primary-400",
  secondary: "bg-secondary-600 dark:bg-secondary-400",
  success: "bg-success-700 dark:bg-success-500",
  warning: "bg-warning-700 dark:bg-warning-500",
  danger: "bg-danger-600 dark:bg-danger-400",
};

const BAR_FORCED_COLORS = "forced-colors:bg-[Highlight]";

const strokeColorClasses: Record<ProgressColor, string> = {
  primary: "stroke-primary-600 dark:stroke-primary-400",
  secondary: "stroke-secondary-600 dark:stroke-secondary-400",
  success: "stroke-success-700 dark:stroke-success-500",
  warning: "stroke-warning-700 dark:stroke-warning-500",
  danger: "stroke-danger-600 dark:stroke-danger-400",
};

function measure(value: number, max: number) {
  const clamped = Number.isFinite(value)
    ? Math.min(Math.max(value, 0), max)
    : 0;
  const fraction = max > 0 && Number.isFinite(max) ? clamped / max : 0;
  return { clamped, fraction };
}

const percentFormats = new Map<string, Intl.NumberFormat>();

function formatPercent(localeCode: string, fraction: number) {
  let format = percentFormats.get(localeCode);

  if (!format) {
    format = new Intl.NumberFormat(toIntlLocale(localeCode), {
      maximumFractionDigits: 0,
      roundingMode: "floor",
      style: "percent",
    });
    percentFormats.set(localeCode, format);
  }

  return format.format(fraction);
}

const valueAttributes = (
  isIndeterminate: boolean,
  clamped: number,
  max: number,
) =>
  isIndeterminate
    ? {}
    : { "aria-valuemax": max, "aria-valuemin": 0, "aria-valuenow": clamped };

export default function Progress({
  "aria-describedby": ariaDescribedBy,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  className,
  color: colorProp,
  description,
  indeterminate = false,
  label,
  max = 100,
  showPercentage = false,
  size = "md",
  style,
  value,
  variant,
  ...props
}: ProgressProps) {
  const locale = useLocale();
  const color = colorProp ?? variant ?? "primary";
  const descriptionId = useId();
  const isIndeterminate = indeterminate || value == null;
  const { clamped, fraction } = measure(value ?? 0, max);

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={cn("w-full", className)} style={style}>
      {(label || description || showPercentage) && (
        <div className="mb-2 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            {label && <span>{label}</span>}
            {description && (
              <span className={label ? "ms-2" : ""} id={descriptionId}>
                {description}
              </span>
            )}
          </div>
          {showPercentage && !isIndeterminate && (
            <span>{formatPercent(locale.code, fraction)}</span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        {...valueAttributes(isIndeterminate, clamped, max)}
        {...props}
        aria-describedby={joinTokens(
          description ? descriptionId : undefined,
          ariaDescribedBy,
        )}
        aria-label={ariaLabelledBy ? undefined : (label ?? ariaLabel)}
        aria-labelledby={ariaLabelledBy}
        className={cn(
          "w-full rounded-full bg-neutral-200 dark:bg-neutral-700",
          "forced-colors:outline",
          isIndeterminate && "relative overflow-hidden",
          sizeClasses[size],
        )}
      >
        {isIndeterminate ? (
          <div
            className={cn(
              "absolute inset-y-0 inset-s-0 w-2/5 animate-[progress-indeterminate_1.5s_ease-in-out_infinite] rounded-full rtl:-scale-x-100",
              "motion-reduce:inset-s-[30%] motion-reduce:animate-[progress-fade_2s_ease-in-out_infinite]",
              barColorClasses[color],
              BAR_FORCED_COLORS,
            )}
          />
        ) : (
          <div
            className={cn(
              "rounded-full transition-all duration-300 motion-reduce:transition-none",
              sizeClasses[size],
              barColorClasses[color],
              BAR_FORCED_COLORS,
            )}
            style={{ width: `${fraction * 100}%` }}
          />
        )}
      </div>
    </div>
  );
}

export interface CircularProgressProps extends Omit<
  React.ComponentProps<"div">,
  "color"
> {
  children?: React.ReactNode;
  color?: ProgressColor;
  indeterminate?: boolean;
  max?: number;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  strokeWidth?: number;
  value?: number | null;
  /** @deprecated Use `color`. */
  variant?: ProgressColor;
}

const circleSizeClasses = {
  sm: "size-8 text-[8px]",
  md: "size-12 text-[11px]",
  lg: "size-16 text-sm",
  xl: "size-24 text-lg",
};

export function CircularProgress({
  children,
  className,
  color: colorProp,
  indeterminate = false,
  max = 100,
  showPercentage = false,
  size = "md",
  strokeWidth = 10,
  value,
  variant,
  ...props
}: CircularProgressProps) {
  const locale = useLocale();
  const color = colorProp ?? variant ?? "primary";
  const isIndeterminate = indeterminate || value == null;
  const { clamped, fraction } = measure(value ?? 0, max);

  const stroke = Math.min(Math.max(strokeWidth, 1), 50);
  const radius = 50 - stroke / 2;
  const circumference = 2 * Math.PI * radius;
  const shown = isIndeterminate ? 0.25 : fraction;

  const center =
    children ??
    (showPercentage && !isIndeterminate
      ? formatPercent(locale.code, fraction)
      : null);

  return (
    <div
      role="progressbar"
      {...valueAttributes(isIndeterminate, clamped, max)}
      {...props}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        circleSizeClasses[size],
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className={cn(
          "absolute inset-0 size-full -rotate-90",
          isIndeterminate && "animate-spin",
        )}
        fill="none"
        viewBox="0 0 100 100"
      >
        <circle
          className="stroke-neutral-200 dark:stroke-neutral-700 forced-colors:stroke-[GrayText]"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={stroke}
        />
        {shown > 0 && (
          <circle
            className={cn(
              "transition-[stroke-dashoffset] duration-300 motion-reduce:transition-none",
              strokeColorClasses[color],
              "forced-colors:stroke-[Highlight]",
            )}
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - shown)}
            strokeLinecap="round"
            strokeWidth={stroke}
          />
        )}
      </svg>
      {center != null && (
        <span
          aria-hidden="true"
          className="relative font-semibold text-neutral-700 tabular-nums dark:text-neutral-200"
        >
          {center}
        </span>
      )}
    </div>
  );
}
