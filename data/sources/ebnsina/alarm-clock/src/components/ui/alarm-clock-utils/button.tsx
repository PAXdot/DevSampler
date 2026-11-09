import { useEffect, useRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { announce } from './announce';

type CommonProps = {
	variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
	size?: 'sm' | 'md' | 'lg';
	loading?: boolean;
	square?: boolean;
	className?: string;
	children?: ReactNode;
};

type ButtonProps = CommonProps &
	(
		| (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
		| (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
	);

export default function Button({
	variant = 'primary',
	size = 'md',
	loading = false,
	square = false,
	className,
	children,
	...rest
}: ButtonProps) {
	const elRef = useRef<HTMLElement | null>(null);
	useEffect(() => {
		if (loading && elRef.current === document.activeElement) announce('Loading');
	}, [loading]);

	const cls = ['btn', variant, size, square && 'square', className].filter(Boolean).join(' ');

	if ((rest as { href?: string }).href !== undefined) {
		const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
		return (
			<a ref={elRef as never} className={cls} {...anchorRest}>
				{children}
			</a>
		);
	}

	const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
	return (
		<button
			ref={elRef as never}
			type="button"
			className={[cls, loading && 'loading'].filter(Boolean).join(' ')}
			aria-disabled={loading || undefined}
			{...buttonRest}
			onClick={(e) => (loading ? e.preventDefault() : buttonRest.onClick?.(e))}
			onKeyDown={(e) => {
				if (e.key === 'Enter' && e.repeat) e.preventDefault();
				buttonRest.onKeyDown?.(e);
			}}
		>
			<span className="label">{children}</span>
			{loading && <span className="spinner" aria-hidden="true" />}
		</button>
	);
}
