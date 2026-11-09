"use client";

// Feature card with a working command palette: press Cmd K (Ctrl K) or click the search field, filter as you type,
// move with the arrow keys and run a command with Enter.
// The illustration is Command menu (Interface) from Illos (https://illos.dev).
// It loops while it is on screen, pauses off screen, and stays still for prefers-reduced-motion.
//
// License
// The component code in this file (layout, props, play logic) is free to use, change and share under the MIT license.
// The illustration inside it (the SVG markup and its animation) is not covered by MIT. It belongs to Illos and is
// licensed under the Illos free license, https://illos.dev/license: you can use it in personal and commercial work,
// including client projects, with no credit needed, and you may modify it. Not allowed: redistributing or selling it
// as an asset (packs, illustration or icon sites, or other libraries), or using it to build a competing illustration
// library.
import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export type PaletteCommand = {
  id: string;
  label: string;
  group: string;
  icon?: ReactNode;
  /** Extra words that should find this command. */
  keywords?: string[];
  /** What the card says once the command has run. */
  result?: string;
};

export type IllosCommandPaletteProps = {
  title?: string;
  description?: string;
  placeholder?: string;
  commands?: PaletteCommand[];
  onRun?: (command: PaletteCommand) => void;
  /** The illustration's accent and the glow around it, Illos teal by default. Any colour, e.g. "var(--color-primary)". */
  accent?: string;
  className?: string;
};

const COMMANDS: PaletteCommand[] = [
  {
    id: "deploy",
    group: "Suggestions",
    label: "Deploy project",
    icon: <Icon name="Rocket01" />,
    keywords: ["ship", "release", "production"],
    result: "Deploy started on main",
  },
  {
    id: "preview",
    group: "Suggestions",
    label: "Deploy preview",
    icon: <Icon name="GitBranch" />,
    keywords: ["branch", "staging", "share"],
    result: "Preview is building",
  },
  {
    id: "invite",
    group: "Suggestions",
    label: "Invite teammates",
    icon: <Icon name="UserAdd01" />,
    keywords: ["people", "team", "members"],
    result: "Invite link copied",
  },
  {
    id: "dependencies",
    group: "Go to",
    label: "Dependencies",
    icon: <Icon name="Package01" />,
    keywords: ["packages", "updates"],
    result: "Opened Dependencies",
  },
  {
    id: "settings",
    group: "Go to",
    label: "Settings",
    icon: <Icon name="Settings01" />,
    keywords: ["preferences", "account"],
    result: "Opened Settings",
  },
  {
    id: "billing",
    group: "Go to",
    label: "Billing",
    icon: <Icon name="CreditCard" />,
    keywords: ["invoices", "plan", "payment"],
    result: "Opened Billing",
  },
  {
    id: "theme",
    group: "Preferences",
    label: "Toggle dark mode",
    icon: <Icon name="Moon01" />,
    keywords: ["theme", "light", "appearance"],
    result: "Theme switched",
  },
];

export function IllosCommandPalette({
  title = "Run anything from the keyboard",
  description = "Jump to a page, start a deploy or switch themes without reaching for the mouse. Try it here.",
  placeholder = "Type a command or search",
  commands = COMMANDS,
  onRun,
  accent,
  className,
}: IllosCommandPaletteProps) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inView = useRef(false);
  const returnFocus = useRef(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);
  openRef.current = open;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [result, setResult] = useState("");
  const [mac, setMac] = useState(true);

  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = commands.filter((c) => {
    const hay = [c.label, c.group, ...(c.keywords ?? [])].join(" ").toLowerCase();
    return words.every((w) => hay.includes(w));
  });
  const groups = [...new Set(matches.map((c) => c.group))];
  const ordered = groups.flatMap((g) => matches.filter((c) => c.group === g));
  const current = ordered[Math.min(active, ordered.length - 1)];
  const optionId = (c: PaletteCommand) => `${id}-opt-${c.id}`;

  const show = () => {
    setQuery("");
    setActive(0);
    setOpen(true);
  };
  const hide = (refocus = true) => {
    returnFocus.current = refocus;
    setOpen(false);
  };
  const run = (c: PaletteCommand) => {
    hide();
    setResult(c.result ?? `${c.label} done`);
    onRun?.(c);
  };

  useEffect(() => setMac(/Mac|iPhone|iPad/.test(navigator.userAgent)), []);

  // Cmd K / Ctrl K toggles the palette while the card is on screen, so it never takes the shortcut from the rest of the page.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (inView.current = e.isIntersecting), { threshold: 0.5 });
    io.observe(el);
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (!inView.current || !(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== "k") return;
      e.preventDefault();
      if (openRef.current) hide();
      else show();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Focus goes into the palette when it opens and back to the field that opened it when it closes.
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else if (returnFocus.current) {
      returnFocus.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!result) return;
    const t = setTimeout(() => setResult(""), 4000);
    return () => clearTimeout(t);
  }, [result]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const n = ordered.length;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!n) return;
      const next = (Math.min(active, n - 1) + (e.key === "ArrowDown" ? 1 : n - 1)) % n;
      setActive(next);
      document.getElementById(optionId(ordered[next]))?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (current) run(current);
    } else if (e.key === "Escape") {
      e.preventDefault();
      hide();
    }
  };

  const mod = mac ? "⌘" : "Ctrl";
  return (
    <div
      style={accent ? ({ "--illos-accent": accent } as CSSProperties) : undefined}
      ref={rootRef}
      className={cx(
        ROLE_VARS,
        "relative isolate w-full max-w-[520px] rounded-[20px] bg-card p-2 text-card-foreground",
        "shadow-[0_0_0_1px_rgb(0_0_0/0.06),0_1px_2px_rgb(0_0_0/0.04),0_16px_40px_-16px_rgb(0_0_0/0.18)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.09)]",
        className,
      )}
    >
      <div inert={open} className="flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl" style={WELL}>
          <IllosArt svg={COMMAND_MENU_SVG} className="absolute inset-0 grid place-items-center p-2" />
        </div>
        <div className="flex flex-col gap-4 px-4 pt-5 pb-4">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-lg font-semibold tracking-tight text-balance">{title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
          </div>
          <button
            ref={triggerRef}
            type="button"
            onClick={show}
            aria-label="Search or run a command"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-keyshortcuts="Meta+K Control+K"
            className="flex h-11 w-full items-center gap-2.5 rounded-xl border border-border bg-background px-3 text-left text-sm text-muted-foreground transition-[border-color,background-color,scale] duration-150 hover:border-ring/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-[0.99]"
          >
            {result ? (
              <span
                key={result}
                className="flex flex-1 items-center gap-2.5 truncate text-foreground transition-opacity duration-200 starting:opacity-0 motion-reduce:transition-none"
              >
                <Icon name="Tick02" />
                {result}
              </span>
            ) : (
              <>
                <Icon name="Search01" />
                <span className="flex-1 truncate">Search or run a command</span>
              </>
            )}
            <Kbd>{mod}</Kbd>
            <Kbd>K</Kbd>
          </button>
          <p role="status" className="sr-only">
            {result}
          </p>
        </div>
      </div>

      {open && (
        <>
          <div
            aria-hidden="true"
            onMouseDown={(e) => {
              e.preventDefault();
              hide();
            }}
            className="absolute inset-0 z-10 rounded-[20px] bg-card/55 dark:bg-background/60"
          />
          <div
            role="dialog"
            aria-label="Command menu"
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && hide(false)}
            className={cx(
              "absolute inset-x-3 top-3 z-20 flex max-h-[calc(100%-1.5rem)] origin-top flex-col overflow-hidden rounded-lg bg-card",
              "shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_4px_8px_-2px_rgb(0_0_0/0.08),0_24px_48px_-12px_rgb(0_0_0/0.28)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.12),0_24px_48px_-12px_rgb(0_0_0/0.6)]",
            )}
          >
            <div className="flex items-center gap-2.5 border-b border-border px-3">
              <Icon name="Search01" className="text-muted-foreground" />
              <input
                ref={inputRef}
                role="combobox"
                aria-expanded="true"
                aria-controls={`${id}-list`}
                aria-activedescendant={current ? optionId(current) : undefined}
                aria-autocomplete="list"
                aria-label="Search commands"
                autoComplete="off"
                spellCheck={false}
                placeholder={placeholder}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                className="h-12 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
              />
              <button
                type="button"
                onClick={() => hide()}
                aria-label="Close"
                className="relative rounded-[5px] before:absolute before:-inset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Kbd>Esc</Kbd>
              </button>
            </div>
            <div
              id={`${id}-list`}
              role="listbox"
              aria-label="Commands"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-1.5"
            >
              {groups.map((g) => (
                <div key={g} role="group" aria-labelledby={`${id}-g-${g}`} className="pb-1">
                  <div id={`${id}-g-${g}`} className="px-2 pt-2 pb-1 text-xs font-medium text-muted-foreground">
                    {g}
                  </div>
                  {matches
                    .filter((c) => c.group === g)
                    .map((c) => {
                      const on = c === current;
                      return (
                        <div
                          key={c.id}
                          id={optionId(c)}
                          role="option"
                          aria-selected={on}
                          onMouseMove={() => !on && setActive(ordered.indexOf(c))}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => run(c)}
                          className={cx(
                            "flex h-10 cursor-pointer items-center gap-2.5 rounded-md px-2 text-sm select-none",
                            on ? "bg-muted text-foreground" : "text-foreground/90",
                          )}
                        >
                          <span
                            className={cx(
                              "grid size-5 place-items-center",
                              on ? "text-foreground" : "text-muted-foreground",
                            )}
                          >
                            {c.icon}
                          </span>
                          <span className="flex-1 truncate">{c.label}</span>
                          {on && <Kbd>Enter</Kbd>}
                        </div>
                      );
                    })}
                </div>
              ))}
              {!ordered.length && (
                <p className="px-2 py-8 text-center text-sm text-muted-foreground">
                  No commands match “{query.trim()}”.
                </p>
              )}
            </div>
            <div className="flex h-9 shrink-0 items-center gap-4 border-t border-border px-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd>
                to move
              </span>
              <span className="flex items-center gap-1.5">
                <Kbd>Enter</Kbd>
                to run
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default IllosCommandPalette;

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded-[5px] border border-border bg-muted px-1 font-sans text-[11px] leading-none font-medium text-muted-foreground">
      {children}
    </kbd>
  );
}

