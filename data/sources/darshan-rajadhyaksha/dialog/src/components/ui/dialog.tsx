"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { tv, cn, type VariantProps } from "tailwind-variants";
import Backdrop, { type BackdropProps } from "./dialog-utils/backdrop";

/**
 * Ported from the RockSolid (SolidJS) design system's Dialog component
 * (https://github.com/darshan-rajadhyaksha/rocksolid), by Darshan Rajadhyaksha. MIT licensed.
 * Class names, structure, props and behaviour are kept 1:1 with the original;
 * only Solid -> React mechanics (ref/portal/event handling/class->className) were translated.
 */

const dialogDefaultStyles = tv({
  base: [
    "fixed min-w-xs shadow-sm z-2",
    "bg-white dark:bg-neutral-900",
    "dark:border",
    "border-neutral-300 dark:border-neutral-700",
  ],
  variants: {
    fullscreen: {
      true: "w-full h-full",
      false: [
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "max-w-[calc(100vw_-_2rem)] max-h-[calc(100vh_-_2rem)]",
        "rounded-sm",
      ],
    },
  },
});

type DialogVariants = VariantProps<typeof dialogDefaultStyles>;

export type DialogCloseReason = "escape" | "backdrop";

export type DialogSlotProps = {
  backdrop?: BackdropProps;
};

export type DialogProps = {
  children?: ReactNode;
  className?: string;
  fullscreen?: DialogVariants["fullscreen"];
  onClose?: (event: Event, reason: DialogCloseReason) => void;
  open?: boolean;
  role?: "alertdialog" | "dialog";
  slotProps?: DialogSlotProps;
} & Omit<ComponentPropsWithoutRef<"div">, "onClose" | "className" | "role">;

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (props, forwardedRef) => {
    const {
      className,
      children,
      fullscreen = false,
      open,
      onClose,
      slotProps,
      role = "dialog",
      ...rest
    } = props;

    const dialogRef = useRef<HTMLDivElement | null>(null);

    const getFocusableElements = (): HTMLElement[] => {
      const dialog = dialogRef.current;
      if (!dialog) return [];
      return Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((element) => {
        const style = getComputedStyle(element);
        return (
          !element.hasAttribute("disabled") &&
          style.display !== "none" &&
          style.visibility !== "hidden"
        );
      });
    };

    const focusFirst = () => {
      const first = getFocusableElements()[0];
      const dialog = dialogRef.current;
      if (first) {
        first.focus();
      } else {
        dialog?.focus();
      }
    };

    const focusLast = () => {
      const elements = getFocusableElements();
      const last = elements[elements.length - 1];
      const dialog = dialogRef.current;
      if (last) {
        last.focus();
      } else {
        dialog?.focus();
      }
    };

    useEffect(() => {
      if (!open) {
        document.body.classList.remove("overflow-hidden");
        return;
      }

      document.body.classList.add("overflow-hidden");

      const handleKeyDown = (event: KeyboardEvent): void => {
        const dialog = dialogRef.current;
        if (!open || !dialog) return;

        if (event.key === "Escape") {
          event.preventDefault();
          onClose?.(event, "escape");
          return;
        }

        if (event.key !== "Tab") return;

        const focusable = getFocusableElements();

        if (focusable.length === 0) {
          event.preventDefault();
          dialog.focus();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        // Focus has escaped the dialog.
        if (!dialog.contains(active)) {
          event.preventDefault();
          if (event.shiftKey) {
            focusLast();
          } else {
            focusFirst();
          }
          return;
        }

        // Shift + Tab: first -> last
        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
          return;
        }

        // Tab: last -> first
        if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      };

      const handleFocusIn = (event: FocusEvent): void => {
        const dialog = dialogRef.current;
        if (!open || !dialog) return;
        const target = event.target;
        if (!(target instanceof Node)) return;
        if (!dialog.contains(target)) {
          focusFirst();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("focusin", handleFocusIn);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("focusin", handleFocusIn);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const dialog = dialogRef.current;
      if (event.target === dialog || dialog?.contains(event.target as Node)) {
        return;
      }
      onClose?.(event.nativeEvent, "backdrop");
      slotProps?.backdrop?.onClick?.(event);
    };

    if (!open) return null;

    const content = (
      <Backdrop {...slotProps?.backdrop} onClick={handleBackdropClick}>
        <div
          role="dialog"
          aria-modal="true"
          {...rest}
          role={role}
          className={cn(dialogDefaultStyles({ fullscreen }), className)}
          ref={(element) => {
            dialogRef.current = element;
            if (typeof forwardedRef === "function") {
              forwardedRef(element);
            } else if (forwardedRef) {
              (
                forwardedRef as React.MutableRefObject<HTMLDivElement | null>
              ).current = element;
            }
          }}
        >
          {children}
        </div>
      </Backdrop>
    );

    if (typeof window === "undefined") return null;

    return createPortal(content, document.body);
  },
);

Dialog.displayName = "Dialog";

export default Dialog;
