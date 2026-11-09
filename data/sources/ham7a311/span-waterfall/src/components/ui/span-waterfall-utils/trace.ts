/**
 * Span Waterfall — trace utilities
 * Source: https://github.com/ham7a311/Vitrine (src/registry/developer/span-waterfall/trace.ts)
 *
 * MIT License
 * Copyright (c) 2026 Hamza Al-Bulushi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * A trace as a tree of timed spans: depth for indenting, self time (the part
 * of a span not covered by its children), and the critical path, the chain
 * of spans that decided when the whole request finished.
 */
export type Span = { id: string; parent?: string; name: string; service: string; start: number; duration: number; attrs?: Record<string, string | number>; error?: boolean };
export type Node = Span & { depth: number; children: string[]; self: number; end: number };

export function build(spans: Span[]) {
  const byId = new Map<string, Node>(spans.map((s) => [s.id, { ...s, depth: 0, children: [], self: s.duration, end: s.start + s.duration }]));
  const roots: string[] = [];
  for (const s of byId.values()) {
    const p = s.parent ? byId.get(s.parent) : undefined;
    if (p) p.children.push(s.id); else roots.push(s.id);
  }
  const sortKids = (ids: string[]) => ids.sort((a, b) => byId.get(a)!.start - byId.get(b)!.start);
  sortKids(roots);
  const order: string[] = [];
  const walk = (id: string, depth: number) => {
    const n = byId.get(id)!;
    n.depth = depth;
    order.push(id);
    sortKids(n.children);
    // Self time: the span's length minus the union of its children, clipped to the span.
    let covered = 0, cursor = n.start;
    for (const c of n.children.map((k) => byId.get(k)!)) {
      const s = Math.max(cursor, c.start), e = Math.min(n.end, c.end);
      if (e > s) { covered += e - s; cursor = e; }
    }
    n.self = Math.max(0, n.duration - covered);
    n.children.forEach((c) => walk(c, depth + 1));
  };
  roots.forEach((r) => walk(r, 0));
  const start = Math.min(...spans.map((s) => s.start)), end = Math.max(...spans.map((s) => s.start + s.duration));
  return { byId, roots, order, start, end };
}

/** Follow the child that finished last, from each root down. */
export function criticalPath(t: ReturnType<typeof build>): Set<string> {
  const out = new Set<string>();
  const root = t.roots.reduce((a, b) => (t.byId.get(b)!.end > t.byId.get(a)!.end ? b : a), t.roots[0]);
  let cur: string | undefined = root;
  while (cur) {
    out.add(cur);
    const kids: Node[] = t.byId.get(cur)!.children.map((k) => t.byId.get(k)!);
    cur = kids.length ? kids.reduce((a, b) => (b.end > a.end ? b : a)).id : undefined;
  }
  return out;
}