/** The illustration's colour roles, taken from your theme tokens so it follows light and dark. `--illos-accent` is
 * its one colour of its own (teal): the `accent` prop recolours the illustration and
 * the glow around it. */
const ROLE_VARS =
  "[--illos-accent:#1daf9c] dark:[--illos-accent:#3fdec9] [--illos-ground:var(--color-card)] [--illos-ink:var(--color-card-foreground)] [--illos-if-raised:var(--color-card)] [--illos-if-surface:color-mix(in_oklab,var(--color-muted)_70%,var(--color-card))] [--illos-if-line:color-mix(in_oklab,var(--color-foreground)_16%,var(--color-card))] [--illos-if-muted:color-mix(in_oklab,var(--color-muted-foreground)_85%,var(--color-card))] [--illos-if-bar:color-mix(in_oklab,var(--color-foreground)_8%,var(--color-card))] [--illos-if-cursor:var(--color-card)] [--illos-if-cursor-edge:var(--color-foreground)] dark:[--illos-if-cursor:var(--color-foreground)] dark:[--illos-if-cursor-edge:var(--color-background)] [--well-glow:34%] dark:[--well-glow:16%]";

/** The well the illustration sits in: two soft accent glows over the muted surface, with a fine grain on top. */
const WELL: CSSProperties = {
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 .2 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    "radial-gradient(70% 80% at 88% 4%, color-mix(in oklab, var(--illos-accent) var(--well-glow), transparent), transparent 72%)",
    "radial-gradient(65% 70% at 6% 100%, color-mix(in oklab, var(--illos-accent) calc(var(--well-glow) * 0.6), transparent), transparent 70%)",
    "linear-gradient(200deg, color-mix(in oklab, var(--color-muted) 55%, var(--color-card)), var(--color-muted))",
  ].join(", "),
  boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--color-foreground) 6%, transparent)",
};

// Icons from the Hugeicons free set (MIT), stroke-rounded.
const ICONS = {
  Search01: `<path d="M17 17L21 21"/><path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"/>`,
  Tick02: `<path d="M5 14L8.5 17.5L19 6.5"/>`,
  Rocket01: `<path d="M6.21875 11.618L3.31189 11.2378C2.71644 11.1606 2.31883 10.5841 2.58348 10.0458C3.42523 8.33365 5.6195 6.35437 9.73988 6.68079M6.21875 11.618C7.27445 9.85426 8.57175 8.00435 9.73988 6.68079M6.21875 11.618L11.882 17.2812M9.73988 6.68079C13.4105 2.58986 17.1745 1.728 19.5937 2.06685C20.5508 2.2009 21.2991 2.94917 21.4332 3.90626C21.772 6.32551 20.9101 10.0895 16.8192 13.7601M11.882 17.2812L12.2622 20.1881C12.3394 20.7836 12.9159 21.1812 13.4542 20.9165C15.1664 20.0748 17.1456 17.8805 16.8192 13.7601M11.882 17.2812C13.6457 16.2255 15.4956 14.9282 16.8192 13.7601"/><path d="M17.5 8C17.5 6.89543 16.6046 6 15.5 6C14.3954 6 13.5 6.89543 13.5 8C13.5 9.10457 14.3954 10 15.5 10C16.6046 10 17.5 9.10457 17.5 8Z"/><path d="M4 22L8 18M4 17L5.5 15.5"/>`,
  GitBranch: `<path d="M7 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13V10M19 10C19.7002 10 21.0085 11.9943 21.5 12.5M19 10C18.2998 10 16.9915 11.9943 16.5 12.5"/><path d="M5 7L5 17"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/>`,
  UserAdd01: `<path d="M3 20.5002C3.28417 16.8058 6.3 13.7193 10.0008 13.5379C10.3134 13.5226 10.6446 13.5097 11 13.5L11.995 13.5663C12.6939 13.6129 13.3665 13.7543 14 13.9777"/><path d="M18 15.5V21.5M21 18.5L15 18.5"/><circle cx="11" cy="6.5" r="4"/>`,
  Package01: `<path d="M2.5 7.5V13.5C2.5 17.2712 2.5 19.1569 3.67157 20.3284C4.84315 21.5 6.72876 21.5 10.5 21.5H13.5C17.2712 21.5 19.1569 21.5 20.3284 20.3284C21.5 19.1569 21.5 17.2712 21.5 13.5V7.5"/><path d="M3.86909 5.31461L2.5 7.5H21.5L20.2478 5.41303C19.3941 3.99021 18.9673 3.2788 18.2795 2.8894C17.5918 2.5 16.7621 2.5 15.1029 2.5H8.95371C7.32998 2.5 6.51812 2.5 5.84013 2.8753C5.16215 3.2506 4.73113 3.93861 3.86909 5.31461Z"/><path d="M12 7.5V2.5"/><path d="M10 10.5H14"/>`,
  Settings01: `<path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z"/><path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z"/>`,
  CreditCard: `<path d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z"/><path d="M10 16H11.5"/><path d="M14.5 16L18 16"/><path d="M2 9H22"/>`,
  Moon01: `<path d="M21.0985 7.84477C20.458 8.55417 19.5311 9 18.5 9C16.567 9 15 7.433 15 5.5C15 4.46895 15.4458 3.54203 16.1552 2.90149M16.1552 2.90149C18.3384 3.90018 20.0998 5.66155 21.0985 7.84477C21.6774 9.11025 22 10.5174 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4826 2 14.8898 2.32262 16.1552 2.90149Z"/><path d="M16 16C16 17.1046 15.1046 18 14 18C12.8954 18 12 17.1046 12 16C12 14.8954 12.8954 14 14 14C15.1046 14 16 14.8954 16 16Z"/><path d="M7.13086 14H7.00586M7.25586 14C7.25586 14.1381 7.14393 14.25 7.00586 14.25C6.86779 14.25 6.75586 14.1381 6.75586 14C6.75586 13.8619 6.86779 13.75 7.00586 13.75C7.14393 13.75 7.25586 13.8619 7.25586 14Z"/><path d="M10.1309 8H10.0059M10.2559 8C10.2559 8.13807 10.1439 8.25 10.0059 8.25C9.86779 8.25 9.75586 8.13807 9.75586 8C9.75586 7.86193 9.86779 7.75 10.0059 7.75C10.1439 7.75 10.2559 7.86193 10.2559 8Z"/>`,
} as const;

function Icon({ name, className }: { name: keyof typeof ICONS; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cx("size-4 shrink-0", className)}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}

