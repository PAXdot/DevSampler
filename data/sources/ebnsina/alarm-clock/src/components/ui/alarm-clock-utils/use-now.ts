import { useEffect, useState } from 'react';

export function useNow() {
	const [current, setCurrent] = useState(() => Date.now());
	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;
		const tick = () => {
			const now = Date.now();
			setCurrent(now);
			timer = setTimeout(tick, 1000 - (now % 1000));
		};
		tick();
		return () => clearTimeout(timer);
	}, []);
	return current;
}
