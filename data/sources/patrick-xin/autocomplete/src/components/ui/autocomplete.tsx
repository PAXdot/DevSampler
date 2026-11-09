"use client";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import type { VariantProps } from "class-variance-authority";
import { ChevronDown, X } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/autocomplete-utils/button";
import {
  inputBaseVariants,
  inputVariants,
} from "@/components/ui/autocomplete-utils/input";

type ArrowProps = React.ComponentProps<"svg"> & {
  variant?: "tooltip" | "popover";
};

function ArrowSvg({ className, variant = "popover", ...props }: ArrowProps) {
  return (
    <svg
      className={cn("rotate-0", className)}
      fill="none"
      height="10"
      viewBox="0 0 20 10"
      width="20"
      {...props}
      data-slot="arrow"
    >
      <path
        className={cn(
          variant === "popover" ? "fill-popover" : "fill-accent",
          className,
        )}
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
      />
      <path
        className="fill-border dark:fill-none"
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
      />
      <path
        className="fill-none dark:fill-border"
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
      />
    </svg>
  );
}

const Autocomplete = BaseAutocomplete.Root;

function AutocompleteValue({
  children,
  ...props
}: BaseAutocomplete.Value.Props) {
  return (
    <BaseAutocomplete.Value data-slot="autocomplete-value" {...props}>
      {children}
    </BaseAutocomplete.Value>
  );
}

function AutocompleteIcon({
  className,
  ...props
}: BaseAutocomplete.Icon.Props) {
  return (
    <BaseAutocomplete.Icon
      className={cn(
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        className,
      )}
      data-slot="autocomplete-icon"
      {...props}
    />
  );
}

function AutocompleteInput({
  className,
  variant = "default",
  inputSize = "default",
  ...props
}: BaseAutocomplete.Input.Props &
  VariantProps<typeof inputVariants> &
  VariantProps<typeof inputBaseVariants>) {
  return (
    <BaseAutocomplete.Input
      className={cn(
        inputVariants({ inputSize }),
        inputBaseVariants({ variant }),
        className,
      )}
      data-slot="autocomplete-input"
      {...props}
    />
  );
}

function AutocompleteClear({
  className,
  ...props
}: BaseAutocomplete.Clear.Props) {
  return (
    <BaseAutocomplete.Clear
      aria-label="Clear selection"
      className={cn(
        "outline-none pointer-coarse:after:absolute pointer-coarse:after:min-h-10 pointer-coarse:after:min-w-10",
        className,
      )}
      data-slot="autocomplete-clear"
      {...props}
    />
  );
}

function AutocompleteTrigger({
  className,
  ...props
}: BaseAutocomplete.Trigger.Props) {
  return (
    <BaseAutocomplete.Trigger
      className={cn(
        "outline-none pointer-coarse:after:absolute pointer-coarse:after:min-h-10 pointer-coarse:after:min-w-10",
        className,
      )}
      data-slot="autocomplete-trigger"
      {...props}
    />
  );
}

function AutocompleteList({
  className,
  ...props
}: BaseAutocomplete.List.Props) {
  return (
    <BaseAutocomplete.List
      className={cn(
        "outline-none py-1 data-empty:p-0",
        "min-h-0 overflow-y-auto scroll-py-2",
        className,
      )}
      data-slot="autocomplete-list"
      {...props}
    />
  );
}

function AutocompletePortal({
  className,
  ...props
}: BaseAutocomplete.Portal.Props) {
  return (
    <BaseAutocomplete.Portal
      className={className}
      data-slot="autocomplete-portal"
      {...props}
    />
  );
}

function AutocompleteBackdrop({
  className,
  ...props
}: BaseAutocomplete.Backdrop.Props) {
  return (
    <BaseAutocomplete.Backdrop
      className={className}
      data-slot="autocomplete-backdrop"
      {...props}
    />
  );
}

