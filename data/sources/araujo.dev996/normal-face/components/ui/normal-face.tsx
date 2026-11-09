"use client"

// AsciiArt — "normal-face", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=c9f132d9-6685-42f4-8a9e-85b83e8ec691
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Jhzk2mQsgChNSRedrHWY6cuKsF/787662b8-6510-44c5-8592-b119b8c4a9db.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Jhzk2mQsgChNSRedrHWY6cuKsF/601dedb9-8229-4f90-bf93-a8e2833e6102.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"normal-face — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
