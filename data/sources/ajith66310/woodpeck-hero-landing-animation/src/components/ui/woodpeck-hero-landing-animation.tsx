/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface NavLinkItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface FluidHeroNavbarProps {
  /** Brand text to display during intro splash and in navbar. Defaults to "woodpeck" */
  brandName?: string;
  /** Optional custom logo node to override the default text wordmark */
  brandLogo?: React.ReactNode;
  /** Optional background video URL if video hero is preferred */
  videoSrc?: string;
  /** High-resolution Pexels hero background image URL */
  heroImage?: string;
  /** First line of hero headline. Defaults to "High-performance architectural living" */
  headlineFirst?: string;
  /** Second line of hero headline. Defaults to "engineered for vision." */
  headlineSecond?: string;
  /** Optional kicker tag/subtitle above headline */
  headlineKicker?: string;
  /** Call to action button label in navbar */
  ctaText?: string;
  /** Call to action link */
  ctaHref?: string;
  /** Navigation links array */
  navLinks?: NavLinkItem[];
  /** Whether to play the fluid.glass intro splash animation. Defaults to true */
  showIntroAnimation?: boolean;
  /** Whether to render the floating responsive navbar. Defaults to true */
  showNavbar?: boolean;
  /** Primary accent color (hex, rgb, hsl). Defaults to #1367bb */
  accentColor?: string;
  /** Optional custom class name for the outermost container */
  className?: string;
  /** Callback fired when the intro animation completes */
  onIntroComplete?: () => void;
  /** Callback fired when the hero entrance animation finishes */
  onHeroComplete?: () => void;
}

// ============================================================================
// Self-Contained Vector Icons & Emblems
// ============================================================================

/** Full symmetrical 5-pointed architectural star emblem */
export function StarLogo({
  className = '',
  style = {},
  fill = 'currentColor',
  size = 48,
}: {
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  size?: number | string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      width={size}
      height={size}
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="12,1.75 15.22,8.27 22.42,9.32 17.21,14.4 18.44,21.57 12,18.18 5.56,21.57 6.79,14.4 1.58,9.32 8.78,8.27" />
    </svg>
  );
}

/** Geometric gable roofline triangle mark (▲ dot symbol in aroof wordmark) */
export function RoofMark({
  className = '',
  style = {},
  fill = 'currentColor',
  width = '0.12em',
  height = '0.08em',
}: {
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  width?: number | string;
  height?: number | string;
}) {
  return (
    <svg
      viewBox="0 0 140 60"
      width={width}
      height={height}
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'baseline',
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="70,4 136,56 4,56" fill={fill} />
    </svg>
  );
}

function SpeakerMutedIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function SpeakerActiveIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function MenuIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ============================================================================
// Brand Wordmark Renderer
// ============================================================================

