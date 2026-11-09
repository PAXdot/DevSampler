"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, CornerDownRight, Crown, Inbox, Lock, MoreHorizontal, Undo2, X } from "lucide-react";

/* ==========================================================================
   Self-contained build for 21st.dev.

   Composed by scripts/compose-publish.mjs from:
     avatar, role-chip, menu, access-request-inbox

   Edit src/ and re-run the script — changes made in this file are lost.
   ========================================================================== */


/* ------------------------------------------------------ inlined from lib --
 *  Inlined by scripts/build-shapes.mjs so this file stands alone.
 *  Edit src/lib/ and rebuild — changes made here are overwritten.
 * ------------------------------------------------------------------------ */

/**
 * Squircle corners — continuous curvature rather than a circular arc, the way
 * iOS and Figma draw them. Progressive: browsers without `corner-shape` fall
 * back to the plain rounded corner the radius already specifies.
 */
const SQUIRCLE = "[corner-shape:squircle]";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * The interface type scale, in pixels. Small and tight: these are product
 * surfaces, not reading surfaces, so the steps are half-pixels near the bottom
 * where the difference between a label and a caption actually matters.
 */
const TYPE = {
  /** Dialog titles, primary headings. */
  title: 15,
  /** Row titles, button labels, anything you read first. */
  body: 13.5,
  /** Secondary body — descriptions that sit under a title. */
  sub: 13,
  /** Dense rows, table cells. */
  dense: 12.5,
  /** Metadata: timestamps, file sizes, counts. */
  meta: 11.5,
  /** Chips and pills. */
  chip: 11,
  /** Uppercase eyebrows and the smallest legible label. */
  micro: 10.5,
} as const;

/**
 * Inter for the interface. Load the face once in your app — the components
 * never fetch it — and the system stack keeps them legible until it arrives.
 */
const FONT_STACK =
  '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

/**
 * A hairline inset ring. Used instead of `border` so the edge never changes an
 * element's box size, which keeps rows from shifting by a pixel on hover.
 */
const EDGE = "ring-1 ring-inset ring-black/[0.12] dark:ring-white/[0.16]";

/**
 * The focus ring. Applied on `:focus-visible` only, so a mouse click never
 * paints a ring but a Tab key always does.
 */
const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/25 dark:focus-visible:ring-white/30";

/**
 * Durations in seconds, for the tween cases where a spring is wrong — opacity
 * crossfades and colour transitions, which should not overshoot.
 */
const DURATION = {
  /** Hover and press feedback. */
  fast: 0.12,
  /** Enter and exit of small elements. */
  base: 0.18,
  /** Panels, dialogs, anything large. */
  slow: 0.26,
} as const;

/**
 * Danger is `red`, not `rose`. Rose reads as pink against the neutral greys
 * used everywhere else, which makes a destructive action look decorative.
 */
const DANGER = {
  text: "text-red-600 dark:text-red-400",
  bg: "bg-red-50 dark:bg-red-950/40",
  edge: "ring-1 ring-inset ring-red-500/20 dark:ring-red-400/25",
  solid: "bg-red-600 text-white hover:bg-red-700",
} as const;

/** The z-index ladder, so portalled surfaces stack predictably. */
const LAYER = {
  /** Dropdowns and popovers anchored to a trigger. */
  popover: 60,
  /** Dialog scrim and panel. */
  dialog: 70,
  /** Toasts, which must clear an open dialog. */
  toast: 80,
} as const;

import { createPortal } from "react-dom";

/**
 * Renders children into `document.body`, or into `container`.
 *
 * Every component that portalled did so with the same
 * `typeof document !== "undefined" ? createPortal(…) : null` guard written out
 * by hand. That guard is correct but it is not enough on its own: it renders
 * nothing on the server and the portal's contents on the first client render,
 * which React flags as a hydration mismatch. Mounting on an effect instead
 * means the first client render matches the server's, and the portal appears
 * on the pass after.
 */