function AutocompletePositioner({
  className,
  ...props
}: BaseAutocomplete.Positioner.Props) {
  return (
    <BaseAutocomplete.Positioner
      className={cn("outline-none", className)}
      data-slot="autocomplete-positioner"
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  ...props
}: BaseAutocomplete.Popup.Props) {
  return (
    <BaseAutocomplete.Popup
      className={className}
      data-slot="autocomplete-popup"
      {...props}
    />
  );
}

function AutocompleteArrow({
  className,
  ...props
}: BaseAutocomplete.Arrow.Props) {
  return (
    <BaseAutocomplete.Arrow
      className={cn(
        "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
        className,
      )}
      data-slot="autocomplete-arrow"
      {...props}
    >
      <ArrowSvg />
    </BaseAutocomplete.Arrow>
  );
}

function AutocompleteStatus({
  className,
  ...props
}: BaseAutocomplete.Status.Props) {
  return (
    <BaseAutocomplete.Status
      className={cn(
        "p-3 text-sm text-center text-muted-foreground flex gap-2 items-center empty:m-0 empty:p-0",
        className,
      )}
      data-slot="autocomplete-status"
      {...props}
    />
  );
}

function AutocompleteEmpty({
  className,
  ...props
}: BaseAutocomplete.Empty.Props) {
  return (
    <BaseAutocomplete.Empty
      className={cn(
        "p-3 text-sm text-center text-muted-foreground empty:m-0 empty:p-0",
        className,
      )}
      data-slot="autocomplete-empty"
      {...props}
    />
  );
}

function AutocompleteCollection(props: BaseAutocomplete.Collection.Props) {
  return (
    <BaseAutocomplete.Collection
      data-slot="autocomplete-collection"
      {...props}
    />
  );
}

