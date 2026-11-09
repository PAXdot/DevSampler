"use client"

// AsciiArt — "Dedsec", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=16c97125-ff13-4052-87bd-611f8af926a1
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3Frtav8rJs86XuTulwOkMHPmGMM/e462a032-ba36-48c7-b873-9a89b172bab9.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3Frtav8rJs86XuTulwOkMHPmGMM/d4dcd471-9a24-4ce4-b8d0-18267682de76.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"Dedsec — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
