"use client";

import { type ClassValue, clsx } from "clsx";
import { Brain, Check, ChevronRight, LoaderCircle, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** A tool step of an answer: what the agent did, how long it took and what came back. */
export type ThreadStep = {
  id: string;
  title: string;
  state: "running" | "done" | "error";
  /** Milliseconds, shown once the step is over. */
  durationMs?: number;
  /** The tool's result, behind "Show result". */
  detail?: string;
};

export type ThreadMessage =
  | { id: string; role: "user"; text: string }
  | {
      id: string;
      role: "assistant";
      /** The model's reasoning summary; `seconds` once it is over. */
      reasoning?: { text: string; seconds?: number };
      steps?: ThreadStep[];
      /** The answer: paragraphs, `- ` lists and `**bold**`. */
      text: string;
      /** The answer is still arriving: a caret follows the text. */
      streaming?: boolean;
    };

export type ReasoningThreadProps = {
  messages: ThreadMessage[];
  /** Accessible name of the conversation. */
  label?: string;
  className?: string;
};

/** How long a finished answer stays in the announcement region before it is cleared. */
const ANNOUNCED_MS = 8000;

/** The answer as plain words for a screen reader: no `**`, list dashes or line breaks. */
const plainAnswer = (text: string) =>
  text
    .replaceAll("**", "")
    .replace(/^\s*-\s+/gmu, "")
    .replace(/\s*\n+\s*/gu, ". ")
    .replace(/\.\s*\./gu, ".");

/**
 * What a screen reader should hear when an answer finishes streaming: the streaming answer itself
 * is kept out of the live region (some readers read every chunk, others nothing once `aria-busy`
 * clears), and its finished words are put into a polite status once, then cleared.
 */
function useFinishedAnswer(messages: ThreadMessage[]): string {
  const streaming = useRef(new Set<string>());
  const timer = useRef<number | undefined>(undefined);
  const [text, setText] = useState("");
  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    for (const message of messages) {
      if (message.role !== "assistant") {
        continue;
      }
      if (message.streaming) {
        streaming.current.add(message.id);
      } else if (streaming.current.delete(message.id) && message.text) {
        setText(`Answer: ${plainAnswer(message.text)}`);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setText(""), ANNOUNCED_MS);
      }
    }
  }, [messages]);
  return text;
}

/** `**bold**` inside a line. */
function inline(text: string): ReactNode[] {
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      // biome-ignore lint/suspicious/noArrayIndexKey: parts of one fixed string
      <strong className="font-semibold" key={index}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

/**
 * Paragraphs and `- ` lists: enough Markdown for an answer, without a parser. Blocks are keyed by
 * position: a streamed answer only grows at its end, and two equal lines must not share a key.
 */
function Answer({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/u).filter(Boolean);
  return (
    <>
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n");
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: blocks of one answer, in order
            <ul className="list-disc space-y-1 pl-5" key={blockIndex}>
              {lines.map((line, lineIndex) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: lines of one list, in order
                <li key={lineIndex}>{inline(line.slice(2))}</li>
              ))}
            </ul>
          );
        }
        // biome-ignore lint/suspicious/noArrayIndexKey: blocks of one answer, in order
        return <p key={blockIndex}>{inline(block)}</p>;
      })}
    </>
  );
}

const ENTER = { damping: 26, stiffness: 320, type: "spring" } as const;

/**
 * The reasoning: open while the model thinks (the toggle waits until it is over), one line after.
 * The panel stays in the page while closed (`hidden`), so the toggle always controls something.
 */
