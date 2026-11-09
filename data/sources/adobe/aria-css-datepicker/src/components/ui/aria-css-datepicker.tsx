/*
Copyright Adobe. Licensed under the Apache License, Version 2.0. https://github.com/adobe/react-spectrum/blob/main/LICENSE
*/
'use client';
import "./aria-css-datepicker-utils/review-theme.css";

import {
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  Group,
  type ValidationResult
} from 'react-aria-components/DatePicker';
import {DateInput, DateSegment} from "./aria-css-datepicker-utils/components-ui-DateField";
import {Label, FieldError, Description} from "./aria-css-datepicker-utils/components-ui-Form";
import {FieldButton} from "./aria-css-datepicker-utils/components-ui-Form";
import {Calendar} from "./aria-css-datepicker-utils/components-ui-Calendar";
import {Popover} from "./aria-css-datepicker-utils/components-ui-Popover";
import {ChevronDown} from 'lucide-react';
import "./aria-css-datepicker-utils/components-ui-DatePicker.css";

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker {...props}>
      <Label>{label}</Label>
      <Group>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <FieldButton>
          <ChevronDown />
        </FieldButton>
      </Group>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover hideArrow>
        <Calendar />
      </Popover>
    </AriaDatePicker>
  );
}

export default DatePicker;
