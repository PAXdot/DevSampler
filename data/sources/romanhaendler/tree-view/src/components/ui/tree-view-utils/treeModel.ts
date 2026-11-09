export type Key = string | number;

export interface NodeReader<K, S extends Key = string> {
  key: (node: K) => S;
  children: (node: K) => readonly K[] | undefined;
  label: (node: K) => string;
  disabled?: (node: K) => boolean;
  unloaded?: (node: K) => boolean;
  matches?: (node: K) => boolean;
}

export interface TreeSnapshot<S extends Key = string> {
  expanded: ReadonlySet<S>;
  checked: ReadonlySet<S>;
  active: S | null;
  anchor: S | null;
  search: string;
}

export interface FlatteningEntry<K, S extends Key = string> {
  node: K;
  key: S;
  level: number;
  label: string;
  branch: boolean;
  empty: boolean;
  disabled: boolean;
  unloaded: boolean;
  expanded: boolean;
  checked: boolean;
  indeterminate: boolean;
  active: boolean;
  matches: boolean;
  pathOnly: boolean;
  position: number;
  siblings: number;
}

export type Direction = "up" | "down" | "in" | "out" | "start" | "end";

function mayBeChecked<K, S extends Key>(reader: NodeReader<K, S>, node: K): boolean {
  return reader.disabled?.(node) !== true && reader.unloaded?.(node) !== true;
}

interface Preparation<S extends Key> {
  indeterminate: Set<S>;
  survives: Set<S>;
  matches: Set<S>;
  descendantMatches: Set<S>;
}

function prepare<K, S extends Key>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  snapshot: TreeSnapshot<S>,
): Preparation<S> {
  const text = snapshot.search.trim().toLowerCase();
  const pre: Preparation<S> = {
    indeterminate: new Set<S>(),
    survives: new Set<S>(),
    matches: new Set<S>(),
    descendantMatches: new Set<S>(),
  };

  function walk(node: K): [boolean, boolean] {
    const id = reader.key(node);
    const children = reader.children(node);
    const selfChecked = snapshot.checked.has(id);
    const selfMatches = reader.matches
      ? reader.matches(node)
      : text === "" || reader.label(node).toLowerCase().includes(text);
    if (selfMatches) pre.matches.add(id);

    let anyChecked = selfChecked;
    let descendantMatches = false;
    for (const child of children ?? []) {
      const [checked, survives] = walk(child);
      if (checked) anyChecked = true;
      if (survives) descendantMatches = true;
    }

    const isBranch = children !== undefined;
    if (isBranch && !selfChecked && anyChecked) pre.indeterminate.add(id);

    if (descendantMatches) pre.descendantMatches.add(id);
    const survives = selfMatches || descendantMatches || reader.unloaded?.(node) === true;
    if (survives) pre.survives.add(id);
    return [anyChecked, survives];
  }

  for (const root of roots) walk(root);
  return pre;
}

export function treeModel<K, S extends Key = string>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  snapshot: TreeSnapshot<S>,
): readonly FlatteningEntry<K, S>[] {
  const searching = reader.matches !== undefined || snapshot.search.trim() !== "";
  const pre = prepare(roots, reader, snapshot);
  const out: FlatteningEntry<K, S>[] = [];

  function build(nodes: readonly K[], level: number, insideMatch: boolean): void {
    const surviving = insideMatch
      ? nodes
      : nodes.filter((n) => !searching || pre.survives.has(reader.key(n)));

    surviving.forEach((n, i) => {
      const id = reader.key(n);
      const children = reader.children(n);
      const unloaded = reader.unloaded?.(n) === true;
      const branch = children !== undefined || unloaded;
      const empty = branch && !unloaded && (children ?? []).length === 0;
      const selfMatches = pre.matches.has(id);
      const signpost = searching && !selfMatches && pre.descendantMatches.has(id);
      const showsPath = searching && pre.descendantMatches.has(id);
      const expanded = !empty && branch && (showsPath || snapshot.expanded.has(id));

      out.push({
        node: n,
        key: id,
        level,
        label: reader.label(n),
        branch,
        empty,
        disabled: reader.disabled?.(n) === true,
        unloaded,
        expanded,
        checked: snapshot.checked.has(id),
        indeterminate: pre.indeterminate.has(id),
        active: snapshot.active === id,
        matches: !searching || selfMatches,
        pathOnly: signpost,
        position: i + 1,
        siblings: surviving.length,
      });

      if (expanded) {
        build(children ?? [], level + 1, insideMatch || selfMatches);
      }
    });
  }

  build(roots, 0, false);
  return out;
}

export function expand<S extends Key>(snapshot: TreeSnapshot<S>, key: S): TreeSnapshot<S> {
  if (snapshot.expanded.has(key)) return snapshot;
  const next = new Set(snapshot.expanded);
  next.add(key);
  return { ...snapshot, expanded: next };
}

