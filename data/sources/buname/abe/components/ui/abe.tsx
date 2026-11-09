"use client"

// AsciiArt — "abe", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=3618cc3b-7f61-454e-8fd2-d2fdfd2e7d71
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Ik8pTl35jOpXO7L9mD6yX2ECBo/fe5394a0-17f8-4466-90e7-f0e30ac438fd.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Ik8pTl35jOpXO7L9mD6yX2ECBo/709a9270-5e84-419a-bd33-c823e1c165df.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"abe — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
