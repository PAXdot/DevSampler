"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

/** Lets a SplitButtonItem close the menu it lives in without any prop-drilling, mirroring the
 * original's Svelte context (getDropdown/setDropdown). */
const DropdownCloseContext = React.createContext<() => void>(() => {});

type BtnVariant = "primary" | "secondary";
type BtnSize = "sm" | "md" | "lg";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  size?: BtnSize;
  square?: boolean;
}

/** Flattened stand-in for the library's own Button.svelte (only the primary/secondary/square
 * surface Split Button actually uses). */
const Btn = React.forwardRef<HTMLButtonElement, BtnProps>(function Btn(
  {
    variant = "primary",
    size = "md",
    square = false,
    className,
    children,
    ...rest
  },
  ref,
) {
  const cls = ["sb-btn", variant, size, square && "square", className]
    .filter(Boolean)
    .join(" ");
  return (
    <button ref={ref} type="button" className={cls} {...rest}>
      <span className="sb-label">{children}</span>
    </button>
  );
});

export interface SplitButtonItemProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "onSelect"
> {
  /** danger: colors the item (and its icon) for a destructive action. */
  variant?: "default" | "danger";
  /** Stays focusable (so it's announced) but can't be chosen. */
  disabled?: boolean;
  /** Makes it a link (navigation, open in new tab) instead of an action. */
  href?: string;
  /** Runs when chosen by click, Enter or Space. Call preventDefault() to keep the menu open. */
  onSelect?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
}

/** A row inside the Split Button's menu — the React equivalent of Sina UI's Dropdown.Item. */
export function SplitButtonItem({
  variant = "default",
  disabled = false,
  href,
  onSelect,
  children,
  className,
  ...rest
}: SplitButtonItemProps) {
  const close = React.useContext(DropdownCloseContext);
  const cls = ["sb-item", variant, className].filter(Boolean).join(" ");

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    onSelect?.(e);
    if (!e.defaultPrevented) close();
  };

  // Pointer and keyboard share one highlight: whatever is focused.
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (document.activeElement !== el) el.focus({ preventScroll: true });
  };

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        role="menuitem"
        tabIndex={-1}
        aria-disabled={disabled || undefined}
        className={cls}
        onKeyDown={(e) => {
          // Links answer Enter natively; Space chooses too, as for every menu item.
          if (e.key === " ") {
            e.preventDefault();
            (e.currentTarget as unknown as HTMLElement).click();
          }
        }}
        onPointerMove={handlePointerMove}
        onClick={handleClick}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      role="menuitem"
      tabIndex={-1}
      aria-disabled={disabled || undefined}
      className={cls}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface SplitButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  /** The main action. */
  onClick?: (e: React.MouseEvent) => void;
  /** SplitButtonItem elements for the related actions. */
  menu: React.ReactNode;
  /** The chevron's name for screen readers. */
  menuLabel?: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

/**
 * A primary action button fused to a chevron that opens a menu of related actions — ported from
 * Sina UI's SplitButton.svelte (https://github.com/ebnsina/sinaui, MIT, (c) 2026 ebnsina).
 */