function Portal({
  children,
  container,
}: {
  children: React.ReactNode;
  container?: Element | null;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const target = container ?? (typeof document !== "undefined" ? document.body : null);
  return target ? createPortal(children, target) : null;
}

/* -------------------------------------------------------------------------- */
/*  Dismiss + scroll lock                                                       */
/*                                                                              */
/*  Every dialog and popover in the set had its own copy of "close on Escape,    */
/*  close on outside click", and each copy had drifted. These are the two that   */
/*  behave correctly, including the cases the hand-rolled versions missed:       */
/*  pointer capture, nested surfaces, and the scrollbar-width layout shift.      */
/* -------------------------------------------------------------------------- */

interface DismissOptions {
  /** Whether the surface is open and should listen. */
  active?: boolean;
  /** Close on Escape. Default true. */
  escapeKey?: boolean;
  /** Close on a pointer press outside the surface. Default true. */
  outsidePress?: boolean;
  /**
   * The trigger. Presses on it are ignored, so a click on an open toggle
   * closes it once via its own handler rather than closing and reopening.
   */
  triggerRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Closes a surface on Escape or an outside press.
 *
 * ```tsx
 * useDismiss(panelRef, () => setOpen(false), { active: open, triggerRef });
 * ```
 */
function useDismiss(
  ref: React.RefObject<HTMLElement | null>,
  onDismiss: () => void,
  {
    active = true,
    escapeKey = true,
    outsidePress = true,
    triggerRef,
  }: DismissOptions = {},
) {
  // Held in a ref so a caller passing an inline arrow doesn't re-bind the
  // listeners on every render.
  const handler = React.useRef(onDismiss);
  React.useEffect(() => {
    handler.current = onDismiss;
  });

  React.useEffect(() => {
    if (!active) return;

    function onKeyDown(e: KeyboardEvent) {
      if (!escapeKey || e.key !== "Escape") return;
      // With two surfaces open, only the innermost should close. Whoever
      // handled it first marks the event.
      if (e.defaultPrevented) return;
      e.preventDefault();
      handler.current();
    }

    function onPointerDown(e: PointerEvent) {
      if (!outsidePress) return;
      const target = e.target as Node | null;
      if (!target) return;
      // A press that starts inside and drags out — selecting text across the
      // edge of a dialog — should not dismiss.
      if (ref.current?.contains(target)) return;
      if (triggerRef?.current?.contains(target)) return;
      // The node may already be detached (a row removed by the same click),
      // in which case it was inside when the press began.
      if (!document.body.contains(target)) return;
      handler.current();
    }

    document.addEventListener("keydown", onKeyDown);
    // `pointerdown` rather than `click`: a menu should close as the press
    // lands, not when the button comes back up somewhere else.
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [active, escapeKey, outsidePress, ref, triggerRef]);
}

/* ----------------------------------------------------------- scroll lock -- */

/**
 * Reference-counted so nested surfaces don't unlock the page when the inner
 * one closes, and so the original inline style is restored rather than
 * overwritten with a guess.
 */
let locks = 0;
let restore: { overflow: string; paddingRight: string } | null = null;

/**
 * Freezes page scroll while `active`.
 *
 * Compensates for the scrollbar's width, which the hand-rolled
 * `document.body.style.overflow = "hidden"` did not — on Windows and Linux
 * that version shifted the whole page 15px left the moment a dialog opened.
 */
function useScrollLock(active = true) {
  React.useEffect(() => {
    if (!active) return;
    if (typeof document === "undefined") return;

    if (locks === 0) {
      const body = document.body;
      restore = {
        overflow: body.style.overflow,
        paddingRight: body.style.paddingRight,
      };
      // Only compensate when a scrollbar actually takes up space — overlay
      // scrollbars (macOS, touch) report 0 and need no padding.
      const gap = window.innerWidth - document.documentElement.clientWidth;
      if (gap > 0) {
        const current = parseFloat(getComputedStyle(body).paddingRight) || 0;
        body.style.paddingRight = `${current + gap}px`;
      }
      body.style.overflow = "hidden";
    }
    locks += 1;

    return () => {
      locks -= 1;
      if (locks === 0 && restore) {
        document.body.style.overflow = restore.overflow;
        document.body.style.paddingRight = restore.paddingRight;
        restore = null;
      }
    };
  }, [active]);
}

/**
 * The default spring. Quick and slightly tight — it settles without a visible
 * bounce, which is what you want for anything that appears under the cursor.
 */
const SPRING = {
  type: "spring",
  stiffness: 420,
  damping: 34,
  mass: 0.8,
} as const;

/**
 * The softer spring, for larger surfaces where the default reads as abrupt:
 * panels sliding in, height changes, anything crossing more than ~200px.
 */
const SOFT = { type: "spring", stiffness: 300, damping: 30 } as const;

/* ==========================================================================
   Avatar

   A person, drawn rather than initialled.

   Initials are the usual fallback and they are the weakest part of most
   interfaces: "PR" in a coloured square tells you a slot is filled, not who is
   in it. At pin size — 26px on a document — two letters are unreadable anyway.
   A drawn face is recognisable at that size, stays the same for the same
   person, and never shows a broken image.

   The portrait is derived from the seed, so Priya Raman is always the same
   Priya Raman across the pin, the thread, the signer list and the audit trail.
   Pass `src` and a real photo wins; the drawing is what stands in until then.
   ========================================================================== */

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
    case 0:
      return <path d="M27 44c0-14 10-22 23-22s23 8 23 22c0-6-8-9-23-9s-23 3-23 9Z" fill={fill} />;
    case 1:
      return (
        <g fill={fill}>
          <circle cx="34" cy="28" r="9" />
          <circle cx="50" cy="23" r="10" />
          <circle cx="66" cy="28" r="9" />
          <circle cx="28" cy="40" r="7" />
          <circle cx="72" cy="40" r="7" />
        </g>
      );
    case 2:
      return (
        <path
          d="M26 46c0-16 11-24 24-24s24 8 24 24v30c0 4-4 6-7 4 2-14 1-24-1-30-4 4-11 6-16 6s-12-2-16-6c-2 6-3 16-1 30-3 2-7 0-7-4V46Z"
          fill={fill}
        />
      );
    case 3:
      return (
        <g fill={fill}>
          <circle cx="50" cy="15" r="8" />
          <path d="M27 44c0-14 10-22 23-22s23 8 23 22c0-7-9-11-23-11s-23 4-23 11Z" />
        </g>
      );
    case 4:
      return (
        <path
          d="M26 47c0-15 11-25 24-25s24 10 24 25c-2-9-9-14-18-14-6 0-10 2-16 6-5 3-10 5-14 8Z"
          fill={fill}
        />
      );
    default:
      return (
        <path
          d="M26 47c0-16 11-25 24-25s24 9 24 25v12c0 3-4 4-6 2 1-8 1-14 0-18-5 4-11 6-18 6s-13-2-18-6c-1 4-1 10 0 18-2 2-6 1-6-2V47Z"
          fill={fill}
        />
      );
  }
}

export interface AvatarProps {
  /** Stable identity — an email is ideal. Same seed, same face, forever. */
  seed: string;
  /** A real photo. Wins over the drawing; falls back to it if it fails. */
  src?: string;
  /** For the alt text and the title attribute. */
  name?: string;
  /** Pixel size. 20–44 are the sizes the set actually uses. */
  size?: number;
  /**
   * Circular by default, matching Share Dialog and Notification Panel — the
   * set has always drawn people as circles and objects as squircles, and a
   * squircle face reads as a file tile. Squircle stays available for the rare
   * case where an avatar sits in a grid of tiles.
   */
  shape?: "circle" | "squircle";
  /** A hairline, for a pale face against a pale surface. */
  ring?: boolean;
  className?: string;
}

export function Avatar({
  seed,
  src,
  name,
  size = 28,
  shape = "circle",
  ring = true,
  className,
}: AvatarProps) {
  const [broken, setBroken] = React.useState(false);
  const h = hash(seed);
  const skin = SKIN[h % SKIN.length];
  const hair = HAIR[(h >> 3) % HAIR.length];
  const shirt = SHIRT[(h >> 6) % SHIRT.length];
  const backdrop = BACKDROP[(h >> 9) % BACKDROP.length];
  const shade = `color-mix(in srgb, ${skin} 86%, #000)`;

  /* People are round. For the squircle variant the radius tracks the size — a
     20px tile should not be as round as a 40px one — but it snaps to the set's
     radius scale rather than computing freely, or a 36px avatar lands on 11px
     and quietly breaks the scale. */
  const STEPS = [6, 7, 8, 9, 10, 12, 14, 18];
  const wanted = size * 0.3;
  const radius =
    shape === "circle"
      ? "9999px"
      : `${STEPS.reduce((a, b) => (Math.abs(b - wanted) < Math.abs(a - wanted) ? b : a))}px`;

  const frame = cn(
    // `inline-grid`, not the default: a <span> is display:inline, and an inline
    // element ignores width and height outright — so without this the SVG sizes
    // the avatar instead of the other way round, and a 28px pin renders at 300px.
    "relative inline-grid shrink-0 overflow-hidden bg-neutral-100 dark:bg-white/[0.07]",
    ring && "ring-1 ring-inset ring-black/[0.08] dark:ring-white/[0.12]",
    shape === "squircle" && SQUIRCLE,
    className,
  );

  if (src && !broken) {
    return (
      <img
        src={src}
        alt={name ?? ""}
        title={name}
        onError={() => setBroken(true)}
        style={{ width: size, height: size, borderRadius: radius }}
        className={cn(frame, "object-cover")}
      />
    );
  }

  return (
    <span style={{ width: size, height: size, borderRadius: radius }} className={frame} title={name}>
      <svg viewBox="0 0 100 106" aria-hidden className="h-full w-full">
        <rect width="100" height="106" fill={backdrop} />
        <path d="M12 106c0-23 17-34 38-34s38 11 38 34Z" fill={shirt} />
        <path d="M42 73h16l-8 10Z" fill={backdrop} opacity="0.5" />
        <path d="M42 60h16v14a8 8 0 0 1-16 0Z" fill={shade} />
        <circle cx="27" cy="47" r="4.5" fill={skin} />
        <circle cx="73" cy="47" r="4.5" fill={skin} />
        <ellipse cx="50" cy="45" rx="22" ry="24.5" fill={skin} />
        <Hair variant={h >> 12} fill={hair} />
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
      {name && <span className="sr-only">{name}</span>}
    </span>
  );
}

/**
 * Overlapping avatars with a +N tail.
 *
 * Used where a group is the subject rather than an individual — a clustered
 * pin at low zoom, or the people on one phase of a plan.
 */
export function AvatarStack({
  people,
  size = 24,
  max = 3,
  className,
}: {
  people: Array<{ seed: string; src?: string; name?: string }>;
  size?: number;
  max?: number;
  className?: string;
}) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  return (
    <span className={cn("flex items-center", className)}>
      {shown.map((p, i) => (
        <span key={p.seed + i} style={{ marginLeft: i === 0 ? 0 : -size * 0.32 }}>
          <Avatar {...p} size={size} className="ring-2 ring-white dark:ring-neutral-900" />
        </span>
      ))}
      {rest > 0 && (
        <span
          style={{ width: size, height: size, marginLeft: -size * 0.32 }}
          className={cn(
            "grid shrink-0 place-items-center rounded-full bg-neutral-200 text-[10px] font-semibold text-neutral-600",
            "ring-2 ring-white dark:bg-neutral-700 dark:text-neutral-200 dark:ring-neutral-900",
          )}
        >
          +{rest}
        </span>
      )}
    </span>
  );
}

