import { create, type Figure, type HairlineOptions } from "./mount";
import { mount as sieveEngine } from "./figures-sieve";

/**
 * @lucasmarkes/hairline — the Sieve figure's public entry, excerpted from
 * index.ts (which otherwise names twenty-six other figures the same way).
 * One function: it takes an element and the shared options, draws into the
 * element, and returns `{ update, destroy }`.
 */
export type { Figure, HairlineOptions } from "./mount";

/** Three test sieves stacked over a pan: the pointer's height picks one, it rises clear of the stack, and every mesh is bare. `intensity` opens the gap further. */
export function sieve(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "sieve",
    label: "Three test sieves stacked over a pan: the pointer's height picks one, it rises clear of the stack, and every mesh is bare.",
    rest: "rest",
    engine: sieveEngine,
  }, el, options);
}
