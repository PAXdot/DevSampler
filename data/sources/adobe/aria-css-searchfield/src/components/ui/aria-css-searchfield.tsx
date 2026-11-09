/*
Copyright Adobe. Licensed under the Apache License, Version 2.0. https://github.com/adobe/react-spectrum/blob/main/LICENSE
*/
'use client';
import "./aria-css-searchfield-utils/review-theme.css";

import {
  Button,
  Input,
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
  type ValidationResult
} from 'react-aria-components/SearchField';
import {Label, FieldError, Description} from "./aria-css-searchfield-utils/components-ui-Form";
import {Search, X} from 'lucide-react';
import "./aria-css-searchfield-utils/components-ui-SearchField.css";

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField {...props}>
      {label && <Label>{label}</Label>}
      <Search size={18} />
      <Input placeholder={placeholder} className="react-aria-Input inset" />
      <Button className="clear-button">
        <X size={14} />
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}

export default SearchField;
