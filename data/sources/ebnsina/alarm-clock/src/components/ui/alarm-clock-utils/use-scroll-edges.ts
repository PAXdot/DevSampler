import { useEffect, useRef } from 'react';

export function useScrollEdges<T extends HTMLElement>() {
	const ref = useRef<T | null>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const update = () => {
			let before: number;
			let after: number;
			if (el.dataset.fade === 'x') {
				const max = el.scrollWidth - el.clientWidth;
				const left = getComputedStyle(el).direction === 'rtl' ? max + el.scrollLeft : el.scrollLeft;
				before = left;
				after = max - left;
			} else {
				before = el.scrollTop;
				after = el.scrollHeight - el.clientHeight - el.scrollTop;
			}
			el.style.setProperty('--scroll-start', `${Math.min(1, Math.max(0, before / 24))}`);
			el.style.setProperty('--scroll-end', `${Math.min(1, Math.max(0, after / 24))}`);
		};
		update();
		el.addEventListener('scroll', update, { passive: true });
		const resized = new ResizeObserver(update);
		resized.observe(el);
		for (const child of Array.from(el.children)) resized.observe(child as Element);
		const changed = new MutationObserver(update);
		changed.observe(el, { childList: true, subtree: true });
		return () => {
			el.removeEventListener('scroll', update);
			resized.disconnect();
			changed.disconnect();
		};
	}, []);
	return ref;
}
