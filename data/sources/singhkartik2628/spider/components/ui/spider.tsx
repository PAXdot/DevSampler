"use client"

// AsciiArt — "spider", made with the 21st ASCII editor and baked
// to its exact rendered output (looping video + poster). Zero dependencies:
// one <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=cfdae720-c9bc-475c-bc9c-a54b81b3891b
export function AsciiArt({ className }: { className?: string }) {
  return (
    <video
      className={className}
      src={"https://assets.21st.dev/ascii-recipes/videos/user_3KNsv3rHgB4kmeHtMSjWWPEVv3e/4bbaf881-1872-4fb0-9204-72a406d94d2e.mp4"}
      poster={"https://assets.21st.dev/ascii-recipes/thumbnails/user_3KNsv3rHgB4kmeHtMSjWWPEVv3e/44153cd3-268f-42cc-a779-e721014dbe01.webp"}
      autoPlay
      loop
      muted
      playsInline
      aria-label={"spider — animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  )
}
