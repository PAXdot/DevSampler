import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  CSSProperties,
} from "react";

function LiquidImageLoader({
  src,
  alt = "",
  liquidColor = "#1e3a8a",
  revealDuration = 1200,
  loadingDelay = 500,
  className = "",
  width = 800,
  height = 600,
  revealDirection = "down",
  distortion = 50,
  waviness = 0.02,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [canReveal, setCanReveal] = useState(false);
  const loadStartTime = useRef(Date.now());
  const filterId = useMemo(
    () => `liquid-filter-${Math.random().toString(36).substring(7)}`,
    [],
  );

  const dimensions = useMemo(
    () => ({
      width: parseInt(String(width)),
      height: parseInt(String(height)),
    }),
    [width, height],
  );

  const transformOrigin = useMemo(
    () => (revealDirection === "down" ? "top" : "bottom"),
    [revealDirection],
  );

  useEffect(() => {
    if (!src) return;
    let isMounted = true;
    const img = new Image();
    img.src = src;

    const onImageLoad = () => {
      if (!isMounted) return;
      const elapsed = Date.now() - loadStartTime.current;
      const wait = Math.max(0, loadingDelay - elapsed);
      setIsLoaded(true);
      setTimeout(() => setCanReveal(true), wait);
    };

    img.onload = onImageLoad;
    if (img.complete) onImageLoad();

    return () => {
      isMounted = false;
    };
  }, [src, loadingDelay]);

  const overlayStyle = useMemo(
    () => ({
      position: "absolute",
      inset: 0,
      zIndex: 10,
      backgroundColor: liquidColor,
      filter: `url(#${filterId})`,
      transform: canReveal ? "scaleY(0)" : "scaleY(1)",
      transformOrigin,
      transition: `transform ${revealDuration}ms cubic-bezier(0.7, 0, 0.3, 1)`,
      willChange: "transform",
    }),
    [canReveal, liquidColor, transformOrigin, revealDuration, filterId],
  );

  const imageStyle = useMemo(
    () => ({
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 600ms ease-in",
      willChange: "opacity",
    }),
    [isLoaded],
  );

  return (
    <div
      className={`liquid-container ${className}`}
      style={{
        width,
        height,
        aspectRatio: `${dimensions.width} / ${dimensions.height}`,
        backgroundColor: "#f0f0f0",
      }}
    >
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${waviness} ${waviness / 2}`}
              numOctaves="1"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={distortion}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <img src={src} alt={alt} style={imageStyle} aria-hidden={!isLoaded} />
      <div style={overlayStyle} />
    </div>
  );
}

export default LiquidImageLoader;
