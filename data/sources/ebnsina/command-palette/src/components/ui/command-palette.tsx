"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import Icon, { type IconSvgElement } from "./command-palette-utils/Icon";
import { announce, isApple } from "./command-palette-utils/announce";
import { useScrollEdges } from "./command-palette-utils/scroll-edges";
import { glide } from "./command-palette-utils/glide";

export interface Command {
  id: string;
  label: string;
  /** Heading the command is listed under. */
  group?: string;
  /** Other words it should be found by ("settings" for "Preferences"). */
  keywords?: string[];
  /** Keys to show beside it, e.g. ['⌘', 'P']: display only; bind them yourself. */
  shortcut?: string[];
  icon?: IconSvgElement;
  onselect: () => void;
}

interface CommandPaletteProps {
  commands: Command[];
  /** Whether the palette is open. Omit to let the component manage its own state. */
  open?: boolean;
  /** Called whenever the palette wants to open or close. */
  onOpenChange?: (open: boolean) => void;
  /** Names the palette for screen readers. */
  label?: string;
  placeholder?: string;
  empty?: string;
  /** Open with ⌘K (Ctrl+K elsewhere) from anywhere on the page. */
  shortcut?: boolean;
}

// Accent- and case-insensitive, like Combobox. Rank: label starts with it, then a word in the label
// starts with it, then anywhere in the label, then keywords. Declared order breaks ties.
const fold = (s: string) =>
  s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

function rank(c: Command, q: string) {
  const label = fold(c.label);
  const at = label.indexOf(q);
  if (at === 0) return 0;
  if (at > 0) return /[\s\-/]/.test(label[at - 1]) ? 1 : 2;
  return c.keywords?.some((k) => fold(k).includes(q)) ? 3 : -1;
}

export default function CommandPalette({
  commands,
  open,
  onOpenChange,
  label = "Command palette",
  placeholder = "Type a command or search…",
  empty = "Nothing matches",
  shortcut = true,
}: CommandPaletteProps) {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? (open as boolean) : internalOpen;
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const viaPointerRef = useRef(false);
  const pressedBackdropRef = useRef(false);

  function setOpen(v: boolean) {
    if (!isControlled) setInternalOpen(v);
    onOpenChange?.(v);
  }

  useScrollEdges(resultsRef);

  const matches = useMemo(() => {
    const q = fold(query.trim());
    if (!q) return commands;
    return commands
      .map((c, i) => ({ c, r: rank(c, q), i }))
      .filter((m) => m.r >= 0)
      .sort((a, b) => a.r - b.r || a.i - b.i)
      .map((m) => m.c);
  }, [commands, query]);

  // Grouped in the order groups first appear among the matches, so the best match heads the list.
  const groups = useMemo(() => {
    const map = new Map<string, Command[]>();
    for (const c of matches)
      map.set(c.group ?? "", [...(map.get(c.group ?? "") ?? []), c]);
    return [...map];
  }, [matches]);

  // The flat order the arrow keys walk, matching what's on screen.
  const flat = useMemo(() => groups.flatMap(([, cs]) => cs), [groups]);
  const optionId = (c: Command) => `${id}-${c.id}`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      setQuery("");
      setActive(0);
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Typing starts again from the best match.
  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    const highlight = highlightRef.current;
    const results = resultsRef.current;
    if (!highlight || !results) return;
    const c = flat[active];
    const el =
      isOpen && c
        ? results.querySelector<HTMLElement>(`#${CSS.escape(optionId(c))}`)
        : null;
    glide(highlight, el, viaPointerRef.current, 140);
    el?.scrollIntoView({ block: "nearest" });
    // VoiceOver ignores aria-activedescendant; say the highlighted command on Apple devices.
    if (el && c && isApple()) announce(c.label);
  }, [active, flat, isOpen]);

  useEffect(() => {
    if (!shortcut) return;
    const onWindowKeydown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "k" &&
        (e.metaKey || e.ctrlKey) &&
        !e.altKey
      ) {
        e.preventDefault();
        setOpen(!isOpen);
      }
    };
    window.addEventListener("keydown", onWindowKeydown);
    return () => window.removeEventListener("keydown", onWindowKeydown);
  }, [shortcut, isOpen]);

  function run(c: Command | undefined) {
    if (!c) return;
    dialogRef.current?.close();
    c.onselect();
  }

  function onKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return;
    viaPointerRef.current = false;
    const n = flat.length;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      // Wraps round, like every command menu.
      if (n) setActive((a) => (a + (e.key === "ArrowDown" ? 1 : -1) + n) % n);
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(flat[active]);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="palette"
      aria-label={label}
      onClose={() => setOpen(false)}
      onPointerDown={(e) =>
        (pressedBackdropRef.current = e.target === dialogRef.current)
      }
      onClick={(e) => {
        if (pressedBackdropRef.current && e.target === dialogRef.current)
          dialogRef.current?.close();
      }}
    >
      <div className="search">
        <Icon icon={Search01Icon} size={18} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls={`${id}-list`}
          aria-autocomplete="list"
          aria-activedescendant={
            flat[active] ? optionId(flat[active]) : undefined
          }
          aria-label={label}
          autoComplete="off"
          spellCheck="false"
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
        <kbd>Esc</kbd>
      </div>

      {/* One height whatever the matches, so the palette never jumps while typing. */}
      <div className="results" ref={resultsRef} data-fade="">
        <span className="highlight" aria-hidden="true" ref={highlightRef} />
        <div id={`${id}-list`} role="listbox" aria-label="Commands">
          {groups.map(([name, cs]) => (
            <div
              key={name}
              role="group"
              aria-labelledby={name ? `${id}-g-${name}` : undefined}
            >
              {name ? (
                <div
                  id={`${id}-g-${name}`}
                  className="heading"
                  aria-hidden="true"
                >
                  {name}
                </div>
              ) : null}
              {cs.map((c) => (
                <div
                  key={c.id}
                  id={optionId(c)}
                  role="option"
                  tabIndex={-1}
                  aria-selected={flat[active] === c}
                  className="option"
                  onPointerMove={() => {
                    viaPointerRef.current = true;
                    setActive(flat.indexOf(c));
                  }}
                  onPointerDown={(e) => e.preventDefault()}
                  onClick={() => run(c)}
                >
                  {c.icon ? (
                    <span className="icon">
                      <Icon icon={c.icon} size={18} />
                    </span>
                  ) : null}
                  <span className="label">{c.label}</span>
                  {c.shortcut ? (
                    <span className="keys" aria-hidden="true">
                      {c.shortcut.map((k, i) => (
                        <kbd key={i}>{k}</kbd>
                      ))}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
        {!flat.length ? <p className="empty">{empty}</p> : null}
      </div>
      <p role="status" className="sr-only">
        {query.trim()
          ? `${flat.length} ${flat.length === 1 ? "result" : "results"}`
          : ""}
      </p>
    </dialog>
  );
}
