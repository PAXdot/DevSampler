// GradientBackground — "Bloom Field gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=770eb477-558a-4a0d-89fe-c0d4703c1199
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
        backgroundColor: "#F2BA4A",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.080'/></svg>\"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.008) 100%), radial-gradient(circle at 49.97% 68.87%, rgba(183, 132, 29, 1) 0%, rgba(183, 132, 29, 0.844) 17.1%, rgba(183, 132, 29, 0.5) 34.2%, rgba(183, 132, 29, 0.156) 51.3%, rgba(183, 132, 29, 0) 68.4%), radial-gradient(circle at 37.25% 57.15%, rgba(242, 186, 74, 1) 0%, rgba(242, 186, 74, 0.844) 20.07%, rgba(242, 186, 74, 0.5) 40.15%, rgba(242, 186, 74, 0.156) 60.22%, rgba(242, 186, 74, 0) 80.3%), radial-gradient(circle at 37.73% 33.94%, rgba(194, 120, 31, 1) 0%, rgba(194, 120, 31, 0.844) 11.85%, rgba(194, 120, 31, 0.5) 23.7%, rgba(194, 120, 31, 0.156) 35.55%, rgba(194, 120, 31, 0) 47.4%), radial-gradient(circle at 55.11% 91.67%, rgba(218, 203, 174, 1) 0%, rgba(218, 203, 174, 0.844) 14.65%, rgba(218, 203, 174, 0.5) 29.3%, rgba(218, 203, 174, 0.156) 43.95%, rgba(218, 203, 174, 0) 58.6%), radial-gradient(circle at 7.43% 30.49%, rgba(255, 191, 0, 1) 0%, rgba(255, 191, 0, 0.844) 20.07%, rgba(255, 191, 0, 0.5) 40.15%, rgba(255, 191, 0, 0.156) 60.22%, rgba(255, 191, 0, 0) 80.3%)",
        backgroundSize: "120px 120px, auto, auto, auto, auto, auto, auto",
        backgroundBlendMode: "overlay, normal, normal, normal, normal, normal, normal",
        }}
      />
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.080,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-770eb477">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-770eb477)" />
      </svg>
    </div>
  )
}
