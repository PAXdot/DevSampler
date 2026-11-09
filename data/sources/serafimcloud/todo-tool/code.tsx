"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SHIMMER_STYLE_ID = "an-todo-tool-shimmer-styles";
const SHIMMER_STYLES = `
@keyframes an-todo-shimmer {
  from { background-position: 100% center; }
  to { background-position: 0% center; }
}
.an-todo-shimmer {
  display: inline-flex;
  align-items: center;
  height: 1rem;
  background-size: 250% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(90deg, #a3a3a3 0%, #a3a3a3 40%, #525252 50%, #a3a3a3 60%, #a3a3a3 100%);
  background-repeat: no-repeat;
  animation: an-todo-shimmer 1.2s linear infinite;
}
`;

let shimmerStylesInjected = false;
function ensureShimmerStyles() {
  if (typeof document === "undefined") return;
  if (shimmerStylesInjected) return;
  if (document.getElementById(SHIMMER_STYLE_ID)) {
    shimmerStylesInjected = true;
    return;
  }
  const el = document.createElement("style");
  el.id = SHIMMER_STYLE_ID;
  el.textContent = SHIMMER_STYLES;
  document.head.appendChild(el);
  shimmerStylesInjected = true;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export type TodoItem = {
  content: string;
  status: "pending" | "in_progress" | "completed";
};

export type TodoToolProps = {
  /** "streaming" shows shimmer label; otherwise renders the list. */
  state?: "idle" | "streaming";
  /** Task list. */
  todos?: TodoItem[];
  /** Pick the streaming label: "Creating to-do list..." vs "Updating to-dos...". */
  isCreation?: boolean;
  /** When true, in-progress items render with the muted (pending) icon and greyed text. */
  isPending?: boolean;
  className?: string;
};

function TodoStatusIcon({
  status,
  isPending,
}: {
  status: TodoItem["status"];
  isPending?: boolean;
}) {
  if (isPending && status === "in_progress") {
    return (
      <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border border-neutral-400 dark:border-neutral-600">
        <ArrowRightIcon className="w-2 h-2 text-neutral-500 dark:text-neutral-500" />
      </div>
    );
  }
  switch (status) {
    case "completed":
      return (
        <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border border-neutral-300 dark:border-neutral-700">
          <CheckIcon className="w-2 h-2 text-neutral-500 dark:text-neutral-500" />
        </div>
      );
    case "in_progress":
      return (
        <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border border-neutral-400 dark:border-neutral-600">
          <ArrowRightIcon className="w-2 h-2 text-neutral-500 dark:text-neutral-500" />
        </div>
      );
    default:
      return (
        <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border border-neutral-400 dark:border-neutral-600" />
      );
  }
}

const TodoListItem = React.memo(function TodoListItem({
  todo,
  isPending,
}: {
  todo: TodoItem;
  isPending: boolean;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-[2px]">
        <TodoStatusIcon status={todo.status} isPending={isPending} />
      </div>
      <span
        className={cn(
          "text-sm",
          todo.status === "completed" && "line-through",
          isPending || todo.status === "completed" || todo.status === "pending"
            ? "text-neutral-500 dark:text-neutral-400"
            : "text-neutral-700 dark:text-neutral-300",
        )}
      >
        {todo.content}
      </span>
    </div>
  );
});

export const TodoTool = React.memo(function TodoTool({
  state = "idle",
  todos = [],
  isCreation = false,
  isPending = false,
  className,
}: TodoToolProps) {
  React.useEffect(() => {
    ensureShimmerStyles();
  }, []);

  const isStreaming = state === "streaming" || todos.length === 0;

  if (isStreaming) {
    return (
      <div
        className={cn(
          "space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300",
          className,
        )}
      >
        <div className="text-neutral-500 dark:text-neutral-400">
          <span className="an-todo-shimmer">
            {isCreation ? "Creating to-do list..." : "Updating to-dos..."}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300",
        className,
      )}
    >
      {todos.map((todo, idx) => (
        <TodoListItem key={idx} todo={todo} isPending={isPending} />
      ))}
    </div>
  );
});
