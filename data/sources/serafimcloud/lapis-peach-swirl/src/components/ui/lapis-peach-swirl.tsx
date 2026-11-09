// GradientBackground — "Lapis Peach Swirl", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=7c07e711-cefd-46b9-8f3e-269e401143c2
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
        backgroundColor: "#895B8A",
        backgroundImage:
          "radial-gradient(circle at 65.58% 46.03%, rgba(234, 244, 252, 1) 0%, rgba(234, 244, 252, 0) 41.1%), radial-gradient(circle at 28.38% 73.04%, rgba(30, 80, 162, 1) 0%, rgba(30, 80, 162, 0) 52.65%), radial-gradient(circle at 52.62% 18.32%, rgba(240, 145, 153, 1) 0%, rgba(240, 145, 153, 0) 64.55%), radial-gradient(circle at 79.22% 84.38%, rgba(137, 91, 138, 1) 0%, rgba(137, 91, 138, 0) 76.1%)",
        }}
      />
    </div>
  )
}
