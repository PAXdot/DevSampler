// GradientBackground — "Bloom Field gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=f9c99b22-18b0-463b-9bd3-10ce8d4f3af9
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
        backgroundColor: "#EBF6F7",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.500'/></svg>\"), radial-gradient(circle at 67.04% 45.93%, rgba(235, 246, 247, 1) 0%, rgba(235, 246, 247, 0.844) 19.02%, rgba(235, 246, 247, 0.5) 38.05%, rgba(235, 246, 247, 0.156) 57.07%, rgba(235, 246, 247, 0) 76.1%), radial-gradient(circle at 35.47% 65.92%, rgba(162, 215, 221, 1) 0%, rgba(162, 215, 221, 0.844) 12.03%, rgba(162, 215, 221, 0.5) 24.05%, rgba(162, 215, 221, 0.156) 36.08%, rgba(162, 215, 221, 0) 48.1%), radial-gradient(circle at 48.33% 20.11%, rgba(0, 163, 175, 1) 0%, rgba(0, 163, 175, 0.844) 16.75%, rgba(0, 163, 175, 0.5) 33.5%, rgba(0, 163, 175, 0.156) 50.25%, rgba(0, 163, 175, 0) 67%), radial-gradient(circle at 80.81% 88.03%, rgba(39, 74, 120, 1) 0%, rgba(39, 74, 120, 0.844) 10.28%, rgba(39, 74, 120, 0.5) 20.55%, rgba(39, 74, 120, 0.156) 30.83%, rgba(39, 74, 120, 0) 41.1%)",
        backgroundSize: "120px 120px, auto, auto, auto, auto",
        backgroundBlendMode: "overlay, normal, normal, normal, normal",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.500,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-f9c99b22">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-f9c99b22)" />
      </svg>
    </div>
  )
}
