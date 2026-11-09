// GradientBackground — "SUNRISE GLOW", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=0bc1d4c0-2ec9-4b8e-a300-51109bb5ca0e
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
        backgroundColor: "#9696E9",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.155'/></svg>\"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.752) 100%), radial-gradient(150% 56% at 43.11% 24%, rgba(116, 59, 38, 0.92) 0%, rgba(116, 59, 38, 0.7764800000000001) 15.63%, rgba(116, 59, 38, 0.46) 31.25%, rgba(116, 59, 38, 0.14352) 46.88%, rgba(116, 59, 38, 0) 62.5%), radial-gradient(150% 56% at 55.33% 94%, rgba(150, 150, 233, 0.92) 0%, rgba(150, 150, 233, 0.7764800000000001) 15.63%, rgba(150, 150, 233, 0.46) 31.25%, rgba(150, 150, 233, 0.14352) 46.88%, rgba(150, 150, 233, 0) 62.5%), radial-gradient(150% 56% at 55.16% 49%, rgba(178, 143, 206, 0.92) 0%, rgba(178, 143, 206, 0.7764800000000001) 15.63%, rgba(178, 143, 206, 0.46) 31.25%, rgba(178, 143, 206, 0.14352) 46.88%, rgba(178, 143, 206, 0) 62.5%), radial-gradient(150% 56% at 57.03% 6%, rgba(7, 7, 7, 0.92) 0%, rgba(7, 7, 7, 0.7764800000000001) 15.63%, rgba(7, 7, 7, 0.46) 31.25%, rgba(7, 7, 7, 0.14352) 46.88%, rgba(7, 7, 7, 0) 62.5%)",
        backgroundSize: "120px 120px, auto, auto, auto, auto, auto",
        backgroundBlendMode: "overlay, normal, normal, normal, normal, normal",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.155,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-0bc1d4c0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-0bc1d4c0)" />
      </svg>
    </div>
  )
}
