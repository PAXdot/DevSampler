"use client";

import * as React from "react";

export interface Quote {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  context?: string;
}

export interface QuoteCrossfadeProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "children"> {
  /** Testimonial content. An empty array renders an accessible empty state. */
  quotes: readonly Quote[];
  title?: string;
  description?: string;
  /** Rotation is opt-in and stops on focus, hover, or a hidden document. */
  autoPlay?: boolean;
  /** Milliseconds between quotes; a minimum of 2.5 seconds protects readability. */
  interval?: number;
  defaultIndex?: number;
  showAuthorTabs?: boolean;
  onIndexChange?: (index: number, quote: Quote) => void;
}

const css = `
.qcf {position:relative;isolation:isolate;container-type:inline-size;width:100%;min-width:0;overflow:hidden;border-radius:24px;padding:clamp(22px,5cqw,42px);font-family:inherit;box-sizing:border-box}
.qcf *, .qcf *::before, .qcf *::after {box-sizing:border-box}
.qcf button {font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}
.qcf button:disabled {opacity:.35;cursor:default}
.qcf button:focus-visible, .qcf:focus-visible {outline:2px solid var(--color-ring,currentColor);outline-offset:4px}
.qcf__wash {position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(145deg,currentColor,transparent 55%);opacity:.035}
.qcf__header {display:flex;align-items:flex-start;justify-content:space-between;gap:24px;margin-bottom:28px}
.qcf__title {margin:0;font-size:clamp(17px,2.9cqw,22px);font-weight:600;line-height:1.35;letter-spacing:-.035em;text-wrap:balance}
.qcf__description {margin:7px 0 0;max-width:38ch;font-size:13px;line-height:1.6}
.qcf__count {display:flex;align-items:baseline;gap:7px;white-space:nowrap;font-variant-numeric:tabular-nums;font-size:12px;letter-spacing:.025em;padding-top:3px}
.qcf__count strong {font-size:20px;font-weight:500;letter-spacing:-.06em}
.qcf__stage {display:grid;position:relative;min-height:225px}
.qcf__sizer {display:contents;visibility:hidden;pointer-events:none}
.qcf__slide {grid-area:1/1;display:flex;flex-direction:column;justify-content:space-between;gap:28px;min-width:0}
.qcf__slide--in {animation:qcf-in .36s cubic-bezier(.22,1,.36,1) both}
.qcf__slide--out {pointer-events:none;animation:qcf-out .36s cubic-bezier(.22,1,.36,1) both}
.qcf__quote {margin:0;font-size:clamp(23px,4.6cqw,36px);line-height:1.38;font-weight:450;letter-spacing:-.035em;text-wrap:pretty;overflow-wrap:anywhere}
.qcf__quote-mark {display:block;margin-bottom:13px;width:26px;height:22px;opacity:.4}
.qcf__attribution {display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:28px}
.qcf__person {display:flex;align-items:center;gap:12px;min-width:0}
.qcf__avatar {display:grid;place-items:center;flex:0 0 auto;width:42px;height:42px;border-radius:13px;font-size:12px;letter-spacing:.025em;font-weight:600}
.qcf__person-name {display:block;font-size:13px;font-weight:600;line-height:1.5}
.qcf__person-role {margin:3px 0 0;font-size:12px;line-height:1.5}
.qcf__context {display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:6px 10px;font-size:10px;font-weight:500;white-space:nowrap}
.qcf__context::before {content:"";width:4px;height:4px;border-radius:50%;background:currentColor;opacity:.55}
.qcf__footer {display:flex;align-items:center;justify-content:space-between;gap:16px;border-top-width:1px;padding-top:18px}
.qcf__authors {display:flex;align-items:center;gap:8px;min-width:0;flex:1}
.qcf__author {position:relative;display:flex;align-items:center;justify-content:center;gap:7px;border:1px solid transparent;border-radius:9px;min-height:42px;min-width:42px;padding:7px 10px;transition:background .18s,color .18s;max-width:100%}
.qcf__author-initials {display:grid;place-items:center;width:24px;height:24px;border-radius:7px;font-size:9px;font-weight:600;flex-shrink:0}
.qcf__author-name {font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.qcf__navigation {display:flex;gap:6px;align-items:center;flex-shrink:0}
.qcf__icon-button {display:grid;place-items:center;width:42px;height:42px;padding:0;border:1px solid;border-color:inherit;border-radius:50%;background:transparent;color:inherit;transition:background .18s,transform .18s}
.qcf__icon-button:hover:not(:disabled) {background:color-mix(in srgb,currentColor 7%,transparent)}
.qcf__icon-button:active:not(:disabled) {transform:scale(.95)}
.qcf__progress {height:2px;overflow:hidden;margin:19px 0 -3px;border-radius:2px}
.qcf__progress-bar {height:100%;transform-origin:left;transition:width .36s ease}
.qcf__progress-bar--playing {width:100%!important;animation:qcf-progress linear both}
.qcf__empty {display:grid;place-items:center;min-height:220px;text-align:center;font-size:14px;line-height:1.7}
.qcf__empty strong {display:block;font-weight:600}
.qcf__empty p {margin:5px 0 0;font-size:12px}
@keyframes qcf-in {from{opacity:0;transform:translateY(9px)}to{opacity:1;transform:translateY(0)}}
@keyframes qcf-out {from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-9px)}}
@keyframes qcf-progress {from{transform:scaleX(0)}to{transform:scaleX(1)}}
@container (max-width:520px) {.qcf__author-name{display:none}.qcf__author{padding:7px}.qcf__authors{gap:5px}.qcf__context{display:none}.qcf__header{gap:15px}.qcf__stage{min-height:245px}}
@container (max-width:290px) {.qcf__footer{flex-wrap:wrap}.qcf__navigation{margin-left:auto}.qcf__description{font-size:12px}}
@media (prefers-reduced-motion:reduce) {.qcf *, .qcf *::before, .qcf *::after{animation:none!important;transition:none!important}.qcf__slide--out{display:none}}
`;