/* ==========================================================================
   RoleChip

   What a person may do, as a label.

   Six components in this kit render a role, and before this file each of them
   would have carried its own copy of the labels, the tints and the rule about
   owners. That is exactly the drift the shared lib was created to stop: one
   component says "Can edit", the next says "Editor", and the buyer has to
   reconcile them.

   Two rules live here rather than in any component that uses it.

   Owner is a station, not a setting. It can be displayed but never offered in
   a picker, because the only honest way to move it is a transfer flow that
   states what the current owner loses. `ASSIGNABLE_ROLES` is what a menu is
   allowed to show; `ROLES` is what may be drawn.

   Role is never colour alone. Each chip carries its word, and the tint only
   ranks them — an admin badge that reads as "the blue one" is illegible to
   anyone who cannot separate the hues, and invisible in a screenshot.
   ========================================================================== */

/* ---------------------------------------------------------------- types -- */

/** Every role the kit knows about, most privileged first. */
export type Role = "owner" | "admin" | "member" | "viewer" | "guest";

/** Everything a picker may offer. Owner is deliberately absent. */
export type AssignableRole = Exclude<Role, "owner">;

export const ROLES: readonly Role[] = ["owner", "admin", "member", "viewer", "guest"] as const;

/**
 * What a role menu is allowed to contain.
 *
 * Owner is excluded on purpose: granting it silently would leave two owners or
 * none, and neither state has an obvious meaning. Transfer Ownership is the
 * component that changes it, and it asks for the workspace name to be typed.
 */
export const ASSIGNABLE_ROLES: readonly AssignableRole[] = [
  "admin",
  "member",
  "viewer",
  "guest",
] as const;

export const ROLE_LABEL: Record<Role, string> = {
  owner: "Owner",
  admin: "Admin",
  member: "Member",
  viewer: "Viewer",
  guest: "Guest",
};

/**
 * One line each, for a picker or a tooltip. Written from the reader's side:
 * what this person can do, not which flag is set on the record.
 */
export const ROLE_HINT: Record<Role, string> = {
  owner: "Full control, including billing and transfer",
  admin: "Manage people and settings",
  member: "Create and edit, but not manage people",
  viewer: "Read and comment only",
  guest: "Outside the organisation, access expires",
};

/**
 * The chips are neutral, and rank by weight rather than by hue.
 *
 * The set uses colour semantically and sparingly — emerald for something
 * resolved, red for something destructive — never as chrome. A role is not a
 * status: nothing about being a Viewer is good or bad, so painting the four
 * of them four colours adds decoration and one more thing to learn. They rank
 * by how filled they are instead, which survives a greyscale screenshot and
 * does not compete with the one place colour has to be noticed.
 *
 * Owner is still separable at a glance, by the crown rather than by amber.
 * Guest is outlined rather than filled, so an outsider reads differently from
 * staff in a list without being a different colour.
 */
const TINT: Record<Role, string> = {
  owner: "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900",
  admin: "bg-black/[0.09] text-neutral-800 dark:bg-white/[0.14] dark:text-neutral-100",
  member: "bg-black/[0.05] text-neutral-600 dark:bg-white/[0.08] dark:text-neutral-300",
  viewer: "bg-black/[0.05] text-neutral-500 dark:bg-white/[0.06] dark:text-neutral-400",
  guest:
    "bg-transparent text-neutral-500 ring-1 ring-inset ring-black/[0.14] dark:text-neutral-400 dark:ring-white/[0.18]",
};

const SIZES = {
  sm: { fontSize: TYPE.micro, padding: "1.5px 6px", radius: 6, icon: 10 },
  md: { fontSize: TYPE.chip, padding: "2.5px 7px", radius: 7, icon: 11 },
} as const;

