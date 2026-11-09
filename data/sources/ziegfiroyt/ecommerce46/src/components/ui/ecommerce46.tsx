"use client";

import { Slot } from "@radix-ui/react-slot";
import { ArrowUpRight, RotateCcw, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------- */
/* Inline multi-step questionnaire (kept local to avoid a separate module) */
/* ---------------------------------------------------------------------- */

type ShortcutMode = "letters" | "numbers";

const SHORTCUT_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface QuestionnaireContextValue {
  values: Record<string, string | string[]>;
  setValue: (name: string, value: string | string[]) => void;
  stepIndex: number;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  names: string[];
  errors: Record<string, string>;
  setError: (name: string, message: string | null) => void;
  requiredMap: Record<string, boolean>;
  setRequired: (name: string, required: boolean) => void;
  shortcuts?: ShortcutMode;
}

const QuestionnaireContext =
  React.createContext<QuestionnaireContextValue | null>(null);

function useQuestionnaireContext(component: string) {
  const ctx = React.useContext(QuestionnaireContext);
  if (!ctx)
    throw new Error(`<${component} /> must be used inside <Questionnaire>`);
  return ctx;
}

interface ItemContextValue {
  name: string;
  required?: boolean;
  multiple?: boolean;
  active: boolean;
  choiceCounterRef: React.MutableRefObject<number>;
}

const ItemContext = React.createContext<ItemContextValue | null>(null);

function useItemContext(component: string) {
  const ctx = React.useContext(ItemContext);
  if (!ctx)
    throw new Error(`<${component} /> must be used inside <QuestionnaireItem>`);
  return ctx;
}

function collectItemNames(
  node: React.ReactNode,
  names: string[] = [],
): string[] {
  React.Children.forEach(node, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === QuestionnaireItem) {
      const name = (child.props as { name?: string }).name;
      if (name) names.push(name);
      return;
    }
    const childProps = child.props as
      { children?: React.ReactNode } | undefined;
    if (childProps?.children) collectItemNames(childProps.children, names);
  });
  return names;
}

interface QuestionnaireProps extends Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onSubmit"
> {
  defaultItem?: string;
  shortcuts?: ShortcutMode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

function Questionnaire({
  defaultItem,
  shortcuts,
  onSubmit,
  className,
  children,
  ...props
}: QuestionnaireProps) {
  const names = React.useMemo(() => collectItemNames(children), [children]);
  const [values, setValues] = React.useState<Record<string, string | string[]>>(
    {},
  );
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [requiredMap, setRequiredMap] = React.useState<Record<string, boolean>>(
    {},
  );
  const [stepIndex, setStepIndex] = React.useState(() => {
    const index = defaultItem ? names.indexOf(defaultItem) : 0;
    return index >= 0 ? index : 0;
  });

  const setValue = React.useCallback(
    (name: string, value: string | string[]) => {
      setValues((current) => ({ ...current, [name]: value }));
    },
    [],
  );

  const setError = React.useCallback((name: string, message: string | null) => {
    setErrors((current) => {
      if (!message) {
        if (!(name in current)) return current;
        const next = { ...current };
        delete next[name];
        return next;
      }
      return { ...current, [name]: message };
    });
  }, []);

  const setRequired = React.useCallback((name: string, required: boolean) => {
    setRequiredMap((current) => {
      if (current[name] === required) return current;
      return { ...current, [name]: required };
    });
  }, []);

  return (
    <QuestionnaireContext.Provider
      value={{
        values,
        setValue,
        stepIndex,
        setStepIndex,
        names,
        errors,
        setError,
        requiredMap,
        setRequired,
        shortcuts,
      }}
    >
      <form
        {...props}
        onSubmit={onSubmit}
        className={cn("flex flex-col gap-8", className)}
      >
        {children}
      </form>
    </QuestionnaireContext.Provider>
  );
}

interface QuestionnaireItemProps {
  name: string;
  required?: boolean;
  multiple?: boolean;
  children?: React.ReactNode;
  className?: string;
}

function QuestionnaireItem({
  name,
  required,
  multiple,
  children,
  className,
}: QuestionnaireItemProps) {
  const { names, stepIndex, setRequired } =
    useQuestionnaireContext("QuestionnaireItem");
  const active = names.indexOf(name) === stepIndex;
  const choiceCounterRef = React.useRef(0);
  choiceCounterRef.current = 0;

  React.useEffect(() => {
    setRequired(name, Boolean(required));
  }, [name, required, setRequired]);

  return (
    <ItemContext.Provider
      value={{ name, required, multiple, active, choiceCounterRef }}
    >
      <fieldset
        className={cn(
          "flex flex-col gap-4 border-0 p-0",
          !active && "hidden",
          className,
        )}
      >
        {children}
      </fieldset>
    </ItemContext.Provider>
  );
}

function QuestionnaireTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLLegendElement>) {
  return (
    <legend
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    >
      {children}
    </legend>
  );
}

function QuestionnaireDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

function QuestionnaireChoices({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      {children}
    </div>
  );
}

interface QuestionnaireChoiceProps {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

function QuestionnaireChoice({
  value,
  className,
  children,
}: QuestionnaireChoiceProps) {
  const { values, setValue, shortcuts } = useQuestionnaireContext(
    "QuestionnaireChoice",
  );
  const itemCtx = useItemContext("QuestionnaireChoice");
  const { name, multiple, active, required } = itemCtx;

  const shortcutIndexRef = React.useRef<number | null>(null);
  if (shortcutIndexRef.current === null) {
    shortcutIndexRef.current = itemCtx.choiceCounterRef.current++;
  }
  const shortcutIndex = shortcutIndexRef.current;
  const shortcutLabel =
    shortcuts === "letters"
      ? (SHORTCUT_LETTERS[shortcutIndex] ?? null)
      : shortcuts === "numbers"
        ? String(shortcutIndex + 1)
        : null;

  const currentValue = values[name];
  const checked = multiple
    ? Array.isArray(currentValue) && currentValue.includes(value)
    : currentValue === value;

  const handleChange = React.useCallback(() => {
    if (multiple) {
      const current = Array.isArray(values[name])
        ? (values[name] as string[])
        : [];
      const next = current.includes(value)
        ? current.filter((entry) => entry !== value)
        : [...current, value];
      setValue(name, next);
    } else {
      setValue(name, value);
    }
  }, [multiple, name, setValue, value, values]);

  React.useEffect(() => {
    if (!active || !shortcutLabel) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === shortcutLabel.toLowerCase()) {
        handleChange();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, shortcutLabel, handleChange]);

  return (
    <label
      data-checked={checked ? "true" : undefined}
      className={cn(
        "group relative flex cursor-pointer items-start justify-between gap-3 border border-border transition-colors",
        className,
      )}
    >
      <input
        type={multiple ? "checkbox" : "radio"}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        required={!multiple && Boolean(required)}
        className="sr-only"
      />
      <div className="flex flex-1 flex-col gap-1">{children}</div>
      {shortcutLabel && (
        <span className="shrink-0 rounded border border-current/20 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
          {shortcutLabel}
        </span>
      )}
    </label>
  );
}

function QuestionnaireChoiceDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("block text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </span>
  );
}

function QuestionnaireError({ className }: { className?: string }) {
  const { errors } = useQuestionnaireContext("QuestionnaireError");
  const { name } = useItemContext("QuestionnaireError");
  const message = errors[name];
  if (!message) return null;
  return <p className={cn("text-sm text-destructive", className)}>{message}</p>;
}

function QuestionnaireProgress({ className }: { className?: string }) {
  const { stepIndex, names } = useQuestionnaireContext("QuestionnaireProgress");
  if (names.length === 0) return null;
  return (
    <div className={cn("text-sm text-muted-foreground", className)}>
      Step {stepIndex + 1} of {names.length}
    </div>
  );
}

function QuestionnaireActions({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      {children}
    </div>
  );
}

