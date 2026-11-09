"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LqipImageProps {
  src: string | StaticImageData;
  placeholderSrc?: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  quality?: number;
}

function isStaticImageData(
  src: string | StaticImageData,
): src is StaticImageData {
  return typeof src === "object" && "src" in src;
}

export function LqipImage({
  src,
  placeholderSrc,
  alt,
  width,
  height,
  className,
  containerClassName,
  sizes,
  priority = false,
  fill = false,
  quality,
}: LqipImageProps) {
  const [loaded, setLoaded] = useState(false);

  const srcString = isStaticImageData(src) ? src.src : src;
  const hasAutoPlaceholder = !(placeholderSrc || isStaticImageData(src));
  const showPlaceholder = placeholderSrc || hasAutoPlaceholder;

  const placeholderImageSrc = hasAutoPlaceholder
    ? ({ height: 2, src: srcString, width: 2 } as {
        src: string;
        width: number;
        height: number;
      })
    : placeholderSrc;

  return (
    <div
      className={cn("relative overflow-hidden", containerClassName)}
      style={
        fill
          ? { height: "100%", position: "relative", width: "100%" }
          : width != null && height != null
            ? { height, width }
            : undefined
      }
      aria-busy={!loaded}
      role="img"
      aria-label={alt}
    >
      {showPlaceholder && placeholderImageSrc && (
        <Image
          src={placeholderImageSrc}
          alt=""
          aria-hidden={true}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out",
            loaded ? "opacity-0" : "opacity-100",
            "scale-[1.1] blur-[20px]",
          )}
          fill={true}
          sizes={sizes}
        />
      )}
      <Image
        src={src}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          fill ? "size-full" : undefined,
          className,
        )}
        onLoad={() => setLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        {...(fill
          ? { fill: true }
          : { height: height ?? 600, width: width ?? 800 })}
        {...(sizes !== undefined && { sizes })}
        {...(quality !== undefined && { quality })}
      />
    </div>
  );
}

export default LqipImage;