export interface RoleChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  role: Role;
  /** `sm` for dense table rows, `md` for cards and dialogs. Default `md`. */
  size?: keyof typeof SIZES;
  /**
   * Draw the crown on an owner. Default true.
   *
   * Turn it off only where the crown already appears next to the name, so the
   * same fact is not stated twice in one row.
   */
  showOwnerMark?: boolean;
}

/* ------------------------------------------------------------ component -- */

export const RoleChip = React.forwardRef<HTMLSpanElement, RoleChipProps>(function RoleChip(
  { role, size = "md", showOwnerMark = true, className, style, ...rest },
  ref,
) {
  const s = SIZES[size];

  return (
    <span
      ref={ref}
      {...rest}
      className={cn(
        "inline-flex max-w-full items-center gap-1 whitespace-nowrap font-medium",
        SQUIRCLE,
        TINT[role],
        className,
      )}
      style={{ fontSize: s.fontSize, padding: s.padding, borderRadius: s.radius, ...style }}
    >
      {role === "owner" && showOwnerMark && (
        <Crown aria-hidden="true" style={{ width: s.icon, height: s.icon }} className="shrink-0" />
      )}
      <span className="truncate">{ROLE_LABEL[role]}</span>
    </span>
  );
});

/* ==========================================================================
   Menu

   The list behind a "…" button.

   Every row component in this kit ends in an overflow button, and until this
   file each of them either did nothing on click or opened a native `<select>`
   wearing a costume. Both are wrong in the same way: the actions a row offers
   are the row's real content — "resend this invite", "end this access" — and
   hiding them behind a control that cannot show a description, cannot mark a
   destructive item and cannot be styled to match is how a kit ends up looking
   assembled rather than designed.

   Three decisions live here.

   It portals. A member card clips its own overflow so a long name truncates;
   a menu rendered inside that card would be cut off at the card's edge. The
   list is therefore rendered to the document and positioned against the
   trigger's rect, and it flips above the trigger when the space below is
   short rather than opening off-screen.

   Destructive items are last, separated, and red. "Remove from workspace"
   sitting directly under "Copy email" is how a row gets deleted by a slipped
   click. The separator is not decoration — it is the distance.

   Focus goes into the list and comes back. Opening moves focus to the first
   item, arrows move between them, Escape closes and returns focus to the
   button that opened it. A menu you can open with the keyboard but not close
   with it is worse than no menu.
   ========================================================================== */

/* ---------------------------------------------------------------- types -- */

export interface MenuItem {
  /** Stable identity, returned to `onSelect`. */
  id: string;
  /** The action, phrased as a verb from the reader's side. */
  label: string;
  /** One line of consequence, shown under the label. Optional. */
  hint?: string;
  /** Leading glyph. Any lucide icon, or anything taking `className`. */
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  /**
   * Draws the item in red and moves the separator above it.
   *
   * Reserved for actions that cannot be undone from this surface — removing a
   * person, ending an access, cancelling an invite.
   */
  danger?: boolean;
  /** Present but unavailable. Kept visible so the reader knows it exists. */
  disabled?: boolean;
  /** Draws a check on the right. For items that report a current setting. */
  checked?: boolean;
  /** Forces a rule above this item even when it is not destructive. */
  separatorBefore?: boolean;
}

