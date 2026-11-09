// GradientBackground — "夢かわグラデ", made with the 21st.dev Gradient
// Builder and exported as live CSS (the builder's own Copy-CSS background,
// plus its soften-blur and grain passes). Zero dependencies: one <div> that
// fills its parent. Drop it behind your content:
// <div className="relative h-96"><GradientBackground className="absolute inset-0" /></div>
// Remix the source recipe (colors, mode, finish) in the editor:
// https://21st.dev/community/gradients/editor?from=c1a9005a-0392-47a0-a1a1-caf4eea1171f
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
        backgroundColor: "#C4FFE6",
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 52%, rgba(0, 0, 0, 0.032) 100%), radial-gradient(circle at 58.7% 43.19%, rgba(251, 253, 255, 1) 0%, rgba(251, 253, 255, 0.844) 10.1%, rgba(251, 253, 255, 0.5) 20.2%, rgba(251, 253, 255, 0.156) 30.3%, rgba(251, 253, 255, 0) 40.4%), radial-gradient(circle at 39.33% 68.59%, rgba(169, 252, 255, 1) 0%, rgba(169, 252, 255, 0.844) 8.35%, rgba(169, 252, 255, 0.5) 16.7%, rgba(169, 252, 255, 0.156) 25.05%, rgba(169, 252, 255, 0) 33.4%), radial-gradient(circle at 56.48% 24.26%, rgba(180, 185, 255, 1) 0%, rgba(180, 185, 255, 0.844) 14.56%, rgba(180, 185, 255, 0.5) 29.13%, rgba(180, 185, 255, 0.156) 43.69%, rgba(180, 185, 255, 0) 58.25%), radial-gradient(circle at 66.25% 67.04%, rgba(196, 255, 230, 1) 0%, rgba(196, 255, 230, 0.844) 15.88%, rgba(196, 255, 230, 0.5) 31.75%, rgba(196, 255, 230, 0.156) 47.63%, rgba(196, 255, 230, 0) 63.5%), radial-gradient(circle at 19.6% 37.53%, rgba(244, 209, 255, 1) 0%, rgba(244, 209, 255, 0.844) 14.04%, rgba(244, 209, 255, 0.5) 28.07%, rgba(244, 209, 255, 0.156) 42.11%, rgba(244, 209, 255, 0) 56.15%), radial-gradient(circle at 88.51% 34.52%, rgba(244, 209, 255, 1) 0%, rgba(244, 209, 255, 0.844) 9.49%, rgba(244, 209, 255, 0.5) 18.98%, rgba(244, 209, 255, 0.156) 28.46%, rgba(244, 209, 255, 0) 37.95%), radial-gradient(circle at 36.78% 94%, rgba(179, 184, 255, 1) 0%, rgba(179, 184, 255, 0.844) 8.79%, rgba(179, 184, 255, 0.5) 17.57%, rgba(179, 184, 255, 0.156) 26.36%, rgba(179, 184, 255, 0) 35.15%), radial-gradient(circle at 35.39% 12.45%, rgba(179, 184, 255, 1) 0%, rgba(179, 184, 255, 0.844) 7.74%, rgba(179, 184, 255, 0.5) 15.48%, rgba(179, 184, 255, 0.156) 23.21%, rgba(179, 184, 255, 0) 30.95%)",
        }}
      />
    </div>
  )
}
