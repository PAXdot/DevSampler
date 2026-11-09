type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, unknown>;

function toVal(mix: ClassValue): string {
  if (!mix) return "";
  if (typeof mix === "string" || typeof mix === "number") return mix.toString();

  const res: string[] = [];

  if (Array.isArray(mix)) {
    for (let i = 0; i < mix.length; i++) {
      const val = toVal(mix[i]);
      if (val) res.push(val);
    }
  } else if (typeof mix === "object" && mix !== null) {
    for (const key in mix) {
      if (
        Object.prototype.hasOwnProperty.call(mix, key) &&
        (mix as Record<string, unknown>)[key]
      ) {
        res.push(key);
      }
    }
  }

  return res.join(" ");
}

const STANDALONE: Record<string, string> = {
  absolute: "position",
  block: "display",
  border: "border-w",
  capitalize: "text-transform",
  collapse: "visibility",
  contents: "display",
  fixed: "position",
  flex: "display",
  "flow-root": "display",
  grid: "display",
  grow: "grow",
  hidden: "display",
  inline: "display",
  "inline-block": "display",
  "inline-flex": "display",
  "inline-grid": "display",
  "inline-table": "display",
  invisible: "visibility",
  italic: "font-style",
  "line-through": "text-decoration-line",
  "list-item": "display",
  lowercase: "text-transform",
  "no-underline": "text-decoration-line",
  "normal-case": "text-transform",
  "not-italic": "font-style",
  overline: "text-decoration-line",
  relative: "position",
  ring: "ring-w",
  rounded: "rounded",
  shadow: "shadow",
  shrink: "shrink",
  static: "position",
  sticky: "position",
  table: "display",
  "table-cell": "display",
  "table-row": "display",
  transition: "transition",
  underline: "text-decoration-line",
  uppercase: "text-transform",
  visible: "visibility",
};

const NUMBER = /^\d+(?:\.\d+)?$/;
const ARBITRARY = /^(?:\[.+\]|\(.+\))$/;

const isSpacing = (value: string) =>
  NUMBER.test(value) || value === "px" || ARBITRARY.test(value);

const isInset = (value: string) =>
  isSpacing(value) || /^(?:\d+\/\d+|auto|full)$/.test(value);

const isSize = (value: string) =>
  isInset(value) ||
  /^(?:screen|min|max|fit|none|prose|[sld]v[wh]|[23]?xs|sm|md|lg|[2-7]?xl)$/.test(
    value,
  );

const isHeight = (value: string) => isSize(value) || value === "lh";

const numberOr =
  (...words: string[]) =>
  (value: string) =>
    NUMBER.test(value) || ARBITRARY.test(value) || words.includes(value);

const oneOf =
  (...words: string[]) =>
  (value: string) =>
    ARBITRARY.test(value) || words.includes(value);