function Arrow({ previous = false }: { previous?: boolean }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={previous ? "m14 5-7 7 7 7" : "m10 5 7 7-7 7"} />
    </svg>
  );
}

function Slide({ quote, outgoing = false, animate = false }: { quote: Quote; outgoing?: boolean; animate?: boolean }) {
  return (
    <div className={`qcf__slide${outgoing ? " qcf__slide--out" : animate ? " qcf__slide--in" : ""}`} aria-hidden={outgoing || undefined}>
      <blockquote className="qcf__quote">
        <svg className="qcf__quote-mark text-primary" viewBox="0 0 28 24" fill="currentColor" aria-hidden="true"><path d="M0 14C0 6 4 1 11 0v4c-4 1-6 3-6 6h6v14H0V14Zm17 0C17 6 21 1 28 0v4c-4 1-6 3-6 6h6v14H17V14Z" /></svg>
        {quote.quote}
      </blockquote>
      <div className="qcf__attribution">
        <div className="qcf__person">
          <span className="qcf__avatar bg-primary text-primary-foreground" aria-hidden="true">{quote.initials}</span>
          <div><strong className="qcf__person-name">{quote.name}</strong><p className="qcf__person-role text-muted-foreground">{[quote.role, quote.company].filter(Boolean).join(" · ")}</p></div>
        </div>
        {quote.context && <span className="qcf__context border border-border bg-muted/40 text-muted-foreground">{quote.context}</span>}
      </div>
    </div>
  );
}

