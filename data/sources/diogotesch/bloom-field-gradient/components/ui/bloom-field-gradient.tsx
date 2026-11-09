// GradientBackground — "Bloom Field gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=f03a20c5-4f7f-4bcc-ac4e-709021b03017
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
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.080'/></svg>\"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.008) 100%), radial-gradient(circle at 58.13% 58.3%, rgba(183, 132, 29, 1) 0%, rgba(183, 132, 29, 0.844) 19.64%, rgba(183, 132, 29, 0.5) 39.27%, rgba(183, 132, 29, 0.156) 58.91%, rgba(183, 132, 29, 0) 78.55%), radial-gradient(circle at 33.99% 62.68%, rgba(242, 186, 74, 1) 0%, rgba(242, 186, 74, 0.844) 20.43%, rgba(242, 186, 74, 0.5) 40.85%, rgba(242, 186, 74, 0.156) 61.28%, rgba(242, 186, 74, 0) 81.7%), radial-gradient(circle at 46.19% 24.79%, rgba(194, 120, 31, 1) 0%, rgba(194, 120, 31, 0.844) 11.68%, rgba(194, 120, 31, 0.5) 23.35%, rgba(194, 120, 31, 0.156) 35.03%, rgba(194, 120, 31, 0) 46.7%), radial-gradient(circle at 65.36% 85.44%, rgba(218, 203, 174, 1) 0%, rgba(218, 203, 174, 0.844) 19.11%, rgba(218, 203, 174, 0.5) 38.23%, rgba(218, 203, 174, 0.156) 57.34%, rgba(218, 203, 174, 0) 76.45%), radial-gradient(circle at 7.21% 37.16%, rgba(255, 191, 0, 1) 0%, rgba(255, 191, 0, 0.844) 20.43%, rgba(255, 191, 0, 0.5) 40.85%, rgba(255, 191, 0, 0.156) 61.28%, rgba(255, 191, 0, 0) 81.7%)",
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
        <filter id="grain-f03a20c5">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-f03a20c5)" />
      </svg>
    </div>
  )
}
