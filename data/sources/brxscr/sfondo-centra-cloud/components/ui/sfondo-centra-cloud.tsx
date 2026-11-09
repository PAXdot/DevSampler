// GradientBackground — "SFONDO CENTRA CLOUD", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=f1b23be0-96b2-48ba-97b2-0c4ca4f48eed
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
        backgroundColor: "#E2E2E2",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.500'/></svg>\"), radial-gradient(circle at 65.32% 45.93%, rgba(226, 226, 226, 1) 0%, rgba(226, 226, 226, 0.844) 19.02%, rgba(226, 226, 226, 0.5) 38.05%, rgba(226, 226, 226, 0.156) 57.07%, rgba(226, 226, 226, 0) 76.1%), radial-gradient(circle at 37.67% 63.91%, rgba(178, 143, 206, 1) 0%, rgba(178, 143, 206, 0.844) 14.65%, rgba(178, 143, 206, 0.5) 29.3%, rgba(178, 143, 206, 0.156) 43.95%, rgba(178, 143, 206, 0) 58.6%), radial-gradient(circle at 47.99% 23.93%, rgba(169, 104, 222, 1) 0%, rgba(169, 104, 222, 0.844) 16.84%, rgba(169, 104, 222, 0.5) 33.67%, rgba(169, 104, 222, 0.156) 50.51%, rgba(169, 104, 222, 0) 67.35%), radial-gradient(circle at 78.05% 84.42%, rgba(146, 89, 193, 1) 0%, rgba(146, 89, 193, 0.844) 15.79%, rgba(146, 89, 193, 0.5) 31.57%, rgba(146, 89, 193, 0.156) 47.36%, rgba(146, 89, 193, 0) 63.15%), radial-gradient(circle at 9.07% 38.22%, rgba(198, 128, 255, 1) 0%, rgba(198, 128, 255, 0.844) 17.98%, rgba(198, 128, 255, 0.5) 35.95%, rgba(198, 128, 255, 0.156) 53.93%, rgba(198, 128, 255, 0) 71.9%)",
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
          opacity: 0.500,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-f1b23be0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-f1b23be0)" />
      </svg>
    </div>
  )
}
