let region: HTMLElement | undefined;

export function announce(text: string, politeness: 'polite' | 'assertive' = 'polite') {
	if (!region?.isConnected) {
		region = document.createElement('div');
		region.style.cssText =
			'position:absolute;inline-size:1px;block-size:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
		document.body.append(region);
	}
	region.setAttribute('aria-live', politeness);
	region.textContent = '';
	setTimeout(() => region && (region.textContent = text), 50);
}

export const isApple = () =>
	typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform);
