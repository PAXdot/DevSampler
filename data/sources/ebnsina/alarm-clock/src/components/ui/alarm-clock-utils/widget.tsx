import type { CSSProperties, ReactNode } from 'react';

interface WidgetProps {
	label: string;
	tone?: string;
	max?: string;
	children: ReactNode;
	className?: string;
}

export default function Widget({ label, tone, max = '36rem', children, className }: WidgetProps) {
	return (
		<section
			className={['widget', className].filter(Boolean).join(' ')}
			aria-label={label}
			style={{ '--tone': tone, maxInlineSize: max } as CSSProperties}
		>
			{children}
		</section>
	);
}
