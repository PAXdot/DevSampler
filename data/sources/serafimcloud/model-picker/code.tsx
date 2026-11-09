"use client";

import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ModelOption = {
  id: string;
  name: string;
  version?: string;
};

export type ModelPickerProps = {
  models: ModelOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (modelId: string) => void;
  placeholder?: string;
  className?: string;
};

function Popover({
  trigger,
  children,
  open,
  onOpenChange,
}: {
  trigger: ReactNode;
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const wrapRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) onOpenChange(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <span ref={wrapRef} className="relative inline-flex">
      <span onClick={() => onOpenChange(!open)} className="inline-flex">
        {trigger}
      </span>
      {open && (
        <div
          role="dialog"
          className="absolute bottom-full left-0 z-50 mb-1.5 min-w-[180px] rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1 shadow-lg outline-none text-neutral-900 dark:text-neutral-100"
        >
          {children}
        </div>
      )}
    </span>
  );
}

export const ModelPicker = memo(function ModelPicker({
  models,
  value,
  defaultValue,
  onChange,
  placeholder = "Auto",
  className,
}: ModelPickerProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeId = isControlled ? value : internalValue;
  const activeModel = models.find((m) => m.id === activeId) ?? models[0];
  const [open, setOpen] = useState(false);

  const handleSelect = useCallback(
    (id: string) => {
      if (!isControlled) setInternalValue(id);
      onChange?.(id);
      setOpen(false);
    },
    [isControlled, onChange],
  );

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <button
          type="button"
          className={cn(
            "inline-flex h-7 items-center gap-1 rounded-[6px] px-2 text-[12px] leading-4 text-neutral-500 dark:text-neutral-400 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer",
            className,
          )}
          aria-label="Select model"
        >
          <span className="font-medium">
            {activeModel?.name ?? placeholder}
          </span>
          {activeModel?.version && (
            <span className="font-normal text-neutral-400 dark:text-neutral-500">
              {activeModel.version}
            </span>
          )}
          <IconChevronDown className="size-3 text-neutral-500 dark:text-neutral-400" />
        </button>
      }
    >
      {models.map((model) => {
        const isActive = model.id === activeModel?.id;
        return (
          <button
            key={model.id}
            type="button"
            onClick={() => handleSelect(model.id)}
            className={cn(
              "flex w-full items-center gap-2 rounded-[6px] px-2 py-1.5 text-left text-[12px] leading-4 text-neutral-900 dark:text-neutral-100 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer",
              isActive && "bg-neutral-100 dark:bg-neutral-800",
            )}
          >
            <span className="flex-1 truncate">
              {model.name}
              {model.version && (
                <span className="ml-1 text-neutral-500 dark:text-neutral-400">
                  {model.version}
                </span>
              )}
            </span>
            {isActive && (
              <IconCheck className="size-3.5 shrink-0 text-neutral-700 dark:text-neutral-300" />
            )}
          </button>
        );
      })}
    </Popover>
  );
});
