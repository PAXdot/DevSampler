"use client"

// AsciiArt — "new1", made with the 21st.dev ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=7cabb4e8-a36a-4fff-acdb-9477c71a5e3e
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_306ivTauWRHotgpqlmdvOcmx926/f9683c01-fb66-4622-ac19-8b97b1af5328.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_306ivTauWRHotgpqlmdvOcmx926/8bbcecf2-ae37-485f-8070-48f5df7a1110.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"new1 — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
