/* The tree as a control.

   What a node *says* belongs to the caller - symbols, counters, second lines
   stay possible. What makes it a node belongs to the tree: the row, the
   indentation, the chevron, the tick and the information for the screen
   reader. */

import { forwardRef, useEffect, useId, useRef } from "react";
import type {
  ForwardedRef,
  HTMLAttributes,
  KeyboardEvent as ReactKeyboardEvent,
  ReactNode,
} from "react";
import { cx } from "./tree-view-utils/cx";
import { mergeRefs } from "./tree-view-utils/mergeRefs";
import { AngleGlyph } from "./tree-view-utils/glyphs";
import { Checkbox } from "./tree-view-utils/Checkbox";
import { Spinner } from "./tree-view-utils/Spinner";
import { useWording } from "./tree-view-utils/language";
import { idPart } from "./tree-view-utils/idPart";
import type { FlatteningEntry, Key } from "./tree-view-utils/treeModel";
import type { Tree } from "./tree-view-utils/useTree";
import styles from "./tree-view-utils/TreeView.module.css";

const TYPEAHEAD_PAUSE = 600;

export interface TreeViewProps<K, S extends Key = string> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  tree: Tree<K, S>;
  ariaLabel: string;
  checkable?: boolean;
  children: (entry: FlatteningEntry<K, S>) => ReactNode;
}

