"use client";

import * as React from "react";
import { Check, Copy, X } from "lucide-react";

export interface PaletteImage {
  id: string;
  src: string;
  alt?: string;
  title?: string;
  /** HEX colors from light to dark (five read best). Sampled from the photo when omitted and `extract` is on. */
  palette?: string[];
  /** Rows the photo spans. Leave it off every item and the gallery builds a masonry pattern that fills each row. */
  span?: 1 | 2;
}

export interface PalettePickerGalleryLabels {
  copy?: string;
  copied?: string;
  clear?: string;
  /** Start of each swatch's accessible name; the swatch's HEX code follows it. */
  pick?: string;
  /** Status line under the heading. `hex` is null while no color is active. */
  status?: (matches: number, total: number, hex: string | null) => string;
}

type SectionProps = React.ComponentProps<"section">;
type SectionAttributes = {
  [K in keyof SectionProps as K extends "onChange" | "onSelect" | "defaultValue" ? never : K]: SectionProps[K];
};

export interface PalettePickerGalleryProps extends SectionAttributes {
  items: PaletteImage[];
  eyebrow?: string;
  heading?: string;
  /** Active HEX color, or null for none. Leave undefined to let the gallery keep its own state. */
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (hex: string | null) => void;
  /** Called when a photo itself (not a swatch) is clicked. Without it, the click filters by the photo's most vivid swatch. */
  onSelect?: (item: PaletteImage) => void;
  /** Sample photos that have no `palette` (32×32 canvas, k-means in OKLab). Needs CORS; photos that refuse simply get no palette. */
  extract?: boolean;
  /** OKLab distance under which a photo's swatch counts as the picked color. */
  threshold?: number;
  /** Fixed column count. Responsive (2 to 5 by width) when omitted. */
  columns?: number;
  /** Walk through the photos on its own until someone interacts. Off by default and always off with reduced motion. */
  autoplay?: boolean;
  /** Milliseconds each photo gets in autoplay: fan out, pick, hold, fold. */
  interval?: number;
  labels?: PalettePickerGalleryLabels;
}

type Lab = [number, number, number];
interface Cell {
  row: number;
  col: number;
  span: number;
}
interface PaletteStore {
  [src: string]: string[] | null;
}

const DEFAULT_LABELS = { copy: "Copy", copied: "Copied", clear: "Clear color", pick: "Pick" };
const GAP = 8;
const ROW_RATIO = 0.68;
const CHIP_W = 28;
const CHIP_H = 40;
const STRIP_H = 6;
const FAN_STAGGER = 40;
const SINK_MS = 400;
const AUTOPLAY_DELAY = 1000;
const COPIED_MS = 1200;
const SAMPLE = 32;
const INTRO_LIFT = 2.4;

const useIsoLayoutEffect = typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function normalizeHex(input: string | null | undefined) {
  if (!input) return null;
  const found = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i.exec(input.trim());
  if (!found) return null;
  const digits = found[1]!.length === 3 ? [...found[1]!].map((d) => d + d).join("") : found[1]!;
  return `#${digits.toUpperCase()}`;
}

const isHex = (value: string | null): value is string => value !== null;
const toLinear = (c: number) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGamma = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
const clamp01 = (c: number) => Math.min(1, Math.max(0, c));

// sRGB (0–1) → OKLab, after Björn Ottosson's reference matrices.
function rgbToLab(r: number, g: number, b: number): Lab {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function labToHex([L, a, b]: Lab) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const linear = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  const digits = linear.map((c) => Math.round(clamp01(toGamma(clamp01(c))) * 255).toString(16).padStart(2, "0"));
  return `#${digits.join("").toUpperCase()}`;
}

