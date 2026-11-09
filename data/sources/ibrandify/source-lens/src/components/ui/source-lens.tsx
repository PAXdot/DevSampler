"use client";

import * as React from "react";
import { ArrowUpRight, Bookmark, BookOpen, ChevronLeft, ChevronRight, Copy, FileText, Link2, X } from "lucide-react";

export interface LensSource { id: string; title: string; publisher: string; url: string; summary: string; section: string; }
export interface LensClaim { id: string; title: string; text: string; sourceIds: string[]; }
export interface SourceLensProps { title?: string; claims?: LensClaim[]; sources?: LensSource[]; className?: string; onSourceOpen?: (source: LensSource) => void; }

const defaultSources: LensSource[] = [
  { id: "dialog", title: "Dialog (Modal) Pattern", publisher: "W3C · Authoring Practices Guide", url: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/", summary: "When a modal opens, focus moves inside it. Tab navigation stays within the dialog, Escape dismisses it, and closing normally returns focus to the invoking control.", section: "Keyboard Interaction" },
  { id: "button", title: "Button Pattern", publisher: "W3C · Authoring Practices Guide", url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/", summary: "Buttons trigger actions and support activation with Enter and Space. Toggle buttons expose their pressed state, and every button has an accessible name.", section: "Keyboard Interaction · Roles and States" },
];
const defaultClaims: LensClaim[] = [
  { id: "focus", title: "Keep review focused", text: "A modal review panel should move focus inside, contain keyboard navigation, and provide a clear way to close. Closing it normally returns focus to the control that opened it.", sourceIds: ["dialog"] },
  { id: "actions", title: "Make actions understandable", text: "Use buttons for actions, provide accessible names, and support keyboard activation. A two-state toggle should communicate whether it is pressed.", sourceIds: ["button"] },
  { id: "inspect", title: "Make the evidence inspectable", text: "The recommendations above draw on documented interaction patterns. Open each reference to inspect the supporting guidance before applying it to your interface.", sourceIds: ["dialog", "button"] },
];
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
function safeSourceUrl(url: string) { try { const parsed = new URL(url); return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : undefined; } catch { return undefined; } }

export default function SourceLens({ title = "Designing a clearer review experience", claims = defaultClaims, sources = defaultSources, className = "", onSourceOpen }: SourceLensProps) {
  const id = React.useId();
  const dialog = React.useRef<HTMLDialogElement>(null);
  const trigger = React.useRef<HTMLButtonElement | null>(null);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [claimId, setClaimId] = React.useState<string | null>(null);
  const [position, setPosition] = React.useState({ x: 16, y: 16, width: 400 });
  const [saved, setSaved] = React.useState<string[]>([]);
  const [copyStatus, setCopyStatus] = React.useState("");
  const selectedIndex = sources.findIndex(source => source.id === selectedId);
  const selected = sources[selectedIndex];
  const claim = claims.find(item => item.id === claimId);
  const selectedUrl = selected ? safeSourceUrl(selected.url) : undefined;

  const place = React.useCallback(() => {
    const rect = trigger.current?.getBoundingClientRect();
    const width = Math.min(400, document.documentElement.clientWidth - 32);
    const height = Math.min(dialog.current?.getBoundingClientRect().height || 450, window.innerHeight - 32);
    setPosition({ width, x: Math.max(16, Math.min(rect?.left ?? 16, document.documentElement.clientWidth - width - 16)), y: Math.max(16, Math.min((rect?.bottom ?? 16) + 12, window.innerHeight - height - 16)) });
  }, []);
  const open = (source: LensSource, button: HTMLButtonElement, claim?: LensClaim) => { trigger.current = button; setClaimId(claim?.id ?? null); setCopyStatus(""); place(); setSelectedId(source.id); onSourceOpen?.(source); };
  React.useLayoutEffect(() => { if (selected) { if (!dialog.current?.open) dialog.current?.showModal(); place(); } }, [selected, place, position.width]);
  React.useEffect(() => {
    if (!selected) return;
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [selected, place]);
  React.useEffect(() => { if (!copyStatus) return; const timer = window.setTimeout(() => setCopyStatus(""), 2200); return () => window.clearTimeout(timer); }, [copyStatus]);
  const move = (delta: number) => { const next = sources[(selectedIndex + delta + sources.length) % sources.length]; if (next) { setSelectedId(next.id); setCopyStatus(""); onSourceOpen?.(next); } };

  return <section aria-label="Source lens" className={`mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm ${className}`}>
    <header className="flex items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-6"><div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground"><BookOpen aria-hidden="true" className="h-4 w-4" /> Grounded response</div><span className="rounded-full bg-muted px-2.5 py-1 text-[10px] text-muted-foreground">{sources.length} references</span></header>
    <article className="p-5 sm:p-7"><div className="mb-3 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Interface notes</div><h2 className="max-w-lg text-2xl font-semibold leading-tight tracking-tight">{title}</h2><div className="mt-6 space-y-5">{claims.map(item => <div key={item.id}><h3 className="mb-1.5 text-xs font-semibold">{item.title}</h3><p className="text-sm leading-7 text-muted-foreground">{item.text}{item.sourceIds.map(sourceId => { const index = sources.findIndex(source => source.id === sourceId); const source = sources[index]; return source ? <button type="button" key={sourceId} aria-label={`View source ${index + 1}: ${source.title}`} aria-haspopup="dialog" onClick={event => open(source, event.currentTarget, item)} className={`mx-1 inline-flex h-5 min-w-5 -translate-y-0.5 items-center justify-center rounded border border-primary/20 bg-primary/5 px-1 text-[10px] font-semibold leading-none text-primary hover:bg-primary/15 ${focus}`}>{index + 1}</button> : null; })}</p></div>)}{!claims.length && <p className="text-sm text-muted-foreground">Add a response and its supporting references to begin.</p>}</div></article>
    <footer className="border-t border-border bg-muted/20 p-5 sm:px-7"><div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-muted-foreground"><span>Supporting sources</span><span>{saved.length} saved</span></div><div className="grid gap-2 sm:grid-cols-2">{sources.map((source, index) => <button type="button" key={source.id} onClick={event => open(source, event.currentTarget)} aria-haspopup="dialog" className={`flex min-w-0 items-center gap-3 rounded-xl border border-border bg-background p-3 text-start hover:bg-muted/50 ${focus}`}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted font-mono text-[11px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><span className="min-w-0 flex-1"><span className="block truncate text-xs font-medium">{source.title}</span><span className="mt-1 block truncate text-[10px] text-muted-foreground">{source.publisher}</span></span>{saved.includes(source.id) ? <Bookmark aria-hidden="true" className="h-3.5 w-3.5 shrink-0 fill-current text-primary" /> : <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />}</button>)}</div><p className="mt-3 text-[10px] leading-5 text-muted-foreground">References support inspection. A citation is not a guarantee that every interpretation is correct.</p></footer>
    <dialog ref={dialog} aria-labelledby={`${id}-source-title`} onClose={() => { setSelectedId(null); trigger.current?.focus(); }} onClick={event => { if (event.target !== event.currentTarget) return; const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close(); }} style={{ left: position.x, top: position.y, width: position.width }} className="m-0 max-h-[calc(100dvh_-_2rem)] overflow-auto rounded-2xl border border-border bg-popover p-0 text-popover-foreground shadow-xl backdrop:bg-background/60">
      <div className="flex items-center justify-between border-b border-border px-4 py-3"><span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground"><FileText aria-hidden="true" className="h-3.5 w-3.5" /> Source {selectedIndex + 1} / {sources.length}</span><button type="button" aria-label="Close source inspector" onClick={() => dialog.current?.close()} className={`rounded-lg p-1.5 hover:bg-muted ${focus}`}><X aria-hidden="true" className="h-4 w-4" /></button></div>
      <div className="p-4"><p className="text-[10px] text-muted-foreground">{selected?.publisher}</p><h3 id={`${id}-source-title`} className="mt-1 text-base font-semibold">{selected?.title ?? "Source unavailable"}</h3><div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground"><Link2 aria-hidden="true" className="h-3 w-3" /><span className="truncate">{selectedUrl ? new URL(selectedUrl).hostname : "No valid source URL"}</span></div><div className="mt-4 rounded-xl border border-border bg-muted/40 p-4"><p className="mb-2 text-[9px] font-medium uppercase tracking-[0.12em] text-muted-foreground">Guidance summary · {selected?.section}</p><p className="text-xs leading-6">{selected?.summary}</p></div>{claim && <div className="mt-3 border-s-2 border-primary/30 ps-3"><p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground">Opened from</p><p className="mt-1 text-xs">{claim.title}</p>{!claim.sourceIds.includes(selectedId ?? "") && <p className="mt-1 text-[10px] text-muted-foreground">This reference supports another part of the response.</p>}</div>}<div className="mt-4 flex items-center gap-2"><button type="button" aria-pressed={saved.includes(selectedId ?? "")} onClick={() => { if (selectedId) setSaved(value => value.includes(selectedId) ? value.filter(item => item !== selectedId) : [...value, selectedId]); }} className={`flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-2 text-[11px] hover:bg-muted ${focus}`}><Bookmark aria-hidden="true" className={`h-3 w-3 ${saved.includes(selectedId ?? "") ? "fill-current" : ""}`} /> Save source</button><button type="button" disabled={!selectedUrl} aria-label="Copy source URL" onClick={async () => { try { if (selectedUrl) await navigator.clipboard.writeText(selectedUrl); setCopyStatus("Source URL copied"); } catch { setCopyStatus("Copy unavailable. Open the source to copy its URL."); } }} className={`rounded-lg border border-border p-2 hover:bg-muted disabled:opacity-40 ${focus}`}><Copy aria-hidden="true" className="h-3.5 w-3.5" /></button>{selectedUrl && <a href={selectedUrl} target="_blank" rel="noopener noreferrer" className={`ms-auto flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-[11px] text-primary-foreground hover:opacity-90 ${focus}`}>Open source<ArrowUpRight aria-hidden="true" className="h-3 w-3" /></a>}</div><p role="status" className="mt-2 min-h-4 text-[10px] text-muted-foreground">{copyStatus}</p></div>
      <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-2.5"><span className="text-[10px] text-muted-foreground">Browse references</span><div className="flex gap-1"><button type="button" disabled={sources.length < 2} aria-label="Previous source" onClick={() => move(-1)} className={`rounded-lg p-1.5 hover:bg-muted disabled:opacity-40 ${focus}`}><ChevronLeft aria-hidden="true" className="h-4 w-4" /></button><button type="button" disabled={sources.length < 2} aria-label="Next source" onClick={() => move(1)} className={`rounded-lg p-1.5 hover:bg-muted disabled:opacity-40 ${focus}`}><ChevronRight aria-hidden="true" className="h-4 w-4" /></button></div></div>
    </dialog>
  </section>;
}
