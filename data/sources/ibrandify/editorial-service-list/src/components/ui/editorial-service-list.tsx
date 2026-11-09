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

export type ServiceItem = {
  name: string;
  discipline: string;
  description: string;
};

export type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  services?: ServiceItem[];
  state?: State;
  onStateChange?: (state: State) => void;
  onAction?: (action: string) => void;
  seeking?: boolean;
  className?: string;
};

const defaultServices: ServiceItem[] = [
  {
    name: "Brand strategy",
    discipline: "Clarity before expression",
    description:
      "Positioning, audience research, and a clear point of view. We build the foundation that makes every creative decision feel inevitable.",
  },
  {
    name: "Digital experiences",
    discipline: "Considered at every touchpoint",
    description:
      "Distinctive websites and digital products, designed around the people who use them. From first impression to everyday interaction.",
  },
  {
    name: "Visual identity",
    discipline: "A system, not just a symbol",
    description:
      "Typography, art direction, and identity systems with enough character to stand apart and enough structure to grow.",
  },
];

function useValue(
  initial: State,
  controlled: State | undefined,
  notify: Props["onStateChange"],
) {
  const [local, setLocal] = React.useState(initial);
  const value = controlled ?? local;
  const set = (patch: Partial<State>) => {
    const next = { ...value, ...patch };
    setLocal(next);
    notify?.(next);
  };
  return [value, set] as const;
}

export default function EditorialServiceList({
  title = "Considered from\nevery angle.",
  subtitle = "We partner with people building something worth paying attention to.",
  kicker = "Independent thinking. Shared ambition.",
  services = defaultServices,
  state,
  onStateChange,
  onAction,
  seeking = false,
  className = "",
}: Props) {
  const [v, set] = useValue({ expanded: -1 }, state, onStateChange);
  const id = React.useId();

  return (
    <section
      className={`w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card text-card-foreground p-6 sm:p-10 shadow-sm transition-colors ${className}`}
      data-seeking={seeking}
    >
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10 pb-2">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground block mb-2">
            {kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-foreground leading-[1.1] whitespace-pre-line">
            {title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-xs sm:pt-6 leading-relaxed">
          {subtitle}
        </p>
      </header>

      {/* Accordion Rows */}
      <div className="flex flex-col">
        {services.map((service, i) => {
          const open = v.expanded === i;
          return (
            <div key={service.name} className="border-t border-border">
              <button
                type="button"
                id={`${id}-button-${i}`}
                aria-expanded={open}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => {
                  set({ expanded: open ? -1 : i });
                  onAction?.(service.name);
                }}
                className="group w-full py-6 flex items-center text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm cursor-pointer"
              >
                {/* Step Number */}
                <span className="text-xs font-mono text-muted-foreground w-12 shrink-0">
                  0{i + 1}
                </span>

                {/* Service Name */}
                <span
                  className={`text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-foreground transition-transform duration-200 ${
                    open ? "translate-x-2 text-primary" : "group-hover:translate-x-2"
                  }`}
                >
                  {service.name}
                </span>

                {/* Subdiscipline Tag */}
                <span className="hidden sm:inline-block ml-auto mr-6 text-xs text-muted-foreground">
                  {service.discipline}
                </span>

                {/* Directional Arrow */}
                <span
                  className={`ml-auto sm:ml-0 w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 text-muted-foreground group-hover:text-foreground ${
                    open ? "rotate-90 text-primary" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </button>

              {/* Expansion Detail */}
              <div
                id={`${id}-panel-${i}`}
                role="region"
                aria-labelledby={`${id}-button-${i}`}
                aria-hidden={!open}
                style={
                  seeking && open && v.reveal !== undefined
                    ? {
                        gridTemplateRows: `${v.reveal}fr`,
                        opacity: v.reveal,
                      }
                    : undefined
                }
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-12 max-w-2xl pb-6 pt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="border-t border-border pt-6 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Small by choice. Ambitious by nature.</span>
        <span className="font-medium text-foreground/80">
          Strategy → Design → Delivery
        </span>
      </footer>
    </section>
  );
}
