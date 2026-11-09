// GradientBackground — "Steel Cone", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=3189cee2-e447-4828-bb1f-acab9b1db69b
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
        backgroundColor: "#E9EEF5",
        backgroundImage:
          "conic-gradient(from 45deg at 50% 50%, #E9EEF5 0%, #8FA3C0 25%, #3B4A66 50%, #8FA3C0 75%, #E9EEF5 100%)",
        }}
      />
    </div>
  )
}
