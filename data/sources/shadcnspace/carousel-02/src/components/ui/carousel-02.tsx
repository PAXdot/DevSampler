"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://cdn.21st.dev/assets/localized/c1e7bf149d430fd5bd5aa6dd3aaebb771fbc95b3a7cd303851ed585fd838a7b9.webp",
  "https://cdn.21st.dev/assets/localized/fac14e3cb2b67d40c5f3a2a0e212d0c60c1fd0aff588e59bc80883e4aceb4eee.webp",
  "https://cdn.21st.dev/assets/localized/b49b413f935303df7e05362b3530028b05c913cc039b44e25e491f12f9ba0015.webp",
  "https://cdn.21st.dev/assets/localized/84c0ff283758085418b1cd942706a764ffa0bf5a06312b415fc441fec23d22d6.webp",
];

const CarouselCustomNavigation = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  return (
    <div className="relative w-full max-w-xs">
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
      </Carousel>

      {/* Floating Bottom Center Arrows */}
      <div className="mt-4 flex justify-center gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          className="h-10 w-10 rounded-full bg-background shadow-sm border-muted-foreground/20 hover:bg-background hover:scale-105 active:scale-95 transition-all disabled:opacity-40 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          className="h-10 w-10 rounded-full bg-background shadow-sm border-muted-foreground/20 hover:bg-background hover:scale-105 active:scale-95 transition-all disabled:opacity-40 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
};

export default CarouselCustomNavigation;
