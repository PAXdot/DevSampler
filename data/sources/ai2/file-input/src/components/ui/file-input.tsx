"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Paperclip, X } from "lucide-react";

import { cn } from "@/lib/utils";

const fileInputVariants = cva(
  "flex w-full min-w-0 cursor-pointer items-center outline-none transition-[color,box-shadow] duration-(--motion-fast) has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-[3px] has-[input:focus-visible]:ring-ring/50 has-[input:disabled]:pointer-events-none has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50 has-[input[aria-invalid=true]]:border-danger [&_svg]:size-4 [&_svg]:shrink-0 [&_i]:text-base [&_i]:leading-none",
  {
    variants: {
      variant: {
        outline:
          "border border-field-border bg-transparent shadow-xs dark:bg-input/30",
        soft: "border border-transparent bg-surface-3 dark:bg-input/50",
        ghost: "border border-transparent bg-transparent hover:bg-surface-3",
      },
      size: {
        sm: "min-h-8 gap-1.5 rounded-md px-2.5 py-1.5 text-sm",
        md: "min-h-9 gap-2 rounded-lg px-3 py-1.5 text-sm",
        lg: "min-h-10 gap-2 rounded-lg px-3.5 py-2 text-base md:text-sm",
      },
      tone: {
        neutral: "",
        success:
          "border-success has-[input:focus-visible]:border-success has-[input:focus-visible]:ring-success/20 dark:has-[input:focus-visible]:ring-success/40",
        danger:
          "border-danger has-[input:focus-visible]:border-danger has-[input:focus-visible]:ring-danger/20 dark:has-[input:focus-visible]:ring-danger/40",
      },
    },
    defaultVariants: { variant: "outline", size: "md", tone: "neutral" },
  },
);

interface FileInputProps
  extends
    Omit<React.ComponentProps<"input">, "size" | "type">,
    VariantProps<typeof fileInputVariants> {
  /** Text shown before a file is picked. */
  placeholder?: string;
  /** Leading icon; defaults to a lucide Paperclip. Accepts remixicon `<i>` too. */
  icon?: React.ReactNode;
  /** Show a clear button once a file is selected. */
  clearable?: boolean;
}

function FileInput({
  className,
  variant,
  size,
  tone,
  placeholder = "Choose a file",
  icon,
  clearable = true,
  onChange,
  ...props
}: FileInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [names, setNames] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNames(Array.from(event.target.files ?? []).map((f) => f.name));
    onChange?.(event);
  };

  const clear = (event: React.MouseEvent<HTMLButtonElement>) => {
    // A button inside a label re-triggers the file dialog unless defaulted out.
    event.preventDefault();
    event.stopPropagation();
    const input = inputRef.current;
    if (!input) return;
    input.value = "";
    setNames([]);
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const selected = names.length > 0;
  const text = selected
    ? names.length > 1
      ? `${names.length} files`
      : names[0]
    : placeholder;

  return (
    <label
      data-slot="file-input"
      data-variant={variant ?? "outline"}
      data-tone={tone ?? "neutral"}
      data-state={selected ? "selected" : "empty"}
      className={cn(fileInputVariants({ variant, size, tone, className }))}
    >
      <input
        ref={inputRef}
        type="file"
        data-slot="file-input-control"
        className="sr-only"
        onChange={handleChange}
        {...props}
      />
      <span
        data-slot="file-input-icon"
        aria-hidden="true"
        className="flex shrink-0 items-center justify-center text-muted-foreground"
      >
        {icon ?? <Paperclip />}
      </span>
      <span
        data-slot="file-input-text"
        className={cn(
          "flex-1 [overflow-wrap:anywhere]",
          !selected && "text-muted-foreground",
        )}
      >
        {text}
      </span>
      {clearable && selected && (
        <button
          type="button"
          data-slot="file-input-clear"
          aria-label="Clear selected file"
          onClick={clear}
          className="relative flex shrink-0 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors duration-(--motion-fast) after:absolute after:-inset-2 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <X />
        </button>
      )}
    </label>
  );
}

export { FileInput, fileInputVariants, type FileInputProps };

export default FileInput;
