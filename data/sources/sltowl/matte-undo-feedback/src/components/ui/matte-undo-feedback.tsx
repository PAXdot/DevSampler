"use client";

import * as React from "react";

export interface UndoFeedbackHandle {
  /** Re-shows the panel in its initial "removed" state (what the demo's "Remove item" control does). */
  show: () => void;
  state: "removed" | "pending" | "complete" | "error";
}

export interface UndoFeedbackProps {
  /**
   * Called when the user presses Undo. Resolve to restore the item, reject to
   * show an error state. Honor the abort signal if provided.
   */
  onUndo?: (opts: { signal: AbortSignal }) => Promise<void>;
  className?: string;
}

type UndoState = "removed" | "pending" | "complete" | "error";

const COPY: Record<
  UndoState,
  { title: string; detail: string; button: string; icon: "file" | "check" }
> = {
  removed: {
    title: "Item removed",
    detail: "You can still bring it back.",
    button: "Undo",
    icon: "file",
  },
  pending: {
    title: "Restoring item",
    detail: "Please wait a moment.",
    button: "Restoring…",
    icon: "file",
  },
  complete: {
    title: "Item restored",
    detail: "Back where it belongs.",
    button: "Restored",
    icon: "check",
  },
  error: {
    title: "Could not restore",
    detail: "Nothing changed. Try Undo again.",
    button: "Undo",
    icon: "file",
  },
};

const ICON_PATHS: Record<"file" | "check", string> = {
  file: "M14 3H5v18h14V8Zm0 0v5h5M8 12h8m-8 4h5",
  check: "m5 12 4 4L19 6",
};

const UndoFeedback = React.forwardRef<UndoFeedbackHandle, UndoFeedbackProps>(
  ({ onUndo, className }, ref) => {
    const [state, setState] = React.useState<UndoState>("removed");
    const [live, setLive] = React.useState("");
    const [alertText, setAlertText] = React.useState("");
    const revisionRef = React.useRef(0);
    const abortRef = React.useRef<AbortController | null>(null);

    const announce = React.useCallback((text: string, isError = false) => {
      setLive(isError ? "" : text);
      setAlertText(isError ? text : "");
    }, []);

    const cancelRequest = React.useCallback(() => {
      revisionRef.current++;
      abortRef.current?.abort();
      abortRef.current = null;
    }, []);

    const show = React.useCallback(() => {
      cancelRequest();
      setState("removed");
      announce(COPY.removed.title);
    }, [cancelRequest, announce]);

    React.useImperativeHandle(ref, () => ({ show, state }), [show, state]);

    const handleUndo = React.useCallback(async () => {
      if (state === "pending" || state === "complete") return;
      if (typeof onUndo !== "function") {
        announce("Connect the onUndo callback to run this operation.", true);
        return;
      }
      cancelRequest();
      const id = revisionRef.current;
      const current = new AbortController();
      abortRef.current = current;
      setState("pending");
      announce("Operation started.");
      try {
        await onUndo({ signal: current.signal });
        if (id !== revisionRef.current || current.signal.aborted) return;
        abortRef.current = null;
        setState("complete");
        announce("Item restored.");
      } catch (error: any) {
        if (id !== revisionRef.current) return;
        abortRef.current = null;
        const aborted = error?.name === "AbortError";
        setState(aborted ? "removed" : "error");
        announce(
          aborted
            ? "Operation canceled."
            : "The operation could not complete. Please try again.",
          !aborted,
        );
      }
    }, [state, onUndo, cancelRequest, announce]);

    const copy = COPY[state];
    const blocked = state === "pending" || state === "complete";

    return (
      <div
        className={["fb-demo", className].filter(Boolean).join(" ")}
        data-feedback="undo"
        tabIndex={-1}
        data-state={state}
      >
        <div className="fb-scene fb-undo">
          <div
            className="fb-card fb-message fb-reveal"
            data-panel
            data-visible="true"
          >
            <span className="fb-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={ICON_PATHS[copy.icon]} />
              </svg>
            </span>
            <div className="fb-copy">
              <h3 data-title>{copy.title}</h3>
              <p data-detail>{copy.detail}</p>
            </div>
            <button
              type="button"
              className="fb-button fb-button--light"
              data-action="undo"
              aria-disabled={blocked}
              aria-busy={state === "pending"}
              onClick={handleUndo}
            >
              {copy.button}
            </button>
          </div>
        </div>
        <span
          className="fb-sr"
          data-live
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {live}
        </span>
        <span className="fb-sr" data-error role="alert" aria-atomic="true">
          {alertText}
        </span>
      </div>
    );
  },
);
UndoFeedback.displayName = "UndoFeedback";

export default UndoFeedback;
