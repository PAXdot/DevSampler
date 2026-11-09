// GradientBackground — "Deep Horizon", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=268c30b6-143a-4ec9-b5d7-9fb5409e12a5
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
        backgroundColor: "#7DD0C0",
        backgroundImage:
          "radial-gradient(circle at 65.39% 44.9%, rgba(8, 36, 59, 1) 0%, rgba(8, 36, 59, 0) 35.5%), radial-gradient(circle at 28.14% 74.19%, rgba(18, 80, 122, 1) 0%, rgba(18, 80, 122, 0) 47.05%), radial-gradient(circle at 52.46% 19.62%, rgba(46, 143, 166, 1) 0%, rgba(46, 143, 166, 0) 58.95%), radial-gradient(circle at 80.09% 84.45%, rgba(125, 208, 192, 1) 0%, rgba(125, 208, 192, 0) 70.5%)",
        }}
      />
    </div>
  )
}
