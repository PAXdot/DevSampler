import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";

function ShutterImageLoader({
  src,
  alt = "",
  shutterCount = 7,
  shutterColor = "#1f2937",
  shutterDuration = 600,
  staggerDelay = 80,
  loadingDelay = 500,
  className = "",
  width = 800,
  height = 600,
  revealDirection = "up",
  easing = "cubic-bezier(0.76, 0, 0.24, 1)",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [canReveal, setCanReveal] = useState(false);
  const loadStartTime = useRef(Date.now());

  const dimensions = useMemo(
    () => ({
      width: parseInt(String(width)),
      height: parseInt(String(height)),
    }),
    [width, height],
  );

  const shutters = useMemo(() => {
    return Array.from({ length: shutterCount }, (_, i) => ({
      id: i,
      delay: `${i * staggerDelay}ms`,
    }));
  }, [shutterCount, staggerDelay]);

  const transformOrigin = useMemo(
    () => (revealDirection === "up" ? "bottom" : "top"),
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

  const shutterStyle = useCallback(
    (delay) => ({
      flex: 1,
      height: "100%",
      backgroundColor: shutterColor,
      transform: canReveal ? "scaleY(0)" : "scaleY(1)",
      transformOrigin,
      transition: `transform ${shutterDuration}ms ${easing}`,
      transitionDelay: delay,
      willChange: "transform",
    }),
    [canReveal, shutterColor, shutterDuration, easing, transformOrigin],
  );

  return (
    <div
      className={`shutter-container ${className}`}
      style={{
        width,
        height,
        aspectRatio: `${dimensions.width} / ${dimensions.height}`,
        backgroundColor: shutterColor,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="shutter-image"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 400ms ease-in",
          transitionDelay: `${(staggerDelay * shutterCount) / 2}ms`,
        }}
        aria-hidden={!isLoaded}
      />
      <div className="shutter-overlay">
        {shutters.map(({ id, delay }) => (
          <div key={id} style={shutterStyle(delay)} />
        ))}
      </div>
    </div>
  );
}

export default ShutterImageLoader;
