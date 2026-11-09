'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'motion/react';

export const items = [
  {
    id: 1,
    url: 'https://cdn.21st.dev/assets/mirror/cf/cf913dd89fc80d6612d592716d683b69d8d27e825e29037970a447662fa90c34.jpg',
    title: 'Misty Mountain Majesty',
  },
  {
    id: 2,
    url: 'https://cdn.21st.dev/assets/mirror/c1/c1889548bd605673e0fa9b4956d48bb95d1d823b51065d1cffa8378ac575a03e.jpg',
    title: 'Winter Wonderland',
  },
  {
    id: 3,
    url: 'https://cdn.21st.dev/assets/mirror/be/be51654fde385afa6724612f6cb4da5c49d1e0069db2b071e64c0565ab7f8c96.jpg',
    title: 'Autumn Mountain Retreat',
  },
  {
    id: 4,
    url: 'https://cdn.21st.dev/assets/mirror/ad/ad7c72fa19d08912304ec835dfdad8514832b33f7e5ff680ee6643ebd42ce1cb.jpg',
    title: 'Tranquil Lake Reflection',
  },
  {
    id: 5,
    url: 'https://cdn.21st.dev/assets/mirror/26/26996d24da055655358a7e3bcf400d6620d02b0d9979d05a4d0f22f76bec1cba.jpg',
    title: 'Misty Mountain Peaks',
  },
  {
    id: 6,
    url: 'https://cdn.21st.dev/assets/mirror/45/45a83037b6b4e50224ed12063c0a33c59843fc6a91c9d530c4e3434329e6e4d3.jpg',
    title: 'Golden Hour Glow',
  },
  {
    id: 7,
    url: 'https://cdn.21st.dev/assets/mirror/15/15d961157781af8624f579ac6ef617b0322be51ad436e42b1554b0cb48f69ddb.jpg',
    title: 'Snowy Mountain Highway',
  },
  {
    id: 8,
    url: 'https://cdn.21st.dev/assets/mirror/fe/fe2a69ce0f0a45e6aac91957949c1575633e94e77edb21107e6d2bd9ecf7e66d.jpg',
    title: 'Foggy Mountain Forest',
  },
];

export function FramerCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className='lg:p-10 sm:p-4 p-2 max-w-4xl mx-auto'>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div className='flex' style={{ x }}>
            {items.map((item) => (
              <div key={item.id} className='shrink-0 w-full h-[500px]'>
                <img
                  src={item.url}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-lg select-none pointer-events-none'
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? 'opacity-40 cursor-not-allowed'
                  : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
              }`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 rounded-xl border border-white/30'>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
