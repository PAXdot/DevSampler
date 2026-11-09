// GradientBackground — "Custom Blue", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=21d73676-8d9c-4603-9e6d-aedda053e70a
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
        backgroundColor: "#F3F3FF",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.500'/></svg>\"), radial-gradient(circle at 67.04% 45.93%, rgba(243, 243, 255, 1) 0%, rgba(243, 243, 255, 0.844) 19.02%, rgba(243, 243, 255, 0.5) 38.05%, rgba(243, 243, 255, 0.156) 57.07%, rgba(243, 243, 255, 0) 76.1%), radial-gradient(circle at 35.47% 65.92%, rgba(239, 239, 241, 1) 0%, rgba(239, 239, 241, 0.844) 12.9%, rgba(239, 239, 241, 0.5) 25.8%, rgba(239, 239, 241, 0.156) 38.7%, rgba(239, 239, 241, 0) 51.6%), radial-gradient(circle at 48.33% 20.11%, rgba(220, 226, 239, 1) 0%, rgba(220, 226, 239, 0.844) 16.75%, rgba(220, 226, 239, 0.5) 33.5%, rgba(220, 226, 239, 0.156) 50.25%, rgba(220, 226, 239, 0) 67%), radial-gradient(circle at 80.81% 88.03%, rgba(248, 248, 252, 1) 0%, rgba(248, 248, 252, 0.844) 10.28%, rgba(248, 248, 252, 0.5) 20.55%, rgba(248, 248, 252, 0.156) 30.83%, rgba(248, 248, 252, 0) 41.1%)",
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
        <filter id="grain-21d73676">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-21d73676)" />
      </svg>
    </div>
  )
}
