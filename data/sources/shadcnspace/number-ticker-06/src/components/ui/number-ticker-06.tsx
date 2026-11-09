"use client";

import { useEffect, useState } from "react";
import NumberFlow, { type Value } from "@number-flow/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type NumberTickerProps = {
  value: Value;
  decimals?: number;
  className?: string;
};

function NumberTicker({ value, decimals = 0, className }: NumberTickerProps) {
  return (
    <NumberFlow
      value={value}
      format={{
        notation: "standard",
        compactDisplay: "short",
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }}
      className={className}
    />
  );
}

const NumberTickerDemo = () => {
  const [val, setVal] = useState(12842);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((v) => Number(v) + Math.floor(Math.random() * 40) + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-1">
      <NumberTicker
        value={val}
        className="text-foreground font-medium lg:text-5xl sm:text-4xl text-3xl tabular-nums tracking-tight"
      />
      <div className="flex items-center gap-2">
        <div className="flex -space-x-4">
          {[
            {
              src: "https://cdn.21st.dev/assets/localized/2bc5f22fa3400c61a2161d14e3dce5a0804badebfc1b3d9cbe844feaa3b72180.webp",
              name: "Albert",
            },
            {
              src: "https://cdn.21st.dev/assets/localized/61fda783ca2662349458bad61a434038016f05d6a14bd7c5a314f48c8ee8be03.webp",
              name: "Jessica",
            },
            {
              src: "https://cdn.21st.dev/assets/localized/a14cfb79930752b101d94f18e1d60c337367589ea223dffaa62884aa579dcb65.webp",
              name: "Ben",
            },
            {
              src: "https://cdn.21st.dev/assets/localized/c5ee2e124ea7334450d30a46607f793534f567e97d4b708cda110a06aeed4953.webp",
              name: "Jenny",
            },
          ].map((user) => (
            <Avatar
              key={user.name}
              className="size-8 border-2 border-background"
            >
              <AvatarImage src={user.src} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <span className="text-muted-foreground text-sm font-medium">
          people joined
        </span>
      </div>
    </div>
  );
};

export default NumberTickerDemo;
