// GradientBackground — "Oceanic Glow", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=cacc0131-a5ac-42e3-9577-1c52f540ac11
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
        inset: "-3.2cqmin",
        filter: "blur(1.6cqmin)",
        backgroundColor: "#A8F0C8",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #a8f0c8 0%, #a8f0c8 16.67%, #62cbd1 16.67%, #62cbd1 33.33%, #34a1d0 33.33%, #34a1d0 50%, #346dbc 50%, #346dbc 66.67%, #264077 66.67%, #264077 83.33%, #121519 83.33%, #121519 100%)",
        }}
      />
    </div>
  )
}
