"use client";

import { memo } from "react";
import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type AnimationType = "text" | "word" | "character" | "line";

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  section: motion.section,
  span: motion.span,
} as const;

export type TextMotionTag = keyof typeof motionElements;
export type TextMotionBy = AnimationType;

export interface TextMotionProps
  extends Omit<HTMLMotionProps<"p">, "children" | "ref" | "variants"> {
  /** The text content to animate. */
  text: string;
  /** Class name applied to each segment. */
  segmentClassName?: string;
  /** Delay before the animation starts. */
  delay?: number;
  /** Duration used for stagger (`duration / segmentCount`). */
  duration?: number;
  /** Custom motion variants applied to each segment. */
  variants: Variants;
  /** Element type to render. */
  as?: TextMotionTag;
  /** How to split the text. Default: `"word"`. */
  by?: TextMotionBy;
  /** Start when the element enters the viewport. Default: false. */
  startOnView?: boolean;
  /** Animate only once when using viewport trigger. Default: true. */
  once?: boolean;
  /** Render an accessible screen-reader label. Default: true. */
  accessible?: boolean;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

function TextMotionBase({
  text,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = false,
  once = true,
  by = "word",
  accessible = true,
  ...props
}: TextMotionProps) {
  const MotionComponent = motionElements[Component] ?? motion.p;

  let segments: string[] = [];
  switch (by) {
    case "word":
      segments = text.split(/(\s+)/);
      break;
    case "character":
      segments = text.split("");
      break;
    case "line":
      segments = text.split("\n");
      break;
    case "text":
    default:
      segments = [text];
      break;
  }

  const segmentCount = Math.max(segments.length, 1);

  const finalVariants = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          opacity: { duration: 0.01, delay },
          delayChildren: delay,
          staggerChildren: duration / segmentCount,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          staggerChildren: duration / segmentCount,
          staggerDirection: -1,
        },
      },
    },
    item: variants,
  };

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container as Variants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        aria-label={accessible ? text : undefined}
        {...props}
      >
        {accessible ? <span className="sr-only">{text}</span> : null}
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              by === "character" && "",
              segmentClassName,
            )}
            aria-hidden={accessible ? true : undefined}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}

export const TextMotion = memo(TextMotionBase);