export function collapse<S extends Key>(snapshot: TreeSnapshot<S>, key: S): TreeSnapshot<S> {
  if (!snapshot.expanded.has(key)) return snapshot;
  const next = new Set(snapshot.expanded);
  next.delete(key);
  return { ...snapshot, expanded: next };
}

export function setActive<S extends Key>(snapshot: TreeSnapshot<S>, key: S | null): TreeSnapshot<S> {
  if (snapshot.active === key) return snapshot;
  return { ...snapshot, active: key };
}

export function move<K, S extends Key = string>(
  flattening: readonly FlatteningEntry<K, S>[],
  snapshot: TreeSnapshot<S>,
  direction: Direction,
): TreeSnapshot<S> {
  if (flattening.length === 0) return snapshot;
  const first = flattening[0] as FlatteningEntry<K, S>;
  const last = flattening[flattening.length - 1] as FlatteningEntry<K, S>;

  if (direction === "start") return setActive(snapshot, first.key);
  if (direction === "end") return setActive(snapshot, last.key);

  const i = flattening.findIndex((e) => e.key === snapshot.active);
  if (i < 0) return setActive(snapshot, first.key);
  const here = flattening[i] as FlatteningEntry<K, S>;

  switch (direction) {
    case "down": {
      const next = flattening[i + 1];
      return next === undefined ? snapshot : setActive(snapshot, next.key);
    }
    case "up": {
      const previous = flattening[i - 1];
      return previous === undefined ? snapshot : setActive(snapshot, previous.key);
    }
    case "in": {
      if (!here.branch || here.empty) return snapshot;
      if (!here.expanded) return expand(snapshot, here.key);
      const child = flattening[i + 1];
      return child === undefined ? snapshot : setActive(snapshot, child.key);
    }
    case "out": {
      if (here.branch && here.expanded) return collapse(snapshot, here.key);
      for (let k = i - 1; k >= 0; k--) {
        const candidate = flattening[k] as FlatteningEntry<K, S>;
        if (candidate.level < here.level) return setActive(snapshot, candidate.key);
      }
      return snapshot;
    }
  }
}

export function setAnchor<S extends Key>(snapshot: TreeSnapshot<S>, key: S | null): TreeSnapshot<S> {
  if (snapshot.anchor === key) return snapshot;
  return { ...snapshot, anchor: key };
}

export function keysBetween<K, S extends Key = string>(
  flattening: readonly FlatteningEntry<K, S>[],
  from: S,
  to: S,
): S[] {
  const i = flattening.findIndex((e) => e.key === from);
  const j = flattening.findIndex((e) => e.key === to);
  if (i < 0 || j < 0) return [];
  const [start, end] = i <= j ? [i, j] : [j, i];
  const out: S[] = [];
  for (let k = start; k <= end; k++) {
    const entry = flattening[k] as FlatteningEntry<K, S>;
    if (!entry.disabled && !entry.unloaded) out.push(entry.key);
  }
  return out;
}

interface NodeIndex<K, S extends Key> {
  nodes: Map<S, K>;
  parents: Map<S, S | null>;
  depth: Map<S, number>;
}

function indexNodes<K, S extends Key>(roots: readonly K[], reader: NodeReader<K, S>): NodeIndex<K, S> {
  const index: NodeIndex<K, S> = { nodes: new Map(), parents: new Map(), depth: new Map() };
  function walk(n: K, parent: S | null, depth: number): void {
    const id = reader.key(n);
    index.nodes.set(id, n);
    index.parents.set(id, parent);
    index.depth.set(id, depth);
    for (const child of reader.children(n) ?? []) walk(child, id, depth + 1);
  }
  for (const root of roots) walk(root, null, 0);
  return index;
}

export function setChecked<K, S extends Key = string>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  snapshot: TreeSnapshot<S>,
  targets: readonly S[],
  on: boolean,
): TreeSnapshot<S> {
  if (targets.length === 0) return snapshot;
  const index = indexNodes(roots, reader);
  const next = new Set(snapshot.checked);

  function cascade(n: K): void {
    if (mayBeChecked(reader, n)) {
      const id = reader.key(n);
      if (on) next.add(id);
      else next.delete(id);
    }
    for (const child of reader.children(n) ?? []) cascade(child);
  }

  function reconcileSubtree(n: K): void {
    const children = reader.children(n) ?? [];
    if (children.length === 0) return;
    for (const child of children) reconcileSubtree(child);
    if (!mayBeChecked(reader, n)) return;
    const id = reader.key(n);
    const all = children.every((child) => next.has(reader.key(child)));
    if (all) next.add(id);
    else next.delete(id);
  }

  const toReconcile = new Set<S>();
  let touched = false;
  for (const target of targets) {
    const n = index.nodes.get(target);
    if (n === undefined || !mayBeChecked(reader, n)) continue;
    touched = true;
    cascade(n);
    reconcileSubtree(n);
    let run: S | null = index.parents.get(target) ?? null;
    while (run !== null) {
      toReconcile.add(run);
      run = index.parents.get(run) ?? null;
    }
  }
  if (!touched) return snapshot;

  const byDepth = [...toReconcile].sort((x, y) => (index.depth.get(y) ?? 0) - (index.depth.get(x) ?? 0));
  for (const id of byDepth) {
    const n = index.nodes.get(id);
    if (n === undefined || !mayBeChecked(reader, n)) continue;
    const children = reader.children(n) ?? [];
    if (children.length === 0) continue;
    const all = children.every((child) => next.has(reader.key(child)));
    if (all) next.add(id);
    else next.delete(id);
  }

  return { ...snapshot, checked: next };
}