function SplitButton({
  variant = "primary",
  size = "md",
  onClick,
  menu,
  menuLabel = "More options",
  disabled = false,
  children,
  className,
}: SplitButtonProps) {
  const [open, setOpen] = React.useState(false);
  const groupRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const highlightRef = React.useRef<HTMLSpanElement>(null);
  const focusOnOpenRef = React.useRef<"first" | "last" | "menu">("first");
  const [pos, setPos] = React.useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  // This menu's own items.
  const items = React.useCallback((): HTMLElement[] => {
    const menuEl = menuRef.current;
    if (!menuEl) return [];
    return Array.from(
      menuEl.querySelectorAll<HTMLElement>('[role="menuitem"]'),
    );
  }, []);

  // One highlight glides to the active item instead of each item lighting up on its own.
  const moveHighlight = React.useCallback((item: HTMLElement | null) => {
    const hl = highlightRef.current;
    if (!hl) return;
    if (!item) {
      hl.style.opacity = "0";
      return;
    }
    hl.style.transform = `translate(${item.offsetLeft}px, ${item.offsetTop}px)`;
    hl.style.width = `${item.offsetWidth}px`;
    hl.style.height = `${item.offsetHeight}px`;
    hl.style.opacity = "1";
  }, []);

  // Places the menu below the split group, flipping above and clamping inside the viewport when
  // there isn't room — a simplified stand-in for the library's own anchored()/place().
  const place = React.useCallback(() => {
    const anchor = groupRef.current;
    const el = menuRef.current;
    if (!anchor || !el) return;
    const t = anchor.getBoundingClientRect();
    const gap = 6;
    const edge = 8;
    const vw = document.documentElement.clientWidth;
    const vh = window.innerHeight;
    const m = { width: el.offsetWidth, height: el.offsetHeight };
    const roomBottom = vh - t.bottom - gap - edge;
    const roomTop = t.top - gap - edge;
    const side: "top" | "bottom" =
      m.height > roomBottom && roomTop > roomBottom ? "top" : "bottom";
    const clamp = (n: number, max: number) =>
      Math.min(Math.max(edge, n), Math.max(edge, max - edge));
    const x = clamp(t.left, vw - m.width);
    let y = side === "top" ? t.top - gap - m.height : t.bottom + gap;
    y = clamp(y, vh - m.height);
    setPos({ top: y, left: x });
  }, []);

  const close = React.useCallback((returnFocus = true) => {
    if (
      returnFocus &&
      menuRef.current &&
      document.activeElement &&
      menuRef.current.contains(document.activeElement)
    ) {
      triggerRef.current?.focus();
    }
    setOpen(false);
  }, []);

  /** Opens it, focusing the first item, the last, or the menu itself. */
  const show = React.useCallback((at: "first" | "last" | "menu") => {
    focusOnOpenRef.current = at;
    setOpen(true);
  }, []);

  React.useLayoutEffect(() => {
    if (!open) return;
    place();
    const list = items();
    const target =
      focusOnOpenRef.current === "first"
        ? list[0]
        : focusOnOpenRef.current === "last"
          ? list[list.length - 1]
          : menuRef.current;
    target?.focus({ preventScroll: true });
  }, [open, place, items]);

  React.useEffect(() => {
    if (!open) {
      moveHighlight(null);
      return;
    }
    const onScroll = () => place();
    const onResize = () => place();
    // Dismissed by a press that starts outside the group and the menu.
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current?.contains(target) ||
        groupRef.current?.contains(target)
      )
        return;
      close(false);
    };
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [open, place, close, moveHighlight]);

  function onMenuKeyDown(e: React.KeyboardEvent) {
    const list = items();
    const i = list.indexOf(document.activeElement as HTMLElement);
    const n = list.length;
    let next: HTMLElement | undefined;
    if (e.key === "ArrowDown") next = list[(i + 1) % n];
    else if (e.key === "ArrowUp") next = list[i < 0 ? n - 1 : (i - 1 + n) % n];
    else if (e.key === "Home") next = list[0];
    else if (e.key === "End") next = list[n - 1];
    else if (e.key === "Escape" || e.key === "Tab") {
      e.preventDefault();
      close();
      return;
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      // Typeahead: jump to the next item starting with the typed letter.
      const k = e.key.toLowerCase();
      const order = [...list.slice(i + 1), ...list.slice(0, i + 1)];
      next = order.find((el) =>
        el.textContent?.trim().toLowerCase().startsWith(k),
      );
    }
    if (!next) return;
    e.preventDefault();
    next.focus();
  }

  return (
    <div
      className={["sb-split", open && "open", className]
        .filter(Boolean)
        .join(" ")}
      role="group"
      ref={groupRef}
    >
      <Btn
        ref={triggerRef}
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={(e) => {
          setOpen(false);
          onClick?.(e);
        }}
        onKeyDown={(e) => {
          // Menu button pattern: ArrowDown on the main action opens the related ones.
          if (e.key === "ArrowDown" && !disabled) {
            e.preventDefault();
            show("first");
          }
        }}
      >
        {children}
      </Btn>
      <Btn
        variant={variant}
        size={size}
        disabled={disabled}
        square
        aria-label={menuLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        className="sb-chevron"
        onClick={(e) => (open ? close() : show(e.detail ? "menu" : "first"))}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            show(e.key === "ArrowUp" ? "last" : "first");
          } else if (e.key === "Escape" && open) close();
        }}
      >
        <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
      </Btn>
      {open && (
        <div
          ref={menuRef}
          role="menu"
          tabIndex={-1}
          className="sb-menu"
          style={{ position: "fixed", top: pos.top, left: pos.left }}
          onKeyDown={onMenuKeyDown}
          onFocus={(e) => {
            const item = (e.target as HTMLElement).closest<HTMLElement>(
              '[role="menuitem"]',
            );
            moveHighlight(item);
          }}
        >
          <span
            className="sb-highlight"
            aria-hidden="true"
            ref={highlightRef}
          />
          <DropdownCloseContext.Provider value={() => close()}>
            {menu}
          </DropdownCloseContext.Provider>
        </div>
      )}
    </div>
  );
}

export default SplitButton;
