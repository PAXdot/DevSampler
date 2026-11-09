/*
 * Adapted from mors-component-library (https://github.com/murad-sinatra/mors-component-library)
 * MIT License — Copyright (c) 2026 Murad
 */
import type { InputHTMLAttributes, Ref } from 'react';
import { cx } from './cx';
import { describedBy, Field, useFieldControl, type FieldShellProps } from './field';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    FieldShellProps {
  ref?: Ref<HTMLInputElement>;
}

export function TextField({
  label,
  description,
  error,
  size = 'md',
  block = true,
  className,
  id,
  required,
  disabled,
  onChange,
  onInvalid,
  'aria-describedby': ariaDescribedBy,
  ...rest
}: TextFieldProps) {
  const { ids, validity } = useFieldControl(id, required, error);
  return (
    <Field
      ids={ids}
      label={label}
      description={description}
      error={validity.error}
      required={required}
      size={size}
      block={block}
    >
      <div className={cx('mors-input-shell', disabled && 'mors-is-disabled', className)}>
        <input
          id={ids.id}
          className="mors-input"
          disabled={disabled}
          required={required}
          aria-invalid={validity.error ? true : undefined}
          aria-describedby={describedBy(
            ids,
            Boolean(description),
            Boolean(validity.error),
            ariaDescribedBy,
          )}
          {...rest}
          onInvalid={(event) => {
            validity.onInvalid(event);
            onInvalid?.(event);
          }}
          onChange={(event) => {
            validity.reportValue(event.currentTarget.value);
            onChange?.(event);
          }}
        />
      </div>
    </Field>
  );
}
