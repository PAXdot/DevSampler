// GradientBackground — "Chur Websites", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=2a538de1-eb83-4562-afad-00891eb6141f
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
        inset: "-3.4cqmin",
        filter: "blur(1.7cqmin)",
        backgroundColor: "#090B9A",
        backgroundImage:
          "radial-gradient(circle at 65.58% 46.03%, rgba(134, 162, 208, 1) 0%, rgba(134, 162, 208, 0.844) 10.28%, rgba(134, 162, 208, 0.5) 20.55%, rgba(134, 162, 208, 0.156) 30.83%, rgba(134, 162, 208, 0) 41.1%), radial-gradient(circle at 28.38% 73.04%, rgba(51, 163, 215, 1) 0%, rgba(51, 163, 215, 0.844) 10.71%, rgba(51, 163, 215, 0.5) 21.43%, rgba(51, 163, 215, 0.156) 32.14%, rgba(51, 163, 215, 0) 42.85%), radial-gradient(circle at 52.62% 18.32%, rgba(9, 11, 154, 1) 0%, rgba(9, 11, 154, 0.844) 13.25%, rgba(9, 11, 154, 0.5) 26.5%, rgba(9, 11, 154, 0.156) 39.75%, rgba(9, 11, 154, 0) 53%), radial-gradient(circle at 79.22% 84.38%, rgba(9, 11, 154, 1) 0%, rgba(9, 11, 154, 0.844) 14.47%, rgba(9, 11, 154, 0.5) 28.95%, rgba(9, 11, 154, 0.156) 43.42%, rgba(9, 11, 154, 0) 57.9%)",
        }}
      />
    </div>
  )
}
