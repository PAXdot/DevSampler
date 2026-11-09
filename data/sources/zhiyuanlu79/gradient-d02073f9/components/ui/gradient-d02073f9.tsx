// GradientBackground — "淡粉色", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=d02073f9-0470-4702-9a3d-47329f0fbe3c
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
        backgroundColor: "#FBE9F0",
        backgroundImage:
          "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.280'/></svg>\"), radial-gradient(circle at 66.94% 46.43%, rgba(251, 233, 240, 1) 0%, rgba(251, 233, 240, 0.844) 19.02%, rgba(251, 233, 240, 0.5) 38.05%, rgba(251, 233, 240, 0.156) 57.07%, rgba(251, 233, 240, 0) 76.1%), radial-gradient(circle at 34.69% 66.31%, rgba(205, 231, 240, 1) 0%, rgba(205, 231, 240, 0.844) 12.73%, rgba(205, 231, 240, 0.5) 25.45%, rgba(205, 231, 240, 0.156) 38.18%, rgba(205, 231, 240, 0) 50.9%), radial-gradient(circle at 48.93% 19.32%, rgba(230, 214, 245, 1) 0%, rgba(230, 214, 245, 0.844) 16.75%, rgba(230, 214, 245, 0.5) 33.5%, rgba(230, 214, 245, 0.156) 50.25%, rgba(230, 214, 245, 0) 67%), radial-gradient(circle at 80.23% 87.54%, rgba(214, 240, 228, 1) 0%, rgba(214, 240, 228, 0.844) 10.28%, rgba(214, 240, 228, 0.5) 20.55%, rgba(214, 240, 228, 0.156) 30.83%, rgba(214, 240, 228, 0) 41.1%)",
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
          opacity: 0.280,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="grain-d02073f9">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-d02073f9)" />
      </svg>
    </div>
  )
}
