/*
Copyright Adobe. Licensed under the Apache License, Version 2.0. https://github.com/adobe/react-spectrum/blob/main/LICENSE
*/
'use client';
import "./aria-css-switch-utils/review-theme.css";

import {
  SwitchField,
  SwitchButton,
  type SwitchFieldProps,
  type ValidationResult
} from 'react-aria-components/Switch';
import "./aria-css-switch-utils/components-ui-Switch.css";
import {Description, FieldError} from "./aria-css-switch-utils/components-ui-Form";
import type {ReactNode} from 'react';

export interface SwitchProps extends Omit<SwitchFieldProps, 'children'> {
  children: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function Switch({children, description, errorMessage, ...props}: SwitchProps) {
  return (
    <SwitchField {...props}>
      <SwitchButton>
        {({isSelected, isDisabled}) => (
          <>
            <div className="track indicator">
              <div
                data-disabled={isDisabled || undefined}
                className={isSelected ? 'handle' : 'handle indicator'}
              />
            </div>
            {children}
          </>
        )}
      </SwitchButton>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </SwitchField>
  );
}

export default Switch;