function hexToLab(hex: string): Lab {
  const n = Number.parseInt(hex.slice(1), 16);
  return rgbToLab(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

const distance = (p: Lab, q: Lab) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
const chroma = (p: Lab) => Math.hypot(p[1], p[2]);

/** Index of the most vivid swatch, the photo's "lead" color. */
function leadIndex(labs: Lab[]) {
  let best = Math.floor(labs.length / 2);
  let bestChroma = 0.02;
  labs.forEach((lab, index) => {
    const c = chroma(lab);
    if (c > bestChroma) {
      bestChroma = c;
      best = index;
    }
  });
  return best;
}

// RGBA pixels → `count` colors: k-means in OKLab (seeded from lightness quantiles so the result is
// deterministic, eight rounds). Each cluster is then shown by its most vivid pixel among the half
// nearest the centre, so swatches are colors that really occur in the photo, not muddy averages.
function nearest(point: Lab, centers: Lab[]) {
  let best = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  centers.forEach((center, k) => {
    const d = distance(point, center);
    if (d < bestDistance) {
      bestDistance = d;
      best = k;
    }
  });
  return best;
}

function paletteFromPixels(data: Uint8ClampedArray, count: number) {
  const points: Lab[] = [];
  for (let i = 0; i + 3 < data.length; i += 4) {
    if ((data[i + 3] ?? 0) < 128) continue;
    points.push(rgbToLab((data[i] ?? 0) / 255, (data[i + 1] ?? 0) / 255, (data[i + 2] ?? 0) / 255));
  }
  if (points.length < count) return null;
  const byLightness = [...points].sort((p, q) => p[0] - q[0]);
  let centers = Array.from({ length: count }, (_, k) => byLightness[Math.floor(((k + 0.5) / count) * byLightness.length)] ?? points[0]!);
  for (let round = 0; round < 8; round++) {
    const totals = centers.map(() => ({ l: 0, a: 0, b: 0, n: 0 }));
    for (const point of points) {
      const total = totals[nearest(point, centers)]!;
      total.l += point[0];
      total.a += point[1];
      total.b += point[2];
      total.n += 1;
    }
    centers = totals.map((t, k) => (t.n ? ([t.l / t.n, t.a / t.n, t.b / t.n] as Lab) : centers[k]!));
  }
  const groups = centers.map(() => [] as Lab[]);
  for (const point of points) groups[nearest(point, centers)]!.push(point);
  const swatches = centers.map((center, k) => {
    const members = (groups[k] ?? []).sort((p, q) => distance(p, center) - distance(q, center));
    const inner = members.slice(0, Math.max(1, Math.ceil(members.length / 2)));
    return inner.reduce((best, p) => (chroma(p) > chroma(best) ? p : best), inner[0] ?? center);
  });
  return swatches.sort((p, q) => q[0] - p[0]).map(labToHex);
}

/**
 * Sample a photo into `count` HEX colors (light → dark). Resolves null when the image fails or the
 * canvas is tainted by a host without CORS; the gallery then shows the photo without a palette.
 */
export async function extractPalette(src: string, count = 5) {
  if (typeof document === "undefined") return null;
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.decoding = "async";
  image.src = src;
  try {
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = SAMPLE;
    canvas.height = SAMPLE;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) return null;
    context.drawImage(image, 0, 0, SAMPLE, SAMPLE);
    return paletteFromPixels(context.getImageData(0, 0, SAMPLE, SAMPLE).data, count);
  } catch {
    return null;
  }
}

// Places photos row by row. Without explicit spans, a few photos (one per column, staggered by the
// golden ratio) become two rows tall so the last row always closes flush.
function layoutCells(spans: (number | undefined)[], columns: number) {
  const count = spans.length;
  const cols = Math.max(1, Math.floor(columns));
  const explicit = spans.some((span) => span !== undefined);
  const tallStart: boolean[] = [];
  if (!explicit && count > cols) {
    let extra = (cols - (count % cols)) % cols;
    if (extra === 0 && count >= cols * 3) extra = cols;
    const rows = Math.ceil((count + extra) / cols);
    if (rows >= 2) {
      for (let k = 0; k < extra; k++) {
        const col = extra === cols ? k : Math.round(extra === 1 ? (cols - 1) / 2 : (k * (cols - 1)) / (extra - 1));
        const row = Math.floor(((col * 0.618 + 0.3) % 1) * (rows - 1));
        tallStart[row * cols + col] = true;
      }
    }
  }
  const taken: boolean[] = [];
  const cells: Cell[] = [];
  let cursor = 0;
  spans.forEach((wanted) => {
    while (taken[cursor]) cursor += 1;
    const span = explicit ? (wanted === 2 && !taken[cursor + cols] ? 2 : 1) : tallStart[cursor] ? 2 : 1;
    taken[cursor] = true;
    if (span === 2) taken[cursor + cols] = true;
    cells.push({ row: Math.floor(cursor / cols), col: cursor % cols, span });
  });
  return cells;
}

function neighbour(cells: Cell[], index: number, key: string) {
  const cell = cells[index];
  if (!cell) return null;
  const last = cells.length - 1;
  if (key === "ArrowRight") return Math.min(last, index + 1);
  if (key === "ArrowLeft") return Math.max(0, index - 1);
  if (key === "Home") return 0;
  if (key === "End") return last;
  if (key === "ArrowDown" || key === "ArrowUp") {
    const row = key === "ArrowDown" ? cell.row + cell.span : cell.row - 1;
    const found = cells.findIndex((c) => c.col === cell.col && row >= c.row && row < c.row + c.span);
    return found === -1 ? index : found;
  }
  return null;
}

export function PalettePickerGallery({
  items,
  eyebrow,
  heading,
  value: valueProp,
  defaultValue = null,
  onChange,
  onSelect,
  extract = true,
  threshold = 0.14,
  columns,
  autoplay = false,
  interval = 3200,
  labels: labelsProp,
  className,
  ref,
  onPointerDownCapture,
  onKeyDownCapture,
  ...rest
}: PalettePickerGalleryProps) {
  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  const uid = React.useId();
  const controlled = valueProp !== undefined;
  const [internal, setInternal] = React.useState(() => normalizeHex(defaultValue));
  const value = controlled ? normalizeHex(valueProp) : internal;

  const [extracted, setExtracted] = React.useState({} as PaletteStore);
  const [hovered, setHovered] = React.useState(null as number | null);
  const [focused, setFocused] = React.useState(null as number | null);
  const [pinned, setPinned] = React.useState(null as number | null);
  const [autoIndex, setAutoIndex] = React.useState(null as number | null);
  const [current, setCurrent] = React.useState(0);
  const [swatchCursor, setSwatchCursor] = React.useState(0);
  const [origin, setOrigin] = React.useState(null as number | null);
  const [copied, setCopied] = React.useState(false);
  const [reduced, setReduced] = React.useState(false);
  const [canHover, setCanHover] = React.useState(true);
  const [playing, setPlaying] = React.useState(autoplay);
  const [width, setWidth] = React.useState(0);

  const sectionRef = React.useRef(null as HTMLElement | null);
  const gridRef = React.useRef(null as HTMLUListElement | null);
  const hexRef = React.useRef(null as HTMLSpanElement | null);
  const photoRefs = React.useRef([] as (HTMLButtonElement | null)[]);
  const tileRefs = React.useRef([] as (HTMLLIElement | null)[]);
  const swatchRefs = React.useRef([] as (HTMLButtonElement | null)[][]);
  const intro = React.useRef([] as { tile: number; animation: Animation }[]);
  const introPlayed = React.useRef(false);
  const requested = React.useRef([] as string[]);
  const loaded = React.useRef([] as boolean[]);
  const mounted = React.useRef(false);
  const mountedAt = React.useRef(0);
  const lastPointer = React.useRef("mouse");
  const keyActivatedAt = React.useRef(0);
  const swipe = React.useRef(null as { id: number; x: number; y: number } | null);
  const swipedAt = React.useRef(0);
  const copyTimer = React.useRef(0);
  const autoValue = React.useRef(null as string | null);
  const lastHex = React.useRef(value);
  if (value) lastHex.current = value;

  const valueRef = React.useRef(value);
  valueRef.current = value;
  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;
  const controlledRef = React.useRef(controlled);
  controlledRef.current = controlled;
  const playingRef = React.useRef(playing);
  playingRef.current = playing;

  const palettes = React.useMemo(
    () =>
      items.map((item) => {
        const given = (item.palette ?? []).map(normalizeHex).filter(isHex);
        return given.length > 0 ? given : (extracted[item.src] ?? null);
      }),
    [items, extracted],
  );
  const labs = React.useMemo(() => palettes.map((palette) => (palette ? palette.map(hexToLab) : null)), [palettes]);
  const palettesRef = React.useRef(palettes);
  palettesRef.current = palettes;
  const labsRef = React.useRef(labs);
  labsRef.current = labs;

  const cols = Math.max(1, Math.floor(columns ?? (width < 460 ? 2 : width < 700 ? 3 : width < 1080 ? 4 : 5)));
  const colWidth = width > 0 ? (width - (cols - 1) * GAP) / cols : 160;
  const rowHeight = Math.max(64, Math.round(colWidth * ROW_RATIO));
  const narrow = width > 0 && width < 448;
  const chipScale = Math.min(1.25, Math.max(1, colWidth / 180));
  const spanKey = items.map((item) => item.span ?? 0).join();
  const cells = React.useMemo(
    () => layoutCells(spanKey.split(",").map((s) => (s === "1" || s === "2" ? Number(s) : undefined)), cols),
    [spanKey, cols],
  );

  const activeLab = value ? hexToLab(value) : null;
  const matches = labs.map((paletteLabs, index) => {
    if (!activeLab) return { match: null as boolean | null, hex: null as string | null };
    if (!paletteLabs) return { match: false, hex: null };
    let best = 0;
    let bestDistance = Number.POSITIVE_INFINITY;
    paletteLabs.forEach((lab, j) => {
      const d = distance(lab, activeLab);
      if (d < bestDistance) {
        bestDistance = d;
        best = j;
      }
    });
    return bestDistance < threshold ? { match: true, hex: palettes[index]?.[best] ?? null } : { match: false, hex: null };
  });
  const matchCount = matches.filter((m) => m.match === true).length;
  const openIndex = hovered ?? pinned ?? focused ?? autoIndex;

  React.useEffect(() => {
    mounted.current = true;
    mountedAt.current = performance.now();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hover = window.matchMedia("(hover: hover)");
    const update = () => {
      setReduced(motion.matches);
      setCanHover(hover.matches);
    };
    update();
    motion.addEventListener("change", update);
    hover.addEventListener("change", update);
    return () => {
      mounted.current = false;
      motion.removeEventListener("change", update);
      hover.removeEventListener("change", update);
    };
  }, []);

  useIsoLayoutEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const measure = () => setWidth(node.getBoundingClientRect().width);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // First frame: every photo already carries its folded palette strip (nothing fades in from zero). Once
  // the grid is measured, one diagonal wave lifts the strips like paint chips peeking out of a fan deck.
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section || width === 0 || introPlayed.current) return;
    introPlayed.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    intro.current = [...section.querySelectorAll("[data-swatch]")].map((node) => {
      const tile = Number(node.closest("[data-tile]")?.getAttribute("data-tile") ?? 0);
      const swatch = Number(node.getAttribute("data-swatch") ?? 0);
      const cell = cells[tile] ?? { row: 0, col: 0, span: 1 };
      const animation = node.animate([{ scale: "1 1" }, { scale: `1 ${INTRO_LIFT}` }, { scale: "1 1" }], {
        duration: 560,
        delay: (cell.col + cell.row) * 60 + swatch * 24,
        easing: "cubic-bezier(.3,.7,.3,1)",
      });
      return { tile, animation };
    });
  }, [width, cells]);
  React.useEffect(() => () => intro.current.forEach(({ animation }) => animation.cancel()), []);
  React.useEffect(() => {
    if (openIndex === null) return;
    for (const { tile, animation } of intro.current) if (tile === openIndex) animation.cancel();
  }, [openIndex]);

  React.useEffect(() => {
    if (!extract) return;
    for (const item of items) {
      if ((item.palette?.length ?? 0) > 0 || requested.current.includes(item.src)) continue;
      requested.current.push(item.src);
      void extractPalette(item.src).then((palette) => {
        if (mounted.current) setExtracted((prev) => ({ ...prev, [item.src]: palette }));
      });
    }
  }, [items, extract]);

  React.useEffect(() => setPlaying(autoplay), [autoplay]);
  React.useEffect(() => setCopied(false), [value]);
  React.useEffect(() => () => window.clearTimeout(copyTimer.current), []);
  React.useEffect(() => {
    if (current > items.length - 1) setCurrent(Math.max(0, items.length - 1));
  }, [current, items.length]);

  const commit = React.useCallback((next: string | null, source: number | null) => {
    setOrigin(source);
    if (!controlledRef.current) {
      // Mirror the new value before React re-renders, so an interaction landing in that gap (stopping the
      // autoplay right as it presses a swatch, or a second pick) compares against what was just chosen.
      valueRef.current = next;
      setInternal(next);
    }
    onChangeRef.current?.(next);
  }, []);

  const stopAutoplay = React.useCallback(() => {
    if (!playingRef.current) return;
    playingRef.current = false;
    setPlaying(false);
    setAutoIndex(null);
    if (autoValue.current && valueRef.current === autoValue.current) commit(null, null);
    autoValue.current = null;
  }, [commit]);

  // Autoplay (demo only): fan out a photo, press its most vivid swatch, hold the filter, fold, move on.
  React.useEffect(() => {
    if (!playing || reduced || items.length === 0) return;
    let timer = 0;
    let index = -1;
    let started = false;
    const visit = () => {
      const next = (index + 1) % items.length;
      if (!started && !loaded.current[next] && performance.now() - mountedAt.current < 2600) {
        timer = window.setTimeout(visit, 100);
        return;
      }
      started = true;
      index = next;
      setAutoIndex(index);
      timer = window.setTimeout(press, interval / 8);
    };
    const press = () => {
      const palette = palettesRef.current[index];
      const paletteLabs = labsRef.current[index];
      const hex = palette && paletteLabs ? (palette[leadIndex(paletteLabs)] ?? null) : null;
      if (hex) {
        autoValue.current = hex;
        commit(hex, index);
      }
      timer = window.setTimeout(release, (interval * 3) / 4);
    };
    const release = () => {
      if (autoValue.current && valueRef.current === autoValue.current) commit(null, index);
      autoValue.current = null;
      setAutoIndex(null);
      timer = window.setTimeout(visit, interval / 8);
    };
    timer = window.setTimeout(visit, AUTOPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [playing, reduced, items.length, interval, commit]);

  // While a fan is pinned, Escape anywhere folds it and a press outside the gallery lets it go.
  React.useEffect(() => {
    if (pinned === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      const inside = tileRefs.current[pinned]?.contains(document.activeElement) ?? false;
      setPinned(null);
      if (inside) photoRefs.current[pinned]?.focus();
      setFocused(null);
    };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && sectionRef.current?.contains(event.target)) return;
      setPinned(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [pinned]);

  const pick = (hex: string, index: number) => commit(hex === valueRef.current ? null : hex, index);

  const select = (index: number) => {
    const item = items[index];
    if (!item) return;
    if (onSelect) {
      onSelect(item);
      return;
    }
    const palette = palettes[index];
    const paletteLabs = labs[index];
    if (!palette || !paletteLabs) return;
    pick(palette[leadIndex(paletteLabs)]!, index);
  };

  const pin = (index: number | null) => {
    setPinned(index);
    if (index === null) return;
    setCurrent(index);
    const palette = palettes[index] ?? [];
    const at = value ? palette.indexOf(value) : -1;
    setSwatchCursor(at === -1 ? 0 : at);
  };

  const copy = async () => {
    const hex = valueRef.current;
    if (!hex) return;
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), COPIED_MS);
    } catch {
      // No clipboard (permission, insecure origin): select the HEX so the visitor can copy it by hand.
      const node = hexRef.current;
      const selection = window.getSelection();
      if (!node || !selection) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const onPhotoKey = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      keyActivatedAt.current = Date.now();
      if (event.repeat) return;
      if (pinned === index) select(index);
      else pin(index);
      return;
    }
    if (event.key === "Escape") {
      if (pinned === null && focused !== index) return;
      event.preventDefault();
      setPinned(null);
      setFocused(null);
      return;
    }
    const next = neighbour(cells, index, event.key);
    if (next === null) return;
    event.preventDefault();
    setCurrent(next);
    if (pinned !== null) pin(next);
    photoRefs.current[next]?.focus();
  };

  const onSwatchKey = (event: React.KeyboardEvent, index: number, j: number, count: number) => {
    let next = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (j + 1) % count;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (j - 1 + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    else if (event.key === "Escape") {
      event.preventDefault();
      setPinned(null);
      photoRefs.current[index]?.focus();
      setFocused(null);
      return;
    }
    if (next === -1) return;
    event.preventDefault();
    setSwatchCursor(next);
    swatchRefs.current[index]?.[next]?.focus();
  };

  const onPhotoClick = (index: number) => {
    const now = Date.now();
    if (now - keyActivatedAt.current < 500 || now - swipedAt.current < 500) return;
    setCurrent(index);
    if (lastPointer.current === "touch") {
      // Touch has no hover: the first tap fans the palette out, a second tap on the same photo selects it.
      if (pinned === index) select(index);
      else pin(index);
      return;
    }
    select(index);
  };

  const onGridPointerUp = (event: React.PointerEvent) => {
    const start = swipe.current;
    swipe.current = null;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    swipedAt.current = Date.now();
    const base = pinned ?? current;
    pin(Math.min(items.length - 1, Math.max(0, base + (dx < 0 ? 1 : -1))));
  };

  const rippleDelay = (index: number) => {
    if (reduced) return 0;
    const cell = cells[index];
    const from = origin === null ? undefined : cells[origin];
    if (!cell) return 0;
    if (!from) return Math.min(index * 24, 320);
    const d = Math.hypot(cell.col - from.col, cell.row + cell.span / 2 - (from.row + from.span / 2));
    return Math.round(Math.min(d * 55, 360));
  };

  const total = items.length;
  const status = labelsProp?.status
    ? labelsProp.status(matchCount, total, value)
    : value
      ? `${matchCount} of ${total} photos share ${value}`
      : `${canHover ? "Hover" : "Tap"} a photo to fan out its palette`;
  const shownHex = value ?? lastHex.current;
  const ease = "cubic-bezier(.2,.8,.2,1)";

  const pill = (
    <div
      data-active-pill
      data-copied={copied || undefined}
      inert={!value}
      aria-hidden={!value || undefined}
      className={cx(
        "flex h-9 items-center gap-1 rounded-full border border-border bg-card py-1 pl-1.5 pr-1 text-card-foreground",
        narrow ? "shadow-lg shadow-black/15 dark:shadow-black/60" : "shadow-sm shadow-black/5 dark:shadow-black/40",
      )}
      style={{
        opacity: value ? 1 : 0,
        transform: value ? "translateY(0px) scale(1)" : "translateY(6px) scale(0.96)",
        transition: reduced ? "none" : `opacity 240ms ease, transform 320ms ${ease}`,
      }}
    >
      <span aria-hidden className="size-6 shrink-0 rounded-full ring-1 ring-inset ring-foreground/15" style={{ background: shownHex ?? "transparent" }} />
      <span ref={hexRef} data-pill-hex className="px-1 font-mono text-xs font-medium tabular-nums">
        {shownHex}
      </span>
      <button
        type="button"
        data-copy
        onClick={() => void copy()}
        aria-label={copied ? `${labels.copied} ${shownHex ?? ""}` : `${labels.copy} ${shownHex ?? ""}`}
        className="inline-flex h-7 items-center gap-1 rounded-full px-2 text-xs font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {copied ? <Check aria-hidden className="size-3.5 text-chart-2" /> : <Copy aria-hidden className="size-3.5" />}
        <span>{copied ? labels.copied : labels.copy}</span>
      </button>
      <button
        type="button"
        data-clear
        onClick={() => commit(null, null)}
        aria-label={labels.clear}
        className="inline-flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X aria-hidden className="size-3.5" />
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? `${labels.copied} ${shownHex ?? ""}` : ""}
      </span>
    </div>
  );

  return (
    <section
      {...rest}
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") return ref(node);
        if (ref) ref.current = node;
      }}
      data-slot="palette-picker-gallery"
      data-value={value ?? ""}
      data-open={openIndex ?? ""}
      data-pinned={pinned ?? ""}
      data-columns={cols}
      data-autoplay={playing && !reduced ? "" : undefined}
      aria-labelledby={heading ? `${uid}-heading` : undefined}
      className={cx("@container relative w-full text-foreground", className)}
      onPointerDownCapture={(event) => {
        onPointerDownCapture?.(event);
        lastPointer.current = event.pointerType;
        stopAutoplay();
      }}
      onKeyDownCapture={(event) => {
        onKeyDownCapture?.(event);
        stopAutoplay();
      }}
    >
      <header className={cx("mb-3 flex", narrow ? "flex-col" : "items-end justify-between gap-4")}>
        <div className="min-w-0">
          {eyebrow && <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p>}
          {heading && (
            <h2 id={`${uid}-heading`} className="mt-1 text-pretty text-lg font-semibold leading-snug tracking-tight @5xl:text-2xl">
              {heading}
            </h2>
          )}
          <p data-status aria-live="polite" className="mt-0.5 truncate text-xs text-muted-foreground">
            {status}
          </p>
        </div>
        {!narrow && <div className="flex h-9 w-[212px] shrink-0 items-center justify-end">{pill}</div>}
      </header>

      <ul
        ref={gridRef}
        role="list"
        aria-label={heading ?? "Photos"}
        className="grid touch-pan-y"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gridAutoRows: `${rowHeight}px`, gap: GAP }}
        onPointerDown={(event) => {
          if (event.pointerType === "touch") swipe.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
        }}
        onPointerUp={onGridPointerUp}
        onPointerCancel={() => {
          swipe.current = null;
        }}
      >
        {items.map((item, index) => {
          const cell = cells[index] ?? { row: 0, col: 0, span: 1 };
          const palette = palettes[index];
          const { match, hex: dotHex } = matches[index] ?? { match: null, hex: null };
          const open = openIndex === index;
          const sunk = match === false && !open;
          const lifted = match === true;
          const dimmed = openIndex !== null && !open && !lifted;
          const delay = rippleDelay(index);
          const title = item.title ?? item.alt ?? `Photo ${index + 1}`;
          const count = palette?.length ?? 0;
          const segment = colWidth / Math.max(1, count);
          const spacing = count > 1 ? Math.min(34 * chipScale, (colWidth - CHIP_W * chipScale - 14) / (count - 1)) : 0;
          const fanId = `${uid}-fan-${index}`;
          const label = `${title}${count ? `, ${count} colors` : ""}${value ? (match ? `, shares ${dotHex ?? value}` : ", no match") : ""}`;
          return (
            <li
              key={item.id}
              ref={(node) => {
                tileRefs.current[index] = node;
              }}
              data-tile={index}
              className={cx("relative min-w-0", (open || lifted) && "z-10")}
              style={{
                gridColumn: cell.col + 1,
                gridRow: `${cell.row + 1} / span ${cell.span}`,
                transform: lifted ? "translateY(-3px) scale(1.03)" : open ? "translateY(0px) scale(1.02)" : "translateY(0px) scale(1)",
                filter: dimmed ? "brightness(0.92)" : "brightness(1)",
                transition: reduced ? "none" : `transform ${SINK_MS}ms ${ease} ${lifted && !open ? delay : 0}ms, filter 220ms ease`,
              }}
              onPointerEnter={(event) => {
                if (event.pointerType === "touch") return;
                stopAutoplay();
                setHovered(index);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "touch") return;
                setHovered((h) => (h === index ? null : h));
              }}
              onFocus={(event) => {
                if (event.target instanceof HTMLElement && event.target.matches(":focus-visible")) setFocused(index);
              }}
              onBlur={(event) => {
                if (event.relatedTarget instanceof Node && event.currentTarget.contains(event.relatedTarget)) return;
                setFocused((f) => (f === index ? null : f));
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl shadow-xl shadow-black/25 dark:shadow-black/70"
                style={{ opacity: lifted ? 1 : 0, transition: reduced ? "none" : `opacity ${SINK_MS}ms ease ${delay}ms` }}
              />
              <div
                data-sink
                className="relative size-full"
                style={{
                  filter: sunk ? "grayscale(1)" : "grayscale(0)",
                  opacity: sunk ? 0.45 : 1,
                  transition: reduced ? "none" : `filter ${SINK_MS}ms ease ${delay}ms, opacity ${SINK_MS}ms ease ${delay}ms`,
                }}
              >
                <button
                  ref={(node) => {
                    photoRefs.current[index] = node;
                  }}
                  type="button"
                  data-photo={index}
                  data-match={match === null ? "" : String(match)}
                  aria-label={label}
                  aria-expanded={count ? pinned === index : undefined}
                  aria-controls={count ? fanId : undefined}
                  tabIndex={current === index ? 0 : -1}
                  onClick={() => onPhotoClick(index)}
                  onKeyDown={(event) => onPhotoKey(event, index)}
                  className="relative block size-full cursor-pointer overflow-hidden rounded-xl bg-muted outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <img
                    src={item.src}
                    alt=""
                    draggable={false}
                    decoding="async"
                    onLoad={() => {
                      loaded.current[index] = true;
                    }}
                    onError={() => {
                      loaded.current[index] = true;
                    }}
                    className="absolute inset-0 size-full select-none object-cover"
                  />
                  <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-foreground/10" />
                </button>
                {palette && count > 0 && (
                  <div
                    id={fanId}
                    role="group"
                    aria-label={`${title} palette`}
                    inert={!open}
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
                  >
                    {palette.map((hex, j) => {
                      const o = j - (count - 1) / 2;
                      const fanned = `translate(${(o * (spacing - segment)).toFixed(2)}px, ${(-14 * chipScale + o * o * 2 * chipScale).toFixed(2)}px) rotate(${(o * 6).toFixed(2)}deg) scale(${chipScale.toFixed(3)}, ${chipScale.toFixed(3)})`;
                      const folded = `translate(0px, 0px) rotate(0deg) scale(${(segment / CHIP_W).toFixed(3)}, ${(STRIP_H / CHIP_H).toFixed(3)})`;
                      const wait = open ? j * FAN_STAGGER : (count - 1 - j) * 18;
                      return (
                        <button
                          key={`${hex}-${j}`}
                          ref={(node) => {
                            const row = swatchRefs.current[index] ?? [];
                            row[j] = node;
                            swatchRefs.current[index] = row;
                          }}
                          type="button"
                          data-swatch={j}
                          data-hex={hex}
                          aria-label={`${labels.pick} ${hex}`}
                          aria-pressed={value === hex}
                          tabIndex={pinned === index && swatchCursor === j ? 0 : -1}
                          onClick={() => pick(hex, index)}
                          onKeyDown={(event) => onSwatchKey(event, index, j, count)}
                          onFocus={() => setSwatchCursor(j)}
                          className={cx(
                            "absolute bottom-0 rounded-[6px] shadow-md shadow-black/20 outline-none transition-[translate] duration-150 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background dark:shadow-black/60",
                            open ? "pointer-events-auto cursor-pointer" : "pointer-events-none",
                            value === hex && "ring-2 ring-foreground ring-offset-1 ring-offset-background",
                          )}
                          style={{
                            left: `${((j + 0.5) / count) * 100}%`,
                            width: CHIP_W,
                            height: CHIP_H,
                            marginLeft: -CHIP_W / 2,
                            transformOrigin: "50% 100%",
                            transform: open ? fanned : folded,
                            transition: reduced
                              ? "none"
                              : open
                                ? `transform 420ms cubic-bezier(.3,1.35,.5,1) ${wait}ms, translate 150ms ease`
                                : `transform 260ms cubic-bezier(.4,0,.9,.6) ${wait}ms, translate 150ms ease`,
                          }}
                        >
                          <span aria-hidden className="absolute inset-0 rounded-[inherit]" style={{ background: hex }} />
                          <span aria-hidden className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/10 dark:ring-white/15" />
                          <span
                            aria-hidden
                            data-swatch-hex
                            className="absolute inset-x-0 bottom-0 flex h-[13px] items-center justify-center rounded-b-[inherit] bg-card font-mono text-[7px] font-medium leading-none tracking-tighter text-card-foreground"
                            style={{
                              opacity: open ? 1 : 0,
                              transition: reduced ? "none" : `opacity 160ms ease ${open ? wait + 160 : 0}ms`,
                            }}
                          >
                            {hex}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
                <span
                  aria-hidden
                  data-dot
                  className="pointer-events-none absolute right-2 top-2 size-3.5 rounded-full shadow-md shadow-black/40 ring-2 ring-white/90"
                  style={{
                    background: dotHex ?? "transparent",
                    opacity: lifted ? 1 : 0,
                    transform: lifted ? "scale(1)" : "scale(0.4)",
                    transition: reduced ? "none" : `opacity 220ms ease ${delay + 180}ms, transform 320ms ${ease} ${delay + 180}ms`,
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      {narrow && (
        <div data-pill-dock className="pointer-events-none sticky bottom-3 z-20 mt-3 flex h-0 items-end justify-center">
          <div className="pointer-events-auto">{pill}</div>
        </div>
      )}
    </section>
  );
}

export default PalettePickerGallery;
