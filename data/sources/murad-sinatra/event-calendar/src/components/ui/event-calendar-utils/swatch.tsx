/*
 * Adapted from mors-component-library (https://github.com/murad-sinatra/mors-component-library)
 * MIT License — Copyright (c) 2026 Murad
 */
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';
import type { Size, Tone } from './types';
import { useControllableState } from './use-controllable-state';
import { describedBy, Field, useFieldIds } from './field';

export const SWATCH_TONES: readonly Tone[] = [
  'accent',
  'success',
  'warning',
  'danger',
  'info',
  'neutral',
];

const TONE_LABEL: Record<Tone, string> = {
  accent: 'Accent',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
  info: 'Info',
  neutral: 'Neutral',
};

export interface SwatchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  tone?: Tone;
  size?: Size;
  selected?: boolean;
  label?: string;
  onClick?: () => void;
}

export function Swatch({
  tone = 'neutral',
  size = 'md',
  selected = false,
  label,
  onClick,
  disabled,
  className,
  type = 'button',
  ...rest
}: SwatchProps) {
  const classNames = cx(
    'mors-swatch',
    `mors-swatch--${tone}`,
    size !== 'md' && `mors-swatch--${size}`,
    selected && 'mors-swatch--selected',
    className,
  );
  const name = label ?? TONE_LABEL[tone];

  if (!onClick) {
    return <span className={classNames} aria-hidden="true" />;
  }

  return (
    <button
      type={type}
      className={classNames}
      aria-label={name}
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    />
  );
}

export interface SwatchGroupProps {
  value?: Tone;
  defaultValue?: Tone;
  onChange?: (tone: Tone) => void;
  tones?: readonly Tone[];
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  size?: Size;
  block?: boolean;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  className?: string;
}

export function SwatchGroup({
  value,
  defaultValue = 'accent',
  onChange,
  tones = SWATCH_TONES,
  label,
  description,
  error,
  size = 'md',
  block = true,
  disabled = false,
  required = false,
  id,
  className,
}: SwatchGroupProps) {
  const ids = useFieldIds(id);
  const [selected, setSelected] = useControllableState(value, defaultValue, onChange);
  const swatchSize = size === 'lg' ? 'lg' : 'md';

  return (
    <Field
      ids={ids}
      label={label}
      description={description}
      error={error}
      required={required}
      size={size}
      labelElement="span"
      block={block}
      className={className}
    >
      <div
        id={ids.id}
        role="group"
        aria-labelledby={label ? ids.labelId : undefined}
        aria-describedby={describedBy(ids, Boolean(description), Boolean(error))}
        className="mors-swatch-group"
      >
        {tones.map((tone) => (
          <Swatch
            key={tone}
            tone={tone}
            size={swatchSize}
            selected={selected === tone}
            disabled={disabled}
            onClick={() => setSelected(tone)}
          />
        ))}
      </div>
    </Field>
  );
}
