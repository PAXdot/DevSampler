import { create, type Figure, type HairlineOptions } from "./mount";
import { mount as cabinetEngine } from "./cabinet-engine";

/**
 * @lucasmarkes/hairline — the Cabinet figure's public factory.
 *
 * Trimmed from the package's src/index.ts (which lists all twenty-seven
 * figures) to the Cabinet entry only, per extraction scope: one function
 * that takes an element and the shared options, draws into the element, and
 * returns `{ update, destroy }`.
 */

export type { Figure, HairlineOptions } from "./mount";

/** A rack of twelve blades: the pointer's height pulls the nearest ones out on their rails, the farther the less. `intensity` pulls out more blades. */
export function cabinet(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "cabinet",
    label: "A rack of twelve blades: the pointer's height pulls the nearest ones out on their rails, the farther the less.",
    rest: "rest",
    engine: cabinetEngine,
  }, el, options);
}
