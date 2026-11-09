import { create, type Figure, type HairlineOptions } from "./mount";
import { mount as riffleEngine } from "./riffle-engine";

/**
 * Hairline — the public wrapper, scoped to the Riffle figure. Trimmed from
 * @lucasmarkes/hairline's index.ts, which wraps all twenty-seven figures the
 * same way; the `riffle()` function below is copied verbatim from it.
 */

export type { Figure, HairlineOptions } from "./mount";

/** A tray of eight cards. The card under the pointer stands up; the arrow keys walk the cards. `intensity` spreads the ripple further from the pulled card. */
export function riffle(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "riffle",
    label: "A tray of eight cards. Hover or use the arrow keys to pull a card.",
    rest: "rest",
    engine: riffleEngine,
    focusable: true,
  }, el, options);
}
