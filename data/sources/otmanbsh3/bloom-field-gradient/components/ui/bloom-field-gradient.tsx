// GradientBackground — "Bloom Field gradient", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=e43295fe-bdd3-4a2d-8f9a-5f67a44429e7
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
        inset: "-8.6cqmin",
        filter: "blur(4.3cqmin)",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 65.34% 44.62%, rgba(52, 52, 50, 1) 0%, rgba(52, 52, 50, 0.844) 8.53%, rgba(52, 52, 50, 0.5) 17.05%, rgba(52, 52, 50, 0.156) 25.58%, rgba(52, 52, 50, 0) 34.1%), radial-gradient(circle at 28.07% 74.48%, rgba(18, 18, 17, 1) 0%, rgba(18, 18, 17, 0.844) 11.15%, rgba(18, 18, 17, 0.5) 22.3%, rgba(18, 18, 17, 0.156) 33.45%, rgba(18, 18, 17, 0) 44.6%), radial-gradient(circle at 52.42% 19.94%, rgba(52, 52, 50, 1) 0%, rgba(52, 52, 50, 0.844) 14.13%, rgba(52, 52, 50, 0.5) 28.25%, rgba(52, 52, 50, 0.156) 42.38%, rgba(52, 52, 50, 0) 56.5%), radial-gradient(circle at 80.31% 84.47%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.844) 17.27%, rgba(0, 0, 0, 0.5) 34.55%, rgba(0, 0, 0, 0.156) 51.82%, rgba(0, 0, 0, 0) 69.1%)",
        }}
      />
    </div>
  )
}
