import React from "react";

// --- Reusable UI Element Components ---

export const DataReadout = ({ value }) => (
  <div
    className="font-['Orbitron'] text-cyan-400 text-4xl"
    style={{ textShadow: "0 0 5px var(--cyan-glow)" }}
  >
    {value}
  </div>
);

export const HoloButton = ({ text }) => (
  <button className="holo-button">{text}</button>
);

export const ProgressBar = ({ progress }) => (
  <div className="progress-bar">
    <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
  </div>
);

export const DataViz = ({ bars = 5 }) => (
  <div className="flex gap-1 items-end h-12">
    {Array.from({ length: bars }).map((_, i) => (
      <div
        key={i}
        className="data-viz-bar"
        style={{ animationDelay: `${i * 0.2}s` }}
      ></div>
    ))}
  </div>
);

export const GlowingOrb = ({ color }) => (
  <div
    className="glowing-orb"
    style={{
      "--orb-color": color || "var(--cyan-bright)",
      "--orb-glow": color ? "#FF8C00" : "var(--cyan-glow)",
    }}
  ></div>
);

// --- Core Components ---

export const HoloCard = ({ typeInfo }) => {
  const Component = typeInfo.component;
  return (
    <article className="holo-card">
      <div className="card-content">
        <div className="card-preview-content">
          <Component {...typeInfo.props} />
        </div>
        <a className="fake-link" href="#">
          Link to post
        </a>
      </div>
    </article>
  );
};

export const ScrollingRow = ({ cards, duration, direction = "left" }) => {
  const rowContent = [...cards, ...cards]; // Duplicate for seamless animation

  return (
    <div className="grid-container">
      <div
        className="scrolling-grid"
        style={{
          "--scroll-duration": duration,
          animationName: direction === "left" ? "scroll-left" : "scroll-right",
        }}
      >
        {rowContent.map((card, index) => (
          <HoloCard key={`${card.id}-${index}`} typeInfo={card} />
        ))}
      </div>
    </div>
  );
};

export const Starfield = () => <div className="starfield" />;

export default DataReadout;
