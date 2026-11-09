"use client";

import * as React from "react";
import {
  Root as DialogRoot,
  Portal as DialogPortal,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Title as DialogTitle,
  Description as DialogDescription,
  Close as DialogClose,
} from "@radix-ui/react-dialog";

/**
 * Modal layers (dialogs, open selects), innermost last. While one is open, only the hotkeys of what
 * is inside the top layer work: a key must not reach a button hidden behind a dialog.
 * Ported from oyna-ui's `useLayer` composable (src/composables/layers.ts).
 */
export const openLayers: symbol[] = [];

/** Makes the calling component a layer for as long as `open` is true. */
function useLayer(open: boolean) {
  const layerRef = React.useRef<symbol | null>(null);
  if (layerRef.current === null) layerRef.current = Symbol("o-layer");

  React.useEffect(() => {
    const layer = layerRef.current!;
    const leave = () => {
      const index = openLayers.indexOf(layer);
      if (index !== -1) openLayers.splice(index, 1);
    };
    leave();
    if (open) openLayers.push(layer);
    return leave;
  }, [open]);
}

export interface ODialogProps extends Omit<
  React.ComponentPropsWithoutRef<typeof DialogContent>,
  "title" | "className" | "onOpenAutoFocus"
> {
  /** The dialog's heading. */
  title: string;
  /** A line under the title, read out with it. */
  description?: string;
  /** Text of the close button, after the `Esc` key. */
  closeLabel?: string;
  /** Controlled open state (defaults to false). */
  open?: boolean;
  /** Called when the dialog requests to open or close. */
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

/**
 * A layer over the page for something that needs an answer or full attention. `Esc`, the close
 * button and a click outside close it; focus stays inside while it is open and returns to where
 * it was. Ported from oyna-ui's Dialog.vue (built on Reka UI's Dialog; here on Radix UI's Dialog).
 */
export default function ODialog({
  title,
  description,
  closeLabel = "Close",
  open = false,
  onOpenChange,
  children,
  ...attrs
}: ODialogProps) {
  // hotkeys inside the dialog belong to this layer; the ones behind it are off while it is open
  useLayer(open);

  // Focus goes to the dialog itself, not to its first control (the close button): otherwise Enter
  // would close the dialog instead of reaching the hotkey of its main button.
  function focusDialog(event: Event) {
    event.preventDefault();
    if (event.target instanceof HTMLElement) event.target.focus();
  }

  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="o-dialog__overlay" />
        <DialogContent
          className="o-dialog"
          {...attrs}
          {...(description ? {} : { "aria-describedby": undefined })}
          onOpenAutoFocus={focusDialog}
        >
          <header className="o-dialog__header">
            <DialogTitle className="o-dialog__title">{title}</DialogTitle>
            <DialogClose className="o-dialog__close">
              <kbd className="o-kbd o-kbd--key">Esc</kbd> {closeLabel}
            </DialogClose>
          </header>
          {description ? (
            <DialogDescription className="o-dialog__description">
              {description}
            </DialogDescription>
          ) : null}
          {children}
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
}