const PREFIXES = /* @__PURE__ */ (() => {
  const prefixes: Record<string, (value: string) => boolean> = {
    animate: () => true,
    aspect: (value) =>
      ARBITRARY.test(value) || /^(?:square|video|auto|\d+\/\d+)$/.test(value),
    basis: isSize,
    cursor: (value) =>
      /^[a-z]+(?:-[a-z]+)*$/.test(value) || ARBITRARY.test(value),
    delay: numberOr("initial"),
    duration: numberOr("initial"),
    ease: oneOf("linear", "in", "out", "in-out", "initial"),
    "grid-cols": numberOr("none", "subgrid"),
    "grid-rows": numberOr("none", "subgrid"),
    grow: numberOr(),
    leading: numberOr("none", "tight", "snug", "normal", "relaxed", "loose"),
    opacity: numberOr(),
    order: numberOr("first", "last", "none"),
    "pointer-events": oneOf("none", "auto"),
    select: oneOf("none", "text", "all", "auto"),
    shrink: numberOr(),
    tracking: oneOf("tighter", "tight", "normal", "wide", "wider", "widest"),
    whitespace: oneOf(
      "normal",
      "nowrap",
      "pre",
      "pre-line",
      "pre-wrap",
      "break-spaces",
    ),
    z: numberOr("auto"),
  };

  for (const prefix of ["p", "px", "py", "ps", "pe", "pt", "pr", "pb", "pl"]) {
    prefixes[prefix] = isSpacing;
  }
  for (const prefix of ["m", "mx", "my", "ms", "me", "mt", "mr", "mb", "ml"]) {
    prefixes[prefix] = (value) => isSpacing(value) || value === "auto";
  }
  for (const prefix of ["gap", "gap-x", "gap-y", "space-x", "space-y"]) {
    prefixes[prefix] = isSpacing;
  }
  for (const prefix of [
    "inset",
    "inset-x",
    "inset-y",
    "inset-s",
    "inset-e",
    "top",
    "right",
    "bottom",
    "left",
    "start",
    "end",
    "translate-x",
    "translate-y",
  ]) {
    prefixes[prefix] = isInset;
  }
  for (const prefix of ["w", "size", "min-w", "max-w"]) {
    prefixes[prefix] = isSize;
  }
  for (const prefix of ["h", "min-h", "max-h"]) {
    prefixes[prefix] = isHeight;
  }

  return prefixes;
})();

const OVERRIDES = /* @__PURE__ */ (() => {
  const overrides: Record<string, string[]> = {
    "font-size": ["font-size-leading"],
    "font-size-leading": ["font-size", "leading"],
    gap: ["gap-x", "gap-y"],
    inset: [
      "inset-x",
      "inset-y",
      "top",
      "right",
      "bottom",
      "left",
      "inset-s",
      "inset-e",
    ],
    "inset-x": ["left", "right", "inset-s", "inset-e"],
    "inset-y": ["top", "bottom"],
    overflow: ["overflow-x", "overflow-y"],
    rounded: [
      "rounded-s",
      "rounded-e",
      "rounded-t",
      "rounded-r",
      "rounded-b",
      "rounded-l",
      "rounded-ss",
      "rounded-se",
      "rounded-ee",
      "rounded-es",
      "rounded-tl",
      "rounded-tr",
      "rounded-br",
      "rounded-bl",
    ],
    "rounded-s": ["rounded-ss", "rounded-es"],
    "rounded-e": ["rounded-se", "rounded-ee"],
    "rounded-t": ["rounded-tl", "rounded-tr"],
    "rounded-r": ["rounded-tr", "rounded-br"],
    "rounded-b": ["rounded-br", "rounded-bl"],
    "rounded-l": ["rounded-tl", "rounded-bl"],
    size: ["w", "h"],
  };

  for (const [all, prefix] of [
    ["m", "m"],
    ["p", "p"],
    ["border-w", "border-w-"],
    ["border-color", "border-color-"],
  ]) {
    const side = (name: string) => `${prefix}${name}`;
    overrides[all] = ["x", "y", "s", "e", "t", "r", "b", "l"].map(side);
    overrides[side("x")] = ["s", "e", "r", "l"].map(side);
    overrides[side("y")] = ["t", "b"].map(side);
  }

  for (const prefix of ["border-w-", "border-color-"]) {
    const blockSides = [`${prefix}bs`, `${prefix}be`];
    overrides[prefix.slice(0, -1)].push(...blockSides);
    overrides[`${prefix}y`].push(...blockSides);
  }

  return overrides;
})();

const FONT_SIZES = new Set([
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
  "page-title",
  "section-title",
  "stat-value",
]);

const FONT_WEIGHTS = new Set([
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
]);

const SHADOW_SIZES = new Set([
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "none",
  "inner",
]);

const ALIGNMENTS =
  /^(?:start|end|center|baseline|stretch|end-safe|center-safe|baseline-last|normal)$/;

