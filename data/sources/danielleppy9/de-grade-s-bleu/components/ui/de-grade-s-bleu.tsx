// GradientBackground — "Dégradés bleu", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=4c662b6d-5980-4dc1-827d-2c5efaa9b432
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
        inset: "-13.2cqmin",
        filter: "blur(6.6cqmin)",
        backgroundColor: "#FFFFFF",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.136) 100%), linear-gradient(191deg, #FFFFFF 54%, #78B8F9 57%, #5667FF 60%, #4D2FF9 100%)",
        }}
      />
    </div>
  )
}
