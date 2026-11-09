// GradientBackground — "Sunset Orb", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=2389ca2f-5232-48d2-af54-00d58fb5d063
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
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.030'/></svg>\"), radial-gradient(100% 50% at 50% 70%, #fff3d7 0.0%, #FFF1CF 23.8%, #EB6101 51.4%, #B7282E 79.0%, rgba(183, 40, 46, 0) 85.3%), radial-gradient(42% 19% at 50% 70%, rgba(255, 246, 224, 0.396) 0%, rgba(255, 241, 207, 0.15400000000000003) 38%, rgba(255, 241, 207, 0) 72%), radial-gradient(53% 29% at 50% 70%, rgba(235, 97, 1, 0.14300000000000002) 0%, rgba(235, 97, 1, 0) 80%)",
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
        <filter id="grain-2389ca2f">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-2389ca2f)" />
      </svg>
    </div>
  )
}