const RADII = /^(?:none|xs|sm|md|lg|xl|[234]xl|full|\[.+\]|\(.+\))$/;

const LINE_STYLES = new Set([
  "solid",
  "dashed",
  "dotted",
  "double",
  "hidden",
  "none",
]);

const NOT_A_PALETTE = /^(?:linear|conic|radial|opacity|spacing|offset)-/;

const withoutOpacity = (value: string) =>
  value.replace(/\/(?:\d+|\[[^\]]*\]|\([^)]*\))$/, "");

const isVariable = (value: string) =>
  /^(?:\(--[^)]+\)|\[var\(--[^\]]+\)\])$/.test(withoutOpacity(value));

function isColor(value: string) {
  const color = withoutOpacity(value);

  return (
    /^(?:inherit|current|transparent|black|white)$/.test(color) ||
    (/^[a-z]+(?:-[a-z]+)*-(?:50|[1-9]00|950)$/.test(color) &&
      !NOT_A_PALETTE.test(color)) ||
    /^(?:background|surface|dialog)(?:-dark)?$/.test(color) ||
    /^\[(?:color:|#|(?:rgba?|hsla?|hwb|oklch|oklab|lab|lch|color|color-mix|light-dark)\()/.test(
      color,
    ) ||
    /^\(color:/.test(color) ||
    isVariable(color)
  );
}

function isLength(value: string) {
  return (
    /^\d+(?:\.\d+)?$/.test(value) ||
    /^\[(?:length:[^\]]+|-?\d*\.?\d+(?:px|r?em|%|vh|vw|dvh|svh|lvh|ch|ex|lh)?|(?:calc|clamp|min|max)\([^\]]*\))\]$/.test(
      value,
    ) ||
    /^\(length:[^)]+\)$/.test(value)
  );
}

function utilityGroup(utility: string): string | undefined {
  if (Object.hasOwn(STANDALONE, utility)) return STANDALONE[utility];

  const parts = utility.split("-");
  for (let length = Math.min(parts.length - 1, 3); length > 0; length--) {
    const prefix = parts.slice(0, length).join("-");
    const value = parts.slice(length).join("-");
    const group = prefixedGroup(prefix, value);
    if (group) return group;
  }

  return undefined;
}

const TEXT_SHADOW =
  /^(?:(?:2xs|xs|sm|md|lg)(?:\/(?:\d+|\[[^\]]*\]|\([^)]*\)))?|none)$/;

function textShadowGroup(value: string): string | undefined {
  if (TEXT_SHADOW.test(value) || isVariable(value)) return "text-shadow";
  return isColor(value) ? "text-shadow-color" : undefined;
}

