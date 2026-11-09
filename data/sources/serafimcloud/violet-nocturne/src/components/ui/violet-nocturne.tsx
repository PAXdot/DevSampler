// GradientBackground — "Violet Nocturne", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=fe31f7c5-4f9c-405a-88c2-b55b835c3312
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
        backgroundColor: "#D98FC0",
        backgroundImage:
          "radial-gradient(circle at 65.49% 45.47%, rgba(14, 16, 48, 1) 0%, rgba(14, 16, 48, 0) 46.7%), radial-gradient(circle at 28.26% 73.62%, rgba(60, 42, 115, 1) 0%, rgba(60, 42, 115, 0) 58.25%), radial-gradient(circle at 52.54% 18.97%, rgba(123, 75, 168, 1) 0%, rgba(123, 75, 168, 0) 70.15%), radial-gradient(circle at 79.65% 84.42%, rgba(217, 143, 192, 1) 0%, rgba(217, 143, 192, 0) 81.7%)",
        }}
      />
    </div>
  )
}
