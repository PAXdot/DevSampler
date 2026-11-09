"use client"

// AsciiArt — "Igaming_final", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=95559677-f8d2-4ad5-842b-bb9784a9c7b0
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3GAroirCEU7zMUanuQUMQET2Bkj/bac85d18-0a08-4192-afcc-be20c5ed7460.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3GAroirCEU7zMUanuQUMQET2Bkj/917c0679-cf55-4c1e-8803-b99f33afc096.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Igaming_final — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
