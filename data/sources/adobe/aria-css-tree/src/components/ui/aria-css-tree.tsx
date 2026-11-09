/*
Copyright Adobe. Licensed under the Apache License, Version 2.0. https://github.com/adobe/react-spectrum/blob/main/LICENSE
*/
'use client';
import "./aria-css-tree-utils/review-theme.css";

import {
  Button,
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
  type TreeItemContentProps,
  type TreeItemContentRenderProps,
  type TreeItemProps as AriaTreeItemProps,
  type TreeProps,
  TreeLoadMoreItem as AriaTreeLoadMoreItem,
  type TreeLoadMoreItemProps,
  TreeSection as AriaTreeSection,
  TreeHeader as AriaTreeHeader
} from 'react-aria-components/Tree';
import {ChevronRight, GripVertical} from 'lucide-react';
import {Checkbox} from "./aria-css-tree-utils/components-ui-Checkbox";
import {ProgressCircle} from "./aria-css-tree-utils/components-ui-ProgressCircle";
import "./aria-css-tree-utils/components-ui-Tree.css";

export function Tree<T>(props: TreeProps<T>) {
  return <AriaTree {...props} />;
}

export function TreeItemContent(
  props: Omit<TreeItemContentProps, 'children'> & {children?: React.ReactNode}
) {
  return (
    <AriaTreeItemContent>
      {({selectionBehavior, selectionMode, allowsDragging}: TreeItemContentRenderProps) => (
        <>
          {allowsDragging && (
            <Button slot="drag">
              <GripVertical size={16} />
            </Button>
          )}
          {selectionBehavior === 'toggle' && selectionMode !== 'none' && (
            <Checkbox slot="selection" />
          )}
          <Button slot="chevron">
            <ChevronRight />
          </Button>
          {props.children}
        </>
      )}
    </AriaTreeItemContent>
  );
}

export interface TreeItemProps extends Partial<AriaTreeItemProps> {
  title?: React.ReactNode;
}

export function TreeItem(props: TreeItemProps) {
  let textValue = typeof props.title === 'string' ? props.title : '';
  return (
    <AriaTreeItem textValue={textValue} {...props}>
      {props.title != null ? (
        <>
          <TreeItemContent>{props.title}</TreeItemContent>
          {props.children}
        </>
      ) : (
        props.children
      )}
    </AriaTreeItem>
  );
}

export function TreeLoadMoreItem(props: TreeLoadMoreItemProps) {
  return (
    <AriaTreeLoadMoreItem {...props}>
      <ProgressCircle isIndeterminate aria-label="Loading more..." />
    </AriaTreeLoadMoreItem>
  );
}

export function TreeSection(props: React.ComponentProps<typeof AriaTreeSection>) {
  return <AriaTreeSection {...props} />;
}

export function TreeHeader(props: React.ComponentProps<typeof AriaTreeHeader>) {
  return <AriaTreeHeader {...props} />;
}

export default Tree;
