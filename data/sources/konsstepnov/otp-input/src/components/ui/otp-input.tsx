"use client";

import { type ClassValue, clsx } from "clsx";
import { CircleAlert, CircleCheck } from "lucide-react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import {
  type ChangeEvent,
  type ClipboardEvent,
  type MouseEvent,
  type SyntheticEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const reducesMotion = () => !!window.matchMedia?.(REDUCED_MOTION).matches;
/** Follows the setting while mounted (Motion's own hook reads it once). */
function watchMotion(change: () => void) {
  const query = window.matchMedia?.(REDUCED_MOTION);
  query?.addEventListener("change", change);
  return () => query?.removeEventListener("change", change);
}

export type OtpStatus = "idle" | "error" | "success";

export type OtpInputProps = {
  /** Number of cells, 1–12 (rounded, clamped; NaN gives 6). Default 6. */
  length?: number;
  /** The code, when the parent holds it (with `onValueChange`). */
  value?: string;
  /** The first code, when the component holds it. */
  defaultValue?: string;
  /** Every change of the code, digits only. */
  onValueChange?: (value: string) => void;
  /** The whole code, each time a change leaves every cell filled. */
  onComplete?: (code: string) => void;
  /** `error` shakes the row once and edges it red; `success` locks the code and lights it up. */
  status?: OtpStatus;
  /** Shown under the cells and read out: a refusal's reason, "Verified", "Checking…". */
  message?: string;
  /** Dots instead of digits, and a password field for screen readers. */
  mask?: boolean;
  disabled?: boolean;
  /** The field's id, for a `<label htmlFor>`; or name it with `aria-label`. */
  id?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
  className?: string;
};

type InputChange = ChangeEvent<HTMLInputElement>;
type InputEvent = SyntheticEvent<HTMLInputElement>;
type InputMouse = MouseEvent<HTMLInputElement>;
type InputPaste = ClipboardEvent<HTMLInputElement>;

const NON_DIGITS = /\D/g;
const INSTANT = { duration: 0 } as const;
/** Swaps in place (a digit, the caret's ring) are short tweens: they never trail behind typing. */
const SWAP = { duration: 0.18, ease: [0.22, 1, 0.36, 1] } as const;
const BLINK = { duration: 1.1, repeat: Number.POSITIVE_INFINITY };
const SHAKE = { x: [0, -8, 8, -5, 5, 0] };
const CELL =
  "relative flex aspect-[5/6] w-12 min-w-0 items-center justify-center rounded-lg border border-input bg-background font-semibold text-foreground text-xl tabular-nums shadow-xs transition-colors duration-200";
const RING =
  "pointer-events-none absolute -inset-px rounded-lg border-2 border-ring ring-4 ring-ring/20 group-data-[status=error]/otp:border-destructive group-data-[status=error]/otp:ring-destructive/15";
const ROOT = "group/otp flex flex-col gap-2 has-disabled:opacity-50";

/** Digits of a typed or pasted code (spaces and dashes dropped), at most `length` of them. */
export const cleanCode = (value: string, length: number): string =>
  value.replace(NON_DIGITS, "").slice(0, length);

const selectionOf = (field: HTMLInputElement) => ({
  end: field.selectionEnd ?? field.value.length,
  start: field.selectionStart ?? field.value.length,
});

/** The cell under a point of the screen: the one it is over, else the nearest. */
function cellAt(row: Element | null, x: number) {
  const cells = row?.querySelectorAll('[data-slot="otp-cell"]') ?? [];
  const away = [...cells].map((cell) => {
    const box = cell.getBoundingClientRect();
    return Math.max(box.left - x, 0, x - box.right);
  });
  return Math.max(away.indexOf(Math.min(...away)), 0);
}

/**
 * A one-time code as a row of cells over one real field, so typing, paste, autofill, the numeric
 * keyboard and screen readers work as on any field; the cells draw its value, caret and selection.
 */