function AutocompleteRow({ className, ...props }: BaseAutocomplete.Row.Props) {
  return (
    <BaseAutocomplete.Row
      className={className}
      data-slot="autocomplete-row"
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  ...props
}: BaseAutocomplete.Item.Props) {
  return (
    <BaseAutocomplete.Item
      className={cn(
        "flex items-center gap-2 py-1.5 text-sm pl-3.5 pr-8",
        "select-none cursor-default outline-none",
        "highlight-on-active",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      data-slot="autocomplete-item"
      {...props}
    />
  );
}

function AutocompleteGroup({
  className,
  ...props
}: BaseAutocomplete.Group.Props) {
  return (
    <BaseAutocomplete.Group
      className={className}
      data-slot="autocomplete-group"
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: BaseAutocomplete.GroupLabel.Props) {
  return (
    <BaseAutocomplete.GroupLabel
      className={cn(
        "px-3.5 py-1.5 text-xs text-muted-foreground font-medium select-none",
        className,
      )}
      data-slot="autocomplete-group-label"
      {...props}
    />
  );
}

function AutocompleteSeparator({
  className,
  ...props
}: BaseAutocomplete.Separator.Props) {
  return (
    <BaseAutocomplete.Separator
      className={cn("bg-border pointer-events-none my-1 h-px", className)}
      data-slot="autocomplete-separator"
      {...props}
    />
  );
}

function AutocompleteInputGroupContent({
  className,
  showTrigger = false,
  showClear = false,
  variant = "default",
  inputSize = "default",
  inputClassName,
  addonIcon,
  ariaInvalid,
  embedded,
  ...props
}: BaseAutocomplete.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
  variant?: VariantProps<typeof inputBaseVariants>["variant"];
  inputSize?: VariantProps<typeof inputBaseVariants>["inputSize"];
  inputClassName?: string;
  addonIcon?: React.ReactNode;
  embedded?: boolean;
  ariaInvalid?: boolean;
}) {
  const paddingClass =
    showTrigger && showClear
      ? "pr-14"
      : showTrigger || showClear
        ? "pr-8"
        : "pr-3";

  return (
    <BaseAutocomplete.InputGroup
      aria-invalid={ariaInvalid}
      className={cn(
        "relative w-full inline-flex gap-1 items-center cursor-text",
        !embedded && inputBaseVariants({ variant, inputSize }),
        !embedded &&
          "focus-within:outline focus-within:outline-ring focus-within:ring-4 focus-within:ring-ring/10",
        "has-[[data-slot=combobox-clear]]:[&_[data-slot=combobox-input]]:pr-8",
        "has-[[data-slot=combobox-trigger]]:[&_[data-slot=combobox-input]]:pr-8",
        "has-[[data-slot=combobox-clear]]:has-[[data-slot=combobox-trigger]]:[&_[data-slot=combobox-input]]:pr-14",
        className,
      )}
      data-slot="autocomplete-input-group"
    >
      {addonIcon && (
        <BaseAutocomplete.Icon
          className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground absolute left-1 size-6 flex justify-center items-center"
          data-slot="autocomplete-icon"
        >
          {addonIcon}
        </BaseAutocomplete.Icon>
      )}
      <BaseAutocomplete.Input
        className={cn(
          inputVariants({ inputSize }),
          addonIcon && "pl-7.5",
          paddingClass,
          inputClassName,
        )}
        data-slot="autocomplete-input"
        {...props}
      />
      <div className="absolute right-1.5 top-0 h-full inline-flex items-center">
        {showClear && (
          <BaseAutocomplete.Clear
            aria-label="Clear selection"
            data-slot="autocomplete-clear"
            render={
              <Button
                className="[&_svg]:text-muted-foreground hover:[&_svg]:text-foreground"
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <X />
          </BaseAutocomplete.Clear>
        )}
        {showTrigger && (
          <BaseAutocomplete.Trigger
            data-slot="autocomplete-trigger"
            render={
              <Button
                className="[&_svg]:text-muted-foreground data-popup-open:[&_svg]:text-foreground hover:[&_svg]:text-foreground"
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <BaseAutocomplete.Icon data-slot="autocomplete-icon">
              <ChevronDown className="size-4" />
            </BaseAutocomplete.Icon>
          </BaseAutocomplete.Trigger>
        )}
      </div>
    </BaseAutocomplete.InputGroup>
  );
}

function AutocompleteContent({
  className,
  children,
  sideOffset = 6,
  align = "start",
  side = "bottom",
  alignOffset = 0,
  matchAnchorWidth = true,
  positionerAnchor,
  ...props
}: BaseAutocomplete.Popup.Props &
  Pick<
    BaseAutocomplete.Positioner.Props,
    "side" | "sideOffset" | "align" | "alignOffset"
  > & {
    matchAnchorWidth?: boolean;
    positionerAnchor?: React.RefObject<HTMLDivElement | null>;
  }) {
  return (
    <BaseAutocomplete.Portal data-slot="autocomplete-portal">
      <BaseAutocomplete.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={positionerAnchor}
        data-slot="autocomplete-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <BaseAutocomplete.Popup
          className={cn(
            "bg-popover text-popover-foreground rounded-md shadow-md",
            "flex flex-col overflow-hidden",
            "max-w-(--available-width) max-h-[min(23rem,var(--available-height))]",
            "overlay-outline",
            matchAnchorWidth && "w-(--anchor-width)",
            className,
          )}
          data-slot="autocomplete-content"
          {...props}
        >
          {children}
        </BaseAutocomplete.Popup>
      </BaseAutocomplete.Positioner>
    </BaseAutocomplete.Portal>
  );
}

const useAutocompleteFilter = BaseAutocomplete.useFilter;

export {
  Autocomplete,
  AutocompleteValue,
  AutocompleteIcon,
  AutocompleteInput,
  AutocompleteClear,
  AutocompleteTrigger,
  AutocompleteList,
  AutocompletePortal,
  AutocompleteBackdrop,
  AutocompletePositioner,
  AutocompletePopup,
  AutocompleteArrow,
  AutocompleteEmpty,
  AutocompleteGroupLabel,
  AutocompleteItem,
  AutocompleteSeparator,
  AutocompleteGroup,
  AutocompleteRow,
  AutocompleteStatus,
  AutocompleteCollection,
  useAutocompleteFilter,
  // Composite components
  AutocompleteInputGroupContent,
  AutocompleteContent,
};

export default Autocomplete;
