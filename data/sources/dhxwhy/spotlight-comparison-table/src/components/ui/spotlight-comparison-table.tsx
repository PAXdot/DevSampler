"use client";

import * as React from "react";

export type ComparisonPlan = {
  id: string;
  name: string;
  price: string;
  interval?: string;
  badge?: string;
  actionLabel: string;
  href?: string;
};

export type ComparisonFeature = {
  id: string;
  label: string;
  values: { [planId: string]: boolean | string | number };
};

export type ComparisonGroup = {
  id: string;
  label: string;
  features: ComparisonFeature[];
};

export type SpotlightComparisonTableProps = {
  plans: ComparisonPlan[];
  groups: ComparisonGroup[];
  selectedPlanId?: string;
  defaultSelectedPlanId?: string;
  onSelectedPlanChange?: (planId: string) => void;
  differencesOnly?: boolean;
  defaultDifferencesOnly?: boolean;
  onDifferencesOnlyChange?: (value: boolean) => void;
  onChoosePlan?: (plan: ComparisonPlan) => void;
  /** Opt-in presentation loop. Selecting a plan or filter pauses it. */
  autoplay?: boolean;
  labels?: {
    caption?: string;
    features?: string;
    differences?: string;
    included?: string;
    notIncluded?: string;
    unavailable?: string;
    selectPlan?: string;
    pause?: string;
    play?: string;
    empty?: string;
    allShared?: string;
    hidden?: (count: number) => string;
  };
  className?: string;
};

function Mark({ included }: { included: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="size-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {included ? <path d="m4 8 2.5 2.5L12 5" /> : <path d="M5 8h6" />}
    </svg>
  );
}

function isShared(feature: ComparisonFeature, plans: ComparisonPlan[]) {
  return plans.length > 1 && plans.every((plan) => Object.is(feature.values[plan.id], feature.values[plans[0]!.id]));
}

