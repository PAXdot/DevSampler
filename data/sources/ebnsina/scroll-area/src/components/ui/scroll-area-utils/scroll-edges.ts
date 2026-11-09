/**
 * Measures how much of a scroll area is hidden past each edge and sets --scroll-start / --scroll-end
 * (0 to 1, easing in over the first 24px). global.css turns them into fades: data-fade="" (vertical) or
 * data-fade="x" (sideways) fades the content out (areas with no background of their own).
 *
 * Ported from the original Svelte 5 `Attachment<HTMLElement>` (src/lib/ui/scroll-edges.ts): the function
 * body is unchanged DOM logic, only the Svelte-specific `Attachment` type import was dropped since it is
 * meaningless outside Svelte - call this from a React useEffect with the scroll element and its cleanup.
 */
export function scrollEdges(el: HTMLElement): () => void {
	const update = () => {
		let before: number;
		let after: number;
		if (el.dataset.fade === 'x') {
			const max = el.scrollWidth - el.clientWidth;
			// Right to left, scrollLeft runs from 0 down to -max; left/right here are physical.
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
	// Size and content changes (a filtered list, a font loading) move the edges too.
	const resized = new ResizeObserver(update);
	resized.observe(el);
	for (const child of Array.from(el.children)) resized.observe(child);
	const changed = new MutationObserver(update);
	changed.observe(el, { childList: true, subtree: true });
	return () => {
		el.removeEventListener('scroll', update);
		resized.disconnect();
		changed.disconnect();
	};
}
