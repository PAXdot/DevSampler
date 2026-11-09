"use client"

// AsciiArt — "phyrs", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=f6bc3d06-4508-4d2d-b78a-eb072e9c2b1b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3ArjKkD2HsNDMWr9cecb8s0aFqO/f7f5901d-4028-4ec0-92bd-e3a16c4d7258.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3ArjKkD2HsNDMWr9cecb8s0aFqO/66081e37-1d1e-408c-b30b-bd7e4cf66a01.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"phyrs — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
