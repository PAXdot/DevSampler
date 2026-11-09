"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export type BadgeTier = "free" | "pro" | "ultra";
export type BadgeSize = "sm" | "md" | "lg";

export interface TierBadgeProps extends Omit<HTMLMotionProps<"button">, "children"> {
  tier?: BadgeTier;
  label?: string;
  size?: BadgeSize;
  isActive?: boolean;
  className?: string;
}

interface TierThemeConfig {
  borderGradient: string;
  innerVignetteColor: string;
  centerMaskBg: string;
  curvedGlowGradient: string;
  highlightGlowGradient: string;
  textColor: string;
  textShadow?: string;
}

const TIER_CONFIGS: Record<BadgeTier, TierThemeConfig> = {
  free: {
    borderGradient: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
    innerVignetteColor: "#059669",
    centerMaskBg: "#0b1210",
    curvedGlowGradient: "radial-gradient(ellipse at bottom, #6ee7b7 0%, #10b981 45%, transparent 75%)",
    highlightGlowGradient: "radial-gradient(circle, #a7f3d0 0%, #34d399 50%, transparent 80%)",
    textColor: "#ecfdf5",
  },
  pro: {
    borderGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
    innerVignetteColor: "#1e58d8",
    centerMaskBg: "#111317",
    curvedGlowGradient: "radial-gradient(ellipse at bottom, #8ea7ff 0%, #5d7beb 45%, transparent 75%)",
    highlightGlowGradient: "radial-gradient(circle, #b8c7ff 0%, #7b96fa 50%, transparent 80%)",
    textColor: "#f1f3f5",
  },
  ultra: {
    borderGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)",
    innerVignetteColor: "#9333ea",
    centerMaskBg: "#130f1c",
    curvedGlowGradient: "radial-gradient(ellipse at bottom, #f472b6 0%, #c084fc 40%, #7c3aed 70%, transparent 85%)",
    highlightGlowGradient: "radial-gradient(circle, #fbcfe8 0%, #e879f9 45%, #a855f7 80%, transparent 90%)",
    textColor: "#faf5ff",
    textShadow: "0 0 16px rgba(236, 72, 153, 0.3)",
  },
};

const SIZE_CONFIGS: Record<BadgeSize, { buttonClass: string; textClass: string; curveW: string; curveH: string; highlightW: string; highlightH: string }> = {
  sm: {
    buttonClass: "w-24 h-12",
    textClass: "text-xl",
    curveW: "w-16",
    curveH: "h-8",
    highlightW: "w-10",
    highlightH: "h-4",
  },
  md: {
    buttonClass: "w-28 h-16",
    textClass: "text-[26px]",
    curveW: "w-20",
    curveH: "h-10",
    highlightW: "w-12",
    highlightH: "h-5",
  },
  lg: {
    buttonClass: "w-36 h-20",
    textClass: "text-3xl",
    curveW: "w-28",
    curveH: "h-14",
    highlightW: "w-16",
    highlightH: "h-7",
  },
};

export const TierBadge: React.FC<TierBadgeProps> = ({
  tier = "pro",
  label,
  size = "md",
  isActive = false,
  className = "",
  onClick,
  ...rest
}) => {
  const config = TIER_CONFIGS[tier];
  const sizeConfig = SIZE_CONFIGS[size];
  const displayLabel = label || (tier.charAt(0).toUpperCase() + tier.slice(1));

  return (
    <motion.button
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      style={{ background: config.borderGradient }}
      className={`group relative inline-flex items-center justify-center rounded-full p-[1.5px] cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/40 shadow-md shadow-black/50 ${sizeConfig.buttonClass} ${className}`}
      {...rest}
    >
      {/* Inner Container: Clips dark background with glowing inner vignettes */}
      <div className="relative w-full h-full rounded-full bg-[#0a0c10] overflow-hidden flex items-center justify-center z-10">
        {/* Inner Vignette / Ring Ambient Effect (confined inside the badge) */}
        <div
          className="absolute inset-0 pointer-events-none rounded-full transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 16px 4px ${config.innerVignetteColor}`,
          }}
        />

        {/* Center Dark Mask (Keeps background clean directly behind the typography) */}
        <div
          className="absolute inset-2 rounded-full pointer-events-none blur-[2px] transition-colors duration-300"
          style={{ backgroundColor: config.centerMaskBg }}
        />

        {/* Bottom Curved Animated Glow (Curves upward from bottom edge inside pill) */}
        <motion.div
          initial={{ y: 24, scaleY: 0.3, opacity: 0 }}
          animate={{ y: 0, scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 ${sizeConfig.curveW} ${sizeConfig.curveH} rounded-[100%] pointer-events-none`}
          style={{
            background: config.curvedGlowGradient,
            filter: "blur(4px)",
          }}
        />

        {/* Extra Bottom Inner Soft Highlight */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 0.95 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: "easeOut",
          }}
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${sizeConfig.highlightW} ${sizeConfig.highlightH} rounded-[100%] pointer-events-none`}
          style={{
            background: config.highlightGlowGradient,
            filter: "blur(2px)",
          }}
        />

        {/* Optional Active Ring Pulse Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeBadgeRing"
            className="absolute inset-0 rounded-full border border-white/40 pointer-events-none"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}

        {/* Typography */}
        <span
          className={`relative z-10 font-sans font-medium tracking-tight ${sizeConfig.textClass}`}
          style={{
            color: config.textColor,
            textShadow: config.textShadow || "0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {displayLabel}
        </span>
      </div>
    </motion.button>
  );
};

// Backward compatibility for existing imports
export const ProBadge = (props: React.ComponentProps<typeof TierBadge>) => (
  <TierBadge tier="pro" {...props} />
);

export const FreeBadge = (props: React.ComponentProps<typeof TierBadge>) => (
  <TierBadge tier="free" {...props} />
);

export const UltraBadge = (props: React.ComponentProps<typeof TierBadge>) => (
  <TierBadge tier="ultra" {...props} />
);

export default TierBadge;
