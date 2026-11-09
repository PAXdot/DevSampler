import cn from "@/components/ui/select-utils/cn";

export interface RequiredMarkProps extends Omit<
  React.ComponentProps<"span">,
  "children"
> {
  className?: string;
}

export default function RequiredMark({
  className,
  ...props
}: RequiredMarkProps) {
  return (
    <span
      aria-hidden="true"
      {...props}
      className={cn(
        "cui-required-mark text-danger-700 dark:text-danger-400",
        className,
      )}
    >
      *
    </span>
  );
}
