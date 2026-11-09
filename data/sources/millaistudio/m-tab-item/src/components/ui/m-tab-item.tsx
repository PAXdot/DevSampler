"use client";

import * as React from "react";

/**
 * Ported from Vue to React.
 * Original source: MillaiStudio/millai-ui
 *   - src/lib/components/navigation/MTabItem.vue
 *   - src/lib/components/navigation/MNavigationItem.vue
 *   - src/lib/components/navigation/context.ts
 * License: MIT - Copyright (c) 2026 Millai
 * https://github.com/MillaiStudio/millai-ui/blob/main/LICENSE
 *
 * MTabItem is a thin wrapper around the shared navigation item: it forwards
 * id/label, the select callback and the `icon` slot, while the selected
 * state is driven by an ancestor navigation context (originally provided by
 * MTabView.vue via Vue's provide/inject, here via React Context).
 */

export interface NavigationContextValue {
  selected: string;
  select: (id: string) => void;
}

export const NavigationContext = React.createContext<
  NavigationContextValue | undefined
>(undefined);

export interface MTabItemProps {
  /** Unique id for this tab, matched against the navigation context's selected id. */
  id: string;
  /** Visible label under the icon. */
  label: string;
  /** Render-prop for the icon slot; receives whether this tab is active. */
  icon?: (props: { active: boolean }) => React.ReactNode;
  /** Fired when the tab is clicked (mirrors the original `select` emit). */
  onSelect?: (id: string) => void;
}

export default function MTabItem({ id, label, icon, onSelect }: MTabItemProps) {
  const context = React.useContext(NavigationContext);

  const selected = context ? context.selected === id : false;

  const handleSelect = (): void => {
    context?.select(id);
    onSelect?.(id);
  };

  return (
    <button
      type="button"
      className={`m-navigation-item${selected ? " m-navigation-item--selected" : ""}`}
      aria-current={selected ? "page" : undefined}
      onClick={handleSelect}
    >
      <span className="m-navigation-item__icon">
        {icon?.({ active: selected })}
      </span>
      <span className="m-navigation-item__label">{label}</span>
    </button>
  );
}
