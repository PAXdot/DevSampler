"use client";

import * as React from "react";

export type State = {
  open?: boolean;
  active?: number;
  query?: string;
  notice?: string;
  selected?: string;
  reveal?: number;
  previous?: number;
  blend?: number;
  expanded?: number;
  highlighted?: boolean;
};

export type Props = {
  title?: string;
  state?: State;
  onStateChange?: (state: State) => void;
  onAction?: (action: string) => void;
  seeking?: boolean;
  disabled?: boolean;
  showContext?: boolean;
  text?: string;
  href?: string;
  className?: string;
};

function useValue(
  initial: State,
  controlled: State | undefined,
  notify: Props["onStateChange"],
) {
  const [local, setLocal] = React.useState(initial);
  const value = controlled ?? local;
  const ref = React.useRef(value);
  const callback = React.useRef(notify);
  ref.current = value;
  callback.current = notify;

  const set = React.useCallback((patch: Partial<State>) => {
    const next = { ...ref.current, ...patch };
    ref.current = next;
    setLocal(next);
    callback.current?.(next);
  }, []);

  return [value, set] as const;
}

export default function DirectionalTextButton({
  title = "Explore the project",
  href,
  state,
  onStateChange,
  onAction,
  seeking = false,
  disabled = false,
  showContext = true,
  className = "",
}: Props) {
  const [v, set] = useValue({ open: false, active: 0 }, state, onStateChange);
  const id = React.useId();
  const target = React.useRef<HTMLDivElement>(null);
  const link = React.useRef<HTMLAnchorElement>(null);

  const hover = v.reveal ?? (v.open ? 1 : 0);
  const isHovered = hover > 0.05;

  React.useEffect(() => {
    if (v.active === 1 && !seeking && !href) {
      target.current?.focus();
    }
  }, [v.active, seeking, href]);

  const buttonContent = (
    <a
      ref={link}
      href={disabled ? undefined : href || `#${id}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onPointerEnter={() => !seeking && set({ open: true })}
      onPointerLeave={() => !seeking && set({ open: false })}
      onFocus={() => !seeking && set({ open: true })}
      onBlur={() => !seeking && set({ open: false })}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        if (!href) {
          e.preventDefault();
          set({ active: 1 });
        }
        onAction?.("navigate");
      }}
      className={`group relative inline-flex items-center gap-5 pb-3 text-lg sm:text-xl font-medium tracking-tight text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm select-none ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <span>{title}</span>

      {/* Direction Arrow Window */}
      <span className="relative w-5 h-5 overflow-hidden inline-flex items-center justify-center shrink-0" aria-hidden="true">
        {/* Outgoing Arrow */}
        <span
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
          style={
            seeking
              ? { transform: `translate(${hover * 22}px, ${-hover * 22}px)` }
              : undefined
          }
          data-state={isHovered ? "hovered" : "idle"}
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ease-out ${
              !seeking && isHovered ? "translate-x-[22px] -translate-y-[22px]" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </span>

        {/* Incoming Arrow */}
        <span
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out"
          style={
            seeking
              ? { transform: `translate(${(hover - 1) * 22}px, ${(1 - hover) * 22}px)` }
              : undefined
          }
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ease-out ${
              !seeking
                ? isHovered
                  ? "translate-x-0 translate-y-0"
                  : "-translate-x-[22px] translate-y-[22px]"
                : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </span>
      </span>

      {/* Expanding Underline */}
      <span
        className="absolute left-0 bottom-0 h-[2px] bg-foreground origin-left transition-transform duration-300 ease-out w-full pointer-events-none"
        style={
          seeking
            ? { transform: `scaleX(${0.14 + 0.86 * hover})` }
            : { transform: isHovered ? "scaleX(1)" : "scaleX(0.14)" }
        }
      />
    </a>
  );

  if (!showContext) {
    return (
      <div className={`inline-block ${className}`} data-seek={seeking}>
        {buttonContent}
      </div>
    );
  }

  return (
    <section
      className={`w-full max-w-md mx-auto rounded-2xl border border-border bg-card text-card-foreground p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center min-h-[260px] text-center transition-colors ${className}`}
      data-seek={seeking}
    >
      {/* Kicker badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          An invitation to explore
        </span>
      </div>

      {/* Main interactive button */}
      <div className="my-2">{buttonContent}</div>

      {/* Destination Preview Card or Hint */}
      {v.active === 1 && !href ? (
        <div
          id={id}
          ref={target}
          tabIndex={-1}
          className="w-full mt-6 rounded-xl border border-border bg-muted/40 p-4 text-left shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring animate-in fade-in zoom-in-95 duration-200"
        >
          <h3 className="text-sm font-semibold text-foreground mb-1">
            Forma — a considered identity.
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            A local project preview. Strategy, identity, and digital design, brought together in one clear direction.
          </p>
          <button
            type="button"
            onClick={() => {
              set({ active: 0 });
              link.current?.focus();
            }}
            className="mt-3 text-xs font-medium text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm cursor-pointer"
          >
            Back to the invitation
          </button>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
          A clear direction. Just enough movement.
        </p>
      )}
    </section>
  );
}
