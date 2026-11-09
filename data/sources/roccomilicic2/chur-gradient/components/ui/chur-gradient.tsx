// GradientBackground — "Chur Gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=b8c7e4d3-9c2a-4910-84db-77132899c890
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
        backgroundColor: "#DDF361",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.500'/></svg>\"), radial-gradient(circle at 67.04% 45.93%, rgba(222, 246, 194, 1) 0%, rgba(222, 246, 194, 0.844) 16.23%, rgba(222, 246, 194, 0.5) 32.45%, rgba(222, 246, 194, 0.156) 48.68%, rgba(222, 246, 194, 0) 64.9%), radial-gradient(circle at 35.47% 65.92%, rgba(237, 238, 155, 1) 0%, rgba(237, 238, 155, 0.844) 12.9%, rgba(237, 238, 155, 0.5) 25.8%, rgba(237, 238, 155, 0.156) 38.7%, rgba(237, 238, 155, 0) 51.6%), radial-gradient(circle at 48.33% 20.11%, rgba(221, 243, 97, 1) 0%, rgba(221, 243, 97, 0.844) 17.8%, rgba(221, 243, 97, 0.5) 35.6%, rgba(221, 243, 97, 0.156) 53.4%, rgba(221, 243, 97, 0) 71.2%), radial-gradient(circle at 80.81% 88.03%, rgba(219, 251, 40, 1) 0%, rgba(219, 251, 40, 0.844) 10.28%, rgba(219, 251, 40, 0.5) 20.55%, rgba(219, 251, 40, 0.156) 30.83%, rgba(219, 251, 40, 0) 41.1%)",
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
        <filter id="grain-b8c7e4d3">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-b8c7e4d3)" />
      </svg>
    </div>
  )
}
