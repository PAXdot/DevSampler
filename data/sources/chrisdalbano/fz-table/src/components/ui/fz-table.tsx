"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { useForzaMotion } from "@/components/ui/fz-table-utils/forza-motion";

// Public shape ported 1:1 from the Vue component's `ForzaColumn` / `ForzaSort` types.
export interface ForzaColumn {
  key: string;
  label: string;
  sortable?: boolean;
  align?: "start" | "end";
}

export interface ForzaSort {
  key: string;
  direction: "asc" | "desc";
}

export interface FzTableProps<T extends { id: string | number }> {
  /** Rows to render. Supply unique row IDs. */
  rows: readonly T[];
  columns: readonly ForzaColumn[];
  label: string;
  motionDisabled?: boolean;
  /** Sorting is controlled: use the emitted sort value to sort rows in the parent (was v-model:sort). */
  sort?: ForzaSort;
  onSortChange?: (sort: ForzaSort) => void;
  /** Scoped slot `cell` -> render prop. Default renders the raw value. */
  renderCell?: (args: {
    row: T;
    column: ForzaColumn;
    value: unknown;
  }) => ReactNode;
  /** Slot `empty` -> render prop. Default is "No results.". */
  renderEmpty?: () => ReactNode;
}

function value<T>(row: T, key: string) {
  return (row as Record<string, unknown>)[key];
}

export default function FzTable<T extends { id: string | number }>({
  rows,
  columns,
  label,
  motionDisabled,
  sort,
  onSortChange,
  renderCell,
  renderEmpty,
}: FzTableProps<T>) {
  // Rows rise in, leave, and spring to their new place when the parent sorts or filters.
  const { parent } = useForzaMotion<HTMLTableSectionElement>({
    disabled: motionDisabled,
    stagger: 24,
  });

  // Leaving rows are pulled out of flow while they fade. Pin their cell widths
  // first so they keep the column layout, and stop them taking focus. This runs
  // during render (before React commits the removal), mirroring the original
  // Vue `watch(..., { flush: 'pre' })` timing.
  const prevKeysRef = useRef<Set<string>>(new Set());
  const liveKeys = new Set(rows.map((row) => String(row.id)));
  if (parent.current) {
    parent.current
      .querySelectorAll<HTMLElement>(":scope > [data-fz-key]")
      .forEach((row) => {
        const key = row.dataset.fzKey!;
        if (liveKeys.has(key) || !prevKeysRef.current.has(key)) return;
        for (const cell of row.children as HTMLCollectionOf<HTMLElement>)
          cell.style.width = cell.offsetWidth + "px";
        (row as unknown as { inert: boolean }).inert = true;
        row.setAttribute("aria-hidden", "true");
      });
  }
  prevKeysRef.current = liveKeys;

  function toggle(key: string) {
    onSortChange?.({
      key,
      direction: sort?.key === key && sort.direction === "asc" ? "desc" : "asc",
    });
  }

  return (
    <div
      className="fz-table-wrap"
      role="region"
      aria-label={label}
      tabIndex={0}
    >
      <table className="fz-table">
        <caption>{label}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{ textAlign: column.align === "end" ? "right" : "left" }}
                aria-sort={
                  column.sortable
                    ? sort?.key === column.key
                      ? sort.direction === "asc"
                        ? "ascending"
                        : "descending"
                      : "none"
                    : undefined
                }
              >
                {column.sortable ? (
                  <button type="button" onClick={() => toggle(column.key)}>
                    {column.label}
                    <span
                      className="sort-arrow"
                      data-direction={
                        sort?.key === column.key ? sort.direction : undefined
                      }
                      aria-hidden="true"
                    >
                      {sort?.key === column.key ? "↑" : "↕"}
                    </span>
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={parent}>
          {rows.map((row) => (
            <tr key={row.id} data-fz-key={row.id} className="fz-table-row">
              {columns.map((column) => {
                const cellValue = value(row, column.key);
                return (
                  <td
                    key={column.key}
                    style={{
                      textAlign: column.align === "end" ? "right" : "left",
                    }}
                  >
                    {renderCell
                      ? renderCell({ row, column, value: cellValue })
                      : (cellValue as ReactNode)}
                  </td>
                );
              })}
            </tr>
          ))}
          {rows.length === 0 && (
            <tr key="__empty">
              <td colSpan={columns.length}>
                {renderEmpty ? renderEmpty() : "No results."}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
