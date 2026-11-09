"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";

export interface CommandsMenuItem {
  value: string;
  label: string;
  result: string;
  iconKey: string;
  icon: ReactNode;
}

export interface CommandsMenuProps {
  triggerLabel?: string;
  items?: CommandsMenuItem[];
  placeholder?: string;
  hint?: string;
  emptyLabel?: string;
  onSelect?: (values: string[]) => void;
  className?: string;
}

const defaultItems: CommandsMenuItem[] = [
  {
    value: "new-project",
    label: "New project",
    result: "New project created in this preview.",
    iconKey: "plus",
    icon: (
      <svg
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
      >
        <path d="M14 5v18M5 14h18" />
      </svg>
    ),
  },
  {
    value: "browse",
    label: "Browse components",
    result: "Component browser selected in this preview.",
    iconKey: "folder",
    icon: (
      <svg
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
      >
        <path d="M4.5 9a2 2 0 0 1 2-2h5l2.5 3h7.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
      </svg>
    ),
  },
  {
    value: "duplicate",
    label: "Duplicate page",
    result: "Page duplicated in this preview.",
    iconKey: "copy",
    icon: (
      <svg
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
      >
        <rect x="5" y="8" width="13" height="16" rx="2.5" />
        <path d="M10 8V6.5A2.5 2.5 0 0 1 12.5 4h8A2.5 2.5 0 0 1 23 6.5v11a2.5 2.5 0 0 1-2.5 2.5H18" />
      </svg>
    ),
  },
  {
    value: "rename",
    label: "Rename workspace",
    result: "Workspace renamed in this preview.",
    iconKey: "edit",
    icon: (
      <svg
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
      >
        <path d="m5 23 1.5-5.5L19 5a2.8 2.8 0 0 1 4 4L10.5 21.5 5 23ZM16.5 7.5l4 4M6.5 17.5l4 4" />
      </svg>
    ),
  },
];

export default function CommandsMenu({
  triggerLabel = "Quick commands",
  items = defaultItems,
  placeholder = "Find a command…",
  hint = "Search locally. No requests or navigation.",
  emptyLabel = "No matching commands.",
  onSelect,
  className,
}: CommandsMenuProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [feedback, setFeedback] = useState(hint);

  const matches = useMemo(
    () =>
      items.map((item) =>
        item.label.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [items, query],
  );
  const anyVisible = matches.some(Boolean);

  function close(restore = false) {
    setOpen(false);
    if (restore) triggerRef.current?.focus({ preventScroll: true });
  }

  function openMenu(focus = false) {
    if (triggerRef.current?.disabled) return;
    setOpen(true);
    if (focus) {
      requestAnimationFrame(() => {
        searchRef.current?.focus({ preventScroll: true });
      });
    }
  }

  useEffect(() => {
    if (!open) return;
    const doc = rootRef.current?.ownerDocument ?? document;
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current) return;
      if (!event.composedPath().includes(rootRef.current)) close();
    }
    doc.addEventListener("pointerdown", handlePointerDown);
    return () => doc.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function visibleButtons() {
    return itemRefs.current.filter(
      (el): el is HTMLButtonElement => !!el && !el.hidden && !el.disabled,
    );
  }

  function handleTriggerClick(_event: MouseEvent<HTMLButtonElement>) {
    if (open) close();
    else openMenu(true);
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    openMenu(true);
  }

  function handleRootKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!open) return;
    const target = event.target as HTMLElement;
    if (target === triggerRef.current && event.key !== "Escape") return;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close(true);
      return;
    }
    const options = visibleButtons();
    const isSearch = target === searchRef.current;
    if (isSearch && event.key !== "ArrowDown" && event.key !== "Enter") return;
    if (isSearch && event.key === "Enter") {
      event.preventDefault();
      options[0]?.click();
      return;
    }
    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp" ||
      event.key === "Home" ||
      event.key === "End"
    ) {
      event.preventDefault();
      const index = options.indexOf(target as HTMLButtonElement);
      const next =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? options.length - 1
            : (index + (event.key === "ArrowDown" ? 1 : -1) + options.length) %
              options.length;
      options[next]?.focus();
    }
  }

  function handleFocusOut() {
    queueMicrotask(() => {
      if (!rootRef.current) return;
      if (open && !rootRef.current.contains(document.activeElement)) {
        close();
      }
    });
  }

  function handleSelect(item: CommandsMenuItem) {
    setFeedback(item.result);
    onSelect?.([item.value]);
    rootRef.current?.dispatchEvent(
      new CustomEvent("menuselect", {
        bubbles: true,
        detail: { value: item.value, values: [item.value] },
      }),
    );
    close(true);
  }

  return (
    <div
      ref={rootRef}
      className={["menu-demo", className].filter(Boolean).join(" ")}
      data-menu="commands"
      data-open={open ? "true" : "false"}
      onKeyDown={handleRootKeyDown}
      onBlur={handleFocusOut}
    >
      <button
        ref={triggerRef}
        type="button"
        className="menu-trigger"
        data-trigger=""
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="menu-commands"
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
      >
        <i className="menu-glyph" data-icon="command" aria-hidden="true">
          <svg
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M4 10h7M4 18h7m5-13 9 9-9 9Z" />
          </svg>
        </i>
        <span className="menu-trigger-label">{triggerLabel}</span>
        <i
          className="menu-glyph menu-chevron"
          data-icon="chevron"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
          >
            <path d="m8 11 6 6 6-6" />
          </svg>
        </i>
      </button>
      <div
        id="menu-commands"
        className="menu-panel"
        role="dialog"
        aria-label={triggerLabel}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="command-body">
          <div className="command-content">
            <label className="menu-search">
              <i className="menu-glyph" data-icon="search" aria-hidden="true">
                <svg
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="7.5" />
                  <path d="m17.5 17.5 6 6" />
                </svg>
              </i>
              <input
                ref={searchRef}
                type="search"
                aria-label="Search commands"
                placeholder={placeholder}
                autoComplete="off"
                spellCheck={false}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <div className="command-list">
              {items.map((item, index) => (
                <button
                  key={item.value}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  type="button"
                  className="menu-item"
                  role="button"
                  tabIndex={-1}
                  data-value={item.value}
                  data-result={item.result}
                  hidden={!matches[index]}
                  onClick={() => handleSelect(item)}
                >
                  <i
                    className="menu-glyph"
                    data-icon={item.iconKey}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </i>
                  <span>{item.label}</span>
                </button>
              ))}
              <p className="command-empty" data-empty="" hidden={anyVisible}>
                {emptyLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p
        className="menu-feedback"
        data-feedback=""
        role="status"
        aria-live="polite"
      >
        {feedback}
      </p>
    </div>
  );
}
