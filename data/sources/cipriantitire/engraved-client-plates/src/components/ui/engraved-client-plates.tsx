"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export type ClientPlatesOptions = {
  /** Small caps line above the title. */
  label?: string;
  title?: string;
  /** One line beside the title. */
  note?: string;
  /** How many plates, 4 to 8. */
  count?: number;
  /** The quiet number under each plate. */
  stats?: boolean;
  fixing?: "mixed" | "screws" | "rivets";
  /** "drift" sets the plates on a slow belt, with a Pause key. It never runs under reduced motion. */
  motion?: "static" | "drift";
  /** Belt speed in px per second, 10 to 80. */
  speed?: number;
  /** "auto" follows the page: prefers-color-scheme, a .dark ancestor, or a [data-finish] ancestor. */
  finish?: "auto" | "aluminium" | "graphite";
};

/** Dark when a .dark / [data-theme=dark] ancestor says so, light when .light says so, else the system's setting. */
const isDark = (host: Element, mq: MediaQueryList | null): boolean => {
  if (host.closest(".dark, [data-theme='dark']")) return true;
  if (host.closest(".light, [data-theme='light']")) return false;
  return !!mq?.matches;
};


/**
 * Engraved Client Plates - TACTILE UI block, cut 2 (00.2).
 *
 * "Used in production by…": the clients of an agent-infrastructure product
 * as small metal name plates fixed to the desk - each with four slotted
 * screws or two rivets, a chamfered edge, and the company's mark and name CUT
 * INTO the plate, not printed on it. On aluminium the cut is filled with dark
 * enamel; on graphite the plate is anodised black and the cut shows bright
 * metal. Under each plate, optionally, one quiet number.
 *
 * Mechanism: CSS and inline SVG. The engraving is one drop-shadow pair on the
 * whole engraved group (mark and type alike): a dark line on the upper wall of
 * every cut, a lit lip on the lower one - the lamp is fixed above left. The
 * screws' slots are turned the way a fitter leaves them (a stable angle from
 * the company's name); their sheen does not turn with them.
 *
 * Motion: static by default. `motion: 'drift'` sets the plates on a slow belt
 * in a recessed channel (a duplicated track, translateX only), with a Pause
 * key; it pauses on hover, on focus, off screen, and never runs under reduced
 * motion, where the plates stand in their grid.
 *
 * Accessibility: a section named by its h2; the plates are a list; every
 * name is real text (the marks and the screws are hidden); the drifting
 * duplicate is aria-hidden and inert.
 */

/** The clients, invented for this block: believable companies from the product's world. */
const CLIENTS = Object.freeze([
  Object.freeze({ id: 'fenmoor', name: 'Fenmoor', kind: 'Energy co-op', type: 'caps', fix: 'screws', mark: 'fen', stat: '4,100 meters read every hour' }),
  Object.freeze({ id: 'allard', name: 'Allard', kind: 'Robotics lab', type: 'caps', fix: 'rivets', mark: 'hex', stat: '96 robot cells on one scheduler' }),
  Object.freeze({ id: 'lading', name: 'Lading', kind: 'Freight API', type: 'title', fix: 'screws', mark: 'crates', stat: '2.3 M shipments routed a month' }),
  Object.freeze({ id: 'understudy', name: 'understudy', kind: 'Agent studio', type: 'lower', fix: 'rivets', mark: 'pair', stat: '312 agents in production' }),
  Object.freeze({ id: 'northmere', name: 'Northmere', kind: 'Water telemetry', type: 'caps', fix: 'screws', mark: 'drop', stat: '11,400 sensors on one bus' }),
  Object.freeze({ id: 'tallyman', name: 'Tallyman', kind: 'Ledger API', type: 'title', fix: 'rivets', mark: 'tally', stat: '£1.2 bn reconciled nightly' }),
  Object.freeze({ id: 'cairnfield', name: 'Cairnfield', kind: 'Solar farms', type: 'caps', fix: 'screws', mark: 'cairn', stat: '38 MW behind one dashboard' }),
  Object.freeze({ id: 'seastack', name: 'seastack', kind: 'Edge inference', type: 'lower', fix: 'rivets', mark: 'stacks', stat: '40 edge sites, one fleet' }),
]);

