"use client";

import * as React from "react";

// Ported from the Starbase web component <sb-theme-switch> (Datastar/Rocket) to React.
// Source: https://github.com/zweiundeins/starbase (components/theme-switch/theme-switch.js)
// License: MIT. Copyright (c) 2026 zwei und eins gmbh and starbase contributors.

const ICON_PATHS: Record<string, string> = {
  auto: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  dark: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
  light:
    '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  palette:
    '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A4.6 4.6 0 0 0 21 9.8C21 6 17 3 12 3Z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="10.5" cy="7" r="1"/><circle cx="15" cy="7" r="1"/>',
};

const ICON_CSS = Object.entries(ICON_PATHS)
  .map(
    ([name, paths]) =>
      `.icon.${name} { --_mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>'); }`,
  )
  .join("");

const iconOf = (theme: string) =>
  theme in ICON_PATHS && theme !== "palette" ? theme : "";

// The colour scheme the page actually paints in, whatever the theme is called.
const schemeOf = (el: Element): "light" | "dark" => {
  const cs = getComputedStyle(el).colorScheme;
  const dark = /\bdark\b/.test(cs);
  const decided = dark !== /\blight\b/.test(cs);
  return (decided ? dark : matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "light";
};

const nameOf = (t: string) =>
  t.charAt(0).toUpperCase() + t.slice(1).replaceAll("-", " ");

const readCookie = (name: string) => {
  if (typeof document === "undefined") return "";
  const c = document.cookie.split("; ").find((c) => c.startsWith(name + "="));
  try {
    return c ? decodeURIComponent(c.slice(name.length + 1)) : "";
  } catch {
    return "";
  }
};

export type ThemeSwitchChangeDetail = {
  theme: string;
  cookie: string;
  scheme: "light" | "dark";
};

export interface ThemeSwitchProps {
  /** Theme names, in order. "auto" follows the system (prefers-color-scheme). */
  themes?: string[];
  /** Visible names, in the order of themes (default: from the names). */
  labels?: string[];
  /** Attribute set on <html> to the chosen theme. "auto" removes it. */
  attribute?: string;
  /** Cookie that remembers the choice (a year, whole site). */
  cookie?: string;
  /** Cookie domain, e.g. ".example.com" to share the choice with every subdomain. */
  domain?: string;
  /** Radio buttons, a select, or an icon button with a menu (for headers). */
  variant?: "segmented" | "select" | "menu";
  /** Segmented only: icons without text for auto, dark and light. */
  compact?: boolean;
  /** Accessible name of the control. */
  label?: string;
  /** Called after the user picks a theme (mirrors the original's sb-theme-change event). */
  onThemeChange?: (detail: ThemeSwitchChangeDetail) => void;
  className?: string;
}

export default function ThemeSwitch({
  themes = ["auto", "dark", "light"],
  labels = [],
  attribute = "data-theme",
  cookie = "sb-theme",
  domain = "",
  variant = "segmented",
  compact = false,
  label = "Theme",
  onThemeChange,
  className = "",
}: ThemeSwitchProps) {
  const reactId = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const menuId = `sb-theme-menu-${reactId}`;
  const anchorName = `--sb-theme-trigger-${reactId}`;
  const rootRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const nameAttr = `theme-${reactId}`;

  const valid = React.useCallback((t: string) => themes.includes(t), [themes]);

  const [theme, setTheme] = React.useState<string>(() => {
    if (typeof document === "undefined")
      return themes.includes("auto") ? "auto" : themes[0];
    return readCookie(cookie) || (themes.includes("auto") ? "auto" : themes[0]);
  });

  const options = React.useMemo(
    () =>
      themes.map((value, i) => ({
        value,
        label: labels[i] || nameOf(value),
        icon: iconOf(value),
      })),
    [themes, labels],
  );

  const icon = iconOf(theme) || "palette";
  const current =
    options.find((o) => o.value === theme)?.label ?? nameOf(theme || "");

  // Normally a server (or a head snippet) already set the attribute before the first
  // paint; this only repairs a page that didn't.
  React.useEffect(() => {
    const root = document.documentElement;
    const apply = (t: string) =>
      t === "auto"
        ? root.removeAttribute(attribute)
        : root.setAttribute(attribute, t);
    if (valid(theme) && (root.getAttribute(attribute) ?? "auto") !== theme)
      apply(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Other switches for the same cookie follow along, including to a theme this one
  // doesn't list (it then shows no choice).
  React.useEffect(() => {
    const sync = (e: Event) => {
      const ce = e as CustomEvent<ThemeSwitchChangeDetail>;
      if (ce.detail && ce.detail.cookie === cookie && ce.detail.theme !== theme)
        setTheme(ce.detail.theme);
    };
    window.addEventListener("sb-theme-change", sync as EventListener);
    return () =>
      window.removeEventListener("sb-theme-change", sync as EventListener);
  }, [cookie, theme]);

  const save = React.useCallback(
    (t: string) => {
      const secure = location.protocol === "https:" ? "; Secure" : "";
      const value = `${cookie}=${encodeURIComponent(t)}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
      if (!domain) {
        document.cookie = value;
        return;
      }
      // Drop a host-only cookie of the same name first: both would be sent, and which
      // one the server reads is undefined.
      document.cookie = `${cookie}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
      document.cookie = `${value}; Domain=${domain}`;
      if (readCookie(cookie) === t) return;
      document.cookie = value;
      if (typeof reportError === "function") {
        reportError(
          new Error(
            `<ThemeSwitch> domain="${domain}" was refused by the browser (this page is ${location.hostname}); the theme is remembered for this host only`,
          ),
        );
      }
    },
    [cookie, domain],
  );

  const pick = React.useCallback(
    (t: string) => {
      if (!valid(t) || t === theme) return;
      const root = document.documentElement;
      const apply = (tt: string) =>
        tt === "auto"
          ? root.removeAttribute(attribute)
          : root.setAttribute(attribute, tt);
      setTheme(t);
      apply(t);
      save(t);
      const detail: ThemeSwitchChangeDetail = {
        theme: t,
        cookie,
        scheme: schemeOf(root),
      };
      window.dispatchEvent(new CustomEvent("sb-theme-change", { detail }));
      onThemeChange?.(detail);
    },
    [valid, theme, attribute, save, cookie, onThemeChange],
  );

  // Close the popover on an actual click (evt.detail > 0, as in the original), and on
  // Enter/Space, matching the web component's keyup handler.
  const hideMenu = () =>
    (
      menuRef.current as unknown as { hidePopover?: () => void } | null
    )?.hidePopover?.();
  const onMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail) hideMenu();
  };
  const onMenuKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") hideMenu();
  };

  // If the menu closes while focus is inside it, return focus to the trigger button.
  React.useEffect(() => {
    const menuEl = menuRef.current as unknown as HTMLElement | null;
    if (!menuEl) return;
    const onBeforeToggle = (e: Event) => {
      const ce = e as Event & { newState?: string };
      if (ce.newState === "closed" && menuEl.matches(":focus-within"))
        triggerRef.current?.focus();
    };
    menuEl.addEventListener("beforetoggle", onBeforeToggle);
    return () => menuEl.removeEventListener("beforetoggle", onBeforeToggle);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`sb-theme-switch ${className}`}
      data-sb-scope={reactId}
      style={{ display: "inline-flex", verticalAlign: "middle" }}
    >
      <style>{scopedCss(reactId, anchorName) + ICON_CSS}</style>
      {variant === "menu" ? (
        <>
          <button
            ref={triggerRef}
            type="button"
            className="trigger"
            part="button"
            popoverTarget={menuId}
            aria-label={`${label}: ${current}`}
            title={`${label}: ${current}`}
          >
            <span className={`icon ${icon}`} aria-hidden="true" />
          </button>
          <div
            ref={menuRef}
            id={menuId}
            className="menu"
            part="menu"
            popover=""
            role="radiogroup"
            aria-label={label}
            onClick={onMenuClick}
            onKeyUp={onMenuKeyUp}
          >
            {options.map((o) => (
              <label
                key={o.value}
                part={theme === o.value ? "option selected" : "option"}
              >
                <input
                  type="radio"
                  name={nameAttr}
                  value={o.value}
                  checked={theme === o.value}
                  onChange={() => pick(o.value)}
                />
                {o.icon ? (
                  <span aria-hidden="true" className={`icon ${o.icon}`} />
                ) : null}
                <span className="text">{o.label}</span>
              </label>
            ))}
          </div>
        </>
      ) : variant === "select" ? (
        <span className="picker">
          <select
            part="select"
            aria-label={label}
            value={theme}
            onChange={(e) => pick(e.target.value)}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </span>
      ) : (
        <div
          className={`group ${compact ? "compact" : ""}`}
          part="group"
          role="radiogroup"
          aria-label={label}
        >
          {options.map((o) => (
            <label
              key={o.value}
              className={!o.icon ? "iconless" : ""}
              title={o.label}
              part={theme === o.value ? "option selected" : "option"}
            >
              <input
                type="radio"
                name={nameAttr}
                value={o.value}
                checked={theme === o.value}
                onChange={() => pick(o.value)}
              />
              {o.icon ? (
                <span aria-hidden="true" className={`icon ${o.icon}`} />
              ) : null}
              <span className="text">{o.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function scopedCss(id: string, anchorName: string) {
  const root = `.sb-theme-switch[data-sb-scope="${id}"]`;
  return `
${root} {
	--_shadow: var(--sb-shadow-overlay, 0 12px 32px -12px #0009);
	--_bg: var(--sb-control-bg, #0B1224);
	--_border: var(--sb-control-border, #283552);
	--_text: var(--sb-text-2, #AEBBDD);
	--_active: var(--sb-text-1, #F3F4FA);
	--_brand: var(--sb-brand, #8C6BFF);
	--_brand-subtle: var(--sb-brand-subtle, rgb(140 107 255 / 0.14));
	--_focus: var(--sb-brand-light, #B09AFF);
	--_radius: var(--sb-control-radius, 6px);
	display: inline-flex;
	vertical-align: middle;
}
${root}[hidden] { display: none; }
${root} .group {
	display: inline-flex;
	gap: 2px;
	padding: 2px;
	border: 1px solid var(--_border);
	border-radius: var(--_radius);
	background: var(--_bg);
}
${root} label {
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 0.4em;
	min-block-size: 2rem;
	padding-inline: 0.6rem;
	border-radius: calc(var(--_radius) - 2px);
	color: var(--_text);
	font-size: 0.8125rem;
	line-height: 1;
	cursor: pointer;
	transition: background 120ms, color 120ms;
}
${root} label:hover { color: var(--_active); }
${root} label:has(:checked) { background: var(--_brand-subtle); color: var(--_active); box-shadow: inset 0 0 0 1px var(--_brand); }
${root} label:has(:focus-visible) { outline: 2px solid var(--_focus); outline-offset: 1px; }
${root} input { position: absolute; opacity: 0; inset: 0; margin: 0; cursor: inherit; }
${root} .icon { display: block; flex: none; inline-size: 1.05rem; block-size: 1.05rem; background: currentColor; mask: var(--_mask) center / contain no-repeat; }
${root} .compact .text { overflow: hidden; white-space: nowrap; }
${root} .compact :not(.iconless) > .text { position: absolute; inline-size: 1px; block-size: 1px; clip-path: inset(50%); }
${root} select {
	min-block-size: 2rem;
	padding: 0;
	padding-inline: 0.75rem 2rem;
	border: 1px solid var(--_border);
	border-radius: var(--_radius);
	background: var(--_bg);
	color: var(--_active);
	font: inherit;
	font-size: 0.8125rem;
	appearance: none;
	cursor: pointer;
}
${root} select:focus-visible { outline: 2px solid var(--_focus); outline-offset: 1px; }
${root} .picker { position: relative; display: inline-flex; }
${root} .picker::after {
	content: "";
	position: absolute;
	inset-inline-end: calc(0.5rem + 1px);
	inset-block-start: 50%;
	inline-size: 1rem;
	block-size: 1rem;
	translate: 0 -50%;
	background: var(--_text);
	mask: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>') center / contain no-repeat;
	pointer-events: none;
}
${root} .trigger {
	all: unset;
	display: grid;
	place-items: center;
	inline-size: 2.25rem;
	block-size: 2.25rem;
	border-radius: var(--_radius);
	color: var(--_text);
	cursor: pointer;
	anchor-name: ${anchorName};
}
${root} .trigger:hover, ${root} .trigger:has(+ :popover-open) { color: var(--_active); background: var(--_brand-subtle); }
${root} .trigger:focus-visible { outline: 2px solid var(--_focus); outline-offset: 1px; }
${root} .trigger .icon { inline-size: 1.25rem; block-size: 1.25rem; }
${root} .menu {
	padding: 4px;
	border: 1px solid var(--_border);
	border-radius: var(--_radius);
	background: var(--_bg);
	color: var(--_text);
	box-shadow: var(--_shadow);
}
@supports (anchor-name: --a) {
	${root} .menu {
		position-anchor: ${anchorName};
		inset: auto;
		position-area: bottom span-left;
		margin: 0;
		margin-block-start: 6px;
		position-try-fallbacks: flip-block, flip-inline;
	}
}
${root} .menu:popover-open { display: grid; gap: 2px; min-inline-size: 10rem; }
${root} .menu label { justify-content: flex-start; padding-inline-end: 1rem; }
@media (forced-colors: active) {
	${root} .icon, ${root} .picker::after { forced-color-adjust: none; background: CanvasText; }
	${root} label:has(:checked) { outline: 2px solid Highlight; }
}
`;
}