export function OtpInput({
  length = 6,
  value,
  defaultValue = "",
  onValueChange,
  onComplete,
  status = "idle",
  message,
  mask = false,
  disabled = false,
  id,
  "aria-label": ariaLabel,
  "aria-describedby": describedBy,
  className,
}: OtpInputProps) {
  const size = Math.min(Math.max(Math.round(length), 1), 12) || 6;
  // The server cannot know it: hydration starts with motion, then follows the setting.
  const reduced = useSyncExternalStore(watchMotion, reducesMotion, () => false);
  const ownId = useId();
  const [own, setOwn] = useState(() => cleanCode(defaultValue, size));
  const code = cleanCode(value ?? own, size);
  const [isFocused, setFocused] = useState(false);
  const [selection, setSelection] = useState({ end: 0, start: 0 });
  const [row, animate] = useAnimate();
  const pressedAt = useRef(null as number | null);
  const isError = status === "error";
  const isLocked = status === "success";

  // A new refusal shakes the row once; a shake under way ends at rest when motion is reduced.
  const shownStatus = useRef(status);
  useEffect(() => {
    const before = shownStatus.current;
    shownStatus.current = status;
    if (!isError || before === "error" || reduced || !row.current) {
      return;
    }
    const shake = animate(row.current, SHAKE, { duration: 0.4 });
    return () => shake.complete();
  }, [animate, isError, reduced, row, status]);

  const onInput = useCallback(
    (event: InputChange) => {
      const field = event.currentTarget;
      const { selectionEnd, selectionStart, value: raw } = field;
      const caret = selectionStart ?? raw.length;
      // Cleaned in place, so the caret keeps its digits; in a full code a digit types over the next.
      const before = raw.slice(0, caret).replace(NON_DIGITS, "");
      let after = raw.slice(caret).replace(NON_DIGITS, "");
      const over = before.length + after.length - size;
      if (over > 0 && selectionStart === selectionEnd) {
        after = after.slice(over);
      }
      const next = cleanCode(before + after, size);
      if (next !== raw) {
        const at = Math.min(before.length, next.length);
        field.value = next;
        field.setSelectionRange(at, at);
      }
      const edited = selectionOf(field);
      setSelection(edited);
      if (next === code) {
        return;
      }
      if (value === undefined) {
        setOwn(next);
      }
      onValueChange?.(next);
      if (next.length === size) {
        onComplete?.(next);
      }
      // A parent that refuses or reshapes it leaves React's caret at the end; once React is done
      // the caret goes back where it was (refused) or where the edit left it (reshaped).
      const fit = (at: number) => Math.min(at, field.value.length);
      queueMicrotask(() => {
        if (field.value !== next && document.activeElement === field) {
          const back = field.value === code ? selection : edited;
          field.setSelectionRange(fit(back.start), fit(back.end));
          setSelection(selectionOf(field));
        }
      });
    },
    [code, onComplete, onValueChange, selection, size, value]
  );
  /** A whole code pasted replaces what was typed, wherever the caret was; a part goes there. */
  const onPaste = useCallback(
    (event: InputPaste) => {
      const { clipboardData, currentTarget: field } = event;
      if (cleanCode(clipboardData.getData("text"), size).length === size) {
        field.setSelectionRange(0, field.value.length);
      }
    },
    [size]
  );
  const follow = useCallback((event: InputEvent) => {
    setFocused(event.type !== "blur");
    setSelection(selectionOf(event.currentTarget));
  }, []);
  const press = useCallback(
    (event: InputMouse) => {
      pressedAt.current = cellAt(row.current, event.clientX);
    },
    [row]
  );
  const onClick = useCallback(
    (event: InputMouse) => {
      const from = pressedAt.current;
      pressedAt.current = null;
      // A double click keeps the field's own selection (all of it); a click from a label, nothing.
      if (from === null || event.detail !== 1) {
        return;
      }
      const field = event.currentTarget;
      const to = cellAt(row.current, event.clientX);
      const typed = field.value.length;
      const first = Math.min(from, to, typed);
      const last = Math.min(Math.max(from, to) + 1, typed);
      field.setSelectionRange(first < last ? first : typed, last);
      setSelection(selectionOf(field));
    },
    [row]
  );

  const start = Math.min(selection.start, code.length);
  const end = Math.min(selection.end, code.length);
  const isRange = isFocused && end > start;
  const caret = Math.min(start, size - 1);
  const middle = size >= 6 && size % 2 === 0 ? size / 2 : -1;
  const messageId = `${ownId}-message`;
  const Icon = isError ? CircleAlert : CircleCheck;

  const cells = Array.from({ length: size }, (_, cell) => {
    const digit = code[cell] ?? "";
    const isActive = isFocused && !isRange && cell === caret;
    const isSelected = isRange && cell >= start && cell < end;
    const glyph = mask ? "•" : digit;
    return (
      <motion.span
        // Accepted, the cells light up in a wave from the first to the last.
        animate={{ scale: isLocked ? [1, 1.08, 1] : 1 }}
        className={cn(
          CELL,
          cell === middle && "ml-2 sm:ml-3",
          digit && "border-foreground/25",
          isSelected && "border-ring bg-primary/10 outline-hidden",
          isError && "border-destructive",
          isLocked && "border-primary bg-primary/10"
        )}
        data-active={isActive || undefined}
        data-selected={isSelected || undefined}
        data-slot="otp-cell"
        initial={false}
        // biome-ignore lint/suspicious/noArrayIndexKey: a cell is its place in the code
        key={`${cell}-${reduced}`}
        transition={reduced ? INSTANT : { delay: cell * 0.05, duration: 0.4 }}
      >
        {isActive ? (
          // One ring, glided from cell to cell; a border, so forced colours paint it.
          <motion.span
            className={RING}
            data-slot="otp-ring"
            layoutId={`${ownId}-ring`}
            transition={reduced ? INSTANT : SWAP}
          />
        ) : null}
        <AnimatePresence initial={false} mode="popLayout">
          {digit ? (
            <motion.span
              animate={{ opacity: 1, scale: 1, y: 0 }}
              data-slot={mask ? "otp-dot" : undefined}
              exit={{ opacity: 0, scale: 0.5 }}
              initial={reduced ? false : { opacity: 0, scale: 0.5, y: 6 }}
              key={mask ? "dot" : digit}
              transition={reduced ? INSTANT : SWAP}
            >
              {glyph}
            </motion.span>
          ) : null}
        </AnimatePresence>
        {isActive && !digit ? (
          <motion.span
            animate={{ opacity: reduced ? 1 : [1, 1, 0, 0] }}
            className="absolute h-1/2 border-foreground border-l"
            data-slot="otp-caret"
            transition={reduced ? INSTANT : BLINK}
          />
        ) : null}
      </motion.span>
    );
  });

  return (
    <div
      className={cn(ROOT, className)}
      data-slot="otp-input"
      data-status={status}
    >
      <div className="relative w-fit max-w-full">
        <div
          aria-hidden="true"
          className="flex items-center gap-1.5 sm:gap-2"
          data-slot="otp-cells"
          ref={row}
        >
          {cells}
        </div>
        <input
          aria-describedby={[messageId, describedBy].filter(Boolean).join(" ")}
          aria-invalid={isError || undefined}
          aria-label={ariaLabel}
          autoComplete="one-time-code"
          autoCorrect="off"
          className="absolute inset-0 size-full cursor-text rounded-lg text-base opacity-0 disabled:cursor-not-allowed"
          disabled={disabled}
          id={id}
          inputMode="numeric"
          onBlur={follow}
          onChange={onInput}
          onClick={onClick}
          onFocus={follow}
          onMouseDown={press}
          onPaste={onPaste}
          onSelect={follow}
          readOnly={isLocked}
          spellCheck={false}
          type={mask ? "password" : "text"}
          value={code}
        />
      </div>
      <p
        aria-live="polite"
        className={cn(
          "flex min-h-5 items-start gap-1.5 text-sm",
          isError ? "text-destructive" : !isLocked && "text-muted-foreground"
        )}
        data-slot="otp-message"
        id={messageId}
      >
        {message && status !== "idle" ? (
          <Icon
            aria-hidden="true"
            className={cn("mt-0.5 size-4 shrink-0", isLocked && "text-primary")}
          />
        ) : null}
        {message}
      </p>
    </div>
  );
}

export default OtpInput;