/** A dependency-free testimonial carousel with a real outgoing/incoming crossfade. */
export function QuoteCrossfade({
  quotes = [], title = "In their words", description, autoPlay = false,
  interval = 6500, defaultIndex = 0, showAuthorTabs = true,
  onIndexChange, className = "", onKeyDown, onFocusCapture,
  onMouseEnter, onMouseLeave, ...rest
}: QuoteCrossfadeProps) {
  const uid = React.useId();
  const [index, setIndex] = React.useState(Math.max(0, Math.trunc(defaultIndex) || 0));
  const [outgoing, setOutgoing] = React.useState<Quote | null>(null);
  const [transitionId, setTransitionId] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const count = quotes.length;
  const currentIndex = count ? index % count : 0;
  const active = quotes[currentIndex];
  const delay = Number.isFinite(interval) ? Math.max(2500, interval) : 6500;
  const playing = autoPlay && count > 1 && !paused && !hovered && !hidden && !reducedMotion;

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => setReducedMotion(media.matches);
    const visibility = () => setHidden(document.hidden);
    motion(); visibility();
    media.addEventListener("change", motion);
    document.addEventListener("visibilitychange", visibility);
    return () => { media.removeEventListener("change", motion); document.removeEventListener("visibilitychange", visibility); };
  }, []);

  React.useEffect(() => {
    if (!outgoing) return;
    const timer = window.setTimeout(() => setOutgoing(null), reducedMotion ? 0 : 360);
    return () => window.clearTimeout(timer);
  }, [transitionId, outgoing, reducedMotion]);

  const select = React.useCallback((next: number, manual = true) => {
    if (!count) return;
    const nextIndex = ((next % count) + count) % count;
    if (manual) setPaused(true);
    if (nextIndex === currentIndex) return;
    setOutgoing(reducedMotion ? null : active);
    setIndex(nextIndex);
    setTransitionId(value => value + 1);
    onIndexChange?.(nextIndex, quotes[nextIndex]!);
  }, [count, currentIndex, active, quotes, reducedMotion, onIndexChange]);

  React.useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => select(currentIndex + 1, false), delay);
    return () => window.clearTimeout(timer);
  }, [playing, currentIndex, delay, select]);

  return (
    <section {...rest} className={`qcf border border-border bg-card text-card-foreground ${className}`} role="region" aria-roledescription="carousel" aria-labelledby={`${uid}-title`} aria-describedby={description ? `${uid}-description` : undefined} tabIndex={0}
      onKeyDown={event => {
        onKeyDown?.(event);
        if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || count < 2) return;
        const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        select(event.key === "Home" ? 0 : event.key === "End" ? count - 1 : currentIndex + (event.key === "ArrowRight" ? 1 : -1));
      }}
      onFocusCapture={event => { setPaused(true); onFocusCapture?.(event); }}
      onMouseEnter={event => { setHovered(true); onMouseEnter?.(event); }}
      onMouseLeave={event => { setHovered(false); onMouseLeave?.(event); }}>
      <style>{css}</style>
      <div className="qcf__wash" aria-hidden="true" />
      <header className="qcf__header">
        <div><h2 className="qcf__title" id={`${uid}-title`}>{title}</h2>{description && <p className="qcf__description text-muted-foreground" id={`${uid}-description`}>{description}</p>}</div>
        <span className="qcf__count text-muted-foreground" aria-hidden="true"><strong className="text-foreground">{String(count ? currentIndex + 1 : 0).padStart(2, "0")}</strong><span>/ {String(count).padStart(2, "0")}</span></span>
      </header>
      {active ? <>
        <div className="qcf__stage" aria-live={playing ? "off" : "polite"} aria-atomic="true" role="group" aria-roledescription="slide" aria-label={`${currentIndex + 1} of ${count}`}>
          <div className="qcf__sizer" aria-hidden="true">{quotes.map(quote => <Slide key={quote.id} quote={quote} />)}</div>
          {outgoing && <Slide key={`out-${transitionId}`} quote={outgoing} outgoing />}
          <Slide key={`in-${active.id}-${transitionId}`} quote={active} animate={!!outgoing} />
        </div>
        <footer className="qcf__footer border-border">
          <div className="qcf__authors" aria-label="Choose a testimonial">
            {showAuthorTabs && quotes.map((quote, position) => <button key={quote.id} type="button" className={`qcf__author ${position === currentIndex ? "border-border bg-muted/60 text-foreground" : "text-muted-foreground hover:bg-muted/40"}`} aria-label={`Show quote ${position + 1} from ${quote.name}`} aria-pressed={position === currentIndex} onClick={() => select(position)}>
              <span className={`qcf__author-initials ${position === currentIndex ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`} aria-hidden="true">{quote.initials}</span><span className="qcf__author-name">{quote.name.split(" ")[0]}</span>
            </button>)}
          </div>
          <div className="qcf__navigation border-border">
            {autoPlay && count > 1 && <button type="button" className="qcf__icon-button" disabled={reducedMotion} onClick={() => setPaused(value => !value)} aria-label={reducedMotion ? "Rotation disabled for reduced motion" : paused ? "Start rotation" : "Pause rotation"} aria-pressed={!paused && !reducedMotion}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">{paused || reducedMotion ? <path d="m6 3 10 7-10 7V3Z" /> : <path d="M5 3h3v14H5V3Zm7 0h3v14h-3V3Z" />}</svg>
            </button>}
            <button type="button" className="qcf__icon-button" aria-label="Previous quote" disabled={count < 2} onClick={() => select(currentIndex - 1)}><Arrow previous /></button>
            <button type="button" className="qcf__icon-button" aria-label="Next quote" disabled={count < 2} onClick={() => select(currentIndex + 1)}><Arrow /></button>
          </div>
        </footer>
        <div className="qcf__progress bg-muted" aria-hidden="true"><div key={`${active.id}-${transitionId}-${playing}`} className={`qcf__progress-bar bg-primary${playing ? " qcf__progress-bar--playing" : ""}`} style={{ width: `${((currentIndex + 1) / count) * 100}%`, animationDuration: `${delay}ms` }} /></div>
      </> : <div className="qcf__empty text-muted-foreground"><div><strong className="text-foreground">No testimonials yet</strong><p>Add a quote to tell the story in someone else’s words.</p></div></div>}
    </section>
  );
}

export default QuoteCrossfade;
