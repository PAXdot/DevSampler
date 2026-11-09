import React, { useState } from "react";

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: "Voice Assistant",
    imageUrl:
      "https://cdn.21st.dev/assets/mirror/3c/3cfc0a70ff28f4d893b3957d57bac30d779a82955950e5ab7eae18f52ff5c666.jpg",
  },
  {
    id: 2,
    title: "AI Image Generation",
    imageUrl:
      "https://cdn.21st.dev/assets/localized/47bbe9461d273c34f52b57b0ab1628126a570899a9366786ae64855b8397b6d0.jpg",
  },
  {
    id: 3,
    title: "AI Chatbot + Local RAG",
    imageUrl:
      "https://cdn.21st.dev/assets/mirror/f8/f87ce80f6faafd8036aa8fded655eeabd3501923348041cf8fb545c4426419c6.jpg",
  },
  {
    id: 4,
    title: "AI Agent",
    imageUrl:
      "https://cdn.21st.dev/assets/mirror/f3/f390340fbe98b54bf6d65a34e20c4e0a79d328c3036f689a877dd3f0f0e954cd.jpg",
  },
  {
    id: 5,
    title: "Visual Understanding",
    imageUrl:
      "https://cdn.21st.dev/assets/mirror/06/06da3bf2e3245bba260845e8cdc47ded12eeb02270631e1958ecc0827ce5e3f7.jpg",
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://cdn.21st.dev/assets/mirror/20/202ffce6b7b0033fa5516a872cec215e4edbb8d25bc98a77988cfb950fffdb9e.svg";
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0" // Active state: horizontal, bottom-center
              : // Inactive state: vertical, positioned at the bottom, for all screen sizes
                "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white font-sans">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
              Accelerate Gen-AI Tasks on Any Device
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Build high-performance AI apps on-device without the hassle of
              model compression or edge deployment.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            {/* Changed flex-col to flex-row to keep the layout consistent */}
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingAccordionItem;
