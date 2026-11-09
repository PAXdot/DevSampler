// GradientBackground — "Rosewood Blush", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=803856e1-f722-4990-b966-32738d184dd9
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
        backgroundColor: "#B65C7E",
        backgroundImage:
          "radial-gradient(circle at 65.68% 46.6%, rgba(255, 241, 230, 1) 0%, rgba(255, 241, 230, 0) 39.7%), radial-gradient(circle at 28.5% 72.47%, rgba(255, 201, 169, 1) 0%, rgba(255, 201, 169, 0) 51.25%), radial-gradient(circle at 52.7% 17.67%, rgba(249, 143, 123, 1) 0%, rgba(249, 143, 123, 0) 63.15%), radial-gradient(circle at 78.79% 84.35%, rgba(182, 92, 126, 1) 0%, rgba(182, 92, 126, 0) 74.7%)",
        }}
      />
    </div>
  )
}
