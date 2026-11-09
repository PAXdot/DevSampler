"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "motion/react";
import useMeasure from "react-use-measure";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function MarqueeEffect({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = React.useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className={cn("flex", { "w-max": direction !== "vertical" })}
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const images = [
  "https://cdn.21st.dev/assets/mirror/0a/0a86e3d7e5664a610ca31e1ab9a88900c59223e01ad18f6ee44ea7b412124eba.jpg",
  "https://cdn.21st.dev/assets/mirror/ca/ca61ee399438d7d52581b9b971bd0e2b331eb63dd6b69038743dcda1d8eb82ae.jpg",
  "https://cdn.21st.dev/assets/mirror/65/652780a77c441453e646153371ebdde1d491daafe6a4b88067e663bc0ae1896a.jpg",
  "https://cdn.21st.dev/assets/mirror/90/9083906ff9a6992660d31b79f6927cf4aab4fb2fdb8bf385c48613c82206f604.jpg",
  "https://cdn.21st.dev/assets/mirror/72/7294a44142566687cd2b5bdb614b98c4d2abc76ff0c2111040ebcdaa20468529.jpg",
  "https://cdn.21st.dev/assets/mirror/9a/9ac96c54c30d1c6626b6cc16d01a03827f3bbb0db023a5e92dac8790574d77e7.jpg",
  "https://cdn.21st.dev/assets/mirror/72/7294a44142566687cd2b5bdb614b98c4d2abc76ff0c2111040ebcdaa20468529.jpg",
  "https://cdn.21st.dev/assets/mirror/64/640e987c46f40061be5603d660914b0432137e7d625232291f49ca82690cc324.jpg",
  "https://cdn.21st.dev/assets/mirror/79/79ff212dbe32f4338db52c93394ade22e34bbeee151e299c443604091d2c4201.jpg",
  "https://cdn.21st.dev/assets/mirror/b8/b8c25d2cfdec9acf210cecd0cf404ed93356cf8fca17400c575d386815a0476d.jpg",
];

export default function PromoSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center lg:grid-cols-2">
          <header className="relative z-10 mx-auto mb-8 max-w-xl text-center lg:mb-10 lg:text-start">
            <h3 className="mb-4 text-4xl font-bold text-balance md:text-5xl leading-tight">
              Summer styles are finally here
            </h3>
            <p className="text-muted-foreground text-balance lg:text-lg">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn&lsquo;t care if you live or
              die.
            </p>
            <Button size="lg" className="mt-6">
              Shop Collection
              <ArrowRightIcon />
            </Button>
          </header>
          <div className="absolute grid h-96 grid-cols-2 gap-4 overflow-hidden mask-t-from-80% mask-r-from-10% mask-b-from-80% mask-l-from-10% lg:static lg:h-150 lg:mask-r-from-70% lg:mask-l-from-70%">
            {[
              {
                reverse: false,
              },
              {
                reverse: true,
              },
            ].map((mq, i) => (
              <MarqueeEffect
                key={i}
                gap={12}
                direction="vertical"
                reverse={mq.reverse}
                speed={30}
                speedOnHover={1}
              >
                {images.slice(i * 3, (i + 1) * 3).map((image, i) => (
                  <figure key={i}>
                    <img
                      src={image}
                      className="aspect-square object-cover"
                      alt="..."
                      width={400}
                      height={400}
                    />
                  </figure>
                ))}
              </MarqueeEffect>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
