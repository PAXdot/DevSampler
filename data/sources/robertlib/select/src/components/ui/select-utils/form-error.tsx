import cn from "@/components/ui/select-utils/cn";

export interface FormErrorProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

export default function FormError({
  className,
  children,
  ...props
}: FormErrorProps) {
  if (!children) return null;

  return (
    <div
      {...props}
      className={cn(
        "animate-fade-in text-sm text-danger-700 dark:text-danger-400",
        className,
      )}
      role="alert"
    >
      {children}
    </div>
  );
}
