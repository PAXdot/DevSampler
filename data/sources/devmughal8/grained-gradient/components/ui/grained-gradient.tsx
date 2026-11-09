// GradientBackground — "Grained Gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=68b54e6b-c17a-4ea9-b984-ba892fe529e1
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
        backgroundColor: "#FFC3A0",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.150'/></svg>\"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.072) 100%), radial-gradient(150% 46% at 45.93% 6%, rgba(235, 97, 1, 0.92) 0%, rgba(235, 97, 1, 0.7764800000000001) 12.5%, rgba(235, 97, 1, 0.46) 25%, rgba(235, 97, 1, 0.14352) 37.5%, rgba(235, 97, 1, 0) 50%), radial-gradient(150% 46% at 48.94% 62%, rgba(245, 169, 104, 0.92) 0%, rgba(245, 169, 104, 0.7764800000000001) 12.5%, rgba(245, 169, 104, 0.46) 25%, rgba(245, 169, 104, 0.14352) 37.5%, rgba(245, 169, 104, 0) 50%), radial-gradient(150% 46% at 45.66% 94%, rgba(255, 195, 160, 0.92) 0%, rgba(255, 195, 160, 0.7764800000000001) 12.5%, rgba(255, 195, 160, 0.46) 25%, rgba(255, 195, 160, 0.14352) 37.5%, rgba(255, 195, 160, 0) 50%), radial-gradient(150% 46% at 43.17% 35%, rgba(255, 188, 144, 0.92) 0%, rgba(255, 188, 144, 0.7764800000000001) 12.5%, rgba(255, 188, 144, 0.46) 25%, rgba(255, 188, 144, 0.14352) 37.5%, rgba(255, 188, 144, 0) 50%)",
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
          opacity: 0.150,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-68b54e6b">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-68b54e6b)" />
      </svg>
    </div>
  )
}
