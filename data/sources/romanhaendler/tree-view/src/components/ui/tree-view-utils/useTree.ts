import { useCallback, useEffect, useMemo, useState } from "react";
import { useVirtual } from "./useVirtual";
import type { VirtualRows, VirtualOptions } from "./useVirtual";
import {
  allBranches,
  treeModel,
  move as moveModel,
  duplicateKey,
  toggleCheck as toggleCheckModel,
  expand,
  collapse,
  keysBetween,
  toggleAll as toggleAllModel,
  setChecked,
  setActive,
  setAnchor,
  typeaheadTarget,
  pathTo,
  revealPath,
  type TreeSnapshot,
  type FlatteningEntry,
  type NodeReader,
  type Direction,
  type Key,
} from "./treeModel";

export interface TreeOptions<K, S extends Key = string> {
  reader: NodeReader<K, S>;
  defaultExpanded?: Iterable<S>;
  defaultChecked?: Iterable<S>;
  defaultActive?: S | null;
  expanded?: ReadonlySet<S>;
  checked?: ReadonlySet<S>;
  active?: S | null;
  anchor?: S | null;
  search?: string;
  onExpanded?: (next: ReadonlySet<S>) => void;
  onChecked?: (next: ReadonlySet<S>) => void;
  onActive?: (next: S | null) => void;
  onAnchor?: (next: S | null) => void;
  onSearch?: (text: string) => void;
  onActivate?: (node: K) => void;
  onLoadChildren?: (node: K) => void;
  virtual?: VirtualOptions;
}

export interface Tree<K, S extends Key = string> {
  flattening: readonly FlatteningEntry<K, S>[];
  active: S | null;
  search: string;
  toggleExpanded: (key: S) => void;
  toggleCheck: (key: S) => void;
  activate: (key: S) => void;
  move: (direction: Direction) => void;
  setSearch: (text: string) => void;
  revealNode: (key: S) => S | null;
  revealPath: (path: readonly S[]) => S | null;
  expandAll: () => void;
  collapseAll: () => void;
  typeahead: (prefix: string) => void;
  checkTo: (to: S) => void;
  moveAndCheck: (direction: Direction) => void;
  toggleAll: () => void;
  revealCount: number;
  virtual?: VirtualRows;
}

