"use client"

// AsciiArt — "moto", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=e102bb2f-19f2-4ff1-ac8d-0d67d7d42943
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3FKtgowPPn9nc2tzmWcaOwPuPBB/6a435872-e0a4-4824-8748-0e72bedfbda9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3FKtgowPPn9nc2tzmWcaOwPuPBB/c1438217-faba-44ce-9e20-530924a8315b.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"moto — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
