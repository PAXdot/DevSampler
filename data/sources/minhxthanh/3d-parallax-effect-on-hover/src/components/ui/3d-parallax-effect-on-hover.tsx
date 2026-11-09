import React from "react";

const images = [
  {
    src: "https://cdn.21st.dev/assets/mirror/f3/f301994ad9e1f84f2e8e85cdf497936d741b14991668bc49456d4132f238e9c0.jpg",
    alt: "the back of a random person",
    f: 0.1,
    r: "10px",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/86/86faada44c26f823f34930e73fe5b25ad4db8ace59e72522e69e512636be8bfd.jpg",
    alt: "an eagle",
    f: 0.12,
    r: "5px",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/5d/5d7eed215c8e479e60a996d2d7d3e9fa99eec2b62c6ba6ff5cba75c3a5f93437.jpg",
    alt: "a cup of tea",
    f: 0.08,
    r: "20px",
  },
];

export default function ParallaxImages() {
  return (
    <div className="min-h-screen grid grid-flow-col place-content-center gap-8 bg-dark p-8">
      {images.map((img, idx) => (
        <div key={idx} className="overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            className="parallax-img"
            style={{ "--f": img.f, "--r": img.r }}
          />
        </div>
      ))}
    </div>
  );
}