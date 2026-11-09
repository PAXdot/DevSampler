"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* ==========================================================================
   TestimonialSection

   A heading block above a scrollable row of flat pastel testimonial cards.
   Each card carries a portrait, a name, a role and a star rating; pressing
   its toggle expands that card in place to reveal the quote. Only one card
   is open at a time, so the row never turns into a wall of text.

   The track fades out against the page background on whichever side still
   has cards hidden past the edge, which reads as "there is more over here"
   without painting a hard band of colour over the design.

   Corners use `corner-shape: squircle` where it is supported, giving the
   continuous iOS curve, and fall back to a plain radius everywhere else.
   ========================================================================== */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Card fills. One flat pastel each, kept light so dark text sits easily on it. */
export const TESTIMONIAL_TONES = {
  butter: "#fff3b8",
  mint: "#dcf0dd",
  lilac: "#e4d5fb",
  peach: "#fde0c8",
  sky: "#d6e2ee",
} as const;

export type TestimonialTone = keyof typeof TESTIMONIAL_TONES;

const TONE_ORDER: TestimonialTone[] = ["butter", "mint", "lilac", "peach", "sky"];

/** iOS style continuous corners, degrading to a plain radius. */
const SQUIRCLE = "[corner-shape:squircle]";

export interface Testimonial {
  /** Stable key. Falls back to the name. */
  id?: string;
  /** Person's name, shown along the bottom of the card. */
  name: string;
  /** Job title or team. */
  role: string;
  /** The testimonial itself, revealed on expand. */
  quote: string;
  /** Score shown top right, e.g. 4.5. Rendered as "4.5/5". */
  rating?: number;
  /** Top of the rating scale. Default 5. */
  ratingMax?: number;
  /** Optional node for the top right slot. Replaces the rating when given. */
  company?: React.ReactNode;
  /** Portrait URL. Falls back to an illustration drawn from the name. */
  avatar?: string;
  /** Card fill. Defaults to cycling through the palette. */
  tone?: TestimonialTone;
}

export interface TestimonialSectionProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "title"
  > {
  items: Testimonial[];
  /** Small line above the heading. Pass null to hide it. */
  eyebrow?: React.ReactNode;
  /** Section heading. */
  title?: React.ReactNode;
  /** Supporting line under the heading. */
  description?: React.ReactNode;
  /** Index of the card open on first render. `null` for all closed. */
  defaultOpenIndex?: number | null;
  /** Accessible name for the scroll region. */
  label?: string;
}

const PANEL_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 32,
  mass: 0.8,
} as const;

const ICON_SPRING = {
  type: "spring",
  stiffness: 420,
  damping: 26,
  mass: 0.6,
} as const;

/** Where the fade starts, as a share of the track width. */
const FADE = "7%";

export const TestimonialSection = React.forwardRef<
  HTMLElement,
  TestimonialSectionProps
>(function TestimonialSection(
  {
    items,
    eyebrow = "Testimonials",
    title = "Loved by the teams we build with",
    description = "A few words from the founders, marketers and product leads we have shipped work with.",
    defaultOpenIndex = null,
    label = "Testimonials",
    className,
    ...props
  },
  ref,
) {
  const [openId, setOpenId] = React.useState<string | null>(() => {
    const seed = defaultOpenIndex == null ? null : items[defaultOpenIndex];
    return seed ? seed.id ?? seed.name : null;
  });

  const trackRef = React.useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(true);
  const reduceMotion = useReducedMotion();

  const syncEdges = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  React.useEffect(() => {
    syncEdges();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(syncEdges);
    ro.observe(el);
    return () => ro.disconnect();
  }, [syncEdges, items.length]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-testimonial-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 12 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: reduceMotion ? "auto" : "smooth" });
  };

  /*
    The mask fades the track into whatever sits behind the section, so it
    works on any background instead of only on a colour we hard code. Each
    side turns off once you reach it, so no card is ever dimmed for nothing.
  */
  const stops = [
    `transparent 0%, #000 ${atStart ? "0%" : FADE}`,
    `#000 ${atEnd ? "100%" : `calc(100% - ${FADE})`}, transparent 100%`,
  ].join(", ");
  const mask =
    atStart && atEnd ? undefined : `linear-gradient(to right, ${stops})`;

  return (
    <section
      ref={ref}
      className={cn("w-full text-neutral-950 dark:text-neutral-50", className)}
      {...props}
    >
      {(eyebrow || title || description) && (
        <header className="mb-8 max-w-xl">
          {eyebrow && (
            <p className="m-0 text-[12px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="m-0 mt-3 text-[28px] font-medium leading-[1.15] tracking-[-0.02em]">
              {title}
            </h2>
          )}
          {description && (
            <p className="m-0 mt-3 text-[14px] font-normal leading-[1.5] text-neutral-500 dark:text-neutral-400">
              {description}
            </p>
          )}
        </header>
      )}

      <div
        ref={trackRef}
        onScroll={syncEdges}
        role="group"
        aria-label={label}
        tabIndex={0}
        style={
          mask
            ? ({
                maskImage: mask,
                WebkitMaskImage: mask,
              } as React.CSSProperties)
            : undefined
        }
        className={cn(
          "flex items-start gap-3 overflow-x-auto scroll-smooth pb-2",
          "snap-x snap-mandatory",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/15",
        )}
      >
        {items.map((item, i) => {
          const id = item.id ?? item.name;
          const tone = item.tone ?? TONE_ORDER[i % TONE_ORDER.length];
          return (
            <Card
              key={id}
              item={item}
              tone={tone}
              open={openId === id}
              onToggle={() => setOpenId((cur) => (cur === id ? null : id))}
            />
          );
        })}
      </div>

      {/* controls sit under the track, on the right */}
      <div className="mt-5 flex items-center justify-end gap-2">
        <NavButton
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          label="Previous testimonials"
        >
          <Arrow className="rotate-180" />
        </NavButton>
        <NavButton
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          label="Next testimonials"
        >
          <Arrow />
        </NavButton>
      </div>
    </section>
  );
});

