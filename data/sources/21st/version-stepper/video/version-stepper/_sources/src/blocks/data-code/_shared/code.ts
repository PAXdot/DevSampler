// Built with Remotion - https://remotion.pro/license
// A small, dependency-free syntax tokenizer and two restrained code themes,
// shared by the code blocks. Deterministic: plain string scanning, no regex state.

import { luminance, withAlpha } from "../../../kit/index";

export { LANGUAGES } from "./languages";
export type { Language } from "./languages";
import type { Language } from "./languages";

export type TokenKind = "plain" | "keyword" | "string" | "number" | "comment" | "fn" | "type" | "tag" | "attr" | "punct" | "prop" | "space";
export type Token = { text: string; kind: TokenKind };
/** A token placed on the monospace grid. */
export type PlacedToken = Token & { line: number; col: number };

const JS_KW = new Set(
  "import export from default const let var function return if else for while do switch case break continue new class extends implements interface type enum async await yield try catch finally throw typeof instanceof in of as satisfies void null undefined true false this super static public private readonly declare keyof".split(
    " ",
  ),
);
const PY_KW = new Set(
  "def return if elif else for while in import from as class with try except finally raise lambda yield pass break continue and or not is None True False async await self".split(" "),
);
const SH_KW = new Set("if then else fi for do done case esac in function export echo cd sudo npx npm pnpm bun yarn git curl".split(" "));
const CSS_KW = new Set("important media supports keyframes from to".split(" "));

const isIdStart = (c: string) => /[A-Za-z_$@]/.test(c);
const isId = (c: string) => /[A-Za-z0-9_$\-]/.test(c);
const isDigit = (c: string) => c >= "0" && c <= "9";

function keywordsOf(lang: Language): Set<string> {
  if (lang === "python") return PY_KW;
  if (lang === "bash") return SH_KW;
  if (lang === "css") return CSS_KW;
  if (lang === "json" || lang === "plain") return new Set(["true", "false", "null"]);
  return JS_KW;
}

