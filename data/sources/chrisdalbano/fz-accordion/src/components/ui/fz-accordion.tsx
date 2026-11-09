"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowLeft,
  Minus,
  Info,
  Settings2,
  MoreHorizontal,
  ArrowUpRight,
  ArrowRight,
  Plus,
  X,
  Check,
  Search,
  Shield,
  Swords,
  Zap,
  Flame,
  Sun,
  Moon,
  LoaderCircle,
  Trash2,
  RotateCcw,
  ArrowDownUp,
  ChevronDown,
  GripVertical,
  TriangleAlert,
  User,
  ChevronsUpDown,
  type LucideProps,
} from "lucide-react";

/**
 * Ported 1:1 from Forza UI's FzIcon.vue icon map (packages/vue/src/components/FzIcon.vue).
 * Only "plus" is actually rendered by FzAccordion, but the full map is kept for API parity
 * with the original component's icon registry.
 */
const icons = {
  arrowLeft: ArrowLeft,
  minus: Minus,
  info: Info,
  settings: Settings2,
  more: MoreHorizontal,
  arrowUpRight: ArrowUpRight,
  arrowRight: ArrowRight,
  plus: Plus,
  close: X,
  check: Check,
  search: Search,
  shield: Shield,
  swords: Swords,
  zap: Zap,
  flame: Flame,
  sun: Sun,
  moon: Moon,
  loader: LoaderCircle,
  trash: Trash2,
  undo: RotateCcw,
  sort: ArrowDownUp,
  chevronDown: ChevronDown,
  grip: GripVertical,
  warning: TriangleAlert,
  user: User,
  chevronsUpDown: ChevronsUpDown,
} as const;

type IconName = keyof typeof icons;

function FzIcon({
  name,
  size = 18,
  label,
  strokeWidth = 1.75,
}: {
  name: IconName;
  size?: number;
  label?: string;
  strokeWidth?: number;
} & Omit<LucideProps, "name" | "size" | "strokeWidth">) {
  const Cmp = icons[name];
  return (
    <Cmp
      className="fz-icon"
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      focusable="false"
    />
  );
}

/** Ported from Forza UI's types.ts (packages/vue/src/types.ts). */
export interface ForzaAccordionItem {
  value: string;
  title: string;
  content?: string;
  disabled?: boolean;
}

export interface FzAccordionProps {
  items: readonly ForzaAccordionItem[];
  label: string;
  disabled?: boolean;
  /** Controlled open value — React equivalent of the Vue `v-model`. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** React equivalent of the Vue `#title="{ item }"` scoped slot. */
  renderTitle?: (item: ForzaAccordionItem) => React.ReactNode;
  /** React equivalent of the Vue default `#="{ item }"` scoped slot. */
  renderContent?: (item: ForzaAccordionItem) => React.ReactNode;
}

export default function FzAccordion({
  items,
  label,
  disabled,
  value,
  defaultValue = "",
  onValueChange,
  renderTitle,
  renderContent,
}: FzAccordionProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const current = value !== undefined ? value : internalValue;

  const handleValueChange = (next: string) => {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <Accordion.Root
      value={current}
      onValueChange={handleValueChange}
      className="fz-accordion"
      type="single"
      collapsible
      disabled={disabled}
      aria-label={label}
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.value}
          value={item.value}
          disabled={item.disabled}
          className="accordion-item"
        >
          <Accordion.Header className="accordion-heading">
            <Accordion.Trigger className="accordion-trigger">
              {renderTitle ? renderTitle(item) : item.title}
              <FzIcon name="plus" size={18} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            <div className="accordion-inner">
              {renderContent ? renderContent(item) : item.content}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
