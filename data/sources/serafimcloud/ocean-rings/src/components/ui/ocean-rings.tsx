// GradientBackground — "Ocean Rings", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=b098000f-4aa8-44bd-a922-6ae0dd02c12c
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
        inset: "-1.8cqmin",
        filter: "blur(0.9cqmin)",
        backgroundColor: "#EBF6F7",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #ebf6f7 0%, #ebf6f7 8.33%, #d7eef0 8.33%, #d7eef0 16.67%, #c3e5e9 16.67%, #c3e5e9 25%, #afdde2 25%, #afdde2 33.33%, #93d2d9 33.33%, #93d2d9 41.67%, #67c4cc 41.67%, #67c4cc 50%, #3bb6c0 50%, #3bb6c0 58.33%, #0fa8b3 58.33%, #0fa8b3 66.67%, #0793a5 66.67%, #0793a5 75%, #127b96 75%, #127b96 83.33%, #1c6287 83.33%, #1c6287 91.67%, #274a78 91.67%, #274a78 100%)",
        }}
      />
    </div>
  )
}
