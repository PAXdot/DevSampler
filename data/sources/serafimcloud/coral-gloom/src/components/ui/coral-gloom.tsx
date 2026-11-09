// GradientBackground — "Coral Gloom", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=afb8254c-81aa-4dda-b7bf-01e7aa4dc8e3
export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        containerType: "size",
      }}
    >
      <div
        style={{
          position: "absolute",
        inset: "-0.8cqmin",
        filter: "blur(0.4cqmin)",
        backgroundColor: "#F7F4EC",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.030'/></svg>\"), radial-gradient(100% 50% at 50% 70%, #fcf5eb 0.0%, #FBF3E7 20.4%, #F4B3C2 41.1%, #E4676B 61.8%, #123A6B 82.5%, rgba(18, 58, 107, 0) 85.3%), radial-gradient(42% 19% at 50% 70%, rgba(252, 247, 239, 0.396) 0%, rgba(251, 243, 231, 0.15400000000000003) 38%, rgba(251, 243, 231, 0) 72%), radial-gradient(53% 29% at 50% 70%, rgba(244, 179, 194, 0.14300000000000002) 0%, rgba(244, 179, 194, 0) 80%)",
        backgroundSize: "120px 120px, auto, auto, auto",
        backgroundBlendMode: "overlay, normal, normal, normal",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.030,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-afb8254c">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-afb8254c)" />
      </svg>
    </div>
  )
}
