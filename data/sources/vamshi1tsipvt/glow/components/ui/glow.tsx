// GradientBackground — "Glow", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=05f28281-3f2b-4891-a00c-0eb96522e378
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
        inset: 0,
        backgroundColor: "#F7F4EC",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.210'/></svg>\"), radial-gradient(100% 50% at 50% 70%, #d8586a 0.0%, #D0384E 20.4%, #E8B5BD 41.1%, #B1C2DE 61.8%, #2C5FB3 82.5%, rgba(44, 95, 179, 0) 85.3%), radial-gradient(42% 19% at 50% 70%, rgba(224, 126, 140, 0.396) 0%, rgba(208, 56, 78, 0.15400000000000003) 38%, rgba(208, 56, 78, 0) 72%), radial-gradient(53% 29% at 50% 70%, rgba(232, 181, 189, 0.14300000000000002) 0%, rgba(232, 181, 189, 0) 80%)",
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
          opacity: 0.210,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-05f28281">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-05f28281)" />
      </svg>
    </div>
  )
}
