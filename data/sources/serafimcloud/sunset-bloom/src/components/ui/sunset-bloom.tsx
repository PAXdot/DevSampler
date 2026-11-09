// GradientBackground — "Sunset Bloom", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=16f0a851-93fe-484e-87dd-0480a06f511e
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
        backgroundColor: "#FDE68A",
        backgroundImage:
          "radial-gradient(circle at 65.53% 45.75%, rgba(43, 10, 61, 1) 0%, rgba(43, 10, 61, 0) 43.9%), radial-gradient(circle at 28.32% 73.33%, rgba(193, 39, 92, 1) 0%, rgba(193, 39, 92, 0) 55.45%), radial-gradient(circle at 52.58% 18.64%, rgba(248, 135, 59, 1) 0%, rgba(248, 135, 59, 0) 67.35%), radial-gradient(circle at 79.44% 84.4%, rgba(253, 230, 138, 1) 0%, rgba(253, 230, 138, 0) 78.9%)",
        }}
      />
    </div>
  )
}
