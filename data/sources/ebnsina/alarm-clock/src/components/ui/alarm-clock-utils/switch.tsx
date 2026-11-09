import type { InputHTMLAttributes, ReactNode } from 'react';

interface SwitchProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'children'> {
	checked?: boolean;
	children?: ReactNode;
	className?: string;
	onCheckedChange?: (checked: boolean) => void;
}

export default function Switch({
	checked = false,
	children,
	className,
	onCheckedChange,
	onChange,
	...rest
}: SwitchProps) {
	return (
		<label className={['switch', className].filter(Boolean).join(' ')}>
			<input
				type="checkbox"
				role="switch"
				checked={checked}
				onChange={(e) => {
					onCheckedChange?.(e.target.checked);
					onChange?.(e);
				}}
				{...rest}
			/>
			<span className="track" aria-hidden="true" />
			{children && <span className="label">{children}</span>}
		</label>
	);
}
