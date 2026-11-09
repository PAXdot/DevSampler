import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PerspectiveCardCarousel = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const autoPlayTimerRef = useRef(null);

  // Handle automatic rotation
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        goToNext();
      }, 3000);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, activeIndex, cards.length]);

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setIsAutoPlaying(false);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      // Threshold for swipe
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setTouchStart(0);
    }
  };

  // Calculate the positions and transformations for each card
  const getCardStyle = (index) => {
    const diff = (index - activeIndex + cards.length) % cards.length;
    let translateZ = 0;
    let rotateY = 0;
    let opacity = 0;
    let scale = 0.7;
    let zIndex = 0;

    if (diff === 0) {
      // Active card
      translateZ = 150;
      rotateY = 0;
      opacity = 1;
      scale = 1;
      zIndex = 10;
    } else if (diff === 1 || diff === cards.length - 1) {
      // Cards on immediate sides
      translateZ = 50;
      rotateY = diff === 1 ? 45 : -45;
      opacity = 0.7;
      scale = 0.85;
      zIndex = 5;
    } else {
      // Further cards
      translateZ = 0;
      rotateY = diff < cards.length / 2 ? 60 : -60;
      opacity = 0.5;
      scale = 0.7;
      zIndex = 1;
    }

    return {
      transform: `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    };
  };

  return (
    <div className="w-full">
      {/* 3D space container */}
      <div
        className="relative h-[600px] overflow-hidden bg-gradient-to-b from-indigo-900 to-purple-900 rounded-2xl shadow-2xl perspective-container"
        ref={containerRef}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {/* Decorative elements */}
        <div className="absolute w-full h-full">
          <div className="absolute w-64 h-64 rounded-full bg-pink-500 opacity-10 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-72 h-72 rounded-full bg-blue-500 opacity-10 blur-3xl -bottom-20 -right-20"></div>
        </div>

        {/* Title */}
        <div className="absolute top-8 left-0 w-full text-center">
          <h2 className="text-3xl font-bold text-white tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-pink-300">
              3D Perspective Gallery
            </span>
          </h2>
          <p className="mt-2 text-indigo-200 opacity-80">
            Swipe or click to navigate
          </p>
        </div>

        {/* Card container */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="absolute w-[300px] sm:w-[350px] h-[400px] cursor-pointer select-none"
              style={getCardStyle(index)}
              onClick={() => index !== activeIndex && handleDotClick(index)}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="h-full w-full rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-indigo-50/20"
              >
                {/* Card image */}
                <div className="h-1/2 overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Card content */}
                <div className="p-6 bg-gradient-to-br from-white to-indigo-50 h-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-800">
                        {card.title}
                      </h3>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        {card.category}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < card.rating ? "text-yellow-500" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs rounded-md transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 border border-white/10"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 border border-white/10"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Auto-play toggle */}
      <div className="mt-6 flex justify-center">
        <button
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            isAutoPlaying
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          <span>{isAutoPlaying ? "Pause" : "Auto-Play"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isAutoPlaying ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PerspectiveCardCarousel;
