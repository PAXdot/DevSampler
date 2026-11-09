import type { Variants } from 'motion/react';
import { type HTMLMotionProps, motion } from 'motion/react';
import type React from 'react';

type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children?: React.ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: React.RefObject<HTMLElement | null>;
  as?: T;
  customVariants?: Variants;
  once?: boolean;
} & HTMLMotionProps<T>;

export const TimelineAnimation = <T extends keyof HTMLElementTagNameMap = 'div'>({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = true,
  ...props
}: TimelineContentProps<T>) => {
  const MotionComponent = motion[as || 'div'] as React.ElementType;

  // Render at the final, resting state immediately so the component is fully
  // visible in a static screenshot (the scroll-triggered entrance animation
  // would otherwise be captured mid-flight, leaving cards blurred/hidden).
  return (
    <MotionComponent
      initial={false}
      animate={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
