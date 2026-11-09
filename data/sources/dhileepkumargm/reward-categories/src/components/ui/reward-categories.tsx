import React, { useState, useEffect } from "react";

// ==========================================================================================
// I. ICON LIBRARY
// ==========================================================================================

export const CashIcon = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
    style={{ filter: "drop-shadow(0 0 10px rgba(29, 199, 86, 0.7))" }}
  >
    <circle
      cx="24"
      cy="24"
      r="18"
      fill="#1dc756"
      stroke="#15a048"
      strokeWidth="3"
    />
    <text
      x="24"
      y="30"
      textAnchor="middle"
      fill="white"
      fontSize="20"
      fontWeight="bold"
    >
      ₹
    </text>
  </svg>
);

export const CoinsIcon = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
    style={{ filter: "drop-shadow(0 0 10px rgba(245, 158, 11, 0.7))" }}
  >
    <circle
      cx="18"
      cy="20"
      r="14"
      fill="#F59E0B"
      stroke="#D97706"
      strokeWidth="2"
    />
    <circle
      cx="30"
      cy="28"
      r="14"
      fill="#FBBF24"
      stroke="#F59E0B"
      strokeWidth="2"
    />
    <text
      x="18"
      y="25"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      C
    </text>
    <text
      x="30"
      y="33"
      textAnchor="middle"
      fill="white"
      fontSize="12"
      fontWeight="bold"
    >
      C
    </text>
  </svg>
);

export const CouponsIcon = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
    style={{ filter: "drop-shadow(0 0 10px rgba(127, 85, 224, 0.7))" }}
  >
    <rect
      x="6"
      y="16"
      width="36"
      height="16"
      rx="4"
      fill="#7F55E0"
      stroke="#6B46C1"
      strokeWidth="2"
    />
    <circle cx="6" cy="24" r="4" fill="#0d0d0d" />
    <circle cx="42" cy="24" r="4" fill="#0d0d0d" />
    <rect x="16" y="20" width="16" height="2" fill="white" />
    <rect x="16" y="26" width="16" height="2" fill="white" />
  </svg>
);

export const SpinIcon = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
    style={{ filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.8))" }}
  >
    <circle
      cx="24"
      cy="24"
      r="20"
      fill="#EC4899"
      stroke="#DB2777"
      strokeWidth="2"
    />
    <path d="M24 4 L32 16 L24 24 Z" fill="#F472B6" />
    <path d="M44 24 L32 16 L24 24 Z" fill="#BE185D" />
    <path d="M44 24 L32 32 L24 24 Z" fill="#F472B6" />
    <path d="M32 32 L24 44 L24 24 Z" fill="#BE185D" />
    <path d="M24 44 L16 32 L24 24 Z" fill="#F472B6" />
    <path d="M4 24 L16 32 L24 24 Z" fill="#BE185D" />
    <path d="M4 24 L16 16 L24 24 Z" fill="#F472B6" />
    <path d="M16 16 L24 4 L24 24 Z" fill="#BE185D" />
    <circle
      cx="24"
      cy="24"
      r="6"
      fill="#FBBF24"
      stroke="#F59E0B"
      strokeWidth="2"
    />
    <path d="M24 2 L26 8 L22 8 Z" fill="#FBBF24" />
    <circle cx="24" cy="24" r="2" fill="white" />
  </svg>
);

// ==========================================================================================
// II. ANIMATION & EFFECT COMPONENTS
// ==========================================================================================

