import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'children'> {
	label: string;
	value?: string | number;
	hint?: string;
	error?: string;
	start?: ReactNode;
	end?: ReactNode;
	className?: string;
}

export default function Input({
	label,
	value,
	hint,
	error,
	start,
	end,
	id,
	className,
	'aria-describedby': describedbyExtra,
	...rest
}: InputProps) {
	const uid = useId();
	const inputId = id ?? uid;
	const describedby =
		[describedbyExtra, hint && `${inputId}-hint`, error && `${inputId}-error`]
			.filter(Boolean)
			.join(' ') || undefined;

	return (
		<div className={['field', className].filter(Boolean).join(' ')}>
			<label htmlFor={inputId}>{label}</label>
			<div
				className="control"
				onClick={(e) => {
					const target = e.target as HTMLElement;
					if (target === e.currentTarget || target.closest('.addon')) {
						(e.currentTarget.querySelector('input') as HTMLInputElement | null)?.focus();
					}
				}}
			>
				{start && <span className="addon start">{start}</span>}
				<input
					id={inputId}
					value={value}
					aria-invalid={error ? true : undefined}
					aria-describedby={describedby}
					{...rest}
				/>
				{end && <span className="addon end">{end}</span>}
			</div>
			{hint && (
				<p id={`${inputId}-hint`} className="hint">
					{hint}
				</p>
			)}
			{error && (
				<p id={`${inputId}-error`} className="error">
					{error}
				</p>
			)}
		</div>
	);
}