function QuestionnairePrevious({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { stepIndex, setStepIndex } = useQuestionnaireContext(
    "QuestionnairePrevious",
  );
  if (stepIndex === 0) return null;
  return (
    <button
      type="button"
      onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
      className={cn(
        "inline-flex items-center px-4 py-2 font-medium",
        className,
      )}
    >
      {children ?? "Previous"}
    </button>
  );
}

function QuestionnaireNext({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { stepIndex, setStepIndex, names, values, setError, requiredMap } =
    useQuestionnaireContext("QuestionnaireNext");
  const isLast = stepIndex >= names.length - 1;
  if (isLast) return null;

  const handleClick = () => {
    const currentName = names[stepIndex];
    const isRequired = requiredMap[currentName];
    const value = values[currentName];
    const empty =
      value === undefined || (Array.isArray(value) && value.length === 0);
    if (isRequired && empty) {
      setError(currentName, "Choose an option to continue.");
      return;
    }
    setError(currentName, null);
    setStepIndex((current) => Math.min(names.length - 1, current + 1));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center px-4 py-2 font-medium",
        className,
      )}
    >
      {children ?? "Next"}
    </button>
  );
}

function QuestionnaireSubmit({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { stepIndex, names } = useQuestionnaireContext("QuestionnaireSubmit");
  const isLast = stepIndex >= names.length - 1;
  if (!isLast) return null;
  return (
    <button
      type="submit"
      className={cn(
        "inline-flex items-center px-4 py-2 font-medium",
        className,
      )}
    >
      {children ?? "Submit"}
    </button>
  );
}

/* ---------------------------------------------------------------------- */

/** Inline eyebrow badge (kept local to avoid a separate "badge7" module). */
function EyebrowBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-base uppercase tracking-[0.25em] text-muted-foreground",
        className,
      )}
    >
      {`(${label})`}
    </span>
  );
}

type Button12Tone = "dark" | "primary" | "outline";

interface Button12Props {
  /** Button label (rendered uppercase) */
  label: string;
  /**
   * Compose the rendered element shadcn-style (radix asChild): your element
   * (e.g. a router Link) becomes the root and the button content is injected
   * as its children. Pass the element without children of its own.
   */
  asChild?: boolean;
  /** The element to render when `asChild` is set (e.g. your framework's Link) */
  children?: React.ReactElement;
  /**
   * Fallback link: renders a plain `<a>`. Prefer `asChild` with your
   * framework's Link component for client-side navigation.
   */
  href?: string;
  /** Seal icon (defaults to ArrowUpRight) */
  icon?: LucideIcon;
  /** Surface tone: solid dark (default), solid primary, or bordered outline */
  tone?: Button12Tone;
  /** Click handler (used when there is no href and no asChild) */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Additional classes merged onto the button */
  className?: string;
}

const button12ToneStyles: Record<Button12Tone, { pill: string; seal: string }> =
  {
    dark: {
      pill: "bg-foreground text-background hover:bg-foreground/90",
      seal: "bg-background text-foreground",
    },
    primary: {
      pill: "bg-primary text-primary-foreground hover:bg-primary/90",
      seal: "bg-primary-foreground text-primary",
    },
    outline: {
      pill: "border bg-background text-foreground hover:bg-muted",
      seal: "bg-foreground text-background",
    },
  };