export interface MenuProps {
  items: MenuItem[];
  /** Fired with the item's `id`. The menu closes first, then this runs. */
  onSelect?: (id: string, item: MenuItem) => void;
  /** `end` hangs the list off the trigger's right edge. Default `end`. */
  align?: "start" | "end";
  /** Accessible name for the default trigger button. */
  triggerLabel?: string;
  /** Width of the list in px. Default 208. */
  width?: number;
  /**
   * Replace the default "…" button.
   *
   * Receives the props the trigger must carry — a ref, the open state and the
   * ARIA wiring — so a custom trigger stays keyboard-correct.
   */
  trigger?: (props: {
    ref: React.Ref<HTMLButtonElement>;
    open: boolean;
    onClick: (e: React.MouseEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    "aria-haspopup": "menu";
    "aria-expanded": boolean;
  }) => React.ReactNode;
  className?: string;
}

/* -------------------------------------------------------------- helpers -- */

/** Gap between the trigger and the list, in px. */
const OFFSET = 6;
/** Keep the list this far from the viewport edge. */
const MARGIN = 8;

function firstEnabled(items: MenuItem[], from = 0, step = 1) {
  for (let i = from; i >= 0 && i < items.length; i += step) {
    if (!items[i].disabled) return i;
  }
  return -1;
}

/* ------------------------------------------------------------ component -- */

export const Menu = React.forwardRef<HTMLButtonElement, MenuProps>(function Menu(
  { items, onSelect, align = "end", triggerLabel = "More options", width = 208, trigger, className },
  forwardedRef,
) {
  const reduce = useReducedMotion();

  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const [pos, setPos] = React.useState<{ top: number; left: number; up: boolean } | null>(null);

  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  React.useImperativeHandle(forwardedRef, () => triggerRef.current as HTMLButtonElement);

  const close = React.useCallback((restoreFocus = true) => {
    setOpen(false);
    setActive(-1);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  useDismiss(listRef, () => close(false), { active: open, triggerRef });

  /* Position against the trigger's rect rather than against a parent, because
     the parent is usually a card with `overflow-hidden`. Measured on open and
     again on scroll or resize, since a fixed-position list does not follow a
     page that moves under it. */
  const place = React.useCallback(() => {
    const t = triggerRef.current;
    if (!t) return;
    const r = t.getBoundingClientRect();
    const h = listRef.current?.offsetHeight ?? 0;
    const below = window.innerHeight - r.bottom - OFFSET - MARGIN;
    const up = h > 0 && below < h && r.top - OFFSET - MARGIN > h;

    let left = align === "end" ? r.right - width : r.left;
    left = Math.min(Math.max(MARGIN, left), window.innerWidth - width - MARGIN);

    setPos({ top: up ? r.top - OFFSET - h : r.bottom + OFFSET, left, up });
  }, [align, width]);

  React.useLayoutEffect(() => {
    if (!open) return;
    place();
    const onScroll = () => place();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [open, place, items.length]);

  /* Focus lands on the list itself rather than on an item, so a screen reader
     announces the menu before its first option. Arrow keys move `active` from
     there. */
  React.useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  function openWith(index: number) {
    setOpen(true);
    setActive(index);
  }

  function onTriggerKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openWith(firstEnabled(items));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      openWith(firstEnabled(items, items.length - 1, -1));
    }
  }

  function onListKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      let next = firstEnabled(items, active + step, step);
      if (next === -1) next = firstEnabled(items, step === 1 ? 0 : items.length - 1, step);
      setActive(next);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(firstEnabled(items));
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(firstEnabled(items, items.length - 1, -1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const item = items[active];
      if (item && !item.disabled) pick(item);
    } else if (e.key === "Tab") {
      close(false);
    }
  }

  function pick(item: MenuItem) {
    close();
    onSelect?.(item.id, item);
  }

  const triggerProps = {
    ref: triggerRef,
    open,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      if (open) close();
      else openWith(-1);
    },
    onKeyDown: onTriggerKeyDown,
    "aria-haspopup": "menu" as const,
    "aria-expanded": open,
  };

  return (
    <>
      {trigger ? (
        trigger(triggerProps)
      ) : (
        <button
          type="button"
          ref={triggerRef}
          aria-label={triggerLabel}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={triggerProps.onClick}
          onKeyDown={onTriggerKeyDown}
          className={cn(
            "grid size-[28px] shrink-0 place-items-center rounded-[8px]",
            "text-neutral-400 transition-colors hover:bg-black/[0.05] hover:text-neutral-700",
            "dark:text-neutral-500 dark:hover:bg-white/[0.08] dark:hover:text-neutral-200",
            open && "bg-black/[0.05] text-neutral-700 dark:bg-white/[0.08] dark:text-neutral-200",
            SQUIRCLE,
            FOCUS,
            className,
          )}
          style={{ transitionDuration: `${DURATION.fast}s` }}
        >
          <MoreHorizontal aria-hidden="true" className="size-4" />
        </button>
      )}

      <Portal>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={listRef}
              role="menu"
              tabIndex={-1}
              aria-label={triggerLabel}
              onKeyDown={onListKeyDown}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: pos?.up ? 4 : -4 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: pos?.up ? 2 : -2 }}
              transition={{ duration: DURATION.base }}
              style={{
                position: "fixed",
                top: pos?.top ?? -9999,
                left: pos?.left ?? -9999,
                width,
                zIndex: LAYER.popover,
                fontFamily: FONT_STACK,
                transformOrigin: pos?.up ? "bottom right" : "top right",
                visibility: pos ? "visible" : "hidden",
              }}
              className={cn(
                "overflow-hidden rounded-[14px] bg-white p-[5px] dark:bg-neutral-900",
                "shadow-[0_1px_2px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.12)]",
                SQUIRCLE,
                EDGE,
                FOCUS,
              )}
            >
              {items.map((item, i) => {
                const Icon = item.icon;
                const rule = item.separatorBefore || (item.danger && i > 0 && !items[i - 1].danger);
                return (
                  <React.Fragment key={item.id}>
                    {rule && (
                      <div
                        aria-hidden="true"
                        className="my-[5px] h-px bg-black/[0.07] dark:bg-white/[0.09]"
                      />
                    )}
                    <button
                      type="button"
                      role="menuitem"
                      disabled={item.disabled}
                      tabIndex={-1}
                      onMouseEnter={() => !item.disabled && setActive(i)}
                      onClick={(e) => {
                        e.stopPropagation();
                        pick(item);
                      }}
                      className={cn(
                        "flex w-full items-center gap-[9px] rounded-[9px] px-[9px] py-[7px] text-left",
                        "transition-colors",
                        SQUIRCLE,
                        item.disabled
                          ? "cursor-not-allowed text-neutral-300 dark:text-neutral-600"
                          : item.danger
                            ? cn(DANGER.text, active === i && DANGER.bg)
                            : cn(
                                "text-neutral-700 dark:text-neutral-200",
                                active === i && "bg-black/[0.05] dark:bg-white/[0.08]",
                              ),
                      )}
                      style={{ transitionDuration: `${DURATION.fast}s` }}
                    >
                      {Icon && (
                        <Icon
                          aria-hidden
                          className={cn(
                            "size-[15px] shrink-0",
                            !item.danger && !item.disabled && "text-neutral-400 dark:text-neutral-500",
                          )}
                        />
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium" style={{ fontSize: TYPE.sub }}>
                          {item.label}
                        </span>
                        {item.hint && (
                          <span
                            className="mt-[1px] block truncate font-normal text-neutral-400 dark:text-neutral-500"
                            style={{ fontSize: TYPE.micro }}
                          >
                            {item.hint}
                          </span>
                        )}
                      </span>
                      {item.checked && (
                        <Check aria-hidden="true" className="size-[14px] shrink-0 text-neutral-500" />
                      )}
                    </button>
                  </React.Fragment>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
});

/* ==========================================================================
   AccessRequestInbox

   The queue of people asking to be let in.

   Every access queue is a list of rows with Approve and Deny on them, and the
   list is the easy part. The part that goes wrong is that requests are not
   independent of each other, and a flat list pretends they are.

   Two people ask for the same folder an hour apart. You grant the first. The
   second is still sitting in the queue looking exactly as live as it did
   before, so you approve it too — and you have now granted the same access
   twice, written two entries into the audit log, and sent two emails. Worse
   is the same person asking twice after forgetting, which produces a row you
   approve and a row you deny, on the same request.

   So requests are grouped by what they are for, and once one in a group is
   decided the rest are marked superseded: shown, not hidden, with the
   decision that overtook them named on the row. Superseded requests cannot be
   approved. They can be dismissed, which is the only honest action left.

   The second decision: a denial takes a reason. Not because the requester is
   owed an explanation by policy, but because "denied" with no reason produces
   a second request within the day, which is how these queues grow.
   ========================================================================== */

/* ---------------------------------------------------------------- types -- */

export type RequestStatus = "pending" | "approved" | "denied" | "superseded";

export interface AccessRequest {
  id: string;
  /** Who is asking. */
  name: string;
  email: string;
  /** Photo. The drawn portrait stands in until there is one. */
  avatar?: string;
  /**
   * What they want access to. Requests sharing a `resourceId` are one group,
   * and deciding any of them supersedes the rest.
   */
  resourceId: string;
  /** How the thing is named in the interface. */
  resourceName: string;
  /** "Folder", "Board", "Document" — drawn as a quiet prefix. */
  resourceKind?: string;
  /** What they are asking to be. */
  requestedRole: AssignableRole;
  /** Free text from the requester. */
  message?: string;
  /** When they asked, already formatted: "2 hours ago". */
  askedAgo?: string;
  status?: RequestStatus;
  /** Why it was denied. Shown on the row once decided. */
  deniedReason?: string;
  /**
   * Set when this request was overtaken. Names the person whose decision did
   * it, so the row explains itself without a lookup.
   */
  supersededBy?: { name: string; role: AssignableRole };
}

export interface AccessRequestInboxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  requests?: AccessRequest[];
  /** Panel heading. */
  title?: string;
  /**
   * Approve with the role the reviewer settled on, which is not always the
   * role that was asked for — the commonest correction in this queue is
   * granting Viewer to someone who asked for Member.
   */
  onApprove?: (id: string, role: AssignableRole) => void;
  onDeny?: (id: string, reason: string) => void;
  /** Clear a superseded row out of the queue. */
  onDismiss?: (id: string) => void;
  /** Undo the last decision, while the row is still on screen. */
  onUndo?: (id: string) => void;
  /** Shown when nothing is waiting. */
  emptyLabel?: string;
}

/* -------------------------------------------------------------- helpers -- */

/** Short, concrete, and the ones that actually get chosen. */
const DENY_REASONS = [
  "Not needed for your role",
  "Ask your team lead first",
  "Use the shared copy instead",
  "This is closing soon",
] as const;

function groupByResource(requests: AccessRequest[]) {
  const order: string[] = [];
  const byId = new Map<string, AccessRequest[]>();
  for (const r of requests) {
    if (!byId.has(r.resourceId)) {
      byId.set(r.resourceId, []);
      order.push(r.resourceId);
    }
    byId.get(r.resourceId)!.push(r);
  }
  return order.map((id) => ({ id, items: byId.get(id)! }));
}

/* ----------------------------------------------------------- role menu -- */

function RolePicker({
  value,
  onChange,
  disabled,
}: {
  value: AssignableRole;
  onChange: (role: AssignableRole) => void;
  disabled?: boolean;
}) {
  /* A native <select> was here, and it was the wrong control twice over. It
     clipped its own longest option to "Memb ⌄" at this size, and it cannot
     show what a role actually permits — which is the one thing a reviewer
     needs at the moment of granting, because the commonest correction in this
     queue is handing Viewer to someone who asked for Member. The shared Menu
     carries a line of consequence under each option and marks the current
     one, and it is the same list the rest of the kit opens. */
  return (
    <Menu
      align="start"
      width={244}
      triggerLabel="Role to grant"
      items={ASSIGNABLE_ROLES.map((r) => ({
        id: r,
        label: ROLE_LABEL[r],
        hint: ROLE_HINT[r],
        checked: r === value,
      }))}
      onSelect={(id) => onChange(id as AssignableRole)}
      trigger={({ ref, open, onClick, onKeyDown }) => (
        <button
          ref={ref}
          type="button"
          disabled={disabled}
          onClick={onClick}
          onKeyDown={onKeyDown}
          aria-haspopup="menu"
          aria-expanded={open}
          /* The visible word is just "Member", which out of context reads as a
             label rather than a control. Naming the button says what pressing
             it does and what it currently holds. */
          aria-label={`Role to grant, currently ${ROLE_LABEL[value]}`}
          className={cn(
            "inline-flex h-7 shrink-0 cursor-pointer items-center gap-1 rounded-[8px] px-2 font-medium",
            "bg-black/[0.04] text-neutral-700 transition-colors hover:bg-black/[0.07]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "dark:bg-white/[0.08] dark:text-neutral-200 dark:hover:bg-white/[0.12]",
            open && "bg-black/[0.07] dark:bg-white/[0.12]",
            SQUIRCLE,
            FOCUS,
          )}
          style={{ fontSize: TYPE.chip }}
        >
          <span className="whitespace-nowrap">{ROLE_LABEL[value]}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-3 shrink-0 text-neutral-400 transition-transform dark:text-neutral-500",
              open && "rotate-180",
            )}
          />
        </button>
      )}
    />
  );
}

/* ---------------------------------------------------------- deny popup -- */

function DenyBar({ onPick, onCancel }: { onPick: (reason: string) => void; onCancel: () => void }) {
  /* Four canned reasons cover most denials, and they exist because a denial
     with no reason is the thing that generates a second request an hour
     later. But a fixed list of four forces a reviewer to pick the closest
     wrong one, which is worse than silence — so "Other" opens a field and
     takes their words instead. The Deny button stays disabled until there
     are some: an empty "Other" is just a denial with no reason wearing a
     costume. */
  const [other, setOther] = React.useState(false);
  const [text, setText] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (other) inputRef.current?.focus();
  }, [other]);

  const typed = text.trim();

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={SOFT}
      className="overflow-hidden"
    >
      {other ? (
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span
            className="mr-0.5 text-neutral-500 dark:text-neutral-400"
            style={{ fontSize: TYPE.meta }}
          >
            Reason —
          </span>

          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && typed) {
                e.preventDefault();
                onPick(typed);
              } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopPropagation();
                setOther(false);
                setText("");
              }
            }}
            placeholder="Say why, in a few words"
            aria-label="Reason for denying"
            className={cn(
              "h-7 min-w-0 flex-1 rounded-[8px] bg-transparent px-2 text-neutral-800",
              "placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500",
              EDGE,
              SQUIRCLE,
              FOCUS,
            )}
            style={{ fontSize: TYPE.chip, minWidth: 150 }}
          />

          <button
            type="button"
            disabled={!typed}
            onClick={() => onPick(typed)}
            className={cn(
              "h-7 shrink-0 rounded-[8px] px-2.5 font-medium transition-colors",
              typed
                ? cn(DANGER.solid, "text-white")
                : "cursor-not-allowed bg-black/[0.05] text-neutral-400 dark:bg-white/[0.07] dark:text-neutral-600",
              SQUIRCLE,
              FOCUS,
            )}
            style={{ fontSize: TYPE.chip }}
          >
            Deny
          </button>

          <button
            type="button"
            onClick={() => {
              setOther(false);
              setText("");
            }}
            className={cn(
              "h-7 shrink-0 rounded-[8px] px-2 text-neutral-400 transition-colors hover:text-neutral-700 dark:hover:text-neutral-200",
              SQUIRCLE,
              FOCUS,
            )}
            style={{ fontSize: TYPE.chip }}
          >
            Back
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span
            className="mr-0.5 text-neutral-500 dark:text-neutral-400"
            style={{ fontSize: TYPE.meta }}
          >
            Reason —
          </span>
          {DENY_REASONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => onPick(r)}
              className={cn(
                "rounded-[7px] px-2 py-1 text-neutral-600 transition-colors",
                "hover:bg-black/[0.05] hover:text-neutral-900",
                "dark:text-neutral-300 dark:hover:bg-white/[0.09] dark:hover:text-neutral-100",
                EDGE,
                SQUIRCLE,
                FOCUS,
              )}
              style={{ fontSize: TYPE.chip }}
            >
              {r}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setOther(true)}
            className={cn(
              "rounded-[7px] px-2 py-1 font-medium text-neutral-700 transition-colors",
              "hover:bg-black/[0.05] hover:text-neutral-900",
              "dark:text-neutral-200 dark:hover:bg-white/[0.09] dark:hover:text-neutral-100",
              EDGE,
              SQUIRCLE,
              FOCUS,
            )}
            style={{ fontSize: TYPE.chip }}
          >
            Other&hellip;
          </button>

          <button
            type="button"
            onClick={onCancel}
            className={cn(
              "rounded-[7px] px-2 py-1 text-neutral-400 transition-colors hover:text-neutral-700 dark:hover:text-neutral-200",
              SQUIRCLE,
              FOCUS,
            )}
            style={{ fontSize: TYPE.chip }}
          >
            Cancel
          </button>
        </div>
      )}
    </motion.div>
  );
}

