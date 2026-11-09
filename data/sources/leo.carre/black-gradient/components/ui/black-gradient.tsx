// GradientBackground — "Black Gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=08e7d317-50ff-47ff-b5bc-378e06156a92
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
        backgroundColor: "#111111",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.075'/></svg>\"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.024) 100%), radial-gradient(circle at 72.39% 58.91%, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0.844) 19.38%, rgba(17, 17, 17, 0.5) 38.75%, rgba(17, 17, 17, 0.156) 58.13%, rgba(17, 17, 17, 0) 77.5%), radial-gradient(circle at 37.53% 79.97%, rgba(92, 92, 92, 1) 0%, rgba(92, 92, 92, 0.844) 13.25%, rgba(92, 92, 92, 0.5) 26.5%, rgba(92, 92, 92, 0.156) 39.75%, rgba(92, 92, 92, 0) 53%), radial-gradient(circle at 41.45% 25.53%, rgba(167, 167, 167, 1) 0%, rgba(167, 167, 167, 0.844) 17.1%, rgba(167, 167, 167, 0.5) 34.2%, rgba(167, 167, 167, 0.156) 51.3%, rgba(167, 167, 167, 0) 68.4%), radial-gradient(circle at 72.25% 83.19%, rgba(242, 242, 242, 1) 0%, rgba(242, 242, 242, 0.844) 10.63%, rgba(242, 242, 242, 0.5) 21.25%, rgba(242, 242, 242, 0.156) 31.88%, rgba(242, 242, 242, 0) 42.5%)",
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
          opacity: 0.075,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-08e7d317">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-08e7d317)" />
      </svg>
    </div>
  )
}
