export interface WindowInput {
  count: number;
  rowHeight: number;
  scrollTop: number;
  viewportHeight: number;
  overscan?: number;
}

export interface RowWindow {
  from: number;
  to: number;
  before: number;
  after: number;
}

const EMPTY: RowWindow = { from: 0, to: 0, before: 0, after: 0 };

export function visibleWindow({ count, rowHeight, scrollTop, viewportHeight, overscan = 4 }: WindowInput): RowWindow {
  if (count <= 0 || rowHeight <= 0) return EMPTY;

  const top = Math.max(0, scrollTop);
  const firstVisible = Math.floor(top / rowHeight);
  const fit = Math.ceil(Math.max(0, viewportHeight) / rowHeight) + 1;

  const from = Math.max(0, firstVisible - overscan);
  const to = Math.min(count, firstVisible + fit + overscan);

  return {
    from,
    to,
    before: from * rowHeight,
    after: (count - to) * rowHeight,
  };
}

export interface RowPlacement {
  rowHeight: number;
  scrollTop: number;
  viewportHeight: number;
  headerHeight?: number;
}

export function scrollForRow(index: number, { rowHeight, scrollTop, viewportHeight, headerHeight = 0 }: RowPlacement): number | null {
  if (rowHeight <= 0) return null;

  const top = index * rowHeight;
  const bottom = top + rowHeight;

  if (top < scrollTop + headerHeight) return Math.max(0, top - headerHeight);
  if (bottom > scrollTop + viewportHeight) return Math.max(0, bottom - viewportHeight);
  return null;
}
