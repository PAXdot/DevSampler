'use client';

import * as React from 'react';
import { announce } from '@/components/ui/calendar-utils/announce';

/**
 * Ported from the Sina UI Button (Svelte 5), by ebnsina — https://github.com/ebnsina/sinaui
 * (MIT). Used here only for the Calendar's previous/next month controls.
 */
export interface ButtonProps {
	/** link: looks like inline text link (for navigation that shouldn't look like a button). */
	variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
	size?: 'sm' | 'md' | 'lg';
	/** Swaps the label for a spinner at the same width; stays focusable but blocks activation. */
	loading?: boolean;
	/** Square button for a lone icon. Give it an aria-label. */
	square?: boolean;
	href?: string;
	className?: string;
	children?: React.ReactNode;
	[key: string]: unknown;
}

const cx = (...parts: Array<string | false | undefined>) => parts.filter(Boolean).join(' ');

export default function Button({
	variant = 'primary',
	size = 'md',
	loading = false,
	square = false,
	href,
	className,
	children,
	...rest
}: ButtonProps) {
	const elRef = React.useRef<HTMLElement | null>(null);

	// Someone who pressed it and is still on it hears that it's busy; the spinner alone is silent.
	React.useEffect(() => {
		if (loading && elRef.current === document.activeElement) announce('Loading');
	}, [loading]);

	const noop = () => {};

	if (href !== undefined) {
		return (
			<a
				ref={elRef as React.Ref<HTMLAnchorElement>}
				href={href}
				className={cx('btn', variant, size, square && 'square', className)}
				onTouchStart={noop}
				{...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{children}
			</a>
		);
	}

	const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
	return (
		<button
			ref={elRef as React.Ref<HTMLButtonElement>}
			type="button"
			className={cx('btn', variant, size, square && 'square', loading && 'loading', className)}
			aria-disabled={loading || undefined}
			{...buttonRest}
			onTouchStart={noop}
			onClick={(e) => (loading ? e.preventDefault() : buttonRest.onClick?.(e))}
			onKeyDown={(e) => {
				// Holding Enter repeats clicks natively: one press, one action (no double submit).
				if (e.key === 'Enter' && e.repeat) e.preventDefault();
				buttonRest.onKeyDown?.(e);
			}}
		>
			{/* Label stays in place (transparent) under the spinner: same width, same accessible name. */}
			<span className="label">{children}</span>
			{loading && <span className="spinner" aria-hidden="true" />}
		</button>
	);
}
