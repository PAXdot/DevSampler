import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="h-screen w-full flex flex-col items-center justify-center">
	<p class="m-0 text-transparent text-5xl sm:text-7xl md:text-8xl font-serif font-bold uppercase animate-text bg-[url('https://cdn.21st.dev/assets/mirror/a1/a1c3df55667b39411634399bcde8990ea449a8e99d384b3ada88c4f045dfbede.jpg')] bg-contain bg-clip-text opacity-80">Text</p>
	<p class="m-0 text-transparent text-5xl sm:text-7xl md:text-8xl font-serif font-bold uppercase animate-text bg-[url('https://cdn.21st.dev/assets/mirror/4e/4e55c6568b7134846fc29d1d7c82ed90da51a5460779c76bda4bc3c91ed87a21.jpg')] bg-contain bg-clip-text opacity-80">Animation</p>
</div>
  );
};
