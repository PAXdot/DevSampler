"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useAnimationControls,
  type PanInfo,
} from "framer-motion";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
} from "@tabler/icons-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ─── Easing ────────────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

/* ─── Context ───────────────────────────────────────────────── */

type CarouselContextValue = {
  carouselId: string;
  orientation: CarouselOrientation;
  index: number;
  count: number;
  loop: boolean;
  direction: number;
  autoplay: boolean;
  autoplayInterval: number;
  select: (next: number) => void;
  next: () => void;
  prev: () => void;
  canPrev: boolean;
  canNext: boolean;
  registerCount: (n: number) => void;
  setIsDragging: (v: boolean) => void;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

// Split out from CarouselContext: isHovering/isDragging only affect autoplay
// progress indicators. Keeping it as its own context means hovering a
// carousel to pause autoplay only re-renders the progress bar / dots that
// actually read it, instead of every compound part (content, nav buttons).
const CarouselAutoplayPauseContext = React.createContext<boolean>(false);

function useCarouselContext() {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) {
    throw new Error("Carousel compound components must be used within <Carousel>");
  }
  return ctx;
}

function useCarouselAutoplayPaused() {
  return React.useContext(CarouselAutoplayPauseContext);
}

function handleTabRovingKeyDown(
  e: React.KeyboardEvent<HTMLButtonElement>,
  isVertical: boolean,
  onActivate: (index: number) => void,
) {
  const tabs = Array.from(
    e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
      '[data-slot="carousel-tab"]',
    ) ?? [],
  );
  const idx = tabs.indexOf(e.currentTarget);
  const nextKey = isVertical ? "ArrowDown" : "ArrowRight";
  const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";

  if (e.key === nextKey) {
    e.preventDefault();
    const next = tabs[(idx + 1) % tabs.length];
    next?.focus();
    onActivate(tabs.indexOf(next));
  } else if (e.key === prevKey) {
    e.preventDefault();
    const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
    prev?.focus();
    onActivate(tabs.indexOf(prev));
  } else if (e.key === "Home") {
    e.preventDefault();
    tabs[0]?.focus();
    onActivate(0);
  } else if (e.key === "End") {
    e.preventDefault();
    tabs[tabs.length - 1]?.focus();
    onActivate(tabs.length - 1);
  }
}

function directionFor(from: number, to: number, count: number, loop: boolean): number {
  if (to === from) return 1;
  if (!loop || count <= 2) return to > from ? 1 : -1;
  const diff = ((to - from) % count + count) % count;
  return diff <= count / 2 ? 1 : -1;
}

/* ─── Root ──────────────────────────────────────────────────── */

export interface CarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  orientation?: CarouselOrientation;
  children: React.ReactNode;
}

