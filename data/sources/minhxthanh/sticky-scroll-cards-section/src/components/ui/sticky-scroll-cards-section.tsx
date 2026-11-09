import React, { useState, useEffect, useRef } from 'react';

// --- Data for the feature cards ---
const features = [
  {
    title: "Connect Files Locally",
    description: "Hyperlink indexes and tracks your local files and folders in real time. Every update is searchable immediately. Integrations with Google Drive and OneDrive coming soon.",
    imageUrl: "https://cdn.21st.dev/assets/mirror/56/56f601deb796addc10800b650a718ece27ad0c55cf55e48daa5bd306c0d78da9.jpg",
    bgColor: "bg-yellow-200 dark:bg-yellow-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Trace Every AI Answer",
    description: "Every answer includes clickable citations, instantly revealing the original source alongside full context. Trust AI answer by verifying insights directly.",
    imageUrl: "https://cdn.21st.dev/assets/mirror/06/06d097b6b124605f5b82383674f4db00e364c73a2b4ac282f94a819b836a4fba.jpg",
    bgColor: "bg-amber-200 dark:bg-amber-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Focus Searches Precisely",
    description: "Target specific projects or documents effortlessly using @folder and @document. Seamlessly switch context within your workflow for pinpoint accuracy.",
    imageUrl: "https://cdn.21st.dev/assets/mirror/e2/e247a16d14eee52b6f6a26da3c88c95b9a0ffa80058801050be210426a17b9fa.jpg",
    bgColor: "bg-orange-200 dark:bg-orange-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Search Text Within Images",
    description: "Hyperlink transforms text from images into searchable insights. Your visual references—screenshots, photos, and visual notes—become fully accessible.",
    imageUrl: "https://cdn.21st.dev/assets/mirror/f4/f4265fdc0802b8552249348dbac25ab03cec0874c41c907423ef8da2b5252206.jpg",
    bgColor: "bg-yellow-300 dark:bg-yellow-900",
    textColor: "text-gray-800 dark:text-gray-100"
  },
];

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element's intersection status changes.
        setInView(entry.isIntersecting);
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% of the item must be visible to trigger the callback
      }
    );

    observer.observe(element);

    // Cleanup function to disconnect the observer when the component unmounts.
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};


// --- Header Component ---
const AnimatedHeader = () => {
    const [headerRef, headerInView] = useScrollAnimation();
    const [pRef, pInView] = useScrollAnimation();

    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 
                ref={headerRef}
                className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-gray-900 dark:text-white ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                Uncover Insights, Expose Nothing
            </h2>
            <p 
                ref={pRef}
                className={`text-lg text-gray-600 dark:text-gray-300 mt-4 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                We aim to make on-device AI friction-free and production-ready
            </p>
        </div>
    );
};

// This is the main component that orchestrates everything.
export function StickyFeatureSection() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-sans">
        {/* The padding-global and container-large classes from your CSS are replicated here */}
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* The main section for the features */}
          <section className="py-24 md:py-48 flex flex-col items-center">
            
            <AnimatedHeader />

            {/* The container for the sticky cards */}
            <div className="w-full">
              {features.map((feature, index) => (
                <div
                    key={index}
                    // The sticky class makes the card stick to the top of the container.
                    className={`${feature.bgColor} grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 p-8 md:p-12 rounded-3xl mb-16 sticky`}
                    // All cards will stick at the same position, creating the stacking effect.
                    style={{ top: '200px' }}
                >
                  {/* Card Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className={feature.textColor}>{feature.description}</p>
                  </div>
                  
                  {/* Card Image */}
                  <div className="image-wrapper mt-8 md:mt-0">
                    <img 
                        src={feature.imageUrl} 
                        alt={feature.title}
                        loading="lazy"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                        // Simple fallback in case an image fails to load
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn.21st.dev/assets/mirror/f8/f805ca241960b27547140d220d2965df09f00c9f153feb04f3b51c3e39de775d.svg"; }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}