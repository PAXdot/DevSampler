// GradientBackground — "Sfondo centrafit 2", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=d6bce123-912d-4401-8998-34ffcd10f2c6
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
          "radial-gradient(circle at 63.62% 44.62%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.844) 8.53%, rgba(255, 255, 255, 0.5) 17.05%, rgba(255, 255, 255, 0.156) 25.58%, rgba(255, 255, 255, 0) 34.1%), radial-gradient(circle at 30.27% 72.47%, rgba(208, 233, 240, 1) 0%, rgba(208, 233, 240, 0.844) 17.27%, rgba(208, 233, 240, 0.5) 34.55%, rgba(208, 233, 240, 0.156) 51.82%, rgba(208, 233, 240, 0) 69.1%), radial-gradient(circle at 52.09% 23.77%, rgba(174, 236, 255, 1) 0%, rgba(174, 236, 255, 0.844) 12.9%, rgba(174, 236, 255, 0.5) 25.8%, rgba(174, 236, 255, 0.156) 38.7%, rgba(174, 236, 255, 0) 51.6%), radial-gradient(circle at 77.54% 80.86%, rgba(179, 251, 255, 1) 0%, rgba(179, 251, 255, 0.844) 10.71%, rgba(179, 251, 255, 0.5) 21.43%, rgba(179, 251, 255, 0.156) 32.14%, rgba(179, 251, 255, 0) 42.85%), radial-gradient(circle at 13.31% 36.67%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.844) 15.09%, rgba(255, 255, 255, 0.5) 30.18%, rgba(255, 255, 255, 0.156) 45.26%, rgba(255, 255, 255, 0) 60.35%)",
        }}
      />
    </div>
  )
}
