import type { SVGProps } from 'react';

type IconNode = readonly (readonly [string, Readonly<Record<string, string | number>>])[];

interface IconProps extends SVGProps<SVGSVGElement> {
	icon: IconNode;
	size?: number | string;
	label?: string;
	strokeWidth?: number;
}

export default function Icon({ icon, size = 18, label, strokeWidth, className, ...rest }: IconProps) {
	const camel = (k: string) => k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="none"
			role={label ? 'img' : undefined}
			aria-label={label}
			aria-hidden={label ? undefined : 'true'}
			focusable="false"
			className={['icon', className].filter(Boolean).join(' ')}
			{...rest}
		>
			{icon.map(([tag, attrs], i) => {
				const Tag = tag as any;
				const props: Record<string, unknown> = {};
				for (const [k, v] of Object.entries(attrs)) {
					if (k === 'key') continue;
					const key = camel(k);
					props[key] = key === 'strokeWidth' && strokeWidth ? strokeWidth : v;
				}
				return <Tag key={i} {...props} />;
			})}
		</svg>
	);
}