function prefixedGroup(prefix: string, value: string): string | undefined {
  if (!value) return undefined;

  if (Object.hasOwn(PREFIXES, prefix)) {
    if (!PREFIXES[prefix](value)) return undefined;
    if (prefix === "start") return "inset-s";
    if (prefix === "end") return "inset-e";
    return prefix;
  }

  switch (prefix) {
    case "flex":
      if (/^(?:row|row-reverse|col|col-reverse)$/.test(value)) {
        return "flex-direction";
      }
      if (/^(?:wrap|wrap-reverse|nowrap)$/.test(value)) return "flex-wrap";
      return numberOr("auto", "initial", "none")(value) ||
        /^\d+\/\d+$/.test(value)
        ? "flex"
        : undefined;
    case "items":
      return ALIGNMENTS.test(value) ? "align-items" : undefined;
    case "self":
      return value === "auto" || ALIGNMENTS.test(value)
        ? "align-self"
        : undefined;
    case "justify": {
      const [, part, alignment] = /^(?:(items|self)-)?(.+)$/.exec(value) ?? [];
      if (!alignment || !(ALIGNMENTS.test(alignment) || alignment === "auto")) {
        return /^(?:between|around|evenly|normal)$/.test(value)
          ? "justify-content"
          : undefined;
      }
      return part ? `justify-${part}` : "justify-content";
    }
    case "object":
      if (/^(?:contain|cover|fill|none|scale-down)$/.test(value)) {
        return "object-fit";
      }
      return /^(?:top|bottom|left|right|center|left-top|left-bottom|right-top|right-bottom|\[.+\])$/.test(
        value,
      )
        ? "object-position"
        : undefined;
    case "overflow": {
      const [, axis, overflow] = /^(?:([xy])-)?(.+)$/.exec(value) ?? [];
      if (!/^(?:auto|hidden|clip|visible|scroll)$/.test(overflow ?? "")) {
        return undefined;
      }
      return axis ? `overflow-${axis}` : "overflow";
    }
    case "font":
      if (FONT_WEIGHTS.has(value) || /^\[\d+\]$/.test(value)) {
        return "font-weight";
      }
      return /^(?:sans|serif|mono|heading)$/.test(value)
        ? "font-family"
        : undefined;
    case "text": {
      const [size, leading] = splitParts(value, "/");
      if (FONT_SIZES.has(size) || (/^[[(]/.test(size) && isLength(size))) {
        return leading ? "font-size-leading" : "font-size";
      }
      if (/^(?:left|center|right|justify|start|end)$/.test(value)) {
        return "text-align";
      }
      if (/^(?:wrap|nowrap|balance|pretty)$/.test(value)) return "text-wrap";
      if (/^(?:ellipsis|clip)$/.test(value)) return "text-overflow";
      if (/^shadow(?:-|$)/.test(value)) return textShadowGroup(value.slice(7));
      if (isColor(value)) return "text-color";
      return undefined;
    }
    case "bg":
      if (isColor(value)) return "bg-color";
      return /^(?:none|linear-|radial|conic|gradient-|\[url\(|\[(?:image:)?(?:linear|radial|conic)-gradient)/.test(
        value,
      )
        ? "bg-image"
        : undefined;
    case "from":
    case "via":
    case "to":
      return isColor(value) ? `${prefix}-color` : undefined;
    case "border": {
      const side = /^(bs|be|[xysetrbl])(?:-(.+))?$/.exec(value);
      if (side) {
        if (side[2] === undefined || isLength(side[2])) {
          return `border-w-${side[1]}`;
        }
        return isColor(side[2]) ? `border-color-${side[1]}` : undefined;
      }
      if (isLength(value)) return "border-w";
      if (LINE_STYLES.has(value)) return "border-style";
      return isColor(value) ? "border-color" : undefined;
    }
    case "rounded": {
      const [, side, radius] =
        /^(?:(ss|se|ee|es|tl|tr|br|bl|[setrbl])(?:-|$))?(.*)$/.exec(value) ??
        [];
      if (radius && !RADII.test(radius)) return undefined;
      return side ? `rounded-${side}` : "rounded";
    }
    case "ring":
      if (value === "inset") return "ring-inset";
      if (isLength(value)) return "ring-w";
      return isColor(value) ? "ring-color" : undefined;
    case "ring-offset":
      if (isLength(value)) return "ring-offset-w";
      return isColor(value) ? "ring-offset-color" : undefined;
    case "shadow":
      if (SHADOW_SIZES.has(value) || isVariable(value)) return "shadow";
      return isColor(value) ? "shadow-color" : undefined;
    case "outline":
      if (LINE_STYLES.has(value)) return "outline-style";
      if (isLength(value)) return "outline-w";
      return isColor(value) ? "outline-color" : undefined;
    case "outline-offset":
      return "outline-offset";
    case "transition":
      return /^(?:all|colors|opacity|shadow|transform|none)$/.test(value)
        ? "transition"
        : undefined;
    default:
      return undefined;
  }
}

interface ClassConflict {
  scope: string;
  group: string;
}

function splitParts(className: string, separator: ":" | "/"): string[] {
  const parts: string[] = [];
  let depth = 0;
  let start = 0;

  for (let i = 0; i < className.length; i++) {
    const char = className[i];
    if (char === "[" || char === "(") depth++;
    else if (char === "]" || char === ")") depth--;
    else if (char === separator && depth === 0) {
      parts.push(className.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(className.slice(start));

  return parts;
}

const ORDER_SENSITIVE_VARIANT =
  /^(?:\*|\*\*|after|backdrop|before|details-content|file|first-letter|first-line|marker|placeholder|selection)$/;

function isMovingArbitraryVariant(variant: string) {
  if (!/^\[.*\]$/.test(variant)) return false;

  const selector = variant.slice(1, -1);
  const self = selector.lastIndexOf("&");
  return self === -1 || /[_\s>+~]|::/.test(selector.slice(self + 1));
}

const AT_RULE_VARIANT =
  /^(?:not-)?(?:sm|md|lg|xl|2xl|(?:max|min)-.+|@.+|motion-(?:safe|reduce)|print|portrait|landscape|supports-.+|contrast-(?:more|less)|forced-colors|inverted-colors|(?:any-)?pointer-(?:fine|coarse|none)|noscript|starting|\[@(?:media|supports|container)[^\]]*\])$/;

function variantScope(variants: string[]) {
  const queries: string[] = [];
  const scope: string[] = [];
  let run: string[] = [];

  for (const variant of variants) {
    if (AT_RULE_VARIANT.test(variant)) {
      queries.push(variant);
    } else if (
      ORDER_SENSITIVE_VARIANT.test(variant) ||
      isMovingArbitraryVariant(variant)
    ) {
      scope.push(...run.sort(), variant);
      run = [];
    } else {
      run.push(variant);
    }
  }
  scope.push(...run.sort());

  return `${queries.sort().join(":")};${scope.join(":")}`;
}

function parseClass(className: string): ClassConflict | undefined {
  const parts = splitParts(className, ":");
  let utility = parts.pop() ?? "";

  const important = utility.startsWith("!") || utility.endsWith("!");
  utility = utility.replace(/^!|!$/g, "");
  utility = utility.replace(/^-/, "");

  const group = utilityGroup(utility);
  if (!group) return undefined;

  return {
    group,
    scope: `${variantScope(parts)}${important ? "!" : ""}|`,
  };
}

const parsedClasses = new Map<string, ClassConflict | null>();

function conflictOf(className: string) {
  let conflict = parsedClasses.get(className);
  if (conflict === undefined) {
    if (parsedClasses.size >= 2000) parsedClasses.clear();
    conflict = parseClass(className) ?? null;
    parsedClasses.set(className, conflict);
  }

  return conflict;
}

function mergeClasses(classes: string[]): string[] {
  const kept: string[] = [];
  const seen = new Set<string>();
  const overridden = new Set<string>();

  for (let i = classes.length - 1; i >= 0; i--) {
    const className = classes[i];
    if (seen.has(className)) continue;
    seen.add(className);

    const conflict = conflictOf(className);
    if (conflict) {
      const key = conflict.scope + conflict.group;
      if (overridden.has(key)) continue;

      overridden.add(key);
      const overrides = Object.hasOwn(OVERRIDES, conflict.group)
        ? OVERRIDES[conflict.group]
        : [];
      for (const group of overrides) {
        overridden.add(conflict.scope + group);
      }
    }

    kept.push(className);
  }

  return kept.reverse();
}

export function cn(...args: ClassValue[]): string | undefined {
  const res: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const val = toVal(args[i]);
    if (val) res.push(...val.split(/\s+/).filter(Boolean));
  }

  if (res.length === 0) return undefined;

  return mergeClasses(res).join(" ");
}

export function joinTokens(...args: ClassValue[]): string | undefined {
  const res: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const val = toVal(args[i]);
    if (val) res.push(val);
  }

  if (res.length === 0) return undefined;

  return res.join(" ");
}

export default cn;
