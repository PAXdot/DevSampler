// GradientBackground — "Violet Radiance", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=26b23ad3-26ea-4731-978d-f717c2c0ea82
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
        inset: "-1.2cqmin",
        filter: "blur(0.6cqmin)",
        backgroundColor: "#F7F3FF",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #f7f3ff 0%, #f7f3ff 8.33%, #e6e8fc 8.33%, #e6e8fc 16.67%, #d6defa 16.67%, #d6defa 25%, #c5d3f7 25%, #c5d3f7 33.33%, #b4c8f4 33.33%, #b4c8f4 41.67%, #a3bdf1 41.67%, #a3bdf1 50%, #95b0ec 50%, #95b0ec 58.33%, #8a9fe3 58.33%, #8a9fe3 66.67%, #7f8eda 66.67%, #7f8eda 75%, #747dd1 75%, #747dd1 83.33%, #696dc9 83.33%, #696dc9 91.67%, #5e5cc0 91.67%, #5e5cc0 100%)",
        }}
      />
    </div>
  )
}
