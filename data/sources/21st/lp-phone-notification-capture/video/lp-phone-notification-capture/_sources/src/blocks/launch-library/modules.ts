// Built with Remotion - https://remotion.pro/license
import { modulesFor, canonicalModulesFor } from "./runtime";
import { COMPONENTS as product } from "./product/components";
import { COMPONENTS as expression } from "./expression/components";
import { COMPONENTS as systems } from "./systems/components";
export const MODULES = modulesFor({ ...product, ...expression, ...systems });
export const CANONICAL_MODULES = canonicalModulesFor({ ...product, ...expression, ...systems });
