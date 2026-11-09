import { motion } from "framer-motion";
import React from "react";

interface VaultoryHeroProps {
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  emailPlaceholder?: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  navItems?: Array<{ label: string; onClick: () => void }>;
  authButtons?: {
    login: { label: string; onClick: () => void };
    signup: { label: string; onClick: () => void };
  };
  cryptoCoins?: Array<{
    icon: React.ReactNode;
    size: number;
    position: { x: string; y: string };
    delay: number;
  }>;
  brands?: Array<{ name: string; logo: React.ReactNode }>;
  walletImage?: React.ReactNode;
  className?: string;
}

export default function VaultoryHero({
  logo,
  title,
  subtitle,
  description,
  emailPlaceholder = "name@email.com",
  ctaButton,
  navItems = [],
  authButtons,
  cryptoCoins = [],
  brands = [],
  walletImage,
  className = "",
}: VaultoryHeroProps) {
  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #1A1F0F 0%, #2D3A1A 50%, #1A1F0F 100%)",
      }}
    >
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {logo}
          </motion.div>

          {/* Nav Items */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>

          {/* Auth Buttons */}
          {authButtons && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={authButtons.login.onClick}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {authButtons.login.label}
              </button>
              <button
                onClick={authButtons.signup.onClick}
                className="px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                style={{
                  background: "#C4FF0D",
                  color: "#000000",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {authButtons.signup.label}
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Radial Glow Effect */}
      <motion.div
        className="absolute"
        style={{
          top: "20%",
          left: "30%",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196, 255, 13, 0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Title */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
              <br />
              <span style={{ color: "#C4FF0D" }}>{subtitle}</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.7",
              }}
            >
              {description}
            </p>

            {/* Email Input & CTA */}
            {ctaButton && (
              <div className="flex items-center gap-4 max-w-md">
                <input
                  type="email"
                  placeholder={emailPlaceholder}
                  className="flex-1 px-5 py-3.5 rounded-lg text-white placeholder:text-white/40 outline-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    fontFamily: "Inter, sans-serif",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={ctaButton.onClick}
                  className="px-8 py-3.5 rounded-lg font-semibold transition-all"
                  style={{
                    background: "#C4FF0D",
                    color: "#000000",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {ctaButton.label}
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Right Content - Wallet & Coins */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-[500px]"
          >
            {/* Wallet Image */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {walletImage}
            </motion.div>

            {/* Floating Crypto Coins */}
            {cryptoCoins.map((coin, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  width: `${coin.size}px`,
                  height: `${coin.size}px`,
                  left: coin.position.x,
                  top: coin.position.y,
                  background:
                    "linear-gradient(135deg, #C4FF0D 0%, #8BC34A 100%)",
                  boxShadow: "0 10px 40px rgba(196, 255, 13, 0.4)",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: [0, -20, 0],
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 + coin.delay },
                  y: {
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {coin.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Brand Logos */}
      {brands.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-0 right-0 z-20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-12 flex-wrap opacity-40">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="transition-all"
                >
                  {brand.logo}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
