/**
 * WaveSeparator — a zig-zag divider drawn by masking a solid color with a
 * repeating inline SVG. It inherits `currentColor`, so it follows your text
 * color in light and dark mode, and costs no image request.
 */

type Props = {
	/** Height of one zig, in px. The pattern scales with it. */
	size?: number;
	className?: string;
};

export default function WaveSeparator({ size = 8, className = '' }: Props) {
	const width = size * 2.75;
	const wave = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='8' viewBox='0 0 22 8'%3E%3Cpath d='M0 7 L11 1 L22 7' fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E")`;

	return (
		<hr
			aria-hidden="true"
			className={`w-full border-0 bg-current text-zinc-900/10 dark:text-zinc-100/10 ${className}`}
			style={{
				height: size,
				WebkitMask: `${wave} repeat-x center / ${width}px ${size}px`,
				mask: `${wave} repeat-x center / ${width}px ${size}px`,
			}}
		/>
	);
}
