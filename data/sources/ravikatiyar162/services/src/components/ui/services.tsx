import React from 'react';

// Main component for the Services Section
const App = () => {
  // Data for the service cards
  const services = [
    {
      title: "Web Development",
      image: "https://cdn.21st.dev/assets/mirror/00/0075b65d41fca0904bd9a586c21c5cd4f13205aa4873d58d4b876262b3e5c664.png",
      overlayImage: "https://cdn.21st.dev/assets/mirror/b1/b199a356519c9ae1e92a1d7ebe8c41d8f55aa94c1b9cc0583c443644b1997cb8.png"
    },
    {
      title: "Creative Design",
      image: "https://cdn.21st.dev/assets/mirror/8a/8a05f191e80c3572b29a25abadb94c8c7dafb95eab9560a73252eaefab3b0d67.png",
      overlayImage: "https://cdn.21st.dev/assets/mirror/bf/bfb31dcaa33c807b58eff4bc68a6401f9eb0d47ed3d9359e87dc593f99088afe.png"
    },
    {
      title: "Branding",
      image: "https://cdn.21st.dev/assets/mirror/5d/5dc6886ceeb2ef769d3afef85dd576af4cfb6794f59528677823cd88041b7bdf.png",
      overlayImage: "https://cdn.21st.dev/assets/mirror/77/779add1d4f85ce6a0dc20b6c1905ba0b052b7b92814703ed0aca2bd1d6b8061a.png"
    },
    {
      title: "Product Design",
      image: "https://cdn.21st.dev/assets/mirror/f4/f4ee66d52172030b33772c6099caadec71c79e1b9272a9bae2b1e1ba409c4488.png",
      overlayImage: "https://cdn.21st.dev/assets/mirror/3e/3ebdddb7f0a352418e58e3a72737d6a27c454f577ada3da9a53d3b790ca59a8c.png"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen w-full flex items-center justify-center font-sans">
        <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
              body {
                font-family: 'Inter', sans-serif;
              }
            `}
        </style>
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 w-full">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
              How Can I Help?
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-light">
              Let's turn your vision into something amazing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-6 flex flex-col h-[320px] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {/* Image Container */}
                <div className="relative flex-grow flex items-center justify-center mb-4">
                  {/* Back Image */}
                  <img
                    src={service.image}
                    alt={`${service.title} showcase`}
                    className="absolute w-44 h-auto rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://cdn.21st.dev/assets/mirror/30/30250990bb2d78ef3d4e4c44b952a1b22c78a0a622afaedbe444d7f2143c783e.svg'; }}
                  />
                  {/* Front Image */}
                  <img
                    src={service.overlayImage}
                    alt={`${service.title} example`}
                    className="absolute w-44 h-auto rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://cdn.21st.dev/assets/mirror/11/11e4179fcd829c41a53db65ab04e003033b85e0f43cf2b619a6cde35c8d311f2.svg'; }}
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-left text-lg font-medium text-gray-800 dark:text-gray-100 mt-auto">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
