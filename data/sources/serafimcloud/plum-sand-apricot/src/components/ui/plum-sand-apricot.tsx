// GradientBackground — "Plum Sand Apricot", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=c2b7cddf-7488-4a84-a7bc-2c52f88135a4
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
        backgroundColor: "#7A3B6B",
        backgroundImage:
          "radial-gradient(circle at 65.19% 43.77%, rgba(255, 231, 199, 1) 0%, rgba(255, 231, 199, 0) 35.5%), radial-gradient(circle at 27.89% 75.34%, rgba(246, 169, 107, 1) 0%, rgba(246, 169, 107, 0) 47.05%), radial-gradient(circle at 52.3% 20.92%, rgba(228, 103, 107, 1) 0%, rgba(228, 103, 107, 0) 58.95%), radial-gradient(circle at 80.96% 84.52%, rgba(122, 59, 107, 1) 0%, rgba(122, 59, 107, 0) 70.5%)",
        }}
      />
    </div>
  )
}