export function useTree<K, S extends Key = string>(
  roots: readonly K[],
  options: TreeOptions<K, S>,
): Tree<K, S> {
  const {
    reader,
    defaultExpanded,
    defaultChecked,
    defaultActive = null,
    expanded: expandedProp,
    checked: checkedProp,
    active: activeProp,
    anchor: anchorProp,
    search: searchProp,
    onExpanded,
    onChecked,
    onActive,
    onAnchor,
    onSearch,
    onActivate,
    onLoadChildren,
    virtual,
  } = options;

  const [ownExpanded, setOwnExpanded] = useState<ReadonlySet<S>>(() => new Set(defaultExpanded ?? []));
  const [ownChecked, setOwnChecked] = useState<ReadonlySet<S>>(() => new Set(defaultChecked ?? []));
  const [ownActive, setOwnActive] = useState<S | null>(defaultActive);
  const [ownAnchor, setOwnAnchor] = useState<S | null>(null);
  const [ownSearch, setOwnSearch] = useState("");
  const [revealCount, setRevealCount] = useState(0);

  const snapshot = useMemo<TreeSnapshot<S>>(
    () => ({
      expanded: expandedProp ?? ownExpanded,
      checked: checkedProp ?? ownChecked,
      active: activeProp !== undefined ? activeProp : ownActive,
      anchor: anchorProp !== undefined ? anchorProp : ownAnchor,
      search: searchProp ?? ownSearch,
    }),
    [expandedProp, ownExpanded, checkedProp, ownChecked, activeProp, ownActive, anchorProp, ownAnchor, searchProp, ownSearch],
  );

  const flattening = useMemo(() => treeModel(roots, reader, snapshot), [roots, reader, snapshot]);

  useEffect(() => {
    if (typeof process === "undefined" || process.env?.NODE_ENV !== "development") return;
    const duplicate = duplicateKey(roots, reader);
    if (duplicate !== null) {
      console.warn(
        `@umriss-ui/core: the key "${String(duplicate)}" occurs more than once in the tree. ` +
          "The cascade and the active node presuppose unique keys.",
      );
    }
  }, [roots, reader]);

  const apply = useCallback(
    (next: TreeSnapshot<S>) => {
      if (next.expanded !== snapshot.expanded) {
        if (expandedProp === undefined) setOwnExpanded(next.expanded);
        onExpanded?.(next.expanded);
      }
      if (next.checked !== snapshot.checked) {
        if (checkedProp === undefined) setOwnChecked(next.checked);
        onChecked?.(next.checked);
      }
      if (next.anchor !== snapshot.anchor) {
        if (anchorProp === undefined) setOwnAnchor(next.anchor);
        onAnchor?.(next.anchor);
      }
      if (next.active !== snapshot.active) {
        if (activeProp === undefined) setOwnActive(next.active);
        onActive?.(next.active);
      }
    },
    [snapshot, expandedProp, checkedProp, activeProp, anchorProp, onExpanded, onChecked, onActive, onAnchor],
  );

  const entryFor = useCallback((key: S) => flattening.find((e) => e.key === key), [flattening]);

  const toggleExpanded = useCallback(
    (key: S) => {
      const entry = entryFor(key);
      if (entry === undefined || !entry.branch || entry.empty) return;
      const opening = !entry.expanded;
      apply(opening ? expand(snapshot, key) : collapse(snapshot, key));
      if (opening && entry.unloaded) onLoadChildren?.(entry.node);
    },
    [entryFor, snapshot, apply, onLoadChildren],
  );

  const toggleCheck = useCallback(
    (key: S) => {
      apply(setAnchor(toggleCheckModel(roots, reader, snapshot, key), key));
    },
    [roots, reader, snapshot, apply],
  );

  const checkTo = useCallback(
    (to: S) => {
      const from = snapshot.anchor ?? snapshot.active;
      if (from === null) return;
      apply(setChecked(roots, reader, snapshot, keysBetween(flattening, from, to), true));
    },
    [roots, reader, snapshot, flattening, apply],
  );

  const moveAndCheck = useCallback(
    (direction: Direction) => {
      const afterMove = moveModel(flattening, snapshot, direction);
      if (afterMove.active === null || afterMove.active === snapshot.active) return;
      apply(setAnchor(toggleCheckModel(roots, reader, afterMove, afterMove.active), afterMove.active));
    },
    [flattening, snapshot, roots, reader, apply],
  );

  const toggleAll = useCallback(() => apply(toggleAllModel(roots, reader, snapshot)), [roots, reader, snapshot, apply]);

  const activate = useCallback(
    (key: S) => {
      apply(setActive(snapshot, key));
      const entry = entryFor(key);
      if (entry !== undefined) onActivate?.(entry.node);
    },
    [snapshot, apply, entryFor, onActivate],
  );

  const move = useCallback((direction: Direction) => apply(moveModel(flattening, snapshot, direction)), [flattening, snapshot, apply]);

  const revealPathGesture = useCallback(
    (path: readonly S[]): S | null => {
      const { snapshot: after, reached } = revealPath(roots, reader, snapshot, path);
      if (reached === null) return null;
      apply(setActive(after, reached));
      setRevealCount((n) => n + 1);
      return reached;
    },
    [roots, reader, snapshot, apply],
  );

  const revealNode = useCallback(
    (key: S): S | null => {
      const path = pathTo(roots, reader, key);
      return path === null ? null : revealPathGesture(path);
    },
    [roots, reader, revealPathGesture],
  );

  const expandAll = useCallback(() => {
    apply({ ...snapshot, expanded: new Set(allBranches(roots, reader)) });
  }, [roots, reader, snapshot, apply]);

  const collapseAll = useCallback(() => {
    apply({ ...snapshot, expanded: new Set<S>() });
  }, [snapshot, apply]);

  const typeahead = useCallback(
    (prefix: string) => {
      const target = typeaheadTarget(flattening, prefix, snapshot.active);
      if (target !== null) apply(setActive(snapshot, target));
    },
    [flattening, snapshot, apply],
  );

  const setSearch = useCallback(
    (text: string) => {
      if (searchProp === undefined) setOwnSearch(text);
      onSearch?.(text);
    },
    [searchProp, onSearch],
  );

  const rowWindow = useVirtual(virtual ? flattening.length : 0, {
    rowHeight: virtual?.rowHeight ?? 0,
    overscan: virtual?.overscan,
  });

  return {
    flattening,
    virtual: virtual ? rowWindow : undefined,
    active: snapshot.active,
    search: snapshot.search,
    toggleExpanded,
    toggleCheck,
    activate,
    move,
    setSearch,
    revealNode,
    revealPath: revealPathGesture,
    revealCount,
    expandAll,
    collapseAll,
    typeahead,
    checkTo,
    moveAndCheck,
    toggleAll,
  };
}