/** Tokenize one source string. Newlines come back as their own "space" tokens ("\n"). */
export function tokenize(src: string, lang: Language): Token[] {
  const out: Token[] = [];
  const kw = keywordsOf(lang);
  const hashComments = lang === "bash" || lang === "python";
  const slashComments = lang !== "bash" && lang !== "python" && lang !== "json" && lang !== "plain";
  const jsx = lang === "tsx" || lang === "js";
  let i = 0;
  let prevSignificant = "";
  const push = (text: string, kind: TokenKind) => {
    const last = out[out.length - 1];
    if (last && last.kind === kind && kind === "plain" && text !== "\n" && last.text !== "\n") last.text += text;
    else out.push({ text, kind });
    if (kind !== "space") prevSignificant = (prevSignificant + text).slice(-4);
  };
  while (i < src.length) {
    const c = src[i]!;
    const rest = src.slice(i, i + 2);
    if (c === "\n") {
      out.push({ text: "\n", kind: "space" });
      i++;
      continue;
    }
    if (c === " " || c === "\t") {
      let j = i;
      while (j < src.length && (src[j] === " " || src[j] === "\t")) j++;
      out.push({ text: src.slice(i, j).replace(/\t/g, "  "), kind: "space" });
      i = j;
      continue;
    }
    if (lang === "plain") {
      let j = i;
      while (j < src.length && src[j] !== "\n" && src[j] !== " ") j++;
      push(src.slice(i, j), "plain");
      i = j;
      continue;
    }
    if ((slashComments && rest === "//") || (hashComments && c === "#")) {
      let j = i;
      while (j < src.length && src[j] !== "\n") j++;
      push(src.slice(i, j), "comment");
      i = j;
      continue;
    }
    if (slashComments && rest === "/*") {
      const end = src.indexOf("*/", i + 2);
      const j = end < 0 ? src.length : end + 2;
      // keep newlines as separate tokens so line layout stays right
      src
        .slice(i, j)
        .split(/(\n)/)
        .forEach((part) => part && (part === "\n" ? out.push({ text: "\n", kind: "space" }) : push(part, "comment")));
      i = j;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      let j = i + 1;
      while (j < src.length && src[j] !== c && src[j] !== "\n") j += src[j] === "\\" ? 2 : 1;
      j = Math.min(src.length, j + 1);
      const isKey = lang === "json" && /^\s*:/.test(src.slice(j, j + 4));
      push(src.slice(i, j), isKey ? "prop" : "string");
      i = j;
      continue;
    }
    if (isDigit(c) || (c === "." && isDigit(src[i + 1] ?? ""))) {
      let j = i;
      while (j < src.length && /[0-9._xXa-fA-F%]/.test(src[j]!)) j++;
      if (lang === "css") while (j < src.length && /[a-z]/.test(src[j]!)) j++;
      push(src.slice(i, j), "number");
      i = j;
      continue;
    }
    if (isIdStart(c) || (lang === "bash" && c === "-" && src[i + 1] === "-")) {
      let j = i + 1;
      while (j < src.length && (lang === "css" || lang === "bash" ? isId(src[j]!) : /[A-Za-z0-9_$]/.test(src[j]!))) j++;
      const word = src.slice(i, j);
      const next = src.slice(j).match(/^\s*(.)/)?.[1] ?? "";
      let kind: TokenKind = "plain";
      if (jsx && (prevSignificant.endsWith("<") || prevSignificant.endsWith("</"))) kind = /^[A-Z]/.test(word) ? "type" : "tag";
      else if (jsx && next === "=" && src[j] === "=" && src[j + 1] !== "=" && /[{"]/.test(src[j + 1] ?? "")) kind = "attr";
      else if (kw.has(word.replace(/^@/, ""))) kind = "keyword";
      else if (lang === "css" && next === ":" && !prevSignificant.endsWith(":")) kind = "prop";
      else if (lang === "bash" && word.startsWith("-")) kind = "attr";
      else if (next === "(") kind = "fn";
      else if (/^[A-Z][A-Za-z0-9]*$/.test(word) && lang !== "bash") kind = "type";
      else if (prevSignificant.endsWith(".") && lang !== "bash") kind = "prop";
      else if (lang === "css" && /[.#]$/.test(prevSignificant)) kind = "fn";
      push(word, kind);
      i = j;
      continue;
    }
    push(c, "punct");
    i++;
  }
  return out;
}

/** Tokens with their grid position (line, col). */
export function place(tokens: Token[]): PlacedToken[] {
  const out: PlacedToken[] = [];
  let line = 0;
  let col = 0;
  for (const t of tokens) {
    if (t.text === "\n") {
      line++;
      col = 0;
      continue;
    }
    out.push({ ...t, line, col });
    col += t.text.length;
  }
  return out;
}

/** Lines x columns the source occupies on the grid. */
export function gridSize(src: string): { lines: number; cols: number } {
  const ls = src.replace(/\t/g, "  ").split("\n");
  return { lines: ls.length, cols: Math.max(1, ...ls.map((l) => l.length)) };
}

/** Split a token list into per-line arrays (spaces kept, newlines dropped). */
export function byLine(tokens: Token[]): Token[][] {
  const lines: Token[][] = [[]];
  for (const t of tokens) {
    if (t.text === "\n") lines.push([]);
    else lines[lines.length - 1]!.push(t);
  }
  return lines;
}

export type CodeTheme = {
  name: string;
  window: string;
  border: string;
  chrome: string;
  muted: string;
  lineNo: string;
  shadow: string;
  ink: Record<TokenKind, string>;
};

const DARK_INK: Record<TokenKind, string> = {
  plain: "#E6E6E9",
  space: "#E6E6E9",
  keyword: "#FF7AA2",
  string: "#7DD49A",
  number: "#F4B76A",
  comment: "#6C6C75",
  fn: "#93B6FF",
  type: "#6FD6E6",
  tag: "#93B6FF",
  attr: "#C6A6FF",
  punct: "#9C9CA6",
  prop: "#C6A6FF",
};

const LIGHT_INK: Record<TokenKind, string> = {
  plain: "#1C1C21",
  space: "#1C1C21",
  keyword: "#CF2F67",
  string: "#2C8A4C",
  number: "#B4610C",
  comment: "#A0A0A8",
  fn: "#2E58D6",
  type: "#0B8798",
  tag: "#2E58D6",
  attr: "#7A3BEB",
  punct: "#70707A",
  prop: "#7A3BEB",
};

export const CODE_THEMES = {
  dark: {
    name: "dark",
    window: "#0E0E11",
    border: "rgba(255,255,255,0.09)",
    chrome: "rgba(255,255,255,0.025)",
    muted: "#8B8B94",
    lineNo: "#45454C",
    shadow: "rgba(0,0,0,0.5)",
    ink: DARK_INK,
  },
  light: {
    name: "light",
    window: "#FFFFFF",
    border: "rgba(0,0,0,0.08)",
    chrome: "rgba(0,0,0,0.02)",
    muted: "#77777F",
    lineNo: "#C4C4CA",
    shadow: "rgba(15,15,25,0.16)",
    ink: LIGHT_INK,
  },
} satisfies Record<string, CodeTheme>;

export type CodeThemeName = keyof typeof CODE_THEMES;

/** Geist Mono advance width in em. */
export const MONO_EM = 0.6;

/** Brand roles override actual editor paint; omitted roles retain the authored skin. */
export function codeTheme(theme: CodeThemeName, roles: { surfaceColor?: string; textColor?: string; secondaryColor?: string; accent: string }): CodeTheme {
  const base = CODE_THEMES[theme];
  if (roles.surfaceColor === undefined && roles.textColor === undefined && roles.secondaryColor === undefined) return base;
  const text = roles.textColor ?? base.ink.plain;
  const secondary = roles.secondaryColor ?? roles.accent;
  return {
    ...base,
    window: roles.surfaceColor ?? base.window,
    border: withAlpha(text, 0.2),
    chrome: withAlpha(text, 0.045),
    muted: withAlpha(text, 0.8),
    lineNo: withAlpha(text, 0.55),
    shadow: withAlpha(luminance(roles.surfaceColor ?? base.window) < luminance(text) ? (roles.surfaceColor ?? base.window) : text, 0.16),
    ink: { plain: text, space: text, keyword: roles.accent, string: secondary, number: secondary, comment: withAlpha(text, 0.65), fn: roles.accent, type: secondary, tag: roles.accent, attr: secondary, punct: withAlpha(text, 0.85), prop: secondary },
  };
}

/** Soft visual wrapping preserves every character and syntax role. */
export function wrapTokens(tokens: Token[], columns: number): Token[] {
  if (!Number.isFinite(columns)) return tokens;
  const out: Token[] = [];
  const limit = Math.max(1, Math.floor(columns));
  let col = 0;
  for (const token of tokens) {
    if (token.text === "\n") { out.push(token); col = 0; continue; }
    if (token.text.trim() && token.text.length <= limit && col > 0 && col + token.text.length > limit) { out.push({ text: "\n", kind: "space" }); col = 0; }
    let rest = token.text;
    while (rest.length) {
      if (col === limit) { out.push({ text: "\n", kind: "space" }); col = 0; }
      const take = Math.min(rest.length, limit - col);
      out.push({ ...token, text: rest.slice(0, take) });
      rest = rest.slice(take); col += take;
    }
  }
  return out;
}
export function wrappedCode(src: string, language: Language, columns: number) {
  const tokens = wrapTokens(tokenize(src, language), columns);
  const source = tokens.map(token => token.text).join("");
  return { tokens, source, grid: gridSize(source) };
}
