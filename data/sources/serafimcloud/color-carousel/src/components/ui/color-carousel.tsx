// GradientBackground — "Color Carousel", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=265dde0f-116f-41c4-9f22-9305b99848e3
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
        backgroundColor: "#FF5F6D",
        backgroundImage:
          "conic-gradient(from 0deg at 50% 50%, #FF5F6D 0%, #FFC371 25%, #6DD5FA 50%, #B06AB3 75%, #FF5F6D 100%)",
        }}
      />
    </div>
  )
}