export type CarouselOrientation = "horizontal" | "vertical";

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  function Carousel(
    {
      index: indexProp,
      defaultIndex = 0,
      onIndexChange,
      loop = false,
      autoplay = false,
      autoplayInterval = 4000,
      pauseOnHover = true,
      orientation = "horizontal",
      className,
      children,
      onKeyDown,
      ...props
    },
    ref,
  ) {
    const carouselId = React.useId();
    const [count, setCount] = React.useState(0);
    const [internalIndex, setInternalIndex] = React.useState(defaultIndex);
    const [direction, setDirection] = React.useState(1);
    const [isHovering, setIsHovering] = React.useState(false);
    const [isFocusWithin, setIsFocusWithin] = React.useState(false);
    const [isDragging, setIsDragging] = React.useState(false);
    const prefersReducedMotion = useReducedMotion();

    const isControlled = indexProp !== undefined;
    const requestedIndex = isControlled ? indexProp : internalIndex;
    // Slides can be removed while a later one is active. Clamp for render
    // instead of writing the correction back from an effect: every read below
    // goes through `index`, and the next `select()` stores a valid value.
    const index =
      count > 0 ? Math.min(requestedIndex, count - 1) : requestedIndex;

    // Keep uncontrolled state valid as soon as slides disappear. Merely
    // clamping the rendered value leaves the stale index behind, which makes
    // the carousel jump if slides are later added again.
    if (!isControlled && count > 0 && internalIndex > count - 1) {
      setInternalIndex(count - 1);
      setDirection(-1);
    }

    const select = React.useCallback(
      (next: number, dir?: number) => {
        if (count === 0) return;
        const clamped = loop
          ? ((next % count) + count) % count
          : Math.max(0, Math.min(next, count - 1));
        setDirection(dir ?? directionFor(index, clamped, count, loop));
        if (!isControlled) setInternalIndex(clamped);
        onIndexChange?.(clamped);
      },
      [count, index, loop, isControlled, onIndexChange],
    );

    const next = React.useCallback(() => select(index + 1, 1), [select, index]);
    const prev = React.useCallback(() => select(index - 1, -1), [select, index]);

    const canPrev = loop ? count > 1 : index > 0;
    const canNext = loop ? count > 1 : index < count - 1;

    // Controlled state belongs to the parent, so report the clamped index.
    React.useEffect(() => {
      if (isControlled && count > 0 && requestedIndex > count - 1) {
        onIndexChange?.(count - 1);
      }
    }, [count, isControlled, requestedIndex, onIndexChange]);

    // Read the latest index/select through refs inside the autoplay timer so
    // the interval effect below doesn't need `index` as a dependency, a
    // single timer keeps ticking across the whole autoplay session instead
    // of being torn down and recreated on every slide transition.
    const indexRef = React.useRef(index);
    const selectRef = React.useRef(select);
    React.useEffect(() => {
      indexRef.current = index;
      selectRef.current = select;
    });

    React.useEffect(() => {
      if (!autoplay || count <= 1) return;
      if (prefersReducedMotion) return;
      if (pauseOnHover && (isHovering || isFocusWithin || isDragging)) return;
      if (!canNext) return;
      const id = setInterval(() => {
        selectRef.current(indexRef.current + 1, 1);
      }, autoplayInterval);
      return () => clearInterval(id);
    }, [
      autoplay,
      autoplayInterval,
      count,
      canNext,
      isHovering,
      isFocusWithin,
      isDragging,
      pauseOnHover,
      prefersReducedMotion,
    ]);

    const registerCount = React.useCallback((n: number) => setCount(n), []);
    const isAutoplayPaused =
      Boolean(prefersReducedMotion) ||
      (pauseOnHover && (isHovering || isFocusWithin || isDragging));

    const ctx = React.useMemo<CarouselContextValue>(
      () => ({
        carouselId,
        orientation,
        index,
        count,
        loop,
        direction,
        autoplay,
        autoplayInterval,
        select,
        next,
        prev,
        canPrev,
        canNext,
        registerCount,
        setIsDragging,
      }),
      [
        carouselId,
        orientation,
        index,
        count,
        loop,
        direction,
        autoplay,
        autoplayInterval,
        select,
        next,
        prev,
        canPrev,
        canNext,
        registerCount,
      ],
    );

    return (
      <CarouselContext.Provider value={ctx}>
        <CarouselAutoplayPauseContext.Provider value={isAutoplayPaused}>
          <div data-wensity-primitive=""
            ref={ref}
            role="region"
            aria-roledescription="carousel"
            aria-orientation={orientation}
            className={cn("relative", className)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onFocusCapture={() => setIsFocusWithin(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setIsFocusWithin(false);
              }
            }}
            onKeyDown={(e) => {
              const previousKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
              const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
              if (e.key === previousKey) {
                e.preventDefault();
                prev();
              } else if (e.key === nextKey) {
                e.preventDefault();
                next();
              }
              onKeyDown?.(e);
            }}
            {...props}
          >
            {children}
          </div>
        </CarouselAutoplayPauseContext.Provider>
      </CarouselContext.Provider>
    );
  },
);

