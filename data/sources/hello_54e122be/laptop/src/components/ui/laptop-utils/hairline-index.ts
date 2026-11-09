import { create, type Figure, type HairlineOptions } from "./hairline-mount";
import { mount as laptopEngine } from "./hairline-laptop-figure";

/**
 * @lucasmarkes/hairline — the laptop figure, which answers the pointer.
 *
 * Takes an element and the shared options, draws into the element, and
 * returns `{ update, destroy }`.
 */

export type { Figure, HairlineOptions } from "./hairline-mount";

/** A thin laptop: the pointer's height sets how far the lid stands open, and the lid follows it on a spring. `intensity` lets the lid open wider. */
export function laptop(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "laptop",
    label: "A thin laptop: the pointer's height sets how far the lid stands open, and the lid follows it on a spring.",
    rest: "rest",
    engine: laptopEngine,
  }, el, options);
}
