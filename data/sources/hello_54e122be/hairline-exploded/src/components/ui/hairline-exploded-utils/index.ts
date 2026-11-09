import { create, type Figure, type HairlineOptions } from "./mount";
import { mount as explodedEngine } from "./exploded-engine";

/**
 * @lucasmarkes/hairline — Exploded, the isometric figure that answers the pointer.
 *
 * Trimmed from the package's index.ts to the one figure this component
 * ships. Draws into the element it is handed and returns `{ update, destroy }`.
 */

export type { Figure, HairlineOptions } from "./mount";

/** An app window in four layers. Moving across opens the gap; moving down picks a layer. `intensity` opens the layers further. */
export function exploded(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "exploded",
    label: "An app window taken apart into four layers. Moving across opens the gap; moving down picks a layer.",
    rest: "",
    engine: explodedEngine,
  }, el, options);
}
