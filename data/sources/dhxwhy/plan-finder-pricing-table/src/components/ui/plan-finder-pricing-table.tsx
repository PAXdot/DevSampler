"use client";

import * as React from "react";
import { ArrowUpRight, Check, SlidersHorizontal, X } from "lucide-react";

export type PlanFinderPlan = {
  id: string;
  name: string;
  /** A nonnegative numeric price. Supply all plans in the same currency and period. */
  price: number;
  cta: string;
};

export type PlanFinderFeature = {
  id: string;
  label: string;
  group?: string;
  /** True or a nonempty description means included; false, empty or absent means unavailable. */
  availability: { [planId: string]: boolean | string };
};

export type PlanFinderPricingTableProps = {
  plans: PlanFinderPlan[];
  features: PlanFinderFeature[];
  needs?: string[];
  defaultNeeds?: string[];
  onNeedsChange?: (needs: string[]) => void;
  /** Reports the derived cheapest matching plan, or null for no selection / no match. */
  onRecommend?: (planId: string | null) => void;
  onSelect?: (planId: string) => void;
  currencySymbol?: string;
  interval?: string;
  className?: string;
  ref?: React.ComponentPropsWithRef<"div">["ref"];
};

function includesFeature(feature: PlanFinderFeature | undefined, planId: string) {
  const value = feature?.availability[planId];
  return value === true || (typeof value === "string" && value.trim().length > 0);
}

