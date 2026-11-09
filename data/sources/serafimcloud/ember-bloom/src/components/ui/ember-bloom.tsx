// GradientBackground — "Ember Bloom", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=78fb1eec-3877-4a9e-b28a-e12b4699cac1
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
        backgroundColor: "#25101E",
        backgroundImage:
          "radial-gradient(circle at 50% 55%, #FFE9A8 0%, #F58B3C 25.74%, #B02E4A 52.26%, #25101E 78%)",
        }}
      />
    </div>
  )
}
