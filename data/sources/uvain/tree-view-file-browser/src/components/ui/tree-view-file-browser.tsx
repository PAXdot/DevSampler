"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

/* Layro System · Tree. Composed from the Layro UI source into one file.
   Themed with shadcn/ui tokens; follows your globals.css in light and dark. */


/* ============================================================== tree == */

/* ==========================================================================
   Tree View

   Nested items that fold — a folder browser, a page outline, an org chart,
   the settings of a workspace. Implements the WAI-ARIA tree pattern, which is
   the part most hand-built trees skip:

     ↑ ↓        move between visible items
     → ←        open a closed folder / close an open one; on a leaf or an
                already-open folder, move into it or back to its parent
     Home End   first and last visible item
     Enter      select;  type a letter to jump to the next item starting with it

   One item is in the tab order at a time, so a 400-node tree is one Tab stop.

     <Tree items={nodes} defaultExpanded={["docs"]} selected={id} onSelect={setId} />
   ========================================================================== */

export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  /** Right-aligned detail: a count, a size. */
  meta?: React.ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
}

export interface TreeProps {
  items: TreeNode[];
  selected?: string;
  onSelect?: (id: string, node: TreeNode) => void;
  expanded?: string[];
  defaultExpanded?: string[];
  onExpandedChange?: (ids: string[]) => void;
  /** Accessible name. */
  label: string;
  className?: string;
}

interface Flat {
  node: TreeNode;
  level: number;
  parent: string | null;
  posinset: number;
  setsize: number;
}

function flatten(items: TreeNode[], open: Set<string>, level = 1, parent: string | null = null, out: Flat[] = []) {
  items.forEach((node, i) => {
    out.push({ node, level, parent, posinset: i + 1, setsize: items.length });
    if (node.children?.length && open.has(node.id)) flatten(node.children, open, level + 1, node.id, out);
  });
  return out;
}

export function Tree({ items, selected, onSelect, expanded, defaultExpanded = [], onExpandedChange, label, className }: TreeProps) {
  const [innerOpen, setInnerOpen] = React.useState<string[]>(defaultExpanded);
  const openIds = expanded ?? innerOpen;
  const open = React.useMemo(() => new Set(openIds), [openIds]);
  const setOpen = (ids: string[]) => {
    if (expanded === undefined) setInnerOpen(ids);
    onExpandedChange?.(ids);
  };
  const visible = React.useMemo(() => flatten(items, open), [items, open]);
  const [focusId, setFocusId] = React.useState<string | null>(null);
  const tabId = focusId && visible.some((v) => v.node.id === focusId) ? focusId : (selected ?? visible[0]?.node.id);
  const refs = React.useRef(new Map<string, HTMLDivElement>());

  const focus = (id: string | undefined) => {
    if (!id) return;
    setFocusId(id);
    refs.current.get(id)?.focus();
  };

  const toggle = (id: string, to?: boolean) => {
    const isOpen = open.has(id);
    const next = to ?? !isOpen;
    if (next === isOpen) return;
    setOpen(next ? [...openIds, id] : openIds.filter((x) => x !== id));
  };

  const onKeyDown = (e: React.KeyboardEvent, f: Flat, index: number) => {
    const hasKids = !!f.node.children?.length;
    const isOpen = open.has(f.node.id);
    switch (e.key) {
      case "ArrowDown":
        focus(visible[index + 1]?.node.id);
        break;
      case "ArrowUp":
        focus(visible[index - 1]?.node.id);
        break;
      case "ArrowRight":
        if (hasKids && !isOpen) toggle(f.node.id, true);
        else if (hasKids) focus(visible[index + 1]?.node.id);
        break;
      case "ArrowLeft":
        if (hasKids && isOpen) toggle(f.node.id, false);
        else focus(f.parent ?? undefined);
        break;
      case "Home":
        focus(visible[0]?.node.id);
        break;
      case "End":
        focus(visible[visible.length - 1]?.node.id);
        break;
      case "Enter":
      case " ":
        if (!f.node.disabled) {
          onSelect?.(f.node.id, f.node);
          if (hasKids && e.key === "Enter") toggle(f.node.id);
        }
        break;
      default:
        if (e.key.length === 1 && /\S/.test(e.key)) {
          const k = e.key.toLowerCase();
          const after = [...visible.slice(index + 1), ...visible.slice(0, index)];
          focus(after.find((v) => v.node.label.toLowerCase().startsWith(k))?.node.id);
          break;
        }
        return;
    }
    e.preventDefault();
  };

  return (
    <div role="tree" aria-label={label} className={cn("grid min-w-0 grid-cols-[minmax(0,1fr)] gap-px text-[13px]", className)}>
      {visible.map((f, index) => {
        const hasKids = !!f.node.children?.length;
        const isOpen = open.has(f.node.id);
        const isSel = selected === f.node.id;
        return (
          <div
            key={f.node.id}
            ref={(el) => {
              if (el) refs.current.set(f.node.id, el);
              else refs.current.delete(f.node.id);
            }}
            role="treeitem"
            aria-level={f.level}
            aria-posinset={f.posinset}
            aria-setsize={f.setsize}
            aria-expanded={hasKids ? isOpen : undefined}
            aria-selected={isSel}
            aria-disabled={f.node.disabled || undefined}
            tabIndex={f.node.id === tabId ? 0 : -1}
            onFocus={() => setFocusId(f.node.id)}
            onKeyDown={(e) => onKeyDown(e, f, index)}
            onClick={() => {
              if (f.node.disabled) return;
              setFocusId(f.node.id);
              onSelect?.(f.node.id, f.node);
              if (hasKids) toggle(f.node.id);
            }}
            style={{ paddingLeft: 6 + (f.level - 1) * 16 }}
            className={cn(
              "flex h-8 min-w-0 cursor-pointer items-center gap-1.5 rounded-[8px] pr-2.5 outline-none select-none",
              "text-foreground/85 hover:bg-accent hover:text-foreground",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
              isSel && "bg-accent font-medium text-foreground",
              f.node.disabled && "pointer-events-none opacity-50",
              "[&_svg]:size-4 [&_svg]:shrink-0",
            )}
          >
            <span className="grid size-4 place-items-center text-muted-foreground">
              {hasKids && <ChevronRight aria-hidden className={cn("size-3.5! transition-transform duration-150", isOpen && "rotate-90")} />}
            </span>
            {f.node.icon && <span className="flex text-muted-foreground">{f.node.icon}</span>}
            <span className="min-w-0 truncate">{f.node.label}</span>
            {f.node.meta !== undefined && <span className="ml-auto shrink-0 pl-3 text-[11.5px] text-foreground/60 tabular-nums">{f.node.meta}</span>}
          </div>
        );
      })}
    </div>
  );
}

export { Tree as Component };
