import { createElement, type SVGProps } from "react";

/** Any icon from @hugeicons/core-free-icons: an array of [tag, attrs] pairs. */
export type IconSvgElement = readonly (readonly [
	string,
	Readonly<Record<string, string | number>>
])[];

interface IconProps extends SVGProps<SVGSVGElement> {
	/** Any icon from @hugeicons/core-free-icons. */
	icon: IconSvgElement;
	size?: number | string;
	/** Accessible name. Without it the icon is decorative and hidden from screen readers. */
	label?: string;
	/** Overrides the icon's stroke width (Hugeicons default 1.5). */
	strokeWidth?: number;
}

export default function Icon({ icon, size = 18, label, strokeWidth, ...rest }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="none"
			role={label ? "img" : undefined}
			aria-label={label}
			aria-hidden={label ? undefined : "true"}
			focusable="false"
			{...rest}
		>
			{icon.map(([tag, attrs], i) => {
				const { key: _key, strokeWidth: baseStrokeWidth, ...nodeAttrs } = attrs as Record<
					string,
					unknown
				>;
				return createElement(tag, {
					key: i,
					...nodeAttrs,
					...(baseStrokeWidth !== undefined
						? { strokeWidth: strokeWidth ?? (baseStrokeWidth as number) }
						: {})
				});
			})}
		</svg>
	);
}