function Reasoning({ seconds, text }: { text: string; seconds?: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const thinking = seconds === undefined;
  const toggle = useCallback(() => setOpen((value) => !value), []);
  return (
    <div className="flex flex-col gap-1.5">
      <button
        aria-controls={id}
        aria-expanded={open || thinking}
        className="inline-flex min-h-11 items-center gap-1.5 self-start rounded-md px-1 text-muted-foreground text-sm hover:text-foreground disabled:cursor-default disabled:hover:text-muted-foreground"
        disabled={thinking}
        onClick={toggle}
        type="button"
      >
        <Brain aria-hidden="true" className="size-4" />
        {thinking ? "Thinking…" : `Thought for ${seconds} s`}
        <ChevronRight
          aria-hidden="true"
          className={cn(
            "size-3.5 transition-transform duration-200",
            (open || thinking) && "rotate-90"
          )}
        />
      </button>
      <p
        className="border-border border-l-2 pl-3 text-pretty text-muted-foreground text-sm"
        hidden={!(open || thinking)}
        id={id}
      >
        {text}
      </p>
    </div>
  );
}

function Step({ step }: { step: ThreadStep }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const reduced = useReducedMotion();
  const toggle = useCallback(() => setOpen((value) => !value), []);
  return (
    <motion.li
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-1"
      initial={reduced ? false : { opacity: 0, y: 6 }}
      transition={reduced ? { duration: 0 } : ENTER}
    >
      <div className="flex items-center gap-2 text-sm">
        <span
          className={cn(
            "flex size-5 shrink-0 items-center justify-center rounded-full border",
            step.state === "done" &&
              "border-primary bg-primary text-primary-foreground",
            step.state === "running" && "border-primary text-primary",
            step.state === "error" &&
              "border-destructive bg-destructive/10 text-destructive"
          )}
        >
          {step.state === "running" ? (
            <LoaderCircle
              aria-hidden="true"
              className="size-3 animate-spin motion-reduce:animate-none"
            />
          ) : step.state === "done" ? (
            <Check aria-hidden="true" className="size-3" />
          ) : (
            <X aria-hidden="true" className="size-3" />
          )}
        </span>
        <span className="min-w-0 flex-1 truncate font-medium">
          {step.title}
        </span>
        <span className="sr-only">
          {step.state === "running"
            ? "in progress"
            : step.state === "done"
              ? "done"
              : "failed"}
        </span>
        {step.durationMs !== undefined && step.state !== "running" ? (
          <span className="font-mono text-muted-foreground text-xs tabular-nums">
            {step.durationMs} ms
          </span>
        ) : null}
      </div>
      {step.detail && step.state !== "running" ? (
        <div className="pl-7">
          <button
            aria-controls={id}
            aria-expanded={open}
            className="inline-flex min-h-11 items-center gap-1 rounded-md text-muted-foreground text-xs hover:text-foreground"
            onClick={toggle}
            type="button"
          >
            <ChevronRight
              aria-hidden="true"
              className={cn("size-3 transition-transform", open && "rotate-90")}
            />
            {open ? "Hide result" : "Show result"}
          </button>
          <p
            className="rounded-md bg-muted px-2 py-1 font-mono text-muted-foreground text-xs"
            hidden={!open}
            id={id}
          >
            {step.detail}
          </p>
        </div>
      ) : null}
    </motion.li>
  );
}

/**
 * A chat thread that shows how each answer came about: the reasoning (open while the model thinks,
 * one line once it is over), the tool steps with their state, timing and result, then the answer,
 * with a caret while it streams. New messages and steps enter on a spring; nothing moves under
 * reduced motion. The thread is a polite live region: a screen reader hears what arrives; an
 * answer is kept out of it while it streams and read once, complete, from a status line.
 */
export function ReasoningThread({
  className,
  label = "Conversation",
  messages,
}: ReasoningThreadProps) {
  const reduced = useReducedMotion();
  const finished = useFinishedAnswer(messages);
  return (
    <section
      aria-label={label}
      aria-live="polite"
      className={cn(
        "flex w-full max-w-2xl flex-col gap-6 text-foreground",
        className
      )}
      data-slot="reasoning-thread"
      role="log"
    >
      <AnimatePresence initial={false}>
        {messages.map((message) =>
          message.role === "user" ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[85%] self-end rounded-2xl bg-muted px-4 py-2.5 text-sm"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              key={message.id}
              transition={reduced ? { duration: 0 } : ENTER}
            >
              <span className="sr-only">You: </span>
              {message.text}
            </motion.div>
          ) : (
            <motion.article
              animate={{ opacity: 1, y: 0 }}
              // While the answer streams it stays out of the live region (and busy); the status
              // below the thread reads it once it is complete.
              aria-busy={message.streaming || undefined}
              aria-label="Assistant answer"
              aria-live={message.streaming ? "off" : undefined}
              className="flex flex-col gap-3"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              key={message.id}
              transition={reduced ? { duration: 0 } : ENTER}
            >
              {message.reasoning ? <Reasoning {...message.reasoning} /> : null}
              {message.steps && message.steps.length > 0 ? (
                <ol
                  aria-label="Steps"
                  className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3"
                >
                  {message.steps.map((step) => (
                    <Step key={step.id} step={step} />
                  ))}
                </ol>
              ) : null}
              {message.text ? (
                <div className="space-y-3 text-pretty text-sm leading-relaxed">
                  <Answer text={message.text} />
                  {message.streaming ? (
                    <span
                      aria-hidden="true"
                      className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-primary align-text-bottom motion-reduce:animate-none"
                    />
                  ) : null}
                </div>
              ) : null}
            </motion.article>
          )
        )}
      </AnimatePresence>
      <p className="sr-only" role="status">
        {finished}
      </p>
    </section>
  );
}

export default ReasoningThread;
