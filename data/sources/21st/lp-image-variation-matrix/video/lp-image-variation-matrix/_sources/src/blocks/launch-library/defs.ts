// Built with Remotion - https://remotion.pro/license
// Pure catalog for48 motion compositions ×5 visual systems.
import { canonicalDefsFor, defsFor, isCuratedPattern } from "./contract";
import { SPECS as product } from "./product/specs";
import { SPECS as expression } from "./expression/specs";
import { SPECS as systems } from "./systems/specs";
export const GROUP_SPECS = { product, expression, systems };
export const SPECS = [...product, ...expression, ...systems];
export const DEFS = defsFor(SPECS);
export const CANONICAL_DEFS = canonicalDefsFor(SPECS);
export const CURATED_DEFS = canonicalDefsFor(SPECS.filter(spec => isCuratedPattern(spec.id)));
