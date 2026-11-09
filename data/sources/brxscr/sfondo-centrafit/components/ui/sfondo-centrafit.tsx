// GradientBackground — "Sfondo centrafit", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=63f45417-89de-4575-91df-a85cecd6bd0e
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
        backgroundColor: "#D0E9F0",
        backgroundImage:
          "radial-gradient(circle at 67.86% 44.62%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.844) 8.53%, rgba(255, 255, 255, 0.5) 17.05%, rgba(255, 255, 255, 0.156) 25.58%, rgba(255, 255, 255, 0) 34.1%), radial-gradient(circle at 24.86% 77.42%, rgba(208, 233, 240, 1) 0%, rgba(208, 233, 240, 0.844) 17.27%, rgba(208, 233, 240, 0.5) 34.55%, rgba(208, 233, 240, 0.156) 51.82%, rgba(208, 233, 240, 0) 69.1%), radial-gradient(circle at 52.91% 14.34%, rgba(174, 236, 255, 1) 0%, rgba(174, 236, 255, 0.844) 12.9%, rgba(174, 236, 255, 0.5) 25.8%, rgba(174, 236, 255, 0.156) 38.7%, rgba(174, 236, 255, 0) 51.6%)",
        }}
      />
    </div>
  )
}
