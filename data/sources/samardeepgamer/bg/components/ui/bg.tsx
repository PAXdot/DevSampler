// GradientBackground — "bg", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=98aa5c28-400f-416b-8fa8-8bcc69594456
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
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.008) 100%), radial-gradient(circle at 63.62% 46.83%, rgba(202, 147, 65, 1) 0%, rgba(202, 147, 65, 0.844) 12.02%, rgba(202, 147, 65, 0.5) 24.05%, rgba(202, 147, 65, 0.156) 36.07%, rgba(202, 147, 65, 0) 48.1%), radial-gradient(circle at 28.82% 68.21%, rgba(255, 140, 0, 1) 0%, rgba(255, 140, 0, 0.844) 15.52%, rgba(255, 140, 0, 0.5) 31.05%, rgba(255, 140, 0, 0.156) 46.57%, rgba(255, 140, 0, 0) 62.1%), radial-gradient(circle at 49.75% 12.34%, rgba(225, 194, 15, 1) 0%, rgba(225, 194, 15, 0.844) 17.45%, rgba(225, 194, 15, 0.5) 34.9%, rgba(225, 194, 15, 0.156) 52.35%, rgba(225, 194, 15, 0) 69.8%), radial-gradient(circle at 76.39% 82.17%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.844) 20.77%, rgba(0, 0, 0, 0.5) 41.55%, rgba(0, 0, 0, 0.156) 62.32%, rgba(0, 0, 0, 0) 83.1%)",
        }}
      />
    </div>
  )
}
