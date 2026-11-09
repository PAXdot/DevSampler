/*
Copyright Adobe. Licensed under the Apache License, Version 2.0. https://github.com/adobe/react-spectrum/blob/main/LICENSE
*/
'use client';
import "./aria-css-listbox-utils/review-theme.css";

import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxSection as AriaListBoxSection,
  ListBoxLoadMoreItem as AriaListBoxLoadMoreItem,
  Header,
  type ListBoxItemProps,
  type ListBoxLoadMoreItemProps,
  type ListBoxProps,
  type ListBoxSectionProps
} from 'react-aria-components/ListBox';
import {composeRenderProps} from 'react-aria-components/composeRenderProps';
import {Check} from 'lucide-react';
import {Text} from "./aria-css-listbox-utils/components-ui-Content";
import {ProgressCircle} from "./aria-css-listbox-utils/components-ui-ProgressCircle";
import "./aria-css-listbox-utils/components-ui-ListBox.css";

export function ListBox<T>({children, ...props}: ListBoxProps<T>) {
  return <AriaListBox {...props}>{children}</AriaListBox>;
}

export function ListBoxItem(props: ListBoxItemProps) {
  let textValue =
    props.textValue || (typeof props.children === 'string' ? props.children : undefined);
  return (
    <AriaListBoxItem {...props} textValue={textValue}>
      {composeRenderProps(props.children, children =>
        typeof children === 'string' ? <Text slot="label">{children}</Text> : children
      )}
    </AriaListBoxItem>
  );
}

export function ListBoxSection<T>(props: ListBoxSectionProps<T>) {
  return <AriaListBoxSection {...props} />;
}

export function ListBoxLoadMoreItem(props: ListBoxLoadMoreItemProps) {
  return (
    <AriaListBoxLoadMoreItem {...props}>
      <ProgressCircle isIndeterminate aria-label="Loading more..." />
    </AriaListBoxLoadMoreItem>
  );
}

export function DropdownListBox<T>(props: ListBoxProps<T>) {
  return <AriaListBox {...props} className="dropdown-listbox" />;
}

export function DropdownItem(props: ListBoxItemProps) {
  let textValue =
    props.textValue || (typeof props.children === 'string' ? props.children : undefined);
  return (
    <ListBoxItem {...props} textValue={textValue} className="dropdown-item">
      {composeRenderProps(props.children, (children, {isSelected}) => (
        <>
          {isSelected && <Check />}
          {typeof children === 'string' ? <Text slot="label">{children}</Text> : children}
        </>
      ))}
    </ListBoxItem>
  );
}

export {Text, Header};

export default ListBox;
