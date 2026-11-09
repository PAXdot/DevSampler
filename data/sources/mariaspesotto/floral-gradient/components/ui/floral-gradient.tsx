// GradientBackground — "Floral Gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=2e06259a-5f48-4dc4-820b-6b9d8e3eeb59
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
        backgroundColor: "#E3C6BA",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.105'/></svg>\"), radial-gradient(circle at 78.73% 61.82%, rgba(227, 198, 186, 1) 0%, rgba(227, 198, 186, 0.844) 19.02%, rgba(227, 198, 186, 0.5) 38.05%, rgba(227, 198, 186, 0.156) 57.07%, rgba(227, 198, 186, 0) 76.1%), radial-gradient(circle at 36.12% 80.21%, rgba(193, 140, 134, 1) 0%, rgba(193, 140, 134, 0.844) 16.49%, rgba(193, 140, 134, 0.5) 32.98%, rgba(193, 140, 134, 0.156) 49.46%, rgba(193, 140, 134, 0) 65.95%), radial-gradient(circle at 68.19% 11.87%, rgba(155, 168, 148, 1) 0%, rgba(155, 168, 148, 0.844) 17.45%, rgba(155, 168, 148, 0.5) 34.9%, rgba(155, 168, 148, 0.156) 52.35%, rgba(155, 168, 148, 0) 69.8%), radial-gradient(circle at 92.11% 81.09%, rgba(155, 168, 148, 1) 0%, rgba(155, 168, 148, 0.844) 18.32%, rgba(155, 168, 148, 0.5) 36.65%, rgba(155, 168, 148, 0.156) 54.97%, rgba(155, 168, 148, 0) 73.3%)",
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
          opacity: 0.105,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-2e06259a">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-2e06259a)" />
      </svg>
    </div>
  )
}
