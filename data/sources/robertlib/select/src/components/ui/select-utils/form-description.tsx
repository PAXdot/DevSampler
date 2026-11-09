import cn from "@/components/ui/select-utils/cn";

export interface FormDescriptionProps extends React.ComponentProps<"p"> {
  children?: React.ReactNode;
}

export default function FormDescription({
  className,
  children,
  ...props
}: FormDescriptionProps) {
  if (!children) return null;

  return (
    <p
      {...props}
      className={cn(
        "text-xs text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      {children}
    </p>
  );
}