export function BrandWordmark({
  brandName = 'woodpeck',
  accentColor = '#1367bb',
  isScrolled = false,
}: {
  brandName?: string;
  accentColor?: string;
  isScrolled?: boolean;
}) {
  const isAroof = brandName.toLowerCase() === 'aroof';

  return (
    <div className="flex items-center select-none group">
      {/* Brand text */}
      <div
        className={`flex items-baseline font-semibold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
          isScrolled ? 'text-neutral-900' : 'text-white'
        }`}
        style={{ fontFamily: "var(--font-aeonik-pro, system-ui, -apple-system, sans-serif)" }}
      >
        {isAroof ? (
          <>
            <span>a</span>
            <RoofMark
              fill={isScrolled ? accentColor : '#ffffff'}
              width="0.16em"
              height="0.1em"
              style={{
                marginLeft: '0.08em',
                marginRight: '0.04em',
                verticalAlign: 'baseline',
              }}
            />
            <span>roof</span>
          </>
        ) : (
          <span>{brandName}</span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// Subcomponent 1: fluid.glass Intro Animation (Fully Responsive)
// ============================================================================

interface IntroOverlayProps {
  brandName: string;
  accentColor: string;
  onComplete: () => void;
}

function IntroOverlay({ brandName, accentColor, onComplete }: IntroOverlayProps) {
  // Stages:
  // 1: initial state (star dead center)
  // 2: star scales and rotates in center (100ms)
  // 3: star shifts left while letters emerge one by one (1200ms)
  // 4: hold lockup, then dissolve and notify hero (2400ms)
  // 5: unmount overlay (3400ms)
  const [stage, setStage] = useState(1);
  const [unmounted, setUnmounted] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 100);
    const t2 = setTimeout(() => setStage(3), 1200);
    const t3 = setTimeout(() => {
      setStage(4);
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('intro-animation-complete'));
      }
    }, 2400);
    const t4 = setTimeout(() => {
      setStage(5);
      setUnmounted(true);
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (unmounted) return null;

  const isAnimating = stage >= 2;
  const isRevealed = stage >= 3;
  const isFading = stage >= 4;

  const isAroof = brandName.toLowerCase() === 'aroof';
  const letters = isAroof ? ['a', 'r', 'o', 'o', 'f'] : brandName.split('');

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white flex items-center justify-center overflow-hidden px-4 select-none transition-all duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
        isFading ? 'opacity-0 scale-[1.02] invisible pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
      }`}
      aria-hidden={isFading}
    >
      <div
        className={`flex items-center justify-center relative h-12 sm:h-16 md:h-20 max-w-full transition-all duration-[1050ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform ${
          isRevealed ? 'translate-x-0' : 'translate-x-10 sm:translate-x-16 md:translate-x-20'
        } ${isFading ? '-translate-y-[20vh] sm:-translate-y-[28vh] opacity-0 duration-[1100ms]' : ''}`}
      >
        {/* Animated Full Star Emblem */}
        <div className="relative w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
          <div
            className={`w-full h-full flex items-center justify-center will-change-transform ${
              isAnimating ? 'fluid-star-intro' : 'scale-[0.12] opacity-0'
            }`}
          >
            <StarLogo fill={accentColor} size="100%" />
          </div>
        </div>

        {/* Wordmark characters revealed one-by-one */}
        <div className="flex items-center ml-2.5 sm:ml-4 h-12 sm:h-16 md:h-20 overflow-hidden">
          {letters.map((char, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden h-10 sm:h-14 md:h-16 leading-[2.5rem] sm:leading-[3.5rem] md:leading-[4rem] align-middle"
            >
              <span
                className={`inline-block font-medium text-[clamp(1.75rem,5.5vw,3.25rem)] tracking-[-0.03em] text-neutral-900 transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                  isRevealed ? 'translate-y-0' : 'translate-y-[135%]'
                }`}
                style={{
                  transitionDelay: `${120 + index * 60}ms`,
                  fontFamily: "var(--font-aeonik-pro, system-ui, -apple-system, sans-serif)",
                }}
              >
                {char}
                {isAroof && index === 0 && (
                  <RoofMark
                    fill="currentColor"
                    width="0.12em"
                    height="0.08em"
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'baseline',
                      marginLeft: '0.08em',
                      marginRight: '0.01em',
                    }}
                  />
                )}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Subcomponent 2: Floating Responsive Navbar
// ============================================================================

interface NavbarProps {
  brandName: string;
  brandLogo?: React.ReactNode;
  navLinks: NavLinkItem[];
  ctaText: string;
  ctaHref: string;
  visible: boolean;
  accentColor: string;
}

function FloatingNavbar({
  brandName,
  brandLogo,
  navLinks,
  ctaText,
  ctaHref,
  visible,
  accentColor,
}: NavbarProps) {
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleSelect = (name: string) => {
    setActiveItem(name);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1002] px-4 sm:px-8 xl:px-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
          visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-6 pointer-events-none'
        } ${
          mobileMenuOpen
            ? 'bg-transparent border-b border-transparent py-4 sm:py-5'
            : scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.06)] py-2.5 sm:py-3.5'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          className="flex items-center gap-2 outline-none select-none"
          aria-label={`${brandName} Home`}
        >
          {brandLogo ? (
            brandLogo
          ) : (
            <BrandWordmark
              brandName={brandName}
              accentColor={accentColor}
              isScrolled={mobileMenuOpen ? false : scrolled}
            />
          )}
        </a>

        {/* Desktop Nav Links (Visible on lg screens 1024px+, hidden on mobile/tablet) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 list-none m-0 p-0 ml-auto mr-5 xl:mr-8">
          {navLinks.map((link) => {
            const isActive = activeItem === link.name;
            return (
              <div key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => handleSelect(link.name)}
                  className={`text-xs xl:text-sm tracking-wide font-medium transition-all duration-300 py-1 inline-block ${
                    scrolled
                      ? isActive
                        ? 'text-neutral-900 font-semibold'
                        : 'text-neutral-600 hover:text-neutral-950'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={{ fontFamily: "var(--font-aeonik-pro, system-ui, -apple-system, sans-serif)" }}
                >
                  {link.name}
                </a>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href={ctaHref}
            className={`px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-[11px] xl:text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow hover:scale-105 active:scale-95 ${
              scrolled
                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                : 'bg-white/90 backdrop-blur-md text-neutral-900 hover:bg-white'
            }`}
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors z-[1002] ${
            mobileMenuOpen
              ? 'text-white hover:bg-white/10'
              : scrolled
              ? 'text-neutral-900 hover:bg-black/5'
              : 'text-white hover:bg-white/10'
          }`}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile Drawer Menu (Accessible and responsive on all mobile viewports & orientations) */}
      <div
        className={`fixed inset-0 z-[1001] lg:hidden bg-neutral-950/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center items-center px-6 sm:px-10 py-12 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="flex flex-col gap-4 sm:gap-6 list-none m-0 p-0 text-center w-full max-w-sm my-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleSelect(link.name)}
                className={`block py-1.5 text-xl sm:text-2xl font-light tracking-tight transition-colors duration-200 ${
                  activeItem === link.name ? 'text-white font-medium' : 'text-white/70 hover:text-white'
                }`}
                style={{ fontFamily: "var(--font-aeonik-pro, system-ui, -apple-system, sans-serif)" }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 sm:pt-6">
            <a
              href={ctaHref}
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white text-neutral-900 shadow-xl transition-transform active:scale-95 text-center"
            >
              {ctaText}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

// ============================================================================
// Subcomponent 3: Full Screen Fluid Hero Banner (Fully Responsive)
// ============================================================================

interface HeroBannerProps {
  stage: 'idle' | 'animating' | 'done';
  videoSrc?: string;
  heroImage: string;
  headlineFirst: string;
  headlineSecond: string;
  headlineKicker?: string;
}

function HeroBannerSection({
  stage,
  videoSrc,
  heroImage,
  headlineFirst,
  headlineSecond,
  headlineKicker,
}: HeroBannerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [stage]);

  const frameClass =
    stage === 'animating'
      ? 'fluid-hero-animating'
      : stage === 'done'
      ? 'translate-y-0 scale-100 opacity-100'
      : 'translate-y-[105vh] scale-[0.78] opacity-0';

  const shouldRenderVideo = Boolean(videoSrc && !videoError);

  return (
    <section className="relative w-full h-[100dvh] min-h-[500px] overflow-hidden bg-white flex items-center justify-center">
      <div
        className={`relative w-full h-full overflow-hidden origin-center will-change-transform ${frameClass}`}
      >
        {/* Background Visual Layer with Counter-Scale */}
        <div
          className={`absolute inset-0 w-full h-full overflow-hidden will-change-transform ${
            stage === 'animating' ? 'fluid-media-counter-scale' : 'scale-100'
          }`}
        >
          {shouldRenderVideo ? (
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={heroImage}
              alt="Woodpeck Architectural Living"
              className="w-full h-full object-cover object-center select-none"
              loading="eager"
            />
          )}

          {/* Luxury dark gradient tint overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-[2]" />
        </div>

        {/* Center Architectural Headline (Responsive clamp across all screens, strictly 2 lines on lg+) */}
        <div className="absolute inset-0 z-[3] flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 pointer-events-none max-w-5xl lg:max-w-7xl mx-auto">
          {headlineKicker && (
            <div className="overflow-hidden mb-2 sm:mb-3">
              <span
                className={`inline-block text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-white/80 transition-transform duration-700 ease-out will-change-transform ${
                  stage !== 'idle' ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                {headlineKicker}
              </span>
            </div>
          )}

          <div className="overflow-hidden block max-w-full">
            <h1
              className={`text-white font-normal text-[clamp(1.65rem,4.2vw,4.5rem)] lg:text-[clamp(2.25rem,3.6vw,4.25rem)] tracking-[-0.03em] leading-[1.15] sm:leading-[1.08] m-0 max-w-[92vw] sm:max-w-4xl lg:max-w-none break-words lg:break-normal lg:whitespace-nowrap transition-transform duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                stage !== 'idle' ? 'translate-y-0' : 'translate-y-[120%]'
              }`}
              style={{
                transitionDelay: '0.55s',
                fontFamily: "var(--font-aeonik-pro, system-ui, -apple-system, sans-serif)",
              }}
            >
              {headlineFirst}
            </h1>
          </div>

          <div className="overflow-hidden block max-w-full mt-1 sm:mt-1.5">
            <p
              className={`text-white/95 font-normal text-[clamp(1.65rem,4.2vw,4.5rem)] lg:text-[clamp(2.25rem,3.6vw,4.25rem)] tracking-[-0.03em] leading-[1.15] sm:leading-[1.08] m-0 max-w-[92vw] sm:max-w-4xl lg:max-w-none break-words lg:break-normal lg:whitespace-nowrap transition-transform duration-[1050ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                stage !== 'idle' ? 'translate-y-0' : 'translate-y-[120%]'
              }`}
              style={{
                transitionDelay: '0.72s',
                fontFamily: "var(--font-aeonik-pro, system-ui, -apple-system, sans-serif)",
              }}
            >
              {headlineSecond}
            </p>
          </div>
        </div>

        {/* Audio Mute/Unmute Control (only rendered if video is active) */}
        {shouldRenderVideo && (
          <button
            type="button"
            onClick={toggleAudio}
            className={`absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white flex items-center justify-center cursor-pointer outline-none transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-black/70 shadow-lg ${
              stage !== 'idle' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
            }`}
            aria-label={isMuted ? 'Turn audio on' : 'Turn audio off'}
            title={isMuted ? 'Turn audio on' : 'Turn audio off'}
          >
            {isMuted ? <SpeakerMutedIcon /> : <SpeakerActiveIcon />}
          </button>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// Main Combined Component for 21st.dev
// ============================================================================

export default function FluidHeroNavbar({
  brandName = 'woodpeck',
  brandLogo,
  videoSrc,
  heroImage = 'https://cdn.21st.dev/assets/mirror/34/34a652ecb244365c77a1fab517eb2f509b95db81dbeab5c3529be8ffe24fc6fc.jpg',
  headlineFirst = 'High-performance architectural living',
  headlineSecond = 'engineered for vision.',
  headlineKicker = '',
  ctaText = 'Inquire',
  ctaHref = '#contact',
  navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Installation', href: '#installation' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Contact', href: '#contact' },
  ],
  showIntroAnimation = true,
  showNavbar = true,
  accentColor = '#1367bb',
  className = '',
  onIntroComplete,
  onHeroComplete,
}: FluidHeroNavbarProps) {
  // Hero stages: 'idle' -> 'animating' -> 'done'
  const [stage, setStage] = useState<'idle' | 'animating' | 'done'>(
    showIntroAnimation ? 'idle' : 'done'
  );
  const [navbarVisible, setNavbarVisible] = useState(!showIntroAnimation);

  const startHeroAnimation = useCallback(() => {
    setStage('animating');

    setTimeout(() => {
      setStage('done');
      setNavbarVisible(true);
      if (onHeroComplete) onHeroComplete();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('hero-animation-complete'));
      }
    }, 1350);
  }, [onHeroComplete]);

  const handleIntroComplete = useCallback(() => {
    if (onIntroComplete) onIntroComplete();
    startHeroAnimation();
  }, [onIntroComplete, startHeroAnimation]);

  useEffect(() => {
    if (!showIntroAnimation) return;

    // Safety fallback timer if intro completes or is skipped
    const fallbackTimer = setTimeout(() => {
      startHeroAnimation();
    }, 2800);

    return () => clearTimeout(fallbackTimer);
  }, [showIntroAnimation, startHeroAnimation]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Self-contained CSS Animation Keyframes for 21st.dev compatibility */}
      <style>{`
        @keyframes fluidHeroEntrance {
          0% {
            transform: translateY(105vh) scale(0.78);
            opacity: 0.4;
            border-radius: 14px;
          }
          38% {
            transform: translateY(0) scale(0.8);
            opacity: 1;
            border-radius: 8px;
          }
          50% {
            transform: translateY(0) scale(0.82);
            border-radius: 6px;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
            border-radius: 0px;
          }
        }

        @keyframes fluidMediaCounterScale {
          0% {
            transform: scale(1.18);
          }
          38% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes starIntro {
          0% {
            transform: scale(0.12) rotate(-160deg);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          75% {
            transform: scale(1.04) rotate(3deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .fluid-hero-animating {
          animation: fluidHeroEntrance 1.35s cubic-bezier(0.65, 0, 0.35, 1) forwards !important;
        }

        .fluid-media-counter-scale {
          animation: fluidMediaCounterScale 1.35s cubic-bezier(0.65, 0, 0.35, 1) forwards !important;
        }

        .fluid-star-intro {
          animation: starIntro 1.25s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
          transform-origin: center center;
        }
      `}</style>

      {/* Intro Splash Animation (fluid.glass style) */}
      {showIntroAnimation && (
        <IntroOverlay
          brandName={brandName}
          accentColor={accentColor}
          onComplete={handleIntroComplete}
        />
      )}

      {/* Floating Dynamic Navbar */}
      {showNavbar && (
        <FloatingNavbar
          brandName={brandName}
          brandLogo={brandLogo}
          navLinks={navLinks}
          ctaText={ctaText}
          ctaHref={ctaHref}
          visible={navbarVisible}
          accentColor={accentColor}
        />
      )}

      {/* Hero Banner with Counter-Scale Effect and Pexels Background */}
      <HeroBannerSection
        stage={stage}
        videoSrc={videoSrc}
        heroImage={heroImage}
        headlineFirst={headlineFirst}
        headlineSecond={headlineSecond}
        headlineKicker={headlineKicker}
      />
    </div>
  );
}