/** A passive, client-only interaction surface: no timers, autoplay, or network requests. */
export function PlanFinderPricingTable({
  plans,
  features,
  needs,
  defaultNeeds = [],
  onNeedsChange,
  onRecommend,
  onSelect,
  currencySymbol = "$",
  interval = "/mo",
  className,
  ref,
}: PlanFinderPricingTableProps) {
  const [localNeeds, setLocalNeeds] = React.useState(defaultNeeds);
  const selectedNeeds = Array.from(new Set(needs ?? localNeeds));
  // Unknown feature IDs fail closed, so a stale requirement never produces a false match.
  const matching = plans.filter((plan) => Number.isFinite(plan.price) && plan.price >= 0 &&
    selectedNeeds.every((id) => includesFeature(features.find((feature) => feature.id === id), plan.id)));
  const best = selectedNeeds.length ? matching.reduce((cheapest, plan) =>
    !cheapest || plan.price < cheapest.price ? plan : cheapest, null as PlanFinderPlan | null) : null;
  const recommended = best?.id ?? null;
  const recommendedIndex = plans.findIndex((plan) => plan.id === recommended);
  const lastRecommendation = React.useRef(undefined as string | null | undefined);
  const hintId = React.useId();
  const titleId = React.useId();
  const groups: { label: string; items: PlanFinderFeature[] }[] = [];
  features.forEach((feature) => {
    const label = feature.group ?? "";
    const group = groups.find((entry) => entry.label === label);
    if (group) group.items.push(feature);
    else groups.push({ label, items: [feature] });
  });

  React.useEffect(() => {
    if (!onRecommend || lastRecommendation.current === recommended) return;
    lastRecommendation.current = recommended;
    onRecommend(recommended);
  }, [recommended, onRecommend]);

  const updateNeeds = (next: string[]) => {
    if (needs === undefined) setLocalNeeds(next);
    onNeedsChange?.(next);
  };
  const price = (plan: PlanFinderPlan) => `${currencySymbol}${plan.price}${interval}`;
  const summary = selectedNeeds.length === 0
    ? "Pick the features you need"
    : best
      ? `${best.name} covers all ${selectedNeeds.length} ${selectedNeeds.length === 1 ? "need" : "needs"} · ${price(best)}`
      : "Talk to sales";

  return (
    <div ref={ref} data-slot="plan-finder-pricing-table" data-recommended={recommended ?? ""} data-needs-count={selectedNeeds.length} data-autoplay="false" className={["w-full min-w-0 rounded-2xl border border-border bg-card text-card-foreground shadow-sm", className].filter(Boolean).join(" ")}>
      <style>{`
        @keyframes plan-finder-confirm { 0%,100% { transform:scale(1) } 50% { transform:scale(1.15) } }
        [data-slot="plan-finder-pricing-table"] [data-need-confirm="true"] { animation:plan-finder-confirm 240ms ease-in-out; }
        @media (prefers-reduced-motion: reduce) {
          [data-slot="plan-finder-pricing-table"] [data-need-confirm="true"] { animation:none; }
          [data-slot="plan-finder-pricing-table"] [data-plan-spotlight] { transition:none; }
        }
      `}</style>

      <div className="flex min-h-[68px] items-center gap-3 border-b border-border px-4 py-3">
        <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"><SlidersHorizontal className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p id={titleId} role="status" aria-live="polite" aria-atomic="true" data-recommendation className="text-[13px] font-semibold leading-5">{summary}</p>
          <p id={hintId} className="mt-0.5 text-[11px] leading-4 text-muted-foreground">{selectedNeeds.length > 0 && !best ? "No listed plan covers every selected need." : "The lowest price for your must-haves."}</p>
        </div>
        <button type="button" onClick={() => updateNeeds([])} disabled={selectedNeeds.length === 0} className="rounded-md px-2 py-2 text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30">Clear</button>
      </div>

      {plans.length === 0 ? <p className="p-8 text-center text-sm text-muted-foreground">Add plans to compare.</p> : (
        <div className="relative isolate overflow-hidden rounded-b-2xl" data-plan-stage>
          <div aria-hidden="true" data-plan-spotlight style={{ left: "38%", width: `${62 / plans.length}%`, transform: `translateX(${Math.max(0, recommendedIndex) * 100}%)`, opacity: best ? 1 : 0 }} className="pointer-events-none absolute inset-y-0 z-0 border-x border-primary/15 bg-primary/5 transition-[transform,opacity] duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none">
            <div className="h-0.5 bg-primary" />
            <div className="h-28 bg-gradient-to-b from-primary/10 to-transparent" />
          </div>
          <table className="relative z-10 w-full table-fixed border-collapse text-[11px]" aria-label="Find a plan by the features you need">
            <colgroup><col style={{ width: "38%" }} />{plans.map((plan) => <col key={plan.id} />)}</colgroup>
            <thead>
              <tr>
                <th scope="col" className="px-4 pb-3 text-left align-bottom font-normal">
                  <span className="block text-xs font-semibold">I need this</span>
                  <span data-selection-count className="mt-1 block text-[10px] text-muted-foreground">{selectedNeeds.length} selected</span>
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} scope="col" data-plan-header={plan.id} className="px-1 pb-3 pt-2 text-center font-normal">
                    <div className="mb-1 flex h-4 items-center justify-center"><span className={`rounded-full bg-primary px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-primary-foreground ${recommended === plan.id ? "visible" : "invisible"}`}>Best fit</span></div>
                    <span className="block text-xs font-semibold">{plan.name}</span>
                    <span className="mt-1 block whitespace-nowrap"><span className="text-[27px] font-medium leading-8 tracking-tighter">{currencySymbol}{plan.price}</span><span className="ml-0.5 text-[9px] text-muted-foreground">{interval}</span></span>
                  </th>
                ))}
              </tr>
            </thead>
            {groups.map((group) => (
              <tbody key={group.label}>
                {group.label && <tr data-feature-group={group.label}><th scope="rowgroup" colSpan={plans.length + 1} className="h-7 border-y border-border bg-muted/60 px-4 text-left text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{group.label}</th></tr>}
                {group.items.map((feature) => {
                  const selected = selectedNeeds.includes(feature.id);
                  return (
                    <tr key={feature.id} data-feature-row={feature.id} data-needed={selected} className="border-b border-border/50 last:border-b-0">
                      <th scope="row" className="px-3 text-left font-normal">
                        <label className="flex min-h-9 cursor-pointer items-center gap-2 rounded-md px-1 py-1.5">
                          <input type="checkbox" data-need-input={feature.id} checked={selected} aria-label={`I need this: ${feature.label}`} aria-describedby={hintId} onChange={() => updateNeeds(selected ? selectedNeeds.filter((id) => id !== feature.id) : [...selectedNeeds, feature.id])} onKeyDown={(event) => {
                            const direction = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
                            if (!direction && event.key !== "Home" && event.key !== "End") return;
                            event.preventDefault();
                            const inputs = Array.from(event.currentTarget.closest("table")?.querySelectorAll("input[data-need-input]") ?? []) as HTMLInputElement[];
                            const current = inputs.indexOf(event.currentTarget);
                            const next = event.key === "Home" ? 0 : event.key === "End" ? inputs.length - 1 : (current + direction + inputs.length) % inputs.length;
                            inputs[next]?.focus();
                          }} className="peer sr-only" />
                          <span aria-hidden="true" className={`flex size-4 shrink-0 items-center justify-center rounded-[5px] border peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-card ${selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40 bg-card"}`}>{selected && <Check className="size-3" strokeWidth={2.5} />}</span>
                          <span className={`leading-4 ${selected ? "font-medium text-foreground" : "text-muted-foreground"}`}>{feature.label}</span>
                        </label>
                      </th>
                      {plans.map((plan) => {
                        const available = includesFeature(feature, plan.id);
                        const value = feature.availability[plan.id];
                        const missing = selected && !available;
                        return (
                          <td key={plan.id} data-feature-cell={feature.id} data-cell-plan={plan.id} data-missing={missing} className={`px-1 text-center ${missing ? "opacity-35" : "opacity-100"}`}>
                            <span className="inline-flex max-w-full items-center justify-center gap-1">
                              <span key={`${feature.id}-${selected}`} data-need-confirm={selected && available ? "true" : undefined} aria-hidden="true" className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full ${selected && available ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                                {available ? <Check className="size-3" strokeWidth={2} /> : <X className="size-3" />}
                              </span>
                              {typeof value === "string" && available && <span className="text-[10px] leading-3 text-muted-foreground">{value}</span>}
                              <span className="sr-only">{available ? "Included" : "Not included"}</span>
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            ))}
            <tfoot><tr className="border-t border-border">
              <th scope="row" className="px-4 text-left text-[10px] font-normal text-muted-foreground">Your next step <ArrowUpRight aria-hidden="true" className="ml-1 inline size-3" /></th>
              {plans.map((plan) => <td key={plan.id} className="px-1.5 py-2.5"><button type="button" data-select-plan={plan.id} aria-label={`${plan.cta} — ${plan.name}`} onClick={() => onSelect?.(plan.id)} className={`min-h-8 w-full rounded-lg px-1 text-[10px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card ${recommended === plan.id ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-card text-muted-foreground ring-1 ring-inset ring-border hover:bg-muted hover:text-foreground"}`}>{plan.cta}</button></td>)}
            </tr></tfoot>
          </table>
          {features.length === 0 && <p className="p-4 text-center text-xs text-muted-foreground">Add features to find a match.</p>}
        </div>
      )}
    </div>
  );
}

export default PlanFinderPricingTable;
