"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://cdn.21st.dev/assets/mirror/04/04d19916c501f0a03bc77597e1820dcc23a023eb10bc27b78e2bcd5107e45dfe.jpg",
  "https://cdn.21st.dev/assets/mirror/f3/f306b045bdf64fa9ad0147548397cdf9900282a08b86bd38271941f36bdbbacd.jpg",
  "https://cdn.21st.dev/assets/mirror/12/12872a31b43bb68a55465d8d5a88b8f6d36e611f52a208eadaa05107b20c21d2.jpg",
];

export default function CarouselComponent() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{ loop: true }}
      plugins={[autoplay.current]}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <figure>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={800}
                height={600}
                className="aspect-4/3 rounded-lg object-cover"
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
