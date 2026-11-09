'use client';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
type Size = 'sm' | 'md' | 'lg';

type ButtonOnlyProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorOnlyProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = {
	/** link: looks like inline text link (for navigation that shouldn't look like a button). */
	variant?: Variant;
	size?: Size;
	/** Swaps the label for a spinner at the same width; stays focusable but blocks activation. */
	loading?: boolean;
	/** Square button for a lone icon. Give it an aria-label. */
	square?: boolean;
	children?: ReactNode;
} & (ButtonOnlyProps | AnchorOnlyProps);

// Someone who pressed it and is still on it hears that it's busy; the spinner alone is silent.
// Shared with the Stopwatch's own aria-live region approach: one region, not several competing.
function announceLoading() {
	if (typeof document === 'undefined') return;
	let region = document.getElementById('sinaui-live-region');
	if (!region) {
		region = document.createElement('div');
		region.id = 'sinaui-live-region';
		region.style.cssText =
			'position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
		document.body.append(region);
	}
	region.setAttribute('aria-live', 'polite');
	region.textContent = '';
	setTimeout(() => {
		if (region) region.textContent = 'Loading';
	}, 50);
}

// iOS Safari only applies :active (the press feedback) when a touch listener exists.
function noop() {}

export default function Button({
	variant = 'primary',
	size = 'md',
	loading = false,
	square = false,
	className,
	children,
	...rest
}: ButtonProps) {
	const elRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (loading && elRef.current === document.activeElement) announceLoading();
	}, [loading]);

	if ('href' in rest && rest.href !== undefined) {
		const anchorRest = rest as AnchorOnlyProps;
		return (
			<a
				className={['btn', variant, size, square && 'square', className].filter(Boolean).join(' ')}
				onTouchStart={noop}
				{...anchorRest}
			>
				{children}
			</a>
		);
	}

	const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
	return (
		// aria-disabled, not disabled: a disabled button drops focus and screen readers lose their place.
		<button
			ref={elRef}
			type="button"
			className={['btn', variant, size, square && 'square', loading && 'loading', className]
				.filter(Boolean)
				.join(' ')}
			aria-disabled={loading || undefined}
			onTouchStart={noop}
			{...buttonRest}
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
