"use client";

import * as React from "react";

export interface MatteCornerCheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  /** Primary label shown next to the checkbox. */
  title?: string;
  /** Secondary helper copy shown under the title. */
  hint?: string;
  /** Mirrors the native `indeterminate` DOM property (not settable via plain JSX attributes). */
  indeterminate?: boolean;
  /** Extra classes for the outer card wrapper. */
  cardClassName?: string;
}

const MatteCornerCheckbox = React.forwardRef<
  HTMLInputElement,
  MatteCornerCheckboxProps
>(
  (
    {
      title = "Select area",
      hint = "A geometric alternative",
      indeterminate = false,
      cardClassName,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const innerRef = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
      if (innerRef.current) innerRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (
            forwardedRef as React.MutableRefObject<HTMLInputElement | null>
          ).current = node;
      },
      [forwardedRef],
    );

    return (
      <div
        className={["sl-check-card", cardClassName].filter(Boolean).join(" ")}
        data-demo="corner"
      >
        <label className="sl-check sl-check--corner">
          <input
            ref={setRefs}
            className={["sl-check__input", className].filter(Boolean).join(" ")}
            type="checkbox"
            {...props}
          />
          <span className="sl-check__box" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                className="sl-check__tick"
                pathLength={1}
                d="m5 12 4.5 4.5L19 7"
              />
              <path className="sl-check__dash" d="M6 12h12" />
              <path
                className="check-corners"
                d="M8 2H2v6M16 2h6v6M22 16v6h-6M8 22H2v-6"
              />
            </svg>
          </span>
          <span className="sl-check__copy">
            <span className="sl-check__title">{title}</span>
            <span className="sl-check__hint">{hint}</span>
          </span>
        </label>
      </div>
    );
  },
);
MatteCornerCheckbox.displayName = "MatteCornerCheckbox";

export default MatteCornerCheckbox;