/** Engraved marks on a 32 grid: strokes and fills are both cut, so both read the same in either finish. */
const MARKS: Readonly<Record<string, string>> = Object.freeze({
  fen: '<path d="M7 17a9 9 0 0 1 18 0z" fill="currentColor"/><path d="M4 21h24M8 25h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/>',
  hex: '<path d="M16 3.5 27 9.75v12.5L16 28.5 5 22.25V9.75z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" fill="none"/><path d="M11 20.5l5-4.5 5 4.5M16 16v-5.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>',
  crates: '<rect x="4" y="16" width="11" height="11" rx="1" fill="currentColor"/><rect x="17" y="16" width="11" height="11" rx="1" fill="currentColor"/><rect x="10.5" y="4" width="11" height="10" rx="1" fill="currentColor"/>',
  pair: '<circle cx="12" cy="16" r="8.5" stroke="currentColor" stroke-width="2.4" fill="none"/><circle cx="20" cy="16" r="8.5" fill="currentColor"/>',
  drop: '<path d="M16 4.5c4.8 6.2 7.5 10.5 7.5 14a7.5 7.5 0 0 1-15 0c0-3.5 2.7-7.8 7.5-14z" fill="currentColor"/><path d="M4 28h24" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  tally: '<path d="M7 6v20M12 6v20M17 6v20M22 6v20M4 22 26 9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/>',
  cairn: '<ellipse cx="16" cy="24.6" rx="10.5" ry="3.6" fill="currentColor"/><ellipse cx="14.8" cy="17.4" rx="7.2" ry="3.1" fill="currentColor"/><ellipse cx="16.6" cy="11" rx="4.4" ry="2.5" fill="currentColor"/><circle cx="25" cy="6.5" r="2.6" fill="currentColor"/>',
  stacks: '<path d="M7 27V12M13 27V6M19 27V14M25 27V19" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/><path d="M3 27.5h26" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
});

const FINISHES: readonly string[] = Object.freeze(['auto', 'aluminium', 'graphite']);
const MOTIONS: readonly string[] = Object.freeze(['static', 'drift']);
const FIXINGS: readonly string[] = Object.freeze(['mixed', 'screws', 'rivets']);

const DEFAULTS: Required<ClientPlatesOptions> = Object.freeze({
  label: 'Customers',
  title: 'Used in production by',
  note: '1,940 teams run agents on Lode, from co-ops to banks.',
  count: 6,
  stats: true,
  fixing: 'mixed',
  motion: 'static',
  speed: 40,
  finish: 'auto',
});

