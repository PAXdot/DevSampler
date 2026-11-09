import { Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero7 = ({
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  button = {
    text: "Discover all components",
    url: "https://www.shadcnblocks.com",
  },
  reviews = {
    count: 200,
    avatars: [
      {
        src: "https://cdn.21st.dev/assets/mirror/73/73c813328c18594c6611e7447cf0d3e3366abc0d3981fd35ff0410f6061e2ca3.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://cdn.21st.dev/assets/mirror/89/893615e6bca2860106c155950a3db99e49127e9c19e64a9ae621828a60988739.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://cdn.21st.dev/assets/mirror/95/95a8259ad5cc04bb0cd89b787a7de2395edf784650850bea6396e04f452dcb4b.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://cdn.21st.dev/assets/mirror/5c/5c94210b75776a33f741eba0075a15921bde963af8161bba1470e9ebaed6137a.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://cdn.21st.dev/assets/mirror/22/22ad291a3c4e3d708152bcaad90817523647a966daa76b18f017f66e58ca8cc4.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: Hero7Props) => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={button.url}>{button.text}</a>
        </Button>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-14 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from {reviews.count}+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero7 };
