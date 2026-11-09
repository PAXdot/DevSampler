"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Small self-contained multi-step "questionnaire" primitive.
 *
 * The upstream draft depended on a `@/components/ui/questionnaire` primitive
 * that in turn pulled in a private `@shadcn/react/questionnaire` package,
 * which isn't installable here. This local implementation keeps the exact
 * same exported API the block uses (Questionnaire, QuestionnaireItem,
 * QuestionnaireChoice, ...) but is plain React + Tailwind.
 */

type Shortcuts = "letters" | "numbers";

interface QuestionnaireContextValue {
  currentIndex: number;
  currentName?: string;
  itemNames: string[];
  answers: Record<string, string>;
  setAnswer: (name: string, value: string) => void;
  goNext: () => void;
  goPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  shortcuts?: Shortcuts;
  errors: Record<string, string>;
  setError: (name: string, message?: string) => void;
}

const QuestionnaireContext = React.createContext<QuestionnaireContextValue | null>(null);

function useQuestionnaireContext() {
  const ctx = React.useContext(QuestionnaireContext);
  if (!ctx) {
    throw new Error("Questionnaire parts must be rendered inside <Questionnaire>");
  }
  return ctx;
}

interface QuestionnaireItemContextValue {
  name: string;
  required?: boolean;
}

const QuestionnaireItemContext = React.createContext<QuestionnaireItemContextValue | null>(null);

function useQuestionnaireItemContext() {
  const ctx = React.useContext(QuestionnaireItemContext);
  if (!ctx) {
    throw new Error("This part must be rendered inside <QuestionnaireItem>");
  }
  return ctx;
}

interface QuestionnaireProps extends Omit<React.ComponentProps<"form">, "onSubmit"> {
  defaultItem?: string;
  shortcuts?: Shortcuts;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function Questionnaire({
  defaultItem,
  shortcuts,
  onSubmit,
  className,
  children,
  ...props
}: QuestionnaireProps) {
  const itemNames = React.useMemo(() => {
    const names: string[] = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === QuestionnaireItem) {
        const name = (child.props as { name?: string }).name;
        if (name) names.push(name);
      }
    });
    return names;
  }, [children]);

  const [currentIndex, setCurrentIndex] = React.useState(() => {
    const idx = defaultItem ? itemNames.indexOf(defaultItem) : 0;
    return idx >= 0 ? idx : 0;
  });
  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const currentName = itemNames[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === itemNames.length - 1;

  const setAnswer = React.useCallback((name: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const setError = React.useCallback((name: string, message?: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  }, []);

  const goNext = React.useCallback(() => {
    if (currentName && !answers[currentName]) {
      setError(currentName, "Pick one to continue.");
      return;
    }
    setCurrentIndex((i) => Math.min(i + 1, itemNames.length - 1));
  }, [answers, currentName, itemNames.length, setError]);

  const goPrev = React.useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (currentName && !answers[currentName]) {
      event.preventDefault();
      setError(currentName, "Pick one to continue.");
      return;
    }
    onSubmit?.(event);
  };

  const contextValue: QuestionnaireContextValue = {
    currentIndex,
    currentName,
    itemNames,
    answers,
    setAnswer,
    goNext,
    goPrev,
    isFirst,
    isLast,
    shortcuts,
    errors,
    setError,
  };

  return (
    <QuestionnaireContext.Provider value={contextValue}>
      <form className={cn("flex w-full flex-col", className)} onSubmit={handleSubmit} {...props}>
        {children}
        {itemNames.map((name) => (
          <input key={name} type="hidden" name={name} value={answers[name] ?? ""} />
        ))}
      </form>
    </QuestionnaireContext.Provider>
  );
}

function QuestionnaireProgress({ className, ...props }: React.ComponentProps<"p">) {
  const ctx = useQuestionnaireContext();
  const total = ctx.itemNames.length;
  if (!total) return null;
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      Step {ctx.currentIndex + 1} of {total}
    </p>
  );
}

interface QuestionnaireItemProps extends React.ComponentProps<"div"> {
  name: string;
  required?: boolean;
}

function QuestionnaireItem({ name, required, className, children, ...props }: QuestionnaireItemProps) {
  const ctx = useQuestionnaireContext();
  if (ctx.currentName !== name) return null;
  return (
    <QuestionnaireItemContext.Provider value={{ name, required }}>
      <div className={cn("flex flex-col gap-4", className)} {...props}>
        {children}
      </div>
    </QuestionnaireItemContext.Provider>
  );
}

function QuestionnaireTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-pretty", className)} {...props} />;
}

function QuestionnaireDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-pretty text-muted-foreground", className)} {...props} />;
}

function QuestionnaireChoices({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid gap-3", className)} {...props} />;
}

interface QuestionnaireChoiceProps extends Omit<React.ComponentProps<"button">, "value" | "type"> {
  value: string;
}

function QuestionnaireChoice({ value, className, children, ...props }: QuestionnaireChoiceProps) {
  const item = useQuestionnaireItemContext();
  const ctx = useQuestionnaireContext();
  const selected = ctx.answers[item.name] === value;

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => ctx.setAnswer(item.name, value)}
      className={cn(
        "flex flex-col items-start gap-1 border text-left transition-colors",
        selected ? "border-primary bg-primary/5" : "border-border hover:bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function QuestionnaireChoiceDescription({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("text-muted-foreground", className)} {...props} />;
}

function QuestionnaireError({ className, ...props }: React.ComponentProps<"p">) {
  const item = useQuestionnaireItemContext();
  const ctx = useQuestionnaireContext();
  const message = ctx.errors[item.name];
  if (!message) return null;
  return (
    <p className={cn("text-destructive", className)} {...props}>
      {message}
    </p>
  );
}

function QuestionnaireActions({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center justify-between gap-3", className)} {...props} />;
}

function QuestionnairePrevious({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  const ctx = useQuestionnaireContext();
  if (ctx.isFirst) return null;
  return (
    <button type="button" onClick={ctx.goPrev} className={cn("px-4 py-2", className)} {...props}>
      {children ?? "Previous"}
    </button>
  );
}

function QuestionnaireNext({ children, className, ...props }: React.ComponentProps<"button">) {
  const ctx = useQuestionnaireContext();
  if (ctx.isLast) return null;
  return (
    <button type="button" onClick={ctx.goNext} className={cn("px-4 py-2", className)} {...props}>
      {children ?? "Next"}
    </button>
  );
}

function QuestionnaireSubmit({ children, className, ...props }: React.ComponentProps<"button">) {
  const ctx = useQuestionnaireContext();
  if (!ctx.isLast) return null;
  return (
    <button type="submit" className={cn("px-4 py-2", className)} {...props}>
      {children ?? "Submit"}
    </button>
  );
}

export {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
};
