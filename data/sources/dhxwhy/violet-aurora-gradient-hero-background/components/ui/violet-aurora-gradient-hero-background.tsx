// GradientBackground — "Violet Aurora Gradient Hero Background", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=7922c790-275a-4aef-a241-dc1ffddcf20a
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
        backgroundColor: "#140B2E",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.030'/></svg>\"), radial-gradient(circle at 56.18% 53.14%, rgba(20, 11, 46, 1) 0%, rgba(20, 11, 46, 0.844) 19.02%, rgba(20, 11, 46, 0.5) 38.05%, rgba(20, 11, 46, 0.156) 57.07%, rgba(20, 11, 46, 0) 76.1%), radial-gradient(circle at 40.93% 70.24%, rgba(20, 11, 46, 1) 0%, rgba(20, 11, 46, 0.844) 17.71%, rgba(20, 11, 46, 0.5) 35.42%, rgba(20, 11, 46, 0.156) 53.14%, rgba(20, 11, 46, 0) 70.85%), radial-gradient(circle at 58% 14.42%, rgba(109, 74, 255, 1) 0%, rgba(109, 74, 255, 0.844) 12.9%, rgba(109, 74, 255, 0.5) 25.8%, rgba(109, 74, 255, 0.156) 38.7%, rgba(109, 74, 255, 0) 51.6%), radial-gradient(circle at 65% 81.01%, rgba(60, 2, 164, 1) 0%, rgba(60, 2, 164, 0.844) 13.34%, rgba(60, 2, 164, 0.5) 26.68%, rgba(60, 2, 164, 0.156) 40.01%, rgba(60, 2, 164, 0) 53.35%), radial-gradient(circle at 16.23% 47.68%, rgba(109, 74, 255, 1) 0%, rgba(109, 74, 255, 0.844) 12.46%, rgba(109, 74, 255, 0.5) 24.93%, rgba(109, 74, 255, 0.156) 37.39%, rgba(109, 74, 255, 0) 49.85%), radial-gradient(circle at 94% 31.96%, rgba(196, 160, 255, 1) 0%, rgba(196, 160, 255, 0.844) 11.59%, rgba(196, 160, 255, 0.5) 23.18%, rgba(196, 160, 255, 0.156) 34.76%, rgba(196, 160, 255, 0) 46.35%)",
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
          opacity: 0.030,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-7922c790">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-7922c790)" />
      </svg>
    </div>
  )
}
