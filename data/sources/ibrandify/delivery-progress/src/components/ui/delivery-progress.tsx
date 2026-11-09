"use client";
import * as React from "react";

export type State = {
  active?: number;
  open?: boolean;
  expanded?: number;
  reveal?: number;
  previous?: number;
  blend?: number;
  selected?: string;
  query?: string;
  notice?: string;
  highlighted?: boolean;
};

export type DeliveryStep = {
  label: string;
  time: string;
  detail: string;
};

export type Props = {
  title?: string;
  subtitle?: string;
  state?: State;
  onStateChange?: (state: State) => void;
  onAction?: (action: string) => void;
  seeking?: boolean;
  theme?: "light" | "dark";
  className?: string;
  steps?: DeliveryStep[];
};

function useStateValue(
  initial: State,
  controlled: State | undefined,
  notify: Props["onStateChange"],
) {
  const [local, update] = React.useState(initial);
  const value = controlled ?? local;
  const set = (patch: Partial<State>) => {
    const next = { ...value, ...patch };
    update(next);
    notify?.(next);
  };
  return [value, set] as const;
}

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));

function Check() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 8 3 3 7-7" />
    </svg>
  );
}

const sampleSteps: DeliveryStep[] = [
  {
    label: "Order confirmed",
    time: "OCT 05 · 09:42",
    detail: "Your order is confirmed. We are carefully preparing your items for dispatch.",
  },
  {
    label: "Packed & dispatched",
    time: "OCT 06 · 14:18",
    detail: "Packed with care at our Copenhagen studio and collected by the carrier.",
  },
  {
    label: "Out for delivery",
    time: "OCT 08 · 08:06",
    detail: "Your parcel has left the local delivery facility. No signature is required.",
  },
  {
    label: "Delivered",
    time: "OCT 08 · 11:24",
    detail:
      "Delivered to your front door. Thank you for making room for something considered.",
  },
];

export default function DeliveryProgress({
  title = "Good things are on their way.",
  subtitle = "Your order is moving a little closer.",
  steps = sampleSteps,
  state,
  onStateChange,
  onAction,
  seeking = false,
  className = "",
}: Props) {
  const [v, set] = useStateValue({ active: 2, expanded: 2 }, state, onStateChange);
  const current = clamp(v.active ?? 2, 0, Math.max(0, steps.length - 1));
  const expanded = v.expanded ?? current;

  return (
    <section
      className={`w-full max-w-[760px] mx-auto relative rounded-2xl border border-border bg-background p-6 sm:p-8 text-foreground text-left shadow-xs ${
        seeking ? "[&_*]:!transition-none [&_*]:!animate-none" : ""
      } ${className}`}
      data-seeking={seeking}
    >
      <header className="flex justify-between items-start gap-4 mb-7">
        <div>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-semibold">
            Order / FR—2084
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mt-2 mb-1">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground m-0">{subtitle}</p>
        </div>
        <span
          className="w-12 h-12 rounded-xl border border-border bg-muted/40 flex items-center justify-center text-muted-foreground flex-none"
          aria-hidden="true"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path d="m4 9 12-6 12 6v14l-12 6-12-6Zm0 0 12 6 12-6M16 15v14M10 6l12 6v6" />
          </svg>
        </span>
      </header>

      {/* Arrival Card */}
      <div className="border border-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/20 my-6">
        <div>
          <span className="text-[10px] tracking-[0.14em] uppercase text-muted-foreground font-semibold">
            {current === steps.length - 1 ? "Delivered" : "Estimated arrival"}
          </span>
          <div className="text-base sm:text-lg font-semibold text-foreground mt-0.5">
            {current === steps.length - 1 ? "Right on time." : "Thursday, Oct 08"}
          </div>
          <p className="text-xs text-muted-foreground m-0 mt-0.5">
            {current === steps.length - 1
              ? "Left safely at your front door."
              : "Between 10:00 AM and 2:00 PM"}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-background text-foreground shadow-2xs self-start sm:self-auto">
          <span
            className={`w-2 h-2 rounded-full ${
              current === steps.length - 1
                ? "bg-emerald-500"
                : "bg-blue-500 animate-pulse"
            }`}
          />
          {steps[current]?.label ?? "No updates"}
        </span>
      </div>

      {/* Progress Track */}
      <div
        className="h-1.5 w-full bg-muted rounded-full overflow-hidden my-6"
        role="progressbar"
        aria-label="Delivery progress"
        aria-valuemin={0}
        aria-valuemax={Math.max(1, steps.length - 1)}
        aria-valuenow={current}
        aria-valuetext={steps[current]?.label}
      >
        <span
          className="block h-full bg-foreground transition-all duration-300 rounded-full"
          style={{ width: `${(current / Math.max(1, steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Step List */}
      <ol className="list-none p-0 m-0 space-y-1">
        {steps.map((s, i) => (
          <li
            key={s.label}
            className={`rounded-xl transition-colors ${
              expanded === i ? "bg-muted/30" : "hover:bg-muted/20"
            }`}
          >
            <button
              type="button"
              className="w-full flex items-center gap-3.5 p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              aria-expanded={expanded === i}
              onClick={() => {
                set({ expanded: expanded === i ? -1 : i });
                onAction?.(s.label);
              }}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-none text-xs font-medium transition-colors ${
                  i < current
                    ? "bg-foreground text-background"
                    : i === current
                    ? "border-2 border-foreground text-foreground"
                    : "border border-border bg-muted/50 text-muted-foreground"
                }`}
              >
                {i < current ? (
                  <Check />
                ) : i === current ? (
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                ) : null}
              </span>

              <span className="flex-1 min-w-0">
                <strong
                  className={`block text-xs sm:text-sm font-medium ${
                    i <= current ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </strong>
                <small className="block text-[11px] text-muted-foreground">
                  {i <= current ? s.time : "Awaiting update"}
                </small>
              </span>

              <span
                className="text-muted-foreground font-mono text-xs px-2 select-none"
                aria-hidden="true"
              >
                {expanded === i ? "−" : "+"}
              </span>
            </button>

            {expanded === i && (
              <p className="pl-12 pr-4 pb-3 pt-0 text-xs text-muted-foreground leading-relaxed m-0 animate-in fade-in duration-150">
                {i <= current
                  ? s.detail
                  : "We will show tracking details when your order reaches this stage."}
              </p>
            )}
          </li>
        ))}
      </ol>

      <footer className="flex items-center justify-between pt-6 border-t border-border text-xs text-muted-foreground mt-6 font-medium">
        <span>Standard shipping · Sample shipment</span>
        <span className="font-mono text-[11px]">1Z 984 02F 824</span>
      </footer>
    </section>
  );
}
