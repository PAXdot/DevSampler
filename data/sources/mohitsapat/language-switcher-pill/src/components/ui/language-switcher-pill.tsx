"use client";

/**
 * LanguageSwitcherPill
 *
 * A segmented, pill-shaped locale picker with a spring-animated indicator.
 * Built as a WAI-ARIA radio group: arrow keys move between locales (mirrored
 * in right-to-left layouts), Home/End jump to the ends, and only the selected
 * pill is in the tab order.
 *
 * Works controlled (`locale` + `onLocaleChange`) or uncontrolled
 * (`defaultLocale`). Themed entirely with shadcn/ui CSS variables, so it
 * follows light and dark mode out of the box. Respects `prefers-reduced-motion`.
 *
 * Dependencies: `motion` (npm), `cn` from `@/lib/utils` (shadcn).
 *
 * @example
 * <LanguageSwitcherPill
 *   locales={[{ code: "en", label: "EN" }, { code: "fr", label: "FR" }]}
 *   defaultLocale="en"
 *   onLocaleChange={(code) => i18n.changeLanguage(code)}
 * />
 */

import * as React from "react";
import { LayoutGroup, MotionConfig, motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface Locale {
  /** BCP 47 code, e.g. "en", "fr-CA", "ar". */
  code: string;
  /** Text shown in the pill. Defaults to `code`. */
  label?: string;
  /** Flag emoji shown when `showFlags` is set. Derived from the code if omitted. */
  flag?: string;
  /** Force the label's text direction. Derived from the code if omitted. */
  rtl?: boolean;
}

/** Per-part class overrides, merged after the defaults. */
export interface LanguageSwitcherPillClassNames {
  root?: string;
  item?: string;
  activeItem?: string;
  indicator?: string;
  flag?: string;
}

export interface LanguageSwitcherPillProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "defaultValue" | "onChange"> {
  /** Locales to show, in order. */
  locales: Locale[];
  /** Selected locale code (controlled). */
  locale?: string;
  /** Initially selected locale code (uncontrolled). Defaults to the first locale. */
  defaultLocale?: string;
  /** Called with the new code whenever the selection changes. */
  onLocaleChange?: (code: string) => void;
  /** Muted segmented track, or a bordered one. @default "default" */
  variant?: "default" | "outline";
  /** @default "default" */
  size?: "sm" | "default" | "lg";
  /** Show a flag emoji before each label. @default false */
  showFlags?: boolean;
  /** Disable every pill. @default false */
  disabled?: boolean;
  /** Accessible name for the radio group. @default "Select language" */
  "aria-label"?: string;
  classNames?: LanguageSwitcherPillClassNames;
}

const RTL_LANGUAGES = new Set(["ar", "he", "fa", "ur", "ps", "sd", "yi"]);
const RTL_SCRIPTS = new Set(["arab", "hebr", "thaa", "nkoo", "adlm", "syrc"]);

/** An explicit script subtag decides ("pa-Arab" is RTL); otherwise the language does. */
function isRtl(code: string): boolean {
  const [lang, ...rest] = code.toLowerCase().split("-");
  const script = rest.find((subtag) => /^[a-z]{4}$/.test(subtag));
  if (script) return RTL_SCRIPTS.has(script);
  return RTL_LANGUAGES.has(lang);
}

/** Flag of the country a language is primarily spoken in, not the matching ISO 3166 code. */
const LANGUAGE_FLAGS: Record<string, string> = {
  en: "🇺🇸", fr: "🇫🇷", es: "🇪🇸", de: "🇩🇪", it: "🇮🇹", pt: "🇵🇹", nl: "🇳🇱",
  ja: "🇯🇵", ko: "🇰🇷", zh: "🇨🇳", hi: "🇮🇳", ar: "🇸🇦", he: "🇮🇱", ru: "🇷🇺",
  tr: "🇹🇷", pl: "🇵🇱", sv: "🇸🇪", uk: "🇺🇦", vi: "🇻🇳", th: "🇹🇭", id: "🇮🇩",
};

/** Uses the region subtag when present ("en-GB" → 🇬🇧), else the language map, else 🌐. */
function getFlag(code: string): string {
  const region = code.split("-").find((subtag, i) => i > 0 && /^[a-z]{2}$/i.test(subtag));
  if (region) {
    return String.fromCodePoint(
      ...[...region.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65),
    );
  }
  return LANGUAGE_FLAGS[code.split("-")[0].toLowerCase()] ?? "🌐";
}

/** Controlled when `value` is defined, uncontrolled otherwise. */
function useControllableState<T>(
  value: T | undefined,
  defaultValue: T,
  onChange?: (next: T) => void,
): [T, (next: T) => void] {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const onChangeRef = React.useRef(onChange);
  React.useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const setValue = React.useCallback(
    (next: T) => {
      if (!isControlled) setInternal(next);
      onChangeRef.current?.(next);
    },
    [isControlled],
  );

  return [isControlled ? value : internal, setValue];
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const TRACK_VARIANTS = {
  default: "bg-muted",
  outline: "border border-input bg-background shadow-sm",
} as const;

const INDICATOR_VARIANTS = {
  default: "bg-background shadow-sm ring-1 ring-border",
  outline: "bg-accent",
} as const;

const TRACK_SIZES = {
  sm: "gap-0.5 p-0.5",
  default: "gap-0.5 p-1",
  lg: "gap-1 p-1",
} as const;

const ITEM_SIZES = {
  sm: "h-6 gap-1 px-2.5 text-xs",
  default: "h-7 gap-1.5 px-3 text-sm",
  lg: "h-9 gap-2 px-4 text-sm",
} as const;

export const LanguageSwitcherPill = React.forwardRef<HTMLDivElement, LanguageSwitcherPillProps>(
  function LanguageSwitcherPill(
    {
      locales,
      locale: localeProp,
      defaultLocale,
      onLocaleChange,
      variant = "default",
      size = "default",
      showFlags = false,
      disabled = false,
      classNames,
      className,
      dir: dirProp,
      "aria-label": ariaLabel = "Select language",
      ...rest
    },
    forwardedRef,
  ) {
    const [locale, setLocale] = useControllableState(
      localeProp,
      defaultLocale ?? locales[0]?.code ?? "",
      onLocaleChange,
    );

    const rootRef = React.useRef<HTMLDivElement>(null);
    const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
    // Scopes the shared-layout indicator to this instance, so two switchers on
    // one page never animate into each other.
    const layoutId = React.useId();

    React.useImperativeHandle(forwardedRef, () => rootRef.current as HTMLDivElement);

    const selected = locales.some((item) => item.code === locale)
      ? locale
      : (locales[0]?.code ?? "");

    // Arrow keys follow the visual order, so read the inherited direction.
    const [inheritedDir, setInheritedDir] = React.useState<"ltr" | "rtl">("ltr");
    useIsomorphicLayoutEffect(() => {
      if (dirProp || !rootRef.current) return;
      const computed = window.getComputedStyle(rootRef.current).direction;
      if (computed === "rtl" || computed === "ltr") setInheritedDir(computed);
    }, [dirProp]);
    const direction = dirProp === "rtl" || dirProp === "ltr" ? dirProp : inheritedDir;

    const select = (code: string) => {
      if (!disabled) setLocale(code);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const count = locales.length;
      const forward = direction === "rtl" ? "ArrowLeft" : "ArrowRight";
      const backward = direction === "rtl" ? "ArrowRight" : "ArrowLeft";

      let next: number;
      if (event.key === "Home") next = 0;
      else if (event.key === "End") next = count - 1;
      else if (event.key === forward || event.key === "ArrowDown") next = (index + 1) % count;
      else if (event.key === backward || event.key === "ArrowUp") next = (index - 1 + count) % count;
      else return;

      event.preventDefault();
      const target = locales[next];
      if (!target) return;
      select(target.code);
      buttonRefs.current[next]?.focus();
    };

    return (
      <MotionConfig reducedMotion="user">
        <LayoutGroup id={layoutId}>
          <div
            ref={rootRef}
            dir={dirProp}
            role="radiogroup"
            aria-label={ariaLabel}
            aria-disabled={disabled || undefined}
            data-disabled={disabled ? "" : undefined}
            className={cn(
              "relative inline-flex max-w-full flex-row items-center overflow-x-auto rounded-full",
              TRACK_VARIANTS[variant],
              TRACK_SIZES[size],
              disabled && "opacity-50",
              classNames?.root,
              className,
            )}
            {...rest}
          >
            {locales.map((item, index) => {
              const isActive = item.code === selected;
              const rtl = item.rtl ?? isRtl(item.code);

              return (
                <button
                  key={item.code}
                  ref={(element) => {
                    buttonRefs.current[index] = element;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  data-state={isActive ? "checked" : "unchecked"}
                  tabIndex={isActive ? 0 : -1}
                  disabled={disabled}
                  lang={item.code}
                  dir={rtl ? "rtl" : "ltr"}
                  onClick={() => select(item.code)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={cn(
                    "relative inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full font-medium outline-none transition-colors duration-200",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "disabled:pointer-events-none",
                    ITEM_SIZES[size],
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                    classNames?.item,
                    isActive && classNames?.activeItem,
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="indicator"
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute inset-0 rounded-full",
                        INDICATOR_VARIANTS[variant],
                        classNames?.indicator,
                      )}
                      transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                    />
                  )}
                  {showFlags && (
                    <span aria-hidden="true" className={cn("relative leading-none", classNames?.flag)}>
                      {item.flag ?? getFlag(item.code)}
                    </span>
                  )}
                  <span className="relative">{item.label ?? item.code}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </MotionConfig>
    );
  },
);

export default LanguageSwitcherPill;