/* --------------------------------------------------------------- a row -- */

function RequestRow({
  request,
  onApprove,
  onDeny,
  onDismiss,
  onUndo,
}: {
  request: AccessRequest;
  onApprove: (role: AssignableRole) => void;
  onDeny: (reason: string) => void;
  onDismiss: () => void;
  onUndo: () => void;
}) {
  const [role, setRole] = React.useState<AssignableRole>(request.requestedRole);
  const [denying, setDenying] = React.useState(false);

  const status = request.status ?? "pending";
  const decided = status === "approved" || status === "denied";
  const superseded = status === "superseded";

  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-3",
        (decided || superseded) && "bg-black/[0.015] dark:bg-white/[0.02]",
      )}
    >
      <div className={cn("shrink-0 pt-0.5", superseded && "opacity-50")}>
        <Avatar seed={request.email} src={request.avatar} name={request.name} size={32} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
          <span
            className={cn(
              "font-semibold tracking-[-0.01em]",
              superseded ? "text-neutral-500 dark:text-neutral-400" : "text-neutral-900 dark:text-neutral-100",
            )}
            style={{ fontSize: TYPE.body }}
          >
            {request.name}
          </span>
          <span
            className="min-w-0 truncate text-neutral-400 dark:text-neutral-500"
            style={{ fontSize: TYPE.meta }}
          >
            {request.email}
            {request.askedAgo ? ` · ${request.askedAgo}` : ""}
          </span>
        </div>

        {request.message && !superseded && (
          <p
            className="text-neutral-600 italic dark:text-neutral-300"
            style={{ fontSize: TYPE.dense }}
          >
            “{request.message}”
          </p>
        )}

        {/* The superseded explanation. This is the whole point of the
            component, so it is a sentence on the row rather than a tooltip:
            the reviewer must be able to see why a row is inert without
            hovering anything. */}
        {superseded && request.supersededBy && (
          <p
            className="flex items-start gap-1.5 text-neutral-500 dark:text-neutral-400"
            style={{ fontSize: TYPE.dense }}
          >
            <CornerDownRight aria-hidden="true" className="mt-0.5 size-3 shrink-0" />
            <span>
              Already granted — {request.supersededBy.name} approved{" "}
              {ROLE_LABEL[request.supersededBy.role]} access to this.
            </span>
          </p>
        )}

        {status === "denied" && request.deniedReason && (
          <p className="text-red-600 dark:text-red-400" style={{ fontSize: TYPE.dense }}>
            Denied — {request.deniedReason}
          </p>
        )}
        {status === "approved" && (
          <p className="text-emerald-700 dark:text-emerald-300" style={{ fontSize: TYPE.dense }}>
            Approved as {ROLE_LABEL[role]}
          </p>
        )}

        {status === "pending" && (
          <>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span
                className="text-neutral-400 dark:text-neutral-500"
                style={{ fontSize: TYPE.meta }}
              >
                Asked for
              </span>
              <RoleChip role={request.requestedRole} size="sm" />
              <span
                className="text-neutral-400 dark:text-neutral-500"
                style={{ fontSize: TYPE.meta }}
              >
                · grant
              </span>
              <RolePicker value={role} onChange={setRole} />

              <span className="flex-1" />

              <button
                type="button"
                onClick={() => setDenying((d) => !d)}
                className={cn(
                  "inline-flex h-7 items-center gap-1 rounded-[8px] px-2 text-neutral-500 transition-colors",
                  "hover:bg-red-50 hover:text-red-600 dark:text-neutral-400 dark:hover:bg-red-950/40 dark:hover:text-red-400",
                  SQUIRCLE,
                  FOCUS,
                )}
                style={{ fontSize: TYPE.chip, transitionDuration: `${DURATION.fast}s` }}
              >
                <X aria-hidden="true" className="size-3.5" />
                Deny
              </button>

              <button
                type="button"
                onClick={() => onApprove(role)}
                className={cn(
                  "inline-flex h-7 items-center gap-1 rounded-[8px] bg-neutral-900 px-2.5 font-medium text-white transition-colors",
                  "hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white",
                  SQUIRCLE,
                  FOCUS,
                )}
                style={{ fontSize: TYPE.chip, transitionDuration: `${DURATION.fast}s` }}
              >
                <Check aria-hidden="true" className="size-3.5" />
                Approve
              </button>
            </div>

            <AnimatePresence initial={false}>
              {denying && (
                <DenyBar
                  onPick={(reason) => {
                    setDenying(false);
                    onDeny(reason);
                  }}
                  onCancel={() => setDenying(false)}
                />
              )}
            </AnimatePresence>
          </>
        )}

        {(decided || superseded) && (
          <div className="mt-1 flex items-center gap-1.5">
            {decided ? (
              <button
                type="button"
                onClick={onUndo}
                className={cn(
                  "inline-flex h-6 items-center gap-1 rounded-[7px] px-1.5 text-neutral-500 transition-colors",
                  "hover:bg-black/[0.05] hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/[0.08] dark:hover:text-neutral-100",
                  SQUIRCLE,
                  FOCUS,
                )}
                style={{ fontSize: TYPE.chip }}
              >
                <Undo2 aria-hidden="true" className="size-3" />
                Undo
              </button>
            ) : (
              <button
                type="button"
                onClick={onDismiss}
                className={cn(
                  "inline-flex h-6 items-center gap-1 rounded-[7px] px-1.5 text-neutral-500 transition-colors",
                  "hover:bg-black/[0.05] hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/[0.08] dark:hover:text-neutral-100",
                  SQUIRCLE,
                  FOCUS,
                )}
                style={{ fontSize: TYPE.chip }}
              >
                Dismiss
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ component -- */

export const AccessRequestInbox = React.forwardRef<HTMLDivElement, AccessRequestInboxProps>(
  function AccessRequestInbox(
    {
      requests: incoming = [],
      title = "Access requests",
      onApprove,
      onDeny,
      onDismiss,
      onUndo,
      emptyLabel = "Nothing waiting. Requests land here when someone asks for access they do not have.",
      className,
      style,
      ...rest
    },
    ref,
  ) {
    const reduce = useReducedMotion();
    const [items, setItems] = React.useState<AccessRequest[]>(incoming);
    React.useEffect(() => setItems(incoming), [incoming]);

    const groups = React.useMemo(() => groupByResource(items), [items]);
    const waiting = items.filter((r) => (r.status ?? "pending") === "pending").length;

    /**
     * Deciding one request supersedes every other request still waiting on the
     * same resource. This is the behaviour the component exists for, so it
     * lives in one place and runs on approve and on deny alike: a denial is
     * also a decision the other askers should not be able to override by
     * accident.
     */
    function decide(id: string, next: Partial<AccessRequest>, grantedRole?: AssignableRole) {
      setItems((prev) => {
        const target = prev.find((r) => r.id === id);
        if (!target) return prev;
        return prev.map((r) => {
          if (r.id === id) return { ...r, ...next };
          const stillWaiting = (r.status ?? "pending") === "pending";
          if (r.resourceId === target.resourceId && stillWaiting && grantedRole) {
            return {
              ...r,
              status: "superseded" as const,
              supersededBy: { name: target.name, role: grantedRole },
            };
          }
          return r;
        });
      });
    }

    return (
      <div
        ref={ref}
        {...rest}
        style={{ fontFamily: FONT_STACK, ...style }}
        className={cn(
          "flex w-full flex-col overflow-hidden rounded-[18px] bg-white dark:bg-neutral-900",
          SQUIRCLE,
          EDGE,
          className,
        )}
      >
        <header className="flex items-center gap-2.5 border-b border-black/[0.06] px-4 py-3 dark:border-white/[0.07]">
          <Inbox
            aria-hidden="true"
            className="size-[15px] text-neutral-400 dark:text-neutral-500"
          />
          <h2
            className="flex-1 font-semibold tracking-[-0.01em]"
            style={{ fontSize: TYPE.title }}
          >
            {title}
          </h2>
          {waiting > 0 && (
            <span
              className={cn(
                "inline-flex h-5 min-w-5 items-center justify-center rounded-[7px] bg-neutral-900 px-1.5 font-semibold text-white tabular-nums dark:bg-neutral-100 dark:text-neutral-900",
                SQUIRCLE,
              )}
              style={{ fontSize: TYPE.micro }}
            >
              {waiting}
            </span>
          )}
        </header>

        {groups.length === 0 ? (
          <div className="flex flex-col items-center gap-2 px-6 py-12 text-center">
            <Lock aria-hidden="true" className="size-5 text-neutral-300 dark:text-neutral-600" />
            <p
              className="max-w-[40ch] text-neutral-500 dark:text-neutral-400"
              style={{ fontSize: TYPE.dense }}
            >
              {emptyLabel}
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            {groups.map((group) => {
              const first = group.items[0];
              return (
                <section key={group.id} className="border-b border-black/[0.05] last:border-b-0 dark:border-white/[0.05]">
                  {/* The resource heading is what makes the grouping legible.
                      Without it the superseded rows read as a bug. */}
                  <div className="flex items-center gap-1.5 bg-black/[0.02] px-4 py-1.5 dark:bg-white/[0.03]">
                    {first.resourceKind && (
                      <span
                        className="text-neutral-400 dark:text-neutral-500"
                        style={{ fontSize: TYPE.micro }}
                      >
                        {first.resourceKind}
                      </span>
                    )}
                    <span
                      className="min-w-0 truncate font-medium text-neutral-600 dark:text-neutral-300"
                      style={{ fontSize: TYPE.meta }}
                    >
                      {first.resourceName}
                    </span>
                    {group.items.length > 1 && (
                      <span
                        className="text-neutral-400 dark:text-neutral-500"
                        style={{ fontSize: TYPE.micro }}
                      >
                        · {group.items.length} asking
                      </span>
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {group.items.map((r) => (
                      <motion.div
                        key={r.id}
                        layout={!reduce}
                        initial={false}
                        exit={reduce ? undefined : { opacity: 0, height: 0 }}
                        transition={SPRING}
                        className="overflow-hidden border-t border-black/[0.04] first:border-t-0 dark:border-white/[0.04]"
                      >
                        <RequestRow
                          request={r}
                          onApprove={(role) => {
                            decide(r.id, { status: "approved", requestedRole: role }, role);
                            onApprove?.(r.id, role);
                          }}
                          onDeny={(reason) => {
                            decide(r.id, { status: "denied", deniedReason: reason });
                            onDeny?.(r.id, reason);
                          }}
                          onDismiss={() => {
                            setItems((prev) => prev.filter((x) => x.id !== r.id));
                            onDismiss?.(r.id);
                          }}
                          onUndo={() => {
                            /* Undo restores this row and releases anything it
                               superseded, which is the only way undo can be
                               honest about a grouped decision. */
                            setItems((prev) =>
                              prev.map((x) => {
                                if (x.id === r.id)
                                  return { ...x, status: "pending", deniedReason: undefined };
                                if (
                                  x.resourceId === r.resourceId &&
                                  x.status === "superseded" &&
                                  x.supersededBy?.name === r.name
                                )
                                  return { ...x, status: "pending", supersededBy: undefined };
                                return x;
                              }),
                            );
                            onUndo?.(r.id);
                          }}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </section>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

export default AccessRequestInbox;

export { AccessRequestInbox as Component };
