"use client";
// beui.dev/components/motion/multi-select

import { MultiSelect } from "./multi-select-utils/context";

export {
  MultiSelect,
  type MultiSelectFilter,
  type MultiSelectProps,
} from "./multi-select-utils/context";
export {
  MultiSelectInput,
  type MultiSelectInputProps,
  MultiSelectTrigger,
  type MultiSelectTriggerProps,
  MultiSelectValue,
  type MultiSelectValueProps,
} from "./multi-select-utils/trigger";
export {
  MultiSelectContent,
  type MultiSelectContentProps,
} from "./multi-select-utils/content";
export {
  MultiSelectEmpty,
  type MultiSelectEmptyProps,
  MultiSelectGroup,
  type MultiSelectGroupProps,
  MultiSelectItem,
  type MultiSelectItemProps,
  MultiSelectLabel,
  type MultiSelectLabelProps,
  MultiSelectList,
  type MultiSelectListProps,
  MultiSelectSeparator,
  type MultiSelectSeparatorProps,
} from "./multi-select-utils/list";

export default MultiSelect;
