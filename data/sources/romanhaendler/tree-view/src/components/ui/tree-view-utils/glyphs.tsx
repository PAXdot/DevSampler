import type { SVGProps } from "react";
import { forwardRef } from "react";

export interface GlyphProps extends Omit<SVGProps<SVGSVGElement>, "viewBox" | "children"> {
  size?: number;
}

export const CrossGlyph = forwardRef<SVGSVGElement, GlyphProps>(function CrossGlyph({ size = 9, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <path d="M1.6 1.6l6.8 6.8M8.4 1.6L1.6 8.4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
});

export const PlusGlyph = forwardRef<SVGSVGElement, GlyphProps>(function PlusGlyph({ size = 10, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <path d="M5 2v6M2 5h6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
});

export const MinusGlyph = forwardRef<SVGSVGElement, GlyphProps>(function MinusGlyph({ size = 10, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <path d="M2 5h6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
});

export const AngleGlyph = forwardRef<SVGSVGElement, GlyphProps>(function AngleGlyph({ size = 10, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <path d="M3.5 1.5 7 5l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

export const GripGlyph = forwardRef<SVGSVGElement, GlyphProps>(function GripGlyph({ size = 10, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <path d="M3.5 3v4M6.5 3v4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
});

export const GridGlyph = forwardRef<SVGSVGElement, GlyphProps>(function GridGlyph({ size = 10, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <path d="M3.7 1.5v7M6.3 1.5v7M1.5 3.7h7M1.5 6.3h7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
});

export const MeasureGlyph = forwardRef<SVGSVGElement, GlyphProps>(function MeasureGlyph({ size = 10, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <path d="M2 8L8 2M1 6.5v2.5h2.5M9 3.5V1H6.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});

export const CalendarGlyph = forwardRef<SVGSVGElement, GlyphProps & { range?: boolean }>(function CalendarGlyph({ size = 12, range = false, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <rect x="1" y="1.6" width="8" height="7.7" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d={range ? "M1 4.4h8M3.2.7v1.9M6.8.7v1.9M3.8 6.9h2.4" : "M1 4.4h8M3.2.7v1.9M6.8.7v1.9"} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
});

export const ClockGlyph = forwardRef<SVGSVGElement, GlyphProps>(function ClockGlyph({ size = 12, ...rest }, ref) {
  return (
    <svg ref={ref} viewBox="0 0 10 10" width={size} height={size} aria-hidden="true" {...rest}>
      <circle cx="5" cy="5" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 2.9v2.3l1.6 1" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
});
