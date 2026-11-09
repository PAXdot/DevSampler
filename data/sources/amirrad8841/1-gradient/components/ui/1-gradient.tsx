// GradientBackground — "1 Gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=917b5ed5-cffb-45e4-88e9-d56d5c9a3e5d
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
        backgroundColor: "#FCE4EC",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.500'/></svg>\"), radial-gradient(circle at 67.55% 43.25%, rgba(252, 228, 236, 1) 0%, rgba(252, 228, 236, 0.844) 13.25%, rgba(252, 228, 236, 0.5) 26.5%, rgba(252, 228, 236, 0.156) 39.75%, rgba(252, 228, 236, 0) 53%), radial-gradient(circle at 39.57% 63.88%, rgba(247, 183, 210, 1) 0%, rgba(247, 183, 210, 0.844) 7.13%, rgba(247, 183, 210, 0.5) 14.25%, rgba(247, 183, 210, 0.156) 21.38%, rgba(247, 183, 210, 0) 28.5%), radial-gradient(circle at 45.14% 24.27%, rgba(191, 216, 242, 1) 0%, rgba(191, 216, 242, 0.844) 10.97%, rgba(191, 216, 242, 0.5) 21.95%, rgba(191, 216, 242, 0.156) 32.92%, rgba(191, 216, 242, 0) 43.9%), radial-gradient(circle at 83.85% 90.57%, rgba(227, 213, 245, 1) 0%, rgba(227, 213, 245, 0.844) 5.5%, rgba(227, 213, 245, 0.5) 11%, rgba(227, 213, 245, 0.156) 16.5%, rgba(227, 213, 245, 0) 22%)",
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
        <filter id="grain-917b5ed5">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-917b5ed5)" />
      </svg>
    </div>
  )
}
