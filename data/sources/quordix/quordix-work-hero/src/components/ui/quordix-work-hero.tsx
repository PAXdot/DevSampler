"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
  useInView,
} from "framer-motion";

/* ─────────────────────────────────────────────
   Inline useTouch hook
───────────────────────────────────────────── */
function useTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const check = () => setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isTouch;
}

/* ─────────────────────────────────────────────
   Styles — always light, never inherits dark mode
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&display=swap');

  .wh-shell, .wh-shell *, .wh-shell *::before, .wh-shell *::after {
    box-sizing: border-box;
  }
  .wh-shell {
    font-family: 'Space Grotesk', sans-serif;
    color-scheme: light;
    background: #ffffff;
    color: #0f172a;
  }

  /* ── Navbar ── */
  .wh-nav-wrap {
    position: fixed; top: 16px; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: center; padding: 0 16px;
  }
  .wh-nav-pill {
    width: 100%; max-width: 56rem;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(251,146,60,0.25);
    border-radius: 9999px;
    box-shadow: 0 8px 32px rgba(234,88,12,0.07);
    padding: 8px 20px;
    display: flex; align-items: center; justify-content: space-between;
    transition: all 300ms;
  }
  .wh-logo-svg { width: 7rem; height: auto; flex-shrink: 0; }
  .wh-nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; margin: 0; padding: 0; }
  .wh-nav-link { font-size: 0.875rem; font-weight: 500; color: #475569; text-decoration: none; transition: color 200ms, transform 200ms; }
  .wh-nav-link:hover { color: #ea580c; transform: scale(1.08); }
  .wh-nav-cta {
    display: inline-flex; align-items: center;
    padding: 8px 20px; font-size: 0.75rem; font-weight: 700;
    color: #fff; background: #0f172a; border-radius: 9999px;
    text-decoration: none; white-space: nowrap;
    transition: background 200ms, transform 200ms, box-shadow 200ms;
    box-shadow: 0 4px 14px rgba(15,23,42,0.15);
  }
  .wh-nav-cta:hover { background: #ea580c; transform: scale(1.05); }
  .wh-hamburger {
    display: none; background: none; border: none; cursor: pointer;
    padding: 4px; color: #0f172a; flex-direction: column; gap: 5px;
    z-index: 110; position: relative;
  }
  .wh-hamburger span { display: block; width: 22px; height: 2px; background: currentColor; border-radius: 2px; transition: transform 250ms, opacity 250ms; }
  .wh-mobile-overlay {
    position: fixed; inset: 0; z-index: 90;
    background: rgba(255,255,255,0.97); backdrop-filter: blur(16px);
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem;
    opacity: 0; pointer-events: none; transition: opacity 200ms;
  }
  .wh-mobile-overlay.open { opacity: 1; pointer-events: auto; }
  .wh-mobile-link { font-size: 1.75rem; font-weight: 700; color: #0f172a; text-decoration: none; transition: color 200ms; }
  .wh-mobile-link:hover { color: #ea580c; }
  .wh-mobile-cta { margin-top: 2rem; padding: 12px 32px; font-size: 1.125rem; font-weight: 700; color: #fff; background: #0f172a; border-radius: 9999px; text-decoration: none; transition: background 200ms; }
  .wh-mobile-cta:hover { background: #ea580c; }
  @media (max-width: 767px) {
    .wh-nav-links, .wh-nav-cta { display: none; }
    .wh-hamburger { display: flex; }
  }

  /* ── Orbit rings ── */
  @keyframes wh-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes wh-orbit-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
  .wh-orbit { will-change: transform; }
`;

/* ─────────────────────────────────────────────
   Shared animation types
───────────────────────────────────────────── */
interface AnimationItem {
  id: string;
  type: "letter" | "word";
  centerRef: React.MutableRefObject<{ x: number; y: number }>;
  motionValues: Record<string, any>;
  radius: number;
  force?: number;
}

/* ─────────────────────────────────────────────
   MagneticLetter — each character in the heading
───────────────────────────────────────────── */
function MagneticLetter({
  children,
  registar,
  id,
}: {
  children: string;
  registar: (item: AnimationItem) => () => void;
  id: string;
}) {
  const letterRef = useRef<HTMLSpanElement>(null);
  const centerRef = useRef({ x: 0, y: 0 });

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const motionValues = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
    skewX: useSpring(0, springConfig),
    scale: useSpring(1, springConfig),
  };

  useEffect(() => {
    const updateCache = () => {
      if (letterRef.current) {
        const rect = letterRef.current.getBoundingClientRect();
        centerRef.current = {
          x: rect.left + rect.width / 2 + window.scrollX,
          y: rect.top + rect.height / 2 + window.scrollY,
        };
      }
    };
    updateCache();
    window.addEventListener("resize", updateCache);
    const unregister = registar({ id, type: "letter", centerRef, motionValues, radius: 250, force: 0.4 });
    return () => {
      window.removeEventListener("resize", updateCache);
      unregister();
    };
  }, []);

  return (
    <motion.span
      ref={letterRef}
      style={{ x: motionValues.x, y: motionValues.y, skewX: motionValues.skewX, scale: motionValues.scale, display: "inline-block", willChange: "transform" }}
    >
      {children}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   WeightWord — variable-weight subtitle words
───────────────────────────────────────────── */
function WeightWord({
  word,
  id,
  registar,
  isSpecial,
}: {
  word: string;
  id: string;
  registar: (item: AnimationItem) => () => void;
  isSpecial: boolean;
}) {
  const wordRef = useRef<HTMLSpanElement>(null);
  const centerRef = useRef({ x: 0, y: 0 });

  const springConfig = { stiffness: 80, damping: 20 };
  const motionValues = {
    weight: useSpring(300, springConfig),
    opacity: useSpring(0.7, springConfig),
  };

  useEffect(() => {
    const updateCache = () => {
      if (wordRef.current) {
        const rect = wordRef.current.getBoundingClientRect();
        centerRef.current = {
          x: rect.left + rect.width / 2 + window.scrollX,
          y: rect.top + rect.height / 2 + window.scrollY,
        };
      }
    };
    updateCache();
    window.addEventListener("resize", updateCache);
    const unregister = registar({ id, type: "word", centerRef, motionValues, radius: 150 });
    return () => {
      window.removeEventListener("resize", updateCache);
      unregister();
    };
  }, []);

  return (
    <motion.span
      ref={wordRef}
      style={{
        fontWeight: motionValues.weight,
        opacity: motionValues.opacity,
        color: isSpecial ? "#f97316" : "#0f172a",
        willChange: "font-weight, opacity",
      }}
      className="inline-block mx-[0.15em] transition-colors duration-700"
    >
      {word}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────
   Inline Navbar (no Next.js deps)
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Work", href: "#" },
  { label: "Services", href: "#" },
  { label: "Team", href: "#" },
  { label: "Contact", href: "#" },
];

function QuordixLogo() {
  return (
    <svg viewBox="0 0 669 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="wh-logo-svg" role="img" aria-label="Quordix">
      <path fill="#0f172a" d="M392.152 86.976H370.136V136H352.6V72H367.064L370.136 77.248L379.224 72H392.152V86.976ZM419.823 71.36H436.591L445.679 76.608V42.56H463.215V136.64H448.751L445.679 131.392L436.591 136.64H419.823L404.975 128.064V79.936L419.823 71.36ZM445.679 121.664V86.336H422.511V121.664H445.679ZM500.011 72V136H482.475V72H500.011ZM481.835 60.096V42.56H500.651V60.096H481.835ZM511.545 136L534.841 103.36L512.313 72H531.385L543.929 90.048L556.473 72H575.545L552.889 103.36L576.313 136H557.497L543.929 116.8L530.361 136H511.545Z" />
      <path fill="#0f172a" d="M28.8 63.12V123.28H62.72V63.12H28.8ZM46.592 138.64H25.728L10.88 130.064V56.336L25.728 47.76H65.792L80.64 56.336V130.064L65.792 138.64L80.256 163.6H60.672L46.592 138.64ZM101.1 130.064V74H118.636V123.664H140.524V74H158.06V138.64H143.596L140.524 133.392L131.436 138.64H115.948L101.1 130.064Z" />
      <path stroke="#F97316" d="M237.18 47L188 92.7119L237.18 140" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
      <path stroke="#F97316" d="M271 140L320.18 94.2881L271 47" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
      <path stroke="#F97316" d="M602 128H661" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuordixNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="wh-nav-wrap">
        <div className="wh-nav-pill">
          <a href="#" style={{ display: "block", textDecoration: "none" }}><QuordixLogo /></a>
          <nav aria-label="Main Navigation">
            <ul className="wh-nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.label}><a href={l.href} className="wh-nav-link">{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="#" className="wh-nav-cta">Let's Talk</a>
            <button className="wh-hamburger" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              <span style={{ transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          </div>
        </div>
      </header>
      <div className={`wh-mobile-overlay${open ? " open" : ""}`} role="dialog" aria-modal="true">
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href} className="wh-mobile-link" onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#" className="wh-mobile-cta">Let's Talk</a>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Orbit ring config — matches original exactly
───────────────────────────────────────────── */
const RINGS = [
  { size: 35,  border: "1px", opacity: 0.10, speed: 60,   satellite: true,  color: "slate"  },
  { size: 55,  border: "1px", opacity: 0.05, speed: -80,  satellite: false, color: "slate"  },
  { size: 85,  border: "2px", opacity: 0.10, speed: 120,  satellite: true,  color: "orange" },
  { size: 120, border: "1px", opacity: 0.03, speed: -150, satellite: true,  color: "slate"  },
];

/* ─────────────────────────────────────────────
   Main WorkHero section
───────────────────────────────────────────── */
function WorkHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1 });

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const itemsRef = useRef<Map<string, AnimationItem>>(new Map());
  const isTouch = useTouch();

  const handleMouseMove = (e: React.MouseEvent) => { mouseX.set(e.pageX); mouseY.set(e.pageY); };
  const handleMouseLeave = () => { mouseX.set(-1000); mouseY.set(-1000); };
  const handleTouchStart = (e: React.TouchEvent) => { if (e.touches[0]) { mouseX.set(e.touches[0].pageX); mouseY.set(e.touches[0].pageY); } };
  const handleTouchMove = (e: React.TouchEvent) => { if (e.touches[0]) { mouseX.set(e.touches[0].pageX); mouseY.set(e.touches[0].pageY); } };
  const handleTouchEnd = () => { mouseX.set(-1000); mouseY.set(-1000); };

  const registerItem = (item: AnimationItem) => {
    itemsRef.current.set(item.id, item);
    return () => itemsRef.current.delete(item.id);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useAnimationFrame(() => {
    if (!isInView) return;
    const currentMouseX = mouseX.get();
    const currentMouseY = mouseY.get();
    const isInteracting = currentMouseX !== -1000;
    const mx = isTouch && !isInteracting ? (containerRef.current?.offsetWidth || 0) / 2 : currentMouseX;
    const my = isTouch && !isInteracting
      ? (containerRef.current?.getBoundingClientRect().top || 0) + window.innerHeight / 2 + window.scrollY
      : currentMouseY;
    const yOffset = yText.get();

    itemsRef.current.forEach((item) => {
      if (!item.centerRef.current.x) return;
      const dx = mx - item.centerRef.current.x;
      const dy = my - (item.centerRef.current.y + yOffset);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (item.type === "letter") {
        if (distance < item.radius) {
          const power = (item.radius - distance) / item.radius;
          const force = item.force || 0.4;
          item.motionValues.x.set(dx * power * force);
          item.motionValues.y.set(dy * power * force);
          item.motionValues.skewX.set(dx * power * 0.1);
          item.motionValues.scale.set(1 + power * 0.15);
        } else {
          item.motionValues.x.set(0);
          item.motionValues.y.set(0);
          item.motionValues.skewX.set(0);
          item.motionValues.scale.set(1);
        }
      } else if (item.type === "word") {
        if (distance < item.radius) {
          const power = (item.radius - distance) / item.radius;
          item.motionValues.weight.set(300 + power * 400);
          item.motionValues.opacity.set(0.7 + power * 0.3);
        } else {
          item.motionValues.weight.set(300);
          item.motionValues.opacity.set(0.7);
        }
      }
    });
  });

  const title1 = "PREVIOUS";
  const title2 = "WORK";
  const subtitle = "A collection of web and mobile applications designed and built for real business needs. Simple, secure, and built to perform.";

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#ffffff",
        colorScheme: "light" as React.CSSProperties["colorScheme"],
        cursor: "default",
        touchAction: "pan-y",
        contain: "layout paint",
        userSelect: "none",
      }}
    >
      {/* Background orbit rings */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        {/* Orange centre glow */}
        <div style={{ position: "absolute", width: "60vh", height: "60vh", background: "rgba(255,237,213,0.5)", borderRadius: "9999px", filter: "blur(48px)", opacity: 0.6, transform: "translateZ(0)" }} />

        {RINGS.map((ring, i) => (
          <div
            key={i}
            className="wh-orbit"
            style={{
              position: "absolute",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: `${ring.size}vh`,
              height: `${ring.size}vh`,
              borderWidth: ring.border,
              borderStyle: "solid",
              borderColor: ring.color === "orange"
                ? `rgba(249,115,22,${ring.opacity})`
                : `rgba(15,23,42,${ring.opacity})`,
              animation: `${ring.speed > 0 ? "wh-orbit" : "wh-orbit-rev"} ${Math.abs(ring.speed)}s linear infinite`,
            }}
          >
            {ring.satellite && (
              <div style={{
                position: "absolute",
                top: 0,
                transform: "translateY(-50%)",
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                background: ring.color === "orange" ? "#f97316" : "#cbd5e1",
                boxShadow: ring.color === "orange" ? "0 0 8px rgba(249,115,22,0.6)" : "none",
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Content — parallax fades on scroll */}
      <motion.div
        style={{ y: yText, opacity: opacityFade }}
        className="relative z-20 flex flex-col items-center text-center px-4"
      >
        {/* "Selected Projects" label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}
        >
          <span style={{ width: "2rem", height: "1px", background: "#fb923c", display: "block" }} />
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", fontWeight: 700, color: "#f97316", letterSpacing: "0.5em", textTransform: "uppercase" }}>
            Selected Projects
          </span>
          <span style={{ width: "2rem", height: "1px", background: "#fb923c", display: "block" }} />
        </motion.div>

        {/* PREVIOUS WORK heading */}
        <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 0.85, fontWeight: 900, letterSpacing: "-0.03em", userSelect: "none", margin: 0 }}>
          {/* PREVIOUS — dark */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
            style={{ display: "flex", gap: "0.02em", fontSize: "clamp(3rem, 10vw, 7rem)", color: "#0f172a", marginBottom: "0.1em" }}
          >
            {title1.split("").map((char, i) => (
              <motion.span
                key={`t1-${i}`}
                variants={{
                  initial: { y: "100%", opacity: 0 },
                  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <MagneticLetter id={`char-1-${i}`} registar={registerItem}>{char}</MagneticLetter>
              </motion.span>
            ))}
          </motion.div>

          {/* WORK — orange */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } } }}
            style={{ display: "flex", gap: "0.05em", fontSize: "clamp(3rem, 10vw, 7rem)", color: "#f97316", paddingTop: "0.25em", paddingBottom: "0.25em" }}
          >
            {title2.split("").map((char, i) => (
              <motion.span
                key={`t2-${i}`}
                variants={{
                  initial: { y: "100%", opacity: 0 },
                  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <MagneticLetter id={`char-2-${i}`} registar={registerItem}>{char}</MagneticLetter>
              </motion.span>
            ))}
          </motion.div>
        </h1>

        {/* Subtitle — variable-weight words */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ marginTop: "1.5rem", maxWidth: "42rem", fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", letterSpacing: "0.02em", lineHeight: 1.7, display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {subtitle.split(" ").map((word, i) => {
            const isSpecial = ["precision", "passion", "scalability"].includes(
              word.toLowerCase().replace(/[^a-z]/g, "")
            );
            return (
              <WeightWord key={i} id={`word-${i}`} word={word} registar={registerItem} isSpecial={isSpecial} />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Root export
───────────────────────────────────────────── */
export default function QuordixWorkHero() {
  return (
    <div
      className="wh-shell"
      style={{
        position: "relative",
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#ffffff",
        colorScheme: "light" as React.CSSProperties["colorScheme"],
      }}
    >
      <style>{STYLES}</style>
      <QuordixNavbar />
      <WorkHeroSection />
    </div>
  );
}
