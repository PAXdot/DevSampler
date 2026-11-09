// GradientBackground — "Orchid Petal Sky", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=5bccdbda-6bc4-4d83-8d0d-cead4a853ade
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
        backgroundColor: "#F2C0D8",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.180'/></svg>\"), radial-gradient(150% 50% at 40.46% 6%, rgba(14, 16, 48, 0.92) 0%, rgba(14, 16, 48, 0) 55%), radial-gradient(150% 50% at 41.41% 33%, rgba(60, 42, 115, 0.92) 0%, rgba(60, 42, 115, 0) 55%), radial-gradient(150% 50% at 51.35% 67%, rgba(177, 95, 168, 0.92) 0%, rgba(177, 95, 168, 0) 55%), radial-gradient(150% 50% at 54.16% 94%, rgba(242, 192, 216, 0.92) 0%, rgba(242, 192, 216, 0) 55%)",
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
          opacity: 0.180,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-5bccdbda">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-5bccdbda)" />
      </svg>
    </div>
  )
}
