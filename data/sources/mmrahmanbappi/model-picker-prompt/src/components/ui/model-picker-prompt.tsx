"use client";

import React, { useState, useRef, useEffect } from "react";

// Ported from the original HTML/CSS/JS component "Prompt with Model Picker"
// by MM Rahman Bappi, 100 Free AI UI Components (MIT License)
// https://mmrahmanbappi.github.io/100-free-ai-ui-components/

const MODES = [
  { v: "Fast", label: "Fast", desc: "Quick answers for simple questions" },
  { v: "Balanced", label: "Balanced", desc: "Good for most everyday tasks" },
  {
    v: "Deep thinking",
    label: "Deep thinking",
    desc: "Slower, better for hard problems",
  },
];

export default function ModelPickerPrompt() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Balanced");
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const pickRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const t = textareaRef.current;
    if (t) {
      t.style.height = "auto";
      t.style.height = Math.min(t.scrollHeight, 200) + "px";
    }
  }, [value]);

  useEffect(() => {
    if (open) {
      const idx = MODES.findIndex((m) => m.v === selected);
      itemRefs.current[idx]?.focus();
    }
  }, [open, selected]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (pickRef.current && !pickRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function choose(v: string) {
    setSelected(v);
    setOpen(false);
    btnRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLLIElement>, i: number) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      itemRefs.current[(i + 1) % MODES.length]?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      itemRefs.current[(i - 1 + MODES.length) % MODES.length]?.focus();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(MODES[i].v);
    }
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  return (
    <div className="wrap">
      <form className="pb" id="f" onSubmit={onSubmit}>
        <label className="sr" htmlFor="q">
          Message
        </label>
        <textarea
          id="q"
          ref={textareaRef}
          rows={1}
          placeholder="Ask anything"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="row">
          <div className="pick" ref={pickRef}>
            <button
              className="pbtn"
              id="pb"
              ref={btnRef}
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span id="cur">{selected}</span>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul
              className="plist"
              id="pl"
              role="listbox"
              aria-label="Answer mode"
              hidden={!open}
            >
              {MODES.map((m, i) => (
                <li
                  key={m.v}
                  role="option"
                  tabIndex={-1}
                  data-v={m.v}
                  aria-selected={selected === m.v}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  onClick={() => choose(m.v)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  <b>{m.label}</b>
                  <span>{m.desc}</span>
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </i>
                </li>
              ))}
            </ul>
          </div>
          <span className="sp"></span>
          <button
            className="send"
            id="s"
            type="submit"
            aria-label="Send message"
            disabled={!value.trim()}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