export function SpotlightComparisonTable({
  plans,
  groups,
  selectedPlanId,
  defaultSelectedPlanId,
  onSelectedPlanChange,
  differencesOnly,
  defaultDifferencesOnly = false,
  onDifferencesOnlyChange,
  onChoosePlan,
  autoplay = false,
  labels = {},
  className,
}: SpotlightComparisonTableProps) {
  const [localPlan, setLocalPlan] = React.useState(defaultSelectedPlanId ?? plans[0]?.id ?? "");
  const [localDifferences, setLocalDifferences] = React.useState(defaultDifferencesOnly);
  const [reduced, setReduced] = React.useState(true);
  const [ready, setReady] = React.useState(false);
  const [compact, setCompact] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const root = React.useRef(null as HTMLDivElement | null);
  const stage = React.useRef(null as HTMLDivElement | null);
  const activeId = plans.some((plan) => plan.id === (selectedPlanId ?? localPlan))
    ? (selectedPlanId ?? localPlan)
    : (plans[0]?.id ?? "");
  const activeIndex = Math.max(0, plans.findIndex((plan) => plan.id === activeId));
  const onlyDifferences = differencesOnly ?? localDifferences;
  // Preserve the SSR attribute; the animation effect owns hidden after mounting.
  const initialDifferences = React.useRef(onlyDifferences).current;
  const previousDifferences = React.useRef(onlyDifferences);
  const headingId = React.useId();
  const tableId = React.useId();
  const featureCount = groups.reduce((sum, group) => sum + group.features.length, 0);
  const sharedCount = groups.reduce((sum, group) => sum + group.features.filter((feature) => isShared(feature, plans)).length, 0);
  const playing = autoplay && ready && !reduced && !paused && plans.length > 1;

  const selectPlan = React.useCallback((id: string) => {
    if (selectedPlanId === undefined) setLocalPlan(id);
    onSelectedPlanChange?.(id);
  }, [selectedPlanId, onSelectedPlanChange]);

  const filterRows = React.useCallback((value: boolean) => {
    if (differencesOnly === undefined) setLocalDifferences(value);
    onDifferencesOnlyChange?.(value);
  }, [differencesOnly, onDifferencesOnlyChange]);

  // Changing a controlled value must not restart the presentation clock.
  const actions = React.useRef({ selectPlan, filterRows });
  React.useEffect(() => { actions.current = { selectPlan, filterRows }; });

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setReduced(media.matches); setReady(true); };
    update();
    media.addEventListener("change", update);
    const observer = new ResizeObserver(([entry]) => setCompact((entry?.contentRect.width ?? 480) < 480));
    if (root.current) observer.observe(root.current);
    return () => { media.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  React.useEffect(() => {
    if (!playing) return;
    let timers: number[] = [];
    const cycle = () => {
      actions.current.selectPlan(plans[0]!.id);
      actions.current.filterRows(false);
      const steps = [
        [300, () => actions.current.selectPlan(plans[1]!.id)],
        [1400, () => actions.current.filterRows(true)],
        [2600, () => actions.current.selectPlan(plans[Math.min(2, plans.length - 1)]!.id)],
        [4000, () => actions.current.filterRows(false)],
        [5200, () => actions.current.selectPlan(plans[1]!.id)],
        [7000, cycle],
      ] as [number, () => void][];
      timers = steps.map(([delay, action]) => window.setTimeout(action, delay));
    };
    cycle();
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [playing, plans]);

  React.useEffect(() => {
    const viewport = stage.current;
    const table = viewport?.querySelector("table");
    if (!viewport || !table) return;
    const rows = Array.from(table.querySelectorAll("tr[data-layout-row]")) as HTMLTableRowElement[];
    const shared = rows.filter((row) => row.dataset.shared === "true");
    const changed = previousDifferences.current !== onlyDifferences;
    previousDifferences.current = onlyDifferences;
    let live = true;
    const animations: Animation[] = [];
    const finish = () => {
      rows.forEach((row) => {
        row.hidden = onlyDifferences && row.dataset.shared === "true";
        row.removeAttribute("style");
        Array.from(row.cells).forEach((cell) => cell.style.removeProperty("width"));
      });
      viewport.style.removeProperty("height");
    };
    if (reduced || !changed || typeof viewport.animate !== "function") {
      finish();
      return;
    }
    queueMicrotask(() => {
      if (!live) return;
      const oldHeight = viewport.getBoundingClientRect().height;
      const tableTop = table.getBoundingClientRect().top;
      const before = rows.map((row) => ({ row, box: row.getBoundingClientRect(), widths: Array.from(row.cells).map((cell) => cell.getBoundingClientRect().width) }));
      // Exiting rows stay in place; the surviving rows take their final layout (FLIP).
      if (onlyDifferences) {
        before.filter(({ row }) => shared.includes(row)).forEach(({ row, box, widths }) => {
          Array.from(row.cells).forEach((cell, i) => { cell.style.width = `${widths[i]}px`; });
          Object.assign(row.style, { position: "absolute", top: `${box.top - tableTop}px`, left: "0", width: "100%", display: "table", tableLayout: "fixed" });
        });
      } else {
        shared.forEach((row) => { row.hidden = false; });
      }
      const finalHeight = table.getBoundingClientRect().height;
      const finalTop = table.getBoundingClientRect().top;
      const timing = { duration: 380, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" as FillMode };
      before.filter(({ row }) => !shared.includes(row)).forEach(({ row, box }) => {
        const delta = (box.top - tableTop) - (row.getBoundingClientRect().top - finalTop);
        if (Math.abs(delta) > 0.5) animations.push(row.animate([{ transform: `translateY(${delta}px)` }, { transform: "translateY(0)" }], timing));
      });
      shared.forEach((row) => {
        if (onlyDifferences) {
          row.querySelectorAll("[data-row-content]").forEach((content) => {
            animations.push(content.animate([{ height: `${content.getBoundingClientRect().height}px`, opacity: 1 }, { height: "0px", opacity: 0 }], timing));
          });
        } else {
          animations.push(row.animate([{ opacity: 0, transform: "scaleY(0)" }, { opacity: 1, transform: "scaleY(1)" }], timing));
        }
      });
      viewport.style.height = `${finalHeight}px`;
      animations.push(viewport.animate([{ height: `${oldHeight}px` }, { height: `${finalHeight}px` }], timing));
      Promise.all(animations.map((animation) => animation.finished.catch(() => undefined))).then(() => {
        if (live) { finish(); animations.forEach((animation) => animation.cancel()); }
      });
    });
    return () => { live = false; animations.forEach((animation) => animation.cancel()); finish(); };
  }, [onlyDifferences, reduced, compact, groups, plans]);

  React.useEffect(() => {
    if (reduced || !root.current) return;
    let live = true;
    const animations: Animation[] = [];
    queueMicrotask(() => {
      if (!live || !root.current) return;
      const cells = Array.from(root.current.querySelectorAll("[data-cell-plan]")) as HTMLElement[];
      cells.filter((cell) => cell.dataset.cellPlan === activeId && !cell.closest("tr")?.hidden).forEach((cell, i) => {
        const content = cell.querySelector("[data-value]");
        if (content && typeof content.animate === "function") animations.push(content.animate(
          [{ opacity: 0.3, transform: "translateY(3px) scale(0.9)" }, { opacity: 1, transform: "translateY(0) scale(1)" }],
          { duration: 300, delay: i * 48, fill: "backwards", easing: "ease-out" },
        ));
        const flare = cell.querySelector("[data-unique-flare]");
        if (flare && typeof flare.animate === "function") animations.push(flare.animate(
          [{ opacity: 0, transform: "scaleX(0.4)" }, { opacity: 1, offset: 0.4 }, { opacity: 0, transform: "scaleX(1)" }],
          { duration: 650, delay: i * 48, easing: "ease-out" },
        ));
      });
    });
    return () => { live = false; animations.forEach((animation) => animation.cancel()); };
  }, [activeId, reduced, groups, plans]);

  const choose = (id: string) => { setPaused(true); selectPlan(id); };
  const planVisibility = (id: string) => id === activeId ? "" : "@max-[480px]/compare:hidden";
  const actionClass = (id: string) => [
    "flex h-7 w-full items-center justify-center gap-1 rounded-md px-1 text-[10px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card motion-reduce:transition-none",
    id === activeId ? "bg-primary text-primary-foreground" : "bg-card text-foreground ring-1 ring-inset ring-border hover:bg-muted",
  ].join(" ");

  return (
    <div ref={root} data-slot="spotlight-comparison-table" data-selected-plan={activeId} data-differences={onlyDifferences} data-autoplay={autoplay} data-playing={playing} data-reduced-motion={reduced} data-compact={compact} className={["@container/compare w-full min-w-0 text-foreground", className].filter(Boolean).join(" ")}>
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="flex min-h-11 items-center justify-between gap-2 border-b border-border px-3">
          <p id={headingId} className="truncate text-xs font-medium">{labels.caption ?? "Compare plans"}</p>
          <div className="flex shrink-0 items-center gap-2.5">
            {autoplay && <button type="button" data-playback onClick={() => setPaused(!paused)} disabled={reduced} aria-label={playing ? (labels.pause ?? "Pause preview") : (labels.play ?? "Play preview")} className="flex size-6 items-center justify-center rounded text-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3" fill="currentColor">{playing ? <path d="M4 3h3v10H4zM9 3h3v10H9z" /> : <path d="m5 3 8 5-8 5z" />}</svg>
            </button>}
            <button type="button" role="switch" aria-checked={onlyDifferences} aria-controls={tableId} data-differences-switch onClick={() => { setPaused(true); filterRows(!onlyDifferences); }} className="flex items-center gap-2 rounded-sm py-2 text-[11px] text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {labels.differences ?? "Show differences only"}
              <span aria-hidden="true" className={`flex h-[18px] w-8 items-center rounded-full p-0.5 transition-colors motion-reduce:transition-none ${onlyDifferences ? "bg-primary" : "bg-muted ring-1 ring-inset ring-border"}`}>
                <span className={`size-3.5 rounded-full shadow-sm transition-transform duration-200 motion-reduce:transition-none ${onlyDifferences ? "translate-x-3.5 bg-primary-foreground" : "translate-x-0 bg-foreground/60"}`} />
              </span>
            </button>
          </div>
        </div>
        {plans.length > 0 ? <>
          <div role="radiogroup" aria-label={labels.selectPlan ?? "Select a plan to compare"} data-plan-tabs className="hidden gap-1 border-b border-border p-2 @max-[480px]/compare:flex">
            {plans.map((plan, i) => <button type="button" role="radio" key={plan.id} aria-checked={plan.id === activeId} tabIndex={plan.id === activeId ? 0 : -1} onClick={() => choose(plan.id)} onKeyDown={(event) => {
              const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
              if (!direction && event.key !== "Home" && event.key !== "End") return;
              event.preventDefault();
              const next = event.key === "Home" ? 0 : event.key === "End" ? plans.length - 1 : (i + direction + plans.length) % plans.length;
              choose(plans[next]!.id);
              const buttons = event.currentTarget.parentElement?.querySelectorAll("button");
              (buttons?.[next] as HTMLButtonElement | undefined)?.focus();
            }} className={`min-w-0 flex-1 truncate rounded-md px-2 py-1.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none ${plan.id === activeId ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>{plan.name}</button>)}
          </div>
          <div ref={stage} data-table-stage className="relative isolate overflow-hidden">
            <div aria-hidden="true" data-spotlight style={{ "--spotlight-index": activeIndex, width: `${66 / plans.length}%` } as React.CSSProperties} className="pointer-events-none absolute inset-y-0 left-[34%] z-0 translate-x-[calc(var(--spotlight-index)*100%)] rounded-t-lg border-x border-primary/10 bg-primary/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none @max-[480px]/compare:left-[52%] @max-[480px]/compare:w-[48%]! @max-[480px]/compare:translate-x-0">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-primary/70" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />
            </div>
            <table id={tableId} aria-labelledby={headingId} className="relative z-10 w-full table-fixed border-collapse text-[11px]">
              <colgroup><col className="w-[34%] @max-[480px]/compare:w-[52%]" />{plans.map((plan) => <col key={plan.id} className={planVisibility(plan.id)} />)}</colgroup>
              <thead><tr>
                <th scope="col" className="px-3 pb-3 text-left align-bottom font-normal"><span className="block text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{labels.features ?? "The essentials"}</span><span aria-live="polite" aria-atomic="true" className="mt-1 block text-[10px] text-muted-foreground">{onlyDifferences ? featureCount - sharedCount : featureCount} / {featureCount}</span></th>
                {plans.map((plan) => <th key={plan.id} scope="col" data-plan-header={plan.id} className={`px-2 py-3 text-left align-top font-normal ${planVisibility(plan.id)}`}>
                  <div className="mb-1 flex h-3.5 items-center">{plan.badge && <span className="truncate text-[8px] font-semibold uppercase tracking-wider text-muted-foreground">{plan.badge}</span>}</div>
                  <button type="button" data-select-plan={plan.id} aria-pressed={activeId === plan.id} onClick={() => choose(plan.id)} className="rounded-sm text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{plan.name}</button>
                  <div className="mb-2 mt-1 flex flex-wrap items-baseline gap-x-0.5"><span className="text-[25px] font-semibold leading-7 tracking-tight">{plan.price}</span><span className="text-[10px] text-muted-foreground">{plan.interval}</span></div>
                  {plan.href ? <a href={plan.href} data-plan-action={plan.id} onClick={() => { setPaused(true); onChoosePlan?.(plan); }} className={actionClass(plan.id)}>{plan.actionLabel}<svg aria-hidden="true" viewBox="0 0 16 16" className="size-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 12 12 4M4 4h8v8" /></svg></a> : <button type="button" data-plan-action={plan.id} onClick={() => { choose(plan.id); onChoosePlan?.(plan); }} className={actionClass(plan.id)}>{plan.actionLabel}<svg aria-hidden="true" viewBox="0 0 16 16" className="size-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 12 12 4M4 4h8v8" /></svg></button>}
                </th>)}
              </tr></thead>
              {groups.map((group) => {
                const hiddenCount = group.features.filter((feature) => isShared(feature, plans)).length;
                return <tbody key={group.id}>
                  <tr data-layout-row data-group-row={group.id} className="relative"><th scope="rowgroup" colSpan={compact ? 2 : plans.length + 1} className="h-7 border-y border-border bg-muted/90 px-3 text-left text-[9px] font-medium uppercase tracking-widest text-muted-foreground"><span className="flex items-center gap-2">{group.label}{onlyDifferences && hiddenCount > 0 && <span data-hidden-count={hiddenCount} className="rounded-full bg-card px-1.5 py-0.5 text-[8px] normal-case tracking-normal ring-1 ring-inset ring-border">{labels.hidden?.(hiddenCount) ?? `${hiddenCount} hidden`}</span>}</span></th></tr>
                  {group.features.map((feature) => {
                    const shared = isShared(feature, plans);
                    return <tr key={feature.id} data-layout-row data-feature-row={feature.id} data-shared={shared} hidden={initialDifferences && shared} aria-hidden={onlyDifferences && shared ? true : undefined} className="origin-top">
                      <th scope="row" className="p-0 text-left font-normal"><div data-row-content className="flex h-7 items-center overflow-hidden px-3"><span className="truncate" title={feature.label}>{feature.label}</span></div></th>
                      {plans.map((plan) => {
                        const value = feature.values[plan.id];
                        const unique = !shared && value !== undefined && value !== false && plans.filter((other) => Object.is(feature.values[other.id], value)).length === 1;
                        return <td key={plan.id} data-cell-plan={plan.id} className={`p-0 text-center ${planVisibility(plan.id)}`}><div data-row-content className="relative flex h-7 items-center justify-center overflow-hidden px-2">
                          {unique && plan.id === activeId && <span aria-hidden="true" data-unique-flare className="absolute inset-x-1 inset-y-0.5 rounded bg-primary/15 opacity-0" />}
                          <span data-value className={`relative inline-flex min-w-0 items-center justify-center ${plan.id === activeId ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                            {typeof value === "boolean" ? <><span className={`flex size-[18px] items-center justify-center rounded-full ${value && plan.id === activeId ? "bg-primary text-primary-foreground" : value ? "bg-muted text-muted-foreground" : "text-muted-foreground"}`}><Mark included={value} /></span><span className="sr-only">{value ? (labels.included ?? "Included") : (labels.notIncluded ?? "Not included")}</span></> : <span className="truncate">{value ?? (labels.unavailable ?? "—")}</span>}
                          </span>
                        </div></td>;
                      })}
                    </tr>;
                  })}
                </tbody>;
              })}
            </table>
          </div>
          {onlyDifferences && sharedCount === featureCount && <p role="status" className="p-4 text-center text-xs text-muted-foreground">{labels.allShared ?? "These plans share every listed feature."}</p>}
        </> : <p role="status" className="p-6 text-center text-sm text-muted-foreground">{labels.empty ?? "Add plans to start comparing."}</p>}
      </div>
    </div>
  );
}
