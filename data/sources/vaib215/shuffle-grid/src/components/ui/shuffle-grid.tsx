"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-foreground">
          Let's change it up a bit
        </h3>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className={cn(
          "bg-primary text-primary-foreground font-medium py-2 px-4 rounded-md",
          "transition-all hover:bg-primary/90 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}>
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://cdn.21st.dev/assets/mirror/f7/f7cc7f12fe6695a2811820cfde557ce3f1ff6ab520c4ef8281f7e44bb8534d1a.jpg",
  },
  {
    id: 2,
    src: "https://cdn.21st.dev/assets/mirror/20/20e32f1718a79139ee66e391958abe7dd237182cc83dcecad303c03f001997de.jpg",
  },
  {
    id: 3,
    src: "https://cdn.21st.dev/assets/mirror/d5/d5d28b686d22dea019f8ddc9b45793a15783fb3f5cea7dd59644a29bdc8dd753.jpg",
  },
  {
    id: 4,
    src: "https://cdn.21st.dev/assets/mirror/10/10b91ee0fe7b7bd73552a0d9fd6448f3582b744902104d54bc71f13fc0f30875.jpg",
  },
  {
    id: 5,
    src: "https://cdn.21st.dev/assets/mirror/5c/5c5a789444d6c4b6a753911453489b6d6b2511bb8879813706708b9e4d871f91.jpg",
  },
  {
    id: 6,
    src: "https://cdn.21st.dev/assets/mirror/ed/edf8b3217ec8f6cba1d61472eadbfebe561269a88d654ee0789dd59c7bd9e839.jpg",
  },
  {
    id: 7,
    src: "https://cdn.21st.dev/assets/mirror/c5/c5bafc6cab0c15f9f47de7d201559bf49837930f11977732650ce83b35234bd8.jpg",
  },
  {
    id: 8,
    src: "https://cdn.21st.dev/assets/mirror/0b/0bafc73e254b4e39433c895085b77a863ac7c46b03eec51c8267a6ee2b6d3e60.jpg",
  },
  {
    id: 9,
    src: "https://cdn.21st.dev/assets/mirror/e2/e2d17e27a1f74391945f89105f3658f9c678e8b99038c24780ff637cb0926c14.jpg",
  },
  {
    id: 10,
    src: "https://cdn.21st.dev/assets/mirror/e7/e78a4a050ff53e83348f146b668faab3329b0987f74c13e30601e9eba07beeff.jpg",
  },
  {
    id: 11,
    src: "https://cdn.21st.dev/assets/mirror/94/94d11fd791fdf4522b639069444efd378ae985ef4385e02b14d65931737d36d5.jpg",
  },
  {
    id: 12,
    src: "https://cdn.21st.dev/assets/mirror/a1/a18b230d0e57bcd55b1dcbd786426485fdafbbed2c3122246be99110d8a8695e.jpg",
  },
  {
    id: 13,
    src: "https://cdn.21st.dev/assets/mirror/ae/ae31491e9f1290514a9d99db18b4e1194a4493c2216bf149e6d9f0bfec70f470.jpg",
  },
  {
    id: 14,
    src: "https://cdn.21st.dev/assets/mirror/07/0700bd8b8f757951e74ff66077f046bda1a97e33d08f2053f573e487d9a43c97.jpg",
  },
  {
    id: 15,
    src: "https://cdn.21st.dev/assets/mirror/8f/8fe9e110776ad7034a70f175e61871b143c5fada8e7c87c070d17c8db3b47259.jpg",
  },
  {
    id: 16,
    src: "https://cdn.21st.dev/assets/mirror/74/7484da0108fa00377e5658a3285fd4d513f79dee5becd22a24be68016dd3e23a.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md overflow-hidden bg-muted"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
