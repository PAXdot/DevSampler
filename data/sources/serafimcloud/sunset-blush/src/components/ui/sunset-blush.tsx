// GradientBackground — "Sunset Blush", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=788cc52e-b892-4a5c-ba02-7b0abaeeb38f
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
        backgroundColor: "#F6D9A8",
        backgroundImage:
          "radial-gradient(circle at 65.24% 44.05%, rgba(251, 239, 242, 1) 0%, rgba(251, 239, 242, 0) 38.3%), radial-gradient(circle at 27.95% 75.05%, rgba(243, 192, 199, 1) 0%, rgba(243, 192, 199, 0) 49.85%), radial-gradient(circle at 52.34% 20.59%, rgba(231, 210, 240, 1) 0%, rgba(231, 210, 240, 0) 61.75%), radial-gradient(circle at 80.74% 84.5%, rgba(246, 217, 168, 1) 0%, rgba(246, 217, 168, 0) 73.3%)",
        }}
      />
    </div>
  )
}
