"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

interface CouponRevealButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  frontText?: string;
  backText?: string;
  couponCode?: string;
  onReveal?: () => void;
}

const CouponRevealButton = React.forwardRef<
  HTMLButtonElement,
  CouponRevealButtonProps
>(
  (
    {
      frontText = "Reveal Coupon Code",
      backText = "Here's your coupon code!",
      couponCode = "SHADSPACE20",
      onReveal,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLButtonElement>(null);
    React.useImperativeHandle(ref, () => containerRef.current!);

    const [width, setWidth] = React.useState(240);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPeeled, setIsPeeled] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    // Track width changes for precise pixel-based clip path matching
    React.useEffect(() => {
      if (!containerRef.current) return;
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setWidth(entry.contentRect.width);
        }
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }, []);

    // Calculate peel fold position in pixels
    // peelX represents the top-right corner of the unpeeled sticker cover
    const peelX = isPeeled ? -48 : isHovered ? width - 48 : width - 24;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isPeeled) {
        setIsPeeled(true);
        if (onReveal) onReveal();
      } else {
        navigator.clipboard.writeText(couponCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
      if (onClick) onClick(e);
    };

    return (
      <button
        ref={containerRef}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "group relative w-full max-w-70 h-12 rounded-lg font-medium text-sm overflow-visible select-none outline-none",
          "transition-all duration-200 active:scale-[0.98]",
          "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      >
        {/* Underneath Layer (Revealed Code / Action) */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center rounded-lg border-2 border-dashed transition-colors duration-300",
            copied
              ? "bg-teal-400/10 dark:bg-teal-400/20 border-teal-400 text-teal-400"
              : "bg-blue-500/10 dark:bg-blue-500/20 border-blue-500 text-blue-500",
            "shadow-[inset_0_2px_4px_rgba(59,130,246,0.06)]",
          )}
        >
          <div className="relative flex w-full items-center justify-center px-3 text-center font-semibold">
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-200",
                isPeeled || isHovered ? "opacity-100" : "opacity-0",
              )}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 stroke-[2.5]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <span
                    className={cn(
                      "font-mono px-2 py-0.5 rounded text-xs tracking-wider",
                      copied
                        ? "bg-teal-400/10 dark:bg-teal-400/20"
                        : "bg-blue-500/10 dark:bg-blue-500/20",
                    )}
                  >
                    {couponCode}
                  </span>
                  <Copy className="h-3.5 w-3.5 opacity-70 animate-pulse" />
                </>
              )}
            </div>
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
                isPeeled || isHovered ? "opacity-0" : "opacity-100",
              )}
            >
              {backText}
            </span>
          </div>
        </div>

        {/* Sticker Layer Cover */}
        <div
          aria-hidden="true"
          style={{
            clipPath: `polygon(0px 0px, ${peelX}px 0px, ${peelX - 24}px 100%, 0px 100%)`,
            transition: "clip-path 400ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          className={cn(
            "pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-blue-500 text-white font-semibold shadow-md",
            "motion-reduce:transition-none",
          )}
        >
          <span className="px-6 text-center truncate">{frontText}</span>
        </div>

        {/* Turning Corner Flap */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-1 origin-bottom-left",
            "motion-reduce:transition-none",
          )}
          style={{
            height: 56,
            width: 48,
            left: isPeeled ? -36 : peelX - 36,
            opacity: isPeeled ? 0 : 1,
            transform: `scale(${isPeeled ? 0.8 : isHovered ? 1.05 : 1})`,
            transition:
              "left 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease-out",
          }}
        >
          <svg
            width="48"
            height="56"
            viewBox="0 0 48 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[-3px_4px_5px_rgba(0,0,0,0.18)]"
          >
            <path d="M 36 4 L 12 52 L 28 56 Z" fill="url(#peelGradient-26)" />
            <defs>
              <linearGradient
                id="peelGradient-26"
                x1="36"
                y1="4"
                x2="18"
                y2="54"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </button>
    );
  },
);

CouponRevealButton.displayName = "CouponRevealButton";

export { CouponRevealButton, type CouponRevealButtonProps };

const CouponRevealButtonDemo = () => {
  return (
    <CouponRevealButton
      frontText="Reveal Coupon Code"
      backText="Here's your coupon code!"
      couponCode="SHADSPACE20"
      className="cursor-pointer"
    />
  );
};

export default CouponRevealButtonDemo;
