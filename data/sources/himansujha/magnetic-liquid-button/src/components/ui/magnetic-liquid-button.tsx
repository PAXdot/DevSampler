"use client";

import React, { useRef, useState, useCallback, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagneticLiquidButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?:
    | "cosmic"
    | "aurora"
    | "sunset"
    | "electric"
    | "cyberpunk"
    | "glass";
  size?: "sm" | "md" | "lg" | "xl";
  magneticStrength?: number; // 0 (disabled) to 1 (max pull)
  glowRadius?: number;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles = {
  cosmic: {
    base: "text-white border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    glow: "from-violet-600 via-fuchsia-500 to-cyan-400",
    particle: "bg-fuchsia-400",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]",
  },
  aurora: {
    base: "text-white border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    glow: "from-emerald-500 via-teal-400 to-cyan-400",
    particle: "bg-emerald-300",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(52,211,153,0.45)]",
  },
  sunset: {
    base: "text-white border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.25)]",
    glow: "from-rose-500 via-orange-500 to-amber-400",
    particle: "bg-amber-300",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(251,146,60,0.45)]",
  },
  electric: {
    base: "text-white border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.25)]",
    glow: "from-blue-600 via-indigo-500 to-cyan-300",
    particle: "bg-cyan-300",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(96,165,250,0.45)]",
  },
  cyberpunk: {
    base: "text-white border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.25)]",
    glow: "from-pink-500 via-purple-600 to-yellow-400",
    particle: "bg-yellow-300",
    hoverShadow: "hover:shadow-[0_0_35px_rgba(236,72,153,0.45)]",
  },
  glass: {
    base: "text-neutral-100 border-white/20 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_15px_rgba(255,255,255,0.08)]",
    glow: "from-white/40 via-neutral-300/30 to-white/10",
    particle: "bg-white",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
  },
};

const sizeStyles = {
  sm: "h-9 px-4 text-xs tracking-wide gap-1.5 rounded-xl",
  md: "h-11 px-6 text-sm tracking-wide gap-2 rounded-2xl",
  lg: "h-13 px-8 text-base tracking-wide gap-2.5 rounded-2xl",
  xl: "h-16 px-10 text-lg tracking-wider gap-3 rounded-3xl",
};

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const MagneticLiquidButton = React.forwardRef<
  HTMLButtonElement,
  MagneticLiquidButtonProps
>(
  (
    {
      children,
      className,
      variant = "cosmic",
      size = "md",
      magneticStrength = 0.35,
      glowRadius = 160,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [ripples, setRipples] = useState<Ripple[]>([]);

    // Motion coordinates for magnetic physics
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics configuration for tactile responsiveness
    const springConfig = { damping: 18, stiffness: 220, mass: 0.1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Dynamic rotation tilt on hover
    const rotateX = useTransform(springY, [-40, 40], [8, -8]);
    const rotateY = useTransform(springX, [-40, 40], [-8, 8]);

    // Track relative pointer for spotlight gradient
    const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || isLoading) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * magneticStrength;
        const deltaY = (e.clientY - centerY) * magneticStrength;

        mouseX.set(deltaX);
        mouseY.set(deltaY);

        setSpotlightPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      },
      [disabled, isLoading, magneticStrength, mouseX, mouseY]
    );

    const handleMouseEnter = () => {
      if (disabled || isLoading) return;
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = { x, y, id: Date.now() };
      setRipples((prev) => [...prev.slice(-3), newRipple]);

      onClick?.(e);
    };

    const currentVariant = variantStyles[variant];

    return (
      <motion.button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        style={{
          x: springX,
          y: springY,
          rotateX,
          rotateY,
          transformPerspective: 800,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.95 }}
        disabled={disabled || isLoading}
        className={cn(
          "relative group inline-flex items-center justify-center font-medium select-none overflow-hidden",
          "border border-solid transition-all duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 focus-visible:ring-offset-black",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          "bg-neutral-950/90 dark:bg-black/90",
          sizeStyles[size],
          currentVariant.base,
          currentVariant.hoverShadow,
          className
        )}
        {...props}
      >
        {/* Ambient Gradient Background Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(${glowRadius}px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255,255,255,0.18), transparent 80%)`,
          }}
        />

        {/* Animated Rotating Border Ring Effect on Hover */}
        <div className="pointer-events-none absolute -inset-[150%] opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-sm">
          <div
            className={cn(
              "w-full h-full bg-gradient-to-r animate-[spin_4s_linear_infinite]",
              currentVariant.glow
            )}
          />
        </div>

        {/* Dark core overlay to isolate inner content */}
        <div className="absolute inset-[1px] rounded-[inherit] bg-neutral-950/95 dark:bg-black/95 -z-0" />

        {/* Interactive Dynamic Spot Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(120px circle at ${spotlightPos.x}px ${spotlightPos.y}px, var(--spotlight-color, rgba(255, 255, 255, 0.4)), transparent 70%)`,
          }}
        />

        {/* Dynamic Click Wave Ripples */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <AnimatePresence>
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                initial={{ scale: 0, opacity: 0.7 }}
                animate={{ scale: 4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                onAnimationComplete={() =>
                  setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
                }
                style={{
                  position: "absolute",
                  left: ripple.x,
                  top: ripple.y,
                  width: 30,
                  height: 30,
                  marginLeft: -15,
                  marginTop: -15,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Button Content */}
        <span className="relative z-20 flex items-center justify-center gap-2 transition-transform duration-200">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <svg
                className="animate-spin h-4 w-4 text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              <span>Loading...</span>
            </motion.div>
          ) : (
            <>
              {leftIcon && (
                <motion.span
                  className="inline-flex shrink-0 transition-transform duration-300 group-hover:scale-110"
                  animate={isHovered ? { x: -2 } : { x: 0 }}
                >
                  {leftIcon}
                </motion.span>
              )}

              <span className="font-semibold tracking-wide">{children}</span>

              {rightIcon && (
                <motion.span
                  className="inline-flex shrink-0 transition-transform duration-300 group-hover:scale-110"
                  animate={isHovered ? { x: 3 } : { x: 0 }}
                >
                  {rightIcon}
                </motion.span>
              )}
            </>
          )}
        </span>
      </motion.button>
    );
  }
);

MagneticLiquidButton.displayName = "MagneticLiquidButton";
