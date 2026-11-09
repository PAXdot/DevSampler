"use client";

import * as React from "react";

type TextareaProps = React.ComponentProps<"textarea">;

export type HighlightToken = { kind: string; pattern: RegExp; className: string };
export type HighlightMatch = { kind: string; text: string; start: number; end: number };

export type HighlightTextareaProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onTokensChange?: (tokens: HighlightMatch[]) => void;
  tokens?: HighlightToken[];
  maxLength?: number;
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
  placeholder?: string;
  label?: React.ReactNode;
  renderCount?: (used: number, max?: number) => React.ReactNode;
  showCount?: boolean;
  overflowClassName?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  textareaClassName?: string;
  ref?: TextareaProps["ref"];
};

export const DEFAULT_TOKENS: HighlightToken[] = [
  { kind: "url", pattern: /https?:\/\/[^\s<>]+/g, className: "rounded-sm text-foreground underline decoration-chart-3/70 decoration-2 underline-offset-2 dark:decoration-chart-1/70" },
  { kind: "mention", pattern: /(^|[^\w])(@[\w.-]+)/g, className: "rounded-sm bg-chart-3/15 text-foreground dark:bg-chart-1/20" },
  { kind: "tag", pattern: /(^|[^\w])(#[\w-]+)/g, className: "rounded-sm bg-chart-2/15 text-foreground" },
];

const SHARED = "m-0 w-full rounded-xl border px-3 py-2.5 text-sm leading-6 whitespace-pre-wrap break-words [font-kerning:none]";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function tokenize(value: string, tokens: HighlightToken[]): HighlightMatch[] {
  const found: HighlightMatch[] = [];
  for (const token of tokens) {
    const pattern = new RegExp(token.pattern.source, token.pattern.flags.includes("g") ? token.pattern.flags : `${token.pattern.flags}g`);
    let match = pattern.exec(value);
    while (match) {
      const inner = match.length > 2 && match[2] !== undefined ? match[2] : match[0];
      const start = match.index + match[0].indexOf(inner);
      const end = start + inner.length;
      if (!found.some((f) => start < f.end && end > f.start)) found.push({ kind: token.kind, text: inner, start, end });
      if (match[0].length === 0) pattern.lastIndex += 1;
      match = pattern.exec(value);
    }
  }
  return found.sort((a, b) => a.start - b.start);
}

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(true);
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function Token({ kind, text, className, reduced }: { kind: string; text: string; className: string; reduced: boolean }) {
  const ref = React.useRef(null as HTMLSpanElement | null);
  React.useLayoutEffect(() => {
    const node = ref.current;
    if (!node || reduced || typeof node.animate !== "function") return;
    node.animate([{ transform: "scale(0.92)", opacity: 0.4 }, { transform: "scale(1.04)", opacity: 1, offset: 0.6 }, { transform: "scale(1)", opacity: 1 }], { duration: 300, easing: EASE });
  }, []);
  return <span ref={ref} data-token={kind} className={`inline-block ${className}`}>{text}</span>;
}

export function HighlightTextarea({
  value,
  defaultValue = "",
  onValueChange,
  onTokensChange,
  tokens = DEFAULT_TOKENS,
  maxLength,
  autosize = true,
  minRows = 3,
  maxRows = 8,
  placeholder,
  label,
  renderCount,
  showCount = true,
  overflowClassName = "rounded-sm bg-destructive/15 text-destructive underline decoration-destructive/70 decoration-wavy underline-offset-2",
  id,
  name,
  disabled,
  className = "",
  textareaClassName = "",
  ref,
}: HighlightTextareaProps) {
  const reduced = useReducedMotion();
  const generated = React.useId();
  const textareaId = id ?? `${generated}-textarea`;
  const [localValue, setLocalValue] = React.useState(defaultValue);
  const current = value ?? localValue;
  const backdropRef = React.useRef(null as HTMLDivElement | null);
  const textareaRef = React.useRef(null as HTMLTextAreaElement | null);
  const matches = React.useMemo(() => tokenize(current, tokens), [current, tokens]);
  const over = maxLength !== undefined && current.length > maxLength;
  const lastTokens = React.useRef("");

  const segments: React.ReactNode[] = [];
  const limit = maxLength ?? Number.POSITIVE_INFINITY;
  let cursor = 0;
  const pushPlain = (from: number, to: number) => {
    if (to <= from) return;
    const safe = Math.min(to, Math.max(from, limit));
    if (safe > from) segments.push(current.slice(from, safe));
    if (to > safe) segments.push(<mark key={`o-${safe}`} data-overflow className={overflowClassName}>{current.slice(Math.max(from, limit), to)}</mark>);
  };
  for (const match of matches) {
    pushPlain(cursor, match.start);
    const token = tokens.find((t) => t.kind === match.kind)!;
    if (match.start >= limit) segments.push(<mark key={`o-${match.start}`} data-overflow className={overflowClassName}>{match.text}</mark>);
    else if (match.end > limit) { segments.push(<Token key={`t-${match.start}`} kind={match.kind} text={current.slice(match.start, limit)} className={token.className} reduced={reduced} />); segments.push(<mark key={`o-${limit}`} data-overflow className={overflowClassName}>{current.slice(limit, match.end)}</mark>); }
    else segments.push(<Token key={`t-${match.start}`} kind={match.kind} text={match.text} className={token.className} reduced={reduced} />);
    cursor = match.end;
  }
  pushPlain(cursor, current.length);

  const update = (next: string) => {
    if (value === undefined) setLocalValue(next);
    onValueChange?.(next);
  };

  React.useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea || !autosize) return;
    const line = Number.parseFloat(getComputedStyle(textarea).lineHeight) || 24;
    const padding = 20 + 2;
    textarea.style.height = "0px";
    const needed = Math.max(minRows * line + padding, Math.min(maxRows * line + padding, textarea.scrollHeight));
    textarea.style.height = `${needed}px`;
    if (backdropRef.current) backdropRef.current.style.height = `${needed}px`;
  }, [current, autosize, minRows, maxRows]);

  React.useEffect(() => {
    const key = matches.map((m) => `${m.kind}:${m.text}`).join("|");
    if (key === lastTokens.current) return;
    lastTokens.current = key;
    onTokensChange?.(matches);
  }, [matches, onTokensChange]);

  const syncScroll = () => {
    const textarea = textareaRef.current; const backdrop = backdropRef.current;
    if (textarea && backdrop) { backdrop.scrollTop = textarea.scrollTop; backdrop.scrollLeft = textarea.scrollLeft; }
  };

  const used = current.length;
  const count = renderCount ? renderCount(used, maxLength) : maxLength !== undefined ? `${used} / ${maxLength}` : `${used}`;

  return (
    <div data-slot="highlight-textarea" data-over={over ? "true" : "false"} data-tokens={matches.length} className={`w-full ${className}`}>
      {label && <label htmlFor={textareaId} className="mb-1.5 block text-xs font-medium">{label}</label>}
      <div className="relative">
        <div ref={backdropRef} data-backdrop aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden border-transparent bg-background text-foreground ${SHARED}`} style={{ minHeight: `${minRows * 24 + 22}px` }}>
          {segments}
          {"​"}
        </div>
        <textarea
          ref={(node) => { textareaRef.current = node; if (typeof ref === "function") ref(node); else if (ref) (ref as { current: HTMLTextAreaElement | null }).current = node; }}
          id={textareaId}
          name={name}
          value={current}
          placeholder={placeholder}
          disabled={disabled}
          rows={minRows}
          aria-invalid={over ? true : undefined}
          aria-describedby={showCount ? `${generated}-count` : undefined}
          data-textarea
          onChange={(event) => update(event.target.value)}
          onScroll={syncScroll}
          className={`relative block resize-none bg-transparent text-transparent caret-foreground outline-none transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring ${over ? "border-destructive/60" : "border-border"} ${SHARED} ${textareaClassName}`}
          style={{ minHeight: `${minRows * 24 + 22}px` }}
        />
      </div>
      {showCount && (
        <p id={`${generated}-count`} data-count aria-live="polite" className={`mt-1.5 text-right font-mono text-[11px] tabular-nums transition-colors duration-200 motion-reduce:transition-none ${over ? "text-destructive" : "text-muted-foreground"}`}>
          {count}
        </p>
      )}
    </div>
  );
}

export default HighlightTextarea;
