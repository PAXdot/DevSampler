import { create, type Figure, type HairlineOptions } from "@/components/ui/relay-utils/mount";
import { mount as relayEngine } from "@/components/ui/relay-utils/relay-engine";

export type { Figure, HairlineOptions } from "@/components/ui/relay-utils/mount";

/** A hub and four branches of tiles: the path to the leaf under the pointer lights hop by hop, each tile rising in turn. `intensity` makes each hop wait longer. */
export function relay(el: HTMLElement, options?: HairlineOptions): Figure {
  return create({
    id: "relay",
    label: "A hub and four branches of tiles: the path to the leaf under the pointer lights hop by hop, each tile rising in turn.",
    rest: "rest",
    engine: relayEngine,
    tour: [[45, 145], [140, 253], [271, 258], [355, 216], [344, 151], null],
  }, el, options);
}
