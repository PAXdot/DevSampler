"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const images = [
  "https://cdn.21st.dev/assets/localized/c1e7bf149d430fd5bd5aa6dd3aaebb771fbc95b3a7cd303851ed585fd838a7b9.webp",
  "https://cdn.21st.dev/assets/localized/fac14e3cb2b67d40c5f3a2a0e212d0c60c1fd0aff588e59bc80883e4aceb4eee.webp",
  "https://cdn.21st.dev/assets/localized/b49b413f935303df7e05362b3530028b05c913cc039b44e25e491f12f9ba0015.webp",
  "https://cdn.21st.dev/assets/localized/84c0ff283758085418b1cd942706a764ffa0bf5a06312b415fc441fec23d22d6.webp",
];

const CarouselIndex = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-xs">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <figure>
                <img
                  src={src}
                  alt={`img ${index + 1}`}
                  width={800}
                  height={600}
                  className="aspect-4/3 rounded-lg object-cover"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">
        <small className="text-muted-foreground text-sm">
          {current} / {count}
        </small>
      </div>
    </div>
  );
};

export default CarouselIndex;
