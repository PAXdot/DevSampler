// GradientBackground — "Bloom Field gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=6a30e6f3-3d73-4f8d-8721-85fdf2f3894a
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
        backgroundColor: "#F7EFE3",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.065'/></svg>\"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.08000000000000002) 100%), radial-gradient(circle at 64.25% 49.89%, rgba(220, 235, 247, 1) 0%, rgba(220, 235, 247, 0.844) 10.28%, rgba(220, 235, 247, 0.5) 20.55%, rgba(220, 235, 247, 0.156) 30.83%, rgba(220, 235, 247, 0) 41.1%), radial-gradient(circle at 28.22% 71.84%, rgba(185, 212, 236, 1) 0%, rgba(185, 212, 236, 0.844) 12.81%, rgba(185, 212, 236, 0.5) 25.63%, rgba(185, 212, 236, 0.156) 38.44%, rgba(185, 212, 236, 0) 51.25%), radial-gradient(circle at 47.66% 15.52%, rgba(243, 217, 228, 1) 0%, rgba(243, 217, 228, 0.844) 16.14%, rgba(243, 217, 228, 0.5) 32.27%, rgba(243, 217, 228, 0.156) 48.41%, rgba(243, 217, 228, 0) 64.55%), radial-gradient(circle at 77.83% 80.04%, rgba(247, 239, 227, 1) 0%, rgba(247, 239, 227, 0.844) 19.02%, rgba(247, 239, 227, 0.5) 38.05%, rgba(247, 239, 227, 0.156) 57.07%, rgba(247, 239, 227, 0) 76.1%)",
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
          opacity: 0.065,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-6a30e6f3">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-6a30e6f3)" />
      </svg>
    </div>
  )
}
