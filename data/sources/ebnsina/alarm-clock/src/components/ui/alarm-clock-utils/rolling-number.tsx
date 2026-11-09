import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

interface RollingNumberProps {
	value: number | string;
	format?: Intl.NumberFormatOptions;
	locales?: Intl.LocalesArgument;
	className?: string;
}

export default function RollingNumber({ value, format, locales, className }: RollingNumberProps) {
	const text = useMemo(
		() => (typeof value === 'string' ? value : new Intl.NumberFormat(locales, format).format(value)),
		[value, locales, format]
	);
	const chars = useMemo(() => {
		const all = [...text];
		return all.map((c, i) => ({ c, key: all.length - i, digit: /[0-9]/.test(c) ? +c : -1 }));
	}, [text]);

	const [ready, setReady] = useState(false);
	useEffect(() => setReady(true), []);

	const [roll, setRoll] = useState(600);
	const changedAt = useRef(-Infinity);
	useLayoutEffect(() => {
		const now = performance.now();
		const gap = now - changedAt.current;
		setRoll(gap < 120 ? 0 : Math.min(600, Math.round(gap * 0.8)));
		changedAt.current = now;
	}, [text]);

	return (
		<span
			className={['rolling', ready && 'ready', className].filter(Boolean).join(' ')}
			style={{ '--roll': `${roll}ms` } as CSSProperties}
		>
			<span className="sr-only">{text}</span>
			<span className="chars" aria-hidden="true">
				{chars.map(({ c, key, digit }) =>
					digit >= 0 ? (
						<span className="digit" data-c={c} key={key}>
							<span className="strip" style={{ '--d': digit } as CSSProperties} />
						</span>
					) : (
						<span data-c={c} key={key} />
					)
				)}
			</span>
		</span>
	);
}
