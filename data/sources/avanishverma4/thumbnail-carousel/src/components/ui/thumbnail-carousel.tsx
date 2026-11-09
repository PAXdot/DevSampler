import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const items = [
  {
    id: 1,
    url: 'https://cdn.21st.dev/assets/mirror/2d/2deffad52dca4c5c60941eae33c675a62f8c68ccc59977c53841203b173abe0b.jpg',
    title: 'A large body of water surrounded by mountains',
  },
  {
    id: 2,
    url: 'https://cdn.21st.dev/assets/mirror/cd/cd19a496024e1ae95966db819275e556550318375c03775081270da8e8c67959.jpg',
    title: 'Abstract streaks of pink and blue on black',
  },
  {
    id: 3,
    url: 'https://cdn.21st.dev/assets/mirror/fd/fd0a79541180cd40e0ce44de54b408d0e340d8640f929a4b240255478919141f.jpg',
    title: 'Mountain Summit',
  },
  {
    id: 4,
    url: 'https://cdn.21st.dev/assets/mirror/8c/8c67f1501f4d1d639798bc474a764aac9cecf144810c4f6ecc1ea154622b8bff.jpg',
    title: 'Alpine Landscape',
  },
  {
    id: 5,
    url: 'https://cdn.21st.dev/assets/mirror/a8/a86021ac758a4511effa226afc0df66c2c515c1dd3b6d0f5a307c2098b3821d8.jpg',
    title: 'Mountain Range',
  },
  {
    id: 6,
    url: 'https://cdn.21st.dev/assets/mirror/7f/7f3a08eb3241cf6bc316407c3ea065bd25482e987ac32f399d7a2efb0fd65a28.jpg',
    title: 'Mountain Wilderness',
  },
  {
    id: 7,
    url: 'https://cdn.21st.dev/assets/mirror/6d/6d1ef0c6933c3e5af6cd341edf76c9241a1b9d8a7ce9cd5d27026b128be25899.jpg',
    title: 'Mountain Trail',
  },
  {
    id: 8,
    url: 'https://cdn.21st.dev/assets/mirror/3c/3cbffe91284f00277befa7adfb9d8ae1cb414f9526842ec6908bff339a35b115.jpg',
    title: 'A lone figure stands on a futuristic, reflective surface.',
  },
  {
    id: 9,
    url: 'https://cdn.21st.dev/assets/mirror/25/25fbf25543ef72d92c290e34e1c8aa8eb1a0c113e5b55f6bf6c1c7dc5da473e1.jpg',
    title: 'Rocky Cliffs',
  },
  {
    id: 10,
    url: 'https://cdn.21st.dev/assets/mirror/c4/c4557795d4c2efcbb582c25d9aca9f1d774376add6018f9718141993cf3b75c2.jpg',
    title: 'Forest Path',
  },
  {
    id: 11,
    url: 'https://cdn.21st.dev/assets/mirror/c8/c81fd183e7ec1c9302ae95a6f546f0b671b09164dc1cc9a24903814cfc72d643.jpg',
    title: 'Green Hills',
  },
  {
    id: 12,
    url: 'https://cdn.21st.dev/assets/mirror/d8/d8cbaa985a41cb934112ec5a1304545723b0fc96c6b14b450fc3c6029eebb0ae.jpg',
    title: 'Sunrise Peak',
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

function Thumbnails({ index, setIndex }) {
  const thumbnailsRef = useRef(null);

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
      className='overflow-x-auto'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className='flex gap-0.5 h-20 pb-2' style={{ width: 'fit-content' }}>
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
            className='relative shrink-0 h-full overflow-hidden rounded'
          >
            <img
              src={item.url}
              alt={item.title}
              className='w-full h-full object-cover pointer-events-none select-none'
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function Component() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

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
    <div className='w-full max-w-3xl mx-auto p-4 lg:p-10'>
      <div className='flex flex-col gap-3'>
        {/* Main Carousel */}
        <div className='relative overflow-hidden rounded-lg bg-gray-100' ref={containerRef}>
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

          {/* Previous Button */}
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

          {/* Image Counter */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm'>
            {index + 1} / {items.length}
          </div>
        </div>

        <Thumbnails index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}