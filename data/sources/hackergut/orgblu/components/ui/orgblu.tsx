// GradientBackground — "ORGBLU", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=0d426a6e-e14c-4864-8d31-68c9d2ef4b40
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
        inset: 0,
        backgroundColor: "#EAF4FC",
        backgroundImage:
          "linear-gradient(275deg, #EAF4FC 0%, #8C00FF 20%, #251EA4 40%, #F94F07 70%, #000000 100%)",
        }}
      />
    </div>
  )
}