export const FloatingParticles = ({ count = 20 }) => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 8}s`,
        animationDelay: `${Math.random() * 8}s`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        opacity: Math.random() * 0.7 + 0.1,
      })),
    );
  }, [count]);
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute bg-purple-300 rounded-full animate-particle-float"
          style={p}
        ></div>
      ))}
    </div>
  );
};

export const Confetti = ({ count = 100 }) => {
  const [pieces, setPieces] = useState([]);
  const colors = ["#EC4899", "#FBBF24", "#7F55E0", "#1dc756", "#636AE8"];
  useEffect(() => {
    setPieces(
      Array.from({ length: count }).map(() => ({
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      })),
    );
  }, [count]);

  return (
    <div className="absolute inset-0 z-50 overflow-hidden pointer-events-none">
      {pieces.map((p, i) => (
        <div
          key={i}
          className="absolute w-2 h-4"
          style={{ ...p, animationName: "fall" }}
        ></div>
      ))}
    </div>
  );
};

// ==========================================================================================
// III. CORE UI COMPONENTS
// ==========================================================================================

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "px-6 py-2 font-bold text-white rounded-full shadow-lg transition-transform transform hover:scale-105";
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700",
    secondary: "bg-pink-500 hover:bg-pink-600",
    special: "bg-gradient-to-br from-yellow-400 to-orange-500",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, title, className = "" }) => (
  <div
    className={`bg-[#111] bg-opacity-50 backdrop-blur-sm p-4 rounded-lg shadow-2xl w-full ${className}`}
  >
    {title && (
      <h2 className="text-center text-lg font-bold mb-6 text-white">{title}</h2>
    )}
    {children}
  </div>
);

export const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center text-gray-800 relative z-10 w-80">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div>{children}</div>
        <Button onClick={onClose} variant="secondary" className="mt-6">
          Close
        </Button>
      </div>
    </div>
  );
};

// ==========================================================================================
// IV. WIDGETS (COMPOSITE COMPONENTS)
// ==========================================================================================

export const RewardArtifact = ({
  icon: Icon,
  label,
  color,
  particleColor = "bg-yellow-400",
  onClick,
}) => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 3}s`,
        animationDelay: `${Math.random() * 5}s`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
      })),
    );
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-24 h-24 flex flex-col items-center justify-center group cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 animate-float">
        {isHovered &&
          particles.map((p, i) => (
            <div
              key={i}
              className={`absolute ${particleColor} rounded-full`}
              style={{ ...p, animationName: "fade-in-out" }}
            ></div>
          ))}
      </div>
      <div className="relative z-10 w-10 h-10 transition-transform duration-300 group-hover:scale-110 animate-float-slow">
        <Icon className="w-full h-full" />
      </div>
      <div className="absolute bottom-4 w-16 h-4 z-0">
        <div
          className="absolute top-0 w-full h-2 bg-gray-800 rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, #333 0%, #111 70%)",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-3/4 h-3/4 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: color, filter: "blur(8px)", opacity: 0.4 }}
        ></div>
        <div
          className="absolute top-1 w-full h-3 bg-gray-900 rounded-b-full"
          style={{ background: "linear-gradient(to top, #000, #222)" }}
        ></div>
      </div>
      <p
        className="absolute -bottom-2 text-white text-xs font-medium text-center whitespace-nowrap"
        style={{ textShadow: "0 0 3px black" }}
      >
        {label}
      </p>
    </div>
  );
};

export const RewardCategories = ({ onArtifactClick }) => {
  const artifacts = [
    {
      icon: CashIcon,
      label: "Cash won",
      color: "#1dc756",
      particleColor: "bg-green-400",
    },
    {
      icon: CoinsIcon,
      label: "Coins",
      color: "#F59E0B",
      particleColor: "bg-yellow-400",
    },
    {
      icon: CouponsIcon,
      label: "Coupons",
      color: "#7F55E0",
      particleColor: "bg-purple-400",
    },
    {
      icon: SpinIcon,
      label: "Spin & Win",
      color: "#EC4899",
      particleColor: "bg-pink-400",
    },
  ];
  return (
    <Card title="Your Rewards">
      <div className="flex justify-around items-start w-full max-w-md mx-auto">
        {artifacts.map((artifact) => (
          <RewardArtifact
            key={artifact.label}
            {...artifact}
            onClick={() => onArtifactClick(artifact.label)}
          />
        ))}
      </div>
    </Card>
  );
};

export default CashIcon;