export const TreeView = forwardRef(function TreeView<K, S extends Key = string>(
  {
    tree,
    ariaLabel,
    checkable = false,
    children,
    className,
    onKeyDown,
    onFocus,
    onBlur,
    onScroll,
    ...rest
  }: TreeViewProps<K, S>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const wording = useWording();
  const idBase = useId();
  const rowWindow = tree.virtual;
  const ownRef = useRef<HTMLDivElement | null>(null);
  const rootRef = rowWindow?.scrollRef ?? ownRef;
  const hasFocus = useRef(false);
  const revealed = useRef(0);
  const buffer = useRef("");
  const bufferTimer = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (root === null || tree.active === null) return;
    if (rowWindow !== undefined) {
      const index = tree.flattening.findIndex((e) => e.key === tree.active);
      if (index >= 0 && (index < rowWindow.from || index >= rowWindow.to)) {
        rowWindow.showRow(index);
        return;
      }
    }
    const requested = tree.revealCount !== revealed.current;
    revealed.current = tree.revealCount;
    if (!hasFocus.current && !requested) return;
    const target = root.querySelector<HTMLElement>(
      `[data-key="${CSS.escape(String(tree.active))}"]`,
    );
    if (target !== null && target !== document.activeElement) target.focus();
  }, [tree.active, tree.flattening, tree.revealCount, rowWindow, rootRef]);

  useEffect(
    () => () => {
      if (bufferTimer.current !== null)
        window.clearTimeout(bufferTimer.current);
    },
    [],
  );

  const onKey = (e: ReactKeyboardEvent<HTMLDivElement>): void => {
    onKeyDown?.(e);
    if (e.defaultPrevented) return;
    if (checkable && e.key === "a" && (e.ctrlKey || e.metaKey)) {
      tree.toggleAll();
      e.preventDefault();
      return;
    }
    if (checkable && e.shiftKey && e.key === " " && tree.active !== null) {
      tree.checkTo(tree.active);
      e.preventDefault();
      return;
    }
    if (
      checkable &&
      e.shiftKey &&
      (e.key === "ArrowDown" || e.key === "ArrowUp")
    ) {
      tree.moveAndCheck(e.key === "ArrowDown" ? "down" : "up");
      e.preventDefault();
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        tree.move("down");
        break;
      case "ArrowUp":
        tree.move("up");
        break;
      case "ArrowRight":
        tree.move("in");
        break;
      case "ArrowLeft":
        tree.move("out");
        break;
      case "Home":
        tree.move("start");
        break;
      case "End":
        tree.move("end");
        break;
      case "Enter":
        if (tree.active !== null) tree.activate(tree.active);
        break;
      case " ":
        if (checkable && tree.active !== null) tree.toggleCheck(tree.active);
        break;
      default: {
        if (
          e.key.length !== 1 ||
          e.ctrlKey ||
          e.metaKey ||
          e.altKey ||
          e.key === " "
        )
          return;
        if (bufferTimer.current !== null)
          window.clearTimeout(bufferTimer.current);
        buffer.current += e.key;
        bufferTimer.current = window.setTimeout(() => {
          buffer.current = "";
          bufferTimer.current = null;
        }, TYPEAHEAD_PAUSE);
        tree.typeahead(buffer.current);
        break;
      }
    }
    e.preventDefault();
  };

  const rendered =
    rowWindow === undefined
      ? tree.flattening
      : tree.flattening.slice(rowWindow.from, rowWindow.to);
  const tabStop =
    tree.active !== null && rendered.some((e) => e.key === tree.active)
      ? tree.active
      : rendered[0]?.key;

  return (
    <div
      ref={mergeRefs(rootRef, ref)}
      aria-label={ariaLabel}
      className={cx(
        styles.tree,
        rowWindow !== undefined && styles.scrolls,
        className,
      )}
      {...rest}
      role="tree"
      onKeyDown={onKey}
      onScroll={(e) => {
        onScroll?.(e);
        rowWindow?.onScroll();
      }}
      onFocus={(e) => {
        onFocus?.(e);
        hasFocus.current = true;
      }}
      onBlur={(e) => {
        onBlur?.(e);
        if (!e.currentTarget.contains(e.relatedTarget as Node | null))
          hasFocus.current = false;
      }}
    >
      {rowWindow !== undefined && rowWindow.fillerBefore > 0 ? (
        <div aria-hidden="true" style={{ height: rowWindow.fillerBefore }} />
      ) : null}
      {rendered.map((entry) => {
        const expandable = entry.branch && !entry.empty;
        return (
          <div
            key={String(entry.key)}
            role="treeitem"
            data-key={String(entry.key)}
            data-row=""
            aria-level={entry.level + 1}
            aria-posinset={entry.position}
            aria-setsize={entry.siblings}
            aria-expanded={expandable ? entry.expanded : undefined}
            aria-checked={
              checkable
                ? entry.indeterminate
                  ? "mixed"
                  : entry.checked
                : undefined
            }
            aria-disabled={checkable && entry.disabled ? true : undefined}
            tabIndex={entry.key === tabStop ? 0 : -1}
            className={cx(
              styles.row,
              entry.active && styles.active,
              entry.pathOnly && styles.pathOnly,
              checkable && entry.disabled && styles.disabled,
            )}
            style={{ "--tree-level": entry.level } as React.CSSProperties}
            onClick={() => tree.activate(entry.key)}
          >
            {expandable ? (
              <span
                aria-hidden="true"
                className={cx(
                  styles.chevron,
                  entry.expanded && styles.chevronOpen,
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  tree.toggleExpanded(entry.key);
                }}
              >
                <AngleGlyph />
              </span>
            ) : entry.empty ? (
              <span aria-hidden="true" className={styles.emptyDot} />
            ) : (
              <span aria-hidden="true" className={styles.placeholder} />
            )}

            {checkable ? (
              <span
                className={styles.check}
                onClick={(e) => e.stopPropagation()}
              >
                <Checkbox
                  id={`${idBase}-check-${idPart(String(entry.key))}`}
                  checked={entry.checked}
                  indeterminate={entry.indeterminate}
                  disabled={entry.disabled || entry.unloaded}
                  tabIndex={-1}
                  aria-hidden="true"
                  onChange={() => tree.toggleCheck(entry.key)}
                />
              </span>
            ) : null}

            <span className={styles.content}>{children(entry)}</span>
            {entry.unloaded && entry.expanded ? (
              <Spinner size={12} className={styles.loading} />
            ) : null}
          </div>
        );
      })}
      {rowWindow !== undefined && rowWindow.fillerAfter > 0 ? (
        <div aria-hidden="true" style={{ height: rowWindow.fillerAfter }} />
      ) : null}
      {tree.flattening.length === 0 && tree.search.trim() !== "" ? (
        <p className={styles.noMatches}>{wording.treeNoMatches}</p>
      ) : null}
    </div>
  );
}) as <K, S extends Key = string>(
  props: TreeViewProps<K, S> & { ref?: ForwardedRef<HTMLDivElement> },
) => ReactNode;

export { useTree } from "./tree-view-utils/useTree";
export type { Tree, TreeOptions } from "./tree-view-utils/useTree";
export type {
  FlatteningEntry,
  Key,
  TreeSnapshot,
  NodeReader,
  Direction,
} from "./tree-view-utils/treeModel";

export default TreeView;
