'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  animate,
} from 'motion/react';

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
  {
    id: 9,
    url: 'https://cdn.21st.dev/assets/mirror/b5/b504d3043f4a74ea1ba8802dc4c207efafee8ece1cd15a2a66e439a28b2e559b.jpg',
    title: 'Sunset Mountain Silhouette',
  },
  {
    id: 10,
    url: 'https://cdn.21st.dev/assets/mirror/4d/4dee2de7649f9a6a54bdeb103ece36942547a2cf202f44aa346cdcf85362c74e.jpg',
    title: 'Alpine Meadow Bliss',
  },
  {
    id: 11,
    url: 'https://cdn.21st.dev/assets/mirror/6c/6cc9206ef8a6a66e63c71d18e62b25dcb5f682e9935cba928ca5964cdaee6e73.jpg',
    title: 'Mountain Lake Serenity',
  },
  {
    id: 12,
    url: 'https://cdn.21st.dev/assets/mirror/c0/c011c2aac79da7373ef2191d2048e1f683cb79697ef4311c460271c08c462dad.jpg',
    title: 'Icy Mountain Stream',
  },
  {
    id: 13,
    url: 'https://cdn.21st.dev/assets/mirror/04/040e315414ec53eaa9cbd34cb87286eabc9bbeaa359af5e207a4f869d3f058f7.jpg',
    title: 'Wildflower Mountain Meadow',
  },
  {
    id: 14,
    url: 'https://cdn.21st.dev/assets/mirror/c6/c68ec12652dd244b6f56558cafe0258ede7091e4e90f7c950310a4dd9e1d0863.jpg',
    title: 'Mountain Valley Vista',
  },
  {
    id: 15,
    url: 'https://cdn.21st.dev/assets/mirror/1e/1ef7c67a36dda66b4ddb2a63efec1429ff24df9cd271ed636f0f20cd049d576f.jpg',
    title: 'Rugged Mountain Terrain',
  },
  {
    id: 16,
    url: 'https://cdn.21st.dev/assets/mirror/f4/f46e259858c10ad6c5a525513af156da6333f05c7e8bf81b9b41ea13586f805e.jpg',
    title: 'Mountain Wildflower Bloom',
  },
  {
    id: 17,
    url: 'https://cdn.21st.dev/assets/mirror/3d/3dff8b99f2c2ba06e55b2b0dbbbd57adcbbfb37b392c04424068fdbc3f6f3724.jpg',
    title: 'Mountain River Rapids',
  },
  {
    id: 18,
    url: 'https://cdn.21st.dev/assets/mirror/7c/7cb8bdab8b5e0e31d921c82286d748020ff94d8fe4f3abde673733a93d78a57a.jpg',
    title: 'Lush Mountain Valley',
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

export function Component() {
  const [index, setIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  return (
    <div className='max-w-3xl mx-auto lg:p-10 p-2'>
      <div className='flex flex-col gap-3'>
        {/* Main Carousel */}
        <div className='relative overflow-hidden rounded-lg' ref={containerRef}>
          <motion.div
            className='flex'
            drag='x'
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item) => (
              <div key={item.id} className='shrink-0 w-full h-[400px]'>
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
            className={`absolute left-4 text-black top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
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
            className={`absolute text-black right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
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
        </div>

        <Thumbnails index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

function Thumbnails({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className='overflow-x-auto scrollbar-hide'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className='flex gap-1 h-20 pb-2' style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative shrink-0 h-full overflow-hidden'
          >
            <img
              src={item.url}
              alt={item.title}
              className='w-full h-full object-cover pointer-events-none select-none'
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