/** A stable small number from a string: the same plate is always fitted the same way. */
function hash(s: any) {
  let h = 2166136261;
  for (const ch of String(s)) { h ^= ch.codePointAt(0) ?? 0; h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/** How a fitter left the four slots: angles in degrees, stable per plate, never all alike. */
function slotAngles(name: any, n = 4) {
  const h = hash(name);
  return Array.from({ length: n }, (_, i) => ((h >>> (i * 7)) % 180) - 90);
}

/**
 * Type sizes on a plate are shares of its width (cqi). The advance of each
 * style, per character with its tracking, in ems of Instrument Sans Bold:
 * enough to fit a name to the room between the mark and the far fixing.
 */
const ADVANCE: Readonly<Record<string, number>> = Object.freeze({ caps: 0.87, title: 0.58, lower: 0.56, kind: 0.84 });
const BASE_SIZE: Readonly<Record<string, number>> = Object.freeze({ caps: 9.6, title: 12, lower: 12, kind: 4 });
/** The room for the name, in cqi: 100 − 2 × 12 inset − 17 mark − 5 gap. */
const ROOM = 54;

/** How much a line of engraving must shrink to fit: 1 when it fits already. */
function fitScale(text: any, style: any, room = ROOM) {
  const w = [...String(text)].length * ADVANCE[style] * BASE_SIZE[style];
  return w <= room ? 1 : Math.max(0.5, Math.floor((room / w) * 1000) / 1000);
}

/** The fixing a plate gets. */
const fixingFor = (client: any, fixing: any) => (fixing === 'mixed' ? client.fix : fixing);

/** Seconds for one lap of the belt: the same pace (px/s) whatever the count. */
const lapSeconds = (count: any, speed: any) => Math.round((count * 260) / Math.max(10, speed));

/** Columns per composition: one row where it fits, else a grid. */
function columns(count: any, width: any) {
  if (width >= 1000) return count <= 6 ? count : Math.ceil(count / 2);
  if (width >= 600) return count === 4 || count === 8 ? 4 : 3;
  return 2;
}

function normalise(opts: ClientPlatesOptions = {}, prev: Required<ClientPlatesOptions> = DEFAULTS): Required<ClientPlatesOptions> {
  const o: any = { ...prev, ...opts };
  for (const k of ['label', 'title', 'note']) o[k] = String(o[k] ?? '');
  o.count = Math.min(CLIENTS.length, Math.max(4, Math.round(Number(o.count)) || DEFAULTS.count));
  o.stats = o.stats !== false && o.stats !== 'false';
  if (!FIXINGS.includes(o.fixing)) o.fixing = DEFAULTS.fixing;
  if (!MOTIONS.includes(o.motion)) o.motion = DEFAULTS.motion;
  o.speed = Math.min(80, Math.max(10, Math.round(Number(o.speed)) || DEFAULTS.speed));
  if (!FINISHES.includes(o.finish)) o.finish = 'auto';
  return o;
}

function resolveFinish(own: string, around: string | undefined, prefersDark: boolean, tone: string | undefined) {
  if (own === 'aluminium' || own === 'graphite') return own;
  if (around === 'aluminium' || around === 'graphite') return around;
  // Any other finish around it (another family's: porcelain, black) by its tone.
  if (tone === 'light' || tone === 'dark') return tone === 'dark' ? 'graphite' : 'aluminium';
  return prefersDark ? 'graphite' : 'aluminium';
}

const esc = (s: any) => String(s).replace(/[&<>"']/g, (c) => (({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }) as Record<string, string>)[c] as string);

/** A slotted screw: the head and its sheen stay put; only the slot is turned. */
const screw = (deg: any) => `<svg class="cpl-screw" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="5.4" class="cpl-sink"/><circle cx="6" cy="6" r="4.3" class="cpl-head"/><ellipse cx="4.6" cy="4.3" rx="2" ry="1.4" class="cpl-shine"/><g transform="translate(.3 .45)"><path d="M2.7 6h6.6" class="cpl-slot-lip" transform="rotate(${deg} 6 6)"/></g><path d="M2.7 6h6.6" class="cpl-slot" transform="rotate(${deg} 6 6)"/></svg>`;
const rivet = () => '<svg class="cpl-rivet" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="5.3" class="cpl-sink"/><circle cx="6" cy="6" r="4.5" class="cpl-dome"/><circle cx="5.55" cy="5.5" r="4" class="cpl-dome-lo"/><ellipse cx="4.7" cy="4.5" rx="1.9" ry="1.4" class="cpl-shine"/></svg>';

function plateHtml(c: any, o: any, uid: any) {
  const fix = fixingFor(c, o.fixing);
  const a = slotAngles(c.name);
  const fixings = fix === 'screws'
    ? `<span class="cpl-fix cpl-fix--tl">${screw(a[0])}</span><span class="cpl-fix cpl-fix--tr">${screw(a[1])}</span><span class="cpl-fix cpl-fix--bl">${screw(a[2])}</span><span class="cpl-fix cpl-fix--br">${screw(a[3])}</span>`
    : `<span class="cpl-fix cpl-fix--l">${rivet()}</span><span class="cpl-fix cpl-fix--r">${rivet()}</span>`;
  return `<div class="cpl-plate" data-fix="${fix}" data-type="${c.type}" style="--fit: ${fitScale(c.name, c.type)}; --fit-kind: ${fitScale(c.kind, 'kind')}">
      ${fixings}
      <div class="cpl-cut">
        <svg class="cpl-mark" viewBox="0 0 32 32" aria-hidden="true">${MARKS[c.mark]}</svg>
        <p class="cpl-name" id="${uid}-${c.id}"><span class="cpl-word">${esc(c.name)}</span><span class="cpl-kind">${esc(c.kind)}</span></p>
      </div>
    </div>`;
}

/**
 * The cut, as one SVG filter: a band of shadow along the upper-left wall
 * inside every stroke (the wall that faces away from the lamp) and a lit lip
 * just below-right of it (the wall that faces the lamp). Flood colours come
 * from the finish's tokens, so the same filter cuts both plates.
 */
const engraveDefs = (uid: any) => `<svg class="cpl-defs" aria-hidden="true" focusable="false"><filter id="${uid}-cut" x="-4%" y="-12%" width="108%" height="130%" color-interpolation-filters="sRGB">
  <feOffset in="SourceAlpha" dx="0.35" dy="0.8" result="down"/>
  <feFlood class="cpl-f-lip" result="lipColour"/>
  <feComposite in="lipColour" in2="down" operator="in" result="lip"/>
  <feOffset in="SourceAlpha" dx="0.5" dy="1.1" result="shifted"/>
  <feComposite in="SourceAlpha" in2="shifted" operator="out" result="upperWall"/>
  <feFlood class="cpl-f-wall" result="wallColour"/>
  <feComposite in="wallColour" in2="upperWall" operator="in" result="wall"/>
  <feMerge><feMergeNode in="lip"/><feMergeNode in="SourceGraphic"/><feMergeNode in="wall"/></feMerge>
</filter></svg>`;

let seq = 0;

/**
 * @param {HTMLElement} host
 * @param {object} opts see DEFAULTS
 * @returns {{ root: HTMLElement, update(opts: object): void, destroy(): void, readonly paused: boolean }}
 */
function mount(host: HTMLElement, opts: ClientPlatesOptions = {}) {
  let o = normalise(opts);
  const uid = `cpl${(seq += 1)}`;
  const root = document.createElement('section');
  root.className = 'cpl';
  root.dataset.block = 'client-plates';
  root.setAttribute('aria-labelledby', `${uid}-title`);
  host.append(root);
  let paused = false;

  const render = () => {
    const list = CLIENTS.slice(0, o.count);
    const items = (dup: any) => list.map((c) => `<li class="cpl-item">
    ${plateHtml(c, o, dup ? `${uid}d` : uid)}
    ${o.stats ? `<p class="cpl-stat">${esc(c.stat)}</p>` : ''}
  </li>`).join('');
    root.dataset.count = String(o.count);
    root.dataset.motion = o.motion;
    root.dataset.stats = String(o.stats);
    root.dataset.paused = String(paused);
    root.style.setProperty('--cpl-lap', `${lapSeconds(o.count, o.speed)}s`);
    root.style.setProperty('--cpl-engrave', `url(#${uid}-cut)`);
    root.style.setProperty('--cpl-cols-wide', String(columns(o.count, 1000)));
    root.style.setProperty('--cpl-cols-mid', String(columns(o.count, 600)));
    const drift = o.motion === 'drift';
    root.innerHTML = `${engraveDefs(uid)}<div class="cpl-wrap">
  <header class="cpl-head">
    <div>
      <p class="cpl-label"></p>
      <h2 class="cpl-title" id="${uid}-title"></h2>
    </div>
    <div class="cpl-side">
      <p class="cpl-note"></p>
      ${drift ? `<button type="button" class="cpl-key" data-f="pause" aria-pressed="${paused}">${paused ? 'Resume' : 'Pause'}</button>` : ''}
    </div>
  </header>
  <div class="cpl-belt"><div class="cpl-track">
    <ul class="cpl-list" role="list">${items(false)}</ul>${drift ? `<ul class="cpl-list cpl-list--dup" role="list" aria-hidden="true" inert>${items(true)}</ul>` : ''}
  </div></div>
</div>`;
    root.querySelector('.cpl-label')!.textContent = o.label;
    root.querySelector('.cpl-title')!.textContent = o.title;
    root.querySelector('.cpl-note')!.textContent = o.note;
  };

  const onClick = (e: any) => {
    const key = e.target.closest('[data-f="pause"]');
    if (!key) return;
    paused = !paused;
    root.dataset.paused = String(paused);
    key.setAttribute('aria-pressed', String(paused));
    key.textContent = paused ? 'Resume' : 'Pause';
  };
  root.addEventListener('click', onClick);

  const dark = typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: dark)') : null;
  const applyFinish = () => {
    const f = resolveFinish(o.finish, (host.closest('[data-finish]') as HTMLElement | null)?.dataset.finish, isDark(host, dark), (host.closest('[data-tone="light"], [data-tone="dark"]') as HTMLElement | null)?.dataset.tone);
    if (root.dataset.finish !== f) root.dataset.finish = f;
  };
  const finishObs = new MutationObserver(applyFinish);
  finishObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-finish', 'class', 'data-theme'], subtree: true });
  dark?.addEventListener('change', applyFinish);

  const io = typeof IntersectionObserver === 'function'
    ? new IntersectionObserver(([e]) => { root.dataset.visible = String(e.isIntersecting); })
    : null;
  io?.observe(root);

  render();
  applyFinish();

  return {
    root,
    get paused() { return paused; },
    update(next = {}) {
      o = normalise(next, o);
      render();
      applyFinish();
    },
    destroy() {
      root.removeEventListener('click', onClick);
      finishObs.disconnect();
      dark?.removeEventListener('change', applyFinish);
      io?.disconnect();
      root.remove();
    },
  };
}

export type ClientPlatesProps = ClientPlatesOptions & { className?: string; style?: CSSProperties };

/** "Used in production by...": a row of engraved metal name plates, each client's mark cut into the metal. */
export function ClientPlates({ className, style, ...options }: ClientPlatesProps) {
  const host = useRef<HTMLDivElement>(null);
  const key = JSON.stringify(options);

  useEffect(() => {
    if (!host.current) return;
    const block = mount(host.current, JSON.parse(key) as ClientPlatesOptions);
    return () => block.destroy();
  }, [key]);

  return (
    <>
      <style>{CSS}</style>
      <div ref={host} className={className} style={{ width: "100%", ...style }} />
    </>
  );
}

export default ClientPlates;

// Fonts embedded as data URIs (SIL OFL 1.1), so the piece needs no files and no network.
const INSTRUMENT_SANS_400 = "data:font/woff2;base64,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";
const INSTRUMENT_SANS_700 = "data:font/woff2;base64,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";

// The stylesheet, as the source ships it (scoped under .cpl).
const CSS = `/* Engraved Client Plates - TACTILE UI block, cut 2 (00.2). Everything under .cpl.
   Face: Instrument Sans (SIL OFL 1.1), embedded as data URIs below, under its
   licence. The tokens are the Tactile UI Kit's own names and values, defined
   here so the block needs nothing else; client-plates.mjs writes the resolved
   finish on the root. */

@font-face { font-family: 'CP Instrument Sans'; src: url("${INSTRUMENT_SANS_400}") format('woff2'); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: 'CP Instrument Sans'; src: url("${INSTRUMENT_SANS_700}") format('woff2'); font-weight: 700; font-style: normal; font-display: swap; }

/* ------------------------------------------------------------------ tokens */
.cpl {
  color-scheme: light;
  --tui-desk: #d8d7d2;
  --tui-face-hi: #f2f2ef;
  --tui-well: #d3d4d0;
  --tui-skirt: #a4a5a1;
  --tui-ink: #1b1c1e;
  --tui-ink-2: #4b4d51;
  --tui-rule: rgb(27 28 30 / 0.16);
  --tui-hl: rgb(255 255 255 / 0.9);
  --tui-sh: 24 25 28;
  --tui-sh-a: 0.24;
  --tui-focus: #1b1c1e;
  --tui-ease: cubic-bezier(0.2, 0.7, 0.2, 1);
  --tui-well-fill: linear-gradient(to bottom, color-mix(in oklab, var(--tui-well) 86%, rgb(var(--tui-sh))), var(--tui-well) 55%);
  --tui-inset:
    inset 0 3px 3px -2px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 2.6)),
    inset 0 9px 12px -9px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.8)),
    inset 0 0 0 1px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 0.45)),
    inset 0 -1px 0 color-mix(in oklab, var(--tui-hl) 60%, transparent),
    0 1px 0 var(--tui-hl),
    0 -1px 0 rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 0.35));
  --tui-pressed:
    inset 0 5px 5px -4px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 3)),
    inset 4px 0 4px -4px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.4)),
    inset -4px 0 4px -4px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.4)),
    0 -1px 0 rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.3)),
    0 1px 0 var(--tui-hl);
  --tui-noise: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.28 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  --cpl-brush: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Cfilter id='b' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.0035 .9' numOctaves='2' seed='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 1.6 0 0 0 -.62'/%3E%3C/filter%3E%3Crect width='300' height='120' filter='url(%23b)'/%3E%3C/svg%3E");
  --cpl-brush-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Cfilter id='b' x='0' y='0' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.0035 .9' numOctaves='2' seed='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 1.1 0 0 0 -.5'/%3E%3C/filter%3E%3Crect width='300' height='120' filter='url(%23b)'/%3E%3C/svg%3E");

  /* The plate: brushed aluminium, the cut filled with dark enamel. */
  --cpl-plate-hi: #eeeeea;
  --cpl-plate: #dcdcd7;
  --cpl-plate-lo: #c6c7c2;
  --cpl-chamfer: linear-gradient(135deg, rgb(255 255 255 / 0.95), rgb(255 255 255 / 0.35) 30%, rgb(0 0 0 / 0.06) 55%, rgb(0 0 0 / 0.32));
  --cpl-cut: #26272a;
  --cpl-cut-2: #3d3e42;
  --cpl-lip: rgb(255 255 255 / 0.92);
  --cpl-wall: rgb(0 0 0 / 0.55);
  --cpl-steel: #d9dad6;
  --cpl-steel-lo: #8e8f8b;
  --cpl-sans: 'CP Instrument Sans', 'Instrument Sans', ui-sans-serif, system-ui, sans-serif;

  position: relative;
  container: cpl / inline-size;
  background: var(--tui-desk);
  color: var(--tui-ink);
  font: 400 15px/1.55 var(--cpl-sans);
  font-feature-settings: 'tnum' 1;
  -webkit-font-smoothing: antialiased;
}
/* Graphite: anodised black, the cut and the chamfer showing bright metal. */
.cpl[data-finish='graphite'] {
  color-scheme: dark;
  --tui-desk: #0e0f10;
  --tui-face-hi: #28292c;
  --tui-well: #121315;
  --tui-skirt: #09090a;
  --tui-ink: #e8e6e1;
  --tui-ink-2: #a6a7a9;
  --tui-rule: rgb(232 230 225 / 0.11);
  --tui-hl: rgb(255 255 255 / 0.11);
  --tui-sh: 0 0 0;
  --tui-sh-a: 0.55;
  --tui-focus: #e8e6e1;
  --tui-well-fill: linear-gradient(to bottom, #070808, var(--tui-well) 45%, #17181a);
  --cpl-brush: var(--cpl-brush-dark);
  --cpl-plate-hi: #2a2b2e;
  --cpl-plate: #1c1d1f;
  --cpl-plate-lo: #141517;
  --cpl-chamfer: linear-gradient(135deg, rgb(236 237 233 / 0.95), rgb(200 201 197 / 0.6) 30%, rgb(120 121 118 / 0.55) 60%, rgb(70 71 69 / 0.8));
  --cpl-cut: #d0d2cd;
  --cpl-cut-2: #a9aba6;
  --cpl-lip: rgb(255 255 255 / 0.16);
  --cpl-wall: rgb(0 0 0 / 0.62);
  --cpl-steel: #c7c8c4;
  --cpl-steel-lo: #6a6b68;
}
.cpl *, .cpl *::before, .cpl *::after { box-sizing: border-box; }

/* ------------------------------------------------------------------ layout */
.cpl-wrap {
  width: min(100% - 2 * clamp(20px, 5cqi, 64px), 1240px);
  margin-inline: auto;
  padding-block: clamp(48px, 7cqi, 104px);
}
.cpl-head {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: 16px 48px;
  margin-bottom: clamp(28px, 4cqi, 52px);
  padding-bottom: 18px;
  border-bottom: 1px solid var(--tui-rule);
}
.cpl-label {
  margin: 0 0 12px;
  font: 700 10.5px/1.2 var(--cpl-sans);
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--tui-ink-2);
}
.cpl-title {
  margin: 0;
  font: 700 clamp(26px, 2.8cqi, 36px)/1.05 var(--cpl-sans);
  letter-spacing: -0.03em;
}
.cpl-side { display: flex; align-items: center; gap: 14px; }
.cpl-note { margin: 0; max-width: 40ch; font-size: 14.5px; color: var(--tui-ink-2); text-wrap: pretty; }

.cpl-list {
  display: grid;
  grid-template-columns: repeat(var(--cpl-cols-wide, 6), minmax(0, 1fr));
  gap: clamp(18px, 2.2cqi, 32px) clamp(14px, 1.8cqi, 26px);
  margin: 0;
  padding: 0;
  list-style: none;
}
.cpl-item { min-width: 0; }
.cpl-stat {
  margin: 12px 0 0;
  padding-left: 2px;
  font-size: 13px;
  line-height: 1.4;
  color: var(--tui-ink-2);
  text-wrap: balance;
}

/* ------------------------------------------------------------------ the plate */
.cpl-plate {
  container-type: inline-size;
  position: relative;
  isolation: isolate;
  aspect-ratio: 2.3 / 1;
  border-radius: 6px;
  background:
    linear-gradient(160deg, rgb(255 255 255 / 0.22), transparent 38%, rgb(0 0 0 / 0.07)),
    var(--cpl-brush) 0 0 / 300px 120px,
    var(--tui-noise),
    linear-gradient(180deg, var(--cpl-plate-hi), var(--cpl-plate) 55%, var(--cpl-plate-lo));
  /* A thin plate: a short, soft shadow down and to the right. */
  box-shadow:
    0 0 0 0.5px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.4)),
    0 1px 1px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.3)),
    1px 5px 10px -4px rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.6));
}
/* The chamfer: a 45° edge machined all round, catching the lamp top-left. */
.cpl-plate::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  padding: max(1.5px, 1.1cqi);
  background: var(--cpl-chamfer);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
}

/* Fixings, set in from the corners. */
.cpl-fix { position: absolute; width: max(8px, 6.2cqi); aspect-ratio: 1; line-height: 0; }
.cpl-fix svg { width: 100%; height: 100%; overflow: visible; }
.cpl-fix--tl { left: 4.6cqi; top: 4.6cqi; }
.cpl-fix--tr { right: 4.6cqi; top: 4.6cqi; }
.cpl-fix--bl { left: 4.6cqi; bottom: 4.6cqi; }
.cpl-fix--br { right: 4.6cqi; bottom: 4.6cqi; }
.cpl-fix--l { left: 4.2cqi; top: 50%; translate: 0 -50%; }
.cpl-fix--r { right: 4.2cqi; top: 50%; translate: 0 -50%; }
.cpl-sink { fill: rgb(var(--tui-sh) / calc(var(--tui-sh-a) * 1.5)); }
.cpl-head { fill: var(--cpl-steel); }
.cpl-shine { fill: rgb(255 255 255 / 0.85); }
.cpl-slot { stroke: rgb(0 0 0 / 0.72); stroke-width: 1.15; stroke-linecap: round; }
.cpl-slot-lip { stroke: rgb(255 255 255 / 0.7); stroke-width: 0.7; stroke-linecap: round; }
.cpl-dome { fill: var(--cpl-steel-lo); }
.cpl-dome-lo { fill: var(--cpl-steel); }
.cpl-screw, .cpl-rivet { filter: drop-shadow(0.4px 0.7px 0.5px rgb(0 0 0 / 0.45)); }

/* The cut: mark and name engraved alike - a shadow on the upper wall of
   every cut and a lit lip on the lower one. The small line of type is cut
   shallower: only its lip shows, or its thin strokes would be all wall. */
.cpl-cut {
  position: absolute;
  inset: 0 12cqi;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5cqi;
  color: var(--cpl-cut);
}
/* The engrave filter is an SVG filter in the section (its id in --cpl-engrave). */
.cpl-mark, .cpl-word { filter: var(--cpl-engrave); }
.cpl-kind { filter: drop-shadow(0 0.6px 0 var(--cpl-lip)); }
.cpl-defs { position: absolute; width: 0; height: 0; overflow: hidden; }
.cpl-defs feFlood.cpl-f-lip { flood-color: var(--cpl-lip); }
.cpl-defs feFlood.cpl-f-wall { flood-color: var(--cpl-wall); }
.cpl-plate[data-fix='rivets'] .cpl-cut { inset: 0 13cqi; }
.cpl-mark { flex: none; width: 17cqi; height: auto; }
.cpl-name { display: grid; gap: 1.6cqi; min-width: 0; margin: 0; }
.cpl-word {
  font: 700 calc(12cqi * var(--fit, 1))/0.95 var(--cpl-sans);
  letter-spacing: -0.02em;
  white-space: nowrap;
}
.cpl-plate[data-type='caps'] .cpl-word { font-size: calc(9.6cqi * var(--fit, 1)); letter-spacing: 0.12em; text-transform: uppercase; margin-right: -0.12em; }
.cpl-plate[data-type='lower'] .cpl-word { letter-spacing: -0.035em; }
.cpl-kind {
  font: 700 max(7px, calc(4cqi * var(--fit-kind, 1)))/1.1 var(--cpl-sans);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--cpl-cut-2);
  white-space: nowrap;
}

/* ------------------------------------------------------------------ drift: a belt in a recessed channel */
.cpl[data-motion='drift'] .cpl-belt {
  overflow: hidden;
  padding: clamp(18px, 2.4cqi, 28px) 0;
  border-radius: 12px;
  background: var(--tui-well-fill) var(--tui-well);
  box-shadow: var(--tui-inset);
}
.cpl[data-motion='drift'] .cpl-track {
  display: flex;
  width: max-content;
  animation: cpl-drift var(--cpl-lap, 40s) linear infinite;
}
.cpl[data-motion='drift'] .cpl-list {
  display: flex;
  gap: 0;
}
.cpl[data-motion='drift'] .cpl-item { width: clamp(168px, 17cqi, 210px); margin-left: clamp(16px, 2cqi, 28px); }
.cpl[data-motion='drift'][data-paused='true'] .cpl-track,
.cpl[data-motion='drift'][data-visible='false'] .cpl-track,
.cpl[data-motion='drift'] .cpl-belt:hover .cpl-track,
.cpl[data-motion='drift'] .cpl-belt:focus-within .cpl-track { animation-play-state: paused; }
@keyframes cpl-drift { to { transform: translateX(-50%); } }

.cpl-key {
  appearance: none;
  flex: none;
  height: 28px;
  padding: 0 12px;
  border: 0;
  border-radius: 6px;
  font: 700 11.5px/1 var(--cpl-sans);
  color: var(--tui-ink);
  cursor: pointer;
  background:
    radial-gradient(120% 90% at 50% 0%, var(--tui-hl), transparent 60%),
    linear-gradient(var(--tui-face-hi), color-mix(in oklab, var(--tui-face-hi) 92%, rgb(var(--tui-sh))));
  box-shadow: inset 0 1px 0 var(--tui-hl), 0 1.5px 0 var(--tui-skirt), 0 2.5px 3px rgb(var(--tui-sh) / 0.3);
  transition: transform 70ms var(--tui-ease), box-shadow 70ms var(--tui-ease);
}
.cpl-key:active, .cpl-key[aria-pressed='true'] { transform: translateY(1.5px); box-shadow: var(--tui-pressed); }
.cpl :focus-visible { outline: 2px solid var(--tui-focus); outline-offset: 3px; }

/* ------------------------------------------------------------------ re-composed by the width it is given */
@container cpl (max-width: 999px) {
  .cpl-list { grid-template-columns: repeat(var(--cpl-cols-mid, 3), minmax(0, 1fr)); }
}
@container cpl (max-width: 599px) {
  .cpl-head { flex-direction: column; align-items: flex-start; gap: 10px; }
  .cpl-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px 14px; }
  .cpl-stat { font-size: 12.5px; margin-top: 10px; }
  .cpl[data-motion='drift'] .cpl-item { width: 156px; margin-left: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  /* No belt: the plates stand in their grid, and the copy on the belt goes. */
  .cpl[data-motion='drift'] .cpl-belt { overflow: visible; padding: 0; background: none; box-shadow: none; border-radius: 0; }
  .cpl[data-motion='drift'] .cpl-track { display: block; width: auto; animation: none; }
  .cpl[data-motion='drift'] .cpl-list { display: grid; gap: clamp(18px, 2.2cqi, 32px) clamp(14px, 1.8cqi, 26px); }
  .cpl[data-motion='drift'] .cpl-list--dup { display: none; }
  .cpl[data-motion='drift'] .cpl-item { width: auto; margin-left: 0; }
  .cpl-key[data-f='pause'] { display: none; }
  .cpl-key { transition: none; }
}
`;