/* ─── Item ──────────────────────────────────────────────────── */

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function CarouselItem({ className, children, ...props }: CarouselItemProps) {
  return (
    <div className={cn("h-full w-full", className)} {...props}>
      {children}
    </div>
  );
}

/* ─── Content (viewport + drag + directional slide) ───────────── */

const SWIPE_DISTANCE_THRESHOLD = 60;
const SWIPE_VELOCITY_THRESHOLD = 500;

export interface CarouselContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
  draggable?: boolean;
}

export function CarouselContent({
  className,
  children,
  draggable = true,
  ...props
}: CarouselContentProps) {
  const {
    carouselId,
    orientation,
    index,
    count,
    loop,
    direction,
    next,
    prev,
    canPrev,
    canNext,
    setIsDragging,
    registerCount,
  } = useCarouselContext();
  const prefersReducedMotion = useReducedMotion();
  const items = React.useMemo(() => React.Children.toArray(children), [children]);

  React.useEffect(() => {
    registerCount(items.length);
  }, [items.length, registerCount]);

  const active = items[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: orientation === "horizontal" && !prefersReducedMotion ? (dir > 0 ? "14%" : "-14%") : 0,
      y: orientation === "vertical" && !prefersReducedMotion ? (dir > 0 ? "14%" : "-14%") : 0,
      opacity: 0,
    }),
    center: { x: "0%", y: "0%", opacity: 1 },
    exit: (dir: number) => ({
      x: orientation === "horizontal" && !prefersReducedMotion ? (dir > 0 ? "-14%" : "14%") : 0,
      y: orientation === "vertical" && !prefersReducedMotion ? (dir > 0 ? "-14%" : "14%") : 0,
      opacity: 0,
    }),
  };

  function handleDragEnd(_event: PointerEvent, info: PanInfo) {
    setIsDragging(false);
    const { offset, velocity } = info;
    const dragOffset = orientation === "vertical" ? offset.y : offset.x;
    const dragVelocity = orientation === "vertical" ? velocity.y : velocity.x;
    const swipedForward =
      dragOffset < -SWIPE_DISTANCE_THRESHOLD || dragVelocity < -SWIPE_VELOCITY_THRESHOLD;
    const swipedBackward =
      dragOffset > SWIPE_DISTANCE_THRESHOLD || dragVelocity > SWIPE_VELOCITY_THRESHOLD;
    if (swipedForward && (canNext || loop)) next();
    else if (swipedBackward && (canPrev || loop)) prev();
  }

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={count > 0 ? `${index + 1} of ${count}` : undefined}
      className={cn(
        // Keep clipping on one composited surface. Repeating the rounded clip
        // on the translated child can expose a one-pixel seam in Chromium.
        "relative isolate overflow-hidden rounded-[var(--primitive-radius-surface,1rem)] transform-gpu",
        className,
      )}
      {...props}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={`${carouselId}-${index}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: prefersReducedMotion ? 0.12 : 0.28, ease: EASE_OUT }}
          drag={draggable && count > 1 ? (orientation === "vertical" ? "y" : "x") : false}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={prefersReducedMotion ? 0 : 0.65}
          dragTransition={
            prefersReducedMotion
              ? { bounceStiffness: 0, bounceDamping: 1000 }
              : { bounceStiffness: 600, bounceDamping: 40 }
          }
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className={cn(
            "h-full",
            draggable && count > 1 && "cursor-grab active:cursor-grabbing",
          )}
        >
          {active}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Previous / Next controls ─────────────────────────────── */

/* Outline icon-button recipe (matches Button outline + icon size). */
const navButtonClass = cn(
  "flex size-9 items-center justify-center rounded-[var(--primitive-radius-control,0.875rem)] border outline-none",
  "border-[color:var(--border-strong,color-mix(in_srgb,var(--foreground)_16%,transparent))] bg-transparent text-[var(--foreground)]",
  "transition-colors duration-150",
  "hover:border-[color-mix(in_srgb,var(--foreground)_20%,var(--background))] hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
  "active:border-[color-mix(in_srgb,var(--foreground)_26%,var(--background))] active:bg-[color:var(--primitive-surface-active,color-mix(in_srgb,var(--foreground)_8%,transparent))]",
  "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
  "disabled:pointer-events-none disabled:opacity-45",
  "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
);

export type CarouselControlProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
>;

export function CarouselPrevious({ className, ...props }: CarouselControlProps) {
  const { orientation, prev, canPrev } = useCarouselContext();
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.button
      type="button"
      aria-label="Previous slide"
      onClick={prev}
      disabled={!canPrev}
      whileTap={canPrev && !prefersReducedMotion ? { scale: 0.94 } : undefined}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 500, damping: 32 }
      }
      className={cn(navButtonClass, className)}
      {...props}
    >
      {orientation === "vertical" ? (
        <IconChevronUp className="size-4" stroke={1.9} />
      ) : (
        <IconChevronLeft className="size-4" stroke={1.9} />
      )}
    </motion.button>
  );
}

export function CarouselNext({ className, ...props }: CarouselControlProps) {
  const { orientation, next, canNext } = useCarouselContext();
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.button
      type="button"
      aria-label="Next slide"
      onClick={next}
      disabled={!canNext}
      whileTap={canNext && !prefersReducedMotion ? { scale: 0.94 } : undefined}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 500, damping: 32 }
      }
      className={cn(navButtonClass, className)}
      {...props}
    >
      {orientation === "vertical" ? (
        <IconChevronDown className="size-4" stroke={1.9} />
      ) : (
        <IconChevronRight className="size-4" stroke={1.9} />
      )}
    </motion.button>
  );
}

/* ─── Autoplay progress animation (shared by dots + progress bar) ───── */

// Drives a 0→1 `scaleX` fill timed to `autoplayInterval`, resetting whenever
// `resetKey` changes while `active`, and pausing without resetting when
// `isAutoplayPaused` is true. Shared by AutoplayDotFill and CarouselProgress
// so the two indicators can't drift out of sync with each other.
function useAutoplayProgress(
  active: boolean,
  resetKey: unknown,
  autoplayInterval: number,
  isAutoplayPaused: boolean,
) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (!active) return;
    controls.set({ scaleX: 0 });

  }, [active, resetKey, controls]);

  React.useEffect(() => {
    if (!active) return;
    if (isAutoplayPaused) {
      controls.stop();
      return;
    }
    controls.start({
      scaleX: 1,
      transition: { duration: prefersReducedMotion ? 0 : autoplayInterval / 1000, ease: "linear" },
    });

  }, [active, resetKey, isAutoplayPaused, autoplayInterval, controls, prefersReducedMotion]);

  return controls;
}

/* ─── Dots ──────────────────────────────────────────────────── */

// When autoplay is on, only the active indicator expands into a progress
// track. Completed slides return to solid dots; upcoming slides stay muted.
function AutoplayDotFill({ isActive, isComplete }: { isActive: boolean; isComplete: boolean }) {
  const { autoplayInterval } = useCarouselContext();
  const isAutoplayPaused = useCarouselAutoplayPaused();
  const controls = useAutoplayProgress(isActive, isActive, autoplayInterval, isAutoplayPaused);

  if (isActive) {
    return (
      <span className="relative block h-1 w-6 overflow-hidden rounded-full bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]">
        <motion.span
          animate={controls}
          initial={{ scaleX: 0 }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 rounded-full bg-[color:var(--primitive-control-solid,var(--primary))]"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "block size-1.5 rounded-full",
        isComplete
          ? "bg-[color:var(--primitive-control-solid,var(--primary))]"
          : "bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
      )}
    />
  );
}

export type CarouselDotsProps = React.HTMLAttributes<HTMLDivElement>;

export function CarouselDots({ className, ...props }: CarouselDotsProps) {
  const { carouselId, orientation, index, count, autoplay, select } = useCarouselContext();
  const isVertical = orientation === "vertical";
  const prefersReducedMotion = useReducedMotion();

  if (count <= 1) return null;

  const dotButtonClass =
    "flex outline-none rounded-full focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  if (autoplay) {
    return (
      <div
        role="tablist"
        aria-label="Slide navigation"
        className={cn("flex items-center justify-center gap-1.5", className)}
        {...props}
      >
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            data-slot="carousel-tab"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={i === index ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => handleTabRovingKeyDown(e, isVertical, select)}
            className={dotButtonClass}
          >
            <AutoplayDotFill isActive={i === index} isComplete={i < index} />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      role="tablist"
      aria-label="Slide navigation"
      className={cn("flex items-center justify-center gap-1.5", className)}
      {...props}
    >
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === index;
        return (
          <button
            key={i}
            type="button"
            data-slot="carousel-tab"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => handleTabRovingKeyDown(e, isVertical, select)}
            className={cn("relative flex h-4 w-4 items-center justify-center", dotButtonClass)}
          >
            <span className="relative h-1.5 w-1.5 overflow-hidden rounded-full bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]">
              {isActive && (
                <motion.span
                  layoutId={prefersReducedMotion ? undefined : `${carouselId}-active-dot`}
                  className="absolute inset-0 rounded-full bg-[color:var(--primitive-control-solid,var(--primary))]"
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { type: "spring", duration: 0.35, bounce: 0.15 }
                  }
                />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Thumbnails ────────────────────────────────────────────── */

export interface CarouselThumbnailsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: React.ReactNode;
}

export function CarouselThumbnails({ className, children, ...props }: CarouselThumbnailsProps) {
  const { orientation, index, select } = useCarouselContext();
  const isVertical = orientation === "vertical";
  const items = React.Children.toArray(children);

  return (
    <div
      role="tablist"
      aria-label="Slide thumbnails"
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {items.map((child, i) => {
        const isActive = i === index;
        return (
          <button
            key={i}
            type="button"
            data-slot="carousel-tab"
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${i + 1}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => handleTabRovingKeyDown(e, isVertical, select)}
            className={cn(
              "relative shrink-0 overflow-hidden rounded-[var(--primitive-radius-control-sm,0.625rem)] border outline-none transition-colors duration-150",
              "focus-visible:ring-2 focus-visible:ring-[color:var(--primitive-ring,color-mix(in_srgb,var(--foreground)_45%,transparent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
              isActive
                ? "border-[color:var(--primitive-control-solid,var(--primary))] ring-1 ring-[color:var(--primitive-control-solid,var(--primary))]"
                : "border-[var(--border)] opacity-60 hover:opacity-90 hover:border-[color:var(--border-strong,color-mix(in_srgb,var(--foreground)_16%,transparent))] hover:bg-[color:var(--primitive-surface-hover,color-mix(in_srgb,var(--foreground)_4%,transparent))]",
            )}
          >
            {child}
          </button>
        );
      })}
    </div>
  );
}

/* ─── Progress (autoplay timing indicator) ─────────────────── */

export type CarouselProgressProps = React.HTMLAttributes<HTMLDivElement>;

export function CarouselProgress({ className, ...props }: CarouselProgressProps) {
  const { index, count, autoplay, autoplayInterval } = useCarouselContext();
  const isAutoplayPaused = useCarouselAutoplayPaused();
  const active = autoplay && count > 1;
  const controls = useAutoplayProgress(active, index, autoplayInterval, isAutoplayPaused);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-0.5 w-full overflow-hidden rounded-full bg-[color:var(--primitive-surface-selected,color-mix(in_srgb,var(--foreground)_6%,transparent))]",
        className,
      )}
      {...props}
    >
      <motion.div
        animate={controls}
        initial={{ scaleX: 0 }}
        style={{ transformOrigin: "left" }}
        className="h-full w-full rounded-full bg-[color:var(--primitive-control-solid,var(--primary))]"
      />
    </div>
  );
}
