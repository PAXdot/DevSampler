"use client"

// AsciiArt — "Act of creation", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=2c1ab28b-293a-4c8f-a2d2-f2697222bd56
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GMpZ2x21zhvHKicoTIMpHGLqpH/66ce3707-87ba-47e1-ab3b-5d3afb65889e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GMpZ2x21zhvHKicoTIMpHGLqpH/b14be566-20d3-470a-a478-283d5da34dff.png"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Act of creation — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