/** The illustration, inline. Decorative here: the card's own text says what it means. */
function IllosArt({ svg, className }: { svg: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    // The animation loops on its own; this only pauses it while less than a quarter of it is on screen.
    const io = new IntersectionObserver(
      ([entry]) => host.style.setProperty("--illos-play", entry.isIntersecting ? "running" : "paused"),
      { threshold: 0.25 },
    );
    io.observe(host);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cx("pointer-events-none select-none [&>svg]:h-auto [&>svg]:w-full", className)}
      style={{ "--illos-play": "paused" } as CSSProperties}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

const COMMAND_MENU_SVG = `<svg class="if-command-menu" xmlns="http://www.w3.org/2000/svg" width="720" height="460" viewBox="0 0 720 460" fill="none" stroke="#d6d6d9" role="img" aria-labelledby="if-command-menu-t" aria-describedby="if-command-menu-d">
<title id="if-command-menu-t">Command menu</title>
<desc id="if-command-menu-d">A command menu with dep typed in it. The search is cleared and typed again: Open settings drops out of the list, and Deploy project, the first match, is highlighted in teal.</desc>
<style>@scope (svg.if-command-menu) {
:scope{--_ground:#ffffff;--_ink:#2a2a2a;--_accent:#1daf9c;--_if-surface:#f7f7f8;--_if-raised:#ffffff;--_if-line:#d6d6d9;--_if-muted:#9a9aa0;--_if-bar:#e6e6e8;--_if-accent-fill:#e4fbf8;--_if-accent-mid:#84ebdd;--_if-cursor:#ffffff;--_if-cursor-edge:#2a2a2a;--_if-shadow:#2a2a2a}
@media (prefers-color-scheme: dark){:scope{--_ground:#101112;--_ink:#dadadc;--_accent:#3fdec9;--_if-surface:#1a1b1d;--_if-raised:#1f2023;--_if-line:#34363b;--_if-muted:#7c7d84;--_if-bar:#2a2b2f;--_if-accent-fill:#0f2e2a;--_if-accent-mid:#178c7d;--_if-cursor:#e9e9ea;--_if-cursor-edge:#101112;--_if-shadow:#101112}}
:scope{--_if-accent-auto-fill:color-mix(in oklab, var(--illos-accent) 12%, var(--illos-ground, var(--_ground)));--_if-accent-auto-mid:color-mix(in oklab, var(--illos-accent) 55%, var(--illos-ground, var(--_ground)))}
:scope{stroke:none}
@keyframes if-command-menu_k0{0%{opacity:1}19.643%{opacity:1}20%{opacity:0}46.429%{opacity:0}46.786%{opacity:1}100%{opacity:1}}
.k0{opacity:1;animation:if-command-menu_k0 2.8s linear}
@keyframes if-command-menu_k1{0%{opacity:1}12.5%{opacity:1}12.857%{opacity:0}53.571%{opacity:0}53.929%{opacity:1}100%{opacity:1}}
.k1{opacity:1;animation:if-command-menu_k1 2.8s linear}
@keyframes if-command-menu_k2{0%{opacity:1}5.357%{opacity:1}5.714%{opacity:0}60.714%{opacity:0}61.071%{opacity:1}100%{opacity:1}}
.k2{opacity:1;animation:if-command-menu_k2 2.8s linear}
@keyframes if-command-menu_caret{0%{opacity:1;transform:translateX(54.42px)}5.357%{opacity:1;transform:translateX(54.42px)}5.714%{opacity:1;transform:translateX(36.66px)}12.5%{opacity:1;transform:translateX(36.66px)}12.857%{opacity:1;transform:translateX(19.76px)}19.643%{opacity:1;transform:translateX(19.76px)}20%{opacity:1;transform:translateX(0px)}30.357%{opacity:1;transform:translateX(0px)}31.071%{opacity:0;transform:translateX(0px)}46.429%{opacity:0;transform:translateX(0px)}46.786%{opacity:1;transform:translateX(19.76px)}53.571%{opacity:1;transform:translateX(19.76px)}53.929%{opacity:1;transform:translateX(36.66px)}60.714%{opacity:1;transform:translateX(36.66px)}61.071%{opacity:1;transform:translateX(54.42px)}76.786%{opacity:1;transform:translateX(54.42px)}77.5%{opacity:0;transform:translateX(54.42px)}91.786%{opacity:0;transform:translateX(54.42px)}92.5%{opacity:1;transform:translateX(54.42px)}100%{opacity:1;transform:translateX(54.42px)}}
.caret{opacity:1;transform:translateX(54.42px);animation:if-command-menu_caret 2.8s linear}
@keyframes if-command-menu_hint{0%{opacity:0}21.429%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}30.357%{opacity:1}46.429%{opacity:1}47.143%{opacity:0}100%{opacity:0}}
.hint{opacity:0;animation:if-command-menu_hint 2.8s linear}
@keyframes if-command-menu_hl{0%{opacity:1}19.643%{opacity:1;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}28.571%{opacity:0}50%{opacity:0;animation-timing-function:cubic-bezier(0.23,1,0.32,1)}58.929%{opacity:1}100%{opacity:1}}
.hl{opacity:1;animation:if-command-menu_hl 2.8s linear}
@keyframes if-command-menu_rest{0%{transform:translateY(0px)}21.429%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}35.714%{transform:translateY(60px)}52.5%{transform:translateY(60px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}66.786%{transform:translateY(0px)}100%{transform:translateY(0px)}}
.rest{transform:translateY(0px);animation:if-command-menu_rest 2.8s linear}
@keyframes if-command-menu_edge{0%{transform:translateY(0px)}21.429%{transform:translateY(0px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}35.714%{transform:translateY(60px)}52.5%{transform:translateY(60px);animation-timing-function:cubic-bezier(0.32,0.72,0,1)}66.786%{transform:translateY(0px)}100%{transform:translateY(0px)}}
.edge{transform:translateY(0px);animation:if-command-menu_edge 2.8s linear}
@keyframes if-command-menu_settings{0%{opacity:0;transform:translateX(-16px)}25%{opacity:0;transform:translateX(-16px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}37.5%{opacity:1;transform:translateX(0px)}48.214%{opacity:1;transform:translateX(0px);animation-timing-function:cubic-bezier(0.23,1,0.32,1)}55.357%{opacity:0;transform:translateX(-16px)}100%{opacity:0;transform:translateX(-16px)}}
.settings{opacity:0;transform:translateX(-16px);animation:if-command-menu_settings 2.8s linear}
*{animation-iteration-count:infinite!important;animation-play-state:var(--illos-play,running)!important}
@media (prefers-reduced-motion: reduce){*{animation:none!important}}
}
</style>
<path d="M84 314V134.4C84 89.25 93.25 80 138.4 80H581.6C626.75 80 636 89.25 636 134.4V314" fill="var(--illos-if-raised,var(--_if-raised))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><g class="edge"><path d="M84 244V319.6C84 364.75 93.25 374 138.4 374H581.6C626.75 374 636 364.75 636 319.6V244" fill="var(--illos-if-raised,var(--_if-raised))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/></g><g data-icon="Search01" transform="translate(128,113) scale(1.4167)" fill="none"><path d="M17 17L21 21" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/></g><g class="k0"><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M186.2 140.8q-2 0-3.5-1q-1.5-1-2.4-2.8q-0.8-1.9-0.8-4.4q0-2.5 0.8-4.3q0.9-1.8 2.4-2.8q1.5-1 3.5-1q1.5 0 2.4 0.5q0.9 0.5 1.4 1.1q0.5 0.7 0.8 1.1l0.2 0l0-7.8l2.5 0l0 21.1l-2.4 0l0-2.4l-0.3 0q-0.3 0.4-0.8 1q-0.5 0.7-1.4 1.2q-0.9 0.5-2.4 0.5zm0.4-2.2q1.4 0 2.4-0.8q1-0.8 1.5-2.1q0.5-1.3 0.5-3.1q0-1.8-0.5-3.1q-0.5-1.3-1.5-2q-1-0.7-2.4-0.7q-1.5 0-2.5 0.7q-1 0.8-1.5 2.1q-0.5 1.4-0.5 3q0 1.7 0.5 3q0.5 1.4 1.5 2.2q1 0.8 2.5 0.8z"/></g><g class="k1"><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M204.7 140.8q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2z"/></g><g class="k2"><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M217.5 146.4l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8z"/></g><g class="hint"><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M192 121.8l-6.6 0l0-2.4l15.9 0l0 2.4l-6.6 0l0 18.7l-2.7 0zm10.9 24.4l0.6-2.2l0.3 0.1q0.8 0.2 1.4 0.1q0.7-0.1 1.2-0.6q0.5-0.6 0.9-1.7l0.4-1.3l-6-15.9l2.8 0l3.3 9.4q0.6 1.4 0.9 2.9q0.2 0.6 0.3 1.2q0.2-0.6 0.4-1.2q0.3-1.5 0.9-2.9l3.4-9.4l2.7 0l-6.9 18.2q-0.5 1.2-1.2 2q-0.6 0.9-1.5 1.2q-0.9 0.4-2 0.4q-0.7 0-1.2-0.1q-0.5-0.1-0.7-0.2zm19.1 0.2l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm17.5 2.2q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm27.6 9.6q-1.5 0-2.7-0.6q-1.3-0.6-2-1.7q-0.7-1-0.7-2.6q0-1.4 0.5-2.2q0.6-0.9 1.5-1.4q0.8-0.4 1.9-0.7q1.1-0.2 2.2-0.4q1.5-0.1 2.3-0.2q0.9-0.1 1.4-0.4q0.4-0.2 0.4-0.8l0-0.1q0-1-0.4-1.7q-0.3-0.7-1.1-1q-0.7-0.4-1.8-0.4q-1.1 0-2 0.4q-0.8 0.3-1.3 0.8q-0.5 0.6-0.7 1.1l-2.5-0.8q0.6-1.4 1.7-2.2q1-0.8 2.2-1.2q1.3-0.3 2.5-0.3q0.8 0 1.8 0.2q1 0.2 2 0.7q0.9 0.6 1.5 1.7q0.6 1.1 0.6 3l0 10.4l-2.5 0l0-2.2l-0.1 0q-0.3 0.6-0.9 1.2q-0.6 0.6-1.5 1q-1 0.4-2.3 0.4zm0.4-2.3q1.4 0 2.4-0.5q1-0.6 1.5-1.5q0.5-0.9 0.5-1.8l0-2.2q-0.2 0.2-0.7 0.3q-0.5 0.2-1.2 0.3q-0.7 0.1-1.3 0.2q-0.6 0-1 0.1q-0.9 0.1-1.7 0.4q-0.8 0.3-1.3 0.8q-0.5 0.5-0.5 1.4q0 0.8 0.5 1.4q0.4 0.6 1.1 0.8q0.8 0.3 1.7 0.3zm26.1 2.2q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q1.1 0 2.1 0.3q1.1 0.3 1.9 0.8q0.9 0.6 1.5 1.4q0.6 0.8 0.9 1.8l-2.5 0.7q-0.1-0.6-0.5-1.1q-0.3-0.5-0.8-0.9q-0.5-0.3-1.2-0.6q-0.6-0.1-1.4-0.1q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9q0.8 0 1.4-0.3q0.7-0.2 1.2-0.6q0.5-0.3 0.9-0.9q0.3-0.5 0.5-1.2l2.5 0.7q-0.4 1.1-1 1.9q-0.6 0.9-1.4 1.4q-0.9 0.6-1.9 0.9q-1.1 0.3-2.2 0.3zm16.5 0q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q2.1 0 3.8 1q1.6 1 2.5 2.9q0.9 1.8 0.9 4.3q0 2.4-0.9 4.3q-0.9 1.8-2.5 2.8q-1.7 1-3.8 1zm0-2.2q1.6 0 2.6-0.9q1-0.8 1.5-2.1q0.5-1.4 0.5-2.9q0-1.6-0.5-2.9q-0.5-1.4-1.5-2.2q-1-0.8-2.6-0.8q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9zm13.5 1.9l-2.6 0l0-15.8l2.5 0l0 2.9q0.3-0.9 0.9-1.5q0.7-0.9 1.6-1.3q0.9-0.4 2-0.4q1.7 0 2.8 1q0.8 0.9 1.2 2.2q0.3-0.8 0.8-1.4q0.8-0.9 1.9-1.3q1-0.5 2.3-0.5q1.4 0 2.5 0.6q1.1 0.6 1.8 1.8q0.7 1.2 0.7 3l0 10.7l-2.6 0l0-10.6q0-1.7-0.9-2.5q-1-0.7-2.3-0.7q-1 0-1.8 0.4q-0.8 0.5-1.2 1.3q-0.4 0.8-0.4 1.8l0 10.3l-2.6 0l0-10.9q0-1.3-0.9-2.1q-0.8-0.8-2.2-0.8q-0.9 0-1.7 0.4q-0.8 0.5-1.3 1.3q-0.5 0.9-0.5 2.1zm25.4 0l-2.6 0l0-15.8l2.5 0l0 2.9q0.3-0.9 0.9-1.5q0.7-0.9 1.6-1.3q0.9-0.4 2-0.4q1.7 0 2.8 1q0.8 0.9 1.2 2.2q0.3-0.8 0.8-1.4q0.8-0.9 1.9-1.3q1-0.5 2.3-0.5q1.4 0 2.5 0.6q1.1 0.6 1.8 1.8q0.7 1.2 0.7 3l0 10.7l-2.6 0l0-10.6q0-1.7-0.9-2.5q-1-0.7-2.3-0.7q-1 0-1.8 0.4q-0.8 0.5-1.2 1.3q-0.4 0.8-0.4 1.8l0 10.3l-2.6 0l0-10.9q0-1.3-0.9-2.1q-0.8-0.8-2.2-0.8q-0.9 0-1.7 0.4q-0.8 0.5-1.3 1.3q-0.5 0.9-0.5 2.1zm27.3 0.4q-1.5 0-2.7-0.6q-1.3-0.6-2-1.7q-0.7-1-0.7-2.6q0-1.4 0.5-2.2q0.6-0.9 1.5-1.4q0.8-0.4 1.9-0.7q1.1-0.2 2.2-0.4q1.5-0.1 2.3-0.2q0.9-0.1 1.4-0.4q0.4-0.2 0.4-0.8l0-0.1q0-1-0.4-1.7q-0.3-0.7-1.1-1q-0.7-0.4-1.8-0.4q-1.1 0-2 0.4q-0.8 0.3-1.3 0.8q-0.5 0.6-0.7 1.1l-2.5-0.8q0.6-1.4 1.7-2.2q1-0.8 2.2-1.2q1.3-0.3 2.5-0.3q0.8 0 1.8 0.2q1 0.2 2 0.7q0.9 0.6 1.5 1.7q0.6 1.1 0.6 3l0 10.4l-2.5 0l0-2.2l-0.1 0q-0.3 0.6-0.9 1.2q-0.6 0.6-1.5 1q-1 0.4-2.3 0.4zm0.4-2.3q1.4 0 2.4-0.5q1-0.6 1.5-1.5q0.5-0.9 0.5-1.8l0-2.2q-0.2 0.2-0.7 0.3q-0.5 0.2-1.2 0.3q-0.7 0.1-1.3 0.2q-0.6 0-1 0.1q-0.9 0.1-1.7 0.4q-0.8 0.3-1.3 0.8q-0.5 0.5-0.5 1.4q0 0.8 0.5 1.4q0.4 0.6 1.1 0.8q0.8 0.3 1.7 0.3zm14-7.6l0 9.5l-2.6 0l0-15.8l2.5 0l0 2.9q0.7-1.5 1.7-2.2q1.3-0.9 3.1-0.9q1.6 0 2.8 0.6q1.3 0.7 1.9 2q0.7 1.3 0.7 3.3l0 10.1l-2.6 0l0-9.8q0-1.9-0.9-2.9q-1-1-2.6-1q-1.2 0-2.1 0.5q-0.9 0.5-1.4 1.4q-0.5 1-0.5 2.3zm20.5 9.8q-2 0-3.5-1q-1.5-1-2.4-2.8q-0.8-1.9-0.8-4.4q0-2.5 0.8-4.3q0.9-1.8 2.4-2.8q1.5-1 3.5-1q1.5 0 2.4 0.5q0.9 0.5 1.4 1.1q0.5 0.7 0.8 1.1l0.2 0l0-7.8l2.5 0l0 21.1l-2.4 0l0-2.4l-0.3 0q-0.3 0.4-0.8 1q-0.5 0.7-1.4 1.2q-0.9 0.5-2.4 0.5zm0.4-2.2q1.4 0 2.4-0.8q1-0.8 1.5-2.1q0.5-1.3 0.5-3.1q0-1.8-0.5-3.1q-0.5-1.3-1.5-2q-1-0.7-2.4-0.7q-1.5 0-2.5 0.7q-1 0.8-1.5 2.1q-0.5 1.4-0.5 3q0 1.7 0.5 3q0.5 1.4 1.5 2.2q1 0.8 2.5 0.8z"/></g><path class="caret" d="M179 113V147" stroke="var(--illos-ink,var(--_ink))" stroke-width="2" stroke-linecap="round"/><path d="M531.32,110 H572.8 C588.74,110 592,113.26 592,129.2 V130.8 C592,146.74 588.74,150 572.8,150 H531.32 C515.38,150 512.12,146.74 512.12,130.8 V129.2 C512.12,113.26 515.38,110 531.32,110 Z" fill="var(--illos-if-surface,var(--_if-surface))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><g data-icon="Command" transform="translate(526.12,116) scale(1.1667)" fill="none"><path d="M15 9V15H9V9H15Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linejoin="round" stroke-width="1.714"/><path d="M15 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V15Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linejoin="round" stroke-width="1.714"/><path d="M9 15.002H6C4.34315 15.002 3 16.3451 3 18.002C3 19.6588 4.34315 21.002 6 21.002C7.65685 21.002 9 19.6588 9 18.002V15.002Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linejoin="round" stroke-width="1.714"/><path d="M15 9L15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9H15Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linejoin="round" stroke-width="1.714"/><path d="M9 9V6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H9Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linejoin="round" stroke-width="1.714"/></g><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M565.2 139.5l-2.4 0l0-18.9l2.4 0l0 6.5l0 3.4q0.3-0.3 0.5-0.7q0.7-0.8 1.3-1.6q0.7-0.7 1.4-1.5l5.7-6.1l3.1 0l-7.6 8.2l7.6 10.7l-2.8 0l-6.5-9.1l-2.7 2.9z"/><g data-icon="Rocket01" transform="translate(128,180) scale(1.4167)" fill="none"><path d="M6.21875 11.618L3.31189 11.2378C2.71644 11.1606 2.31883 10.5841 2.58348 10.0458C3.42523 8.33365 5.6195 6.35437 9.73988 6.68079M6.21875 11.618C7.27445 9.85426 8.57175 8.00435 9.73988 6.68079M6.21875 11.618L11.882 17.2812M9.73988 6.68079C13.4105 2.58986 17.1745 1.728 19.5937 2.06685C20.5508 2.2009 21.2991 2.94917 21.4332 3.90626C21.772 6.32551 20.9101 10.0895 16.8192 13.7601M11.882 17.2812L12.2622 20.1881C12.3394 20.7836 12.9159 21.1812 13.4542 20.9165C15.1664 20.0748 17.1456 17.8805 16.8192 13.7601M11.882 17.2812C13.6457 16.2255 15.4956 14.9282 16.8192 13.7601" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M17.5 8C17.5 6.89543 16.6046 6 15.5 6C14.3954 6 13.5 6.89543 13.5 8C13.5 9.10457 14.3954 10 15.5 10C16.6046 10 17.5 9.10457 17.5 8Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M4 22L8 18M4 17L5.5 15.5" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/></g><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M187.1 207.5l-6.6 0l0-21.1l6.9 0q3.1 0 5.3 1.3q2.2 1.2 3.3 3.6q1.2 2.3 1.2 5.6q0 3.3-1.2 5.7q-1.1 2.4-3.4 3.6q-2.3 1.3-5.5 1.3zm-3.9-18.7l0 16.3l3.8 0q2.5 0 4.2-1q1.7-0.9 2.6-2.8q0.8-1.8 0.8-4.4q0-2.5-0.8-4.4q-0.9-1.8-2.5-2.7q-1.6-1-4.1-1zm24.6 19q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm17.6 15.1l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm10.8-19.2l2.6 0l0 21.1l-2.6 0zm13.5 21.4q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q2.1 0 3.8 1q1.6 1 2.5 2.9q0.9 1.8 0.9 4.3q0 2.4-0.9 4.3q-0.9 1.8-2.5 2.8q-1.7 1-3.8 1zm0-2.2q1.6 0 2.6-0.9q1-0.8 1.5-2.1q0.5-1.4 0.5-2.9q0-1.6-0.5-2.9q-0.5-1.4-1.5-2.2q-1-0.8-2.6-0.8q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9zm10.1 7.6l0.6-2.2l0.3 0.1q0.8 0.2 1.4 0.1q0.7-0.1 1.2-0.6q0.5-0.6 0.9-1.7l0.4-1.3l-6-15.9l2.8 0l3.3 9.4q0.6 1.4 0.9 2.9q0.2 0.6 0.3 1.2q0.2-0.6 0.4-1.2q0.3-1.5 0.9-2.9l3.4-9.4l2.7 0l-6.9 18.2q-0.5 1.2-1.2 2q-0.6 0.9-1.5 1.2q-0.9 0.4-2 0.4q-0.7 0-1.2-0.1q-0.5-0.1-0.7-0.2zm27.3 0.2l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm13.3 1.9l-2.6 0l0-15.8l2.5 0l0 2.4l0.2 0q0.4-1.2 1.5-1.9q1.2-0.8 2.6-0.8q0.3 0 0.7 0.1q0.3 0 0.6 0l0 2.5q-0.1 0-0.6 0q-0.5-0.1-1-0.1q-1.1 0-2 0.5q-0.9 0.5-1.4 1.3q-0.5 0.8-0.5 1.9zm14.4 0.3q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q2.1 0 3.8 1q1.6 1 2.5 2.9q0.9 1.8 0.9 4.3q0 2.4-0.9 4.3q-0.9 1.8-2.5 2.8q-1.7 1-3.8 1zm0-2.2q1.6 0 2.6-0.9q1-0.8 1.5-2.1q0.5-1.4 0.5-2.9q0-1.6-0.5-2.9q-0.5-1.4-1.5-2.2q-1-0.8-2.6-0.8q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9zm10.9 3l0-16.9l2.6 0l0 16.9q0 1.5-0.5 2.6q-0.5 1.1-1.6 1.7q-1 0.5-2.6 0.5l-0.5 0l0-2.3l0.5 0q1.1 0 1.6-0.7q0.5-0.6 0.5-1.8zm1.3-19.5q-0.7 0-1.2-0.5q-0.6-0.5-0.6-1.2q0-0.7 0.6-1.2q0.5-0.5 1.2-0.5q0.7 0 1.3 0.5q0.5 0.5 0.5 1.2q0 0.7-0.5 1.2q-0.6 0.5-1.3 0.5zm12.4 18.7q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm21.5 9.5q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q1.1 0 2.1 0.3q1.1 0.3 1.9 0.8q0.9 0.6 1.5 1.4q0.6 0.8 0.9 1.8l-2.5 0.7q-0.1-0.6-0.5-1.1q-0.3-0.5-0.8-0.9q-0.5-0.3-1.2-0.6q-0.6-0.1-1.4-0.1q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9q0.8 0 1.4-0.3q0.7-0.2 1.2-0.6q0.5-0.3 0.9-0.9q0.3-0.5 0.5-1.2l2.5 0.7q-0.4 1.1-1 1.9q-0.6 0.9-1.4 1.4q-0.9 0.6-1.9 0.9q-1.1 0.3-2.2 0.3zm13.1-16.1l3.3 0l0 2.1l-3.3 0l0 9.6q0 1.1 0.4 1.5q0.5 0.5 1.5 0.5q0.2 0 0.6 0q0.4-0.1 0.7-0.1l0.5 2.1q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-2 0-3.2-1.1q-1.1-1.1-1.1-3l0-9.8l-2.4 0l0-2.1l2.4 0l0-3.8l2.5 0z"/><g class="hl"><path d="M133,170 H587 C609.41,170 614,174.59 614,197 V197 C614,219.41 609.41,224 587,224 H133 C110.59,224 106,219.41 106,197 V197 C106,174.59 110.59,170 133,170 Z" fill="var(--illos-if-accent-fill,var(--_if-accent-auto-fill,var(--_if-accent-fill)))" stroke="none" stroke-width="2"/><g data-icon="Rocket01" transform="translate(128,180) scale(1.4167)" fill="none"><path d="M6.21875 11.618L3.31189 11.2378C2.71644 11.1606 2.31883 10.5841 2.58348 10.0458C3.42523 8.33365 5.6195 6.35437 9.73988 6.68079M6.21875 11.618C7.27445 9.85426 8.57175 8.00435 9.73988 6.68079M6.21875 11.618L11.882 17.2812M9.73988 6.68079C13.4105 2.58986 17.1745 1.728 19.5937 2.06685C20.5508 2.2009 21.2991 2.94917 21.4332 3.90626C21.772 6.32551 20.9101 10.0895 16.8192 13.7601M11.882 17.2812L12.2622 20.1881C12.3394 20.7836 12.9159 21.1812 13.4542 20.9165C15.1664 20.0748 17.1456 17.8805 16.8192 13.7601M11.882 17.2812C13.6457 16.2255 15.4956 14.9282 16.8192 13.7601" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M17.5 8C17.5 6.89543 16.6046 6 15.5 6C14.3954 6 13.5 6.89543 13.5 8C13.5 9.10457 14.3954 10 15.5 10C16.6046 10 17.5 9.10457 17.5 8Z" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M4 22L8 18M4 17L5.5 15.5" stroke="var(--illos-accent,var(--_accent))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/></g><path fill="var(--illos-accent,var(--_accent))" stroke="none" d="M187.1 207.5l-6.6 0l0-21.1l6.9 0q3.1 0 5.3 1.3q2.2 1.2 3.3 3.6q1.2 2.3 1.2 5.6q0 3.3-1.2 5.7q-1.1 2.4-3.4 3.6q-2.3 1.3-5.5 1.3zm-3.9-18.7l0 16.3l3.8 0q2.5 0 4.2-1q1.7-0.9 2.6-2.8q0.8-1.8 0.8-4.4q0-2.5-0.8-4.4q-0.9-1.8-2.5-2.7q-1.6-1-4.1-1zm24.6 19q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm17.6 15.1l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm10.8-19.2l2.6 0l0 21.1l-2.6 0zm13.5 21.4q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q2.1 0 3.8 1q1.6 1 2.5 2.9q0.9 1.8 0.9 4.3q0 2.4-0.9 4.3q-0.9 1.8-2.5 2.8q-1.7 1-3.8 1zm0-2.2q1.6 0 2.6-0.9q1-0.8 1.5-2.1q0.5-1.4 0.5-2.9q0-1.6-0.5-2.9q-0.5-1.4-1.5-2.2q-1-0.8-2.6-0.8q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9zm10.1 7.6l0.6-2.2l0.3 0.1q0.8 0.2 1.4 0.1q0.7-0.1 1.2-0.6q0.5-0.6 0.9-1.7l0.4-1.3l-6-15.9l2.8 0l3.3 9.4q0.6 1.4 0.9 2.9q0.2 0.6 0.3 1.2q0.2-0.6 0.4-1.2q0.3-1.5 0.9-2.9l3.4-9.4l2.7 0l-6.9 18.2q-0.5 1.2-1.2 2q-0.6 0.9-1.5 1.2q-0.9 0.4-2 0.4q-0.7 0-1.2-0.1q-0.5-0.1-0.7-0.2zm27.3 0.2l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm13.3 1.9l-2.6 0l0-15.8l2.5 0l0 2.4l0.2 0q0.4-1.2 1.5-1.9q1.2-0.8 2.6-0.8q0.3 0 0.7 0.1q0.3 0 0.6 0l0 2.5q-0.1 0-0.6 0q-0.5-0.1-1-0.1q-1.1 0-2 0.5q-0.9 0.5-1.4 1.3q-0.5 0.8-0.5 1.9zm14.4 0.3q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q2.1 0 3.8 1q1.6 1 2.5 2.9q0.9 1.8 0.9 4.3q0 2.4-0.9 4.3q-0.9 1.8-2.5 2.8q-1.7 1-3.8 1zm0-2.2q1.6 0 2.6-0.9q1-0.8 1.5-2.1q0.5-1.4 0.5-2.9q0-1.6-0.5-2.9q-0.5-1.4-1.5-2.2q-1-0.8-2.6-0.8q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9zm10.9 3l0-16.9l2.6 0l0 16.9q0 1.5-0.5 2.6q-0.5 1.1-1.6 1.7q-1 0.5-2.6 0.5l-0.5 0l0-2.3l0.5 0q1.1 0 1.6-0.7q0.5-0.6 0.5-1.8zm1.3-19.5q-0.7 0-1.2-0.5q-0.6-0.5-0.6-1.2q0-0.7 0.6-1.2q0.5-0.5 1.2-0.5q0.7 0 1.3 0.5q0.5 0.5 0.5 1.2q0 0.7-0.5 1.2q-0.6 0.5-1.3 0.5zm12.4 18.7q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm21.5 9.5q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q1.1 0 2.1 0.3q1.1 0.3 1.9 0.8q0.9 0.6 1.5 1.4q0.6 0.8 0.9 1.8l-2.5 0.7q-0.1-0.6-0.5-1.1q-0.3-0.5-0.8-0.9q-0.5-0.3-1.2-0.6q-0.6-0.1-1.4-0.1q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9q0.8 0 1.4-0.3q0.7-0.2 1.2-0.6q0.5-0.3 0.9-0.9q0.3-0.5 0.5-1.2l2.5 0.7q-0.4 1.1-1 1.9q-0.6 0.9-1.4 1.4q-0.9 0.6-1.9 0.9q-1.1 0.3-2.2 0.3zm13.1-16.1l3.3 0l0 2.1l-3.3 0l0 9.6q0 1.1 0.4 1.5q0.5 0.5 1.5 0.5q0.2 0 0.6 0q0.4-0.1 0.7-0.1l0.5 2.1q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-2 0-3.2-1.1q-1.1-1.1-1.1-3l0-9.8l-2.4 0l0-2.1l2.4 0l0-3.8l2.5 0z"/><path d="M517.96,177 H572.8 C588.74,177 592,180.26 592,196.2 V197.8 C592,213.74 588.74,217 572.8,217 H517.96 C502.02,217 498.76,213.74 498.76,197.8 V196.2 C498.76,180.26 502.02,177 517.96,177 Z" fill="var(--illos-if-surface,var(--_if-surface))" stroke="var(--illos-if-line,var(--_if-line))" stroke-width="2"/><path fill="var(--illos-if-muted,var(--_if-muted))" stroke="none" d="M527.2 206.5l-11.6 0l0-18.9l11.5 0l0 2.1l-9.1 0l0 6.2l8.5 0l0 2.1l-8.5 0l0 6.4l9.2 0zm6-8.5l0 8.5l-2.3 0l0-14.2l2.2 0l0 2.6q0.6-1.3 1.6-1.9q1.1-0.9 2.8-0.9q1.4 0 2.5 0.6q1 0.6 1.7 1.8q0.6 1.2 0.6 3l0 9l-2.3 0l0-8.8q0-1.7-0.9-2.6q-0.8-0.9-2.3-0.9q-1 0-1.9 0.4q-0.8 0.5-1.2 1.3q-0.5 0.9-0.5 2.1zm15.8-5.7l2.9 0l0 2l-2.9 0l0 8.5q0 1 0.4 1.4q0.3 0.4 1.2 0.4q0.3 0 0.6 0q0.3-0.1 0.6-0.1l0.5 1.9q-0.4 0.2-0.8 0.2q-0.5 0.1-0.9 0.1q-1.9 0-2.9-1q-1-1-1-2.7l0-8.7l-2.1 0l0-2l2.1 0l0-3.4l2.3 0zm11.5 14.5q-2.1 0-3.6-0.9q-1.5-0.9-2.3-2.6q-0.8-1.6-0.8-3.8q0-2.2 0.8-3.8q0.8-1.7 2.2-2.6q1.5-1 3.4-1q1.1 0 2.2 0.4q1.1 0.4 2 1.2q0.9 0.8 1.5 2.2q0.5 1.4 0.5 3.3l0 1l-10.3 0q0.1 1.3 0.6 2.3q0.5 1.1 1.5 1.7q1 0.6 2.3 0.6q0.8 0 1.5-0.3q0.7-0.2 1.2-0.7q0.5-0.5 0.8-1.2l2.2 0.6q-0.4 1.1-1.2 1.9q-0.7 0.8-1.9 1.2q-1.2 0.5-2.6 0.5zm-4.4-8.6l8 0q-0.1-0.9-0.4-1.7q-0.5-1.1-1.3-1.7q-0.9-0.6-2.2-0.6q-1.3 0-2.2 0.6q-0.9 0.6-1.4 1.6q-0.4 0.9-0.5 1.8zm15.9 8.3l-2.3 0l0-14.2l2.2 0l0 2.2l0.2 0q0.4-1.1 1.4-1.7q1-0.7 2.2-0.7q0.3 0 0.7 0q0.3 0 0.5 0l0 2.3q-0.1 0-0.5 0q-0.4-0.1-0.9-0.1q-1 0-1.8 0.4q-0.8 0.5-1.3 1.2q-0.4 0.7-0.4 1.7z"/></g><g class="settings"><g data-icon="Settings01" transform="translate(128,240) scale(1.4167)" fill="none"><path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-width="1.412"/><path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-width="1.412"/></g><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M189.1 267.8q-2.7 0-4.8-1.3q-2.1-1.3-3.4-3.8q-1.2-2.4-1.2-5.7q0-3.4 1.2-5.8q1.3-2.4 3.4-3.8q2.1-1.3 4.8-1.3q2.7 0 4.8 1.3q2.1 1.4 3.3 3.8q1.2 2.4 1.2 5.8q0 3.3-1.2 5.7q-1.2 2.5-3.3 3.8q-2.1 1.3-4.8 1.3zm0-2.5q1.9 0 3.4-1q1.5-0.9 2.4-2.8q0.9-1.8 0.9-4.5q0-2.8-0.9-4.6q-0.9-1.9-2.4-2.8q-1.5-1-3.4-1q-1.9 0-3.4 1q-1.6 0.9-2.4 2.8q-1 1.9-1 4.6q0 2.7 1 4.5q0.8 1.9 2.4 2.8q1.5 1 3.4 1zm15.9 8.1l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm17.4 2.2q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm17.6-0.3l0 9.5l-2.6 0l0-15.8l2.5 0l0 2.9q0.7-1.5 1.7-2.2q1.3-0.9 3.1-0.9q1.6 0 2.8 0.6q1.3 0.7 1.9 2q0.7 1.3 0.7 3.3l0 10.1l-2.6 0l0-9.8q0-1.9-0.9-2.9q-1-1-2.6-1q-1.2 0-2.1 0.5q-0.9 0.5-1.4 1.4q-0.5 1-0.5 2.3zm28.1 9.8q-1.6 0-2.9-0.4q-1.2-0.5-2.1-1.4q-0.8-1-1.1-2.3l2.5-0.6q0.3 1.3 1.2 1.9q1 0.6 2.4 0.6q1.6 0 2.6-0.7q1-0.7 1-1.7q0-0.8-0.6-1.4q-0.5-0.5-1.7-0.8l-2.6-0.6q-2.2-0.5-3.2-1.6q-1.1-1-1.1-2.7q0-1.4 0.8-2.4q0.7-1.1 2.1-1.6q1.3-0.6 3-0.6q1.6 0 2.7 0.5q1.2 0.4 1.9 1.3q0.7 0.9 1.1 2l-2.3 0.6q-0.4-0.9-1.1-1.6q-0.8-0.7-2.3-0.7q-1.4 0-2.4 0.7q-0.9 0.6-0.9 1.6q0 0.9 0.6 1.4q0.7 0.6 2.1 0.9l2.3 0.6q2.2 0.5 3.2 1.5q1.1 1.1 1.1 2.7q0 1.4-0.8 2.5q-0.8 1.1-2.2 1.7q-1.4 0.6-3.3 0.6zm16.6 0q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm18-6.6l3.3 0l0 2.1l-3.3 0l0 9.6q0 1.1 0.4 1.5q0.5 0.5 1.5 0.5q0.2 0 0.6 0q0.4-0.1 0.7-0.1l0.5 2.1q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-2 0-3.2-1.1q-1.1-1.1-1.1-3l0-9.8l-2.4 0l0-2.1l2.4 0l0-3.8l2.5 0zm9.5 0l3.3 0l0 2.1l-3.3 0l0 9.6q0 1.1 0.4 1.5q0.5 0.5 1.5 0.5q0.2 0 0.6 0q0.4-0.1 0.7-0.1l0.5 2.1q-0.4 0.2-0.9 0.2q-0.5 0.1-1 0.1q-2 0-3.2-1.1q-1.1-1.1-1.1-3l0-9.8l-2.4 0l0-2.1l2.4 0l0-3.8l2.5 0zm9.1 15.8l-2.6 0l0-15.8l2.6 0l0 15.8zm-1.3-18.4q-0.7 0-1.2-0.5q-0.5-0.5-0.5-1.2q0-0.7 0.5-1.2q0.5-0.5 1.2-0.5q0.8 0 1.3 0.5q0.5 0.5 0.5 1.2q0 0.7-0.5 1.2q-0.5 0.5-1.3 0.5zm8.3 8.9l0 9.5l-2.6 0l0-15.8l2.5 0l0 2.9q0.7-1.5 1.7-2.2q1.3-0.9 3.1-0.9q1.6 0 2.8 0.6q1.3 0.7 1.9 2q0.7 1.3 0.7 3.3l0 10.1l-2.6 0l0-9.8q0-1.9-0.9-2.9q-1-1-2.6-1q-1.2 0-2.1 0.5q-0.9 0.5-1.4 1.4q-0.5 1-0.5 2.3zm21.1 15.8q-1.8 0-3.1-0.5q-1.3-0.4-2.1-1.2q-0.9-0.7-1.4-1.6l2.1-1.3q0.3 0.5 0.9 1q0.5 0.6 1.3 0.9q0.9 0.4 2.3 0.4q1.8 0 3.1-0.9q1.2-0.9 1.2-2.8l0-3.2l-0.2 0q-0.3 0.5-0.8 1.1q-0.5 0.6-1.4 1.1q-0.9 0.4-2.4 0.4q-1.9 0-3.5-0.9q-1.5-0.9-2.3-2.6q-0.9-1.7-0.9-4.2q0-2.4 0.8-4.2q0.9-1.8 2.4-2.8q1.5-1 3.5-1q1.5 0 2.5 0.5q0.9 0.5 1.4 1.1q0.5 0.7 0.7 1.1l0.3 0l0-2.5l2.4 0l0 16.2q0 2-0.9 3.3q-0.9 1.3-2.5 1.9q-1.5 0.7-3.4 0.7zm-0.1-8.8q1.4 0 2.4-0.7q1-0.6 1.5-1.9q0.5-1.2 0.5-2.9q0-1.7-0.5-3q-0.5-1.3-1.5-2q-1-0.7-2.4-0.7q-1.5 0-2.5 0.7q-1 0.8-1.5 2.1q-0.5 1.3-0.5 2.9q0 1.6 0.5 2.8q0.5 1.3 1.5 2q1 0.7 2.5 0.7zm16.8 2.8q-1.6 0-2.9-0.4q-1.2-0.5-2.1-1.4q-0.8-1-1.1-2.3l2.5-0.6q0.3 1.3 1.2 1.9q1 0.6 2.4 0.6q1.6 0 2.6-0.7q1-0.7 1-1.7q0-0.8-0.6-1.4q-0.5-0.5-1.7-0.8l-2.6-0.6q-2.2-0.5-3.2-1.6q-1.1-1-1.1-2.7q0-1.4 0.8-2.4q0.7-1.1 2.1-1.6q1.3-0.6 3-0.6q1.6 0 2.7 0.5q1.2 0.4 1.9 1.3q0.7 0.9 1.1 2l-2.3 0.6q-0.4-0.9-1.1-1.6q-0.8-0.7-2.3-0.7q-1.4 0-2.4 0.7q-0.9 0.6-0.9 1.6q0 0.9 0.6 1.4q0.7 0.6 2.1 0.9l2.3 0.6q2.2 0.5 3.2 1.5q1.1 1.1 1.1 2.7q0 1.4-0.8 2.5q-0.8 1.1-2.2 1.7q-1.4 0.6-3.3 0.6z"/></g><g class="rest"><g data-icon="GitBranch" transform="translate(128,240) scale(1.4167)" fill="none"><path d="M7 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13V10M19 10C19.7002 10 21.0085 11.9943 21.5 12.5M19 10C18.2998 10 16.9915 11.9943 16.5 12.5" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M5 7L5 17" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><circle cx="5" cy="5" r="2" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-width="1.412"/><circle cx="19" cy="5" r="2" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-width="1.412"/><circle cx="5" cy="19" r="2" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-width="1.412"/></g><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M187.1 267.5l-6.6 0l0-21.1l6.9 0q3.1 0 5.3 1.3q2.2 1.2 3.3 3.6q1.2 2.3 1.2 5.6q0 3.3-1.2 5.7q-1.1 2.4-3.4 3.6q-2.3 1.3-5.5 1.3zm-3.9-18.7l0 16.3l3.8 0q2.5 0 4.2-1q1.7-0.9 2.6-2.8q0.8-1.8 0.8-4.4q0-2.5-0.8-4.4q-0.9-1.8-2.5-2.7q-1.6-1-4.1-1zm24.6 19q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm17.6 15.1l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm10.8-19.2l2.6 0l0 21.1l-2.6 0zm13.5 21.4q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q2.1 0 3.8 1q1.6 1 2.5 2.9q0.9 1.8 0.9 4.3q0 2.4-0.9 4.3q-0.9 1.8-2.5 2.8q-1.7 1-3.8 1zm0-2.2q1.6 0 2.6-0.9q1-0.8 1.5-2.1q0.5-1.4 0.5-2.9q0-1.6-0.5-2.9q-0.5-1.4-1.5-2.2q-1-0.8-2.6-0.8q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9zm10.1 7.6l0.6-2.2l0.3 0.1q0.8 0.2 1.4 0.1q0.7-0.1 1.2-0.6q0.5-0.6 0.9-1.7l0.4-1.3l-6-15.9l2.8 0l3.3 9.4q0.6 1.4 0.9 2.9q0.2 0.6 0.3 1.2q0.2-0.6 0.4-1.2q0.3-1.5 0.9-2.9l3.4-9.4l2.7 0l-6.9 18.2q-0.5 1.2-1.2 2q-0.6 0.9-1.5 1.2q-0.9 0.4-2 0.4q-0.7 0-1.2-0.1q-0.5-0.1-0.7-0.2zm27.3 0.2l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm13.3 1.9l-2.6 0l0-15.8l2.5 0l0 2.4l0.2 0q0.4-1.2 1.5-1.9q1.2-0.8 2.6-0.8q0.3 0 0.7 0.1q0.3 0 0.6 0l0 2.5q-0.1 0-0.6 0q-0.5-0.1-1-0.1q-1.1 0-2 0.5q-0.9 0.5-1.4 1.3q-0.5 0.8-0.5 1.9zm14.6 0.3q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm21.7 9.2l-2.7 0l-6-15.8l2.8 0l3.3 9.4q0.6 1.4 0.9 2.9q0.2 0.6 0.4 1.2q0.1-0.6 0.3-1.2q0.4-1.5 0.9-2.9l3.3-9.4l2.8 0zm11.6 0l-2.6 0l0-15.8l2.6 0l0 15.8zm-1.3-18.4q-0.7 0-1.2-0.5q-0.5-0.5-0.5-1.2q0-0.7 0.5-1.2q0.5-0.5 1.2-0.5q0.8 0 1.3 0.5q0.5 0.5 0.5 1.2q0 0.7-0.5 1.2q-0.5 0.5-1.3 0.5zm12.4 18.7q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm20.6 9.2l-2.5 0l-4.8-15.8l2.7 0l1.9 6.9q0.4 1.4 0.9 3.2q0.3 1.3 0.7 3q0.3-1.6 0.6-2.9q0.4-1.8 0.8-3.3l1.9-6.9l2.8 0l1.8 6.9q0.4 1.4 0.9 3.2q0.3 1.4 0.6 2.9q0.3-1.5 0.7-2.8q0.4-1.8 0.8-3.3l1.9-6.9l2.7 0l-4.8 15.8l-2.5 0l-2-7.2q-0.4-1.1-0.7-2.2q-0.3-1.1-0.5-2.3q-0.2-0.6-0.3-1.2q-0.2 0.6-0.3 1.2q-0.3 1.2-0.6 2.3q-0.3 1.2-0.6 2.2z"/><g data-icon="Package01" transform="translate(128,300) scale(1.4167)" fill="none"><path d="M2.5 7.5V13.5C2.5 17.2712 2.5 19.1569 3.67157 20.3284C4.84315 21.5 6.72876 21.5 10.5 21.5H13.5C17.2712 21.5 19.1569 21.5 20.3284 20.3284C21.5 19.1569 21.5 17.2712 21.5 13.5V7.5" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M3.86909 5.31461L2.5 7.5H21.5L20.2478 5.41303C19.3941 3.99021 18.9673 3.2788 18.2795 2.8894C17.5918 2.5 16.7621 2.5 15.1029 2.5H8.95371C7.32998 2.5 6.51812 2.5 5.84013 2.8753C5.16215 3.2506 4.73113 3.93861 3.86909 5.31461Z" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M12 7.5V2.5" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/><path d="M10 10.5H14" stroke="var(--illos-if-muted,var(--_if-muted))" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.412"/></g><path fill="var(--illos-ink,var(--_ink))" stroke="none" d="M187.1 327.5l-6.6 0l0-21.1l6.9 0q3.1 0 5.3 1.3q2.2 1.2 3.3 3.6q1.2 2.3 1.2 5.6q0 3.3-1.2 5.7q-1.1 2.4-3.4 3.6q-2.3 1.3-5.5 1.3zm-3.9-18.7l0 16.3l3.8 0q2.5 0 4.2-1q1.7-0.9 2.6-2.8q0.8-1.8 0.8-4.4q0-2.5-0.8-4.4q-0.9-1.8-2.5-2.7q-1.6-1-4.1-1zm24.6 19q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm17.6 15.1l-2.6 0l0-21.7l2.5 0l0 2.5l0.3 0q0.3-0.4 0.7-1.1q0.5-0.6 1.4-1.1q0.9-0.5 2.5-0.5q2 0 3.5 1q1.5 1 2.3 2.8q0.9 1.8 0.9 4.3q0 2.5-0.9 4.4q-0.8 1.8-2.3 2.8q-1.5 1-3.5 1q-1.5 0-2.4-0.5q-1-0.5-1.5-1.2q-0.4-0.6-0.7-1l-0.2 0l0 8.3zm4.4-7.8q1.5 0 2.5-0.8q1-0.8 1.5-2.2q0.5-1.3 0.5-3q0-1.6-0.5-3q-0.5-1.3-1.5-2.1q-1-0.7-2.5-0.7q-1.5 0-2.4 0.7q-1 0.7-1.5 2q-0.5 1.3-0.5 3.1q0 1.8 0.5 3.1q0.5 1.3 1.5 2.1q1 0.8 2.4 0.8zm17.5 2.2q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm17.6-0.3l0 9.5l-2.6 0l0-15.8l2.5 0l0 2.9q0.7-1.5 1.7-2.2q1.3-0.9 3.1-0.9q1.6 0 2.8 0.6q1.3 0.7 1.9 2q0.7 1.3 0.7 3.3l0 10.1l-2.6 0l0-9.8q0-1.9-0.9-2.9q-1-1-2.6-1q-1.2 0-2.1 0.5q-0.9 0.5-1.4 1.4q-0.5 1-0.5 2.3zm20.5 9.8q-2 0-3.5-1q-1.5-1-2.4-2.8q-0.8-1.9-0.8-4.4q0-2.5 0.8-4.3q0.9-1.8 2.4-2.8q1.5-1 3.5-1q1.5 0 2.4 0.5q0.9 0.5 1.4 1.1q0.5 0.7 0.8 1.1l0.2 0l0-7.8l2.5 0l0 21.1l-2.4 0l0-2.4l-0.3 0q-0.3 0.4-0.8 1q-0.5 0.7-1.4 1.2q-0.9 0.5-2.4 0.5zm0.4-2.2q1.4 0 2.4-0.8q1-0.8 1.5-2.1q0.5-1.3 0.5-3.1q0-1.8-0.5-3.1q-0.5-1.3-1.5-2q-1-0.7-2.4-0.7q-1.5 0-2.5 0.7q-1 0.8-1.5 2.1q-0.5 1.4-0.5 3q0 1.7 0.5 3q0.5 1.4 1.5 2.2q1 0.8 2.5 0.8zm18.1 2.2q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm17.6-0.3l0 9.5l-2.6 0l0-15.8l2.5 0l0 2.9q0.7-1.5 1.7-2.2q1.3-0.9 3.1-0.9q1.6 0 2.8 0.6q1.3 0.7 1.9 2q0.7 1.3 0.7 3.3l0 10.1l-2.6 0l0-9.8q0-1.9-0.9-2.9q-1-1-2.6-1q-1.2 0-2.1 0.5q-0.9 0.5-1.4 1.4q-0.5 1-0.5 2.3zm21 9.8q-2.2 0-3.8-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.5 0.9-4.3q0.9-1.9 2.5-2.9q1.6-1 3.8-1q1.1 0 2.1 0.3q1.1 0.3 1.9 0.8q0.9 0.6 1.5 1.4q0.6 0.8 0.9 1.8l-2.5 0.7q-0.1-0.6-0.5-1.1q-0.3-0.5-0.8-0.9q-0.5-0.3-1.2-0.6q-0.6-0.1-1.4-0.1q-1.6 0-2.6 0.8q-1 0.8-1.5 2.2q-0.5 1.3-0.5 2.9q0 1.5 0.5 2.9q0.5 1.3 1.5 2.1q1 0.9 2.6 0.9q0.8 0 1.4-0.3q0.7-0.2 1.2-0.6q0.5-0.3 0.9-0.9q0.3-0.5 0.5-1.2l2.5 0.7q-0.4 1.1-1 1.9q-0.6 0.9-1.4 1.4q-0.9 0.6-1.9 0.9q-1.1 0.3-2.2 0.3zm12.7-0.3l-2.6 0l0-15.8l2.6 0l0 15.8zm-1.3-18.4q-0.7 0-1.2-0.5q-0.5-0.5-0.5-1.2q0-0.7 0.5-1.2q0.5-0.5 1.2-0.5q0.8 0 1.3 0.5q0.5 0.5 0.5 1.2q0 0.7-0.5 1.2q-0.5 0.5-1.3 0.5zm12.4 18.7q-2.3 0-4-1q-1.6-1-2.5-2.8q-0.9-1.9-0.9-4.3q0-2.4 0.9-4.3q0.8-1.8 2.4-2.9q1.6-1 3.8-1q1.3 0 2.5 0.4q1.2 0.4 2.2 1.3q1 1 1.6 2.5q0.6 1.5 0.6 3.7l0 1l-11.5 0q0.1 1.6 0.7 2.7q0.6 1.2 1.7 1.8q1.1 0.7 2.5 0.7q0.9 0 1.7-0.3q0.8-0.3 1.3-0.8q0.6-0.6 0.9-1.4l2.4 0.7q-0.3 1.2-1.2 2.1q-0.9 0.9-2.2 1.4q-1.3 0.5-2.9 0.5zm-4.8-9.5l8.8 0q-0.1-1.1-0.5-2q-0.4-1.2-1.4-1.9q-1-0.7-2.4-0.7q-1.4 0-2.5 0.7q-1 0.7-1.5 1.9q-0.5 0.9-0.5 2zm20.4 9.5q-1.6 0-2.9-0.4q-1.2-0.5-2.1-1.4q-0.8-1-1.1-2.3l2.5-0.6q0.3 1.3 1.2 1.9q1 0.6 2.4 0.6q1.6 0 2.6-0.7q1-0.7 1-1.7q0-0.8-0.6-1.4q-0.5-0.5-1.7-0.8l-2.6-0.6q-2.2-0.5-3.2-1.6q-1.1-1-1.1-2.7q0-1.4 0.8-2.4q0.7-1.1 2.1-1.6q1.3-0.6 3-0.6q1.6 0 2.7 0.5q1.2 0.4 1.9 1.3q0.7 0.9 1.1 2l-2.3 0.6q-0.4-0.9-1.1-1.6q-0.8-0.7-2.3-0.7q-1.4 0-2.4 0.7q-0.9 0.6-0.9 1.6q0 0.9 0.6 1.4q0.7 0.6 2.1 0.9l2.3 0.6q2.2 0.5 3.2 1.5q1.1 1.1 1.1 2.7q0 1.4-0.8 2.5q-0.8 1.1-2.2 1.7q-1.4 0.6-3.3 0.6z"/></g>
</svg>`;
