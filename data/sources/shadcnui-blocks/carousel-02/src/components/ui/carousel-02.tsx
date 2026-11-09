import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://cdn.21st.dev/assets/localized/3c77fad2f6f2f5e0ebb813cc3be7d0c2db96abd34c74369af2c99b419d74144d.jpg",
  "https://cdn.21st.dev/assets/localized/a165fdc914ddf0b57dc37e4c31c95e80223b97bb998b52d1d2e6ec182e88d5f3.jpg",
  "https://cdn.21st.dev/assets/localized/d08a07a5b969e9142e7f46cbf24334f886ea42878c1af88c41b7c9e8973461a5.jpg",
  "https://cdn.21st.dev/assets/localized/04b2d284cb1922da3f0ffd5e041aeede6ff0b101c88e66c52acdec80f10f014b.jpg",
  "https://cdn.21st.dev/assets/localized/a3d8e4c5d84eb834d9469cdd019f8bf5a82bc9378eae4d0ea7d087e0cd439993.jpg",
];

export default function CarouselWithMultipleSlides() {
  return (
    <Carousel
      className="w-full max-w-sm"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="-ml-2">
        {images.map((image) => (
          <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3" key={image}>
            <div className="aspect-square p-1">
              <img
                alt="dddepth-248"
                className="size-full rounded-xl object-cover"
                src={image}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
