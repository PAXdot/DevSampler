import { useEffect, useRef } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { reduced } from './motion';

interface WheelPickerProps<T> {
	label: string;
	items: { value: T; label: string }[];
	value: T;
	unit?: string;
	spoken?: (value: T) => string;
	className?: string;
	onValueChange: (value: T) => void;
}

export default function WheelPicker<T>({
	label,
	items,
	value,
	unit,
	spoken,
	className,
	onValueChange
}: WheelPickerProps<T>) {
	const wheelRef = useRef<HTMLDivElement | null>(null);
	const ROW = 36;
	const index = Math.max(0, items.findIndex((i) => i.value === value));
	const settling = useRef(false);
	const heading = useRef<number | undefined>(undefined);
	const ready = useRef(false);
	const frame = useRef(0);

	function goTo(i: number, smooth = true) {
		const wheel = wheelRef.current;
		if (!wheel) return;
		const to = Math.max(0, Math.min(items.length - 1, i));
		heading.current = to;
		const reduce = reduced();
		wheel.scrollTo({ top: to * ROW, behavior: smooth && !reduce ? 'smooth' : 'instant' });
	}

	useEffect(() => {
		const wheel = wheelRef.current;
		if (!wheel) return;
		const seen = new ResizeObserver(() => {
			if (ready.current || !wheel.clientHeight) return;
			goTo(index, false);
			ready.current = true;
		});
		seen.observe(wheel);
		return () => seen.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const wheel = wheelRef.current;
		if (!wheel) return;
		if (ready.current && !settling.current && Math.round(wheel.scrollTop / ROW) !== index) goTo(index);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	function onScroll() {
		const wheel = wheelRef.current;
		if (!ready.current || !wheel) return;
		cancelAnimationFrame(frame.current);
		frame.current = requestAnimationFrame(() => {
			const i = Math.max(0, Math.min(items.length - 1, Math.round(wheel.scrollTop / ROW)));
			if (i === heading.current) heading.current = undefined;
			if (items[i].value !== value) {
				settling.current = true;
				onValueChange(items[i].value);
				queueMicrotask(() => (settling.current = false));
			}
		});
	}

	function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
		const by: Record<string, number> = { ArrowUp: -1, ArrowDown: 1, PageUp: -5, PageDown: 5 };
		if (e.key === 'Home' || e.key === 'End') {
			e.preventDefault();
			return goTo(e.key === 'Home' ? 0 : items.length - 1);
		}
		if (by[e.key] === undefined) return;
		e.preventDefault();
		goTo((heading.current ?? index) + by[e.key]);
	}

	return (
		<div className={['picker', className].filter(Boolean).join(' ')} style={{ '--row': `${ROW}px` } as CSSProperties}>
			<div
				ref={wheelRef}
				className="wheel"
				role="spinbutton"
				tabIndex={0}
				aria-label={label}
				aria-valuenow={index}
				aria-valuemin={0}
				aria-valuemax={items.length - 1}
				aria-valuetext={spoken ? spoken(value) : items[index]?.label}
				onScroll={onScroll}
				onKeyDown={onKeyDown}
			>
				{items.map((item, i) => (
					<div
						key={i}
						className={['row', i === index && 'chosen'].filter(Boolean).join(' ')}
						aria-hidden="true"
						onClick={() => goTo(i)}
					>
						{item.label}
					</div>
				))}
			</div>
			{unit && (
				<span className="unit" aria-hidden="true">
					{unit}
				</span>
			)}
		</div>
	);
}