function Card({
  item,
  tone,
  open,
  onToggle,
}: {
  item: Testimonial;
  tone: TestimonialTone;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = React.useId();
  const fill = TESTIMONIAL_TONES[tone];

  return (
    <article
      data-testimonial-card
      style={{ backgroundColor: fill }}
      className={cn(
        "w-[320px] shrink-0 snap-start overflow-hidden rounded-[12px] p-4 text-neutral-950",
        SQUIRCLE,
      )}
    >
      {/* portrait and rating */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "h-[58px] w-[56px] shrink-0 overflow-hidden rounded-[8px]",
            SQUIRCLE,
          )}
        >
          {item.avatar ? (
            <img
              src={item.avatar}
              alt=""
              draggable={false}
              className="h-full w-full object-cover"
            />
          ) : (
            <TestimonialAvatar seed={item.name} className="h-full w-full" />
          )}
        </div>

        <div className="flex items-center gap-1 pt-1">
          {item.company ??
            (item.rating != null && (
              <>
                <Star />
                <span className="text-[12px] font-medium tabular-nums text-neutral-900/75">
                  {item.rating}/{item.ratingMax ?? 5}
                </span>
              </>
            ))}
        </div>
      </div>

      {/* identity and toggle */}
      <div className="mt-7 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="m-0 truncate text-[13px] font-medium leading-tight">
            {item.name}
          </p>
          <p className="m-0 truncate text-[11.5px] font-normal leading-tight opacity-60">
            {item.role}
          </p>
        </div>

        <motion.button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? `Hide ${item.name}'s quote` : `Read ${item.name}'s quote`}
          initial={false}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          transition={ICON_SPRING}
          style={{ ["--tw-ring-offset-color" as string]: fill }}
          className={cn(
            "grid h-[26px] w-[26px] shrink-0 place-items-center rounded-[8px] bg-neutral-900 text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 focus-visible:ring-offset-2",
            SQUIRCLE,
          )}
        >
          <motion.span
            className="grid place-items-center"
            animate={{ rotate: open ? 135 : 0 }}
            transition={ICON_SPRING}
          >
            <Plus />
          </motion.span>
        </motion.button>
      </div>

      {/* quote */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={PANEL_SPRING}
            className="overflow-hidden"
          >
            <p className="m-0 pt-5 text-[15px] font-medium leading-[1.4] tracking-[-0.005em] text-neutral-900">
              &ldquo;{item.quote}&rdquo;
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function NavButton({
  onClick,
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      initial={false}
      whileHover={disabled ? undefined : { scale: 1.08 }}
      whileTap={disabled ? undefined : { scale: 0.94 }}
      transition={ICON_SPRING}
      className={cn(
        "grid h-8 w-8 place-items-center rounded-[10px] border border-black/[0.07] bg-white",
        "text-neutral-500 shadow-[0_1px_2px_rgb(0_0_0/0.06)] transition-colors",
        "enabled:hover:text-neutral-900 disabled:opacity-35",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20",
        SQUIRCLE,
      )}
    >
      {children}
    </motion.button>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="h-[15px] w-[15px] text-neutral-900">
      <path
        fill="currentColor"
        d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.6Z"
      />
    </svg>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cn("h-[15px] w-[15px]", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

function Plus() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Illustrated avatar

   Drawn inline rather than fetched, so a card never shows a broken image and
   the component pulls in nothing at runtime. The variant is picked from the
   name, so the same person always gets the same portrait. Pass `avatar` to
   use a real photograph instead.
   -------------------------------------------------------------------------- */

const SKIN = ["#f4d9c0", "#e8b894", "#cf9367", "#a2673f", "#79482a"];
const HAIR = ["#2b2622", "#6b4423", "#a8552c", "#d9a441", "#5c5c5c", "#171717"];
const SHIRT = ["#6478e4", "#df6072", "#3fa66a", "#e1a35b", "#8a63d2", "#3f9fb3"];
const BACKDROP = ["#eef1f4", "#f2eee9", "#eaf1ee", "#f1edf5", "#f3f0e8"];

function hash(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/** Six hair shapes, drawn over the head. */
function Hair({ variant, fill }: { variant: number; fill: string }) {
  switch (variant % 6) {
    case 0: // short crop
      return <path d="M27 44c0-14 10-22 23-22s23 8 23 22c0-6-8-9-23-9s-23 3-23 9Z" fill={fill} />;
    case 1: // coils
      return (
        <g fill={fill}>
          <circle cx="34" cy="28" r="9" />
          <circle cx="50" cy="23" r="10" />
          <circle cx="66" cy="28" r="9" />
          <circle cx="28" cy="40" r="7" />
          <circle cx="72" cy="40" r="7" />
        </g>
      );
    case 2: // long, past the shoulders
      return (
        <path
          d="M26 46c0-16 11-24 24-24s24 8 24 24v30c0 4-4 6-7 4 2-14 1-24-1-30-4 4-11 6-16 6s-12-2-16-6c-2 6-3 16-1 30-3 2-7 0-7-4V46Z"
          fill={fill}
        />
      );
    case 3: // bun
      return (
        <g fill={fill}>
          <circle cx="50" cy="15" r="8" />
          <path d="M27 44c0-14 10-22 23-22s23 8 23 22c0-7-9-11-23-11s-23 4-23 11Z" />
        </g>
      );
    case 4: // swept fringe
      return <path d="M26 47c0-15 11-25 24-25s24 10 24 25c-2-9-9-14-18-14-6 0-10 2-16 6-5 3-10 5-14 8Z" fill={fill} />;
    default: // bob
      return (
        <path
          d="M26 47c0-16 11-25 24-25s24 9 24 25v12c0 3-4 4-6 2 1-8 1-14 0-18-5 4-11 6-18 6s-13-2-18-6c-1 4-1 10 0 18-2 2-6 1-6-2V47Z"
          fill={fill}
        />
      );
  }
}

export function TestimonialAvatar({
  seed,
  className,
}: {
  seed: string;
  className?: string;
}) {
  const h = hash(seed);
  const skin = SKIN[h % SKIN.length];
  const hair = HAIR[(h >> 3) % HAIR.length];
  const shirt = SHIRT[(h >> 6) % SHIRT.length];
  const backdrop = BACKDROP[(h >> 9) % BACKDROP.length];
  const variant = h >> 12;
  const shade = `color-mix(in srgb, ${skin} 86%, #000)`;

  return (
    <svg viewBox="0 0 100 106" aria-hidden className={className}>
      <rect width="100" height="106" fill={backdrop} />
      {/* shoulders */}
      <path d="M12 106c0-23 17-34 38-34s38 11 38 34Z" fill={shirt} />
      {/* collar */}
      <path d="M42 73h16l-8 10Z" fill={backdrop} opacity="0.5" />
      {/* neck */}
      <path d="M42 60h16v14a8 8 0 0 1-16 0Z" fill={shade} />
      {/* ears */}
      <circle cx="27" cy="47" r="4.5" fill={skin} />
      <circle cx="73" cy="47" r="4.5" fill={skin} />
      {/* head */}
      <ellipse cx="50" cy="45" rx="22" ry="24.5" fill={skin} />
      <Hair variant={variant} fill={hair} />
      {/* face */}
      <ellipse cx="42" cy="46" rx="1.9" ry="2.4" fill="#2b2622" />
      <ellipse cx="58" cy="46" rx="1.9" ry="2.4" fill="#2b2622" />
      <path
        d="M44 54c2 2.4 10 2.4 12 0"
        stroke="#2b2622"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

export default TestimonialSection;

export { TestimonialSection as Component };
