export interface Wording {
  clearInput: string;
  treeSearchPlaceholder: string;
  treeNoMatches: string;
  loading: string;
  [key: string]: unknown;
}

/** Trimmed to the entries this component tree actually reads; the source
    library's full register (packages/core/src/lib/language/wording.ts) has
    several hundred entries for every component in umriss-ui. Values below are
    copied verbatim from its DEFAULT_WORDING. */
export const DEFAULT_WORDING: Wording = {
  clearInput: "Clear input",
  treeSearchPlaceholder: "Search the tree \u2026",
  treeNoMatches: "Nothing matches the search.",
  loading: "Loading",
};
