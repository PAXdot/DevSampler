import type { ReactNode, SVGProps } from 'react';

export type IconComponent = (props: {
  size?: number;
  strokeWidth?: number;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height'>) => ReactNode;

function make(path: ReactNode, viewBox = '0 0 16 16'): IconComponent {
  return function Glyph({ size = 16, strokeWidth = 2.25, className, ...rest }) {
    return (
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...rest}
      >
        {path}
      </svg>
    );
  };
}

export const CrossIcon = make(<path d="M4 4l8 8M12 4l-8 8" />);
export const ChevronDownIcon = make(<path d="M4 6l4 4 4-4" />);
export const ChevronUpIcon = make(<path d="M12 10L8 6l-4 4" />);
