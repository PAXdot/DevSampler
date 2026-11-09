"use client";

/**
 * TranslationWidget
 *
 * A two-pane translator card: language pickers, an animated swap button,
 * an editable source pane with character count and clear, and a target pane
 * with a loading skeleton and copy-to-clipboard.
 *
 * The widget does not call any translation API. Wire one up yourself: listen
 * to `onSourceChange` / `onTargetLocaleChange`, set `loading` while the request
 * runs, then pass the result as `targetText`.
 *
 * Every value (texts and both locales) works controlled or uncontrolled.
 * Panes set `lang` and `dir`, so Arabic, Hebrew and other RTL text renders
 * right to left. Themed with shadcn/ui CSS variables (light and dark), and
 * animations respect `prefers-reduced-motion`.
 *
 * Dependencies: `motion`, `lucide-react` (npm); `cn` from `@/lib/utils` (shadcn).
 *
 * @example
 * <TranslationWidget
 *   locales={[{ code: "en" }, { code: "fr" }, { code: "ar" }]}
 *   defaultSourceLocale="en"
 *   defaultTargetLocale="fr"
 *   onSourceChange={translate}
 *   targetText={translation}
 *   loading={isTranslating}
 * />
 */

import * as React from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { ArrowLeftRight, Check, ChevronDown, Copy, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Locale {
  /** BCP 47 code, e.g. "en", "pt-BR", "ar". */
  code: string;
  /** Display name. Resolved from the code if omitted ("fr" → "French"). */
  label?: string;
}

/** Per-part class overrides, merged after the defaults. */
export interface TranslationWidgetClassNames {
  root?: string;
  header?: string;
  pane?: string;
  textarea?: string;
  footer?: string;
  swap?: string;
}

export interface TranslationWidgetProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "defaultValue" | "onChange"> {
  /** Locales offered in both pickers. Omit to show the current locales as static labels. */
  locales?: Locale[];

  /** Source locale code (controlled). */
  sourceLocale?: string;
  /** Initial source locale (uncontrolled). @default first locale, or "en" */
  defaultSourceLocale?: string;
  onSourceLocaleChange?: (code: string) => void;

  /** Target locale code (controlled). */
  targetLocale?: string;
  /** Initial target locale (uncontrolled). @default second locale */
  defaultTargetLocale?: string;
  onTargetLocaleChange?: (code: string) => void;

  /** Source text (controlled). */
  sourceText?: string;
  /** Initial source text (uncontrolled). */
  defaultSourceText?: string;
  /** Called on every edit of the source pane. The pane is read-only without it. */
  onSourceChange?: (text: string) => void;

  /** Target text (controlled). Read-only unless `onTargetChange` is also set. */
  targetText?: string;
  /** Initial target text (uncontrolled). */
  defaultTargetText?: string;
  onTargetChange?: (text: string) => void;

  /** @default "Enter text" */
  sourcePlaceholder?: string;
  /** @default "Translation" */
  targetPlaceholder?: string;
  /** Called after the swap button exchanges locales and texts. */
  onSwap?: () => void;
  /** Called with the target text after it is copied. */
  onTargetCopy?: (text: string) => void;

  /** Character limit for the source pane; the counter shows `n / max`. */
  maxLength?: number;
  /** Show a skeleton in the target pane while a translation is in flight. @default false */
  loading?: boolean;
  /** @default true */
  showCount?: boolean;
  /** @default true */
  showCopy?: boolean;
  /** @default true */
  showClear?: boolean;

  classNames?: TranslationWidgetClassNames;
}

const RTL_LANGUAGES = new Set(["ar", "he", "fa", "ur", "ps", "sd", "yi"]);

function isRtl(code: string): boolean {
  return RTL_LANGUAGES.has(code.split("-")[0].toLowerCase());
}

/** English name for a code via `Intl.DisplayNames`, falling back to the code itself. */
function languageName(code: string): string {
  try {
    return new Intl.DisplayNames(["en"], { type: "language" }).of(code) ?? code;
  } catch {
    return code;
  }
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

const iconButtonClass = cn(
  "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors",
  "hover:bg-accent hover:text-accent-foreground",
  "focus-visible:ring-2 focus-visible:ring-ring",
  "disabled:pointer-events-none disabled:opacity-50",
);

const SKELETON_WIDTHS = ["w-11/12", "w-4/5", "w-3/5"];

export const TranslationWidget = React.forwardRef<HTMLDivElement, TranslationWidgetProps>(
  function TranslationWidget(
    {
      locales,
      sourceLocale,
      defaultSourceLocale,
      onSourceLocaleChange,
      targetLocale,
      defaultTargetLocale,
      onTargetLocaleChange,
      sourceText,
      defaultSourceText,
      onSourceChange,
      targetText,
      defaultTargetText,
      onTargetChange,
      sourcePlaceholder = "Enter text",
      targetPlaceholder = "Translation",
      onSwap,
      onTargetCopy,
      maxLength,
      loading = false,
      showCount = true,
      showCopy = true,
      showClear = true,
      classNames,
      className,
      ...rest
    },
    ref,
  ) {
    const [source, setSource] = useControllableState(sourceText, defaultSourceText ?? "", onSourceChange);
    const [target, setTarget] = useControllableState(targetText, defaultTargetText ?? "", onTargetChange);
    const [from, setFrom] = useControllableState(
      sourceLocale,
      defaultSourceLocale ?? locales?.[0]?.code ?? "en",
      onSourceLocaleChange,
    );
    const [to, setTo] = useControllableState(
      targetLocale,
      defaultTargetLocale ?? locales?.[1]?.code ?? locales?.[0]?.code ?? "en",
      onTargetLocaleChange,
    );

    // Each swap adds half a turn, so the icon always spins the same way.
    const [swapCount, setSwapCount] = React.useState(0);
    const [copied, setCopied] = React.useState(false);
    const copiedTimer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const sourceRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => () => clearTimeout(copiedTimer.current), []);

    const id = React.useId();
    const countId = `${id}-count`;

    const sourceReadOnly = !onSourceChange;
    const targetReadOnly = targetText !== undefined && !onTargetChange;
    // Swap is all-or-nothing: exchanging only locales or only texts would leave
    // a pane showing text in the wrong language.
    const canSwap =
      (sourceText === undefined || !!onSourceChange) &&
      (targetText === undefined || !!onTargetChange) &&
      (sourceLocale === undefined || !!onSourceLocaleChange) &&
      (targetLocale === undefined || !!onTargetLocaleChange);

    const labelFor = (code: string) =>
      locales?.find((l) => l.code === code)?.label ?? languageName(code);

    const handleSwap = () => {
      const [prevFrom, prevTo, prevSource, prevTarget] = [from, to, source, target];
      setFrom(prevTo);
      setTo(prevFrom);
      setSource(prevTarget);
      setTarget(prevSource);
      setSwapCount((n) => n + 1);
      onSwap?.();
    };

    const handleCopy = async () => {
      if (!target || !navigator.clipboard?.writeText) return;
      try {
        await navigator.clipboard.writeText(target);
      } catch {
        return;
      }
      setCopied(true);
      onTargetCopy?.(target);
      clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 1500);
    };

    const handleClear = () => {
      setSource("");
      sourceRef.current?.focus();
    };

    const renderPicker = (
      value: string,
      onValueChange: (code: string) => void,
      changeable: boolean,
      ariaLabel: string,
    ) =>
      locales && changeable ? (
        // Native select: full keyboard, screen reader and mobile picker support for free.
        <div className="relative inline-flex max-w-full items-center">
          <select
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            aria-label={ariaLabel}
            className="h-8 max-w-full cursor-pointer appearance-none truncate rounded-md bg-transparent pe-8 ps-2.5 text-sm font-medium text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
          >
            {locales.map((locale) => (
              <option key={locale.code} value={locale.code} className="bg-popover text-popover-foreground">
                {labelFor(locale.code)}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute end-2.5 h-4 w-4 text-muted-foreground"
          />
        </div>
      ) : (
        <span className="inline-flex h-8 items-center px-2.5 text-sm font-medium">
          {labelFor(value)}
        </span>
      );

    const paneClass = cn(
      "relative flex min-w-0 flex-col focus-within:ring-2 focus-within:ring-inset focus-within:ring-ring/30",
      classNames?.pane,
    );
    const textareaClass = cn(
      "block min-h-40 w-full flex-1 resize-none bg-transparent px-4 pb-1 pt-3 text-base leading-relaxed text-foreground outline-none placeholder:text-muted-foreground",
      classNames?.textarea,
    );
    const footerClass = cn("flex h-11 items-center gap-1 px-2.5", classNames?.footer);

    return (
      <MotionConfig reducedMotion="user">
        <div
          ref={ref}
          className={cn(
            "w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm",
            classNames?.root,
            className,
          )}
          {...rest}
        >
          <div
            className={cn(
              "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 border-b px-2 py-1.5",
              classNames?.header,
            )}
          >
            <div className="flex min-w-0 items-center">
              {renderPicker(
                from,
                setFrom,
                sourceLocale === undefined || !!onSourceLocaleChange,
                "Source language",
              )}
            </div>

            <motion.button
              type="button"
              onClick={handleSwap}
              disabled={!canSwap}
              aria-label="Swap languages"
              whileTap={canSwap ? { scale: 0.92 } : undefined}
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm outline-none transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "disabled:pointer-events-none disabled:opacity-50",
                classNames?.swap,
              )}
            >
              <motion.span
                aria-hidden="true"
                className="inline-flex"
                animate={{ rotate: swapCount * 180 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <ArrowLeftRight className="h-4 w-4" />
              </motion.span>
            </motion.button>

            <div className="flex min-w-0 items-center justify-end sm:justify-start">
              {renderPicker(
                to,
                setTo,
                targetLocale === undefined || !!onTargetLocaleChange,
                "Target language",
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2">
            <div className={cn(paneClass, "border-b sm:border-b-0 sm:border-e")}>
              <textarea
                ref={sourceRef}
                value={source}
                onChange={(e) => setSource(e.target.value)}
                readOnly={sourceReadOnly}
                placeholder={sourcePlaceholder}
                aria-label={`Source text (${labelFor(from)})`}
                aria-describedby={showCount ? countId : undefined}
                maxLength={maxLength}
                lang={from}
                dir={isRtl(from) ? "rtl" : "ltr"}
                rows={5}
                className={cn(textareaClass, sourceReadOnly && "cursor-default")}
              />
              <div className={footerClass}>
                {showCount && (
                  <span
                    id={countId}
                    className={cn(
                      "ps-1.5 text-xs tabular-nums text-muted-foreground",
                      maxLength !== undefined && source.length >= maxLength && "text-destructive",
                    )}
                  >
                    {maxLength !== undefined ? `${source.length} / ${maxLength}` : source.length}
                    <span className="sr-only"> characters</span>
                  </span>
                )}
                {showClear && !sourceReadOnly && (
                  <button
                    type="button"
                    onClick={handleClear}
                    disabled={!source}
                    aria-label="Clear source text"
                    className={cn(iconButtonClass, "ms-auto")}
                  >
                    <X aria-hidden="true" className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className={cn(paneClass, "bg-muted/40")}>
              <div className="relative flex flex-1 flex-col">
                <textarea
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  readOnly={targetReadOnly}
                  placeholder={loading ? undefined : targetPlaceholder}
                  aria-label={`Translation (${labelFor(to)})`}
                  aria-busy={loading || undefined}
                  lang={to}
                  dir={isRtl(to) ? "rtl" : "ltr"}
                  rows={5}
                  className={cn(
                    textareaClass,
                    targetReadOnly && "cursor-default",
                    loading && "opacity-0",
                  )}
                />
                {loading && (
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-4 space-y-3">
                    {SKELETON_WIDTHS.map((width) => (
                      <div key={width} className={cn("h-3.5 animate-pulse rounded-full bg-foreground/10", width)} />
                    ))}
                  </div>
                )}
              </div>
              <div className={footerClass}>
                {showCopy && (
                  <button
                    type="button"
                    onClick={handleCopy}
                    disabled={!target || loading}
                    aria-label={copied ? "Copied" : "Copy translation"}
                    className={cn(iconButtonClass, "ms-auto")}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={copied ? "copied" : "copy"}
                        aria-hidden="true"
                        className="inline-flex"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.12 }}
                      >
                        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                )}
                <span role="status" aria-live="polite" className="sr-only">
                  {copied ? "Translation copied to clipboard" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </MotionConfig>
    );
  },
);

export default TranslationWidget;
