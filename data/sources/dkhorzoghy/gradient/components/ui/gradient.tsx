// GradientBackground — "س Gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=87522536-a764-4c8b-80bd-ddc5c2dcd530
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
        inset: "-14.8cqmin",
        filter: "blur(7.4cqmin)",
        backgroundColor: "#002561",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.500'/></svg>\"), radial-gradient(150% 62% at 21.93% 10%, rgba(241, 238, 229, 0.92) 0%, rgba(241, 238, 229, 0.7764800000000001) 17.5%, rgba(241, 238, 229, 0.46) 35%, rgba(241, 238, 229, 0.14352) 52.5%, rgba(241, 238, 229, 0) 70%), radial-gradient(150% 62% at 24.74% 50%, rgba(30, 80, 162, 0.92) 0%, rgba(30, 80, 162, 0.7764800000000001) 17.5%, rgba(30, 80, 162, 0.46) 35%, rgba(30, 80, 162, 0.14352) 52.5%, rgba(30, 80, 162, 0) 70%), radial-gradient(150% 62% at 53.96% 94%, rgba(0, 37, 97, 0.92) 0%, rgba(0, 37, 97, 0.7764800000000001) 17.5%, rgba(0, 37, 97, 0.46) 35%, rgba(0, 37, 97, 0.14352) 52.5%, rgba(0, 37, 97, 0) 70%)",
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
          opacity: 0.500,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-87522536">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-87522536)" />
      </svg>
    </div>
  )
}
