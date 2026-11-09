"use client";

import * as React from "react";
import { ArrowUp, BookOpen, ChevronRight, ExternalLink, Square } from "lucide-react";

export type CitedStatus = "idle" | "reading" | "answering" | "done";

export type CitedSource = {
  id: string;
  title: string;
  domain?: string;
  url?: string;
  /** 0 to 1 while the assistant reads it; omitted means finished. */
  progress?: number;
  /** Picks one of the five chart-token tints. Defaults to the source index. */
  tone?: 1 | 2 | 3 | 4 | 5;
};

export type CitedSentence = { text: string; cite?: string[] };

type DivProps = React.ComponentProps<"div">;

export type CitedAnswerChatInputProps = {
  status?: CitedStatus;
  prompt?: string;
  sources?: CitedSource[];
  /** Plain text, or sentences with the ids of the sources they cite. */
  answer?: string | CitedSentence[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onStop?: () => void;
  onSourceClick?: (source: CitedSource) => void;
  /** Host-driven highlight, for example from a sidebar. */
  activeSource?: string | null;
  onActiveSourceChange?: (id: string | null) => void;
  placeholder?: string;
  followUpPlaceholder?: string;
  answerNote?: string;
  disabled?: boolean;
  className?: string;
  ref?: DivProps["ref"];
};

const EMPTY_SOURCES: CitedSource[] = [];
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const TONE_TILE = { 1: "from-chart-1 to-chart-4", 2: "from-chart-2 to-chart-3", 3: "from-chart-3 to-chart-1", 4: "from-chart-4 to-chart-2", 5: "from-chart-5 to-chart-4" } as const;
const TONE_CHIP = { 1: "bg-chart-1/15 ring-chart-1/50", 2: "bg-chart-2/15 ring-chart-2/50", 3: "bg-chart-3/15 ring-chart-3/50", 4: "bg-chart-4/20 ring-chart-4/60", 5: "bg-chart-5/15 ring-chart-5/50" } as const;
const TONE_BAR = { 1: "bg-chart-1", 2: "bg-chart-2", 3: "bg-chart-3", 4: "bg-chart-4", 5: "bg-chart-5" } as const;
const TONE_RING = { 1: "ring-chart-1", 2: "ring-chart-2", 3: "ring-chart-3", 4: "ring-chart-4", 5: "ring-chart-5" } as const;

function toneOf(source: CitedSource, index: number): 1 | 2 | 3 | 4 | 5 {
  return source.tone ?? (((index % 5) + 1) as 1 | 2 | 3 | 4 | 5);
}

function sentencesOf(answer: string | CitedSentence[]): CitedSentence[] {
  if (Array.isArray(answer)) return answer;
  return answer ? [{ text: answer }] : [];
}

export function CitedAnswerChatInput({
  status = "idle",
  prompt = "",
  sources = EMPTY_SOURCES,
  answer = "",
  value,
  defaultValue = "",
  onValueChange,
  onSubmit,
  onStop,
  onSourceClick,
  activeSource,
  onActiveSourceChange,
  placeholder = "Ask anything",
  followUpPlaceholder = "Ask a follow-up",
  answerNote,
  disabled = false,
  className = "",
  ref,
}: CitedAnswerChatInputProps) {
  const [draft, setDraft] = React.useState(defaultValue);
  const [localActive, setLocalActive] = React.useState(null as string | null);
  const [expanded, setExpanded] = React.useState(status === "reading");
  const [reduced, setReduced] = React.useState(true);
  const transcript = React.useRef(null as HTMLDivElement | null);
  const header = React.useRef(null as HTMLSpanElement | null);
  const shimmer = React.useRef(null as Animation | null);
  const seen = React.useRef(0);
  const regionId = React.useId();
  const inputValue = value ?? draft;
  const busy = status === "reading" || status === "answering";
  const active = activeSource === undefined ? localActive : activeSource;
  const sentences = sentencesOf(answer);
  const indexOf = (id: string) => sources.findIndex((source) => source.id === id);
  const completed = status === "done" ? sentences.map((s) => s.text).join(" ") : sentences.slice(0, -1).map((s) => s.text).join(" ");

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    if (status === "reading") setExpanded(true);
    if (status === "answering") setExpanded(false);
  }, [status]);

  // Text shimmer on the "Reading sources" header while the assistant works.
  React.useEffect(() => {
    shimmer.current?.cancel();
    shimmer.current = null;
    const el = header.current;
    if (!el || reduced || status !== "reading") return;
    shimmer.current = el.animate([{ backgroundPosition: "100% 0" }, { backgroundPosition: "0% 0" }], { duration: 1800, iterations: Infinity, easing: "linear" });
    return () => { shimmer.current?.cancel(); shimmer.current = null; };
  }, [status, reduced]);

  // New source rows slide in; the transcript keeps the newest content in view.
  React.useLayoutEffect(() => {
    const box = transcript.current;
    if (!box) return;
    const rows = [...box.querySelectorAll("[data-source]")] as HTMLElement[];
    if (!reduced) rows.slice(seen.current).forEach((row, index) => row.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 360, delay: index * 60, easing: EASE, fill: "backwards" }));
    seen.current = status === "idle" ? 0 : rows.length;
    box.scrollTop = box.scrollHeight;
  }, [status, sources.length, sentences.length, expanded, reduced]);

  const setActive = (id: string | null) => {
    if (activeSource === undefined) setLocalActive(id);
    onActiveSourceChange?.(id);
  };

  const changeValue = (next: string) => {
    if (value === undefined) setDraft(next);
    onValueChange?.(next);
  };

  const submit = () => {
    const message = inputValue.trim();
    if (!message || busy || disabled || !onSubmit) return;
    onSubmit(message);
    changeValue("");
  };

  const chip = (id: string, key: string) => {
    const index = indexOf(id);
    const source = sources[index];
    if (!source) return null;
    const tone = toneOf(source, index);
    const highlighted = active === id;
    return (
      <button
        key={key}
        type="button"
        data-cite={id}
        aria-label={`Source ${index + 1}: ${source.title}`}
        aria-describedby={`${regionId}-${id}`}
        onMouseEnter={() => setActive(id)}
        onMouseLeave={() => setActive(null)}
        onFocus={() => setActive(id)}
        onBlur={() => setActive(null)}
        onClick={() => onSourceClick?.(source)}
        className={`mx-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-md px-1 align-text-top font-mono text-[10px] font-semibold leading-none text-foreground outline-none ring-1 transition-transform motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring ${TONE_CHIP[tone]} ${highlighted ? "-translate-y-0.5 ring-2" : ""}`}
      >
        {index + 1}
      </button>
    );
  };

  return (
    <div ref={ref} data-slot="cited-answer-chat-input" data-state={status} data-active-source={active ?? ""} className={`flex h-full min-h-0 w-full max-w-[480px] flex-col text-card-foreground ${className}`}>
      {status !== "idle" && (
        <div ref={transcript} data-transcript role="region" aria-label="Conversation" tabIndex={0} className="mb-4 min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-1 outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <div data-question className="ml-auto w-fit max-w-[94%] rounded-2xl rounded-br-sm bg-muted px-3.5 py-2.5 text-[13px] leading-5 text-foreground">
            <p className="line-clamp-3 break-words">{prompt}</p>
          </div>
          <div data-assistant className="mt-4 min-w-0">
            {(sources.length > 0 || status === "reading") && (
              <>
                <button
                  type="button"
                  data-sources-toggle
                  aria-expanded={expanded}
                  aria-controls={`${regionId}-sources`}
                  disabled={status === "reading"}
                  onClick={() => setExpanded(!expanded)}
                  className="flex max-w-full items-center gap-2 rounded-full text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default"
                >
                  <BookOpen className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span ref={header} data-shimmer className={status === "reading" && !reduced ? "bg-[linear-gradient(90deg,var(--color-muted-foreground)_0%,var(--color-muted-foreground)_42%,var(--color-foreground)_50%,var(--color-muted-foreground)_58%,var(--color-muted-foreground)_100%)] bg-[length:250%_100%] bg-clip-text font-medium text-transparent" : "font-medium text-muted-foreground"}>
                    {status === "reading" ? `Reading ${sources.length} ${sources.length === 1 ? "source" : "sources"}` : `${sources.length} ${sources.length === 1 ? "source" : "sources"}`}
                  </span>
                  {status !== "reading" && !expanded && (
                    <span data-source-dots className="ml-1 inline-flex items-center gap-1" aria-hidden="true">
                      {sources.map((source, index) => <span key={source.id} data-dot={source.id} className={`size-2 rounded-full bg-linear-to-br transition-transform motion-reduce:transition-none ${TONE_TILE[toneOf(source, index)]} ${active === source.id ? "scale-150" : ""}`} />)}
                    </span>
                  )}
                  {status !== "reading" && <ChevronRight className={`size-3.5 text-muted-foreground transition-transform motion-reduce:transition-none ${expanded ? "rotate-90" : ""}`} aria-hidden="true" />}
                </button>
                <ul id={`${regionId}-sources`} data-source-list hidden={!expanded} className="mt-3 space-y-2">
                  {sources.map((source, index) => {
                    const tone = toneOf(source, index);
                    const highlighted = active === source.id;
                    const progress = source.progress === undefined ? 1 : Math.min(1, Math.max(0, source.progress));
                    return (
                      <li key={source.id} id={`${regionId}-${source.id}`} data-source={source.id} data-progress={progress.toFixed(2)}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(source.id)}
                          onMouseLeave={() => setActive(null)}
                          onFocus={() => setActive(source.id)}
                          onBlur={() => setActive(null)}
                          onClick={() => onSourceClick?.(source)}
                          className={`flex w-full items-center gap-3 rounded-xl border border-border/70 bg-card p-2.5 text-left outline-none transition-[transform,box-shadow] motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring ${highlighted ? `-translate-y-0.5 ring-2 shadow-md ${TONE_RING[tone]}` : ""}`}
                        >
                          <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br text-[11px] font-bold text-background ${TONE_TILE[tone]}`}>{index + 1}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-xs font-medium text-foreground">{source.title}</span>
                            <span className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
                              <span className="truncate">{source.domain ?? "source"}</span>
                              <span className="h-1 flex-1 overflow-hidden rounded-full bg-muted" aria-hidden="true"><span data-bar className={`block h-full rounded-full ${TONE_BAR[tone]} transition-[width] duration-500 ease-out motion-reduce:transition-none`} style={{ width: `${progress * 100}%` }} /></span>
                              <span className="font-mono tabular-nums">{progress < 1 ? `${Math.round(progress * 100)}%` : "read"}</span>
                            </span>
                          </span>
                          {source.url && <ExternalLink className="size-3 shrink-0 text-muted-foreground" aria-hidden="true" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
            {(status === "answering" || status === "done") && (
              <div data-answer role="region" aria-label="Answer" className="mt-4 space-y-2 break-words text-sm leading-6 text-foreground">
                <p>
                  {sentences.map((sentence, index) => (
                    <React.Fragment key={index}>
                      {index > 0 ? " " : ""}
                      {sentence.text}
                      {sentence.cite?.map((id) => chip(id, `${index}-${id}`))}
                    </React.Fragment>
                  ))}
                  {status === "answering" && <span data-cursor className="ml-0.5 inline-block h-3.5 w-1 translate-y-0.5 rounded-full bg-primary motion-safe:animate-pulse" />}
                </p>
                {answerNote && status === "done" && <p className="text-[11px] leading-4 text-muted-foreground">{answerNote}</p>}
              </div>
            )}
          </div>
        </div>
      )}
      <form data-composer className="relative mt-auto shrink-0 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-primary/5" onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <textarea
          aria-label={status === "idle" ? placeholder : followUpPlaceholder}
          placeholder={status === "idle" ? placeholder : followUpPlaceholder}
          value={inputValue}
          disabled={disabled}
          rows={2}
          onChange={(event) => changeValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault();
              submit();
            }
          }}
          className="block min-h-[56px] w-full resize-none rounded-lg bg-transparent p-1 text-[15px] leading-6 tracking-tight text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        />
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground"><BookOpen className="size-3" aria-hidden="true" />Answers cite their sources</span>
          {busy && onStop ? (
            <button key="stop" type="button" data-stop aria-label="Stop" onClick={onStop} className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground outline-none transition-transform hover:scale-105 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card">
              <Square className="size-3.5 fill-current" aria-hidden="true" />
            </button>
          ) : (
            <button key="send" type="submit" data-send aria-label="Send prompt" disabled={disabled || busy || !inputValue.trim() || !onSubmit} className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground outline-none transition-transform hover:scale-105 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card disabled:scale-100 disabled:opacity-30">
              <ArrowUp className="size-4" strokeWidth={2} aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true" data-announcement>{status === "reading" ? `Reading ${sources.length} sources.` : completed}</div>
    </div>
  );
}

export default CitedAnswerChatInput;
