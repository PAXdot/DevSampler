import type { CSSProperties, ReactNode } from 'react';

export interface WidgetProps {
	/** Names the widget for screen readers ("Study timer"). */
	label: string;
	/** Its color: text, lit parts and tinted buttons; plain text color by default. */
	tone?: string;
	/** The widest it grows ("36rem"); it fills the space it's given up to this. */
	max?: string;
	children: ReactNode;
	className?: string;
}

// A card on the system's surface, rounded well past a regular card as iOS widgets are.
// A size container: what's inside lays itself out for the room it has (phone, tablet, desktop).
export default function Widget({ label, tone, max = '36rem', children, className }: WidgetProps) {
	const style = {
		'--tone': tone,
		maxInlineSize: max
	} as CSSProperties;

	return (
		<section className={['widget', className].filter(Boolean).join(' ')} aria-label={label} style={style}>
			{children}
		</section>
	);
}
