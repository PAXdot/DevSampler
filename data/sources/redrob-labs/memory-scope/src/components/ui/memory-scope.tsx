import * as React from "react";
import { ProtectionStatus } from "@/components/ui/memory-scope-utils/protection-status";

/**
 * Joins class names, skipping anything falsy and taking the truthy keys of an object.
 *
 *   cx('rr-btn', `rr-btn--${variant}`, { 'rr-btn--full': fullWidth })
 *
 * Deliberately not `clsx`: the whole behaviour is eight lines, and a component library that pulls a
 * dependency for it makes every consumer carry that dependency too.
 */
function cx(
  ...parts: Array<
    string | false | null | undefined | Record<string, boolean | undefined>
  >
): string {
  const out: string[] = [];
  for (const part of parts) {
    if (!part) continue;
    if (typeof part === "string") {
      out.push(part);
    } else {
      for (const key of Object.keys(part)) {
        if (part[key]) out.push(key);
      }
    }
  }
  return out.join(" ");
}

const ALNUM = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function digits(reactId: string): string {
  let s = reactId;
  if (
    s.length >= 2 &&
    ALNUM.indexOf(s[0]) < 0 &&
    ALNUM.indexOf(s[s.length - 1]) < 0
  ) {
    s = s.slice(1, -1);
  }
  let out = "";
  for (let i = 0; i < s.length; i += 1) {
    const at = ALNUM.indexOf(s[i]);
    out +=
      at >= 0
        ? String(at + 10)
        : `9${String(s.charCodeAt(i)).padStart(5, "0")}`;
  }
  return out;
}

/**
 * An id that survives re-renders and is the same on the server and in the browser, so a radio
 * group's `name` keeps pointing at the same thing.
 */
function useStableId(prefix: string): string {
  return `${prefix}-${digits(React.useId())}`;
}

type IconProps = React.SVGProps<SVGSVGElement>;

/** Every glyph shares this frame, so a glyph only carries its own geometry. */
function iconSvg(
  props: IconProps,
  children: React.ReactNode,
): React.ReactElement {
  return React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: "1em",
      height: "1em",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 3,
      "aria-hidden": "true",
      focusable: "false",
      ...props,
    },
    children,
  );
}

const h = React.createElement;

function bookOpenIcon(p: IconProps): React.ReactElement {
  return iconSvg(p, [
    h("path", {
      d: "M12 7.2C10.6 5.9 8.4 5 6 5H3.5V17.5H6C8.4 17.5 10.6 18.4 12 19.7",
      key: "a",
    }),
    h("path", {
      d: "M12 7.2C13.4 5.9 15.6 5 18 5H20.5V17.5H18C15.6 17.5 13.4 18.4 12 19.7",
      key: "b",
    }),
  ]);
}

export interface MemoryScopeOption {
  value: string;
  label?: React.ReactNode;
  /** A second line: which notes this is. */
  detail?: React.ReactNode;
  /** What is in force, shown on the card. */
  summary?: React.ReactNode;
  /** This option turns memory off. */
  off?: boolean;
}

export interface MemoryScopeProps {
  options?: MemoryScopeOption[];
  value?: string;
  defaultValue?: string;
  label?: string;
  onTitle?: React.ReactNode;
  offTitle?: React.ReactNode;
  offText?: React.ReactNode;
  summary?: React.ReactNode;
  lede?: React.ReactNode | false;
  foot?: React.ReactNode;
  className?: string;
  onChange?: (value: string, option: MemoryScopeOption) => void;
}

/**
 * Which memory this chat reads, including none.
 *
 * Off is a real option with its own card and its own sentence - every AI starts from nothing, and nothing new is
 * saved. A memory control without an off switch is a setting, not a choice.
 *
 * The explanation is the product's actual argument: most apps keep what they learn inside one company's model,
 * and this one keeps it separately so every AI reads the same notes. That is why switching model mid-chat costs
 * nothing, and it is worth stating rather than leaving as a feature name.
 */
export function MemoryScope(props: MemoryScopeProps): React.ReactElement {
  const options = props.options || [];
  const [held, setHeld] = React.useState<string | undefined>(
    props.defaultValue || (options[0] && options[0].value),
  );
  const value = props.value !== undefined ? props.value : held;
  const name = useStableId("rr-memscope");
  const cur =
    options.filter((o) => o.value === value)[0] || ({} as MemoryScopeOption);
  const off = cur.off;

  return React.createElement(
    "div",
    { className: cx("rr-memscope", props.className) },
    [
      React.createElement(
        ProtectionStatus,
        {
          key: "c",
          tone: off ? "plain" : "brand",
          icon: bookOpenIcon({ width: 28, height: 28 }),
          title: off
            ? props.offTitle || "Memory is off for this chat"
            : props.onTitle || "Memory is on: one memory for every AI",
        },
        off
          ? props.offText ||
              "Every AI starts from nothing, and nothing new is saved."
          : cur.summary || props.summary,
      ),
      props.lede !== false
        ? React.createElement(
            "p",
            { key: "l", className: "rr-panellede" },
            props.lede ||
              "Most AI apps keep what they learn about you inside one AI, from one company. Redrob keeps your memory separately, so every AI reads the same notes before it answers. Switch AI mid-chat, or to a model that does not exist yet, and nothing has to be explained again.",
          )
        : null,
      React.createElement(
        "div",
        {
          key: "s",
          className: "rr-memscope__options",
          role: "radiogroup",
          "aria-label": props.label || "Which memory this chat uses",
        },
        options.map((o) =>
          React.createElement(
            "label",
            { key: o.value, className: "rr-memscope__option" },
            [
              React.createElement("input", {
                key: "i",
                type: "radio",
                name,
                checked: value === o.value,
                onChange: () => {
                  if (props.value === undefined) setHeld(o.value);
                  if (props.onChange) props.onChange(o.value, o);
                },
              }),
              React.createElement("span", { key: "t" }, [
                o.label,
                o.detail
                  ? React.createElement("small", { key: "s" }, o.detail)
                  : null,
              ]),
            ],
          ),
        ),
      ),
      props.foot
        ? React.createElement(
            "div",
            { key: "f", className: "rr-panelfoot" },
            props.foot,
          )
        : null,
    ],
  );
}

export default MemoryScope;