/** Inline pill button with a sliding-label/seal hover effect (kept local to avoid a separate "button12" module). */
function Button12({
  label,
  asChild = false,
  children,
  href,
  icon: Icon = ArrowUpRight,
  tone = "dark",
  onClick,
  className,
}: Button12Props) {
  const styles = button12ToneStyles[tone];

  const classes = cn(
    "group/button12 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full py-2 pl-8 pr-2 text-base font-bold uppercase tracking-wider transition-colors",
    styles.pill,
    className,
  );

  const inner = (
    <>
      {/* Label slides out the bottom while a copy drops in from the top */}
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out motion-safe:group-hover/button12:translate-y-full">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block -translate-y-full transition-transform duration-300 ease-out motion-safe:group-hover/button12:translate-y-0"
        >
          {label}
        </span>
      </span>

      {/* Seal: icon exits the top-right corner as a copy enters from bottom-left */}
      <span
        className={cn(
          "relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
          styles.seal,
        )}
      >
        <Icon className="size-4 transition-transform duration-300 ease-out motion-safe:group-hover/button12:translate-x-[160%] motion-safe:group-hover/button12:-translate-y-[160%]" />
        <Icon
          aria-hidden="true"
          className="absolute size-4 -translate-x-[160%] translate-y-[160%] transition-transform duration-300 ease-out motion-safe:group-hover/button12:translate-x-0 motion-safe:group-hover/button12:translate-y-0"
        />
      </span>
    </>
  );

  if (asChild && React.isValidElement(children)) {
    return (
      <Slot className={classes}>
        {React.cloneElement(children, undefined, inner)}
      </Slot>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}

interface Badge {
  label: string;
}

interface ActionButton {
  label: string;
  href: string;
}

interface ProductImage {
  src: string;
  alt: string;
}

interface FinderChoice {
  value: string;
  label: string;
  description?: string;
  /** Traits this answer asks for. A product scores one point per trait it has. */
  traits?: string[];
  /** Line printed in the result's reasons list when this answer is picked */
  reason?: string;
}

interface FinderQuestion {
  /** Form field name. Must be unique across the finder. */
  name: string;
  title: string;
  description?: string;
  choices?: FinderChoice[];
  /** Renders the choices as checkboxes instead of radios */
  multiple?: boolean;
}

interface Product {
  name: string;
  price: string;
  summary: string;
  image: ProductImage;
  /** Matched against the traits the answers ask for */
  traits?: string[];
  button: ActionButton;
}

interface Ecommerce46Labels {
  previous?: string;
  next?: string;
  submit?: string;
  restart?: string;
  resultTitle?: string;
  reasonsTitle?: string;
}

interface Ecommerce46Props {
  badge?: Badge;
  heading?: string;
  description?: string;
  questions?: FinderQuestion[];
  /** Prints a scoped shortcut on every choice and binds it while the question is active */
  shortcuts?: "letters" | "numbers";
  /** Scored against the answers; the highest score wins, ties go to the first. */
  products?: Product[];
  /** Shown beside the questions, before anything has been answered */
  image?: ProductImage;
  caption?: string;
  labels?: Ecommerce46Labels;
  className?: string;
}

export const ecommerce46Demo: Ecommerce46Props = {
  badge: { label: "Find your bag" },
  heading: "Three questions, one bag.",
  description:
    "Rather than filter twelve bags by six attributes, tell us how you travel. We name one bag and say exactly why it came out on top.",
  shortcuts: "numbers",
  image: {
    src: "https://cdn.21st.dev/assets/mirror/97/97a47e6bf60557715ea3fce16f4064b309a4dd2517739b888c716d4ba5345c71.jpg",
    alt: "A black backpack held up by its handle against a plain background",
  },
  caption:
    "Twelve bags in the range, each one carried loaded before it was signed off. Only one of them is the answer to your particular week.",
  labels: {
    submit: "See my match",
    restart: "Answer again",
    resultTitle: "Your match",
    reasonsTitle: "Why this one",
  },
  questions: [
    {
      name: "trip",
      title: "How long are you usually away?",
      description:
        "The most common trip, not the longest one you have ever taken.",
      choices: [
        {
          value: "day",
          label: "Out and back in a day",
          description: "Laptop, notebook, and lunch.",
          traits: ["compact", "laptop"],
          reason: "Sized for a day out rather than a week away",
        },
        {
          value: "weekend",
          label: "Two or three nights",
          description: "Enough clothes to not do laundry.",
          traits: ["weekend", "expandable"],
          reason: "Holds two or three nights without a second bag",
        },
        {
          value: "week",
          label: "A week or more",
          description: "Packing cubes are involved.",
          traits: ["large", "expandable"],
          reason: "Deep main compartment for a week of packing",
        },
      ],
    },
    {
      name: "carry",
      title: "How do you want to carry it?",
      choices: [
        {
          value: "back",
          label: "On my back",
          traits: ["straps"],
          reason: "Padded harness that takes the weight off one shoulder",
        },
        {
          value: "hand",
          label: "In one hand",
          traits: ["handle", "compact"],
          reason: "Balanced handle, so it hangs level when it is full",
        },
        {
          value: "wheels",
          label: "On wheels",
          traits: ["wheels", "large"],
          reason: "Wheels and a locking handle for long terminals",
        },
      ],
    },
    {
      name: "needs",
      title: "Anything it has to survive?",
      description: "Pick as many as apply.",
      multiple: true,
      choices: [
        {
          value: "rain",
          label: "Rain, regularly",
          traits: ["waterproof"],
          reason: "Coated shell and covered zips for wet platforms",
        },
        {
          value: "overhead",
          label: "Overhead lockers",
          traits: ["cabin"],
          reason: "Within cabin size on every airline we checked",
        },
        {
          value: "kit",
          label: "A camera or tools",
          traits: ["padded"],
          reason: "Padded divider that stays put when the bag is half empty",
        },
      ],
    },
  ],
  products: [
    {
      name: "Halden 18 Daypack",
      price: "$180",
      summary:
        "An eighteen litre pack that keeps its shape empty, with a laptop sleeve that sits off the floor.",
      image: {
        src: "https://cdn.21st.dev/assets/mirror/0a/0aad81e63bb3aeed13685e30d5ad29aeaff866c45fdfc0ace69a4f1aa3bd2a33.jpg",
        alt: "Charcoal daypack standing upright against a plain wall",
      },
      traits: ["compact", "laptop", "straps", "waterproof", "padded", "cabin"],
      button: { label: "See the Halden 18", href: "https://beste.co" },
    },
    {
      name: "Norr Weekender",
      price: "$320",
      summary:
        "A flat-packing weekend bag that expands by six litres when the trip runs long, carried by hand or on the back.",
      image: {
        src: "https://cdn.21st.dev/assets/mirror/cf/cf16286876da6c9351581bbc3e0895b94952e5873f8229e2100bc193df307ae1.jpg",
        alt: "Black weekend bag with tan leather straps resting on a rock",
      },
      traits: ["weekend", "expandable", "handle", "straps", "cabin", "padded"],
      button: { label: "See the Norr Weekender", href: "https://beste.co" },
    },
    {
      name: "Vante 65 Roller",
      price: "$460",
      summary:
        "A sixty-five litre case on sealed wheels, with a compression panel that keeps a week of clothes from moving.",
      image: {
        src: "https://cdn.21st.dev/assets/mirror/6f/6f1f1f4a465d0cbd550216f2038d4618cf5251d0a4c8af4b0e756dc54d948935.jpg",
        alt: "Hard-shell rolling suitcase photographed from the side",
      },
      traits: ["large", "wheels", "expandable", "waterproof"],
      button: { label: "See the Vante 65", href: "https://beste.co" },
    },
  ],
};

export function Ecommerce46({
  badge,
  heading,
  description,
  questions = [],
  shortcuts,
  products = [],
  image,
  caption,
  labels = {},
  className,
}: Ecommerce46Props) {
  const {
    previous: previousLabel,
    next: nextLabel,
    submit: submitLabel,
    restart: restartLabel,
    resultTitle,
    reasonsTitle,
  } = labels;

  const [result, setResult] = useState<{
    product: Product;
    reasons: string[];
  } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const picked: FinderChoice[] = [];
    for (const question of questions) {
      const values = data.getAll(question.name).map((entry) => String(entry));
      for (const value of values) {
        const choice = question.choices?.find((entry) => entry.value === value);
        if (choice) picked.push(choice);
      }
    }

    const wanted = picked.flatMap((choice) => choice.traits ?? []);
    let best: Product | undefined;
    let bestScore = -1;
    for (const product of products) {
      const score = wanted.filter((trait) =>
        product.traits?.includes(trait),
      ).length;
      if (score > bestScore) {
        best = product;
        bestScore = score;
      }
    }

    if (!best) return;
    const winner = best;

    // Only the answers the winning product actually satisfies are worth printing.
    const reasons = picked
      .filter((choice) =>
        (choice.traits ?? []).some((trait) => winner.traits?.includes(trait)),
      )
      .map((choice) => choice.reason)
      .filter((reason): reason is string => Boolean(reason));

    setResult({ product: winner, reasons });
  };

  const restart = () => setResult(null);

  const shownImage = result?.product.image ?? image;

  return (
    <section className={cn("w-full py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-16">
          <div>
            {badge && <EyebrowBadge label={badge.label} />}
            {heading && (
              <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {heading}
              </h2>
            )}
          </div>
          {description && (
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative h-96 overflow-hidden rounded-md bg-muted lg:h-[34rem]">
              {shownImage && (
                <img
                  className="absolute inset-0 size-full object-cover"
                  src={shownImage.src}
                  alt={shownImage.alt}
                />
              )}
            </div>
            {!result && caption && (
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {caption}
              </p>
            )}
            {result && (
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
                <p className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {result.product.name}
                </p>
                <p className="text-xl font-bold tabular-nums text-foreground md:text-2xl">
                  {result.product.price}
                </p>
              </div>
            )}
          </div>

          <div>
            {result ? (
              <>
                {resultTitle && <EyebrowBadge label={resultTitle} />}
                <p className="mt-6 text-xl leading-relaxed text-foreground md:text-2xl">
                  {result.product.summary}
                </p>

                {result.reasons.length > 0 && (
                  <div className="mt-8">
                    {reasonsTitle && (
                      <p className="text-lg font-bold tracking-tight text-foreground">
                        {reasonsTitle}
                      </p>
                    )}
                    <ul className="mt-4 flex flex-col">
                      {result.reasons.map((reason, index) => (
                        <li
                          key={index}
                          className="border-t border-current/10 py-4 text-lg leading-relaxed text-muted-foreground"
                        >
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button12 asChild label={result.product.button.label}>
                    <Link href={result.product.button.href} />
                  </Button12>
                  <Button12
                    label={restartLabel ?? "Answer again"}
                    tone="outline"
                    icon={RotateCcw}
                    onClick={restart}
                  />
                </div>
              </>
            ) : (
              <Questionnaire
                defaultItem={questions[0]?.name}
                shortcuts={shortcuts}
                onSubmit={handleSubmit}
                className="gap-6"
              >
                {questions.length > 0 && (
                  <QuestionnaireProgress className="text-base" />
                )}

                {questions.map((question, index) => (
                  <QuestionnaireItem
                    key={index}
                    name={question.name}
                    required={!question.multiple}
                    multiple={question.multiple}
                  >
                    <QuestionnaireTitle className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                      {question.title}
                    </QuestionnaireTitle>
                    {question.description && (
                      <QuestionnaireDescription className="text-base text-muted-foreground md:text-lg">
                        {question.description}
                      </QuestionnaireDescription>
                    )}
                    <QuestionnaireChoices>
                      {question.choices?.map((choice, choiceIndex) => (
                        <QuestionnaireChoice
                          key={choiceIndex}
                          value={choice.value}
                          className="rounded-md p-4 text-base data-checked:border-foreground"
                        >
                          <span className="font-bold text-foreground">
                            {choice.label}
                          </span>
                          {choice.description && (
                            <QuestionnaireChoiceDescription className="text-base">
                              {choice.description}
                            </QuestionnaireChoiceDescription>
                          )}
                        </QuestionnaireChoice>
                      ))}
                    </QuestionnaireChoices>
                    <QuestionnaireError className="text-base" />
                  </QuestionnaireItem>
                ))}

                <QuestionnaireActions>
                  <QuestionnairePrevious className="cursor-pointer rounded-full text-base">
                    {previousLabel}
                  </QuestionnairePrevious>
                  <QuestionnaireNext className="cursor-pointer rounded-full bg-foreground text-base text-background hover:bg-foreground/90">
                    {nextLabel}
                  </QuestionnaireNext>
                  <QuestionnaireSubmit className="cursor-pointer rounded-full bg-foreground text-base text-background hover:bg-foreground/90">
                    {submitLabel}
                  </QuestionnaireSubmit>
                </QuestionnaireActions>
              </Questionnaire>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecommerce46;
