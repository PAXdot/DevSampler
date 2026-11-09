// GradientBackground — "xsdad", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=ff775085-e917-4adf-a3c7-f108b3978a27
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
          "radial-gradient(circle at 63.87% 46.03%, rgba(255, 95, 109, 1) 0%, rgba(255, 95, 109, 0.844) 10.28%, rgba(255, 95, 109, 0.5) 20.55%, rgba(255, 95, 109, 0.156) 30.83%, rgba(255, 95, 109, 0) 41.1%), radial-gradient(circle at 30.57% 71.03%, rgba(255, 195, 113, 1) 0%, rgba(255, 195, 113, 0.844) 12.46%, rgba(255, 195, 113, 0.5) 24.93%, rgba(255, 195, 113, 0.156) 37.39%, rgba(255, 195, 113, 0) 49.85%), radial-gradient(circle at 52.28% 22.14%, rgba(109, 213, 250, 1) 0%, rgba(109, 213, 250, 0.844) 14.65%, rgba(109, 213, 250, 0.5) 29.3%, rgba(109, 213, 250, 0.156) 43.95%, rgba(109, 213, 250, 0) 58.6%), radial-gradient(circle at 76.46% 80.78%, rgba(176, 106, 179, 1) 0%, rgba(176, 106, 179, 0.844) 16.84%, rgba(176, 106, 179, 0.5) 33.67%, rgba(176, 106, 179, 0.156) 50.51%, rgba(176, 106, 179, 0) 67.35%), radial-gradient(circle at 11.66% 38.17%, rgba(255, 95, 109, 1) 0%, rgba(255, 95, 109, 0.844) 19.02%, rgba(255, 95, 109, 0.5) 38.05%, rgba(255, 95, 109, 0.156) 57.07%, rgba(255, 95, 109, 0) 76.1%)",
        }}
      />
    </div>
  )
}