function toggleKeys<K, S extends Key = string>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  snapshot: TreeSnapshot<S>,
  targets: readonly S[],
): TreeSnapshot<S> {
  const on = setChecked(roots, reader, snapshot, targets, true);
  const alreadyFull =
    on.checked.size === snapshot.checked.size &&
    [...on.checked].every((id) => snapshot.checked.has(id));
  return alreadyFull ? setChecked(roots, reader, snapshot, targets, false) : on;
}

export function toggleAll<K, S extends Key = string>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  snapshot: TreeSnapshot<S>,
): TreeSnapshot<S> {
  const index = indexNodes(roots, reader);
  const checkable: S[] = [];
  for (const [id, n] of index.nodes) if (mayBeChecked(reader, n)) checkable.push(id);
  if (checkable.length === 0) return snapshot;
  return toggleKeys(roots, reader, snapshot, checkable);
}

export function toggleCheck<K, S extends Key = string>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  snapshot: TreeSnapshot<S>,
  key: S,
): TreeSnapshot<S> {
  return toggleKeys(roots, reader, snapshot, [key]);
}

export function typeaheadTarget<K, S extends Key = string>(
  flattening: readonly FlatteningEntry<K, S>[],
  prefix: string,
  active: S | null,
): S | null {
  const wanted = prefix.toLowerCase();
  if (wanted === "" || flattening.length === 0) return null;
  const here = flattening.findIndex((e) => e.key === active);
  const from = here < 0 ? 0 : wanted.length === 1 ? here + 1 : here;
  for (let n = 0; n < flattening.length; n++) {
    const entry = flattening[(from + n) % flattening.length] as FlatteningEntry<K, S>;
    if (entry.label.toLowerCase().startsWith(wanted)) return entry.key;
  }
  return null;
}

export function pathTo<K, S extends Key = string>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  key: S,
): S[] | null {
  function walk(node: K, path: S[]): S[] | null {
    const id = reader.key(node);
    path.push(id);
    if (id === key) return path;
    for (const child of reader.children(node) ?? []) {
      const found = walk(child, path);
      if (found !== null) return found;
    }
    path.pop();
    return null;
  }
  for (const root of roots) {
    const found = walk(root, []);
    if (found !== null) return found;
  }
  return null;
}

export function revealPath<K, S extends Key = string>(
  roots: readonly K[],
  reader: NodeReader<K, S>,
  snapshot: TreeSnapshot<S>,
  path: readonly S[],
): { snapshot: TreeSnapshot<S>; reached: S | null } {
  let candidates: readonly K[] = roots;
  let reached: S | null = null;
  const next = new Set(snapshot.expanded);

  for (let i = 0; i < path.length; i++) {
    const wanted = path[i] as S;
    const node = candidates.find((n) => reader.key(n) === wanted);
    if (node === undefined) break;
    reached = wanted;
    const children = reader.children(node);
    const isBranch = children !== undefined || reader.unloaded?.(node) === true;
    const empty = isBranch && reader.unloaded?.(node) !== true && (children ?? []).length === 0;
    if (i < path.length - 1 && isBranch && !empty) next.add(wanted);
    candidates = children ?? [];
  }

  if (reached === null) return { snapshot, reached: null };
  return { snapshot: { ...snapshot, expanded: next }, reached };
}

export function allBranches<K, S extends Key = string>(roots: readonly K[], reader: NodeReader<K, S>): S[] {
  const out: S[] = [];
  function walk(node: K): void {
    const children = reader.children(node);
    if (children !== undefined && children.length > 0 && reader.unloaded?.(node) !== true) {
      out.push(reader.key(node));
    }
    for (const child of children ?? []) walk(child);
  }
  for (const root of roots) walk(root);
  return out;
}

export function duplicateKey<K, S extends Key = string>(roots: readonly K[], reader: NodeReader<K, S>): S | null {
  const seen = new Set<S>();
  let found: S | null = null;
  function walk(node: K): void {
    if (found !== null) return;
    const id = reader.key(node);
    if (seen.has(id)) {
      found = id;
      return;
    }
    seen.add(id);
    for (const child of reader.children(node) ?? []) walk(child);
  }
  for (const root of roots) walk(root);
  return found;
}
